---
title: "Give Page - Improvement Recommendations"
slug: /give
---

# Give Page - Improvement Recommendations

## UX

- Consider creating a branded giving landing page on the main site before redirecting to the external platform
- Show giving campaign previews on ev.church (campaign name, description, progress) before sending users to the external platform
- Add giving impact stories and statistics to encourage generosity (e.g., "Your giving supports X ministries")
- Provide clear context about what each fund supports

## Performance

- Redirect should be fast -- implement as a server-side redirect (not client-side JavaScript)
- If building a landing page, keep it lightweight for fast load times

## Accessibility

- Ensure the redirect is communicated properly to assistive technology
- If linking to an external platform, use appropriate `aria-label` (e.g., "Give to Ev Church - opens external giving platform")
- External link indicators should be visible and announced

## SEO

- Redirect should be 301 (permanent) instead of 307 if the destination is always the same
- Add canonical tags appropriately to avoid duplicate content issues
- If building a landing page, target keywords like "give church Auckland" or "donate ev church"

## Content

- Add a "Why Give?" section explaining the biblical basis and church vision for generosity
- Show what giving supports: ministries, building fund, community programs, missions
- Add recurring giving encouragement with clear benefits
- Include testimonials or stories about giving impact
- Explain the different campaigns and their purposes

## Future Enhancements

- **Evaluate bringing giving in-house** with Stripe integration for:
  - Better UX with consistent branding
  - Data ownership (giving history, reports, tax receipts)
  - Integration with member portal (view giving history, download statements)
  - Reduced dependency on third-party platform
  - Lower transaction fees potentially
- **Giving dashboard** in a future member portal showing:
  - Giving history and trends
  - Tax receipt downloads
  - Recurring gift management
  - Campaign progress and updates
- **Text-to-give** option for quick mobile giving
- **QR codes** displayed at campuses linking to the giving page
