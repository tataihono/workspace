# Map Embed

Google Maps embed for displaying campus locations with directions integration.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeId` | `string` | -- | Google Maps Place ID |
| `campusName` | `string` | -- | Campus name for accessible labeling |
| `address` | `string` | `null` | Display address (shown alongside or below map) |
| `directionsHref` | `string` | `null` | "Get Directions" URL (Google Maps link) |
| `height` | `string` | `"400px"` | Map container height |

## Known Place IDs

| Campus | Place ID |
|--------|----------|
| Central | `ChIJAYvdBVVGDW0ReTxTjSRowE8` |
| North | TBD -- extract from legacy site |
| Unichurch | TBD -- extract from legacy site |

## Embed URL

```
https://www.google.com/maps/embed/v1/place?key={API_KEY}&q=place_id:{placeId}
```

Requires a Google Maps Embed API key (restricted to the site domain).

## "Get Directions" Link

```
https://www.google.com/maps/dir/?api=1&destination_place_id={placeId}&destination={encodedAddress}
```

Opens Google Maps (or the native maps app on mobile) with directions to the campus.

## Layout

- Map iframe fills its container width.
- Fixed or responsive height (default 400px).
- Optional "Get Directions" link/button below or overlaid on the map.
- On campus detail pages, the map may be part of the hero section or a dedicated section.
- On the Contact page, the map appears in the sidebar.

## Variants

Single variant. The map embed is consistent across usages; context differs by placement.

## Data Source

- **Payload CMS**: `campuses` collection.
- Fields: `placeId`, `address`, `directionsUrl` (or generated from placeId).
- Google Maps API key stored in environment variable (`NEXT_PUBLIC_GOOGLE_MAPS_KEY`).

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| `CampusDetail/Hero.lava` | Map on campus detail pages |
| `Contact/SideBar.lava` | Map on contact page sidebar |
| `EventDetail/Detail.lava` | Map on event detail pages (event venue) |

## Pages Used On

- **Campus detail pages** (North, Central, Unichurch): Campus location map
- **Contact**: Sidebar map showing campus locations
- **Event detail pages**: Venue location (when applicable)

## Rebuild Notes

- Use the Google Maps Embed API (free, no usage limits) rather than the JavaScript API unless interactive features are needed.
- Store the API key in `.env.local` as `NEXT_PUBLIC_GOOGLE_MAPS_KEY`. Restrict the key to the production domain in Google Cloud Console.
- The embed iframe must include a `title` attribute for accessibility (e.g., `title="Map showing Ev Church Central location"`).
- Add `loading="lazy"` to the iframe since maps are typically below the fold.
- "Get Directions" link should open in a new tab (`target="_blank" rel="noopener noreferrer"`).
- Consider a static map image (Google Static Maps API) as a placeholder, loading the interactive embed on click for better page performance.
- Missing Place IDs for North and Unichurch need to be extracted from the legacy site or looked up via Google Maps.
