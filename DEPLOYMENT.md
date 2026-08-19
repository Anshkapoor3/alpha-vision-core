# Deployment — Contact Form API

This document describes the production `/api/contact` endpoint, the email
provider it integrates with, the required server-only environment variables,
and the security/operational behavior to configure at deploy time.

## Provider

The contact submission is delivered through **Resend** (https://resend.com),
a real transactional email provider, via its REST API
(`https://api.resend.com/emails`). There is no SMTP involved, which makes it
compatible with the cold-start constraints of the existing **TanStack Start +
Nitro** stack deployed to **Vercel** (Node serverless functions) — no
long-lived connections are required.

> If Resend is not already in use, sign up at https://resend.com, create an
> API key (it begins with `re_...`), and verify a sender domain/address.

## Architecture

```
src/components/alpha/Contact.tsx            ─┐
src/pages/ContactPage.tsx                   ─┤  unchanged UI; POST to /api/contact
src/lib/contact.ts                         ─┘
                                            ── shared Zod schema + public endpoint path
src/routes/api/contact.ts                  ─── POST handler: validate / rate-limit / deliver
src/server/contact-mailer.ts               ─── server-only: reads process.env, calls Resend
src/server/rate-limiter.ts                 ─── server-only: in-memory per-IP rate limiter
```

- Server-only code lives under `src/server/`. The Vite `importProtection` plugin
  configured in `vite.config.ts` prevents client code from importing anything
  under `src/server`, so provider credentials can never reach the browser.
- All secrets are read from `process.env` (server-only) and are **never**
  inlined into the client bundle. The only browser-visible contact variable is
  `VITE_CONTACT_ENDPOINT` (a public URL path, not a secret); it defaults to
  `/api/contact`.
- No `npm install` of an email SDK is required: Resend is called over HTTPS
  using the platform `fetch`, keeping the serverless bundle small.

## Required environment variables (server-only)

| Variable                      | Required | Description                                              |
| ----------------------------- | -------- | -------------------------------------------------------- |
| `CONTACT_EMAIL_PROVIDER_KEY` | yes      | Resend API key (begins with `re_...`).                   |
| `CONTACT_EMAIL_TO`           | yes      | Recipient address that receives contact form submissions.|
| `CONTACT_EMAIL_FROM`         | yes      | Verified sender address used by Resend to send mail.     |

## Optional environment variables

| Variable                    | Default   | Description                                            |
| --------------------------- | --------- | ------------------------------------------------------ |
| `CONTACT_MAX_BODY_BYTES`   | `65536`   | Maximum accepted request body size in bytes.           |
| `CONTACT_RATE_LIMIT_MAX`   | `5`       | Max submissions per client IP per window.              |
| `CONTACT_RATE_LIMIT_WINDOW_MS` | `60000` | Rate-limit window in milliseconds.                     |

## Configuring Vercel

1. Open **Project Settings → Environment Variables**.
2. Add the three required variables above (and any optional overrides), scoped to
   **Production** (and, if desired, Preview/Deployment environments).
3. **Do not** prefix these with `VITE_` — they are server-only. The public
   `VITE_CONTACT_ENDPOINT` may be left unset so the form posts to the built-in
   `/api/contact` route.
4. Redeploy so the server environment picks up the new variables.

## API behavior (`POST /api/contact`)

| Status | Condition                                                       |
| ------ | --------------------------------------------------------------- |
| `201`  | The message was accepted by Resend (provider returned an `id`).  |
| `400`  | Invalid `Content-Type`, malformed JSON, or Zod validation fail. |
| `413`  | Request body exceeds `CONTACT_MAX_BODY_BYTES`.                  |
| `429`  | Per-IP rate limit exceeded (response includes `Retry-After`).   |
| `500`  | Provider unavailable/rejected, or misconfigured credentials.      |

- `200`/`201` is returned **only** after the provider accepts the message —
  never for invalid/unaccepted submissions.
- No `setTimeout` or fake success: a real provider call must succeed.
- Error responses return `{ "error": "..." }` with a generic, client-safe
  message. Provider-specific error details are logged server-side only and
  never echoed to the client.

## Security measures

- **Server-side validation**: payloads are validated with the shared
  `contactPayloadSchema` (Zod) on the server; the client schema is a convenience
  only and is never trusted.
- **Payload size limits**: `Content-Length` is checked before reading the body,
  and the parsed body length is re-checked — `413` on overflow.
- **Rate limiting / abuse protection**: per-client-IP sliding window
  (`src/server/rate-limiter.ts`) with a `Retry-After` header on `429`.
- **Secret hygiene**: provider keys never leave the server; they are read from
  `process.env` and never logged. (See `.gitignore` — real `.env*` files are
  ignored so secrets cannot be committed.)
- **Output escaping**: every user field is HTML-escaped before being inserted
  into the email body, preventing injection in the deliverable HTML. The email
  **subject is static** ("New contact form submission from the Alpha website"),
  preventing header injection from user-controlled names.
- **No sensitive logging**: logs contain at most generic indicators and the
  provider's status/message. The submitter's name, email, phone, and message are
  never written to logs.
- **No false success**: only Resend acceptance yields a `2xx`; any provider
  error or network failure surfaces as `500`.

## Notes / caveats

- The in-memory rate limiter is **per server instance**. On multi-instance /
  scaled serverless deployments (e.g. Vercel Concurrency or Edge Functions),
  the limit is enforced per-instance rather than globally. It still mitigates
  bursts and script-driven spam from a single source. For strict global
  limits, replace `consumeRateLimit` with a shared store (e.g. Upstash Redis or
  a database) behind the same interface.
