---
title: "Kids Page - Build Instructions"
slug: /kids
source_url: https://www.ev.church/kids
---

# Kids Page - Build Instructions

## Overview

Kids ministry landing page. Targets parents considering Ev Church, reassuring them about children's safety and program quality.

## User Journey

Entry points: nav "Next Steps > Kids", Visit page, or direct search by parents. Goal: build confidence to bring children.

## Content Zones

1. **Hero** - Ev Kids banner image
2. **Intro message** - Partnership with parents, safe environment messaging
3. **Three program sections** - Preschool, Primary, Fusion (each with title, age range, description)
4. **FAQ accordion** - 3 items (check-in, first-time visitors, staff qualifications)
5. **CTA** - "New Here?" linking to /visit

## Rock CMS Data

Mostly static content rendered via `NextSteps/Kids.lava` template. No dynamic data fetched from Rock API on this page.

## Dynamic vs Static

All static CMS content. No Rock API data on this page.

## Interactions

- FAQ accordion expand/collapse

## Payload Modeling

Model as a Payload page with the following blocks:

- `HeroBlock` - Banner image
- `ContentBlock` - Intro message
- `CardGridBlock` or repeater for 3 programs, each containing:
  - `title` (string)
  - `ageRange` (string)
  - `description` (richText)
- `AccordionBlock` - FAQ items array, each with `question` and `answer`
- `CTABlock` - New Here link

Alternatively, model as a Payload `ministries` collection entry with a `programs` array and `faq` array.

## Images

- `ev-kids.png` from `/Content/EvChurch/` (hero banner)
