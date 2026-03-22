---
title: Visit Page - Improvement Suggestions
page: Visit
slug: /visit
---

# Visit Page - Improvement Suggestions

## UX Improvements

- **Interactive map:** Add an embedded interactive map (Google Maps or Mapbox) showing all three campus locations with pins. Allow visitors to click a pin to see campus details and get directions. This is especially helpful for visitors unfamiliar with Auckland.
- **Photo or video of a typical service:** Include a short photo gallery or video clip showing what a service looks like -- people singing, the auditorium, kids programs, fellowship time. Seeing real photos reduces anxiety for first-time visitors.
- **Parking information:** Add parking details per campus (availability, street parking, nearby parking buildings). Practical logistics like parking are a common concern for first-time visitors.
- **Next service countdown:** Show the next upcoming service time with a live countdown (e.g., "Next service in 3 days, 4 hours"). This creates urgency and helps visitors plan.
- **Campus-specific detail pages:** Link each campus card to a dedicated campus page with more detail (photos of the venue, staff, detailed directions, campus-specific events).
- **Progress indicator on form:** If the form is multi-step or has the spouse toggle, consider a small progress indicator or clear section labels to guide visitors through completion.

## Performance Improvements

- **Fast form loading:** This page has minimal images, so the primary performance focus should be on fast form interactivity. Ensure the form is interactive within the first meaningful paint.
- **Minimal JavaScript:** The only JavaScript needed is for form validation, spouse toggle, and phone formatting. Keep the JS bundle small by avoiding heavy form libraries if native validation suffices.
- **Static generation:** Since page content is mostly static (campus data changes infrequently), this page is a strong candidate for full static generation with ISR revalidation on a longer interval (e.g., 3600 seconds).

## Accessibility Improvements

- **Form labels and error states:** Ensure every form field has a visible `<label>` element properly associated via `for`/`id` attributes. Error messages should be announced to screen readers using `aria-live="polite"` or `aria-describedby`.
- **Phone input flexibility:** The mobile phone input should accept various NZ formats: 021 xxx xxxx, +64 21 xxx xxxx, 0210xxxxxxx. Use a forgiving input mask or validate on submit rather than restricting input format in real time.
- **Required field indicators:** Use both visual indicators (asterisk) and `aria-required="true"` for required fields. Include a legend at the top of the form explaining the asterisk convention.
- **Focus management:** After form submission (success or error), move focus to the confirmation/error message so screen reader users are aware of the outcome.
- **Keyboard accessibility:** Ensure the spouse info toggle (checkbox) and all form controls are fully operable via keyboard. The hidden spouse fields should not be focusable when hidden.
- **Color contrast:** Verify that all text, including form labels and placeholder text, meets WCAG AA contrast ratios.

## SEO Improvements

- **LocalBusiness structured data:** Add JSON-LD LocalBusiness (or Church subtype) structured data for each of the three campuses, including name, address, geo coordinates, opening hours (service times), telephone, and URL.
- **Target keywords:** Optimize for high-intent local search queries:
  - "church Auckland"
  - "church North Shore Auckland"
  - "church Hillsborough Auckland"
  - "church near me" (via LocalBusiness schema and Google Business Profile)
  - "what to expect at church"
- **FAQ structured data:** Add FAQPage JSON-LD markup for common questions answered on this page:
  - "What time are services at Ev Church?"
  - "How long is a church service?"
  - "Is there kids ministry at Ev Church?"
  - "What should I wear to church?"
- **Meta description:** Use a specific, action-oriented meta description: "Plan your visit to Ev Church in Auckland. Services Sunday 10:15am (North & Central) and 5:15pm (Unichurch). Casual atmosphere, kids programs, and a warm welcome."
- **Internal linking:** Ensure this page is linked from the homepage, contact page, and navigation menu. Cross-link to campus-specific pages if they exist.

## Content Improvements

- **Welcome video from the senior pastor:** A short (60-90 second) video message from the senior pastor welcoming visitors. This adds a personal touch and helps visitors feel known before they even walk through the door.
- **Testimonials from new visitors:** Include 2-3 short quotes from people describing their first visit experience. Social proof from peers is highly effective at reducing anxiety about attending for the first time.
- **Campus personality descriptions:** Each campus has its own character. Add a brief description of what makes each campus unique -- the style of worship, the demographic, the venue atmosphere.
- **FAQ section:** Add a visible FAQ section addressing practical questions: What should I wear? Is there parking? Do I need to bring anything? Can I just show up? This addresses objections and reduces friction.
- **Accessibility information:** Mention wheelchair accessibility, hearing assistance, and any other accommodations available at each campus.

## Mobile Improvements

- **Mobile-friendly form:** Ensure the registration form is easy to complete on mobile devices. Use appropriate input types (`type="email"`, `type="tel"`) to trigger the correct mobile keyboards. Make all tap targets at least 44x44px.
- **Tap-to-navigate:** Make campus addresses tappable links that open Google Maps (or Apple Maps on iOS) with directions to the campus. Use the `geo:` URI scheme or Google Maps URL for cross-platform compatibility.
- **Click-to-call:** If phone numbers are displayed anywhere on the page, make them `tel:` links for one-tap calling on mobile.
- **Sticky submit button:** Consider a sticky/fixed submit button at the bottom of the viewport when the form is in view, so mobile users can submit without scrolling back down to find the button.
- **Reduced form friction:** On mobile, consider breaking the form into a simpler initial step (just name and email) with optional details on a second step. Fewer visible fields reduce abandonment on small screens.
