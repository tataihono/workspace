# Ministry Card

Displays a ministry program card for Kids and Youth sections, showing program name, target age group, description, and schedule.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | -- | Program name |
| `ageGroup` | `string` | -- | Target age group (e.g., "1-4 years") |
| `description` | `string \| RichText` | -- | Program description |
| `schedule` | `string` | `null` | When the program runs (e.g., "Sundays during service") |
| `image` | `Image \| null` | `null` | Optional program image |
| `href` | `string \| null` | `null` | Optional link to more details |

## Known Programs

### Kids Ministry

| Program | Age Group | Description |
|---------|-----------|-------------|
| Preschool | 1--4 years | Early childhood program during Sunday service |
| Primary | 5--9 years | Primary school-aged kids program during Sunday service |

### Youth Ministry

| Program | Age Group | Description |
|---------|-----------|-------------|
| Fusion | Year 6--8 | Intermediate-aged youth group |
| Juniors | Year 6--9 | Junior youth program |
| Seniors | Year 10--13 | Senior high school youth program |

## Layout

- Card with program name as heading.
- Age group displayed as a subtitle or badge.
- Description text below.
- Schedule information (if provided) in a secondary line.
- Optional image at top of card.
- Cards arranged in a responsive grid.

### Responsive Grid

| Breakpoint | Columns |
|------------|---------|
| Mobile (< 640px) | 1 column |
| Tablet (640px--1023px) | 2 columns |
| Desktop (>= 1024px) | 2--3 columns (depending on page layout) |

## Variants

Single visual variant. Content varies per program.

## Data Source

- **Payload CMS**: Static content within page blocks, or a `ministries` collection if programs need to be managed independently.
- Currently hardcoded in legacy Lava templates; consider whether a collection is warranted for the rebuild.

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| Kids page Lava templates | Kids program descriptions |
| Youth page Lava templates | Youth program descriptions |

## Pages Used On

- **Kids**: All kids ministry programs
- **Youth**: All youth ministry programs

## Rebuild Notes

- Implement as a `<MinistryCard />` component.
- Decide whether ministry programs should be a Payload collection (editable by content team) or hardcoded blocks within page content. A collection is recommended if programs change frequently.
- Age group could be rendered as a pill/badge with a subtle background color.
- If programs are seasonal or have varying availability, consider adding an `active` boolean field.
- NZ school year terminology is used (Year 6--13 rather than Grade), so keep labels as-is.
