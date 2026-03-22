---
title: "About Page - Component Map"
page: /about
---

# About Page - Component Map

## Component Breakdown

| Order | Section | Component | Shared Spec | Data Source |
|-------|---------|-----------|-------------|-------------|
| 1 | Hero | Hero Banner (interior) | heroes/hero-banner.md | Payload page |
| 2 | Mission | Section Block | content/section-block.md | Payload page content |
| 3 | Who We Are | Section Block | content/section-block.md | Payload page content |
| 4 | What We Believe | Accordion | content/accordion-faq.md | Payload page blocks (AccordionBlock) |
| 5 | Our Team | Team Member Cards grid | cards/team-member-card.md | Payload team-members (synced from Rock Groups) |
| 6 | Campus Cards | Campus Card grid | cards/campus-card.md | Payload campuses (synced) |
| 7 | Connect CTA | CTA Banner | cta/cta-banner.md | Payload page |

## Page-Specific Notes

- **Anchor navigation**: The page supports anchor links for `#our-team` and `#what-we-believe` sections. These anchors are used in the site navigation and may be linked from external sources or search results.
- **Team grid layout**: The team member card grid uses a responsive layout (4-col desktop, 2-col tablet, 1-col mobile). Staff and leadership are displayed first, followed by apprentices.
- **Accordion state**: All accordion items start collapsed by default. Only one item should be open at a time (single-expand behavior).

## Payload Collections Used

- `pages` - The about page content and block configuration
- `team-members` (synced) - Staff, leadership, and apprentice records synced from Rock Groups #29482, #29485, #29486
- `campuses` (synced) - Campus locations and service times synced from Rock Campus entity
