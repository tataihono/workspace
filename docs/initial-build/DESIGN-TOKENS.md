# Design Tokens

Design tokens for the Next.js rebuild, derived from the official Ev Church Brand Guidelines v2 (May 2025) and the current Rock CMS theme.

---

## Colours

### Primary Red Palette

| Token | Name | HEX | RGB | Usage |
|-------|------|-----|-----|-------|
| `--color-rich-red` | Rich Red | `#E22A30` | 226, 42, 48 | Primary brand. CTAs, emphasis, logo. Use carefully — not overwhelming. |
| `--color-deep-red` | Deep Red | `#911223` | 145, 18, 35 | Darker shade. Hover states, secondary accents. Must remain secondary to Rich Red. |
| `--color-dark-brown` | Dark Brown | `#381611` | 56, 22, 17 | Deep backgrounds, dark overlays. |
| `--color-light-red-1` | Light Red 1 | `#F3716C` | — | Tint. Hover/active backgrounds, subtle highlights. |
| `--color-light-red-2` | Light Red 2 | `#FDA091` | — | Lighter tint. |
| `--color-light-red-3` | Light Red 3 | `#FFD0C7` | — | Lightest tint. Subtle backgrounds, borders. |

### Neutrals

| Token | Name | HEX | RGB | Usage |
|-------|------|-----|-----|-------|
| `--color-black` | Black | `#0F0004` | 15, 0, 4 | Primary text, dark backgrounds |
| `--color-dark-grey` | Dark Grey | `#333333` | 51, 51, 51 | Body text, secondary elements |
| `--color-mid-grey` | Mid Grey | `#716D6E` | 113, 119, 109 | Supporting text, dividers, captions |
| `--color-warm-grey` | Warm Grey | `#DCDAD2` | 220, 218, 220 | Borders, separators, card backgrounds |
| `--color-cool-grey` | Cool Grey | `#E5E5E5` | — | Light backgrounds |
| `--color-warm-white` | Warm White | `#FEFAF4` | 254, 244, 240 | Page backgrounds (warm variant) |
| `--color-white` | True White | `#FFFFFF` | 255, 255, 255 | Default backgrounds |

### Accents (Program Colours)

| Token | Name | HEX | RGB | Program |
|-------|------|-----|-----|---------|
| `--color-blue` | Blue | `#0096C3` | 0, 150, 195 | Ev Kids |
| `--color-orange` | Orange | `#F25101` | 242, 81, 1 | Ev Fusion |
| `--color-purple` | Purple | `#870394` | 135, 3, 148 | Ev Youth |
| `--color-gold` | Gold | `#EEB753` | — | Accent/highlight |

### Colour Presets for CMS (Volunteer Block Editor)

| Preset | Background | Text |
|--------|------------|------|
| **"Primary"** | Rich Red `#E22A30` | White `#FFFFFF` |
| **"Light"** | Warm White `#FEFAF4` | Black `#0F0004` |
| **"Dark"** | Black `#0F0004` | White `#FFFFFF` |

### Accessible Text/Background Combinations (from Brand Guide)

| Text | Background | Notes |
|------|------------|-------|
| Rich Red `#E22A30` | Black `#0F0004` | OK |
| White `#FFFFFF` | Rich Red `#E22A30` | OK |
| White `#FFFFFF` | Deep Red `#911223` | OK |
| Black `#0F0004` | Rich Red `#E22A30` | OK |
| Rich Red `#E22A30` | White `#FFFFFF` | OK |
| Deep Red `#911223` | White `#FFFFFF` | OK |
| Dark Grey `#333333` | Gold `#EEB753` | OK |
| Rich Red `#E22A30` | Warm White `#FEFAF4` | **18pt+ only** |
| Deep Red `#911223` | Warm White `#FEFAF4` | OK |

---

## Typography

### Font Families

| Token | Family | Type | Source | Fallback |
|-------|--------|------|--------|----------|
| `--font-primary` | Proxima Nova | Sans-serif | Adobe Fonts (TypeKit `qtk2tpw`) | system-ui, -apple-system, sans-serif |
| `--font-secondary` | Utopia | Serif | Adobe Fonts | Georgia Pro, Georgia, serif |

### Font Weights

| Weight | Proxima Nova | Utopia |
|--------|-------------|--------|
| 100 (Thin) | Yes | Yes |
| 400 (Regular) | Yes | Yes |
| 600 (Semi-bold) | Yes | Max for Utopia |
| 700 (Bold) | Yes | Not used |
| 900 (Black) | Yes | Not used |

**Rules:** No condensed Proxima Nova. Utopia never heavier than semi-bold. Utopia should appear less than Proxima Nova across designs.

### Type Scale & Line Heights

| Level | Size | Line Height Multiplier | Usage |
|-------|------|----------------------|-------|
| Display | 3.75rem (60px) | 1.1 | Hero headings |
| H1 | 3rem (48px) | 1.1 | Page titles |
| H2 | 2.25rem (36px) | 1.2 | Section headings |
| H3 | 1.875rem (30px) | 1.3 | Subsection headings |
| H4 | 1.5rem (24px) | 1.3 | Card headings |
| Large Body | 1.125rem (18px) | 1.4 | Intro paragraphs |
| Body | 1rem (16px) | 1.5 | Default body copy |
| Small | 0.875rem (14px) | 1.5 | Metadata, captions |
| XS | 0.75rem (12px) | 1.5 | Legal, footnotes |

### Hierarchy Rules (from Brand Guide)
- Subheadings: no larger than 50% of headline ascender height
- Body: no larger than 50% of subheading cap height

### Recommended Pairings

| Pairing | Heading | Subheading | Body |
|---------|---------|------------|------|
| **Default** | Proxima Nova Bold | Georgia Pro Italic | Proxima Nova Regular |
| **Elegant** | Proxima Nova Light | Georgia Pro Italic | Georgia Pro Regular |
| **Impact** | Proxima Nova ExtraBold | Proxima Nova Bold CAPS | Georgia Pro Regular |
| **Classic** | Georgia Pro Regular | Proxima Nova Regular CAPS | Proxima Nova Regular |

---

## Layout

### Navbar
- Height: 80px (mobile) / 100px (desktop)
- Behaviour: backdrop-blur, transparent → white/50 on scroll

### Breakpoints
| Name | Value |
|------|-------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

### Container Max Width
`80rem` (1280px)

### Border Radius
| Size | Value |
|------|-------|
| sm | 0.25rem |
| md | 0.375rem |
| lg | 0.5rem |
| xl | 0.75rem |
| 2xl | 1rem |

---

## Effects

- Default transition: `150ms cubic-bezier(0.4, 0, 0.2, 1)`
- Backdrop blur: `12px` (navbar), `40px` (overlays)
- Animations: `fade-in-up`, `marquee`

---

## Key Difference: Current Site vs Brand Guide

| Token | Current Site | Brand Guide | Action |
|-------|-------------|-------------|--------|
| Primary red | `#d22227` | `#E22A30` | **Update** |
| Black | `#000000` | `#0F0004` | **Update** — use brand black, not pure black |
| Warm white | not defined | `#FEFAF4` | **Add** |
| Warm grey | not defined | `#DCDAD2` | **Add** |
| Cool grey | not defined | `#E5E5E5` | **Add** |
| Kids/Fusion/Youth colours | not defined | Blue/Orange/Purple | **Add** |
| Gold accent | not defined | `#EEB753` | **Add** |
| Light red tints | not defined | 3 tints | **Add** |

---

## External Dependencies

| Dependency | Version | Purpose |
|-----------|---------|---------|
| TypeKit | Project `qtk2tpw` | Proxima Nova + Utopia |
| Tailwind CSS | 4.x | Utility framework |
| Swiper | 11 | Carousels |
| Google Analytics | G-1R09W3HMNX | Analytics |
