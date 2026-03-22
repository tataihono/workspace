---
title: "Contact Page - Component Map"
slug: /contact
---

# Contact Page - Component Map

| Order | Section | Component | Shared Spec | Data Source |
|-------|---------|-----------|-------------|-------------|
| 1 | Hero | Hero Banner (simple) | heroes/hero-banner.md | Payload page |
| 2 | Contact Form | Contact Form | forms/contact-form.md | Payload form -> Rock workflow |
| 3 | Mailing Address | Section Block | content/section-block.md | Payload page (or site-settings global) |
| 4 | Campus Locations | Campus Card (address variant) | cards/campus-card.md | Payload campuses (synced) |
| 5 | Services Info | Section Block | content/section-block.md | Payload page |
| 6 | Campus Cards | Campus Card grid | cards/campus-card.md | Payload campuses (synced) |
| 7 | Connect CTA | CTA Banner | cta/cta-banner.md | Payload page |

## Component Notes

### Hero Banner (simple)
- Variant: text-only, no background image
- Heading: "Contact"
- No subtitle or CTA button

### Contact Form
- Fields: First Name, Last Name, Email, Mobile Phone, Message
- Validation: Client-side required fields, email format, NZ phone format (+64)
- Submission: POST to `/api/contact` -> Rock RMS workflow
- States: default, validating, submitting, success, error

### Campus Card (address variant)
- Displays: campus name, service day/time, full street address
- Three instances: North, Central, Unichurch
- Data: pulled from Payload campuses collection (synced from Rock CMS)

### Campus Card grid
- Displays: campus name, image, "Join Us" CTA
- Links to individual campus pages
- Data: pulled from Payload campuses collection (synced from Rock CMS)

### CTA Banner
- "Connect with us" or similar messaging
- Links to Connect page or relevant next step
