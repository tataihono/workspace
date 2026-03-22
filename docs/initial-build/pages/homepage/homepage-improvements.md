---
title: Homepage - Improvement Suggestions
page: Homepage
slug: /
---

# Homepage - Improvement Suggestions

## UX Improvements

- **Campus selector for events:** Add a campus filter/selector to the What's Happening section so visitors can quickly see events relevant to their campus rather than scrolling through all events.
- **Search functionality:** Add a site-wide search feature accessible from the homepage, allowing visitors to quickly find sermons, events, groups, or pages.
- **Video hero option:** Consider supporting a video background in the hero section as an alternative to the static image carousel. A short looping video of church life can be more engaging than still images.
- **Testimonials section:** Add a section for short testimonials or stories from church members. Real stories help first-time visitors connect emotionally before attending.
- **Quick-access service times:** Display the next upcoming service time prominently near the top of the page, reducing the need to scroll to the campus cards section.

## Performance Improvements

- **Lazy load below-fold images:** All images below the hero section should use lazy loading (`loading="lazy"` or Next.js Image component) to reduce initial page load time.
- **Reduce carousel image count:** The 14-image photo gallery carousel is excessive. Consider reducing to 6-8 high-quality images to decrease page weight and improve load times.
- **Next.js Image component:** Use the Next.js `Image` component for all images to get automatic format optimization (WebP/AVIF), responsive sizing, and lazy loading out of the box.
- **ISR for dynamic data:** Implement Incremental Static Regeneration (ISR) for event and sermon data. A revalidation period of 60-300 seconds balances freshness with performance.
- **Preload hero image:** The first hero carousel image should be preloaded (`<link rel="preload">`) since it is the largest contentful paint (LCP) element.
- **Bundle Swiper selectively:** Only import the Swiper modules actually used (Autoplay, Navigation, Pagination) rather than the full Swiper bundle.

## Accessibility Improvements

- **Alt text for carousel images:** All carousel images (hero and gallery) currently lack meaningful alt text. Each image should have descriptive alt text that conveys the content of the photo.
- **Keyboard navigation for carousels:** Ensure both Swiper carousels are fully keyboard navigable. Users should be able to tab to the carousel, use arrow keys to navigate slides, and have focus indicators visible.
- **Skip-to-content link:** Add a visually hidden "Skip to main content" link at the top of the page for screen reader and keyboard users to bypass the navigation.
- **Color contrast on overlay text:** Verify that the white text overlaid on hero carousel images meets WCAG AA contrast ratios (4.5:1 for normal text). Consider adding a semi-transparent dark overlay behind the text.
- **Carousel auto-play controls:** Provide a visible pause/play button for the hero carousel autoplay to meet WCAG 2.2.2 (Pause, Stop, Hide).
- **ARIA labels:** Add appropriate ARIA labels to carousel regions, navigation buttons, and landmark sections.

## SEO Improvements

- **Organization structured data:** Add JSON-LD Organization schema markup including church name, URL, logo, address for each campus, social media profiles, and contact information.
- **Meta description and OG tags:** Ensure a compelling meta description is set (currently generic). The OG image should be a high-quality branded image suitable for social sharing.
- **Heading hierarchy:** Verify that the page has exactly one H1 (in the hero), with H2 for each major section and H3 for sub-items. No heading levels should be skipped.
- **Breadcrumbs:** While the homepage typically does not need breadcrumbs, adding BreadcrumbList structured data helps search engines understand site hierarchy.
- **Internal linking:** Ensure all internal links use proper anchor text rather than generic "Click here" or "Learn more" phrases.

## Content Improvements

- **Seasonal announcement block type:** The Easter banner should be implemented as a reusable "seasonal announcement" block type in Payload CMS, not a one-off custom block. This allows content editors to create seasonal banners for Easter, Christmas, and other events using the same pattern.
- **Event descriptions:** The events section currently shows only date, title, and location. Adding a brief description preview (1-2 lines) would give visitors more context to decide whether to attend.
- **Embedded sermon player:** The sermon section could include a play button or embedded audio/video player so visitors can sample the latest sermon directly from the homepage without navigating away.
- **Social proof:** Add metrics or indicators of community size/engagement (e.g., "Join 1,000+ people across Auckland") to build trust with new visitors.
- **Dynamic greeting:** Consider time-based or seasonal greetings in the welcome section to make the page feel current and maintained.

## Mobile Improvements

- **Carousel touch gestures:** Verify that Swiper touch/swipe gestures work reliably on iOS Safari and Android Chrome. Test with various screen sizes and orientations.
- **Stacked campus cards:** On mobile viewports, campus cards should stack vertically in a single column rather than attempting a multi-column layout that may be too cramped.
- **Reduced hero image sizes:** Serve smaller image variants for mobile devices. The hero images should have responsive srcset attributes or use Next.js Image for automatic mobile optimization.
- **Tap targets:** Ensure all CTA buttons and interactive elements meet the minimum 44x44px tap target size on mobile.
- **Reduced motion:** Respect the `prefers-reduced-motion` media query by disabling carousel autoplay and transitions for users who have this preference set.
