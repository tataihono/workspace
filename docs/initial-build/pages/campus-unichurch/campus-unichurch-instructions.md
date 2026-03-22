# Unichurch Campus - Rebuild Instructions

## Overview

Landing page for the Unichurch campus at the University of Auckland. This is an evening-service campus (5:15pm Sunday) targeting university students and young adults. Uses the same CampusDetail template shared by all three campus pages, but serves a distinct demographic with unique positioning.

## User Journey

- From navigation: "Visit > Unichurch"
- From homepage campus cards
- From Google search: "university church Auckland", "student church Auckland", "evening church service Auckland"
- University student referrals and social media
- Direct link sharing

## Content Zones

| Zone | Content | Behavior |
|------|---------|----------|
| Hero | Campus images carousel (5 images), establishment year (2014), service time (Sunday 5:15pm), address (Old Government House B102), Get Directions button, Plan Your Visit button | Swiper carousel for images |
| Events List | Campus-filtered events, 4-week rolling window | Dynamic, filtered by campus ID 4 |
| Services Description | Campus description text | Static CMS content |
| Other Campus Cards | Cards for North and Central | Excludes current campus |
| Connect CTA | Call-to-action banner encouraging visitors to connect | Static layout with links |

## Rock CMS Data Sources

### Campus Entity (ID: 4)
- **Fields:** name, location, serviceTimes, description
- **Attributes:** FeaturedImage, SlideImage1, SlideImage2, SlideImage3, SlideImage4, EstablishmentYear, GooglePlaceId

### Campus-Specific Details
- **Audience:** Primarily university students and young adults
- **Service time:** Evening (5:15pm) rather than morning - unique among campuses
- **Additional event:** "Next Steps" at Maclaurin Chapel (unique to Unichurch)
- **Easter service:** Easter Night at 5:15pm at Old Government House (Unichurch-specific)
- **Location:** On university campus - different parking/access considerations

### Events
- Calendar ID: 1, filtered to campus ID 4
- Rendered via `CampusDetail/Calendar.lava`
- Includes "Next Steps" event type not seen on other campus pages

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
- **Get Directions:** Opens Google Maps for Old Government House
- **Event links:** Navigate to individual event detail pages
- **Plan Your Visit:** Links to /visit
- **Campus cards:** Navigate to other campus pages

## Integrations

- **Google Maps:** Directions to Old Government House, University of Auckland
- **Instagram:** Follow Us link to ev.church Instagram

## Payload Modeling

Same dynamic route as all campus pages: `/campus/[slug]` using the Payload `campuses` collection. Events are filtered by campus relationship. Template component: `CampusPage`.

All three campus pages share the same template. The Next.js rebuild should use a single `[slug]` dynamic route.

### Payload Collections Referenced
- `campuses` (synced from Rock, id: 4) - campus details, images, location
- `events` (synced from Rock) - filtered by campus relationship
- `pages` - any static content blocks

### Route Structure
```
/campus/[slug]  ->  CampusPage component
```
