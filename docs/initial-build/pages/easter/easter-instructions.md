---
title: "Easter Page - Build Instructions"
page: /easter
---

# Easter Page - Build Instructions

## Overview

Seasonal landing page for Easter services at Ev Church. This page has a custom design that is distinct from the main site, using different fonts and glassmorphic styling. It is a key outreach page targeting both existing church members and unchurched visitors searching for Easter services in Auckland.

## User Journey

- **Entry points:** Homepage Easter banner, social media campaigns (Facebook, Instagram), Google search ("Easter church Auckland", "Good Friday service Auckland"), direct links shared by members
- **Goal:** Plan a visit to an Easter service — understand what to expect, find a service time and location, and feel welcomed
- **Exit points:** Location pages (directions), plan your visit page, new here page

## Content Zones

1. **Hero** with CTAs ("Find Your Service", "Our Locations")
2. **Services Schedule** — 3 services across campuses (Good Friday, Easter Sunday morning, Easter Night)
3. **Scripture Quote** — John 11:25 CSB
4. **Visit Planning Info** — parking, kids programs, coffee
5. **Easter Story** — 3-day narrative (Good Friday, Saturday, Easter Sunday) each with image and text
6. **FAQ Accordion** — 6 expandable items
7. **Final CTA** — "Plan Your Visit Now", "New Here?"

## Rock CMS Data

- **Events:** Easter-specific events pulled via `Special/Easter/` Lava templates
- **Campus locations and service times:** Synced from Rock campuses collection
- **Lava templates:** Custom templates under `Special/Easter/` for Easter event rendering

## Dynamic vs Static Content

| Content | Type | Source |
|---------|------|--------|
| Service dates and times | Dynamic | Synced from Rock events |
| Campus locations and addresses | Dynamic | Synced from Rock campuses |
| Easter Story (3 days narrative) | Static | CMS page content |
| FAQ content | Static | CMS page content |
| Hero copy and imagery | Static | CMS page content |
| Scripture quote | Static | CMS page content |

## Interactions

- **FAQ accordion:** Expand/collapse for each of the 6 questions
- **Anchor navigation:** "Find Your Service" CTA scrolls to the services schedule section
- **External links:** Location links, plan your visit, new here

## Custom Design

This page uses different fonts from the main site:
- **Noto Serif** — headings and scripture quotes (replaces the main site's TypeKit serif)
- **Plus Jakarta Sans** — body text (replaces the main site's TypeKit sans-serif)

Additional custom styling:
- **Glassmorphic panels** — semi-transparent panels with backdrop blur and subtle borders
- **High-contrast text** — ensuring readability over image backgrounds
- **Material Design icons** — used for service details (event, place, etc.)
- **Section images** — each of the three Easter Story days has a dedicated image

The rebuild should support **custom page-level styling overrides** so seasonal pages can diverge from the main site theme without affecting global styles.

## Integrations

- Campus locations with full addresses for each service
- No external integrations (no registration, no ticketing)

## Seasonal Template Pattern

This page serves as a template for seasonal events. The same structural pattern should work for:
- Christmas services
- Special Sundays
- Conferences and events

In Payload CMS, model this as a **"seasonal event page" template/block set** that content editors can duplicate and customize for each seasonal event.

## Payload CMS Modeling

**Page type:** Seasonal Event Page (template)

**Blocks:**

| Block | Purpose | Notes |
|-------|---------|-------|
| HeroBlock | Custom Easter hero | Supports custom design overrides (fonts, glassmorphic style) |
| EventScheduleBlock | Services with dates/locations | Links to synced events and campus collections |
| QuoteBlock | Scripture reference | Attribution and translation fields |
| ContentBlock | Visit planning info | Flexible rich text with icon support |
| NarrativeBlock | 3-day Easter story | Image + heading + body + optional scripture. Repeatable. |
| AccordionBlock | FAQ section | Expandable question/answer pairs |
| CTABlock | Final calls to action | Multiple button options with link targets |

**Collections used:**
- `pages` — seasonal template page
- `events` — synced from Rock, filtered to Easter events
- `campuses` — synced from Rock, provides locations and addresses

## Key Messaging Themes

- **Peace through sacrifice** — true peace came at a cost
- **Hope after loss** — death lost its grip
- **Inclusive welcome** — everyone is invited, no pressure
- **Grace-centered** — forgiveness is a gift, not earned
