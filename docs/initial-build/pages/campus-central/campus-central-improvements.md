# Central Campus - Improvement Recommendations

## UX

- Add an embedded Google Map showing the campus location, not just a directions link
- Add parking information and access details for 80 Olsen Ave
- Show the next upcoming service with a live countdown timer
- Add a dedicated photo gallery section beyond the hero carousel
- Add connect group information specific to the Central Campus
- As the founding campus (est. 2012), consider highlighting historical significance
- Consider showing the church founding story inline on this page

## Performance

- Implement ISR (Incremental Static Regeneration) with revalidation triggered by event or campus webhooks from Rock
- Lazy load event cards below the fold to improve initial page load

## Accessibility

- All 5 gallery images currently have no alt text - add descriptive alt text in Payload
- Image carousel needs descriptive alt text per slide
- Get Directions link should indicate it opens an external application
- Event dates need proper `<time datetime="">` markup for screen readers and SEO

## SEO

- Add LocalBusiness structured data (JSON-LD) with geo coordinates for the Hillsborough location
- Target keywords: "church Hillsborough Auckland", "church Mt Roskill area"
- Add Event structured data (JSON-LD) for each upcoming event
- Ensure unique meta description referencing Hillsborough / central Auckland

## Content

- As the original campus, this page could have richer historical content about the church's founding
- 5 images currently have no alt text - add descriptive alt text in Payload media library
- Add a campus-specific welcome message from the campus pastor
- Add campus-specific photos showing community life, worship, and the building exterior
- Show connect groups that meet at or are associated with the Central Campus

## Mobile

- Get Directions should deep-link to the native maps app on mobile devices
- Service time should be prominently displayed near the top of the page
- Events list should be a horizontally scrollable list on small screens to save vertical space
