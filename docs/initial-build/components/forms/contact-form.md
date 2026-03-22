# Contact Form

General contact form for inquiries. Has a standard variant for the Contact page and an extended variant for the Visit page that collects additional visitor details.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"contact" \| "visit"` | `"contact"` | Form variant |
| `onSubmit` | `(data: FormData) => Promise<void>` | -- | Submit handler |
| `submitLabel` | `string` | `"Submit"` | Submit button text |

## Fields

### Contact Variant (Standard)

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| First Name | `text` | Yes | Min 1 character |
| Last Name | `text` | Yes | Min 1 character |
| Email | `email` | Yes | Valid email format |
| Mobile Phone | `tel` | No | NZ phone format |
| Message | `textarea` | Yes | Min 1 character |

### Visit Variant (Extended)

All fields from the contact variant, plus:

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Campus | `select` | Yes | Options: Central, North, Unichurch |
| Gender | `select` | No | Options: Male, Female, Prefer not to say |
| Spouse First Name | `text` | No | -- |
| Spouse Last Name | `text` | No | -- |

## Phone Formatting

- Phone numbers are in New Zealand format.
- Country code: `+64`.
- Mobile numbers typically start with `02x` (local) or `+64 2x` (international).
- Consider using an input mask or formatter (e.g., display as `027 123 4567`).

## Form Behavior

1. Client-side validation on all required fields before submission.
2. Submit button shows loading state during submission.
3. On success: display a confirmation message (e.g., "Thanks for reaching out. We'll be in touch soon.").
4. On error: display an error message and keep form data intact.

## Submission

- **Legacy**: Form posts to a Rock CMS workflow endpoint via HTTP POST.
- **Rebuild**: Submit to a Next.js API route (`/api/contact`) which forwards the data to:
  - Payload CMS (store as a `form-submissions` collection entry), and/or
  - Rock RMS workflow via API (if Rock integration is maintained), and/or
  - Email notification to staff.

## Data Source

No external data is fetched to render the form. Campus options for the visit variant come from the `campuses` collection or are hardcoded.

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| Contact page Lava template | Standard contact form |
| Visit page Lava template | Extended visit form |
| Rock CMS workflow | Backend processing |

## Pages Used On

- **Contact**: Standard contact form
- **Visit**: Extended visit form variant

## Rebuild Notes

- Use `react-hook-form` or a similar library for form state management and validation.
- Consider `zod` for schema validation (shared between client and API route).
- Phone input: use a dedicated phone input component or mask for NZ format. Libraries like `react-phone-number-input` support NZ formatting.
- The form should be a client component (`"use client"`) due to interactivity.
- Implement rate limiting on the API route to prevent spam.
- Consider adding a honeypot field or reCAPTCHA for bot protection.
- Ensure all form fields have proper `<label>` elements and `aria-describedby` for error messages.
- Test with screen readers to confirm form accessibility.
