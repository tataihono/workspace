# Image Carousel

Swiper.js v11 based carousel component with multiple layout variants for different contexts across the site.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `CarouselVariant` | -- | Carousel layout variant |
| `slides` | `Slide[]` | -- | Array of slide data |
| `autoplay` | `boolean \| { delay: number }` | `false` | Autoplay configuration |
| `loop` | `boolean` | `false` | Enable infinite loop |
| `navigation` | `boolean` | `false` | Show prev/next arrows |
| `pagination` | `boolean \| "dots" \| "fraction"` | `false` | Pagination style |

```ts
type CarouselVariant = "hero" | "photoGallery" | "campusPhotos" | "connectGroups";

interface Slide {
  image?: Image;
  content?: ReactNode; // overlay content for hero variant
  card?: ReactNode;    // card content for connectGroups variant
}

interface Image {
  src: string;
  alt: string;
  srcSet?: string;
  width?: number;
  height?: number;
}
```

## Variants

### Hero Carousel (`hero`)

- Full-width, full-bleed images.
- Overlay content (heading, subtitle, CTA buttons) positioned over each slide.
- Autoplay with 5-second delay.
- Loop enabled.
- Pagination: clickable dots.
- Effect: fade transition.
- Used on the homepage.

### Photo Gallery (`photoGallery`)

- Displays a gallery of images (legacy homepage has 14 images).
- Navigation arrows (prev/next) visible.
- Multiple slides visible at once (responsive breakpoints).
- No autoplay.
- Used on the homepage photo gallery section.

### Campus Photos (`campusPhotos`)

- Up to 4 images per campus (from `SlideImage1`--`SlideImage4` attributes).
- Pagination dots.
- Autoplay optional.
- Used on campus detail pages within the hero area.

### Connect Groups (`connectGroups`)

- Card-based carousel (not just images).
- Each slide is a connect group card.
- Responsive breakpoints for slides per view.
- Navigation arrows.
- Used on the Connect Groups listing page.

#### Connect Groups Responsive Breakpoints

| Breakpoint | Slides Per View | Space Between |
|------------|----------------|---------------|
| Mobile (< 640px) | 1 | 16px |
| Tablet (640px--1023px) | 2 | 24px |
| Desktop (>= 1024px) | 3 | 24px |
| Large (>= 1280px) | 4 | 24px |

## Swiper Configuration

Base configuration shared across variants:

```js
{
  modules: [Navigation, Pagination, Autoplay, EffectFade],
  spaceBetween: 0, // overridden per variant
  slidesPerView: 1, // overridden per variant
  speed: 600,
  grabCursor: true,
}
```

### Variant-Specific Overrides

| Setting | Hero | Photo Gallery | Campus Photos | Connect Groups |
|---------|------|---------------|---------------|----------------|
| `autoplay` | `{ delay: 5000 }` | `false` | `{ delay: 5000 }` | `false` |
| `loop` | `true` | `false` | `true` | `false` |
| `navigation` | `false` | `true` | `false` | `true` |
| `pagination` | `{ clickable: true }` | `false` | `{ clickable: true }` | `false` |
| `effect` | `"fade"` | `"slide"` | `"slide"` | `"slide"` |
| `slidesPerView` | `1` | responsive | `1` | responsive |

## Data Source

| Variant | Source |
|---------|--------|
| Hero | Payload `pages` collection (homepage slides) |
| Photo Gallery | Payload `pages` collection (homepage gallery images) or a media gallery field |
| Campus Photos | Payload `campuses` collection (slide image fields) |
| Connect Groups | Payload `connect-groups` collection |

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| `MainBanner.lava` | Homepage hero carousel |
| `MinistryHub/ConnectGroups/List.lava` | Connect groups carousel |
| Swiper CDN (`swiper-bundle.min.css`, `swiper-bundle.min.js`) | Carousel library |

## Pages Used On

- **Homepage**: Hero carousel, photo gallery
- **Campus detail pages**: Campus photos carousel
- **Connect Groups**: Group cards carousel

## Rebuild Notes

- Install Swiper 11 via npm: `npm install swiper`.
- Import only needed modules to minimize bundle size: `import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'`.
- Import CSS: `import 'swiper/css'` plus module-specific CSS files.
- Must be a client component (`"use client"`) since Swiper manipulates the DOM.
- Use `next/image` within slides for optimized image loading.
- For the photo gallery variant, consider lazy loading off-screen slides.
- Accessibility: Swiper has built-in a11y module -- enable it with `a11y: { enabled: true }`. Ensure autoplay pauses on hover/focus.
- Consider a wrapper component `<ImageCarousel variant="hero" slides={...} />` that maps variant to the correct Swiper config, keeping usage simple.
- Test touch/swipe behavior on mobile devices.
