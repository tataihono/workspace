---
title: "Privacy Policy Page - Build Instructions"
slug: /privacy
---

# Privacy Policy Page - Build Instructions

## Overview

Legal privacy policy page for Ev Church. Required for compliance with New Zealand privacy legislation. A simple, text-only informational page with no interactive elements.

## User Journey

- **Entry points:** Footer "Your Privacy" link
- **Goal:** Informational -- users read the policy to understand how their data is handled
- **Exit:** Back to previous page or navigation to other pages
- **No conversion goal** -- purely informational

## Content Zones

1. **Policy Content** - Five sections of policy text:
   - Introduction
   - Collection
   - Purpose
   - Intended Recipients
   - Access

## Rock CMS Data

None. This page is entirely static content with no dynamic data from Rock CMS.

## Dynamic vs Static

| Content | Type | Source |
|---------|------|--------|
| All policy text | 100% Static | Payload page content (rich text) |

## Interactions

None. This is a read-only text page with no forms, buttons, or interactive elements beyond standard navigation links.

## Payload Modeling

```
Page: privacy
  - ContentBlock (rich text)
    - Full policy text with heading hierarchy
    - Sections: Introduction, Collection, Purpose, Intended Recipients, Access
    - Internal link to /contact page in Access section
```

This is one of the simplest pages on the site. A single rich text ContentBlock is sufficient to hold the entire policy.

## Notes

- **Last updated:** March 2025. The policy should be reviewed periodically and the date updated when changes are made.
- **Rock RMS reference:** The policy currently mentions Rock RMS as the data storage system. If migrating away from Rock, this reference will need updating.
- **Legal review:** Should be reviewed against NZ Privacy Act 2020 requirements before launch.
