/**
 * Minimal in-memory fixed-window rate limiter, keyed by IP.
 *
 * Good enough for a single-region Vercel deployment of a low-traffic
 * intake page (state resets on cold starts). For stronger guarantees,
 * swap in Upstash Ratelimit or a Supabase-backed counter.
 */
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_WINDOW = 5;

const hits = new Map<string, { count: number; windowStart: number }>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    hits.set(key, { count: 1, windowStart: now });
    return false;
  }

  entry.count += 1;
  if (hits.size > 5000) hits.clear(); // crude memory guard
  return entry.count > MAX_PER_WINDOW;
}
