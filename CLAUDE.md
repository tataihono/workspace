# ev.church Project Conventions

## Tech Stack
- **Framework:** Next.js 16 (App Router) + Payload CMS 3.x (embedded)
- **Database:** PostgreSQL via `@payloadcms/db-postgres`
- **Rich Text:** Lexical via `@payloadcms/richtext-lexical`
- **Storage:** S3-compatible via `@payloadcms/storage-s3` (Railway Object Storage)
- **CSS:** Tailwind CSS 4.x
- **Language:** TypeScript (strict mode)

## TypeScript
- `strict: true` is non-negotiable
- Use Payload's generated types from `src/payload-types.ts` (gitignored, regenerated on build)
- Type access functions with `Access` from `payload`
- Use `satisfies` for exhaustiveness checks (e.g., block renderer maps)
- Define explicit interfaces for Rock API responses — no `any`

## Next.js Patterns
- **Next.js 15+:** `params` and `searchParams` are Promises — always `await` them
- `'use client'` only on interactive leaf components (menus, carousels, forms, accordions)
- All page-level components and data-fetching components are Server Components
- Use `depth: 0` or `depth: 1` on Payload Local API calls (never uncontrolled depth)
- Use `select` to return only needed fields
- Use `unstable_cache` with `revalidateTag` for ISR caching

## Payload Conventions
- Collection slugs: kebab-case plural (`team-members`, `blog-posts`)
- Block slugs: camelCase (`hero`, `content`, `cardGrid`, `cta`)
- Set `interfaceName` on all blocks for predictable generated types
- Synced collections (from Rock RMS) are read-only for non-admin users

## Styling
- Brand colors: Rich Red `#E22A30`, Brand Black `#0F0004`, Warm White `#FEFAF4`
- Fonts: Proxima Nova (primary sans), Utopia (secondary serif) via Adobe Fonts
- Container max: 80rem (1280px)
- Use Tailwind utility classes; avoid custom CSS except for design tokens

## Project Structure
- `src/collections/` — Payload collection configs
- `src/blocks/` — Payload block type definitions
- `src/components/` — React components (blocks/, layout/, cards/, forms/, media/, ui/)
- `src/access/` — Reusable access control helpers
- `src/hooks/` — Payload hooks (revalidation, defaults)
- `src/lib/` — Utilities (payload client, cache tags, Rock API client)
- `src/sync/` — Rock RMS sync logic (webhook, cron, entity mappers)
- `src/globals/` — Payload global configs (navigation, site-settings)
