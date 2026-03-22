---
title: "Newish Connect Page - Build Instructions"
slug: /newish
source_url: https://www.ev.church/newish
---

# Newish Connect Page - Build Instructions

## Overview

Onboarding course for new or recent church members. A 4-week program introducing church history, vision, and involvement opportunities. Gateway to connect groups.

## User Journey

Entry points: Connect Groups page (/connect-groups), personal invitation, or nav "Next Steps > Newish Connect". Goal: sign up for the onboarding course.

## Content Zones

1. **Hero banner** - Newish Connect image
2. **Description** - What the course covers and who it is for
3. **Registration form** - Sign-up with campus selector

## Rock CMS Data

- Campus list for dropdown is synced from Rock.
- Form submits to a Rock workflow.

## Dynamic vs Static

- **Description**: Static CMS content.
- **Campus options**: Dynamic, synced from Rock campuses.
- **Form**: Submits to Rock workflow for processing.

## Interactions

- Registration form with campus dropdown selection.
- Phone formatting for NZ numbers.
- Keyboard shortcut: Alt+M for form submission.

## Payload Modeling

Model as a Payload page with the following blocks:

- `HeroBlock` - Banner image
- `ContentBlock` - Description text
- `FormBlock` - Signup form with fields:
  - `firstName` (text, required)
  - `lastName` (text, required)
  - `email` (email, required)
  - `campus` (relationship -> `campuses` collection, required)
  - `homePhone` (tel, optional)
  - `mobilePhone` (tel, required)
  - `comments` (textarea, optional)

**Note**: The campus dropdown should be populated from the Payload `campuses` collection (synced from Rock) rather than hardcoded values.
