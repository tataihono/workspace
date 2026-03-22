# Hero Banner

Full-width banner component with image background, overlay content, and optional carousel. Used at the top of pages to establish visual context.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `HeroVariant` | `"interior"` | Banner variant |
| `slides` | `HeroSlide[]` | -- | Slide data (for homepage and campus variants) |
| `title` | `string` | -- | Page title (for interior variant) |
| `backgroundImage` | `Image` | -- | Single background image (for interior/easter variants) |
| `overlayContent` | `ReactNode` | `null` | Custom overlay content (for easter variant) |

```ts
type HeroVariant = "homepage" | "campusDetail" | "interior" | "easter";

interface HeroSlide {
  image: Image;
  title?: string;
  subtitle?: string;
  ctaButtons?: CTAButton[];
}

interface Image {
  src: string;
  alt: string;
  srcSet?: string; // responsive srcset
}

interface CTAButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}
```

## Variants

### Homepage

- **Swiper carousel** with multiple slides.
- Each slide: full-width background image with dark overlay gradient.
- Overlay content: heading text, optional subtitle, one or two CTA buttons.
- Swiper config: `autoplay: { delay: 5000 }`, `loop: true`, pagination dots at bottom.
- Slides occupy full viewport width; height is approximately 60--80vh.

### Campus Detail

- **Multi-image carousel** (up to 4 slide images from Rock attributes `SlideImage1`--`SlideImage4`).
- Overlay panel with:
  - Campus name (e.g., "Ev Church North")
  - Establishment year (e.g., "Est. 2005")
  - Service time (e.g., "Sunday 10:15am")
  - Address
  - Two CTA buttons: "Get Directions" (links to Google Maps) and "Plan Your Visit"
- Pagination dots for slides.

### Interior Page

- **Single image** background.
- Page title rendered as a large heading centered over the image.
- Subtle dark gradient overlay for text readability.
- Height: approximately 40--50vh.

### Easter (Custom)

- Custom design with **glassmorphic panels** (frosted glass effect).
- Background image with overlay panels containing event details.
- Uses `backdrop-blur` and semi-transparent backgrounds.
- Highly bespoke; may need its own sub-component.

## Image Handling

### Responsive Images

Legacy Rock CMS serves images via `/GetImage.ashx` with width parameters. The rebuild should use `next/image` with responsive sizing.

| Width Token | Pixel Width | Usage |
|-------------|-------------|-------|
| 310w | 310px | Mobile small |
| 620w | 620px | Mobile retina / tablet |
| 1240w | 1240px | Desktop |
| 1920w | 1920px | Desktop retina / large screens |

### Rock CMS Image Attributes

| Attribute | Description |
|-----------|-------------|
| `FeaturedImage` | Primary hero image for interior pages |
| `SlideImage1` | Carousel slide 1 |
| `SlideImage2` | Carousel slide 2 |
| `SlideImage3` | Carousel slide 3 |
| `SlideImage4` | Carousel slide 4 |

In Payload CMS, these map to image upload fields on the relevant collection (pages, campuses).

## Swiper Configuration

```js
{
  autoplay: { delay: 5000, disableOnInteraction: false },
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  effect: "fade", // or "slide" depending on variant
  speed: 600,
}
```

## Data Source

| Variant | Source |
|---------|--------|
| Homepage | Payload `pages` collection (homepage record) -- slides stored as a repeater/array field |
| Campus Detail | Payload `campuses` collection -- slide images + campus fields |
| Interior | Payload `pages` collection -- `featuredImage` field + `title` |
| Easter | Payload `pages` collection -- custom fields for Easter page |

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| `MainBanner.lava` | Homepage hero carousel |
| `CampusDetail/Hero.lava` | Campus detail hero |
| Page attribute `FeaturedImage` | Interior page hero image |

## Pages Used On

- **Homepage**: Homepage carousel variant
- **Campus pages** (North, Central, Unichurch): Campus detail variant
- **Interior pages** (About, Vision, Kids, Youth, etc.): Interior variant
- **Easter**: Easter variant

## Rebuild Notes

- Install Swiper 11 via npm (`swiper`) rather than CDN.
- Use `next/image` with `fill` and `sizes` prop for responsive hero images. Ensure images are served from Payload's upload directory or an external image host with a configured `next.config.js` remote pattern.
- For the homepage carousel, implement as a client component (`"use client"`) since Swiper requires DOM access.
- Interior variant can be a server component if no interactivity is needed.
- Dark overlay: use a `bg-gradient-to-t from-black/60 to-transparent` layer over the image.
- Ensure carousel is accessible: pause autoplay on focus, provide aria labels for pagination, support keyboard navigation.
- Easter variant is seasonal and may be conditionally rendered or built as a separate page template.
