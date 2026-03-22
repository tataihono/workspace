# Campus Card

Displays summary information for a single campus location. Used in grid layouts to show all campuses at a glance.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | -- | Campus name (e.g., "Ev Church North") |
| `serviceTime` | `string` | -- | Service time (e.g., "Sunday 10:15am") |
| `address` | `string` | -- | Street address |
| `href` | `string` | -- | Link to campus detail page |
| `image` | `Image \| null` | `null` | Optional featured image |

```ts
interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}
```

## Layout

- Card displays in a responsive grid, typically **3 columns** on desktop.
- If an image is provided, it appears at the top of the card.
- Below the image (or at the top if no image): campus name as a heading, service time, address.
- Entire card is clickable, linking to the campus detail page.

### Responsive Grid

| Breakpoint | Columns |
|------------|---------|
| Mobile (< 768px) | 1 column (stacked) |
| Tablet (768px--1023px) | 2 columns |
| Desktop (>= 1024px) | 3 columns |

## Known Campuses

| Name | Service Time | Slug |
|------|-------------|------|
| Ev Church North | Sunday 10:15am | `/north` |
| Ev Church Central | Sunday 10:15am | `/central` |
| Unichurch | Sunday 5:15pm | `/unichurch` |

## Variants

Single visual variant. Content varies per campus.

## Data Source

- **Payload CMS**: `campuses` collection.
- Synced from Rock RMS campus data.
- Fields: `name`, `serviceTime`, `address`, `slug`, `featuredImage`, `placeId`, `slideImages`.

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| Homepage Lava (Join Us section) | Campus cards on homepage |
| `CampusDetail/*.lava` | Campus detail pages link to other campuses |

## Pages Used On

- **Homepage**: "Join Us" section (all 3 campuses)
- **Visit**: Campus listing
- **Contact**: Campus locations
- **Campus detail pages**: "Other Campuses" section at bottom

## Rebuild Notes

- Implement as a reusable `<CampusCard />` component that receives campus data as props.
- Use `next/image` for the featured image with appropriate aspect ratio.
- Make the entire card a `<Link>` (from `next/link`) wrapping the card content.
- Add hover state: subtle scale transform or shadow elevation.
- Fetch campus data from Payload `campuses` collection at the page level and pass to cards.
- Ensure cards have consistent height in the grid (use `flex` or `grid` with `stretch`).
