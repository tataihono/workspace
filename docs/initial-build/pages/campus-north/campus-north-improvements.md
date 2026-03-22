# North Campus - Improvement Recommendations

## UX

- Add an embedded Google Map showing the campus location, not just a directions link
- Add parking information and access details for 9-11 Rothwell Avenue
- Show the next upcoming service with a live countdown timer
- Add a dedicated photo gallery section beyond the hero carousel
- Add connect group information specific to the North Campus

## Performance

- Implement ISR (Incremental Static Regeneration) with revalidation triggered by event or campus webhooks from Rock
- Lazy load event cards below the fold to improve initial page load

## Accessibility

- Image carousel needs descriptive alt text per slide (currently empty or generic)
- Get Directions link should indicate it opens an external application (e.g., `aria-label="Get Directions (opens Google Maps)"`)
- Event dates need proper `<time datetime="">` markup for screen readers and SEO

## SEO

- Add LocalBusiness structured data (JSON-LD) with geo coordinates for the Rosedale location
- Target keywords: "church Rosedale", "church North Shore Auckland", "Sunday church Rosedale"
- Add Event structured data (JSON-LD) for each upcoming event
- Ensure unique meta description referencing North Shore / Rosedale

## Content

- Add a campus-specific welcome message from the campus pastor
- Add campus-specific photos showing community life, worship, and the building exterior
- Show connect groups that meet at or are associated with the North Campus

## Mobile

- Get Directions should deep-link to the native maps app on mobile devices
- Service time should be prominently displayed near the top of the page
- Events list should be a horizontally scrollable list on small screens to save vertical space
