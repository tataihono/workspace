# Section Block

Generic content section that renders a heading, rich text body, and optional CTA buttons. The most commonly used content component across the site.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | `null` | Section heading |
| `headingLevel` | `"h1" \| "h2" \| "h3"` | `"h2"` | HTML heading level |
| `body` | `RichText` | -- | Rich text / HTML content |
| `ctaButtons` | `CTAButton[]` | `[]` | Optional call-to-action buttons |
| `variant` | `"contained" \| "fullWidth"` | `"contained"` | Width behavior |
| `align` | `"left" \| "center"` | `"left"` | Text alignment |
| `backgroundColor` | `string` | `"transparent"` | Section background color |
| `id` | `string` | `null` | HTML id for anchor linking |

```ts
interface CTAButton {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "text";
}
```

## Variants

### Contained

- Content constrained to max-width container (`max-w-7xl`).
- Horizontal padding on mobile.
- Standard vertical spacing between sections (`py-16` / `py-24`).

### Full Width

- Content spans the full viewport width.
- Useful for colored background sections or image backgrounds.
- Inner content may still be contained within a max-width wrapper.

## Rendering

- **Heading**: Rendered at the specified heading level. Styled with `font-display` (utopia-std) or `font-sans` (proxima-nova) depending on design.
- **Body**: Rendered as rich text HTML. Must support paragraphs, lists, bold, italic, links, and embedded media.
- **CTA Buttons**: Rendered below the body content. Uses the shared `<CTAButton />` component.

## Data Source

- Payload CMS: implemented as a **block type** (`sectionBlock`) within page content areas.
- Fields map directly to props above.
- Rich text stored as Payload's Lexical or Slate rich text format.

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| `Section.lava` | Generic section rendering in Rock CMS |
| Various page-specific Lava files | Inline section content |

## Pages Used On

Nearly every page on the site, including:

- **Homepage**: "Join Us" section, sermon section intro text
- **About**: Introduction, mission statement
- **Our Vision**: Vision statement sections
- **Kids / Youth**: Program descriptions
- **Contact**: Contact info text
- **Visit**: "What to Expect" content
- **Easter**: Event details sections

## Rebuild Notes

- Implement as a Payload CMS block type so editors can add sections to any page via the admin panel.
- Rich text rendering: use Payload's built-in rich text serializer for React, or a custom serializer if additional formatting is needed.
- Ensure proper heading hierarchy -- the `headingLevel` prop lets editors maintain semantic structure.
- Add an `id` prop for anchor linking (e.g., linking from navigation to a specific section on the page).
- Vertical spacing should be consistent; consider a shared section wrapper that standardizes padding.
