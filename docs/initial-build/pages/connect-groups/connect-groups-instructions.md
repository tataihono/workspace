---
title: "Connect Groups Page - Build Instructions"
slug: /connect-groups
source_url: https://www.ev.church/connect-groups
---

# Connect Groups Page - Build Instructions

## Overview

Information page about midweek small groups (Connect Groups). Functions as a pathway page directing users to Newish Connect as the entry point.

## User Journey

Entry points: nav "Next Steps > Connect Groups". Goal: understand what connect groups are and start with Newish Connect.

## Content Zones

1. **Hero banner** - Connect Groups image
2. **Description** - What connect groups are and what they do
3. **Newish Connect callout** - 4-week entry point explanation
4. **CTA - Newish Connect** - Link to /newish
5. **CTA - New Here?** - Link to /visit

## Rock CMS Data

Connect groups list is available via `MinistryHub/ConnectGroups/List.lava` (Swiper carousel of groups). The current page shows mostly static description content. The `List.lava` template queries Groups with images for a carousel display.

## Dynamic vs Static

- **Description**: Static CMS content.
- **Connect group listings** (if shown): Dynamic, synced from Rock Groups.

## Interactions

Minimal on the current page. The carousel view (from `List.lava`) would have Swiper navigation controls.

## Payload Modeling

Model as a Payload page with the following blocks:

- `HeroBlock` - Banner image
- `ContentBlock` - Description text
- `CTABlock` - Newish Connect link
- `CTABlock` - New Here link

**Note**: The Lava templates suggest there is a richer connect groups list (carousel with group cards) that could be added to this page using data from a Payload `connect-groups` collection synced from Rock Groups.
