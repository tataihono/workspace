---
title: "Health & Safety Page - Component Map"
slug: /hs
---

# Health & Safety Page - Component Map

| Order | Section | Component | Shared Spec | Data Source |
|-------|---------|-----------|-------------|-------------|
| 1 | Alert Banner | CTA Banner (alert variant) | cta/cta-banner.md | Payload page (red bg, form links) |
| 2 | H&S Overview | Section Block | content/section-block.md | Payload page |
| 3 | Commitments | Section Block (list) | content/section-block.md | Payload page |
| 4 | Resources | Section Block (link list) | content/section-block.md | Payload page (external links) |
| 5 | Contact | Section Block | content/section-block.md | Payload page |

## Component Notes

### CTA Banner (alert variant)
- Background color: #b82023 (Ev Church red)
- White text and button styling
- Two buttons side by side:
  - "Hazard Identification Form" -> Google Form (external, new tab)
  - "Incident & Accident Form" -> Google Form (external, new tab)
- Buttons should have `target="_blank"` and `rel="noopener noreferrer"`
- Visually prominent -- this is the primary action on the page

### Section Block (overview)
- Simple paragraph block with the H&S overview statement
- Heading: "Health & Safety"

### Section Block (commitments list)
- Heading: "Key Commitments"
- Unordered list with 5 bullet points
- Standard prose styling

### Section Block (resources link list)
- Heading: "Resources"
- Sub-headings: "Documents", "Forms"
- Lists of external links to Google Docs and Google Forms
- All links open in new tab with `rel="noopener noreferrer"`
- Consider adding an external link icon indicator

### Section Block (contact)
- Heading: "Key Contact"
- Name, role, and phone number
- Phone number as click-to-call `tel:` link

### Layout
- Uses FullWidthNarrow layout
- No sidebar
- Alert banner spans full width above the narrow content area
