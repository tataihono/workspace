---
title: "Vision Page - Component Map"
page: /vision
---

# Vision Page - Component Map

## Component Breakdown

| Order | Section | Component | Shared Spec | Data Source |
|-------|---------|-----------|-------------|-------------|
| 1 | Hero | Hero Banner | heroes/hero-banner.md | Payload page |
| 2 | Vision Statement | Section Block | content/section-block.md | Payload page |
| 3 | Mission Pillars | Section Block (3-column) | content/section-block.md | Payload page |
| 4 | History Timeline | *Page-specific* | N/A | Payload page (custom block) |
| 5 | Vision Goal | Section Block | content/section-block.md | Payload page |
| 6 | Scripture Quote | Quote Block | content/quote-block.md | Payload page |
| 7 | Strategic Objectives | Section Block (list) | content/section-block.md | Payload page |
| 8 | CTA | CTA Banner | cta/cta-banner.md | Payload page |

## Page-Specific Components

### Timeline

- **Type**: Vertical timeline with year markers and milestone descriptions.
- **Usage**: Unique to this page, but should be built as a reusable `TimelineBlock` for Payload CMS.
- **Structure**: An ordered list (`<ol>`) of timeline items. Each item has a year/date marker and a content description.
- **Behavior**: Optionally animated on scroll (items fade in or slide in as the user scrolls). The "Current" item is visually distinguished from past milestones.
- **Responsive**: Single-column on all screen sizes; year markers shift from side-aligned (desktop) to top-aligned (mobile).
- **Payload block schema**:
  ```
  TimelineBlock
    - items: array of TimelineItem
        - year: string (e.g., "2012", "February 2013", "Current")
        - description: richText
        - isCurrent: boolean (optional, highlights the item)
  ```

## Payload Collections Used

- `pages` - The vision page content and block configuration
- `campuses` (synced) - Referenced for campus count context only
