---
title: Visit Page - Component Breakdown
page: Visit
slug: /visit
---

# Visit Page - Component Breakdown

## Component Map

| Order | Section | Component | Shared Spec | Data Source |
|-------|---------|-----------|-------------|-------------|
| 1 | Hero | Hero Banner (interior) | `heroes/hero-banner.md` | Payload page |
| 2 | Campus Info | Campus Card grid | `cards/campus-card.md` | Payload `campuses` (synced) |
| 3 | What to Expect | Section Block | `content/section-block.md` | Payload page content |
| 4 | Kids Ministry | Section Block | `content/section-block.md` | Payload page content |
| 5 | Registration Form | Contact Form (visitor variant) | `forms/contact-form.md` | Payload form config -> Rock workflow |
| 6 | Bottom Campus Cards | Campus Card grid | `cards/campus-card.md` | Payload `campuses` (synced) |
| 7 | Connect CTA | CTA Banner | `cta/cta-banner.md` | Payload page |

## Page-Specific Components

None. All components on the Visit page use shared component specifications.

## Payload Collections Used

| Collection | Type | Usage on This Page |
|------------|------|--------------------|
| `pages` | Native | Page content, hero, content blocks, CTA |
| `campuses` | Synced from Rock | Campus cards (appears twice: top and bottom) |

## Component Variants

### Hero Banner

- **Interior variant** (`heroes/hero-banner.md`): Simpler than the homepage hero. No carousel, no CTA buttons. Displays page title and optional subtitle over a background image or solid color.

### Campus Card Grid

- Used twice on this page (top and bottom) with identical data source
- Both instances pull from the same `campuses` collection
- Consider rendering as a single reusable component instance referenced in two block positions

### Section Block

- Used twice: once for "What to Expect" and once for "Kids Ministry"
- Both are standard heading + rich text body instances
- The "What to Expect" block includes an ordered list within the rich text body

### Contact Form (Visitor Variant)

- Specialized variant of the shared Contact Form component
- Fields specific to visitor registration: Campus dropdown, First Name, Last Name, Email, Mobile Phone, Gender, Spouse info toggle
- Spouse info section is conditionally shown/hidden via checkbox toggle
- Form submission routes to Rock CMS workflow (not a standard email/API endpoint)

### CTA Banner

- Minimal variant with heading, body text, and single CTA button
- Simpler than homepage CTA (one button instead of two)

## Component Dependencies

| Component | JavaScript Dependencies | Notes |
|-----------|------------------------|-------|
| Hero Banner (interior) | None | Static rendering |
| Campus Card grid | None | Static rendering, data fetched at build/ISR time |
| Section Block | None | Static rendering |
| Contact Form (visitor) | Form validation library (optional) | Client-side validation, spouse toggle, phone formatting |
| CTA Banner | None | Static rendering |

## Form Behavior

### Fields Configuration

| Field | HTML Type | Validation | Notes |
|-------|-----------|------------|-------|
| Campus | `<select>` | Required | Options populated from campuses collection |
| First Name | `<input type="text">` | Required | |
| Last Name | `<input type="text">` | Required | |
| Email | `<input type="email">` | Required, email format | |
| Mobile Phone | `<input type="tel">` | Optional, NZ phone format | Accepts 02x, +642x formats |
| Gender | `<select>` | Optional | Options: Male, Female, Prefer not to say |
| Include Spouse | `<input type="checkbox">` | Optional | Toggles spouse fields visibility |
| Spouse First Name | `<input type="text">` | Optional | Visible only when checkbox is checked |
| Spouse Last Name | `<input type="text">` | Optional | Visible only when checkbox is checked |

### Submission Flow

1. Client-side validation runs on submit
2. If valid, form data is POSTed to `/api/visitor-registration`
3. API route transforms data and creates a Rock CMS workflow entry
4. On success, form is replaced with a confirmation message
5. On failure, an error message is displayed and the form remains editable
6. GA4 event is fired on successful submission

## Responsive Behavior

| Component | Desktop | Tablet | Mobile |
|-----------|---------|--------|--------|
| Hero Banner | Centered text, background image | Centered text | Centered text, reduced padding |
| Campus Cards | 3-column grid | 2-column grid | Single column stack |
| Section Block | Centered narrow column | Centered narrow column | Full width with padding |
| Registration Form | Centered form, 2-column name fields | Centered form | Full width, single column fields |
| CTA Banner | Centered text + button | Centered text + button | Centered, full-width button |
