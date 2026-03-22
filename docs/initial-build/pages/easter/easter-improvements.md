---
title: "Easter Page - Improvement Recommendations"
page: /easter
---

# Easter Page - Improvement Recommendations

## UX

- Add a **countdown timer** to Easter services on the hero section to build anticipation
- Allow users to **select a service and get reminders** via email or calendar download (.ics file)
- Add a **campus selector** at the top of the page to filter services by location, so users see only relevant services
- Create an **interactive timeline** for the Easter story section, allowing users to progress through the three days
- Consider adding **video content** such as past Easter service highlights or a short invitation video from a pastor

## Performance

- **Custom fonts** (Noto Serif, Plus Jakarta Sans) add extra weight on top of the main site's TypeKit fonts. Consider limiting font weights loaded or using system font fallbacks for non-critical text
- **Glassmorphic effects** (backdrop-filter: blur) may be GPU-intensive on older devices. Provide a simpler fallback for devices that do not support backdrop-filter
- **Images** for the 3-day Easter story should be optimized with modern formats (WebP/AVIF), responsive srcset, and lazy loading
- This is a **high-traffic seasonal page** — ensure CDN caching is configured with appropriate cache headers. Pre-warm the cache before Easter season marketing pushes

## Accessibility

- **Glassmorphic panels** need sufficient contrast ratios. Test all text on semi-transparent backgrounds against WCAG 2.1 AA standards. Provide solid fallback backgrounds where contrast is insufficient
- **FAQ accordion** needs proper ARIA attributes: `aria-expanded`, `aria-controls`, and `role="region"` on answer panels
- **Scripture quotes** should use proper citation markup (`<blockquote>` with `<cite>` and `<footer>`)
- **Service schedule** should use semantic `<time>` elements with `datetime` attributes for dates and times
- Ensure all **Material Design icons** have appropriate `aria-hidden="true"` and that adjacent text provides meaning

## SEO

- Target keywords: "Easter church service Auckland", "Good Friday service Auckland 2026", "Easter events Auckland"
- Add **Event structured data** (schema.org/Event) for each of the three services, including date, time, location, and description
- Add **FAQ structured data** (schema.org/FAQPage) for the six FAQ items to enable rich results in Google
- This should be a **high-priority SEO page** during Easter season — increase internal linking from homepage, blog, and location pages
- Consider URL strategy: keep `/easter` as an evergreen URL (recommended) rather than `/easter/2026`, updating content each year. This preserves link equity and backlinks

## Content

- Add **directions and transport information** per campus specifically for Easter (public transport options, ride-share drop-off points, overflow parking)
- Add **"Invite a friend" sharing functionality** with pre-written social media and messaging share text
- Consider a **separate kids-focused Easter section** for parents, explaining what kids will experience at Easter services
- Add **post-Easter follow-up content** — a "what's next?" section for first-time visitors who attended Easter, linking to Alpha, small groups, or next steps

## Mobile

- **Service schedule** should be easily scannable on mobile — consider a card-based layout with clear visual hierarchy
- **CTA buttons** should be prominent and thumb-friendly (minimum 44px touch targets)
- **Glassmorphic design** should degrade gracefully on older mobile browsers that do not support `backdrop-filter` — use a solid semi-transparent background as fallback
- Consider a **sticky "Find Your Service" CTA** on mobile that remains visible as users scroll

## Seasonal Template

Build this as a **reusable seasonal page template** in Payload CMS. The same structure (hero, services schedule, story narrative, FAQ, CTA) should work for:
- **Christmas** services and events
- **Special Sundays** (e.g., church anniversary, baptism Sunday)
- **Conferences** and multi-session events
- **Outreach events** (e.g., community days)

Make it easy for content editors to:
- Create a new seasonal page from the template
- Customize fonts and color scheme per page (page-level style overrides)
- Add or remove blocks as needed
- Set publish and unpublish dates for seasonal visibility
- Duplicate a previous year's page and update dates/content
