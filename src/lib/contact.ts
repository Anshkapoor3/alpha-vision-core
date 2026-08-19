import { z } from "zod";

/** Contact form fields shared by the homepage and /contact forms. */
export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
  company?: string;
  inquiryType?: string;
  areaOfInterest?: string;
};

/** Zod schema used to validate payloads both client-side and server-side. */
export const contactPayloadSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().email("Invalid email format"),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s+\-()]{10,}$/, "Valid phone number required"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
  company: z.string().trim().optional(),
  inquiryType: z.string().trim().optional(),
  areaOfInterest: z.string().trim().optional(),
});

/**
 * Canonical shape of a contact submission AFTER validation by
 * `contactPayloadSchema`. This is the Zod *output* type, so optional fields
 * are typed as `string | undefined`. Server handlers should prefer this over
 * the hand-written `ContactPayload` type so that `exactOptionalPropertyTypes`
 * stays satisfied when assigning `safeParse` results.
 */
export type ContactPayloadParsed = z.output<typeof contactPayloadSchema>;

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string; status: number };

/**
 * Frontend API integration layer for contact form submissions.
 *
 * ## Backend contract (required)
 *
 * Forms POST a `ContactPayload` JSON body to the endpoint below and
 * report success **only** when it responds with HTTP 2xx. The endpoint
 * must be a real server route / service that persists or forwards the
 * submission (email provider, CRM, webhook, database, etc.).
 *
 * ### Expected request
 * ```
 * POST {CONTACT_ENDPOINT}
 * Content-Type: application/json
 *
 * {
 *   "name": "John Smith",
 *   "email": "john@example.com",
 *   "phone": "+1 555 0134",
 *   "message": "…",
 *   "company": "Acme",          // optional
 *   "inquiryType": "general",   // optional
 *   "areaOfInterest": "Cloud"   // optional
 * }
 * ```
 *
 * ### Expected responses
 * - `2xx` → success (form shows success state)
 * - `4xx` → validation/business error (`{ "error": "message" }` preferred)
 * - `5xx` → server error (`{ "error": "message" }` preferred)
 *
 * ### Configuration
 * Set the **public** variable `VITE_CONTACT_ENDPOINT` to point this at a
 * real backend. Defaults to `/api/contact`, which the hosting server must
 * implement. This variable is public and must NEVER contain API keys,
 * SMTP credentials, passwords, or any private secret. A server-side proxy
 * must hold the actual email/CRM credentials.
 *
 * Private secrets (SMTP, API keys) must stay in server-only env vars and
 * be used inside the backend endpoint — never in the browser.
 */
const CONTACT_ENDPOINT: string = (() => {
  const fromEnv = import.meta.env?.["VITE_CONTACT_ENDPOINT"] as string | undefined;
  return fromEnv && fromEnv.trim().length > 0 ? fromEnv.trim() : "/api/contact";
})();

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return { ok: true };
    }

    let message = `Submission failed (${response.status}).`;
    try {
      const body = (await response.json()) as { error?: string };
      if (body?.error) message = body.error;
    } catch {
      // non-JSON error body; keep default message
    }

    return { ok: false, error: message, status: response.status };
  } catch {
    return {
      ok: false,
      error: "Network error. Please check your connection and try again.",
      status: 0,
    };
  }
}