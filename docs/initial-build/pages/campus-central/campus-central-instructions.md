# Central Campus - Rebuild Instructions

## Overview

Landing page for the Central Campus located in Hillsborough, Auckland. This is the founding/original campus, established in 2012. Uses the same CampusDetail template shared by all three campus pages.

## User Journey

- From navigation: "Visit > Central"
- From homepage campus cards
- From Google search: "church Hillsborough Auckland", "church Mt Roskill area"
- Direct link sharing

## Content Zones

| Zone | Content | Behavior |
|------|---------|----------|
| Hero | Campus images carousel (5 images), establishment year (2012), service time (Sunday 10:15am), address (80 Olsen Ave, Hillsborough), Get Directions button, Plan Your Visit button | Swiper carousel for images |
| Events List | Campus-filtered events, 4-week rolling window | Dynamic, filtered by campus ID 3 |
| Services Description | Campus description text | Static CMS content |
| Other Campus Cards | Cards for North and Unichurch | Excludes current campus |
| Connect CTA | Call-to-action banner encouraging visitors to connect | Static layout with links |

## Rock CMS Data Sources

### Campus Entity (ID: 3)
- **Fields:** name, location, serviceTimes, description
- **Attributes:** FeaturedImage, SlideImage1, SlideImage2, SlideImage3, SlideImage4, EstablishmentYear, GooglePlaceId

### Campus-Specific Details
- **Google Maps PlaceId:** ChIJAYvdBVVGDW0ReTxTjSRowE8
- **Gallery images:** 5 images (no alt text on current site)
- **Good Friday and Easter events** hosted at 80 Olsen Ave

### Events
- Calendar ID: 1, filtered to campus ID 3
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
| Photos | Synced from Rock attributes | 5 images via GetImage.ashx GUIDs |

## Interactions

- **Image carousel:** Swiper.js-powered carousel cycling through 5 campus photos
- **Get Directions:** Opens Google Maps with PlaceId ChIJAYvdBVVGDW0ReTxTjSRowE8
- **Event links:** Navigate to individual event detail pages
- **Plan Your Visit:** Links to /visit
- **Campus cards:** Navigate to other campus pages

## Integrations

- **Google Maps:** Uses PlaceId ChIJAYvdBVVGDW0ReTxTjSRowE8 for Central campus
- **Instagram:** Follow Us link to ev.church Instagram

## Payload Modeling

Same dynamic route as all campus pages: `/campus/[slug]` using the Payload `campuses` collection. Events are filtered by campus relationship. Template component: `CampusPage`.

All three campus pages share the same template. The Next.js rebuild should use a single `[slug]` dynamic route.

### Payload Collections Referenced
- `campuses` (synced from Rock, id: 3) - campus details, images, location
- `events` (synced from Rock) - filtered by campus relationship
- `pages` - any static content blocks

### Route Structure
```
/campus/[slug]  ->  CampusPage component
```
