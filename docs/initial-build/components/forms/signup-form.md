# Signup Form

Registration form for courses and programs. Has variants for Explaining Christianity and Newish Connect with different field sets.

## Props / Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"explaining-christianity" \| "newish-connect"` | -- | Form variant |
| `onSubmit` | `(data: FormData) => Promise<void>` | -- | Submit handler |

## Fields

### Explaining Christianity Variant

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| First Name | `text` | Yes | Min 1 character |
| Last Name | `text` | Yes | Min 1 character |
| Email | `email` | Yes | Valid email format |
| Mobile Phone | `tel` | No | NZ phone format (+64) |
| Comments | `textarea` | No | Free text |

Submit button label: **"Connect"**

### Newish Connect Variant

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| First Name | `text` | Yes | Min 1 character |
| Last Name | `text` | Yes | Min 1 character |
| Email | `email` | Yes | Valid email format |
| Campus | `select` | Yes | Options: Central, North, Unichurch |
| Home Phone | `tel` | No | NZ phone format |
| Mobile Phone | `tel` | No | NZ phone format (+64) |
| Comments | `textarea` | No | Free text |

Submit button label: **"Connect"**

## Keyboard Shortcut

- `Alt + M`: Focuses the form or triggers submission (legacy behavior from Rock CMS).
- Evaluate whether this shortcut should be retained in the rebuild.

## Form Behavior

1. Client-side validation on required fields.
2. Submit button labeled "Connect" with loading state during submission.
3. On success: confirmation message (e.g., "Thanks for signing up! We'll be in touch with details.").
4. On error: error message, form data preserved.

## Submission

- **Legacy**: Posts to a Rock CMS workflow.
- **Rebuild**: Submit to a Next.js API route (`/api/signup`) which:
  - Stores the submission in Payload CMS (`form-submissions` collection with a `formType` field).
  - Optionally forwards to Rock RMS workflow via API.
  - Sends email notification to relevant ministry leader.

## Data Source

- Campus dropdown options: from Payload `campuses` collection or hardcoded.
- No other external data needed to render the form.

## Source Reference (Legacy)

| File | Purpose |
|------|---------|
| Explaining Christianity page Lava | EC signup form |
| Newish Connect page Lava | NC signup form |
| Rock CMS workflow | Backend processing |

## Pages Used On

- **Explaining Christianity**: EC registration form
- **Newish Connect**: NC registration form

## Rebuild Notes

- Use `react-hook-form` + `zod` for validation, consistent with the contact form.
- Both variants share most fields; implement as a single component with conditional fields based on `variant` prop.
- The "Connect" button label is intentional branding -- do not change to "Submit".
- `Alt + M` shortcut: implement with a `useEffect` keydown listener if retaining this feature. Document the shortcut visually (e.g., underline the "M" in a nearby label) or remove if it conflicts with browser defaults.
- Phone fields: same NZ formatting approach as the contact form.
- Client component (`"use client"`) required.
- Add spam protection (honeypot or reCAPTCHA).
- Ensure proper `<label>` and `aria-*` attributes for accessibility.
