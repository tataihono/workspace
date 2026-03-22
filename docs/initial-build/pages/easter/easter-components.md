---
title: "Easter Page - Component Map"
page: /easter
---

# Easter Page - Component Map

## Component Inventory

| Order | Section | Component | Shared Spec | Data Source | Notes |
|-------|---------|-----------|-------------|-------------|-------|
| 1 | Hero | Hero Banner (Easter variant) | heroes/hero-banner.md | Payload page | Custom glassmorphic design, Noto Serif + Plus Jakarta Sans fonts |
| 2 | Services Schedule | *Page-specific: EventScheduleBlock* | N/A | Payload events (synced, Easter-filtered) + campuses (synced) | 3 services with date, time, locations |
| 3 | Scripture Quote | Quote Block | content/quote-block.md | Payload page | John 11:25 CSB |
| 4 | Visit Planning | Section Block | content/section-block.md | Payload page | Kids, parking, coffee info |
| 5 | Easter Story (x3) | *Page-specific: NarrativeBlock* | N/A | Payload page | Three days: Good Friday, Saturday, Easter Sunday. Each with image + text + scripture |
| 6 | FAQ | Accordion | content/accordion-faq.md | Payload page | 6 items |
| 7 | CTA | CTA Banner | cta/cta-banner.md | Payload page | "Plan Your Visit Now" |

## Page-Specific Components

### EventScheduleBlock

A grid or list of services, each displaying:
- Service name (e.g., "Good Friday", "Easter Sunday", "Easter Night")
- Date and time (with `<time>` element and `datetime` attribute)
- Description text
- One or more campus locations with addresses

This component is unique to seasonal pages. It pulls from synced event and campus collections in Payload, filtered to Easter-specific events.

**Fields:**
- `services` (array)
  - `name` (text)
  - `datetime` (datetime)
  - `description` (rich text)
  - `locations` (relationship to campuses collection, multiple)

### NarrativeBlock

A story section combining an image with narrative content. Used three times on the Easter page for the three-day Easter story. Each instance includes:
- Section image (e.g., "The Ultimate Cost", "The Silent Saturday", "Dawn of Hope")
- Label text (e.g., "Good Friday", "Saturday", "Easter Sunday")
- Heading
- Body text
- Optional scripture reference with attribution

This component could be reused for other seasonal narratives (e.g., Christmas story, Advent).

**Fields:**
- `image` (media)
- `label` (text)
- `heading` (text)
- `body` (rich text)
- `scripture` (group, optional)
  - `text` (text)
  - `reference` (text)
  - `translation` (text)

## Payload Collections Used

| Collection | Type | Usage on This Page |
|------------|------|-------------------|
| `pages` | Seasonal template | Page content, hero, visit planning, FAQ, CTA |
| `events` | Synced from Rock | Easter service dates, times, descriptions (filtered to Easter) |
| `campuses` | Synced from Rock | Location names, addresses for each service |

## Shared Components Referenced

- **heroes/hero-banner.md** — Base hero banner component, extended with Easter-specific glassmorphic styling and custom fonts
- **content/quote-block.md** — Scripture/quote block with citation support
- **content/section-block.md** — Flexible content section with icon support
- **content/accordion-faq.md** — Expandable FAQ accordion with ARIA support
- **cta/cta-banner.md** — Call-to-action banner with multiple button options
