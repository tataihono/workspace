# North Campus - Rebuild Instructions

## Overview

Dedicated landing page for the North Campus located in Rosedale, North Shore. Displays campus-specific information, upcoming events, and photos. All three campus pages (North, Central, Unichurch) share the same CampusDetail template from Rock CMS.

## User Journey

- From navigation: "Visit > North"
- From homepage campus cards
- From Google search: "church Rosedale", "church North Shore Auckland"
- Direct link sharing

## Content Zones

| Zone | Content | Behavior |
|------|---------|----------|
| Hero | Campus images carousel, establishment year (2021), service time (Sunday 10:15am), address (9-11 Rothwell Ave, Rosedale), Get Directions button, Plan Your Visit button | Swiper carousel for images |
| Events List | Campus-filtered events, 4-week rolling window | Dynamic, filtered by campus ID 2 |
| Services Description | Campus description text | Static CMS content |
| Other Campus Cards | Cards for Central and Unichurch | Excludes current campus |
| Connect CTA | Call-to-action banner encouraging visitors to connect | Static layout with links |

## Rock CMS Data Sources

### Campus Entity (ID: 2)
- **Fields:** name, location, serviceTimes, description
- **Attributes:** FeaturedImage, SlideImage1, SlideImage2, SlideImage3, SlideImage4, EstablishmentYear, GooglePlaceId

### Events
- Calendar ID: 1, filtered to campus ID 2
- Rendered via `CampusDetail/Calendar.lava`

### Lava Templates
- `CampusDetail/Hero.lava` - Hero section with image carousel and campus stats
- `CampusDetail/Calendar.lava` - Upcoming events list filtered by campus

## Dynamic vs Static Content

| Content | Type | Notes |
|---------|------|-------|
| Campus info (name, address, times) | Dynamic (synced) | From Rock campus entity |
| Events | Dynamic (synced) | From Rock calendar, filtered by campus |
| Service description | Static CMS | Editable in Rock |
| Photos | Synced from Rock attributes | FeaturedImage, SlideImage1-4 |

## Interactions

- **Image carousel:** Swiper.js-powered carousel cycling through campus photos
- **Get Directions:** Opens Google Maps with the campus GooglePlaceId
- **Event links:** Navigate to individual event detail pages
- **Plan Your Visit:** Links to /visit
- **Campus cards:** Navigate to other campus pages

## Integrations

- **Google Maps:** Uses GooglePlaceId for North campus directions link
- **Instagram:** Follow Us link to ev.church Instagram

## Payload Modeling

This should be a dynamic route `/campus/[slug]` using data from the Payload `campuses` collection. Events are filtered by campus relationship. The template component is `CampusPage`.

All three campus pages share the same template. The Next.js rebuild should use a single `[slug]` dynamic route rather than three separate page files.

### Payload Collections Referenced
- `campuses` (synced from Rock) - campus details, images, location
- `events` (synced from Rock) - filtered by campus relationship
- `pages` - any static content blocks

### Route Structure
```
/campus/[slug]  ->  CampusPage component
```

The slug should resolve from the campus entity (e.g., "north", "central", "unichurch") rather than using Rock's numeric IDs.
