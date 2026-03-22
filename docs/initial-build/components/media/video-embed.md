# Video Embed

Responsive YouTube video embed for displaying sermons and other video content.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `videoId` | `string` | -- | YouTube video ID |
| `title` | `string` | `"Video"` | Accessible title for the iframe |
| `autoplay` | `boolean` | `false` | Start playing automatically (muted) |
| `aspectRatio` | `"16/9" \| "4/3"` | `"16/9"` | Video aspect ratio |

## Layout

- Responsive container that maintains 16:9 aspect ratio at all screen sizes.
- Video fills the container width.
- Centered within its parent section.

### Responsive Container

```
/* Tailwind approach */
aspect-video    /* 16:9 */
w-full
max-w-4xl       /* constrain max width */
mx-auto         /* center */
```

## Embed URL

```
https://www.youtube.com/embed/{videoId}?rel=0&modestbranding=1
```

Query parameters:
- `rel=0`: Do not show related videos from other channels.
- `modestbranding=1`: Minimal YouTube branding.

## YouTube Channel

- Channel: `@ev.church`
- Latest sermon is typically featured on the homepage.

## Variants

Single variant. The component is a simple responsive embed wrapper.

## Data Source

- **Payload CMS**: The `videoId` is stored as a text field on the page or within a content block.
- For the homepage, the latest sermon video ID may be manually updated by content editors or automatically pulled from the YouTube Data API.

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| Homepage Lava template | Latest sermon embed on homepage |

## Pages Used On

- **Homepage**: Latest sermon section

## Rebuild Notes

- Use a `<lite-youtube>` web component or `@next/third-parties` YouTube embed for better performance (avoids loading heavy YouTube iframe until user interacts).
- Alternatively, show a thumbnail with a play button overlay; load the iframe on click.
- The `<iframe>` must include `title` attribute for accessibility.
- Add `loading="lazy"` to the iframe if below the fold.
- Consider `next/script` for any YouTube API integrations.
- Privacy: use `youtube-nocookie.com` domain for the embed to reduce tracking: `https://www.youtube-nocookie.com/embed/{videoId}`.
- Do not autoplay with sound; if autoplay is enabled, it must be muted per browser policies.
