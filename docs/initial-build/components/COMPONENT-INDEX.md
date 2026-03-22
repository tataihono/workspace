# Ev Church -- Shared Component Index

> Reference index for all shared components in the Next.js + Payload CMS rebuild of ev.church.
> Each component spec documents props, variants, data sources, legacy Lava references, and rebuild notes.

## Layout

| Component | Spec | Description |
|-----------|------|-------------|
| Header | [layout/header.md](layout/header.md) | Fixed navbar with scroll-aware transparency, navigation, and mobile hamburger menu |
| Footer | [layout/footer.md](layout/footer.md) | Multi-column footer with links, social icons, and copyright |
| Page Layout | [layout/page-layout.md](layout/page-layout.md) | Master page layout with zone system and layout variants |

## Heroes

| Component | Spec | Description |
|-----------|------|-------------|
| Hero Banner | [heroes/hero-banner.md](heroes/hero-banner.md) | Full-width hero banners with image backgrounds, carousels, and overlay content |

## Content

| Component | Spec | Description |
|-----------|------|-------------|
| Section Block | [content/section-block.md](content/section-block.md) | Generic content section with heading, body text, and optional CTAs |
| Accordion / FAQ | [content/accordion-faq.md](content/accordion-faq.md) | Expandable/collapsible content panels for FAQs and doctrinal statements |
| Quote Block | [content/quote-block.md](content/quote-block.md) | Scripture or testimonial display with attribution |

## Cards

| Component | Spec | Description |
|-----------|------|-------------|
| Campus Card | [cards/campus-card.md](cards/campus-card.md) | Campus info card with name, service time, address, and link |
| Team Member Card | [cards/team-member-card.md](cards/team-member-card.md) | Staff photo card with name, role, and email overlay |
| Event Card | [cards/event-card.md](cards/event-card.md) | Upcoming event listing with date, title, location, and registration status |
| Ministry Card | [cards/ministry-card.md](cards/ministry-card.md) | Kids/Youth ministry program card with age group and schedule |

## Forms

| Component | Spec | Description |
|-----------|------|-------------|
| Contact Form | [forms/contact-form.md](forms/contact-form.md) | General contact form and visit inquiry variant |
| Signup Form | [forms/signup-form.md](forms/signup-form.md) | Course/program registration forms for Explaining Christianity and Newish Connect |

## Media

| Component | Spec | Description |
|-----------|------|-------------|
| Image Carousel | [media/image-carousel.md](media/image-carousel.md) | Swiper.js v11 carousel with multiple layout variants |
| Video Embed | [media/video-embed.md](media/video-embed.md) | Responsive YouTube embed for sermons |
| Map Embed | [media/map-embed.md](media/map-embed.md) | Google Maps embed for campus locations |

## CTA

| Component | Spec | Description |
|-----------|------|-------------|
| CTA Banner | [cta/cta-banner.md](cta/cta-banner.md) | Call-to-action banner sections with heading, body, and buttons |
| CTA Button | [cta/cta-button.md](cta/cta-button.md) | Reusable button/link component with primary, secondary, and text variants |

---

## Tech Stack Context

| Layer | Current (Rock CMS) | Target (Rebuild) |
|-------|---------------------|-------------------|
| CMS | Rock RMS with Lava templates | Payload CMS (collections + blocks) |
| Frontend | ASP.NET WebForms + Lava | Next.js (App Router) |
| CSS | Tailwind CSS 4.1.7 + Bootstrap (legacy) | Tailwind CSS 4.x |
| Carousels | Swiper 11 (CDN) | Swiper 11 (npm) |
| Fonts | TypeKit: proxima-nova, utopia-std | Same via Adobe Fonts / self-hosted |
| Primary Color | `#d22227` | `#d22227` |
| Analytics | Google Analytics G-1R09W3HMNX | Same |
