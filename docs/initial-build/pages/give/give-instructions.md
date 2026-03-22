---
title: "Give Page - Build Instructions"
slug: /give
---

# Give Page - Build Instructions

## Overview

Giving/donation page for Ev Church. Currently implemented as a redirect to the external Fundable platform. No on-site content is rendered.

## User Journey

- **Entry points:** Navigation "Give" button, footer link, CTAs across the site
- **Goal:** Make a financial contribution to the church
- **Flow:** User clicks "Give" -> leaves ev.church -> lands on Fundable platform -> completes gift

## Redirect Chain

```
/give
  -> 307 Temporary Redirect -> https://give.ev.church
    -> 301 Permanent Redirect -> https://give.aucklandev.co.nz
      -> Fundable platform (fundableapp.com)
```

## Content

Two active giving campaigns on the Fundable platform:

1. **General Giving Fund** - General church operations and ministry support
2. **North Building Fund** ("Pay Off Our Gospel Training") - North Campus building project

## Dynamic vs Static

External platform -- not controlled by Rock CMS or Payload. The redirect itself is static configuration.

## Interactions

All interactions happen on the external Fundable platform:
- Sign in / Sign up
- Create a new gift (one-time or recurring)
- Search campaigns
- Manage giving history

## Integration Notes for Rebuild

### Option A: Keep as Redirect (Recommended for launch)
- Simplest approach, no development effort
- Implement as a Next.js redirect in `next.config.js` or middleware
- Maintains current user flow

### Option B: Embed Fundable in an iframe
- Keep branding consistent
- Potential cross-origin issues
- Depends on Fundable supporting iframe embedding

### Option C: Build Custom Giving Page
- Create a branded landing page on ev.church with giving info
- Link out to Fundable, or integrate with a payment processor (Stripe, etc.)
- Best UX but highest effort
- Would allow showing giving history in a future member portal

### Recommendation
Keep redirect for initial launch (Option A). Consider Option C as a future enhancement for better UX and data ownership.

## Payload Modeling

### Option A (redirect):
No Payload content needed. Configure redirect in Next.js:
```js
// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/give',
        destination: 'https://give.ev.church',
        permanent: false, // 307
      },
    ]
  },
}
```

### Option C (landing page):
```
Page: give
  - HeroBlock (giving themed)
  - ContentBlock (why give / giving info)
  - CardGridBlock (giving campaigns)
  - CTABlock (external link to Fundable or embedded form)
```
