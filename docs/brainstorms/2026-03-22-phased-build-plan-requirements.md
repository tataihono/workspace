---
date: 2026-03-22
topic: phased-build-plan
---

# ev.church Phased Build Plan

## Problem Frame

ev.church needs to be rebuilt from Rock CMS (ASP.NET + Lava templates) to Next.js + Payload CMS. The site has 17 pages, 13+ shared components, and a critical Rock RMS data sync layer. The rebuild must be phased into independently deployable milestones that a solo developer with AI pair programming can execute sequentially. No hard deadline — build it right.

## Infrastructure Decisions

- **Hosting:** Railway (persistent server)
- **Database:** PostgreSQL (on Railway)
- **Media storage:** S3-compatible bucket (configured via Payload's storage adapter)
- **Framework:** Next.js (App Router) + Payload CMS 3.x (embedded in Next.js)
- **Styling:** Tailwind CSS 4.x
- **Fonts:** proxima-nova + utopia-std (Adobe Fonts or self-hosted)
- **Primary color:** `#d22227`

## Requirements

### Phase 1: Foundation

- R1. Initialize Next.js project with App Router and Payload CMS 3.x embedded (single deployment)
- R2. Configure PostgreSQL connection via Payload's database adapter
- R3. Configure S3-compatible media storage via Payload's cloud storage plugin
- R4. Set up Railway deployment pipeline (auto-deploy from main branch)
- R5. Set up environment variable management for Rock RMS API credentials, database URL, and storage keys
- R6. Establish design tokens: colors (`#d22227` primary, light, dark presets), typography scale (proxima-nova body, utopia-std display), spacing, breakpoints
- R7. Basic health check endpoint to verify deployment is working

### Phase 2: Layout Shell + Design System

- R8. Build Header component: fixed top, transparent-to-blur scroll transition, logo, primary nav with Visit and Next Steps dropdowns, mobile hamburger menu
- R9. Build Footer component: 4 link columns (About, Next Steps, Sections, Campuses), social icons, copyright, mailing address
- R10. Build Page Layout wrapper: consistent header/footer, meta tags, layout variants (FullWidth, FullWidthNarrow)
- R11. Build CTA Button component: primary, secondary, and text variants matching existing design
- R12. Set up font loading (proxima-nova, utopia-std) and global typography styles
- R13. Deploy a working shell site with placeholder homepage that demonstrates layout, navigation, and responsive behavior

### Phase 3: Payload Collections + Block Editor

- R14. Define synced collections in Payload: `campuses`, `events`, `team-members`, `sermon-series`, `connect-groups`, `registrations` — with all fields from ROCK-RMS-SYNC.md field mappings, plus `rockId`/`rockPersonId` indexes and `lastSyncedAt` timestamps
- R15. Define content collections in Payload: `pages` (with block editor), `blog-posts`, `announcements`
- R16. Define Payload globals: `navigation` (mainNav, footerNav), `site-settings` (logo, social links, contact email, address, analytics ID)
- R17. Build 7 Payload block types for the page block editor:
  - `HeroBlock` — image, heading, subtitle, CTA buttons
  - `ContentBlock` — heading, rich text body, optional image, alignment variants
  - `CTABlock` — heading, text, buttons, color preset (Primary Red / Light / Dark)
  - `CardGridBlock` — data source selector (campuses / events / team), optional campus filter
  - `AccordionBlock` — array of question/answer pairs
  - `ImageGalleryBlock` — array of images with drag reorder
  - `VideoBlock` — YouTube URL field
- R18. Implement draft/publish workflow on pages, blog posts, and announcements
- R19. Implement version history on pages and blog posts
- R20. Build 4 page templates as starting-point block configurations: Standard, Ministry, Seasonal Event, Simple Content

### Phase 4: Rock RMS Sync

- R21. Build webhook endpoint (`POST /api/webhooks/rock-rms`) that receives Rock entity change notifications, validates signature/API key, maps entities, and upserts into Payload collections
- R22. Build cron sync script that runs every 15 minutes: full reconciliation for all 6 synced entity types using diff comparison on `rockId` + `lastModifiedDateTime`
- R23. Build image sync pipeline: detect image GUID fields on sync, check for existing media by `rockImageGuid`, download highest resolution from Rock, upload to Payload media library with metadata
- R24. Implement ISR revalidation triggers: webhook and cron sync trigger Next.js revalidation for affected page paths
- R25. Error handling: retry failed syncs up to 3 times with exponential backoff, log all webhook events, alert on repeated failures
- R26. Seed initial data: run first full sync to populate all collections from live Rock data

### Phase 5: Core Pages (High-Traffic)

- R27. Build Homepage: hero banner, announcement slot (auto-show/hide by date), welcome text, event cards, latest sermon section, campus cards, CTA — all pulling from synced + CMS data
- R28. Build Visit page: hero, what-to-expect content, kids info, campus cards, contact/visitor form (placeholder)
- R29. Build About page: mission text, team grid (grouped by Staff/Leadership/Apprentices from synced data), beliefs accordion
- R30. Build Contact page: hero, intro, contact form (placeholder), campus cards with map embeds
- R31. Build Campus template (`/campus/[slug]`): hero with campus image, service times, description, event cards filtered by campus, image carousel from slide images, Google Maps embed, address
- R32. All pages render from Payload Local API using Server Components — no client-side data fetching for page content
- R33. Responsive design across all breakpoints matching current site behavior

### Phase 6: Remaining Pages

- R34. Build Kids page: hero, intro, 3 program descriptions, FAQ accordion
- R35. Build Youth page: hero, intro, leader gallery, 2 program descriptions
- R36. Build Explaining Christianity page: hero, course description, signup form (placeholder)
- R37. Build Newish Connect page: hero, program description, signup form (placeholder)
- R38. Build Connect Groups page: hero, description, connect groups cards from synced data, CTA
- R39. Build Vision page: hero, vision/history/goals sections, scripture quote, CTA
- R40. Build Easter page (seasonal template): hero, service schedule, story sections, FAQ, scripture quote, CTA
- R41. Build Give page: redirect to give.ev.church
- R42. Build Privacy page: full-text policy content
- R43. Build Health & Safety page: CTA banner, overview, resources
- R44. Build Blog listing page: auto-generated from blog-posts collection with pagination
- R45. Build Blog post page: rendered from individual blog-post with title, author, series, featured image, rich text, video/audio embeds

### Phase 7: Content Features

- R46. Wire up Announcements: scheduled homepage banners with start/end dates, auto-appear/disappear
- R47. Blog post smart defaults: today's date pre-filled, current sermon series pre-selected, slug auto-generated, SEO description from first 160 characters
- R48. Navigation management in Payload: Content Lead can edit main nav and footer nav structure
- R49. Site Settings global: logo, social links, contact email, mailing address, analytics ID — editable by Content Lead
- R50. Role-based access control:
  - Volunteer Editor: edit pages, create blog posts, manage announcements, upload images, preview
  - Content Lead: above + navigation, site settings, create new pages from templates, publish/unpublish
  - Admin: full access
- R51. Implement Payload Live Preview for pages and blog posts — volunteers see the actual rendered page before publishing

### Phase 8: Forms, Polish + Launch Prep

- R52. Build Contact Form component: name, email, message, campus selector — submits to API route that forwards to Rock RMS workflow
- R53. Build Signup Form component: name, email, phone, campus preference — submits to API route that creates Rock RMS registration/workflow
- R54. SEO: auto-generated sitemaps, structured data (LocalBusiness for campuses, Event for events, BlogPosting for blog), meta tags per page
- R55. Google Analytics integration (G-1R09W3HMNX)
- R56. Image optimization: Next.js Image component on all images, responsive srcsets
- R57. Dashboard health widget: active announcements, last Rock sync time, upcoming event count, blog freshness indicator, page status counts
- R58. Onboarding quick-start guide built into Payload admin dashboard
- R59. Final QA: cross-browser testing, mobile testing, accessibility audit, performance audit (Core Web Vitals)
- R60. DNS cutover plan and go-live checklist

## Success Criteria

- Each phase results in a deployable state on Railway — no phase leaves the system broken
- Rock RMS data appears on the site within 5 minutes of changes in Rock
- Volunteer editors can create blog posts and manage announcements without developer help
- Content Leads can edit all page content through the block editor with live preview
- Site achieves comparable or better Core Web Vitals vs. current Rock CMS site
- All 17 pages are functional with correct content and responsive design

## Scope Boundaries

- **Not in scope:** Custom domain email, church management features, member portal/login, mobile app, e-commerce beyond Give redirect, sermon audio/video hosting (external links only)
- **Not in scope:** Multi-language support, A/B testing, advanced analytics dashboards
- **Not in scope:** Migrating Rock RMS data or changing Rock workflows — Rock remains as-is, we sync from it
- **Deferred:** Approval workflow for volunteer edits (optional feature, add if needed post-launch)
- **Deferred:** Scheduled publishing for pages (announcements have it; pages can add later)

## Key Decisions

- **Payload 3.x embedded in Next.js:** Single deployment on Railway, Payload Local API for server-side data access (no REST API latency)
- **Block editor with 7 constrained block types:** Gives volunteers flexibility without letting them break the design. No custom HTML/CSS
- **Rock data synced to Payload, not fetched at render time:** Payload is the sole frontend data store. This decouples the website from Rock availability and simplifies frontend code
- **Phase 3 and 4 before pages:** The block editor and sync are the riskiest pieces. Getting them right early means phases 5-6 are assembly work
- **Forms submit to API routes that proxy to Rock:** Website never directly exposes Rock API to the browser

## Dependencies / Assumptions

- Rock RMS API is accessible and stable (confirmed: access available now)
- Rock webhook configuration can be set up to fire to the Railway deployment URL
- Adobe Fonts (TypeKit) license covers the new domain/deployment, or fonts will be self-hosted
- Railway supports cron jobs or an external cron trigger (e.g., Railway cron service, or external like cron-job.org)
- S3-compatible bucket is provisioned (e.g., Railway volume, Cloudflare R2, or AWS S3)

## Outstanding Questions

### Resolve Before Planning

_None — all product decisions resolved._

### Deferred to Planning

- [Affects R22][Technical] What's the best approach for cron on Railway — Railway's built-in cron, a separate worker service, or an external trigger?
- [Affects R23][Needs research] Which S3-compatible storage is best paired with Railway (R2, S3, Railway volume)?
- [Affects R21][Technical] What webhook format does Rock RMS actually send — need to verify against real webhook payloads vs. the assumed format in ROCK-RMS-SYNC.md
- [Affects R12][Needs research] Adobe Fonts license status for proxima-nova and utopia-std — can we use TypeKit, or should we self-host?
- [Affects R52-R53][Technical] Exact Rock RMS workflow IDs for form submissions — need to map contact form and signup form to specific Rock workflows

## Next Steps

-> `/ce:plan` for structured implementation planning (start with Phase 1: Foundation)
