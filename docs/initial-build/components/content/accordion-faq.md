# Accordion / FAQ

Expandable and collapsible content sections for FAQs, doctrinal statements, and other structured content where progressive disclosure is appropriate.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | `null` | Optional section heading above the accordion |
| `items` | `AccordionItem[]` | -- | Array of expandable items |
| `allowMultiple` | `boolean` | `false` | Allow multiple panels open simultaneously |
| `defaultOpenIndex` | `number` | `null` | Index of item open by default (null = all closed) |

```ts
interface AccordionItem {
  title: string;
  content: RichText; // HTML / rich text body
}
```

## Behavior

- Clicking an item title toggles its content panel open/closed.
- When `allowMultiple` is `false`, opening one item closes any previously open item.
- Smooth expand/collapse animation (slide down/up, ~300ms).
- Chevron or plus/minus icon rotates or changes to indicate open/closed state.

## Keyboard Accessibility

- `Enter` / `Space` on a title toggles the panel.
- `Arrow Up` / `Arrow Down` moves focus between accordion titles.
- `Home` / `End` moves focus to first/last title.
- Panels use `aria-expanded`, `aria-controls`, and `role="region"` attributes.

## Known Content Instances

### About Page -- What We Believe (7 items)

| Title | Content Summary |
|-------|-----------------|
| God | Doctrine of the Trinity |
| Humanity | Created in God's image, fallen nature |
| The Bible | Authority and inspiration of Scripture |
| Jesus | Incarnation, life, death, resurrection |
| Salvation | Grace through faith |
| The Holy Spirit | Person and work of the Spirit |
| The Church | Body of Christ, mission |

### Kids Page -- FAQ (3 items)

| Title | Content Summary |
|-------|-----------------|
| What is check-in like? | Check-in process description |
| What if it's our first time? | First-time visitor instructions |
| Are staff qualified? | Staff qualifications and safety checks |

### Easter Page -- FAQ (6 items)

General questions about Easter services, times, locations, what to expect, parking, and kids programs.

## Variants

Single visual variant. Content and item count vary by usage context.

## Data Source

- Payload CMS: implemented as a **block type** (`accordionBlock`) with a repeater field for items.
- Each item has a `title` (text) and `content` (rich text) field.
- Alternatively, for structured doctrinal content (What We Believe), items could come from a dedicated Payload collection.

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| `About/WhatWeBelieve.lava` | What We Believe accordion on About page |
| Bootstrap collapse | `data-toggle="collapse"` behavior in legacy site |

## Pages Used On

- **About**: What We Believe section
- **Kids**: FAQ section
- **Easter**: FAQ section

## Rebuild Notes

- Replace Bootstrap collapse with a native React implementation or use a lightweight library like `@radix-ui/react-accordion` for accessible accordion behavior out of the box.
- Do not import Bootstrap JS for this component. The legacy site uses `data-toggle="collapse"` which is a Bootstrap jQuery dependency.
- Animate with CSS `grid-template-rows: 0fr -> 1fr` or `max-height` transition for smooth expand/collapse without layout shift.
- Ensure each accordion instance is independently controlled (multiple accordions on one page should not interfere with each other).
- Content is rich text, so the panel body must support the same rendering as `<SectionBlock />` body.
