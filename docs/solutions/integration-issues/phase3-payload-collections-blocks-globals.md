---
title: "Phase 3: Payload Collections, Blocks, and Globals"
category: integration-issues
date: 2026-03-22
tags:
  - payload-cms
  - collections
  - blocks
  - globals
  - typescript
  - access-control
severity: medium
component: payload
problem_type: feature-build
---

# Phase 3: Payload Collections, Blocks, and Globals

## Overview

Phase 3 established the full Payload CMS data model for the ev.church rebuild, including synced collections from Rock RMS, content-managed collections for the marketing site, global configuration objects, and a constrained block editor for page building.

## What Was Built

### Synced Collections (6)

These collections mirror data from Rock RMS and are read-only for non-admin users:

- **campuses** — Physical campus locations
- **team-members** — Staff and volunteer profiles
- **events** — Calendar events synced from Rock
- **sermon-series** — Sermon series and associated media
- **connect-groups** — Small groups / community groups
- **registrations** — Event registration records

### Content Collections (3)

- **pages** — General-purpose pages with a block-based editor supporting 7 block types
- **blog-posts** — Blog/news articles
- **announcements** — Time-bound announcements for the site

### Globals (2)

- **navigation** — Site-wide nav structure (header, footer, mobile)
- **site-settings** — Brand configuration, default SEO, social links, feature flags

### Block Types (7)

The page builder uses 7 constrained block types, giving volunteer content editors flexibility without the ability to break the design system:

1. **hero** — Full-width hero banners with headline, subhead, CTA, and background media
2. **content** — Rich text content powered by Lexical
3. **cardGrid** — Configurable grid of linked cards
4. **cta** — Call-to-action strips with button and optional background
5. **mediaEmbed** — Video or image embeds with optional captions
6. **accordion** — Expandable FAQ / info sections
7. **statsBar** — Numeric stats with labels for impact reporting

## Key Design Decisions

### Naming Conventions

- **Collection slugs:** kebab-case plural (e.g., `team-members`, `blog-posts`, `sermon-series`). This keeps URL segments clean and aligns with Payload community conventions.
- **Block slugs:** camelCase (e.g., `cardGrid`, `statsBar`, `mediaEmbed`). This matches JavaScript naming and keeps generated TypeScript interfaces readable.
- **`interfaceName`** is set on every block definition so that the generated types in `src/payload-types.ts` are predictable and stable across regeneration cycles.

### Access Control (RBAC — 3 Tiers)

| Role | Capability |
|------|-----------|
| **isAdmin** | Full access. Only role that can write to synced collections (campuses, team-members, events, sermon-series, connect-groups, registrations). |
| **isContentLead** | Can create and delete pages, blog-posts, and announcements. Can edit all content fields. |
| **isEditor** | Can edit existing content (update only). Cannot create or delete documents. |

Synced collections enforce read-only access for all non-admin users, preventing accidental overwrites of data that originates in Rock RMS.

### Block Editor Philosophy

Seven block types is an intentional constraint. Volunteers manage much of the site content, so the block palette is kept small enough that every option produces a visually consistent result within the design system. Adding new block types requires a deliberate review to ensure they include proper responsive behavior and adhere to brand guidelines.

## TypeScript Issue Encountered

### Problem

After adding the new collections and globals to the Payload config, all `relationship` fields referencing the new collection slugs failed TypeScript type checking. Errors looked like:

```
Type '"team-members"' is not assignable to type 'CollectionSlug'.
```

The root cause was that the generated `CollectionSlug` union type in `src/payload-types.ts` was stale — it still only contained the collections from the previous build and did not include the newly added slugs.

### Fix

Regenerate the Payload type definitions:

```bash
npx payload generate:types
```

This updates `src/payload-types.ts` with the current `CollectionSlug` union, all document interfaces, and block interfaces. After regeneration, all relationship fields resolved correctly.

### Prevention

Always regenerate types after any of the following changes:

- Adding or removing a collection
- Adding or removing a global
- Modifying fields on an existing collection or global
- Adding or renaming block types

A practical safeguard is to add `payload generate:types` to the project's `prebuild` script so that stale types never reach CI:

```json
{
  "scripts": {
    "prebuild": "payload generate:types"
  }
}
```

## Related Files

- `src/collections/` — All collection config files
- `src/blocks/` — Block type definitions
- `src/globals/` — Navigation and site-settings globals
- `src/access/` — `isAdmin`, `isContentLead`, `isEditor` helpers
- `src/payload-types.ts` — Generated types (gitignored)
