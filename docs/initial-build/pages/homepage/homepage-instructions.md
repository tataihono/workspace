---
title: Homepage - Build Instructions
page: Homepage
slug: /
rock_page_id: 816
---

# Homepage - Build Instructions

## Overview

The Homepage is the primary landing page for Ev Church. It serves as the first impression for the majority of visitors and acts as a hub directing users to all other key areas of the site: events, sermons, campus information, and visitor registration.

The page is designed to communicate the church's identity ("one church, three locations"), surface timely content (events, sermon series), and provide clear pathways for both regular attendees and first-time visitors.

## User Journey

The homepage is the entry point for most visitors. Traffic sources include:

- **Organic search:** queries such as "ev church auckland", "church auckland", "ev church"
- **Direct navigation:** returning members going to ev.church
- **Social media:** links from Instagram, Facebook, YouTube
- **Referrals:** links from partner churches, directories, or event listings

**Primary conversion goals:**
1. First-time visitors click "New Here?" or "Visit" to learn about attending
2. Returning visitors find upcoming events or watch the latest sermon
3. All visitors get a sense of the church's community and values

## Content Zones (Top to Bottom)

### 1. Hero Carousel
- Full-width image carousel using Swiper.js
- Text overlay with church tagline: "We Are One Church, Three Locations"
- Two CTA buttons anchor-linking to sections below (#latest-sermon, #whats-happening)
- Autoplay with pause on hover

### 2. Easter Seasonal Banner
- Promotional banner for the Easter season
- Title, subtitle, body text, and a single CTA linking to /easter
- This is a seasonal element that should be togglable/removable from the CMS
- When Easter season ends, this block is hidden or removed by content editors

### 3. Welcome Section
- Simple heading and paragraph introducing the church
- Static content, editable in the CMS
- No images or interactive elements

### 4. Photo Gallery Carousel
- Horizontal scrolling carousel of 14 community life images
- Swiper.js with navigation arrows (prev/next)
- Images sourced from Rock CMS via GetImage.ashx GUIDs
- No captions or overlays

### 5. What's Happening (Events)
- Introduction text with social media follow CTA (Instagram)
- List of upcoming events within a 4-week window
- Each event card shows: date, title, location
- Events are dynamically pulled from the calendar

### 6. Latest Sermon Series
- Displays the current/latest sermon series
- Series image, title, description, and CTA linking to the resources site
- Dynamically pulled from the sermon series content channel

### 7. Join Us at Services (Campus Cards)
- Descriptive paragraph about what services are like
- Three campus cards in a grid layout
- Each card: campus name, service time, address
- Campus data is dynamically synced

### 8. Connect CTA
- Final call-to-action section
- Brief message with two buttons: "Contact Us" (/contact) and "New Here?" (/visit)

## Rock CMS Data Sources

| Data | Source | Lava Template | Notes |
|------|--------|---------------|-------|
| Hero images | Binary files via GetImage.ashx | `MainBanner.lava` | Swiper carousel, GUIDs stored in block config |
| Events | Calendar ID: 1 | `Homepage/Calendar.lava` | Filtered to upcoming events within 4-week window |
| Sermon Series | Content Channel #4 | `LatestSermon.lava` | Latest item from the channel |
| Campuses | Campus entity (all active) | Campus entity via API | Service times, addresses |
| Welcome text | HTML block content | Inline HTML block | Editable in Rock page editor |
| Easter banner | HTML block content | Inline HTML block | Seasonal, togglable |

## Dynamic vs Static Content

| Content | Type | Sync Behavior |
|---------|------|---------------|
| Hero carousel images | CMS-editable | Editors update in Payload CMS |
| Easter banner | CMS-editable (seasonal) | Editors toggle visibility per season |
| Welcome text | CMS-editable | Static text, editors update as needed |
| Photo gallery images | CMS-editable | Editors manage gallery block in Payload |
| Events | Dynamic (synced) | Synced from Rock CMS calendar on schedule |
| Sermon series | Dynamic (synced) | Synced from Rock CMS content channel on schedule |
| Campus cards | Dynamic (synced) | Synced from Rock CMS campus entities |

## Interactions

- **Swiper carousels:** Both the hero and photo gallery use Swiper.js. Hero has autoplay; gallery has manual navigation arrows.
- **Scroll-based navbar:** The navigation bar changes appearance (background, shadow) on scroll.
- **Anchor links:** Hero CTAs scroll smoothly to #latest-sermon and #whats-happening sections.
- **External links:** "Follow Us" opens Instagram in a new tab. "About the Series" opens the resources subdomain in a new tab.

## Integrations

| Integration | Purpose | Implementation |
|-------------|---------|----------------|
| Instagram | Social media follow link | External link to Instagram profile |
| YouTube | Sermon video playback | Links to resources site (resources.aucklandev.co.nz) |
| Google Analytics | Page tracking, event tracking | GA4 tag on all pages |

## SEO Requirements

- **Title tag:** "Ev Church - One Church, Three Locations in Auckland"
- **Meta description:** Strong, keyword-rich description mentioning Auckland, church, community
- **Open Graph:** OG image (church hero image), OG title, OG description for social sharing
- **Structured data:** Organization schema (JSON-LD) with name, URL, logo, address, social profiles
- **Heading hierarchy:** Single H1 in hero, H2 for each major section, H3 for sub-items (campus names, event titles)
- **Canonical URL:** https://www.ev.church/

## Payload CMS Modeling

The homepage should be modeled in Payload CMS as a `pages` collection entry with the following block structure:

```
Page: Homepage (slug: "/")
├── blocks[]
│   ├── HeroBlock
│   │   ├── slides[] (image, alt text)
│   │   ├── heading: string
│   │   └── ctas[] (label, href)
│   ├── CTABlock (Easter banner - seasonal)
│   │   ├── title: string
│   │   ├── subtitle: string
│   │   ├── body: richText
│   │   ├── cta: { label, href }
│   │   └── visible: boolean
│   ├── ContentBlock (Welcome)
│   │   ├── heading: string
│   │   └── body: richText
│   ├── ImageGalleryBlock
│   │   └── images[] (image, alt text)
│   ├── EventListBlock
│   │   ├── introText: richText
│   │   ├── socialLink: { label, href }
│   │   └── events: relationship → events collection (auto-filtered)
│   ├── SermonBlock
│   │   └── series: relationship → sermon-series collection (latest)
│   ├── CardGridBlock (Campuses)
│   │   ├── heading: string
│   │   ├── body: richText
│   │   └── campuses: relationship → campuses collection
│   └── CTABlock (Connect)
│       ├── heading: string
│       ├── body: richText
│       └── ctas[] (label, href)
```
