# Header

Fixed-position navigation bar with scroll-aware transparency, site logo, primary navigation with dropdowns, and a login link. Collapses to a hamburger menu on mobile.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `navItems` | `NavItem[]` | -- | Primary navigation items (see structure below) |
| `logoSrc` | `string` | `/GetImage.ashx?id=1631` | Ev Church logo image URL |
| `logoAlt` | `string` | `"Ev Church"` | Logo alt text |
| `loginHref` | `string` | `/login` | Login page URL |
| `transparent` | `boolean` | `true` | Whether header starts transparent (for pages with hero) |

### NavItem Shape

```ts
interface NavItem {
  label: string;
  href: string;
  children?: NavItem[]; // renders as dropdown
}
```

## Navigation Structure

| Label | Href | Dropdown Items |
|-------|------|----------------|
| Home | `/` | -- |
| Visit | `/visit` | What to Expect, North Sunday 10:15am, Central Sunday 10:15am, Unichurch Sunday 5:15pm |
| About | `/about` | -- |
| Our Vision | `/our-vision` | -- |
| Next Steps | `/next-steps` | Explaining Christianity, Newish Connect, Connect Groups, Kids, Youth |
| Contact | `/contact` | -- |
| Give | `/give` | -- |

Login link renders in the far-right zone, separate from primary nav.

## Variants

### Desktop (>= 1024px)

- Height: **100px**
- Logo zone on the left, navigation zone center/right, login zone far right.
- Dropdown menus appear on hover/focus.

### Mobile (< 1024px)

- Height: **80px**
- Logo zone on the left, hamburger icon on the right.
- Hamburger opens a full-screen or slide-out menu (details TBD from theme).

### Scroll States

| State | Trigger | Background | Effect |
|-------|---------|------------|--------|
| Top of page | `scrollY < fold` | `bg-white/0` | Fully transparent |
| Past fold | `scrollY >= fold` | `bg-white/50 backdrop-blur-md` | Frosted glass |
| Scrolling down | Scroll delta > 0 | -- | Header hides (translateY: -100%) |
| Scrolling up | Scroll delta < 0 | -- | Header shows (translateY: 0) |

## Styling

```
/* Tailwind classes */
fixed top-0 left-0 right-0 z-50
transition-all duration-300

/* Default state */
bg-white/0

/* Scrolled state */
bg-white/50 backdrop-blur-md shadow-sm
```

## Keyboard Accessibility

- `Alt + Arrow` keys: navigate between nav items.
- Dropdowns open on `Enter` or `Space`, close on `Escape`.
- Focus trap within mobile menu when open.

## Data Source

Static configuration. Navigation items are hardcoded or pulled from a Payload CMS global (`siteNavigation`).

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| `Navbar/Logo.lava` | Logo zone rendering |
| `Site.Master` | Overall layout including header zones |
| `theme.js` | Scroll detection logic (show/hide on scroll direction) |

## Pages Used On

All pages (rendered in master layout).

## Rebuild Notes

- Replace Lava template logic with a React `<Header />` component using `useEffect` for scroll detection.
- Use `next/image` for the logo with appropriate `width` / `height`.
- Scroll behavior should use `IntersectionObserver` or a scroll listener with `requestAnimationFrame` throttling.
- Consider `framer-motion` for smooth show/hide transitions.
- Mobile menu implementation depends on chosen UI pattern (slide-out drawer recommended).
- Ensure dropdown menus meet WCAG 2.1 AA for keyboard and screen reader access.
