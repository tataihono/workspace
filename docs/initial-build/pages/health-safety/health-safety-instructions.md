---
title: "Health & Safety Page - Build Instructions"
slug: /hs
---

# Health & Safety Page - Build Instructions

## Overview

Internal-facing Health & Safety information page for Ev Church. Primarily used by church workers, volunteers, and contractors to access H&S resources and report incidents or hazards.

## User Journey

- **Entry points:** Footer "Health & Safety" link. Used by staff and volunteers who need H&S resources.
- **Goal:** Access H&S documents, submit hazard/incident reports, find H&S contact
- **Exit:** External Google Forms for incident reporting, or Google Docs for policy documents

## Content Zones

1. **Alert Banner (red)** - Two prominent buttons linking to Hazard and Incident Google Forms
2. **H&S Overview** - Brief statement about the church's commitment to H&S
3. **Key Commitments** - Bulleted list of 5 commitments
4. **Resources** - Links to Google Docs (3 documents) and Google Forms (4 forms)
5. **Key Contact** - Austin Ibarra, HSC Chair, phone number

## Rock CMS Data

None. This page contains entirely static content with external Google Workspace links.

## Dynamic vs Static

| Content | Type | Source |
|---------|------|--------|
| All page content | 100% Static | Payload page content |
| Form links | Static (external) | Google Forms URLs |
| Document links | Static (external) | Google Docs/Drive URLs |

## Interactions

- Links to external Google Forms (open in new tab)
- Links to external Google Docs (open in new tab)
- Phone number click-to-call

## Integration Notes

All forms and documents are hosted on Google Workspace. Options for the rebuild:

1. **Keep Google Forms** (recommended) - They work well for incident/hazard reporting and provide built-in response tracking
2. **Bring forms into Payload CMS** - Build custom forms with submission handling. More control but more development effort. Would need to replicate Google Forms' response collection and notification features.

## Payload Modeling

```
Page: health-safety (slug: /hs)
  - CTABlock (alert banner variant)
    - backgroundColor: #b82023
    - buttons:
      - { label: "Hazard Identification Form", url: "[Google Form URL]", target: "_blank" }
      - { label: "Incident & Accident Form", url: "[Google Form URL]", target: "_blank" }
  - ContentBlock (overview)
    - H&S overview paragraph
  - ContentBlock (commitments)
    - Bulleted list of 5 key commitments
  - ContentBlock (resources)
    - Documents section with external links
    - Forms section with external links
  - ContentBlock (contact)
    - Austin Ibarra, HSC Chair, 021 078 0985
```

## Key Contact

- **Austin Ibarra** - HSC Chair
- **Phone:** 021 078 0985
