# CTA Banner

Call-to-action banner section with heading, body text, and action buttons. Used to drive user engagement at key points within page content.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | -- | Banner heading |
| `subheading` | `string` | `null` | Optional subheading |
| `body` | `string \| RichText` | `null` | Body text or rich text content |
| `buttons` | `CTAButton[]` | `[]` | Action buttons |
| `variant` | `"section" \| "highlight" \| "sermonSeries"` | `"section"` | Visual variant |
| `backgroundImage` | `Image \| null` | `null` | Optional background image |
| `backgroundColor` | `string` | `null` | Background color (Tailwind class or hex) |

```ts
interface CTAButton {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "text";
}
```

## Variants

### Section CTA (`section`)

- Standard content section with heading, body text, and one or two buttons.
- Typically a colored background (e.g., light gray, white) or transparent.
- Centered text alignment.
- Example: "Connect with Ev Church" section with "Contact Us" + "New Here?" buttons.

### Highlight Banner (`highlight`)

- Visually prominent banner, often with a background image or strong background color.
- Text overlay with higher contrast.
- Used for seasonal or campaign banners (e.g., Easter).
- Example: Easter banner with heading, subheading, body text, and "Find Out More" link.
- May use the primary red (`#d22227`) as background.

### Sermon Series (`sermonSeries`)

- Features a sermon series image alongside text content.
- Layout: image on one side, text + "About the Series" link on the other.
- Two-column layout on desktop, stacked on mobile.
- Fields: series image, series title, description, link.

## Known Instances

| Page | Heading | Buttons | Variant |
|------|---------|---------|---------|
| Homepage | "Connect with Ev Church" | Contact Us, New Here? | section |
| Easter | Easter event details | Find Out More | highlight |
| Homepage | Current sermon series | About the Series | sermonSeries |
| Various | "Plan Your Visit" | Visit page link | section |

## Styling

### Section CTA
```
py-16 md:py-24
text-center
max-w-3xl mx-auto
```

### Highlight Banner
```
py-16 md:py-24
relative overflow-hidden
bg-cover bg-center    /* if background image */
bg-[#d22227]          /* if colored background */
text-white
```

### Sermon Series
```
py-16 md:py-24
grid grid-cols-1 md:grid-cols-2 gap-8 items-center
```

## Data Source

- **Payload CMS**: Implemented as a **block type** (`ctaBannerBlock`) within page content areas.
- Fields map directly to props above.
- Background images uploaded to Payload media library.
- Sermon series data may come from a dedicated `sermon-series` collection or be configured per-block.

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| Various page Lava templates | CTA sections are inline in page templates |
| Easter page template | Easter highlight banner |
| Homepage Lava | Sermon series and connect sections |

## Pages Used On

- **Homepage**: Connect CTA, sermon series CTA
- **Easter**: Event highlight banner
- **Various interior pages**: "Plan Your Visit", "Get in Touch" CTAs

## Rebuild Notes

- Implement as a Payload CMS block type with variant selection.
- The `highlight` variant with a background image needs a dark overlay for text readability (similar to hero banner approach).
- Buttons use the shared `<CTAButton />` component.
- Sermon series variant: consider whether this should be a separate component or a variant of CTA Banner. If sermon series data is managed in its own collection, a dedicated component may be cleaner.
- Ensure the banner is responsive -- two-column layouts collapse to stacked on mobile.
- Background color should support both Tailwind classes and custom hex values for editorial flexibility.
