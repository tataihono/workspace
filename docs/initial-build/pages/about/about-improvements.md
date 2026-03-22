---
title: "About Page - Improvement Recommendations"
page: /about
---

# About Page - Improvement Recommendations

## UX

- Add anchor navigation links at the top of the page for quick jumps to Beliefs and Team sections.
- Provide individual team member bios, either as click-to-expand panels or separate profile pages.
- Add campus photos alongside campus info cards to give visitors a visual sense of each location.

## Performance

- Lazy load team member photos (11+ images on the page). Use `loading="lazy"` on all team photo `<img>` elements.
- Use placeholder/blur-up technique for team photos to improve perceived load time.

## Accessibility

- Accordion needs proper ARIA attributes: `aria-expanded`, `aria-controls`, and `aria-labelledby` on each accordion trigger and panel.
- Team member emails must be accessible without hover. Currently emails are only visible on hover overlay, which is inaccessible to keyboard and screen reader users. Provide emails in the DOM as visually hidden text or as always-visible links on mobile.
- Beliefs heading hierarchy should be correct: use `h3` within each accordion section, nested under the `h2` "What We Believe" heading.

## SEO

- Add `AboutPage` structured data (schema.org) to the page.
- Add `Person` structured data for the Senior Pastor (Rowan Hilsden) with role, affiliation, and image.
- Target keywords: "evangelical church Auckland", "what we believe", "church beliefs".
- Ensure anchor links (`#our-team`, `#what-we-believe`) work correctly for direct navigation from search result sitelinks.

## Content

- Consider adding a church history summary on this page (or link to the Vision page timeline).
- Add staff bios or "get to know" content to build personal connection with visitors.
- Link each belief statement to relevant sermon series that explore that doctrine in depth.

## Mobile

- Team grid should be 2-column on tablet and 1-column on mobile.
- Accordion should work smoothly on touch devices with appropriately sized tap targets (minimum 44x44px).
- Ensure campus cards stack vertically on small screens.
