---
title: Visit Page - Build Instructions
page: Visit
slug: /visit
rock_page_id: 858
---

# Visit Page - Build Instructions

## Overview

The Visit page is the primary landing page for first-time visitors considering attending Ev Church. Its purpose is to answer the key questions a potential visitor has -- where, when, what to expect -- and to convert interest into an actual first-time visit.

This page uses the `FullWidthNarrow` layout, which provides a centered content column without full-width edge-to-edge sections.

## User Journey

Visitors arrive at this page from multiple sources:

- **Homepage "New Here?" CTA:** The most common internal path, from the Connect section at the bottom of the homepage.
- **Google search:** Queries such as "church Auckland", "church North Shore", "church Hillsborough", or "ev church visit".
- **Direct referral:** Word-of-mouth visitors who have been given the URL or told to check out the website.
- **Social media:** Links shared on Instagram or Facebook.

**Primary conversion goal:** Visitor completes the registration form so the church's visitor care team can follow up and prepare a welcome.

**Secondary goals:**
1. Visitor identifies which campus is closest/most convenient
2. Visitor understands what a service looks like and feels comfortable attending
3. Visitor learns about kids ministry if applicable

## Content Zones (Top to Bottom)

### 1. Hero Banner
- Interior page hero with page title "What to Expect"
- Simpler than the homepage hero -- no carousel, no CTAs
- May include a background image or solid color depending on design system

### 2. Campus Information Cards
- Three campus cards in a grid layout
- Each card: campus name, service day/time, street address
- Data is dynamically synced from Rock CMS campus entities

### 3. What to Expect Section
- Describes the service experience: duration (90 minutes), tone (exciting, casual, relaxed)
- Ordered list of service structure (music, announcements, kids dismissal, Bible reading, message, closing worship)
- "Come as you are" messaging
- Post-service fellowship and refreshments mention

### 4. Kids Ministry Section
- Information about kids programs available at morning services
- Age range: preschool through intermediate
- Check-in process: requires extra 10 minutes
- Safety protocols mentioned

### 5. Visitor Registration Form
- Form for first-time visitors to register their planned visit
- Fields: Campus (dropdown, required), First Name (required), Last Name (required), Email (required), Mobile Phone (optional, NZ +64 format), Gender (optional), Spouse information (optional, expandable section)
- Form submission routes to Rock CMS workflow for visitor care team follow-up

### 6. Bottom Campus Cards
- Repeated campus cards at the bottom of the page
- Provides location context after the form for visitors who scrolled past the top cards

### 7. Connect CTA
- Simple CTA section with "Contact Us" link
- Final fallback for visitors who want to reach out without filling the form

## Rock CMS Data Sources

| Data | Source | Notes |
|------|--------|-------|
| Campus info | Campus entity (all active) | Service times, addresses, campus names |
| Form submission | Rock workflow | Visitor registration workflow processes new submissions |
| Page content | HTML block content | Service description, kids ministry info |

## Dynamic vs Static Content

| Content | Type | Sync Behavior |
|---------|------|---------------|
| Campus cards | Dynamic (synced) | Synced from Rock CMS campus entities on schedule |
| Service description | Static (CMS-editable) | Content editors update in Payload CMS as needed |
| Kids ministry info | Static (CMS-editable) | Content editors update in Payload CMS as needed |
| Registration form | Workflow | Form config in Payload, submission routes to Rock workflow |
| Hero content | Static (CMS-editable) | Page title and optional hero image |

## Interactions

### Registration Form
- **Campus dropdown:** Populated from the campuses collection (synced from Rock)
- **Spouse info toggle:** Checkbox that reveals/hides additional spouse fields
- **Phone number formatting:** Input should accept various NZ phone formats and normalize to +64 format
- **Form validation:** Client-side validation for required fields and email format; server-side validation before Rock submission
- **Success state:** After submission, display a confirmation message thanking the visitor and letting them know someone will be in touch

### Navigation
- Standard interior page navigation (no anchor links or scroll behavior beyond default)

## Integrations

| Integration | Purpose | Implementation |
|-------------|---------|----------------|
| Rock CMS Workflow | Process visitor registration | Form data POSTed to API route, which creates Rock workflow entry |
| Google Analytics | Track form submissions | GA4 event on successful form submit |
| Google Maps | Campus locations (potential) | Tap-to-navigate on mobile for campus addresses |

## Payload CMS Modeling

The Visit page should be modeled in Payload CMS as a `pages` collection entry:

```
Page: Visit (slug: "/visit")
├── blocks[]
│   ├── HeroBlock
│   │   ├── heading: string ("What to Expect")
│   │   └── image: upload (optional)
│   ├── CardGridBlock (Campus Info)
│   │   └── campuses: relationship → campuses collection
│   ├── ContentBlock (What to Expect)
│   │   ├── heading: string
│   │   └── body: richText
│   ├── ContentBlock (Kids Ministry)
│   │   ├── heading: string
│   │   └── body: richText
│   ├── FormBlock (Visitor Registration)
│   │   ├── heading: string
│   │   ├── description: richText
│   │   ├── fields: configured in Payload form builder
│   │   └── workflow: string (Rock workflow identifier)
│   ├── CardGridBlock (Bottom Campus Cards)
│   │   └── campuses: relationship → campuses collection
│   └── CTABlock (Connect)
│       ├── heading: string
│       ├── body: richText
│       └── ctas[] (label, href)
```
