---
title: "About Page - Implementation Instructions"
page: /about
---

# About Page - Implementation Instructions

## Overview

The About page is a comprehensive page covering Ev Church's mission, beliefs, and team. It is a key page for visitors evaluating the church, serving as one of the primary trust-building and informational destinations on the site.

## User Journey

- **Entry points**: Visitors arrive from the homepage, direct search, or the main navigation.
- **Intent**: Users want to learn about the church's identity, theology, and leadership before visiting.
- **Leads to**: Visit page, Contact page, specific ministry pages, campus pages.

## Content Zones

1. **Mission/About section** - Static introductory text about the church's mission and identity.
2. **What We Believe accordion** (`#what-we-believe`) - Seven expandable sections covering core doctrinal positions (God, Humanity, Bible, Jesus Christ, Salvation, Holy Spirit, Church).
3. **Our Team grid** (`#our-team`) - Photo grid of leadership, staff, and apprentices with names, roles, and email overlays on hover.
4. **Campus info** - Cards for each campus with location and service times.
5. **Connect CTA** - Call-to-action banner directing users to Visit and Contact pages.

## Rock CMS Data Sources

| Data | Source | Notes |
|------|--------|-------|
| Team members (staff) | Rock Group #29482 | Synced via About/OurTeam.lava |
| Team members (leadership) | Rock Group #29485 | Synced via About/OurTeam.lava |
| Team members (apprentices) | Rock Group #29486 | Synced via About/OurTeam.lava |
| Team photos | Person entity PhotoUrl | Rendered via `/GetImage.ashx?Guid={guid}` |
| Campuses | Campus entity | Service times and locations |
| Beliefs content | Static CMS content | Rendered via About/WhatWeBelieve.lava with collapse/accordion |
| Mission text | Static CMS content | ContentBlock |

## Dynamic vs Static Content

| Content | Type | Notes |
|---------|------|-------|
| Team members | Dynamic | Synced from Rock Groups; updates automatically when group membership changes |
| Campus info | Dynamic | Synced from Campus entity; reflects current service times and locations |
| Beliefs | Static | CMS-managed content, rarely changes |
| Mission text | Static | CMS-managed content |

## Interactions

- **Accordion expand/collapse**: Beliefs section uses accordion pattern. Each belief topic expands on click/tap to reveal full doctrinal statement.
- **Anchor navigation**: Direct links to `#our-team` and `#what-we-believe` sections for deep linking from other pages or search results.
- **Team photo grid**: Responsive grid with email hover overlay on each team member photo. On hover, member's email address becomes visible.

## Payload CMS Modeling

```
Page (about)
  - ContentBlock (mission statement)
  - ContentBlock (who we are)
  - AccordionBlock (what we believe)
      - AccordionItem (God)
      - AccordionItem (Humanity)
      - AccordionItem (Bible)
      - AccordionItem (Jesus Christ)
      - AccordionItem (Salvation)
      - AccordionItem (Holy Spirit)
      - AccordionItem (Church)
  - TeamGridBlock (our team)
      -> Relationship: team-members collection (synced from Rock Groups)
  - CardGridBlock (campuses)
      -> Relationship: campuses collection (synced from Rock Campus entity)
  - CTABlock (join us)
```

### Payload Collections Used

- `pages` - The about page itself
- `team-members` (synced) - Staff, leadership, and apprentice records synced from Rock Groups
- `campuses` (synced) - Campus locations and service times synced from Rock
