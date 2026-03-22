---
title: Homepage - Component Breakdown
page: Homepage
slug: /
---

# Homepage - Component Breakdown

## Component Map

| Order | Section | Component | Shared Spec | Data Source | Notes |
|-------|---------|-----------|-------------|-------------|-------|
| 1 | Hero | Image Carousel (hero variant) | `heroes/hero-banner.md` | Payload `pages.blocks` (HeroBlock) | Swiper autoplay, multiple slides with CTA overlay |
| 2 | Easter Banner | CTA Banner | `cta/cta-banner.md` | Payload `pages.blocks` (CTABlock) | Seasonal - removable via `visible` toggle |
| 3 | Welcome | Section Block | `content/section-block.md` | Payload `pages.blocks` (ContentBlock) | Heading + paragraph, no image |
| 4 | Photo Gallery | Image Carousel (gallery variant) | `media/image-carousel.md` | Payload `pages.blocks` (ImageGalleryBlock) | 14 images, navigation arrows, no autoplay |
| 5 | What's Happening | Event Cards list | `cards/event-card.md` | Payload `events` collection (synced) | Campus-filtered, 4-week window |
| 6 | Sermon Series | CTA Banner (sermon variant) | `cta/cta-banner.md` | Payload `sermon-series` collection (synced) | Latest series image + description |
| 7 | Campus Cards | Campus Card grid | `cards/campus-card.md` | Payload `campuses` collection (synced) | 3-column grid layout |
| 8 | Connect CTA | CTA Banner | `cta/cta-banner.md` | Payload `pages.blocks` (CTABlock) | Two buttons: Contact Us, New Here? |

## Page-Specific Components

None. All components on the homepage use shared component specifications. No page-specific components are required.

## Payload Collections Used

| Collection | Type | Usage on This Page |
|------------|------|--------------------|
| `pages` | Native | Page content, hero block, welcome block, Easter banner, connect CTA |
| `events` | Synced from Rock | What's Happening event cards |
| `sermon-series` | Synced from Rock | Latest Sermon Series section |
| `campuses` | Synced from Rock | Campus cards in Join Us section |

## Component Variants

### Image Carousel

This page uses two variants of the Image Carousel component:

1. **Hero variant** (`heroes/hero-banner.md`): Full-width, autoplay enabled, text overlay with heading and CTAs, pagination dots, no navigation arrows.
2. **Gallery variant** (`media/image-carousel.md`): Contained width, no autoplay, no text overlay, navigation arrows (prev/next), multiple visible slides.

### CTA Banner

This page uses three instances of the CTA Banner component:

1. **Easter Banner:** Seasonal promotional variant with title, subtitle, body text, and single CTA. Has a `visible` toggle for seasonal control.
2. **Sermon Series:** Image + text layout variant with series artwork on one side and description text with CTA on the other.
3. **Connect CTA:** Minimal variant with heading, short body text, and two CTA buttons side by side.

## Component Dependencies

| Component | JavaScript Dependencies | Notes |
|-----------|------------------------|-------|
| Image Carousel (hero) | Swiper.js | Autoplay, pagination modules |
| Image Carousel (gallery) | Swiper.js | Navigation module |
| Event Cards | None | Static rendering, data fetched at build/ISR time |
| Campus Cards | None | Static rendering, data fetched at build/ISR time |
| CTA Banners | None | Static rendering |
| Section Block | None | Static rendering |

## Responsive Behavior

| Component | Desktop | Tablet | Mobile |
|-----------|---------|--------|--------|
| Hero Carousel | Full-width, large text overlay | Full-width, medium text | Full-width, smaller text, stacked CTAs |
| Easter Banner | Horizontal layout | Horizontal layout | Stacked vertical |
| Photo Gallery | 3-4 visible slides | 2-3 visible slides | 1-2 visible slides |
| Event Cards | Horizontal row | 2-column grid | Single column stack |
| Campus Cards | 3-column grid | 2-column grid | Single column stack |
| Sermon Series | Side-by-side (image + text) | Side-by-side | Stacked (image above text) |
| Connect CTA | Inline buttons | Inline buttons | Stacked buttons |
