---
title: "feat: ev.church Next.js + Payload CMS Rebuild"
type: feat
status: active
date: 2026-03-22
origin: docs/brainstorms/2026-03-22-phased-build-plan-requirements.md
---

## Enhancement Summary

**Deepened on:** 2026-03-22
**Research agents used:** Architecture Strategist, Performance Oracle, Security Sentinel, Deployment Verification, TypeScript Reviewer, Best Practices Researcher, Pattern Recognition Specialist, Frontend Races Reviewer

### Key Improvements (incorporated into plan below)

1. **Use `revalidateTag` over explicit path maps** — Eliminates the implicit coupling in `revalidation-map.ts`. Tag data fetches with collection-level tags; webhook/sync handlers call `revalidateTag('campuses')` instead of maintaining a path list. (Architecture)
2. **Railway needs 1GB RAM minimum** — 512MB will OOM during bulk image sync. sharp + Payload + Next.js baseline is ~300MB, leaving insufficient headroom. (Performance)
3. **Webhook security: HMAC + defense-in-depth** — Static API key alone is insufficient. Use timing-safe HMAC-SHA256 validation, IP allowlist, obfuscated webhook path. Add `ROCK_WEBHOOK_SECRET` to env vars. (Security)
4. **Next.js 15: `params` is a Promise** — Every dynamic route (`[slug]/page.tsx`) must `await params`. Breaking change from Next.js 14. (TypeScript)
5. **Live Preview needs debouncing** — 375ms autosave with unbounded `router.refresh()` causes flicker. Debounce to 800-1000ms. (Frontend)
6. **Add `form-submissions` create lockdown** — `create: () => true` on the collection allows anyone to POST via Payload REST API, bypassing rate limits. Restrict to Local API context. (Security)
7. **Resolve cron mechanism in Phase 1** — Internal API endpoint (`POST /api/sync/trigger?secret=$CRON_SECRET`) called by external cron is cleanest. Avoids separate DB connection pool. (Architecture)
8. **Add seed data to Phase 3** — CardGrid block renderers can't be tested without synced data. Insert manual records for testing before Phase 4 sync. (Architecture)
9. **Security headers missing** — Add CSP, X-Frame-Options, HSTS, Referrer-Policy, Permissions-Policy to `next.config.mjs`. (Security)
10. **DNS cutover plan detailed** — Lower TTL 1 week before, Railway custom domain setup, cutover-day timeline, 48h old-site overlap. (Deployment)

### New Considerations Discovered

- `payload.find()` default limit is 10 — cron sync MUST use `limit: 0` or pagination, or it silently processes only 10 records per collection
- Block slugs need explicit convention (camelCase recommended: `hero`, `content`, `cardGrid`, `cta`, `accordion`, `imageGallery`, `video`, `quote`)
- `colourPreset` → `colorPreset` for American English consistency
- Orphaned `src/hooks/sync.ts` in project structure — removed
- API routes moved to `src/app/api/` (top-level, not under `(frontend)`)
- `generateMetadata` and `generateStaticParams` needed on all dynamic routes
- `webhook-events` and `webhook-dlq` collections added for dedup/observability
- PII retention policy needed for `form-submissions` (30-day auto-delete for forwarded)
- Reserved-slug validation hook on Pages collection to prevent CMS pages shadowing Next.js routes
- `error.tsx` route error boundaries for dynamic routes
- Cron sync mutex to prevent overlapping runs
- Wrap data fetches in `unstable_cache` with `revalidateTag` for precise ISR control
- Use React `cache()` for deduplication of navigation/settings across layout and page

---

# ev.church Next.js + Payload CMS Rebuild

## Overview

Full rebuild of [ev.church](https://www.ev.church) from Rock CMS (ASP.NET + Lava templates) to Next.js App Router + Payload CMS 3.x. The system has three layers: Rock RMS as the source of truth for operational church data, Payload CMS as the sole frontend data store and content authoring platform, and Next.js for server-rendered pages. Volunteers edit website content in Payload; operational data syncs automatically from Rock RMS via webhooks and cron.

**Deployment:** Single Next.js + Payload service on Railway, PostgreSQL on Railway, S3-compatible storage (Cloudflare R2 recommended), auto-deploy from `main`.

**Team:** Solo developer + AI pair programming, no hard deadline.

## Problem Statement

The current site runs on Rock CMS with Lava templates — tightly coupled to Rock's rendering engine, hard for volunteers to edit content independently, and built on aging ASP.NET WebForms. The rebuild decouples the website from Rock's rendering, gives volunteers a modern visual editor (Payload's block editor with live preview), and delivers a fast, server-rendered Next.js site while keeping Rock as the operational data source.

## Proposed Solution

8 sequential phases, each producing a deployable state on Railway. The block editor and Rock sync (phases 3-4) are prioritized early as the riskiest pieces — once proven, remaining pages (phases 5-6) become assembly work.

(see origin: `docs/brainstorms/2026-03-22-phased-build-plan-requirements.md`)

## Technical Approach

### Architecture

```
Rock RMS (church operations)                    Payload CMS (website content)
  │                                               │
  ├── Campuses                                    ├── Pages (block editor)
  ├── Events & Registrations                      ├── Blog Posts
  ├── People & Groups (team, connect groups)      ├── Announcements
  ├── Sermon Series (Content Channel #4)          ├── Navigation
  ├── Form processing (workflows)                 ├── Site Settings
  └── Images (binary files)                       └── Media uploads
  │                                               │
  ↓  webhooks + cron sync                         │ (direct authoring)
  │                                               │
  └──────────────► Payload CMS ◄──────────────────┘
                      │
                      ↓  Payload Local API (zero network overhead)
                      │
                   Next.js App Router (Server Components)
                      │
                      ↓
                   Browser
```

### Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 15.x |
| CMS | Payload CMS (embedded in Next.js) | 3.x (latest) |
| Database | PostgreSQL via `@payloadcms/db-postgres` (Drizzle ORM) | — |
| Rich Text | Lexical via `@payloadcms/richtext-lexical` | — |
| Storage | S3-compatible via `@payloadcms/storage-s3` | Cloudflare R2 |
| CSS | Tailwind CSS | 4.x |
| Image Processing | sharp | — |
| Carousels | Swiper | 11 |
| Fonts | Proxima Nova + Utopia (Adobe Fonts project `qtk2tpw`) | — |
| Hosting | Railway | — |
| Package Manager | npm (exact versions via `NPM_CONFIG_SAVE_EXACT=true`) | — |
| Node | 22.x (from devcontainer) | — |

### Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| Payload 3.x embedded in Next.js | Single deployment on Railway. Payload Local API for server-side data access with zero network overhead. |
| Lexical (not Slate) for rich text | Lexical is the recommended editor for Payload 3.x; Slate is legacy. |
| PostgreSQL (not MongoDB) | Better relational modeling for synced data with relationships (events → campuses). Payload 3.x has first-class Postgres support via Drizzle. |
| Cloudflare R2 for media storage | S3-compatible, generous free tier, no egress fees. Railway has no native object storage. |
| 7+1 block types for volunteer editor | 7 blocks from origin doc + QuoteBlock (scripture/testimonial). Maps, forms, and ministry cards are developer-placed template elements, not volunteer-reorderable blocks. (resolves spec flow gap #5) |
| Block-editor pages for Kids/Youth | Follow requirements doc, not the `ministries` collection in PAYLOAD-COLLECTIONS.md. Ministry pages are standard pages with pre-populated blocks. (resolves spec flow gap #6) |
| `form-submissions` collection added | Local storage fallback when Rock API is unavailable. Prevents lost visitor inquiries. (resolves spec flow gap #4) |
| Synced collections visible but read-only | Non-admin users can view Rock data in Payload admin (useful reference) but cannot edit. Banner explains "syncs from Rock RMS." (resolves spec flow gap #8) |

### Project Structure

```
/
├── .env.example
├── .gitignore
├── CLAUDE.md                           # AI assistant conventions
├── next.config.mjs                     # withPayload wrapper
├── payload.config.ts                   # Central Payload config
├── tailwind.config.ts                  # Tailwind 4.x config
├── tsconfig.json
├── package.json
├── docs/
│   ├── initial-build/                  # Existing reference docs (preserved)
│   ├── brainstorms/
│   └── plans/
├── src/
│   ├── app/
│   │   ├── (frontend)/                 # Public site routes
│   │   │   ├── layout.tsx              # Root layout (header/footer)
│   │   │   ├── page.tsx                # Homepage
│   │   │   ├── [slug]/page.tsx         # Generic CMS pages
│   │   │   ├── campus/[slug]/page.tsx  # Campus template
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx            # Blog listing
│   │   │   │   ├── [slug]/page.tsx     # Blog post
│   │   │   │   └── page/[num]/page.tsx # Paginated listing
│   │   ├── api/                        # API routes (top-level, not under route group)
│   │   │   ├── health/route.ts         # Health check
│   │   │   ├── webhooks/rock-rms/[token]/route.ts  # Rock webhook (obfuscated path)
│   │   │   ├── sync/trigger/route.ts   # Cron sync trigger (protected by CRON_SECRET)
│   │   │   ├── contact/route.ts        # Contact form handler
│   │   │   ├── signup/route.ts         # Signup form handler
│   │   │   ├── preview/route.ts        # Live preview entry
│   │   │   └── preview/exit/route.ts   # Exit draft mode
│   │   └── (payload)/                  # Payload admin routes
│   │       ├── admin/[[...segments]]/page.tsx
│   │       └── api/[...slug]/route.ts
│   ├── blocks/                         # Block type definitions
│   │   ├── HeroBlock.ts
│   │   ├── ContentBlock.ts
│   │   ├── CTABlock.ts
│   │   ├── CardGridBlock.ts
│   │   ├── AccordionBlock.ts
│   │   ├── ImageGalleryBlock.ts
│   │   ├── VideoBlock.ts
│   │   └── QuoteBlock.ts
│   ├── collections/                    # Payload collection configs
│   │   ├── synced/
│   │   │   ├── Campuses.ts
│   │   │   ├── Events.ts
│   │   │   ├── TeamMembers.ts
│   │   │   ├── SermonSeries.ts
│   │   │   ├── ConnectGroups.ts
│   │   │   └── Registrations.ts
│   │   ├── content/
│   │   │   ├── Pages.ts
│   │   │   ├── BlogPosts.ts
│   │   │   ├── Announcements.ts
│   │   │   └── FormSubmissions.ts
│   │   ├── Media.ts
│   │   └── Users.ts
│   ├── globals/
│   │   ├── Navigation.ts
│   │   └── SiteSettings.ts
│   ├── access/                         # Reusable access control helpers
│   │   └── roles.ts                    # isAdmin, isContentLead, isEditor, publishedOnly
│   ├── hooks/                          # Payload hooks
│   │   └── revalidate.ts              # ISR revalidation afterChange hooks
│   ├── sync/                           # Rock RMS sync logic
│   │   ├── webhook-handler.ts
│   │   ├── cron-sync.ts
│   │   ├── entity-mappers/
│   │   │   ├── campus.ts
│   │   │   ├── event.ts
│   │   │   ├── team-member.ts
│   │   │   ├── sermon-series.ts
│   │   │   ├── connect-group.ts
│   │   │   └── registration.ts
│   │   └── image-sync.ts
│   ├── components/                     # React components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── NavDropdown.tsx
│   │   ├── blocks/                     # Block renderers (match src/blocks/)
│   │   │   ├── RenderBlocks.tsx        # Block dispatcher
│   │   │   ├── HeroBanner.tsx
│   │   │   ├── ContentSection.tsx
│   │   │   ├── CTABanner.tsx
│   │   │   ├── CardGrid.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── ImageGallery.tsx
│   │   │   ├── VideoEmbed.tsx
│   │   │   └── QuoteBlock.tsx
│   │   ├── cards/
│   │   │   ├── CampusCard.tsx
│   │   │   ├── EventCard.tsx
│   │   │   └── TeamMemberCard.tsx
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx
│   │   │   └── SignupForm.tsx
│   │   ├── media/
│   │   │   ├── MapEmbed.tsx
│   │   │   └── ImageCarousel.tsx
│   │   ├── ui/
│   │   │   ├── CTAButton.tsx
│   │   │   └── Badge.tsx
│   │   └── LivePreview.tsx             # RefreshRouteOnSave wrapper
│   ├── lib/
│   │   ├── payload.ts                  # getPayload helper
│   │   ├── payload-queries.ts          # Cached data fetchers (unstable_cache + revalidateTag)
│   │   ├── cache-tags.ts              # CacheTags taxonomy
│   │   ├── rock-api.ts                # Rock RMS API client (typed responses, HTTPS validation)
│   │   └── utils.ts
│   └── styles/
│       └── globals.css                 # Tailwind imports + design tokens
├── scripts/
│   └── sync-rock-to-payload.ts         # Cron sync entry point
└── migrations/                         # Payload/Drizzle migrations
```

---

### Implementation Phases

#### Phase 1: Foundation

**Goal:** Deployable Next.js + Payload CMS shell on Railway with database and storage connected.

**Tasks:**

- [ ] Initialize project with `npx create-payload-app@latest` selecting Next.js, PostgreSQL, and TypeScript
- [ ] Configure `payload.config.ts`:
  - `@payloadcms/db-postgres` with `DATABASE_URL`
  - `@payloadcms/richtext-lexical` editor
  - `@payloadcms/storage-s3` for Cloudflare R2
  - `sharp` for image processing
  - `Users` collection with `roles` field (`admin`, `content-lead`, `editor`) using `saveToJWT: true`
  - `Media` upload collection with responsive `imageSizes` (thumbnail 400w, medium 900w, large 1200w, hero 1920w) + WebP variants, focal point enabled
- [ ] Configure `next.config.mjs` with `withPayload` wrapper, add R2 domain to `images.remotePatterns`
- [ ] Set up Tailwind CSS 4.x with design tokens from `DESIGN-TOKENS.md`:
  - Primary: Rich Red `#E22A30` (NOT `#d22227` — brand guide update)
  - Brand black: `#0F0004` (not pure black)
  - Full color palette: deep red, dark brown, light red tints, neutrals, warm white `#FEFAF4`, program accents
  - Typography: Proxima Nova (primary sans) + Utopia (secondary serif) via Adobe Fonts `qtk2tpw`
  - Type scale: Display 60px through XS 12px with specified line heights
  - Container max: 80rem, border radii, transitions, breakpoints (Tailwind defaults)
- [ ] Create `.env.example` with all required env vars (document minimum strength requirements):
  - `DATABASE_URL`, `PAYLOAD_SECRET` (32+ chars, `openssl rand -base64 32`), `NEXT_PUBLIC_SITE_URL`
  - `S3_BUCKET`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`, `S3_REGION`, `S3_ENDPOINT`
  - `ROCK_API_URL`, `ROCK_API_KEY`
  - `ROCK_WEBHOOK_SECRET` (for webhook HMAC validation)
  - `PREVIEW_SECRET` (32+ chars)
  - `CRON_SECRET` (for protected sync trigger endpoint)
  - `GOOGLE_MAPS_API_KEY` (restrict to Maps JS API + ev.church domain)
  - `NEXT_PUBLIC_GA_ID` (G-1R09W3HMNX)
- [ ] Create `.gitignore` (node_modules, .env, .env.local, .env.*.local, .next, dist, payload-types.ts, migrations)
- [ ] Create `CLAUDE.md` with project conventions (include: `strict: true` in tsconfig, `'use client'` only in interactive leaf components, camelCase block slugs, `depth: 0` by default on Local API calls)
- [ ] Ensure `tsconfig.json` has `strict: true` (non-negotiable for type safety)
- [ ] Add `"build": "payload generate:types && next build"` to package.json (payload-types.ts is gitignored, must regenerate on build)
- [ ] Configure security headers in `next.config.mjs`: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS
- [ ] Set up Railway project: create service (Next.js), provision PostgreSQL (1GB+ RAM for service — 512MB will OOM during image sync), configure env vars
- [ ] Configure Railway auto-deploy from `main` branch
- [ ] Create health check endpoint: `GET /api/health` returning `{ status: 'ok', memory: { heapUsedMB, rssMB } }` — include `process.memoryUsage()` for early OOM warning
- [ ] **Resolve cron mechanism**: Use internal API endpoint `POST /api/sync/trigger?secret=$CRON_SECRET` called by external cron service (cron-job.org). This reuses the existing Payload instance and avoids a second database connection pool.
- [ ] **Verify Rock RMS webhook format** (resolves spec flow gap #3): send a test webhook from Rock to a RequestBin, capture the actual payload structure. Document the real format in `src/sync/README.md`. This takes 30 minutes and eliminates a major Phase 4 risk.
- [ ] Add startup validation: `ROCK_API_URL` must start with `https://`, `PAYLOAD_SECRET` must be 32+ chars, no sensitive vars prefixed with `NEXT_PUBLIC_`
- [ ] Deploy to Railway, verify admin panel loads at `/admin`

**Files created:**

```
payload.config.ts
next.config.mjs
tailwind.config.ts
tsconfig.json
package.json
.env.example
.gitignore
CLAUDE.md
src/app/(payload)/admin/[[...segments]]/page.tsx
src/app/(payload)/api/[...slug]/route.ts
src/app/(frontend)/layout.tsx
src/app/(frontend)/page.tsx             # Placeholder "Coming soon"
src/app/(frontend)/api/health/route.ts
src/collections/Users.ts
src/collections/Media.ts
src/access/roles.ts                     # isAdmin, isContentLead, isEditor, publishedOnly
src/styles/globals.css
```

**Success criteria:** Railway deployment accessible, Payload admin loads, can create a user, can upload an image to R2 and see it served.

---

#### Phase 2: Layout Shell + Design System

**Goal:** Working site shell with header, footer, navigation, and typography. A visitor sees a real-looking site skeleton.

**Tasks:**

- [ ] Build `Header` component (spec: `docs/initial-build/components/layout/header.md`):
  - Fixed top, 80px mobile / 100px desktop
  - Transparent at page top, transitions to `bg-white/50 backdrop-blur-[12px]` on scroll
  - Logo (left), primary nav (center/right)
  - Visit dropdown (4 items), Next Steps dropdown (5 items)
  - Mobile hamburger menu with slide-out panel
  - Data source: `navigation` global (mainNav) — hardcode initially, wire to global in Phase 7
- [ ] Build `Footer` component (spec: `docs/initial-build/components/layout/footer.md`):
  - 4 link columns: About, Next Steps, Sections, Campuses
  - Social icons (Facebook, Instagram, YouTube, Spotify, Apple Podcasts)
  - Copyright + mailing address
  - Data source: `navigation` global (footerNav) + `site-settings` global — hardcode initially
- [ ] Build `PageLayout` wrapper in root `(frontend)/layout.tsx`:
  - HTML head: meta tags, font loading, analytics placeholder
  - Header + main content + Footer
  - Layout variants: FullWidth, FullWidthNarrow (max-width constraint)
- [ ] Build `CTAButton` component (spec: `docs/initial-build/components/cta/cta-button.md`):
  - Variants: primary (red bg, white text), secondary (outlined), text (underline link)
  - Sizes: sm, md, lg
  - Supports both `<a>` and `<button>` via polymorphic pattern
- [ ] Set up Adobe Fonts loading for Proxima Nova and Utopia (TypeKit project `qtk2tpw`)
- [ ] Build a styled placeholder homepage demonstrating: header, footer, typography scale, button variants, responsive behavior
- [ ] Deploy to Railway, test on mobile and desktop

**Files created:**

```
src/components/layout/Header.tsx
src/components/layout/Footer.tsx
src/components/layout/MobileMenu.tsx
src/components/layout/NavDropdown.tsx
src/components/ui/CTAButton.tsx
```

**Success criteria:** Site loads with real header and footer, navigation works including dropdowns and mobile menu, typography renders with correct fonts, responsive across breakpoints.

---

#### Phase 3: Payload Collections + Block Editor

**Goal:** All Payload collections defined, block editor functional, content authoring works end-to-end.

**Tasks:**

**Synced collections** (field schemas from `docs/initial-build/PAYLOAD-COLLECTIONS.md`):

- [ ] `Campuses` — all fields per spec, `rockId` unique indexed, `lastSyncedAt`, read-only for non-admins with admin description banner "This data syncs automatically from Rock RMS"
- [ ] `Events` — all fields per spec, `rockEventId` indexed, relationship to `campuses`, `registrationStatus` select (open/full/closed/coming-soon)
- [ ] `TeamMembers` — all fields per spec, `rockPersonId` indexed, `teamGroup` select (staff/leadership/apprentices)
- [ ] `SermonSeries` — all fields per spec, `rockContentItemId` indexed
- [ ] `ConnectGroups` — all fields per spec, `rockGroupId` indexed, relationship to `campuses`
- [ ] `Registrations` — all fields per spec, `rockRegistrationId` indexed, relationship to `events`

**Content collections:**

- [ ] `Pages` — title, slug (unique), metaTitle, metaDescription, ogImage, `blocks` field (see block types below), SEO fields. Enable `versions.drafts` with `autosave: true`, `schedulePublish: true`, `validate: false`. Enable `versions` with `maxPerDoc: 100`. Access: read=publishedOnly, create=isContentLead, update=isEditor, delete=isAdmin.
- [ ] `BlogPosts` — all fields per PAYLOAD-COLLECTIONS.md. Relationships to `team-members` (author), `sermon-series`, `campuses`. Versions + drafts enabled. Access: create/update=isEditor.
- [ ] `Announcements` — all fields per spec including `startDate`, `endDate`, `isActive`. Access: create/update=isEditor.
- [ ] `FormSubmissions` (new, resolves spec flow gap #4) — `formType` (select: contact/signup), `data` (JSON, validated by typed Zod schemas per formType), `status` (select: pending/forwarded/failed), `submittedAt` (date), `errorMessage` (text). Access: read=isContentLead, create=internal context only (prevent direct Payload REST API submissions — check for `context.formSubmission` flag). Hidden from volunteer editors in admin sidebar. **PII retention:** auto-delete `forwarded` submissions after 30 days.
- [ ] `WebhookEvents` — `webhookId` (unique indexed), `entityType`, `status` (processing/completed/failed), `error`, `receivedAt`. For webhook dedup and observability. Access: read=isAdmin only.
- [ ] `WebhookDLQ` — `rawPayload`, `entityType`, `error`, `attemptCount`, `resolved` (checkbox). Dead letter queue for failed webhooks. Access: read=isAdmin only.

**Globals:**

- [ ] `Navigation` — `mainNav` array (label, url, children[]), `footerNav` array (heading, links[]). Access: read=() => true, update=isContentLead.
- [ ] `SiteSettings` — siteName, logo, favicon, contactEmail, contactPhone, mailingAddress (group), socialLinks (array: platform select + url), analyticsId. Access: read=() => true, update=isContentLead.

**Block types** (8 total — origin's 7 + QuoteBlock):

- [ ] `HeroBlock` — heading, subheading, backgroundImage (upload → media), ctaButtons[] (label, url, variant). `interfaceName: 'HeroBlock'`.
- [ ] `ContentBlock` — heading, richText (Lexical), image (optional upload), alignment (left/center/right). For generic text sections.
- [ ] `CTABlock` — heading, text, buttons[] (label, url, variant), colorPreset (select: primary/light/dark mapping to brand colors).
- [ ] `CardGridBlock` — heading, dataSource (select: campuses/events/team-members/connect-groups), campusFilter (optional relationship → campuses), layout (select: 2col/3col).
- [ ] `AccordionBlock` — heading, items[] (title, content as richText).
- [ ] `ImageGalleryBlock` — heading, images[] (image upload, caption).
- [ ] `VideoBlock` — heading, videoUrl (text, YouTube URL).
- [ ] `QuoteBlock` — text (textarea), attribution (text), variant (select: scripture/testimonial). Serif font styling.

**Page templates** (pre-populated block configurations for "New Page"):

- [ ] Standard template: HeroBlock + ContentBlock + CTABlock
- [ ] Ministry template: HeroBlock + ContentBlock (intro) + ContentBlock x3 (programs) + AccordionBlock (FAQ) + CTABlock
- [ ] Seasonal Event template: HeroBlock + ContentBlock (services) + ContentBlock (story) + AccordionBlock (FAQ) + CTABlock
- [ ] Simple Content template: ContentBlock

**Block renderer components:**

- [ ] `RenderBlocks.tsx` — switch/dispatcher that maps block `blockType` to the correct React component
- [ ] `HeroBanner.tsx` — full-width hero with image background, overlay text, CTA buttons
- [ ] `ContentSection.tsx` — heading + rich text + optional image, alignment variants
- [ ] `CTABanner.tsx` — colored banner with heading, text, buttons using color presets
- [ ] `CardGrid.tsx` — fetches from Payload Local API based on `dataSource`, renders appropriate card component
- [ ] `Accordion.tsx` — collapsible panels, animated expand/collapse
- [ ] `ImageGallery.tsx` — responsive image grid
- [ ] `VideoEmbed.tsx` — responsive YouTube embed (lite-youtube-embed or privacy-respecting facade)
- [ ] `QuoteBlock.tsx` — styled scripture/testimonial with Utopia serif font

**Card components:**

- [ ] `CampusCard.tsx` — image, name, service times, address, link
- [ ] `EventCard.tsx` — image, title, date/time, campus, registration status badge
- [ ] `TeamMemberCard.tsx` — circular photo, name, role

**Seed navigation and site settings globals with real data from SITE-MAP.md.**

- [ ] **Add seed data for synced collections** — insert 2-3 manual records each for campuses, events, team-members so CardGrid and card components can be tested before Phase 4 sync
- [ ] Add `beforeValidate` hook on Pages collection: reject slugs matching reserved routes (`visit`, `about`, `contact`, `campus`, `blog`, `kids`, `youth`, `give`, `privacy`, `hs`, `explaining-christianity`, `newish`, `connect-groups`, `vision`, `easter`, `admin`, `api`)
- [ ] Add `error.tsx` route error boundaries for `(frontend)` route group and dynamic routes (`[slug]`, `campus/[slug]`, `blog/[slug]`)
- [ ] Deploy, verify: can create a page in admin with blocks, save draft, publish, see rendered page.

**Files created:**

```
src/collections/synced/Campuses.ts
src/collections/synced/Events.ts
src/collections/synced/TeamMembers.ts
src/collections/synced/SermonSeries.ts
src/collections/synced/ConnectGroups.ts
src/collections/synced/Registrations.ts
src/collections/content/Pages.ts
src/collections/content/BlogPosts.ts
src/collections/content/Announcements.ts
src/collections/content/FormSubmissions.ts
src/globals/Navigation.ts
src/globals/SiteSettings.ts
src/blocks/HeroBlock.ts
src/blocks/ContentBlock.ts
src/blocks/CTABlock.ts
src/blocks/CardGridBlock.ts
src/blocks/AccordionBlock.ts
src/blocks/ImageGalleryBlock.ts
src/blocks/VideoBlock.ts
src/blocks/QuoteBlock.ts
src/components/blocks/RenderBlocks.tsx
src/components/blocks/HeroBanner.tsx
src/components/blocks/ContentSection.tsx
src/components/blocks/CTABanner.tsx
src/components/blocks/CardGrid.tsx
src/components/blocks/Accordion.tsx
src/components/blocks/ImageGallery.tsx
src/components/blocks/VideoEmbed.tsx
src/components/blocks/QuoteBlock.tsx
src/components/cards/CampusCard.tsx
src/components/cards/EventCard.tsx
src/components/cards/TeamMemberCard.tsx
src/app/(frontend)/[slug]/page.tsx      # Generic CMS page renderer
```

**Success criteria:** Can create a page in Payload admin with all 8 block types, save as draft (not visible to public), preview content, publish (visible to public), view version history, restore a previous version.

---

#### Phase 4: Rock RMS Sync

**Goal:** All 6 synced collections populated with live Rock data. Webhook and cron sync operational. ISR revalidation working.

**Tasks:**

**Rock API client:**

- [ ] Build `src/lib/rock-api.ts` — authenticated REST client for Rock RMS API. Methods for each entity type using the exact API endpoints from `ROCK-RMS-SYNC.md`.

**Entity mappers** (one per synced collection):

- [ ] `campus.ts` — maps Rock Campus fields to Payload `campuses` schema per field mapping table
- [ ] `event.ts` — maps EventItemOccurrence, parses iCal schedule to JSON, derives `registrationStatus` logic:
  - `coming-soon`: startDate > now
  - `open`: startDate <= now <= endDate AND currentCount < capacity
  - `full`: currentCount >= capacity
  - `closed`: endDate < now OR isActive = false
- [ ] `team-member.ts` — maps Group Members from groups 29482/29485/29486, maps group ID to `teamGroup` enum
- [ ] `sermon-series.ts` — maps ContentChannelItems from Channel #4, filters Status == 2 (Approved)
- [ ] `connect-group.ts` — maps Groups of connect group type, extracts leaders by IsLeader role
- [ ] `registration.ts` — maps RegistrationInstances, calculates `currentCount`

**Image sync pipeline** (`src/sync/image-sync.ts`):

- [ ] Detect image GUID fields during entity sync
- [ ] Check Payload media library for existing record by `rockImageGuid` metadata
- [ ] If new/changed: download highest resolution (1920w) from `https://rock.ev.church/GetImage.ashx?Guid={guid}&w=1920`
- [ ] Upload to Payload media library with `rockImageGuid` metadata and derived alt text
- [ ] Payload + sharp automatically generates responsive variants (thumbnail, medium, large, hero, WebP)
- [ ] Return Payload media document ID for linking to parent entity

**ISR revalidation map** (`src/sync/revalidation-map.ts`, resolves spec flow gap #2):

- [ ] `campuses` change → revalidate `/`, `/visit`, `/contact`, `/campus/[slug]` for affected campus
- [ ] `events` change → revalidate `/`, `/campus/[slug]` for affected campus's slug, `/easter`
- [ ] `team-members` change → revalidate `/about`
- [ ] `sermon-series` change → revalidate `/`
- [ ] `connect-groups` change → revalidate `/connect-groups`
- [ ] `registrations` change → revalidate `/`, relevant `/campus/[slug]`

**Webhook endpoint** (`src/app/(frontend)/api/webhooks/rock-rms/route.ts`):

- [ ] `POST /api/webhooks/rock-rms/{WEBHOOK_PATH_TOKEN}` (obfuscated path via env var)
- [ ] Validate HMAC-SHA256 signature using `ROCK_WEBHOOK_SECRET` with `crypto.timingSafeEqual`. If Rock doesn't support HMAC, use defense-in-depth: static API key (timing-safe compare) + IP allowlist for Rock's outbound IPs
- [ ] Parse entity type and operation from payload (adapt to actual Rock webhook format verified in Phase 1)
- [ ] **Idempotency check:** generate deterministic key from `entityType + entityId + timestamp`, check against `webhook-events` collection. Skip already-processed webhooks (return 200 so Rock doesn't retry).
- [ ] For create/update: fetch full entity from Rock API → map → **compare `lastModifiedDateTime` against existing `lastSyncedAt`** (skip if incoming is older, last-write-wins) → upsert into Payload with `context: { disableRevalidate: true, syncOperation: true }`
- [ ] For delete: soft-delete or deactivate in Payload
- [ ] After successful upsert: trigger ISR revalidation using `revalidateTag` for affected collection tags. Fire-and-forget cache warming for critical paths.
- [ ] Error handling: log all events to `webhook-events` collection. On failure, retry 3x with exponential backoff (1s, 4s, 9s). Exhausted retries → write to `webhook-dlq` collection.
- [ ] Rate limiting: process webhooks sequentially per entity type via in-memory mutex to avoid race conditions

**Cron sync** (`scripts/sync-rock-to-payload.ts`):

- [ ] Entry point for `*/15 * * * *` cron execution
- [ ] **Add sync mutex:** check `sync_in_progress` flag at start, set false in `finally()`. Prevents overlapping runs if sync takes > 15 minutes.
- [ ] For each entity type: fetch all active records from Rock, fetch all from Payload (**use `limit: 0` or paginate explicitly** — Payload's default limit is 10, which silently breaks reconciliation), diff on `rockId` + `lastModifiedDateTime` using Map-based lookup (O(n), not Array.find O(n^2))
- [ ] Create records that exist in Rock but not Payload
- [ ] Update records where Rock's `lastModifiedDateTime` > Payload's `lastSyncedAt`
- [ ] Deactivate records in Payload that no longer exist in Rock
- [ ] Update `lastSyncedAt` on all synced records
- [ ] Trigger ISR revalidation for affected paths (batch revalidation, not per-record)
- [ ] Log sync summary: created, updated, deactivated, unchanged counts per entity type
- [ ] Retry failed syncs up to 3 times with exponential backoff

**Payload afterChange hooks** (`src/hooks/revalidate.ts`):

- [ ] For content collections (pages, blog-posts, announcements): revalidate the document's own path on publish using `revalidatePath` from `next/cache`
- [ ] For synced collections: revalidate all paths in the revalidation map for that collection

**Initial data seed:**

- [ ] Run first full cron sync to populate all 6 synced collections from live Rock data
- [ ] Verify data appears correctly in Payload admin
- [ ] Verify images synced to R2 and display correctly

**Cron setup on Railway:**

- [ ] Determine approach: Railway cron service, separate worker, or external trigger (cron-job.org hitting a protected API endpoint)
- [ ] Configure and test 15-minute sync cycle

**Files created:**

```
src/lib/rock-api.ts
src/sync/webhook-handler.ts
src/sync/cron-sync.ts
src/sync/image-sync.ts
src/sync/revalidation-map.ts
src/sync/entity-mappers/campus.ts
src/sync/entity-mappers/event.ts
src/sync/entity-mappers/team-member.ts
src/sync/entity-mappers/sermon-series.ts
src/sync/entity-mappers/connect-group.ts
src/sync/entity-mappers/registration.ts
src/sync/README.md                      # Documents actual Rock webhook format
src/hooks/revalidate.ts
src/app/(frontend)/api/webhooks/rock-rms/route.ts
scripts/sync-rock-to-payload.ts
```

**Success criteria:** All 6 synced collections populated with real Rock data. Change a campus service time in Rock → data appears in Payload within 5 minutes (cron) or 30 seconds (webhook). Images from Rock display correctly via R2.

---

#### Phase 5: Core Pages (High-Traffic)

**Goal:** The 5 highest-traffic pages built and rendering real data. Site looks like a real church website.

**Reference docs:** Each page has a detailed spec at `docs/initial-build/pages/<page>/`.

**Tasks:**

- [ ] **Homepage** (`src/app/(frontend)/page.tsx`):
  - Hero banner (editable in Payload)
  - Announcement slot — query `announcements` where `startDate <= now <= endDate AND isActive = true`, render if found. **Set ISR revalidation to 60 seconds** for homepage to handle announcement auto-appear/disappear within acceptable latency (resolves spec flow gap #1)
  - Welcome text (ContentBlock)
  - Upcoming events (CardGridBlock → events, limit 3-4)
  - Latest sermon series (from `sermon-series` collection, most recent)
  - Campus cards (CardGridBlock → campuses)
  - CTA banner
  - Reference: `docs/initial-build/pages/homepage/`

- [ ] **Visit page** (`/visit`):
  - Hero banner
  - What to expect content sections
  - Kids ministry info
  - Campus cards
  - Contact/visitor form placeholder (form built in Phase 8)
  - Reference: `docs/initial-build/pages/visit/`

- [ ] **About page** (`/about`):
  - Mission text sections
  - Team grid: fetch `team-members` grouped by `teamGroup` (Staff → Leadership → Apprentices), render `TeamMemberCard` grid. Anchor: `#our-team`
  - Beliefs accordion. Anchor: `#what-we-believe`
  - Reference: `docs/initial-build/pages/about/`

- [ ] **Contact page** (`/contact`):
  - Intro section
  - Contact form placeholder
  - Campus cards with `MapEmbed` component (Google Maps via `googlePlaceId` or `geoPoint`)
  - Reference: `docs/initial-build/pages/contact/`

- [ ] **Campus template** (`src/app/(frontend)/campus/[slug]/page.tsx`):
  - Dynamic route, fetches campus by slug from Payload
  - Hero with campus featured image
  - Service times display
  - Campus description
  - Events filtered by this campus (CardGridBlock or direct query)
  - Image carousel (Swiper 11) from `slideImages`
  - Google Maps embed
  - Address
  - 301 redirects from old URLs: `/campus/2` → `/campus/north`, `/campus/3` → `/campus/central`, `/campus/4` → `/campus/unichurch` (resolves spec flow gap #7)
  - Reference: `docs/initial-build/pages/campus-north/` (representative)

- [ ] Build `MapEmbed` component: Google Maps embed using `googlePlaceId` or lat/lng, responsive
- [ ] Build `ImageCarousel` component: Swiper 11, autoplay, pagination dots, touch/swipe
- [ ] Wire Header and Footer to `navigation` and `site-settings` globals (replace hardcoded data from Phase 2)
- [ ] All pages use Server Components with Payload Local API — no client-side data fetching for content
- [ ] **Next.js 15 pattern:** All dynamic routes must `await params` (it's a Promise in Next.js 15). Use `Promise.all` for parallel data fetching. Set `depth: 0` or `depth: 1` explicitly, use `select` for minimal field fetching.
- [ ] Add `generateMetadata` on all page routes for SEO meta tags
- [ ] Add `generateStaticParams` on campus and blog routes to pre-generate known paths at build time
- [ ] Use `unstable_cache` with `revalidateTag` for all data fetches. Use React `cache()` for deduplication of navigation/settings across layout and page.
- [ ] `'use client'` convention: only on interactive leaf components (MobileMenu, NavDropdown, Accordion, ImageCarousel, ContactForm, SignupForm, LivePreview)
- [ ] Test responsive design on all breakpoints

**Files created:**

```
src/app/(frontend)/page.tsx              # Homepage (replace placeholder)
src/app/(frontend)/visit/page.tsx
src/app/(frontend)/about/page.tsx
src/app/(frontend)/contact/page.tsx
src/app/(frontend)/campus/[slug]/page.tsx
src/components/media/MapEmbed.tsx
src/components/media/ImageCarousel.tsx
next.config.mjs                          # Add redirects for old campus URLs
```

**Success criteria:** All 5 pages render real data from Payload (synced Rock data + CMS content). Campus pages work with dynamic slugs. Maps display correctly. Responsive on mobile and desktop.

---

#### Phase 6: Remaining Pages

**Goal:** All 17 pages complete. Full site parity with current ev.church.

**Tasks:**

- [ ] **Kids** (`/kids`) — hero, intro, 3 program descriptions, FAQ accordion. Ref: `docs/initial-build/pages/kids/`
- [ ] **Youth** (`/youth`) — hero, intro, leader gallery (ImageGalleryBlock or custom), 2 program descriptions. Ref: `docs/initial-build/pages/youth/`
- [ ] **Explaining Christianity** (`/explaining-christianity`) — hero, course description, signup form placeholder. Ref: `docs/initial-build/pages/explaining-christianity/`
- [ ] **Newish Connect** (`/newish`) — hero, program description, signup form placeholder. Ref: `docs/initial-build/pages/newish/`
- [ ] **Connect Groups** (`/connect-groups`) — hero, description, connect groups cards from synced data, CTA. Ref: `docs/initial-build/pages/connect-groups/`
- [ ] **Vision** (`/vision`) — hero, vision/history/goals sections, scripture QuoteBlock, CTA. Ref: `docs/initial-build/pages/vision/`
- [ ] **Easter** (`/easter`) — seasonal template: hero, service schedule, story sections, FAQ, scripture quote, CTA. Ref: `docs/initial-build/pages/easter/`
- [ ] **Give** (`/give`) — 301 redirect to `https://give.ev.church`
- [ ] **Privacy** (`/privacy`) — simple content page, full-text policy. Ref: `docs/initial-build/pages/privacy/`
- [ ] **Health & Safety** (`/hs`) — CTA banner, overview, resources. Ref: `docs/initial-build/pages/health-safety/`
- [ ] **Blog listing** (`/blog`) — server-rendered pagination at `/blog/page/[n]`, 10 posts per page, `rel="next"`/`rel="prev"` links, ISR revalidated (resolves spec flow gap #9)
- [ ] **Blog post** (`/blog/[slug]`) — title, author (from team-members), series, featured image (defaults to series image), rich text, video/audio embeds
- [ ] Create all pages as Payload documents with pre-populated blocks matching the page specs

**Files created:**

```
src/app/(frontend)/kids/page.tsx
src/app/(frontend)/youth/page.tsx
src/app/(frontend)/explaining-christianity/page.tsx
src/app/(frontend)/newish/page.tsx
src/app/(frontend)/connect-groups/page.tsx
src/app/(frontend)/vision/page.tsx
src/app/(frontend)/easter/page.tsx
src/app/(frontend)/give/page.tsx         # Or handled via next.config redirects
src/app/(frontend)/privacy/page.tsx
src/app/(frontend)/hs/page.tsx
src/app/(frontend)/blog/page.tsx
src/app/(frontend)/blog/[slug]/page.tsx
src/app/(frontend)/blog/page/[num]/page.tsx
```

**Success criteria:** All 17 pages functional. Blog listing paginated and crawlable. Give redirects correctly. Every page matches its reference spec in `docs/initial-build/pages/`.

---

#### Phase 7: Content Features

**Goal:** Full CMS workflow operational — blog smart defaults, announcements, navigation management, roles, live preview.

**Tasks:**

- [ ] **Blog post smart defaults:**
  - `publishDate` defaults to today
  - `sermonSeries` pre-selects most recent active series (custom Payload admin component or `defaultValue` function)
  - `slug` auto-generates from title
  - `summary` auto-generates from first 160 characters of content if empty (beforeChange hook)
  - `featuredImage` falls back to `sermonSeries.seriesImage` at render time
- [ ] **Announcement auto-appear/disappear:**
  - Server-side query filters by `startDate <= now <= endDate AND isActive = true`
  - Homepage ISR set to 60s (done in Phase 5) ensures timely appearance
  - Admin UI shows announcement status: "Scheduled", "Active", "Expired" based on current date vs start/end
- [ ] **Navigation management:**
  - Wire `Header` and `Footer` to read from `navigation` global via Payload Local API
  - Content Leads can edit nav structure in Payload admin
  - afterChange hook on `navigation` global triggers revalidation of all pages (or use `revalidateTag('navigation')`)
- [ ] **Site Settings:**
  - Wire Footer social links, mailing address, copyright to `site-settings` global
  - Wire analytics ID to Google Analytics script component
  - afterChange hook triggers full-site revalidation
- [ ] **Role-based access control:**
  - Implement all three roles per spec (Volunteer Editor, Content Lead, Admin)
  - Field-level access: only Content Lead+ can change `_status` (publish/unpublish)
  - Synced collections: visible to all, editable only by Admin, with "Synced from Rock RMS" banner in admin UI
  - `FormSubmissions`: hidden from Volunteer Editor sidebar (use `admin.hidden` with access check)
  - Navigation + SiteSettings: editable only by Content Lead+
- [ ] **Live Preview:**
  - Add `admin.livePreview.url` config to Pages and BlogPosts collections
  - Build `RefreshRouteOnSave` client component (`src/components/LivePreview.tsx`)
  - Create preview API route (`/api/preview`) with `previewSecret` validation and Next.js `draftMode()`
  - Include `<LivePreview />` in page and blog post templates
  - Set `versions.drafts.autosave.interval: 15000` (15 seconds — volunteers don't need sub-second saves, and 375ms causes flicker)
  - **Debounce `router.refresh()` in RefreshRouteOnSave to 800-1000ms** — track in-flight flag to prevent overlapping refreshes
- [ ] **Version history:**
  - Verify Payload's built-in version UI works correctly for pages and blog posts
  - Test: edit a page → publish → edit again → restore previous version → verify content rolls back

**Files created/modified:**

```
src/hooks/blog-defaults.ts               # beforeChange hook for smart defaults
src/components/LivePreview.tsx           # RefreshRouteOnSave wrapper
src/app/(frontend)/api/preview/route.ts  # Preview entry point
```

**Success criteria:** Volunteer can create a blog post in 15 minutes with smart defaults. Announcements appear/disappear on schedule. Content Lead can edit navigation and site settings. Live preview shows real page rendering. Roles correctly restrict access.

---

#### Phase 8: Forms, Polish + Launch Prep

**Goal:** Forms submitting to Rock, SEO optimized, analytics live, performance validated, ready for DNS cutover.

**Tasks:**

**Forms:**

- [ ] `ContactForm` component: name, email, message, campus selector. Client-side validation + server-side (zod). Submit to `POST /api/contact` which:
  1. Validates with zod
  2. Stores in `form-submissions` collection (status: pending)
  3. Forwards to Rock RMS workflow via API
  4. Updates `form-submissions` status to `forwarded` (or `failed` with error)
  5. Returns success/error response
  - **Double-submit prevention:** disable button on click, re-enable in `finally()`. Server-side: hash form data + 30s time window to reject duplicates.
  - **CSRF protection:** check `Origin` header against `NEXT_PUBLIC_SITE_URL` in API route handler
  - Honeypot field + time-based check (reject < 3 seconds) for spam protection
  - Rate limiting (per IP) via `rate-limiter-flexible` with in-memory store (5 submissions per IP per 15 min)
  - Consider Cloudflare Turnstile as secondary spam defense
  - Accessible: proper labels, ARIA attributes, error announcements
- [ ] `SignupForm` component: name, email, phone (NZ format), campus preference. Same submission pattern as contact form but targets Rock registration/workflow.
- [ ] Wire forms into Visit, Contact, Explaining Christianity, and Newish Connect pages (replace placeholders)

**SEO:**

- [ ] Auto-generated sitemap via Next.js `sitemap.ts` — all pages, blog posts, campus pages
- [ ] Structured data:
  - `LocalBusiness` for each campus (name, address, geo, service times)
  - `Event` for upcoming events
  - `BlogPosting` for blog posts
  - `Organization` for ev.church
- [ ] Meta tags per page: title, description, og:image from page SEO fields or smart defaults
- [ ] `robots.txt`
- [ ] Canonical URLs

**Analytics:**

- [ ] Google Analytics integration (G-1R09W3HMNX) via Next.js Script component
- [ ] Page view tracking on route changes

**Performance:**

- [ ] Next.js Image component on all images with responsive srcsets and R2 remote patterns
- [ ] Font loading optimization (swap display, preload critical weights)
- [ ] Bundle analysis, remove unused dependencies
- [ ] Test Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

**Dashboard health widget:**

- [ ] Custom Payload admin dashboard component showing:
  - Active announcements with date range
  - Last Rock sync timestamp and status
  - Upcoming event count (next 4 weeks)
  - Blog freshness: days since last published post (warn if > 7 days)
  - Page status summary: published count, draft count

**Onboarding:**

- [ ] Quick-start guide as custom Payload admin component (welcome page for new users)
- [ ] Concise inline help text on key fields via Payload's `admin.description`

**Launch prep:**

- [ ] 301 redirect map: all old Rock CMS URLs → new Next.js URLs (campus IDs, any changed slugs)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile testing (iOS Safari, Android Chrome)
- [ ] Accessibility audit: keyboard navigation, screen reader, color contrast (per brand guide accessible combinations)
- [ ] DNS cutover plan: document steps for switching ev.church domain to Railway
- [ ] SSL certificate (Railway auto-provisions via Let's Encrypt)
- [ ] Configure Rock RMS webhooks to point to production URL
- [ ] Final full sync to ensure all data is current
- [ ] Smoke test all 17 pages on production

**Files created:**

```
src/components/forms/ContactForm.tsx
src/components/forms/SignupForm.tsx
src/app/(frontend)/api/contact/route.ts
src/app/(frontend)/api/signup/route.ts
src/app/sitemap.ts
src/app/robots.ts
src/components/structured-data/LocalBusiness.tsx
src/components/structured-data/EventSchema.tsx
src/components/structured-data/BlogPosting.tsx
src/components/Analytics.tsx
```

**Success criteria:** Forms submit successfully to Rock and store locally. All pages pass Lighthouse audit > 90. Structured data validates in Google Rich Results Test. Site ready for DNS cutover.

---

## System-Wide Impact

### Interaction Graph

```
Volunteer publishes page in Payload admin
  → Payload saves document (draft → published)
  → afterChange hook fires
  → revalidatePath() called for the page's URL
  → Next.js regenerates the page on next request
  → Browser gets fresh content

Rock staff updates campus in Rock RMS
  → Rock fires webhook to /api/webhooks/rock-rms
  → Webhook handler validates → fetches full entity → maps → upserts Payload
  → Revalidation map determines affected paths
  → revalidatePath() called for each affected path
  → Pages regenerate on next request

Visitor submits contact form
  → Client-side validation (zod)
  → POST /api/contact
  → Server validates → stores in form-submissions → forwards to Rock workflow
  → Returns success/error to client
```

### Error & Failure Propagation

| Failure | Impact | Mitigation |
|---------|--------|------------|
| Rock API down during webhook | Webhook can't fetch full entity | Return 503, Rock should retry. Cron sync catches up within 15 min. |
| Rock API down during cron | Cron sync fails | Retry 3x with exponential backoff. Log failure. Data remains at last-synced state. |
| Rock API down during form submit | Visitor's form data lost | Store in `form-submissions` with status `failed`. Manual follow-up via Payload admin. |
| R2 storage down | Images fail to load | Next.js Image component handles errors gracefully. Sync retries image upload. |
| Railway PostgreSQL down | Entire site down | Railway provides automatic failover. Monitor uptime. |
| Payload admin unresponsive | Volunteers can't edit | Does not affect public site (ISR serves cached pages). Restart Railway service. |

### State Lifecycle Risks

- **Partial sync failure:** Entity upsert succeeds but ISR revalidation fails → stale pages. Mitigation: cron sync re-triggers revalidation every 15 minutes.
- **Orphaned media:** Rock removes an image but Payload media record persists → storage waste. Mitigation: weekly cleanup cron (post-launch).
- **Draft/publish race:** Volunteer saves draft while cron sync updates a synced collection referenced by the page → no conflict, synced data is independent of page content.

### API Surface Parity

- All public pages served via Next.js App Router (Server Components)
- All CMS data accessed via Payload Local API (no REST/GraphQL needed for frontend)
- Rock webhook endpoint is the only external-facing API beyond the website itself
- Form submission endpoints (`/api/contact`, `/api/signup`) are public-facing

---

## Acceptance Criteria

### Functional Requirements

- [ ] All 17 pages render correctly with real data
- [ ] Block editor supports all 8 block types with draft/publish/version workflow
- [ ] Rock data syncs within 5 minutes of changes (webhook for real-time, cron as fallback)
- [ ] Announcements auto-appear on start date and auto-disappear on end date within ~60 seconds
- [ ] Blog posts creatable in ~15 minutes with smart defaults
- [ ] Forms submit to Rock RMS with local fallback storage
- [ ] Role-based access: Volunteer Editor, Content Lead, Admin work as specified
- [ ] Live preview shows real page rendering before publishing
- [ ] Navigation and site settings editable by Content Lead
- [ ] Campus pages work with human-readable slugs, old URLs redirect

### Non-Functional Requirements

- [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] Lighthouse score > 90 on all pages
- [ ] Responsive across sm/md/lg/xl/2xl breakpoints
- [ ] Accessible: WCAG 2.1 AA compliance, keyboard navigable, screen reader friendly
- [ ] Images optimized: WebP variants, responsive srcsets, lazy loading
- [ ] SEO: sitemap, structured data, meta tags, canonical URLs

### Quality Gates

- [ ] All pages visually match reference specs in `docs/initial-build/pages/`
- [ ] Typography matches brand guidelines (Proxima Nova + Utopia, correct weights and scale)
- [ ] Colors match brand guidelines (`#E22A30` primary, `#0F0004` black, etc.)
- [ ] Cross-browser tested (Chrome, Safari, Firefox, Edge)
- [ ] Mobile tested (iOS Safari, Android Chrome)

---

## Dependencies & Prerequisites

| Dependency | Status | Notes |
|-----------|--------|-------|
| Rock RMS API access | Available | Confirmed in brainstorm |
| Rock RMS webhook configuration | Needs setup | Must configure Rock to fire webhooks to Railway URL |
| Adobe Fonts license (TypeKit `qtk2tpw`) | Verify | Confirm license covers new domain. Fallback: self-host fonts. |
| Cloudflare R2 account | Needs setup | Create bucket, generate API keys |
| Railway account | Needs setup | Create project, provision PostgreSQL |
| Google Maps API key | Needs setup | For MapEmbed component on campus and contact pages |
| Rock workflow IDs | Needs lookup | Specific workflow IDs for contact form and signup form submissions |

---

## Risk Analysis & Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Rock webhook format differs from assumed | Medium | High | Verify in Phase 1 (already planned). Cron sync works regardless. |
| Payload 3.x breaking changes during build | Low | Medium | Pin exact versions (`NPM_CONFIG_SAVE_EXACT=true`). Stay on one minor version per phase. |
| Adobe Fonts license issue | Low | Medium | Self-host fonts as fallback. Proxima Nova and Utopia have commercial licenses available. |
| Railway performance under load | Low | Low | Single church site — traffic is modest. Monitor, scale if needed. |
| Rock RMS downtime during sync | Medium | Low | Cron retries. Form submissions stored locally. Site serves cached ISR pages. |
| Railway OOM during bulk image sync | Medium | High | Use 1GB+ RAM. Sequential image processing, concurrency=1 for sharp. |
| Webhook replay/spoofing | Medium | High | HMAC-SHA256 validation + IP allowlist + obfuscated path. |
| Form spam flooding | Medium | Medium | Honeypot + time-based check + rate limiting + Cloudflare Turnstile. |
| Stale pages after sync | Low | Medium | `revalidateTag` + cache warming for critical paths. |
| CMS page shadowing Next.js routes | Low | Medium | Reserved-slug validation hook on Pages collection. |

---

## Research Insights Appendix

### A. ISR Revalidation Strategy (Architecture + Best Practices)

**Replace explicit path maps with `revalidateTag`.** Instead of `src/sync/revalidation-map.ts` maintaining a list of paths per entity type, tag data fetches at the query level:

```typescript
// src/lib/cache-tags.ts
export const CacheTags = {
  campuses: 'campuses',
  events: 'events',
  teamMembers: 'team-members',
  sermonSeries: 'sermon-series',
  connectGroups: 'connect-groups',
  announcements: 'announcements',
  homepage: 'homepage',
  navigation: 'navigation',
  siteSettings: 'site-settings',
  campus: (slug: string) => `campus-${slug}`,
  page: (slug: string) => `page-${slug}`,
} as const
```

Wrap Payload Local API calls in `unstable_cache` with tags:

```typescript
import { unstable_cache } from 'next/cache'

export const getCampuses = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    return payload.find({
      collection: 'campuses',
      where: { isActive: { equals: true } },
      sort: 'order', depth: 0, limit: 20,
      select: { name: true, slug: true, serviceTimes: true, featuredImage: true, address: true },
    })
  },
  ['campuses-active'],
  { tags: [CacheTags.campuses], revalidate: 3600 }
)
```

Webhook/sync handlers call `revalidateTag('campuses')` instead of listing paths. New pages automatically pick up changes without updating a map.

**Cache warming:** After revalidation, fire-and-forget requests to critical paths (`/`, `/visit`, `/about`, `/contact`) so the first real visitor doesn't trigger a cold regeneration.

### B. Webhook Reliability (Security + Best Practices)

**Authentication:** Use HMAC-SHA256 with `crypto.timingSafeEqual`. Add `ROCK_WEBHOOK_SECRET` env var. If Rock doesn't support HMAC natively, use defense-in-depth: static API key (timing-safe compare) + IP allowlist + obfuscated path (`/api/webhooks/rock-rms/{WEBHOOK_PATH_TOKEN}`).

**Idempotency:** Generate deterministic keys from `entityType + entityId + timestamp`. Track in a `webhook-events` collection. Skip already-processed webhooks.

**Ordering:** Use `lastSyncedAt` timestamp comparison — skip upserts where incoming data is older than what Payload already has (last-write-wins).

**Dead letter queue:** After 3 retries with exponential backoff, write to `webhook-dlq` collection for manual investigation.

**New collections needed:**
- `webhook-events` — `webhookId` (unique indexed), `entityType`, `status` (processing/completed/failed), `error`, `receivedAt`
- `webhook-dlq` — `rawPayload`, `entityType`, `error`, `attemptCount`, `resolved` (checkbox)

### C. TypeScript Patterns (TypeScript Reviewer)

**RenderBlocks exhaustiveness:** Use `satisfies Record<BlockType['blockType'], ...>` pattern:

```typescript
import type { Page } from '@/payload-types'
type BlockType = NonNullable<Page['blocks']>[number]

const blockComponents = {
  hero: HeroBanner,
  content: ContentSection,
  cta: CTABanner,
  cardGrid: CardGrid,
  accordion: Accordion,
  imageGallery: ImageGallery,
  video: VideoEmbed,
  quote: QuoteBlock,
} satisfies Record<BlockType['blockType'], React.ComponentType<any>>
```

Adding a new block to Payload config without a renderer fails to compile.

**Next.js 15 `params` is a Promise:**

```typescript
export default async function CampusPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params  // REQUIRED in Next.js 15
  // ...
}
```

**Entity mappers:** Define explicit Rock API response interfaces. Derive return types from Payload generated types: `type CampusCreateData = Omit<Campus, 'id' | 'createdAt' | 'updatedAt'>`.

**Build script:** `"build": "payload generate:types && next build"` (since `payload-types.ts` is gitignored).

**Required in Phase 1:** `strict: true` in `tsconfig.json`.

### D. Frontend Race Conditions (Frontend Races Reviewer)

**Live Preview:** Debounce `router.refresh()` to 800-1000ms in `RefreshRouteOnSave`. Track in-flight flag to prevent overlapping refreshes. Consider 15s autosave interval (not 375ms) for volunteer use case.

**Header scroll:** Use `IntersectionObserver` on a sentinel element, not scroll events. Toggle CSS class directly on DOM (no React re-render). Use `useLayoutEffect` for initial state to prevent hydration flash on back-navigation.

**Swiper carousel:** Set explicit `aspect-ratio` or `min-height` on container CSS to prevent CLS before initialization. Start autoplay only after first image loads.

**Forms:** Disable submit button immediately on click. Server-side idempotency: hash form data + 30s time window to reject duplicates.

**Mobile menu:** Use CSS `transition` (not `@keyframes`) so reversals are natively smooth. For animations > 50ms, implement a state machine (CLOSED → OPENING → OPEN → CLOSING).

**Cron sync mutex:** Check a `sync_in_progress` flag at cron start. Set false in `finally()`. Prevents overlapping runs if a sync takes > 15 minutes.

### E. Security Hardening (Security Sentinel)

**Security headers** (add to `next.config.mjs` or middleware):
- `Content-Security-Policy` — restrict script sources, disable `unsafe-eval`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`

**Form CSRF:** Check `Origin` header against `NEXT_PUBLIC_SITE_URL` in API route handlers.

**`form-submissions` lockdown:** Replace `create: () => true` with a function that checks for an internal context flag, preventing direct Payload REST API submissions.

**Synced collection enforcement:** Add `beforeChange` hook that checks `context.syncOperation` flag. Prevents accidental admin edits that would be overwritten by next sync.

**PII retention:** Auto-delete `forwarded` form submissions after 30 days. Keep `failed` until resolved.

**Admin brute-force:** Rate limit Payload auth endpoint. Consider Cloudflare bot protection on `/admin`.

**Preview route:** Set `__prerender_bypass` cookie with `HttpOnly`, `Secure`, `SameSite=Strict`, `Max-Age=3600`. Implement `/api/preview/exit` route.

### F. Performance (Performance Oracle)

**Railway 1GB RAM minimum.** Memory budget: Node.js baseline ~40MB + Next.js ~70MB + Payload ~100MB + sharp ~30MB + pool ~10MB = ~250-320MB baseline. Image processing adds 30-50MB per image. 512MB is too tight during sync.

**Sequential image processing:** Never process images concurrently during sync. Set `UV_THREADPOOL_SIZE=4`. Use concurrency of 1-2 for image downloads.

**Payload `find()` limit:** Default is 10. Cron sync MUST use `limit: 0` or paginate explicitly, or reconciliation silently processes only the first 10 records.

**Pre-fetch media lookup:** At sync start, load all media records with `rockImageGuid` into a Map. Avoids N+1 queries during per-entity image checks.

**Relationship depth:** Set `depth: 0` or `depth: 1` explicitly on all Local API calls. Use `select` to return only needed fields. Uncontrolled depth causes cascading joins.

**Health check with memory:** Include `process.memoryUsage()` in `/api/health` response for early OOM warning.

### G. Deployment & DNS Cutover (Deployment Verification)

**Pre-cutover (1 week before):**
- Lower DNS TTL to 300s
- Verify Railway custom domain + SSL on temporary subdomain
- Configure Rock webhooks to Railway URL
- Seed all page content, smoke test all 17 pages
- Add `ev.church` to TypeKit allowed domains
- Restrict Google Maps API key to `ev.church`

**Cutover day (Tuesday/Wednesday morning NZ):**
- T-60m: Final full sync, pg_dump backup
- T-0: Update DNS (www.ev.church CNAME → Railway, ev.church redirect to www)
- T+5m: Verify SSL, test from different network
- T+15m: Update Rock webhooks to production domain
- T+30m: Test all 17 pages, forms, analytics on production
- T+24h: Restore DNS TTL, submit sitemap to Search Console

**Keep old Rock CMS frontend running for 48 hours** after cutover.

**Rollback:** Revert DNS records (5-min propagation with lowered TTL). Disable Rock webhooks to Railway.

**Database migrations:** Payload auto-runs on startup. Never deploy destructive migrations (drop column) in same deploy as code changes — use two-phase approach. Review generated SQL before merging to main. Keep `pg_dump` backups before every phase deploy.

**Backup strategy:** Railway daily automated backups + manual pg_dump before each phase. Enable R2 bucket versioning immediately. CMS-uploaded media (not from Rock) is the irreplaceable content.

**Missing from original plan:**
- Staging environment (separate Railway project with own PostgreSQL + R2)
- Error alerting (Sentry free tier or Railway notifications)
- Load testing before DNS cutover (`wrk` with 50 concurrent connections)
- `CRON_SECRET` env var for protected sync trigger endpoint

### H. Pattern Corrections (Pattern Recognition)

**Block slug convention:** Use camelCase: `hero`, `content`, `cardGrid`, `cta`, `accordion`, `imageGallery`, `video`, `quote`. Set `interfaceName` on all 8 blocks.

**Block renderer naming:** Align with block slugs — either all drop `Block` suffix (`Hero.tsx`, `Content.tsx`, etc.) or all match exactly. Current mix of `HeroBanner`, `CTABanner`, `VideoEmbed` is inconsistent.

**`colorPreset`** not `colourPreset` — American English consistency.

**Remove `src/hooks/sync.ts`** — orphaned file, never created in any phase. Sync logic lives in `src/sync/`.

**Move API routes to `src/app/api/`** (top-level, not under `(frontend)` route group). Route handlers don't render layouts, but grouping them under `(frontend)` is conceptually misleading.

**Reserved-slug hook:** Add `beforeValidate` on Pages collection rejecting slugs matching explicit routes (`visit`, `about`, `contact`, `campus`, `blog`, `kids`, `youth`, `give`, `privacy`, `hs`, etc.).

---

## Sources & References

### Origin

- **Origin document:** [docs/brainstorms/2026-03-22-phased-build-plan-requirements.md](docs/brainstorms/2026-03-22-phased-build-plan-requirements.md) — Key decisions carried forward: 8-phase sequential build, Payload embedded in Next.js on Railway, block editor with constrained types, Rock data synced to Payload as sole frontend store.

### Internal References

- Page specs: `docs/initial-build/pages/` (17 page directories, 5 files each)
- Component specs: `docs/initial-build/components/COMPONENT-INDEX.md` (15 component specs)
- Payload collection schemas: `docs/initial-build/PAYLOAD-COLLECTIONS.md`
- Rock sync field mappings: `docs/initial-build/ROCK-RMS-SYNC.md`
- Design tokens: `docs/initial-build/DESIGN-TOKENS.md`
- Site map and navigation: `docs/initial-build/SITE-MAP.md`
- Shared component matrix: `docs/initial-build/SHARED-COMPONENTS.md`
- Volunteer CMS architecture: `docs/initial-build/VOLUNTEER-CMS-ARCHITECTURE.md`

### External References

- [Payload CMS 3.x Docs](https://payloadcms.com/docs)
- [Payload PostgreSQL Adapter](https://payloadcms.com/docs/database/postgres)
- [Payload S3 Storage](https://www.npmjs.com/package/@payloadcms/storage-s3)
- [Payload Live Preview](https://payloadcms.com/docs/live-preview/server)
- [Payload Access Control](https://payloadcms.com/docs/access-control/overview)
- [Payload Blocks Field](https://payloadcms.com/docs/fields/blocks)
- [Payload Rich Text / Lexical](https://payloadcms.com/docs/rich-text/overview)
- [Ultimate Guide to Next.js with Payload](https://payloadcms.com/posts/blog/the-ultimate-guide-to-using-nextjs-with-payload)
- [Railway Payload 3 Template](https://railway.com/deploy/XprvFZ)
- [Railway Payload 3 Stack (PSQL + S3)](https://railway.com/deploy/7fbyq-)
- [Next.js ISR Documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)
- [Next.js revalidateTag](https://nextjs.org/docs/app/api-reference/functions/revalidateTag)
- [Next.js unstable_cache](https://nextjs.org/docs/app/api-reference/functions/unstable_cache)
- [Next.js Caching and Revalidating](https://nextjs.org/docs/app/getting-started/caching-and-revalidating)
