# Footer

Multi-column site footer with categorized links, social media icons, privacy link, and copyright notice.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `FooterColumn[]` | -- | Link columns (see structure below) |
| `socialLinks` | `SocialLink[]` | -- | Social media icon links |
| `privacyHref` | `string` | `/privacy` | Privacy policy page URL |
| `copyrightOrg` | `string` | `"Ev Church"` | Organization name for copyright line |

### FooterColumn Shape

```ts
interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}
```

### SocialLink Shape

```ts
interface SocialLink {
  platform: "facebook" | "instagram" | "youtube" | "spotify" | "apple-podcasts";
  href: string;
  ariaLabel: string;
}
```

## Column Structure

| Column | Links |
|--------|-------|
| **About** | About, Our Vision, Our Team, What We Believe |
| **Next Steps** | Explaining Christianity, Newish Connect, Connect Groups, Kids, Youth |
| **Sections** | Visit, Contact, Give, Sermons |
| **Campuses** | North -- Sunday 10:15am, Central -- Sunday 10:15am, Unichurch -- Sunday 5:15pm |

## Social Media Row

| Platform | Icon | URL Pattern |
|----------|------|-------------|
| Facebook | Facebook icon | facebook.com profile |
| Instagram | Instagram icon | instagram.com profile |
| YouTube | YouTube icon | youtube.com/@ev.church |
| Spotify | Spotify icon | Spotify podcast link |
| Apple Podcasts | Apple Podcasts icon | Apple Podcasts link |

## Bottom Bar

- Privacy link (left or inline)
- Copyright: `(c) {currentYear} Ev Church`
- Year is dynamically rendered.

## Variants

Single variant. Layout is responsive:

| Breakpoint | Layout |
|------------|--------|
| Mobile (< 768px) | Single column, sections stacked |
| Tablet (768px--1023px) | 2-column grid |
| Desktop (>= 1024px) | 4-column grid |

## Data Source

- **Link columns**: Static configuration or Payload CMS global (`siteFooter`).
- **Campus service times**: Payload `campuses` collection (service time field displayed alongside campus name).
- **Social links**: Payload CMS global (`siteSettings.socialLinks`) or static config.

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| `Footer.lava` | Full footer rendering |
| Site Settings (Rock) | Social media URLs |

## Pages Used On

All pages (rendered in master layout).

## Rebuild Notes

- Render as a `<Footer />` React component in the root layout.
- Use `lucide-react` or `react-icons` for social media icons.
- Campus service times should be fetched from the `campuses` collection so they stay in sync with campus detail pages.
- Copyright year: use `new Date().getFullYear()` at render time (server component friendly).
- Ensure all links have meaningful `aria-label` attributes, especially icon-only social links.
