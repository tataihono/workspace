---
title: "Vision Page - Improvement Recommendations"
page: /vision
---

# Vision Page - Improvement Recommendations

## UX

- Make the timeline interactive with scroll-triggered animations (items fade or slide in as the user scrolls).
- Add progress indicators for strategic objectives showing current state vs target (e.g., "3 of 6 campuses").
- Consider infographic-style data visualization for the 120K goal, showing the gap between current (30K) and target (150K) believers.
- Add a "How you can help" section with actionable steps visitors can take (pray, give, serve, invite).

## Performance

- This is a content-heavy page with minimal dynamic data. It should be fully static-generated and cached at the CDN edge.
- No lazy loading concerns -- the page contains no user-generated images, only static content.

## Accessibility

- Timeline needs proper semantic markup. Use an ordered list (`<ol>`) for chronological items.
- Scripture quotes need citation markup: use `<blockquote>` with `<cite>` for the reference.
- Ensure sufficient color contrast on timeline year markers and connecting lines against the background.
- All text content should be readable at 200% zoom without horizontal scrolling.

## SEO

- Target keywords: "church vision Auckland", "church planting NZ", "evangelical church New Zealand".
- Add `Organization` structured data with founding date (2012) and location.
- Headings should follow proper hierarchy: single `h1`, `h2` for each major section, `h3` for sub-items.
- Consider adding FAQ structured data for common questions about the church's vision and goals.

## Content

- Update statistics as milestones are reached (e.g., member count, campus count).
- Add stories and testimonials from people whose lives have been impacted by the vision.
- Consider embedding video content from the Senior Pastor explaining the vision.
- Link each strategic objective to relevant programs (e.g., training hub links to Explaining Christianity, church planting links to campus pages).

## Mobile

- Timeline should remain single-column on mobile with year markers above content (not side-aligned).
- Strategic objectives should stack vertically with clear visual separation.
- Large numbers (120,000, 2,030, 150,000) should be prominent and visually striking on all screen sizes.
- Mission pillars should stack from 3-column to single-column on mobile.
