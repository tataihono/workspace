---
title: "Contact Page - Build Instructions"
slug: /contact
---

# Contact Page - Build Instructions

## Overview

Primary contact page for Ev Church. Dual purpose: form submission for inquiries and location/address reference for all three campuses.

## User Journey

- **Entry points:** Any page's "Contact Us" CTA, site footer, direct search ("contact ev church Auckland")
- **Goal:** Submit an inquiry to the church team, or find a campus address/service time
- **Exit:** Confirmation message after form submission, or navigation to campus page

## Content Zones

1. **Hero** - Simple heading: "Contact"
2. **Contact Form** - First Name, Last Name, Email, Mobile Phone, Message, Submit
3. **Mailing Address** - Auckland Evangelical Church, P.O Box 41066, Mt Roskill, Auckland, 1440
4. **Campus Locations (3)** - North (Rosedale), Central (Hillsborough), Unichurch (Auckland Central)
5. **Services Description** - Paragraph about what to expect at a Sunday service
6. **Campus Cards** - Visual cards linking to each campus with "Join Us" messaging

## Rock CMS Data

- **Campus entity:** Addresses and service times are synced from Rock CMS campus records
- **Form submission:** Submits to Rock workflow via `Contact/SideBar.lava` template
- **Workflow:** Rock RMS processes the inquiry and assigns to a team member for follow-up

## Dynamic vs Static

| Content | Type | Source |
|---------|------|--------|
| Campus addresses | Dynamic (synced) | Payload campuses collection (synced from Rock) |
| Campus service times | Dynamic (synced) | Payload campuses collection (synced from Rock) |
| Contact form | Workflow submission | API route -> Rock RMS workflow endpoint |
| Mailing address | Static | Payload page content or site-settings global |
| Services description | Static | Payload page content |

## Interactions

- **Contact form** with client-side validation
- **Phone number formatting** for NZ numbers (+64 prefix)
- **Form submission** posts to API route, shows success/error state
- **Campus cards** link to individual campus pages or map

## Payload Modeling

```
Page: contact
  - HeroBlock (simple heading variant)
  - FormBlock (contact form)
    - fields: firstName, lastName, email, mobilePhone, message
    - submitAction: API route -> Rock RMS workflow
  - ContentBlock (mailing address)
  - CardGridBlock (campus cards - address variant)
    - relationship: campuses collection
  - ContentBlock (services description)
  - CardGridBlock (campus cards - CTA variant)
    - relationship: campuses collection
```

## Form Handling

In the Next.js rebuild, the contact form should:

1. Validate on the client side (required fields, email format, NZ phone format)
2. Submit to a Next.js API route (`/api/contact`)
3. The API route forwards the submission to the Rock RMS workflow endpoint
4. Return success/error response to the client
5. Display appropriate feedback (success message or error with retry)
