# AGENTS.md

## Cursor Cloud specific instructions

This is a single Next.js 15 (App Router, React 19, Turbopack, Tailwind v4 + daisyUI) personal
portfolio site. There is no database, auth, or required environment variables.

- Package manager: npm (no lockfile is committed; `npm install` generates one locally).
- Dev server: `npm run dev` (Turbopack) serves on `http://localhost:3000`.
- Build: `npm run build` (also runs type checking).
- The `/api/github` route (`lib/github.ts`) fetches live public GitHub stats for user
  `aminzare2005`. It needs outbound network access to `api.github.com`; if unreachable it silently
  returns hardcoded fallback stats, so the page still renders.
- Lint: the `lint` script is `next lint`, but ESLint is NOT configured (no eslint config/dependency),
  so running it triggers an interactive setup prompt and is effectively unavailable without adding
  ESLint config. Type/lint safety is instead exercised via `npm run build`.
