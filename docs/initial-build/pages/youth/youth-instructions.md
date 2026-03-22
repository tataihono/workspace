---
title: "Youth Page - Build Instructions"
slug: /youth
source_url: https://www.ev.church/youth
---

# Youth Page - Build Instructions

## Overview

Youth ministry landing page. Targets parents and teens. Two programs: Juniors (yr 6-9) and Seniors (yr 10-13), meeting Friday nights.

## User Journey

Entry points: nav "Next Steps > Youth", or parents/teens searching for youth activities. Goal: encourage attendance at Friday nights.

## Content Zones

1. **Hero banner** - Ev Youth banner image
2. **Who We Are** - Ministry overview and purpose
3. **Youth Team** - Leader description with group photos (4 images)
4. **Juniors program** - Grade range, schedule, description
5. **Seniors program** - Grade range, schedule, description
6. **CTA** - "New Here?" linking to /visit

## Rock CMS Data

Static content rendered via `NextSteps/Youth.lava` template. Team photos are static images stored in `/Content/EvChurch/`.

## Dynamic vs Static

All static content. No dynamic Rock data on this page.

## Interactions

Minimal -- read-only content page with no interactive elements.

## Payload Modeling

Model as a Payload page with the following blocks:

- `HeroBlock` - Banner image
- `ContentBlock` - Who We Are text
- `ImageGalleryBlock` - Leader photos (4 images)
- Repeater for programs, each containing:
  - `name` (string)
  - `gradeRange` (string)
  - `time` (string)
  - `description` (richText)
- `CTABlock` - New Here link

Alternatively, model as a `ministries` collection entry.

## Images

- `Ev_Youth_Banner_Solid.png` - Hero banner
- `youthleaders-all.jpg` - All leaders group photo
- `youthleaders-fun.jpg` - Leaders candid photo
- `youthleaders-junior1.jpg` - Junior leaders photo
- `youthleaders-senior.jpg` - Senior leaders photo

All from `/Content/EvChurch/`.
