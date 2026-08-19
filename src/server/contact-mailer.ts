// Server-only module (protected by Vite import-protection: it lives under
// src/server so it can never be imported by client code).
//
// Delivers validated contact submissions through Resend, a real transactional
// email provider. Credentials are read from server-only process.env variables
// and are NEVER inlined into the client bundle.

import type { ContactPayloadParsed } from "@/lib/contact";

const RESEND_API_URL = "https://api.resend.com/emails";

export type DeliveryResult = { success: true; id?: string };
export type DeliveryFailure = { success: false; error: string };
export type DeliveryOutcome = DeliveryResult | DeliveryFailure;

/** Resolve and validate provider configuration from server-only env vars. */
function resolveConfig():
  | { ok: true; providerKey: string; to: string; from: string }
  | { ok: false; error: string } {
  const providerKey = process.env["CONTACT_EMAIL_PROVIDER_KEY"];
  const to = process.env["CONTACT_EMAIL_TO"];
  const from = process.env["CONTACT_EMAIL_FROM"];

  if (!providerKey) return { ok: false, error: "CONTACT_EMAIL_PROVIDER_KEY is not configured" };
  if (!to) return { ok: false, error: "CONTACT_EMAIL_TO is not configured" };
  if (!from) return { ok: false, error: "CONTACT_EMAIL_FROM is not configured" };

  return { ok: true, providerKey, to, from };
}

// IMPORTANT: entity strings are built via concatenation so that no HTML
// entity literal (e.g. "&") exists verbatim in the source — a content
// processor in this toolchain decodes named entities, which would otherwise
// break the escaping.
const HTML_ENTITY_MAP: Readonly<Record<string, string>> = {
  "&": "&" + "amp;",
  "<": "&" + "lt;",
  ">": "&" + "gt;",
  '"': "&" + "quot;",
  "'": "&" + "#39;",
};

/** HTML-escape a string so user input cannot inject markup into the email body. */
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (ch) => HTML_ENTITY_MAP[ch] ?? ch);
}

function fieldRows(payload: ContactPayloadParsed): Array<[string, string]> {
  return [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Company", payload.company ?? ""],
    ["Inquiry type", payload.inquiryType ?? ""],
    ["Area of interest", payload.areaOfInterest ?? ""],
  ];
}

function buildHtml(payload: ContactPayloadParsed): string {
  const items = fieldRows(payload)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#374151">${escapeHtml(label)}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Contact form submission</title>
  </head>
  <body style="margin:0;padding:24px;font-family:system-ui,Arial,sans-serif;color:#111">
    <h1 style="font-size:20px;margin:0 0 16px">New website contact form submission</h1>
    <table style="border-collapse:collapse">${items}</table>
    <h2 style="font-size:14px;margin:20px 0 4px">Message</h2>
    <p style="white-space:pre-wrap;background:#f4f4f5;padding:12px;border-radius:8px">${escapeHtml(payload.message)}</p>
  </body>
</html>`;
}

function buildText(payload: ContactPayloadParsed): string {
  const block = fieldRows(payload)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
  return `New website contact form submission\n\n${block}\n\nMessage:\n${payload.message}`;
}

/**
 * Send a single contact submission through Resend.
 *
 * Returns a structured outcome. On failure the `error` string is a generic,
 * safe-to-expose message — provider error details are logged server-side only
 * and never returned to (or derived from) the client. Sensitive form data is
 * never logged.
 */
export async function sendContactEmail(payload: ContactPayloadParsed): Promise<DeliveryOutcome> {
  const cfg = resolveConfig();
  if (!cfg.ok) {
    // Configuration problem on the server. Log it (no PII) and fail closed.
    console.error("[contact] ", cfg.error);
    return { success: false, error: "email service is not configured" };
  }

  // Static subject avoids header injection via user-controlled names.
  const subject = "New contact form submission from the Alpha website";

  // AbortSignal.timeout is available in Node 18+ / modern edge runtimes. It is
  // feature-checked via a typed cast so the build is independent of the exact
  // lib.dom version declared by the project, and degrades safely when absent.
  const abort = (AbortSignal as unknown) as { timeout?: (delay: number) => AbortSignal };
  const timeoutSignal: AbortSignal | undefined =
    typeof abort.timeout === "function" ? abort.timeout(15_000) : undefined;

  let response: Response;
  try {
    response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cfg.providerKey}`,
        "Content-Type": "application/json",
      },
      // Fail fast in a serverless context; never hang an invocation.
      signal: timeoutSignal ?? null,
      body: JSON.stringify({
        from: cfg.from,
        to: [cfg.to],
        subject,
        html: buildHtml(payload),
        text: buildText(payload),
        // Let support reply directly from their mail client to the submitter.
        reply_to: payload.email,
      }),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    // Log a generic indicator + provider-side error; never log the payload.
    console.error("[contact] Failed to reach email provider:", message);
    return { success: false, error: "email provider is unavailable" };
  }

  let parsed: { id?: string; message?: string } | null = null;
  try {
    parsed = (await response.json()) as { id?: string; message?: string };
  } catch {
    parsed = null;
  }

  if (!response.ok) {
    // Log the provider's reason (generic, not PII) server-side only.
    const providerMessage = parsed?.message ?? `HTTP ${response.status}`;
    console.error("[contact] Resend delivery failed:", providerMessage);
    return { success: false, error: "email provider rejected the message" };
  }

  if (!parsed || !parsed.id) {
    console.error("[contact] Resend returned an incomplete response.");
    return { success: false, error: "email provider returned an incomplete response" };
  }

  return { success: true, id: parsed.id };
}
