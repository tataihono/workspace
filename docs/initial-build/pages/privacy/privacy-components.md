---
title: "Privacy Policy Page - Component Map"
slug: /privacy
---

# Privacy Policy Page - Component Map

| Order | Section | Component | Shared Spec | Data Source |
|-------|---------|-----------|-------------|-------------|
| 1 | Policy Content | Section Block | content/section-block.md | Payload page (rich text) |

## Component Notes

Minimal component needs -- this is a simple text page.

### Section Block

- Contains the full privacy policy as rich text
- Heading hierarchy: H1 (Privacy Policy), H2 for each section (Introduction, Collection, Purpose, Intended Recipients, Access)
- Includes unordered lists within several sections
- Contains one internal link to `/contact` in the Access section
- No images, media, or interactive elements
- Standard prose styling with appropriate paragraph spacing

### Layout

- Uses FullWidthNarrow layout for comfortable reading width
- No sidebar, no secondary content areas
- Responsive: content reflows naturally on mobile with no special treatment needed
