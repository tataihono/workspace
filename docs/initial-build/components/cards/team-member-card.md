# Team Member Card

Displays a staff or team member with their photo, name, role, and email. Used in a responsive grid on the About page.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | -- | Full name |
| `role` | `string` | -- | Role title (e.g., "Lead Pastor") |
| `email` | `string` | `null` | Email address (shown on hover) |
| `photo` | `Image` | -- | Profile photo |

```ts
interface Image {
  src: string;
  alt: string;
  srcSet?: string; // responsive srcset
}
```

## Layout

- Photo displayed prominently, typically square or 3:4 aspect ratio.
- Name and role below the photo.
- Email appears as an overlay on hover/focus (semi-transparent background over the photo).
- Grid layout with responsive columns.

### Responsive Grid

| Breakpoint | Columns |
|------------|---------|
| Mobile (< 640px) | 2 columns |
| Tablet (640px--1023px) | 3 columns |
| Desktop (>= 1024px) | 4 columns |

## Photo Handling

Legacy Rock CMS serves photos via:

```
/GetImage.ashx?Guid={photoGuid}&w={width}
```

Responsive srcset widths used in legacy:

| Width | Usage |
|-------|-------|
| 150px | Mobile thumbnail |
| 300px | Standard display |
| 450px | Retina / large card |

In the rebuild, photos will be uploaded to Payload CMS and served via `next/image`.

## Hover / Focus State

- On hover or keyboard focus, an overlay appears on the photo area.
- Overlay shows the email address (as a `mailto:` link) with an email icon.
- Overlay uses a semi-transparent dark background for readability.
- Transition: fade in ~200ms.

## Data Source

- **Payload CMS**: `team-members` collection.
- Synced from Rock RMS Groups:
  - Group #29482: Senior leadership
  - Group #29485: Staff
  - Group #29486: Apprentices
- Fields: `name`, `role`, `email`, `photo`, `group`, `sortOrder`.

## Known Team Size

Approximately 11 named team members plus apprentices. The component grid must handle variable counts gracefully.

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| `About/OurTeam/GroupMember.lava` | Individual team member card template |
| Rock Group IDs #29482, #29485, #29486 | Source data groups |

## Pages Used On

- **About**: Our Team section

## Rebuild Notes

- Implement as a `<TeamMemberCard />` component.
- Use `next/image` with fixed aspect ratio for consistent grid alignment.
- Email overlay: use CSS `opacity` transition on a positioned overlay element. Ensure the `mailto:` link is keyboard accessible (focusable and activatable).
- Consider lazy loading photos below the fold.
- Sort order should be respected from the Payload collection (match Rock group member order).
- Accessibility: ensure hover-only content (email) is also accessible via keyboard focus and screen readers.
