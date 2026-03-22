---
title: "Explaining Christianity Page - Build Instructions"
slug: /explaining-christianity
source_url: https://www.ev.church/explaining-christianity
---

# Explaining Christianity Page - Build Instructions

## Overview

Evangelistic course landing page. A 4-week program for non-Christians or seekers to explore Christianity. Key outreach tool for the church.

## User Journey

Entry points: nav "Next Steps > Explaining Christianity", campus event listings, personal invitations from church members. Goal: sign up for the course.

## Content Zones

1. **Hero/banner image** - Explaining Christianity graphic
2. **Course description** - What the course involves (food, talks, discussion)
3. **Eligibility info** - Open to everyone
4. **Registration form** - Sign-up with personal details

## Rock CMS Data

- Form submits to a Rock workflow.
- Upcoming sessions appear on campus event calendars (separate from this page).

## Dynamic vs Static

- **Description**: Static CMS content.
- **Form**: Submits to Rock workflow for processing.

## Interactions

- Registration form with field validation.
- Phone formatting for NZ numbers (+64 prefix).

## Integrations

- Rock workflow for form submission and follow-up.

## Payload Modeling

Model as a Payload page with the following blocks:

- `HeroBlock` - Banner image
- `ContentBlock` - Description text
- `ContentBlock` - Eligibility information
- `FormBlock` - Signup form with fields:
  - `firstName` (text, required)
  - `lastName` (text, required)
  - `email` (email, required)
  - `phone` (tel, required)
  - `comments` (textarea, optional)
