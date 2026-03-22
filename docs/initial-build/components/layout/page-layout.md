# Page Layout

Master page layout that wraps all pages with header, footer, content zones, scroll progress indicator, and analytics. Defines layout variants for different page types.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `LayoutVariant` | `"FullWidth"` | Layout variant (see below) |
| `showScrollProgress` | `boolean` | `true` | Show scroll progress bar at top of viewport |
| `children` | `ReactNode` | -- | Page content |
| `sidebarContent` | `ReactNode` | `null` | Sidebar content (for sidebar variants) |

```ts
type LayoutVariant =
  | "Homepage"
  | "FullWidth"
  | "FullWidthNarrow"
  | "LeftSidebar"
  | "RightSidebar";
```

## Zone Structure

The legacy `Site.Master` defines these content zones, mapped to the rebuild as follows:

| Legacy Zone | Rebuild Equivalent | Description |
|-------------|-------------------|-------------|
| Header | `<Header />` component | Site header / navbar |
| Navigation | Merged into Header | Nav items (legacy had separate zone) |
| Login | Merged into Header | Login link in header |
| Feature | Hero / feature slot | Full-width area above main content |
| Main | `{children}` | Primary content area |
| Footer | `<Footer />` component | Site footer |

## Layout Variants

### Homepage

- **Feature zone**: Full-width hero carousel (Swiper).
- **Sub Feature zone**: Secondary content area below hero.
- **Section A--D**: Arranged in a 3-column grid for content blocks (Join Us, Latest Sermon, Events, Photo Gallery, CTA).
- No sidebar.

### FullWidth

- Single column, max-width container (`max-w-7xl` / 1280px).
- Used by most interior pages.

### FullWidthNarrow

- Single column, narrower container (`max-w-3xl` / 768px).
- Used for text-heavy pages (e.g., Privacy Policy).

### LeftSidebar

- Two-column layout: sidebar (1/3 or 1/4) on the left, main content on the right.
- Sidebar collapses above main content on mobile.

### RightSidebar

- Two-column layout: main content on the left, sidebar (1/3 or 1/4) on the right.
- Used on Contact page (sidebar has map + campus info).
- Sidebar collapses below main content on mobile.

## Scroll Progress Indicator

- Thin bar fixed to the very top of the viewport (above the header, `z-[60]`).
- Width scales from 0% to 100% based on scroll position.
- Color: primary red `#d22227`.
- Height: 3px.

## Loading Overlay

Legacy site uses an ASP.NET `UpdateProgress` spinner overlay during async postbacks. In the rebuild:

- Replace with a Next.js route-change loading indicator.
- Use `next/navigation` `usePathname` change detection or `loading.tsx` convention.
- Minimal spinner or progress bar (e.g., NProgress-style).

## Analytics

- Google Analytics measurement ID: `G-1R09W3HMNX`
- Integrate via `next/script` with `strategy="afterInteractive"`.
- Or use `@next/third-parties/google` package.

## Data Source

Static layout configuration. No dynamic data beyond what child components fetch.

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| `Site.Master` | ASP.NET master page with all zones |
| `theme.js` | Scroll progress bar logic |
| Layout templates | Rock CMS layout definitions per page |

## Pages Used On

All pages (root layout wrapper).

## Rebuild Notes

- Implement as `app/layout.tsx` (root) with variant selection per route group or page-level prop.
- Consider using Next.js route groups: `(homepage)`, `(fullwidth)`, `(sidebar)` for layout variants.
- Scroll progress bar: implement as a small client component using `useEffect` + scroll listener.
- The legacy `UpdateProgress` pattern is not needed; Next.js handles route transitions natively.
- Google Analytics: add the gtag script in root layout or use the official `@next/third-parties` integration.
- Ensure the layout does not cause Cumulative Layout Shift (CLS) -- header height should be accounted for with padding/margin on the main content area.
