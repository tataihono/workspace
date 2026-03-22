# CTA Button

Reusable button and link component used throughout the site for all interactive call-to-action elements.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | -- | Button text |
| `href` | `string` | -- | Link destination (internal or external) |
| `variant` | `"primary" \| "secondary" \| "text"` | `"primary"` | Visual variant |
| `size` | `"default" \| "large"` | `"default"` | Button size |
| `external` | `boolean` | `false` | Opens in new tab if true |
| `className` | `string` | `""` | Additional CSS classes |
| `onClick` | `() => void` | `null` | Optional click handler (for non-link actions) |

## Variants

### Primary (Filled)

- Background: `#d22227` (Ev Church red).
- Text: white.
- Hover: darker red (e.g., `#b81d21`).
- Border radius: `rounded-md` (6px).
- Font weight: `font-semibold`.

```
bg-[#d22227] text-white hover:bg-[#b81d21]
rounded-md font-semibold
transition-colors duration-200
```

### Secondary (Outlined)

- Background: transparent.
- Border: `#d22227` (2px).
- Text: `#d22227`.
- Hover: filled red background with white text.

```
border-2 border-[#d22227] text-[#d22227]
hover:bg-[#d22227] hover:text-white
rounded-md font-semibold
transition-colors duration-200
```

### Text Link

- No background or border.
- Text: `#d22227` or current text color.
- Hover: underline.
- Appears as an inline or standalone text link.

```
text-[#d22227] hover:underline
font-semibold
```

## Sizes

| Size | Padding | Font Size |
|------|---------|-----------|
| Default | `px-6 py-2.5` | `text-sm` |
| Large | `px-8 py-3.5` | `text-base` |

## Rendering Logic

- If `href` starts with `/` or is a relative path: render as `<Link>` (from `next/link`) for client-side navigation.
- If `href` starts with `http` or `external` is `true`: render as `<a>` with `target="_blank" rel="noopener noreferrer"`.
- If `onClick` is provided and no `href`: render as `<button>`.

## Accessibility

- Buttons and links must have visible focus styles (`:focus-visible` ring).
- External links should include a visually hidden "opens in new tab" indicator for screen readers.
- Sufficient color contrast: white text on `#d22227` passes WCAG AA (contrast ratio ~4.8:1).

## Data Source

No external data. Props are passed from parent components.

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| Various Lava templates | Inline `<a>` tags with Tailwind/Bootstrap button classes |

## Pages Used On

Every page. This component is used wherever there is a clickable action:

- Hero banner CTAs
- Section CTAs
- Form submit buttons
- Navigation links styled as buttons
- Card action links
- Footer links (text variant)

## Rebuild Notes

- Implement as a polymorphic component that renders `<Link>`, `<a>`, or `<button>` based on props.
- Use `cva` (class-variance-authority) or a similar utility to manage variant + size class combinations cleanly.
- The primary red `#d22227` should be defined as a Tailwind theme color (e.g., `colors.brand.red`) in `tailwind.config.ts` for consistency across the site.
- Focus styles: use `focus-visible:ring-2 focus-visible:ring-[#d22227] focus-visible:ring-offset-2`.
- Ensure the component accepts `ref` forwarding for use with third-party libraries.
- Add a subtle `active:scale-[0.98]` transform for tactile click feedback.
- This is a foundational component -- build it early and use it everywhere.
