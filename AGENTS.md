# Agent Guidelines — α-vision-core

## Project Overview
- **Stack**: TanStack Start (React 19, TanStack Router, TanStack Query) + Vite + Nitro
- **Package manager**: **bun** (uses `bunfig.toml` with supply-chain guard)
- **Styling**: Tailwind CSS v4 + shadcn/ui (new-york style, `components.json`)
- **Deployment**: Vercel (Node serverless functions)
- **Email provider**: Resend (via REST API, no SMTP)

## Key Commands
```bash
bun dev          # Dev server on port 8080 (vite dev)
bun build        # Production build (vite build)
bun build:dev    # Development build
bun preview      # Preview production build
bun lint         # ESLint (run before commit)
bun format       # Prettier --write
```

## Architecture & Conventions

### Entry Points
- `src/start.ts` — TanStack Start config (middleware: error handling + CSRF for server functions)
- `src/server.ts` — Nitro server entry; wraps SSR handler, normalizes h3 swallowed errors, renders custom 500 page
- `src/router.tsx` — Router factory with QueryClient context, scroll restoration
- `src/routeTree.gen.ts` — **Auto-generated** by `@tanstack/router-plugin`; do not edit

### Path Aliases
- `@/*` → `src/*` (configured in `tsconfig.json` and `vite.config.ts`)

### Server-Only Code
- **Location**: `src/server/**`
- **Protection**: Vite `importProtection` plugin (`vite.config.ts:40-46`) errors if client code imports `src/server/**` or `server-only`
- **Purpose**: Keeps secrets (Resend API key) out of client bundle

### Contact Form API (`POST /api/contact`)
- **Route**: `src/routes/api/contact.ts` (TanStack Start server handler)
- **Shared schema**: `src/lib/contact.ts` (Zod, used by client + server)
- **Server-only modules**:
  - `src/server/contact-mailer.ts` — reads `process.env`, calls Resend via `fetch`
  - `src/server/rate-limiter.ts` — in-memory per-IP sliding window
- **Required env vars (server-only, no `VITE_` prefix)**:
  - `CONTACT_EMAIL_PROVIDER_KEY` (Resend key `re_...`)
  - `CONTACT_EMAIL_TO`
  - `CONTACT_EMAIL_FROM`
- **Optional env vars**: `CONTACT_MAX_BODY_BYTES` (default 65536), `CONTACT_RATE_LIMIT_MAX` (default 5), `CONTACT_RATE_LIMIT_WINDOW_MS` (default 60000)
- **Rate limiter caveat**: Per-instance only; not global across Vercel concurrency

### UI Components
- shadcn/ui components in `src/components/ui/**` (generated via `components.json` aliases)
- Custom components in `src/components/alpha/**` (e.g., `Contact.tsx`)
- Pages in `src/pages/**` and routes in `src/routes/**`

### Error Handling
- `src/lib/error-capture.ts` — captures last SSR error for logging
- `src/lib/error-page.ts` — renders custom 500 HTML
- `src/start.ts` middleware catches unhandled errors in server functions
- `src/server.ts` normalizes h3 "swallowed" 500 responses

### CSRF Protection
- Enabled for server functions via `createCsrfMiddleware` in `src/start.ts:23-25`
- Filter: only applies to `handlerType === "serverFn"`

## Development Workflow
1. **Lint → Typecheck → Build** (no explicit typecheck script; `tsc --noEmit` via `bun build` or run `npx tsc --noEmit`)
2. `bun lint` before committing
3. `bun format` to fix style issues
4. Dev server runs on `http://[::]:8080` (IPv6 `::` = all interfaces)

## Gotchas / Quirks
- **No `node_modules` in repo** — use `bun install`
- **Lockfile**: `bun.lock` (text, committed)
- **Nitro output**: `.output/` and `.vinxi/` (ignored by ESLint)
- **React 19** — uses new JSX transform (`"jsx": "react-jsx"` in tsconfig)
- **Strict TypeScript** — many strict flags enabled; `noUnusedLocals/Parameters` are **off**
- **Vite `dedupe`** for React/TanStack packages to avoid multiple copies
- **LightningCSS** used as CSS transformer (`vite.config.ts:14`)
- **Route tree is generated** — run `bun dev` or `bun build` to regenerate after route changes

## Testing
- No test framework configured yet. Add tests per project conventions if needed.

## References
- `DEPLOYMENT.md` — Full contact form API spec, env vars, Vercel config, security notes
- `components.json` — shadcn/ui registry config
- `vite.config.ts` — Vite + TanStack Start + Nitro + Tailwind config