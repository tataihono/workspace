# ev.church Site Documentation

Comprehensive documentation of [ev.church](https://www.ev.church) for rebuilding on **Next.js + Payload CMS**.

## Purpose

This repository captures every page of the current ev.church website (Rock CMS v17.0.43.0) to serve as a blueprint for the rebuild. Each page is documented with:

- **HTML snapshot** — rendered page capture
- **Markdown content** — clean text extraction with frontmatter
- **Instructions** — page purpose, content zones, data sources, behavior spec
- **Component breakdown** — reusable component mapping with data sources
- **Improvements** — UX, performance, accessibility, SEO suggestions

## Architecture

- **Frontend**: Next.js (App Router)
- **CMS**: Payload CMS (sole frontend data store)
- **Data sync**: Rock RMS → Payload CMS via webhooks + scheduled cron
- **Current platform**: Rock CMS v17.0.43.0 (ASP.NET) with EvChurch theme

## Directory Structure

```
ev-church-docs/
├── README.md
├── SITE-MAP.md
├── SHARED-COMPONENTS.md
├── PAYLOAD-COLLECTIONS.md
├── ROCK-RMS-SYNC.md
├── DESIGN-TOKENS.md
├── assets/images/          # Downloaded images per page
├── pages/                  # 17 page directories (5 files each)
└── components/             # Shared component specifications
```

## Pages Documented

| Page | URL | Directory |
|------|-----|-----------|
| Homepage | `/` | `pages/homepage/` |
| Visit | `/visit` | `pages/visit/` |
| About | `/about` | `pages/about/` |
| Vision | `/vision` | `pages/vision/` |
| Contact | `/contact` | `pages/contact/` |
| Give | `/give` | `pages/give/` |
| Explaining Christianity | `/explaining-christianity` | `pages/explaining-christianity/` |
| Newish Connect | `/newish` | `pages/newish/` |
| Connect Groups | `/connect-groups` | `pages/connect-groups/` |
| Kids | `/kids` | `pages/kids/` |
| Youth | `/youth` | `pages/youth/` |
| North Campus | `/campus/2` | `pages/campus-north/` |
| Central Campus | `/campus/3` | `pages/campus-central/` |
| Unichurch | `/campus/4` | `pages/campus-unichurch/` |
| Easter | `/easter` | `pages/easter/` |
| Privacy | `/privacy` | `pages/privacy/` |
| Health & Safety | `/hs` | `pages/health-safety/` |

## Data Flow

```
Rock RMS (source of truth for operational data)
  ↓ webhooks + cron sync
Payload CMS (sole frontend data store)
  ↓ Payload Local API
Next.js (App Router, Server Components)
  ↓
Browser
```
