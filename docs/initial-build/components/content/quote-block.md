# Quote Block

Displays a scripture verse or testimonial with attribution. Used for emphasis and visual variety within page content.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"scripture" \| "testimonial"` | `"scripture"` | Display variant |
| `text` | `string` | -- | The quote text |
| `attribution` | `string` | -- | Attribution line (book/verse for scripture, name for testimonial) |
| `reference` | `string` | `null` | Secondary reference (e.g., Bible translation: "NIV") |

## Variants

### Scripture

- Large, styled quote text in display font (utopia-std / italic).
- Book and verse reference below the quote (e.g., "John 11:25").
- Optional translation reference.
- Typically centered with generous vertical padding.
- May include decorative quotation marks or a subtle border accent.

### Testimonial

- Quote text in a slightly smaller style than scripture.
- Attribution: person's name and optional role/context.
- May include a small photo or avatar (future enhancement).

## Known Content Instances

| Page | Quote | Attribution | Variant |
|------|-------|-------------|---------|
| Easter | "I am the resurrection and the life." | John 11:25 | Scripture |
| Easter | "He was pierced for our transgressions..." | Isaiah 53:5 | Scripture |
| Easter | "He is not here; he has risen..." | Matthew 28:6 | Scripture |
| Our Vision | "We preach Christ crucified..." | 1 Corinthians 1:23-24 | Scripture |

## Styling

```
/* Quote text */
font-family: utopia-std (display/serif)
font-style: italic
text-size: text-2xl md:text-3xl lg:text-4xl
text-align: center

/* Attribution */
font-family: proxima-nova (sans)
font-weight: 600
text-size: text-base
color: muted gray or primary red (#d22227)
```

## Data Source

- Payload CMS: implemented as a **block type** (`quoteBlock`) within page content areas.
- Fields: `variant`, `text`, `attribution`, `reference`.

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| Inline in page-specific Lava templates | Hardcoded in Easter, Vision pages |

## Pages Used On

- **Easter**: Three scripture quotes throughout the page
- **Our Vision**: One scripture quote

## Rebuild Notes

- Implement as a Payload CMS block type so quotes can be placed within any page content area.
- Use `<blockquote>` and `<cite>` HTML elements for semantic correctness.
- The display font (utopia-std) should be applied via a Tailwind `font-display` utility class.
- Consider adding a subtle left border or decorative quotation mark glyph for visual distinction.
- Ensure the component handles long quotes gracefully with proper line height and spacing.
