# Central Campus - Component Breakdown

## Component Map

| Order | Section | Component | Shared Spec | Data Source |
|-------|---------|-----------|-------------|-------------|
| 1 | Hero | Hero Banner (campus variant) | heroes/hero-banner.md | Payload campuses (synced) - FeaturedImage, SlideImages |
| 2 | Campus Stats | *Inline in hero* | N/A | Payload campuses - establishmentYear, serviceTimes, address |
| 3 | Get Directions | Map Embed / Link | media/map-embed.md | Payload campuses - googlePlaceId |
| 4 | Events List | Event Card list | cards/event-card.md | Payload events (synced, filtered by campus) |
| 5 | Services Info | Section Block | content/section-block.md | Payload page |
| 6 | Other Campuses | Campus Card grid | cards/campus-card.md | Payload campuses (synced, exclude current) |
| 7 | Connect CTA | CTA Banner | cta/cta-banner.md | Payload page |

## Page-Specific Notes

Same component structure as North Campus (identical CampusDetail template). The campus hero includes a stats overlay showing establishment year, service time, address, and a directions link. This is a variant of the standard hero-banner component.

## Payload Collections Used

- **campuses** (synced from Rock, id: 3) - primary data source for campus details
- **events** (synced from Rock, filtered by campus) - upcoming events list
- **pages** - static content blocks (description, CTA copy)
