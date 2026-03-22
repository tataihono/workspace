---
title: "Phase 2 Layout Shell: CSS Import Ordering, Payload Admin Layout, and TypeScript Fixes"
category: build-errors
date: 2026-03-22
tags:
  - tailwind-css-4
  - payload-cms-3
  - next-js-16
  - css-import-ordering
  - adobe-fonts
  - admin-layout
  - typescript-strict
severity: high
component:
  - src/styles/globals.css
  - src/app/(payload)/layout.tsx
  - src/components/ui/Button.tsx
symptoms:
  - "Parsing CSS source code failed: @import rules must precede all rules aside from @charset and @layer statements"
  - "TypeError: Cannot destructure property 'config' of 'se(...)' as it is undefined"
  - "TS2339: Property 'variant' does not exist on type"
problem_type:
  - css-spec-violation
  - framework-misconfiguration
  - typescript-type-error
---

## Problem

Three build-blocking issues were encountered during Phase 2 (Layout Shell + Design System) of the ev.church rebuild:

1. **CSS @import ordering** — Dev server crashed with a CSS parse error
2. **Payload CMS admin 500** — Admin panel unusable due to missing context providers
3. **TypeScript double-destructuring** — Strict mode caught invalid property access

## Root Cause Analysis

### 1. CSS @import Ordering with Tailwind 4.x

In `src/styles/globals.css`, the Adobe Fonts `@import url('https://use.typekit.net/qtk2tpw.css')` was placed at the end of the file, after `@import 'tailwindcss'` and the `@theme {}` block.

Tailwind 4.x processes `@import 'tailwindcss'` through PostCSS and expands it into ~590 lines of CSS utility rules. The Adobe Fonts import then appeared at line 591 — after all generated rules — violating the CSS specification that `@import` must precede all rules except `@charset` and `@layer`.

### 2. Payload CMS 3.x Admin Layout

The Payload admin layout at `src/app/(payload)/layout.tsx` was a bare React component:

```tsx
export default function PayloadLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>
}
```

Payload 3.x requires `RootLayout` from `@payloadcms/next/layouts` which provides the config context, theme, i18n, and server function handling that all admin UI components depend on. Without it, every admin component that reads config from context crashes.

### 3. TypeScript Double-Destructuring

After destructuring `variant`, `size`, `className`, `children` from props at the top of the Button component, the remaining `rest` object no longer contains those keys. Attempting to destructure them again from `rest` fails in strict TypeScript.

## Solution

### Fix 1: Move @import Before Tailwind

```css
/* BEFORE — broken */
@import 'tailwindcss';
@theme { /* ... tokens ... */ }
@import url('https://use.typekit.net/qtk2tpw.css');

/* AFTER — working */
@import url('https://use.typekit.net/qtk2tpw.css');
@import 'tailwindcss';
@theme { /* ... tokens ... */ }
```

**Rule:** All external `@import` statements must come before `@import 'tailwindcss'` because Tailwind 4.x expands into hundreds of CSS rules via PostCSS.

### Fix 2: Use Payload's RootLayout

Replace the bare layout with the proper Payload root layout:

```tsx
import type { ServerFunctionClient } from 'payload'
import config from '@payload-config'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import { importMap } from './admin/importMap'

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({ ...args, config, importMap })
}

const Layout = ({ children }: { children: React.ReactNode }) =>
  RootLayout({ children, config, importMap, serverFunction })

export default Layout
```

Also run `npx payload generate:importmap` to populate `importMap.js`.

### Fix 3: Cast Rest Props Directly

```tsx
// BEFORE — broken (variant already destructured, doesn't exist on rest)
const { variant, size, className, children, ...rest } = props
const { variant: _v, ...htmlProps } = rest

// AFTER — working
const { variant, size, className, children, ...rest } = props
return <button {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)} />
```

## Prevention Strategies

### CSS Import Ordering
- Add a comment at the top of globals.css: `/* ORDER IS LOAD-BEARING: external @imports → tailwindcss → local overrides */`
- Consider loading Adobe Fonts via `<link>` in the root layout `<head>` instead of CSS `@import` — sidesteps ordering entirely and avoids render-blocking CSS chains
- Use Stylelint with an import-order rule to flag `@import` after `@import 'tailwindcss'`

### Payload Admin Layout
- Treat `src/app/(payload)/layout.tsx` as a locked file — add a comment: `/* Do not replace RootLayout — Payload admin requires it */`
- Add `npx payload generate:importmap` to the `prebuild` script in `package.json`
- Never edit generated files (`payload-types.ts`, `importMap.js`) by hand

### TypeScript Patterns
- Extract all needed props in one destructuring statement; never chain a second destructure from `rest`
- `...rest` spreads onto DOM elements are a code smell — prefer explicit typed forwarding
- `strict: true` + `@typescript-eslint/no-explicit-any` catches these; don't suppress

### Cross-Cutting CI Checks
1. `npx tsc --noEmit` — catches type regressions
2. `npx payload generate:types && npx payload generate:importmap` as prebuild gate
3. Stylelint on `*.css` with import-order rules
4. ESLint with `@typescript-eslint/no-explicit-any` and `@next/eslint-plugin-next`

## Related Documentation

- No existing solution docs (this is the first entry in `docs/solutions/`)
- Build plan: `docs/plans/2026-03-22-001-feat-evchurch-nextjs-payload-rebuild-plan.md` — references `tailwind.config.ts` which is the Tailwind 3.x convention; Tailwind 4.x uses CSS-first config via `@theme {}` (potentially stale reference)
- Design tokens: `docs/initial-build/DESIGN-TOKENS.md`

## Environment

- Next.js 16.2.1 (Turbopack)
- Payload CMS 3.80.0
- Tailwind CSS 4.2.2
- TypeScript 5.9.3 (strict mode)
- PostgreSQL via devcontainer
