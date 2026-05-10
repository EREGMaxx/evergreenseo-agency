# CLAUDE.md — evergreenseo-agency stack reference

Read this before writing any code for this repo. These are non-obvious constraints that will break the build or silently break production if missed.

---

## Framework
- **Next.js 14.2.x** — NOT 15. Critical difference:
  - `params` is a plain object: `{ params: { id: string } }` — NOT a Promise
  - Never use `await params` — that is Next.js 15 syntax and will break routing
  - `searchParams` is also a plain object in Next.js 14

## TypeScript / ESLint
- Strict mode. **Unused variables and imports fail the build.** Always clean up before committing.
- If you add an import, use it. If you add a param to a function, use it or prefix with `_`.

## App Router
- Using App Router (`app/` directory), not Pages Router.
- `app/robots.ts` is the **source of truth** for robots.txt — it overrides `public/robots.txt` entirely. Edit `app/robots.ts`, never `public/robots.txt`.
- `app/sitemap.ts` generates the sitemap programmatically.

## KV (Redis / Upstash-compatible)
- **Command format:** POST to the root URL with a JSON array body. REST-style URL paths do NOT work.
- Correct:
  ```ts
  fetch(KV_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${KV_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(['GET', 'my-key']),
  })
  ```
- Wrong (will fail silently): `fetch(\`${KV_URL}/get/my-key\`)`
- Commands: `['GET', key]`, `['SET', key, value]`, `['DEL', key]`, `['KEYS', pattern]`
- Values stored as JSON strings — always `JSON.stringify()` on write, `JSON.parse()` on read.

## Environment Variables (available in Vercel)
- `KV_REST_API_URL` — Redis endpoint
- `KV_REST_API_TOKEN` — Redis auth token
- `MS_TENANT_ID`, `MS_CLIENT_ID`, `MS_CLIENT_SECRET`, `MS_MAILBOX` — Microsoft Graph (email)
- `STRIPE_SECRET_KEY` — Stripe
- `VAPI_STATS_KEY` — Vapi stats auth
- `INSTANTLY_WEBHOOK_SECRET` — `evg-reply-da0cca155006c365edd19502acc18901`

## Proposals (`/proposals/[id]`)
- KV-backed, noindex, link-only access.
- `Disallow: /proposals/` is set in `app/robots.ts` — never remove it.
- `app/proposals/layout.tsx` provides a bare layout (no site nav/footer) — keep it.
- Proposal pages fire `/api/proposal-viewed/[id]` on load to mark `viewed: true` in KV.

## API Routes
- `/api/instantly-reply` — POST only, Instantly.ai webhook for cold email replies.
- `/api/proposal-viewed/[id]` — POST only, marks proposal viewed in KV.
- `/api/vapi-stats` — GET, protected by `VAPI_STATS_KEY`.

## After Any Change
1. Commit and push to `main` — Vercel auto-deploys.
2. Wait for READY state.
3. Curl the affected endpoints. Do not call it done until you have confirmed HTTP responses.
