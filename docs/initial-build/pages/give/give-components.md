---
title: "Give Page - Component Map"
slug: /give
---

# Give Page - Component Map

| Order | Section | Component | Data Source | Notes |
|-------|---------|-----------|-------------|-------|
| 1 | Redirect | N/A | Config/redirect | 307 redirect to give.ev.church |

## Current State

This page is an external redirect. No components are rendered on the ev.church domain.

## Next.js Rebuild Options

### Option A: Redirect Only (Recommended)

Implement as a Next.js redirect in `next.config.js` or middleware. No components needed.

```js
// next.config.js
{
  source: '/give',
  destination: 'https://give.ev.church',
  permanent: false,
}
```

### Option B: Landing Page with External Link

If a branded landing page is desired before redirecting:

| Order | Section | Component | Shared Spec | Data Source |
|-------|---------|-----------|-------------|-------------|
| 1 | Hero | Hero Banner | heroes/hero-banner.md | Payload page |
| 2 | Giving Info | Section Block | content/section-block.md | Payload page |
| 3 | Campaigns | Card Grid | cards/campaign-card.md | Payload page |
| 4 | Give CTA | CTA Banner (external link) | cta/cta-banner.md | Payload page (links to Fundable) |

### Option C: Integrated Giving

If giving is brought in-house with Stripe or similar:

| Order | Section | Component | Shared Spec | Data Source |
|-------|---------|-----------|-------------|-------------|
| 1 | Hero | Hero Banner | heroes/hero-banner.md | Payload page |
| 2 | Giving Info | Section Block | content/section-block.md | Payload page |
| 3 | Campaigns | Campaign Selector | forms/giving-form.md | Payload campaigns |
| 4 | Giving Form | Payment Form | forms/payment-form.md | Stripe Elements |
| 5 | Confirmation | Confirmation Block | content/confirmation-block.md | API response |
