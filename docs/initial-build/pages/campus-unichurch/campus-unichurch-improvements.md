# Unichurch Campus - Improvement Recommendations

## UX

- Add an embedded Google Map showing Old Government House location, not just a directions link
- Show university-specific directions and access information (building entry, campus navigation)
- Evening service time (5:15pm) should be prominently differentiated from other campuses' morning services
- Consider student-specific features such as semester schedule awareness and welcome week information
- Add a dedicated photo gallery section beyond the hero carousel
- Add connect group information specific to the Unichurch campus

## Performance

- Implement ISR (Incremental Static Regeneration) with revalidation triggered by event or campus webhooks from Rock
- Lazy load event cards below the fold to improve initial page load

## Accessibility

- Image carousel needs descriptive alt text per slide (currently empty)
- Get Directions link should indicate it opens an external application
- Event dates need proper `<time datetime="">` markup for screen readers and SEO

## SEO

- Add LocalBusiness structured data (JSON-LD) with geo coordinates for Old Government House
- Target keywords: "university church Auckland", "student church Auckland", "evening church service Auckland"
- Add Event structured data (JSON-LD) for each upcoming event
- Ensure unique meta description referencing University of Auckland / student community

## Content

- University context is unique - could feature student testimonials
- Link to student-specific programs and groups
- Show semester-aware scheduling (term dates vs break periods, as service patterns may differ)
- Add a campus-specific welcome message aimed at students
- Add campus-specific photos showing student community, worship, and the Old Government House venue

## Mobile

- Get Directions should deep-link to the native maps app on mobile devices
- Service time should be prominently displayed near the top of the page
- Events list should be a horizontally scrollable list on small screens to save vertical space

## Audience

- This campus serves a distinct demographic (university students and young adults)
- UI and content tone could reflect a younger audience
- Consider integration with university calendar (semester start, exam periods, breaks)
- Social media presence may be more important for this demographic - consider embedding Instagram feed or highlighting social channels more prominently
