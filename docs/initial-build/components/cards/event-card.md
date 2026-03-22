# Event Card

Displays an upcoming event with date, title, location, and optional registration status. Used in event listing grids and calendars.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | -- | Event title |
| `date` | `string \| Date` | -- | Event date/time |
| `location` | `string` | `null` | Venue or campus name |
| `href` | `string` | -- | Link to event detail page |
| `registrationStatus` | `RegistrationStatus` | `null` | Registration availability badge |
| `image` | `Image \| null` | `null` | Optional event image |

```ts
type RegistrationStatus = "open" | "full" | "coming-soon" | null;
```

## Layout

- Card with optional image at top.
- Date displayed prominently (formatted, e.g., "Sun 24 Mar, 10:15am").
- Event title as a heading.
- Location/venue below the title.
- Registration status badge (if applicable) in a corner or below title.
- Entire card links to the event detail page.

## Date Formatting

Dates are displayed in New Zealand format:

- Day of week abbreviated: `Sun`, `Mon`, etc.
- Date: `24 Mar`
- Time: `10:15am` (12-hour, lowercase am/pm)
- Use `date-fns` or `Intl.DateTimeFormat` with `en-NZ` locale.

## Registration Status Badge

| Status | Label | Style |
|--------|-------|-------|
| `open` | "Register" | Green badge or primary button style |
| `full` | "Full" | Gray/muted badge |
| `coming-soon` | "Coming Soon" | Yellow/amber badge |
| `null` | (no badge) | No registration UI |

## Calendar Filtering

Event lists are filtered by:

- **Campus**: Show events for a specific campus or all campuses.
- **Date range**: Typically 4 weeks ahead from the current date.
- Filtering is done at the page/query level, not within the card component.

## Data Source

- **Payload CMS**: `events` collection.
- Synced from Rock RMS `EventItemOccurrence` records.
- Fields: `title`, `date`, `endDate`, `location`, `campus` (relation), `registrationUrl`, `registrationStatus`, `description`, `image`, `slug`.
- Query: events where `date >= now` and `date <= now + 4 weeks`, ordered by date ascending.

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| `EventItemList.lava` | General event listing template |
| `Homepage/Calendar.lava` | Homepage upcoming events section |
| `CampusDetail/Calendar.lava` | Campus-specific event listing |

## Pages Used On

- **Homepage**: Upcoming events section (all campuses, next 4 weeks)
- **Campus detail pages**: Campus-specific upcoming events
- **Events listing page**: Full event calendar/list

## Rebuild Notes

- Implement as a `<EventCard />` component that receives a single event as props.
- Date formatting should use a consistent utility function across the site (NZ locale).
- Registration status may come from Rock RMS sync -- ensure the Payload collection has a field for this.
- Consider a `<EventList />` wrapper component that handles fetching, filtering, and rendering a grid of `<EventCard />` components.
- Event detail pages should be dynamically routed: `/events/[slug]`.
- Time zone: all times are in `Pacific/Auckland` (NZST/NZDT). Ensure server-rendered dates use the correct timezone.
