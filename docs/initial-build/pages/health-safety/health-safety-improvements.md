---
title: "Health & Safety Page - Improvement Recommendations"
slug: /hs
---

# Health & Safety Page - Improvement Recommendations

## UX

- Make the hazard/incident forms more prominent and easier to find (the red banner is good, keep it)
- Add quick-action buttons for emergency contacts (e.g., emergency services, first aid officers per campus)
- Consider a dashboard view showing recent H&S updates or announcements
- Group resources by type (policies, forms, training) with clear visual separation
- Add descriptions to each resource link so users know what they are clicking

## Performance

- Simple page with no heavy assets -- no performance concerns
- External links to Google services load independently and do not affect page performance

## Accessibility

- Ensure Google Form links open in new tab with appropriate warnings (e.g., "opens in a new tab" in link text or `aria-label`)
- External links should have `rel="noopener noreferrer"`
- Alert banner must have sufficient color contrast (white text on #b82023 red)
- Phone number should use `tel:` link for accessibility and mobile usability
- Ensure heading hierarchy is correct (H1 -> H2 for sections)

## SEO

- Low priority -- this is an internal-facing page
- Consider adding `noindex` meta tag to keep it out of search results
- Not a page that needs to rank for any keywords

## Content

- Add emergency procedures section directly on the page (not just linked documents)
- Add campus-specific evacuation routes and assembly points
- Keep contact info up to date -- verify Austin Ibarra is still HSC Chair periodically
- Consider adding a "Report an Issue" form directly on the page instead of linking to external Google Forms
- Add a section for recent H&S updates or meeting minutes
- Include first aid officer names and contact details per campus
- Add a section on H&S induction requirements for new volunteers

## Mobile

- Quick-access buttons for forms should be easy to tap (minimum 44x44px touch target)
- Phone number should be click-to-call (`tel:` link)
- Alert banner buttons should stack vertically on small screens
- Resource links should have generous tap targets
