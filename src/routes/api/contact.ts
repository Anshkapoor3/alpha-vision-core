import { createFileRoute } from "@tanstack/react-router";
import { contactPayloadSchema, type ContactPayloadParsed } from "@/lib/contact";
import { sendContactEmail, type DeliveryOutcome } from "@/server/contact-mailer";
import { consumeRateLimit, type RateLimitResult } from "@/server/rate-limiter";

/** Maximum accepted JSON body size (bytes). Guarded before reading the body. */
function readMaxBodyBytes(): number {
  const raw = process.env["CONTACT_MAX_BODY_BYTES"];
  if (raw === undefined || raw === "") return 65_536;
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) && n >= 1 ? n : 65_536;
}

const MAX_BODY_BYTES = readMaxBodyBytes();

function json(status: number, body: unknown, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });
}

/**
 * Best-effort client IP for rate limiting. Proxies (Vercel, Cloudflare, etc.)
 * populate these headers; we take the left-most entry as the originating IP.
 */
function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  const cfIp = request.headers.get("cf-connecting-ip")?.trim();
  if (cfIp) return cfIp;
  return "unknown";
}

export const Route = createFileRoute(
  "/api/contact" as Parameters<typeof createFileRoute>[0],
)({
  server: {
    handlers: {
      POST: async ({ request }) => {
        // --- 1. Require a JSON content type ----------------------------------------
        const contentType = request.headers.get("content-type") ?? "";
        if (!contentType.toLowerCase().startsWith("application/json")) {
          return json(400, { error: "Content-Type must be application/json" });
        }

        // --- 2. Reject oversized payloads early (before reading the body) -----------
        const contentLength = request.headers.get("content-length");
        if (contentLength !== null) {
          const length = Number(contentLength);
          if (Number.isFinite(length) && length > MAX_BODY_BYTES) {
            return json(413, { error: "Request body too large" });
          }
        }

        const clientIp = getClientIp(request);

        // --- 3. Abuse / rate limiting (per client IP) --------------------------------
        const rate: RateLimitResult = consumeRateLimit(clientIp);
        if (!rate.allowed) {
          return json(
            429,
            { error: "Too many submissions. Please try again later." },
            { "Retry-After": String(rate.retryAfterSec) },
          );
        }

        // --- 4. Read the body with a hard size cap ----------------------------------
        let text: string;
        try {
          text = await request.text();
        } catch {
          return json(400, { error: "Could not read request body" });
        }
        if (text.length > MAX_BODY_BYTES) {
          return json(413, { error: "Request body too large" });
        }

        // --- 5. Parse JSON -----------------------------------------------------------
        let body: unknown;
        try {
          body = JSON.parse(text);
        } catch {
          return json(400, { error: "Invalid JSON body" });
        }

        // --- 6. Validate against the shared Zod schema ------------------------------
        const result = contactPayloadSchema.safeParse(body);
        if (!result.success) {
          const firstIssue = result.error.issues[0];
          return json(400, {
            error: firstIssue?.message ?? "Validation failed",
          });
        }

        const payload: ContactPayloadParsed = result.data;

        // --- 7. Deliver through the real email provider -----------------------------
        // The endpoint returns success ONLY after the provider accepts the message.
        let outcome: DeliveryOutcome;
        try {
          outcome = await sendContactEmail(payload);
        } catch (error) {
          // Defensive guard: the mailer should never throw, but if it does we must
          // not report success and must not leak provider internals.
          const message = error instanceof Error ? error.message : String(error);
          console.error("[contact] Unexpected delivery error:", message);
          return json(500, {
            error:
              "Message could not be sent. Please try again later or email us directly at it.training@alphait.us",
          });
        }

        if (!outcome.success) {
          // Delivery failed — never claim success.
          return json(500, {
            error:
              "Message could not be sent. Please try again later or email us directly at it.training@alphait.us",
          });
        }

        // --- 8. Confirmed delivery / provider acceptance ----------------------------
        // Minimal, non-sensitive success body. Form data is not echoed back.
        return json(201, { ok: true });
      },
    },
  },
});
