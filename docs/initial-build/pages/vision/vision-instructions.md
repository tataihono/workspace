---
title: "Vision Page - Implementation Instructions"
page: /vision
---

# Vision Page - Implementation Instructions

## Overview

The Vision page communicates Ev Church's Vision 2030 strategy. It is an inspirational page aimed at both existing and prospective members, outlining the church's ambitious goals for growth and gospel impact across Auckland and New Zealand.

## User Journey

- **Entry points**: Members and potential members navigate here from the About page, main navigation, or direct links.
- **Intent**: Users want to understand the church's direction, history, and strategic goals.
- **Leads to**: Visit page, Contact page, giving/support pages, ministry program pages (e.g., Explaining Christianity, church planting).

## Content Zones

1. **Vision statement hero** - Bold headline with Vision 2030 tagline.
2. **Mission commitments (3 pillars)** - Three core commitments: Captivated by Christ, Grounded in the Gospel, Growing in Maturity and Number.
3. **History timeline** - Chronological milestones from 2012 founding to current state.
4. **Vision goal (120K)** - The primary numeric goal with context (2-3% to 10% city-wide belief).
5. **Biblical foundation** - Scripture reference (1 Corinthians 1:23-24) and Jonah/Nineveh connection.
6. **Strategic objectives (4 goals)** - Concrete targets for 2030: members, campuses, ministry workers, training hub.
7. **CTA** - Visit Us and Contact Us calls to action.

## Rock CMS Data Sources

| Data | Source | Notes |
|------|--------|-------|
| Vision content | Static CMS content | Rendered via Special/Vision/ Lava templates |
| Campus references | Campus entity | Used for context when referencing campus count/locations |
| Timeline events | Static CMS content | Hardcoded milestones in Lava template |

## Dynamic vs Static Content

| Content | Type | Notes |
|---------|------|-------|
| Vision statement | Static | CMS-managed, rarely changes |
| Mission commitments | Static | CMS-managed |
| History timeline | Static | Updated manually when milestones are reached |
| Vision goal | Static | Fixed target (120,000 by 2030) |
| Scripture quote | Static | Fixed reference |
| Strategic objectives | Static | Fixed targets for 2030 |
| Campus references | Dynamic | Synced from Rock Campus entity |

## Interactions

- **Timeline**: Could be interactive with scroll-triggered animation. Each milestone appears as the user scrolls down the page.
- **Anchor links**: Sections can be deep-linked for sharing specific parts of the vision.

## Payload CMS Modeling

```
Page (vision)
  - HeroBlock (Vision 2030 hero)
  - ContentBlock (vision statement)
  - ContentBlock (mission commitments - 3 pillars, displayed as 3-column layout)
  - TimelineBlock (history timeline)
      - TimelineItem (2012 - Founded)
      - TimelineItem (Feb 2013 - First public service)
      - TimelineItem (Mar 2014 - Unichurch)
      - TimelineItem (Feb 2019 - Vision 2030 launch)
      - TimelineItem (2021 - Central campus, Albany)
      - TimelineItem (2025 - North campus purchased)
      - TimelineItem (Current - 700+ members)
  - ContentBlock (vision goal - 120K)
  - QuoteBlock (1 Corinthians 1:23-24)
  - ContentBlock (strategic objectives - list layout)
  - CTABlock (join the vision)
```

### Payload Collections Used

- `pages` - The vision page itself with all block content
- `campuses` (synced) - Referenced for campus count context only
