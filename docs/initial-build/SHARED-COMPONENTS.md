# Shared Components

Cross-page component usage matrix and specifications for the ev.church rebuild.

## Component Usage Matrix

| Component | Home | Visit | About | Vision | Contact | Give | EC | Newish | CG | Kids | Youth | North | Central | Uni | Easter | Privacy | H&S |
|-----------|:----:|:-----:|:-----:|:------:|:-------:|:----:|:--:|:------:|:--:|:----:|:-----:|:-----:|:-------:|:---:|:------:|:-------:|:---:|
| Header+Nav | x | x | x | x | x | x | x | x | x | x | x | x | x | x | x | x | x |
| Footer | x | x | x | x | x | - | x | x | x | x | x | x | x | x | x | x | x |
| Hero Banner | x | x | x | x | - | - | x | x | x | x | x | x | x | x | x | - | - |
| Campus Cards | x | x | - | - | x | - | - | - | - | - | - | x | x | x | - | - | - |
| Event Cards | x | - | - | - | - | - | - | - | - | - | - | x | x | x | x | - | - |
| Team Cards | - | - | x | - | - | - | - | - | - | - | - | - | - | - | - | - | - |
| Contact Form | - | x | - | - | x | - | - | - | - | - | - | - | - | - | - | - | - |
| Signup Form | - | - | - | - | - | - | x | x | - | - | - | - | - | - | - | - | - |
| Carousel | x | - | - | - | - | - | - | - | - | - | - | x | x | x | - | - | - |
| Accordion | - | - | x | - | - | - | - | - | - | x | - | - | - | - | x | - | - |
| CTA Banner | x | x | - | x | - | - | - | - | - | - | - | - | - | - | x | - | - |
| Map Embed | - | - | - | - | x | - | - | - | - | - | - | x | x | x | - | - | - |
| Scripture Quote | - | - | - | x | - | - | - | - | - | - | - | - | - | - | x | - | - |
| Section Block | x | x | x | x | x | - | x | x | x | x | x | x | x | x | x | x | x |

**Legend:** EC = Explaining Christianity, CG = Connect Groups, Uni = Unichurch

## Component Specifications

### Header + Navigation

- **Usage:** All 17 pages
- **Behavior:** Fixed top, transparent at top of page, transitions to `bg-white/50 backdrop-blur-md` on scroll
- **Height:** 80px mobile, 100px desktop
- **Contents:** Logo (left), primary nav (center/right), mobile hamburger menu
- **Dropdowns:** Visit (4 items), Next Steps (5 items)
- **Data source:** `navigation` global (mainNav)
- **Payload block:** N/A — layout component

### Footer

- **Usage:** All pages except Give (redirect page)
- **Sections:** 4 link columns (About, Next Steps, Sections, Campuses) + social icons + copyright
- **Data source:** `navigation` global (footerNav) + `site-settings` global (socialLinks, mailingAddress)
- **Payload block:** N/A — layout component

### Hero Banner

- **Usage:** 13 pages
- **Variants:** Full-bleed image with overlay text, video background (homepage)
- **Fields:** heading, subheading, backgroundImage, ctaButtons[]
- **Responsive:** Full viewport width, ~60-80vh height
- **Payload block:** `HeroBlock`

### Campus Cards

- **Usage:** 6 pages (Homepage, Visit, Contact, and 3 campus pages)
- **Contents:** Campus image, name, service times, address, link
- **Layout:** 3-column grid on desktop, stacked on mobile
- **Data source:** `campuses` collection
- **Payload block:** `CardGridBlock` with campus relationship

### Event Cards

- **Usage:** 5 pages (Homepage, 3 campus pages, Easter)
- **Contents:** Event image, title, date/time, campus, registration status badge
- **Layout:** 2 or 3 column grid
- **Data source:** `events` collection, optionally filtered by campus
- **Payload block:** `EventListBlock`

### Team Cards

- **Usage:** About page only
- **Contents:** Photo (circular crop), name, role
- **Layout:** Grid, grouped by teamGroup (Staff, Leadership, Apprentices)
- **Data source:** `team-members` collection, filtered by teamGroup
- **Payload block:** `TeamGridBlock`

### Contact Form

- **Usage:** Visit, Contact pages
- **Fields:** Name, email, message, campus selector (optional)
- **Submission:** POST to API route, forward to Rock RMS workflow or email
- **Validation:** Client-side + server-side
- **Payload block:** `FormBlock` (formType: `contact`)

### Signup Form

- **Usage:** Explaining Christianity, Newish Connect pages
- **Fields:** Name, email, phone, campus preference
- **Submission:** POST to API route, create Rock RMS registration or workflow
- **Payload block:** `FormBlock` (formType: `signup`)

### Carousel / Slider

- **Usage:** 4 pages (Homepage, 3 campus pages)
- **Library:** Swiper 11
- **Contents:** Campus slide images (up to 4 per campus)
- **Features:** Autoplay, pagination dots, touch/swipe support
- **Data source:** `campuses.slideImages`
- **Payload block:** `ImageGalleryBlock` or custom `CarouselBlock`

### Accordion

- **Usage:** 3 pages (About, Kids, Easter)
- **Contents:** Collapsible question/answer or info sections
- **Behavior:** Single-open or multi-open, animated expand/collapse
- **Use cases:** FAQ (Kids), Beliefs (About), Event details (Easter)
- **Payload block:** `AccordionBlock`

### CTA Banner

- **Usage:** 4 pages (Homepage, Visit, Vision, Easter)
- **Variants:** `banner` (full-width colored background), `inline` (within content), `footer` (above footer)
- **Contents:** Heading, supporting text, 1-2 buttons
- **Payload block:** `CTABlock`

### Map Embed

- **Usage:** 4 pages (Contact, 3 campus pages)
- **Provider:** Google Maps (via googlePlaceId or geoPoint)
- **Contents:** Interactive map with campus pin, address overlay
- **Data source:** `campuses.geoPoint` + `campuses.googlePlaceId`
- **Payload block:** `MapBlock`

### Scripture Quote

- **Usage:** 2 pages (Vision, Easter)
- **Contents:** Scripture text, reference/attribution
- **Styling:** Serif font (utopia-std), centered, larger text
- **Payload block:** `QuoteBlock` (variant: `scripture`)

### Section Block

- **Usage:** 15 pages (all except Give and one other)
- **Purpose:** Generic content section with heading + rich text
- **Variants:** Left-aligned, centered, with/without background color
- **Payload block:** `ContentBlock`
