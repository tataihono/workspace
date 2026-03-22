---
title: "Contact Page - Improvement Recommendations"
slug: /contact
---

# Contact Page - Improvement Recommendations

## UX

- Add an interactive map showing all 3 campus locations (e.g., Google Maps or Mapbox embed)
- Add click-to-call for phone numbers
- Show estimated response time for form submissions (e.g., "We typically respond within 24-48 hours")
- Add an FAQ section for common questions to reduce form submissions
- Consider adding a live chat option for immediate support

## Performance

- Map embed should lazy load (only load when scrolled into view)
- Form should have client-side validation before any server round-trip
- Consider prefetching the form submission API route

## Accessibility

- Form needs proper `<label>` associations with all input fields
- Error messages should be announced to screen readers via `aria-live` regions
- Map must have a text alternative listing all campus addresses
- Focus management: after form submission, focus should move to the success/error message
- Ensure sufficient color contrast on form validation states

## SEO

- Add `ContactPage` structured data (schema.org)
- Add `LocalBusiness` structured data per campus with geo coordinates
- Target keyword: "contact church Auckland"
- Ensure the page has a clear meta description mentioning contact, location, and Auckland

## Content

- Add office hours if applicable (e.g., "Our office is open Monday-Friday 9am-5pm")
- Add directions and transport information per campus (parking, public transport)
- Consider splitting campus info into individual campus pages with more detail

## Mobile

- Form should be easy to fill on mobile (appropriate input types, large tap targets)
- Click-to-navigate for addresses (deep link to Google Maps / Apple Maps)
- Phone number should be click-to-call (`tel:` link)
- Consider a sticky "Submit" button on longer form views
