// Server-only module. The Vite import-protection plugin blocks client code from
// importing anything under src/server, so these helpers can safely use
// Node-only APIs and hold runtime-only state.

/**
 * Simple in-memory sliding-window rate limiter used to provide reasonable
 * abuse / burst protection for the public contact endpoint.
 *
 * Implementation notes / limitations:
 *  - Counters are kept per server instance. On platforms that scale the
 *    deployment to multiple concurrent invocations (e.g. Vercel serverless /
 *    edge), the limit is therefore enforced per-instance rather than globally.
 *    This still mitigates bursts and script-driven spam from a single source,
 *    which is the primary goal for a public form.
 *  - Stale entries for inactive IPs are evicted lazily when they are accessed;
 *    active keys are reset automatically once their window expires.
 */

interface WindowEntry {
  windowStart: number; // ms timestamp of the current sliding window
  count: number;
}

const store = new Map<string, WindowEntry>();

function readEnvInt(name: string, fallback: number, min: number): number {
  const raw = process.env[name];
  if (raw === undefined || raw === "") return fallback;
  const n = Number.parseInt(raw, 10);
  if (!Number.isFinite(n) || n < min) return fallback;
  return n;
}

const WINDOW_MS = readEnvInt("CONTACT_RATE_LIMIT_WINDOW_MS", 60_000, 1_000);
const MAX_REQUESTS = readEnvInt("CONTACT_RATE_LIMIT_MAX", 5, 1);

export interface RateLimitResult {
  allowed: boolean;
  limit: number;
  remaining: number;
  retryAfterSec: number;
}

/**
 * Consume one request against the limit for `key` (typically the client IP).
 * Returns the updated allowance state. Does NOT throw.
 */
export function consumeRateLimit(key: string): RateLimitResult {
  const now = Date.now();
  const existing = store.get(key);

  // Start a fresh window if the key is unknown or its window has elapsed.
  if (!existing || now - existing.windowStart >= WINDOW_MS) {
    store.set(key, { windowStart: now, count: 1 });
    return {
      allowed: true,
      limit: MAX_REQUESTS,
      remaining: Math.max(MAX_REQUESTS - 1, 0),
      retryAfterSec: Math.ceil(WINDOW_MS / 1000),
    };
  }

  if (existing.count >= MAX_REQUESTS) {
    const retryAfterSec = Math.ceil((WINDOW_MS - (now - existing.windowStart)) / 1000);
    return {
      allowed: false,
      limit: MAX_REQUESTS,
      remaining: 0,
      retryAfterSec: Math.max(retryAfterSec, 1),
    };
  }

  existing.count += 1;
  return {
    allowed: true,
    limit: MAX_REQUESTS,
    remaining: Math.max(MAX_REQUESTS - existing.count, 0),
    retryAfterSec: Math.ceil(WINDOW_MS / 1000),
  };
}
