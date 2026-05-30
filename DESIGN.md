---
# =============================================================================
# DESIGN.md — Design System Token Manifest
# Project: Skovgaard & Heide VVS ApS — Marketing Site
# Extracted: 2026-05-30
# Schema: design-tokens/v1
# Note: Values reverse-engineered from a rendered screenshot; verify against
#       source CSS before treating as authoritative.
# =============================================================================

meta:
  name: "Skovgaard & Heide VVS"
  domain: shvvs.dk
  language: da-DK
  style: "Professional trades / corporate-clean"
  mode: light
  platforms: [web, mobile-web, native-mobile]   # responsive-first; one system, all viewports
  approach: "mobile-first"                       # author base styles for small screens, scale up

color:
  # --- Brand ---
  brand:
    primary:        "#1A6DF0"   # Vivid action blue — CTAs, links, icons, active nav
    primary_hover:  "#1559C7"   # Darker blue for hover/pressed
    primary_tint:   "#E8F1FE"   # Light wash for subtle backgrounds/focus halos
    ampersand:      "#1A6DF0"   # The "&" in the S&H logo

  # --- Neutrals (Dark / Navy family) ---
  navy:
    900:            "#0A1E3F"   # Hero & footer background (deepest)
    800:            "#0F2549"   # Hero gradient mid / card-on-dark
    700:            "#16315C"   # Elevated dark surfaces
    on_dark_muted:  "#AEBCCD"   # Secondary text on navy

  # --- Neutrals (Light family) ---
  ink:
    900:            "#0F1B2D"   # Primary headings on light
    700:            "#2B3A4D"   # Strong body text
    500:            "#5B6B7B"   # Default body / muted text
    400:            "#8A98A6"   # Captions, disabled-ish labels

  surface:
    base:           "#FFFFFF"   # Page & card background
    subtle:         "#F4F6F8"   # Alternating section background ("VI TILBYDER")
    border:         "#E6EAEF"   # Card & hairline borders
    border_strong:  "#CDD5DE"   # Inputs / outlined-button border

  text:
    on_primary:     "#FFFFFF"   # Text/icon on brand-primary buttons
    on_dark:        "#FFFFFF"   # Headings on navy

  feedback:                       # UNVERIFIED — not in capture; confirm with brand
    success:        "#1FA971"
    success_bg:     "#E7F6EF"     # Tint for success banners/field hints
    warning:        "#E0A100"
    warning_bg:     "#FBF3DC"
    danger:         "#D7373F"     # Field errors, destructive actions
    danger_bg:      "#FBE9EA"
    info:           "#1A6DF0"     # = brand.primary (info reuses brand)
    info_bg:        "#E8F1FE"

  # --- Interaction / utility ---
  state:
    disabled_bg:    "#EEF1F4"     # Disabled control fill
    disabled_text:  "#A6B0BC"     # Disabled label
    focus_ring:     "#1A6DF0"     # 2px ring color (= brand.primary)
    focus_ring_dark:"#5C9CFF"     # Lighter ring for use on navy surfaces
    overlay:        "rgba(10, 30, 63, 0.55)"  # Modal/drawer scrim (navy.900 @ 55%)
    hover_overlay:  "rgba(15, 27, 45, 0.04)"  # Subtle hover wash on light rows/cards

  form:
    field_bg:       "#FFFFFF"
    field_border:   "#CDD5DE"     # = surface.border_strong
    field_border_focus: "#1A6DF0"
    placeholder:    "#8A98A6"     # = ink.400
    label:          "#2B3A4D"     # = ink.700

typography:
  font_family:
    sans:           "'Inter', 'Poppins', system-ui, -apple-system, 'Segoe UI', sans-serif"
    # Logo wordmark appears slightly condensed/bold — likely a separate display weight
    display:        "'Inter', sans-serif"
  weights:          [400, 500, 600, 700, 800]   # load only what is used
  font_loading:     "font-display: swap; preload 400 + 700 woff2 to avoid CLS"  # UNVERIFIED face
  base_size:        "16px"
  line_height_base: 1.6
  # Each scale entry carries mobile (min) + desktop (max). Implement with clamp()
  # so type fluidly scales between the sm and xl breakpoints.
  scale:
    eyebrow:        { mobile: "12px", desktop: "13px", weight: 700, tracking: "0.12em", transform: "uppercase", line_height: 1.2 }
    display_xl:     { mobile: "32px", desktop: "52px", weight: 800, tracking: "-0.02em", line_height: 1.1, clamp: "clamp(32px, 6vw, 52px)" }  # Hero H1
    h2:             { mobile: "26px", desktop: "34px", weight: 700, tracking: "-0.01em", line_height: 1.2, clamp: "clamp(26px, 4vw, 34px)" } # Section title
    h3:             { mobile: "17px", desktop: "18px", weight: 700, line_height: 1.3 }   # Card titles
    body_lg:        { mobile: "16px", desktop: "17px", weight: 400, line_height: 1.6 }   # Hero paragraph
    body:           { mobile: "15px", desktop: "15px", weight: 400, line_height: 1.6 }   # Card body
    link:           { mobile: "14px", desktop: "14px", weight: 600, line_height: 1.4 }   # "Læs mere →"
    nav:            { mobile: "16px", desktop: "15px", weight: 500, line_height: 1.0 }   # 16px on mobile = comfortable tap label
    button:         { mobile: "16px", desktop: "15px", weight: 600, letter_spacing: "0.01em" }  # 16px avoids iOS zoom-on-focus
    label_caps:     { mobile: "12px", desktop: "13px", weight: 700, tracking: "0.14em", transform: "uppercase" }

radius:
  # sm/md/lg intentionally equal Tailwind v4 defaults — use rounded-sm/md/lg,
  # do NOT redefine them in @theme.
  none:   "0px"
  sm:     "4px"    # Inputs, small chips        (= Tailwind rounded-sm)
  md:     "6px"    # Buttons                    (= Tailwind rounded-md)
  lg:     "8px"    # Cards, phone button, tiles (= Tailwind rounded-lg)
  pill:   "999px"  # Badges                     (= rounded-full)
  circle: "50%"    # Footer icon circles        (= rounded-full)

spacing:
  # 4px base grid
  unit: "4px"
  scale:
    "0":  "0px"
    "1":  "4px"
    "2":  "8px"
    "3":  "12px"
    "4":  "16px"
    "5":  "20px"
    "6":  "24px"
    "8":  "32px"
    "10": "40px"
    "12": "48px"
    "16": "64px"
    "20": "80px"     # Vertical section padding
    "24": "96px"
  semantic:
    card_padding:        "24px"
    card_gap:            "20px"
    section_y:           "80px"
    container_x:         "40px"
    button_padding_y:    "14px"
    button_padding_x:    "22px"
    nav_item_gap:        "28px"

layout:
  container_max:   "1180px"
  grid_columns:    12
  breakpoints:
    sm: "640px"
    md: "768px"
    lg: "1024px"
    xl: "1280px"
  # Horizontal page gutter shrinks on small screens
  container_x:
    mobile: "16px"   # < md
    tablet: "24px"   # md
    desktop:"40px"   # >= lg
  # Service tiles reflow by breakpoint instead of a fixed 5-up
  card_grid:
    base:  1          # < sm   — single column, stacked
    sm:    2          # >= sm
    md:    3          # >= md
    lg:    5          # >= lg  — the desktop capture
    gap:   "20px"
    min_card: "180px"
  hero:
    mobile: "stacked"        # copy over image, image below or as bg
    desktop: "split-55-45"   # two-column

touch:
  min_target:     "44px"   # WCAG 2.5.5 / iOS HIG minimum tap size
  spacing_between:"8px"    # min gap between adjacent targets

elevation:
  card:     "0 1px 2px rgba(15, 27, 45, 0.04), 0 4px 16px rgba(15, 27, 45, 0.05)"
  card_hover:"0 4px 12px rgba(15, 27, 45, 0.08), 0 12px 28px rgba(15, 27, 45, 0.08)"
  button:   "0 2px 8px rgba(26, 109, 240, 0.25)"
  navbar:   "0 1px 0 rgba(15, 27, 45, 0.06)"
  drawer:   "0 8px 40px rgba(10, 30, 63, 0.25)"   # Mobile nav / modal
  popover:  "0 6px 24px rgba(15, 27, 45, 0.14)"

z_index:
  base:        0
  sticky_nav:  100
  dropdown:    200
  drawer:      300   # Mobile nav drawer
  overlay:     310   # Scrim sits just under the surface it dims
  modal:       320
  toast:       400
  tooltip:     500

motion:
  # Durations match Tailwind defaults → use duration-150 / duration-200 / duration-300
  duration:
    fast:    "150ms"   # Hover color, link arrow nudge
    base:    "200ms"   # Default UI transitions
    slow:    "300ms"   # Drawer / modal enter-exit
  easing:
    standard:"cubic-bezier(0.2, 0, 0, 1)"     # Most transitions
    decelerate:"cubic-bezier(0, 0, 0, 1)"     # Entering elements
    accelerate:"cubic-bezier(0.3, 0, 1, 1)"   # Exiting elements
  reduced_motion: "Respect prefers-reduced-motion: disable transforms/translate, keep opacity"

iconography:
  set:          "UNVERIFIED — recommend Lucide or Heroicons (outline) for stroke match"
  style:        "outline / line, ~1.75px stroke"
  color:        "brand.primary"
  size_default: "28px"
  size_inline:  "16px"   # Arrow glyph in links/buttons
  size_touch:   "24px"   # Icon inside a 44px tap target (e.g. hamburger)

assets:                  # UNVERIFIED — supply real files
  logo:
    full:       "S&H wordmark + 'SKOVGAARD & HEIDE / VVS ApS' lockup"
    variants:   [on-light, on-dark, mark-only]
  favicon:      "32x32 + 180x180 apple-touch + maskable 512x512"
  og_image:     "1200x630 social share"
---

# Skovgaard & Heide VVS — Design System

A clean, high-trust marketing system for a Danish plumbing/HVAC ("VVS")
contractor. The visual language pairs a **deep navy** authority anchor with a
single **vivid action blue**, set on generous white space. The result reads as
professional, calm, and reliable — the qualities the copy itself promises
("Kvalitet, pålidelighed og godt håndværk").

## 1. Design Principles

1. **One accent, used decisively.** Exactly one saturated blue carries every
   interactive affordance — links, primary buttons, icons, the active nav
   underline, and the logo ampersand. Nothing else competes for "click me."
2. **Navy = authority, white = clarity.** Dark navy is reserved for the two
   bookend zones (hero and footer) that frame the page. The body breathes in
   white and a near-white `surface.subtle`.
3. **Trust through restraint.** No gradients on text, no decorative shadows on
   content, no more than two type weights per block. Credibility is signalled
   by alignment and whitespace, not ornament.
4. **Scannable value props.** Benefits are chunked into icon + title + one-line
   description units (the three hero trust badges, the five service tiles).
5. **Mobile-first, one system.** Every component is authored for a phone first,
   then enhanced upward. There is no separate "mobile design" — the same tokens
   and components reflow across `sm → xl`. Touch is the baseline input: minimum
   44px tap targets, no hover-only affordances.
6. **Atomic & token-driven.** Components compose bottom-up (atoms → molecules →
   organisms → templates → pages, see §5). Styling leans on Tailwind's **default
   scale** (spacing, radius, shadow, type) — tokens override defaults _only_ for
   brand-specific values (colors, the fluid heading sizes, custom shadows).
   Avoid arbitrary `[12px]`-style values; if a default step fits, use it.

## 2. Color System

### Roles

- **`brand.primary` (#1A6DF0)** — the only call-to-action color. Apply to filled
  buttons, text links, line icons, the active nav item, and focus rings.
- **`navy.900` (#0A1E3F)** — full-bleed hero and footer backgrounds. Treat as a
  near-black; pair only with white or `navy.on_dark_muted` text.
- **`ink.*`** — the light-mode text ramp. Headings use `ink.900`, body copy
  uses `ink.500`, never go lighter than `ink.400` for legible text.
- **`surface.subtle` (#F4F6F8)** — alternating-section background that separates
  the white hero-band footer from the service grid.

### Pairing rules

- White text **only** on `navy.700`–`navy.900` or `brand.primary`.
- `ink.500` body text **only** on `surface.base` or `surface.subtle`.
- Never place `brand.primary` text on `navy.900` for long copy — use it only for
  the eyebrow label and link arrows, where size + weight keep contrast adequate.
- Minimum contrast target: **WCAG AA (4.5:1)** for body, **3:1** for large
  display headings.

## 3. Typography

A single sans-serif family across the whole system, expressed through a tight
weight set (400 / 500 / 600 / 700 / 800) and a clear modular scale.

- **Eyebrow labels** (`DIN LOKALE VVS-INSTALLATØR`, `VI TILBYDER`) are the
  signature device: small, **uppercase, letter-spaced 0.12em**, weight 700, in
  `brand.primary`. They sit directly above their headline.
- **Display H1** is the loudest element — 52px / 800 / tight `-0.02em` tracking,
  set in white on navy, wrapping to two or three short lines.
- **Section H2** (`Professionelle VVS-løsninger`) is centered, 34px / 700, in
  `ink.900`, and is underlined by a short 2px `brand.primary` rule.
- **Card titles** are 18px / 700; card body is 15px / 400 `ink.500`.
- **Body line-height stays at 1.6** for paragraph readability; headings tighten
  to 1.08–1.3.

## 4. Spacing & Layout

- **4px base grid.** All spacing tokens are multiples of 4. Component rhythm
  leans on `spacing.6` (24px) inside cards and `spacing.20` (80px) between
  sections.
- **Centered container**, max-width ~1180px, with 40px horizontal gutters.
- **Service grid:** five equal columns at desktop, 20px gutters, each a white
  tile on the `surface.subtle` band. Tiles collapse to a wrapping responsive
  grid below `lg` (recommend 3 → 2 → 1 columns down the breakpoints).
- **Hero split:** ~55/45 two-column at desktop — copy block left, full-bleed
  product photograph right, both inside the navy band.
- **Footer:** three evenly-spaced contact units (phone / email / coverage),
  each an icon-circle + label + value, on `navy.900`.

## 4a. Responsive & Platform (Web + Mobile)

This is one responsive system covering desktop web, mobile web, and native
mobile (or a webview/PWA). Author **mobile-first**: the base styles target the
smallest viewport, and `min-width` media queries layer on enhancements.

### Breakpoint behavior

| Token | Min width | Layout intent                                                          |
| ----- | --------- | ---------------------------------------------------------------------- |
| base  | 0         | Single column. 16px gutters. Hamburger nav. Hero stacks. Cards 1-up.   |
| `sm`  | 640px     | Cards 2-up. Buttons may sit inline rather than full-width.             |
| `md`  | 768px     | Cards 3-up. 24px gutters. Footer columns line up horizontally.         |
| `lg`  | 1024px    | Desktop nav appears (hamburger retires). Hero 55/45 split. Cards 5-up. |
| `xl`  | 1280px    | Container caps at 1180px and centers; extra space becomes margin.      |

### Mobile-specific rules

- **Navigation** collapses below `lg` into a hamburger that opens a full-height
  drawer (slides from the right, `motion.duration.slow` + `easing.decelerate`,
  backed by `state.overlay`). The phone CTA stays visible in the bar at all
  sizes — it is the primary conversion action for a trades business.
- **Hero** stacks to: eyebrow → H1 → paragraph → buttons (full-width, stacked
  with 12px gap) → image below (or as a dimmed background with a navy overlay
  so white text stays legible).
- **Buttons** go full-width (`width: 100%`) below `sm`; side-by-side from `sm`.
- **Type** uses the `clamp()` values in the token block so the 52px H1 lands at
  ~32px on a phone. Never ship the desktop sizes to mobile.
- **Inputs** use ≥16px font size to prevent iOS auto-zoom on focus.
- **Tap targets** are ≥44px with ≥8px between them (`touch` tokens).
- **Sticky header**: the nav bar may stick on scroll (`z_index.sticky_nav`);
  keep it compact (reduce vertical padding ~25% once scrolled).

### Native-mobile notes

If built as native (or PWA), map tokens 1:1 and additionally respect:
safe-area insets (notch / home indicator), system back-gesture, and platform
tap-feedback (ripple on Android, opacity on iOS) layered on top of the
`state.hover_overlay` token.

## 5. Components — Atomic Design (styling only)

Component **CSS classes** in `theme.css` compose bottom-up using atomic levels. Build atoms first in `@layer components`; never inline a raw token where a lower-level class already exists.

| Level         | Definition                                  | In this system (CSS)                                               |
| ------------- | ------------------------------------------- | ------------------------------------------------------------------ |
| **Atoms**     | Indivisible primitives                      | `.btn`, `.btn-link`, `.eyebrow`, `.field`, …                       |
| **Molecules** | Small groups of atoms with one job          | `.card`, `.field-group`, `.nav-link`, `.drawer-link`, …            |
| **Organisms** | Standalone page sections (styling patterns) | Section bands using `.shell`, `.section-y`, nav/drawer link styles |
| **Templates** | Page skeletons (layout, no real content)    | `.shell` container, section rhythm utilities                       |

**Application folder structure** (Angular — see [ADR-0001](docs/adr/0001-app-structure-and-smart-dumb-components.md)):

```
src/app/
  core/services/          # Singleton services and state
  shared/ui/              # Reusable presentational components
  shared/models/ + data/  # Interfaces and static content
  layout/                 # Smart containers (site-wide shell)
  pages/home/             # Routed pages with components/ + containers/
```

Atomic levels do **not** define TypeScript folders. User-facing Danish copy (nav labels, `#ydelser`, `#kontakt`) stays in templates and data files.

The subsections below are tagged with their atomic level (for CSS/styling).

### 5.1 Buttons — _atom_

| Variant       | Fill            | Text              | Border                      | Radius     | Use                        |
| ------------- | --------------- | ----------------- | --------------------------- | ---------- | -------------------------- |
| Primary       | `brand.primary` | `text.on_primary` | none                        | `md` (6px) | "Vores ydelser", phone CTA |
| Secondary     | transparent     | `text.on_dark`    | 1px `surface.border_strong` | `md`       | "Kontakt os" (on navy)     |
| Link / inline | none            | `brand.primary`   | none                        | n/a        | "Læs mere →"               |

**Shared anatomy (default-scale utilities):** `px-6 py-3` padding with `min-h-11`
(44px touch target), `rounded-md`, `text-base sm:text-sm` / 600 label, optional
trailing arrow glyph (`→`) at 16px with a `gap-2`. **`w-full sm:w-auto`** —
full-width below `sm`, inline from `sm` up.

**States**

- **Default** — as table above.
- **Hover** — Primary deepens to `brand.primary_hover` (#1559C7) + soft
  `elevation.button`. Secondary fills its border color at ~8% (`brand.primary_tint`
  on light contexts) or lightens border to white on dark. Link gains an
  underline and shifts the arrow 2px right. _(Hover is an enhancement only —
  never gate functionality behind it, since touch devices have no hover.)_
- **Active / Pressed** — Primary drops shadow, darkens one more step, translates
  1px down. On touch, show immediate press feedback (`state.hover_overlay` or
  platform ripple). No scale transforms.
- **Focus-visible** — 2px `state.focus_ring` offset 2px (`state.focus_ring_dark`
  on navy). Never remove focus outlines.
- **Loading** — replace label with a spinner, keep button width fixed, set
  `aria-busy="true"`, disable interaction.
- **Disabled** — `state.disabled_bg` fill, `state.disabled_text` label,
  `cursor: not-allowed`, no hover response.

### 5.2 Service / Feature Card — _molecule_

White surface (`bg-surface`), `border`, `rounded-lg`, `p-6`, `shadow-card`.
Vertical stack of atoms: **icon (`size-7`, `brand`)** → **title (`text-h3`)** →
**body (`text-body ink-500`)** → **link atom ("Læs mere →")**. On hover, lift to
`shadow-card-hover` and nudge the link arrow right; do not change the background.

### 5.3 Navigation Bar — _organism_

White, full-width, hairline bottom border (`elevation.navbar`). **Desktop
(`≥ lg`)**: logo left, centered nav links (15px / 500 `ink.700`), primary phone
button right. The **active item** is `brand.primary` with a 2px underline flush
to the baseline. **Mobile (`< lg`)**: logo left, phone CTA + hamburger right;
links move into the drawer (§5.6). May stick on scroll (`z_index.sticky_nav`).

### 5.4 Mobile Nav Drawer — _organism_

Triggered by the hamburger below `lg`. Full-height panel sliding from the right
over a `state.overlay` scrim, `elevation.drawer`, entering with
`motion.duration.slow` + `easing.decelerate`. Contains: close (✕) button at top,
the nav links stacked as 44px-tall rows (`nav` type, `ink.700`, active in
`brand.primary`), then the primary phone CTA pinned at the bottom. Trap focus
while open; close on scrim tap, ✕, Esc, or back-gesture. Lock body scroll.

### 5.5 Form Controls — _atoms → molecule (field)_

The input/textarea/select/checkbox are **atoms**; a **field** molecule binds a
label + control + help/error text. Used on the Kontakt page and any quote flow.

- **Text input / textarea / select** — `bg-field-bg`, `border-field-border`,
  `rounded-sm`, `px-3 py-3` padding, `min-h-11`, `text-base` (≥16px stops iOS
  zoom). Label above in `field-label` (`text-sm` / 600). Optional helper text
  below in `ink-400`.
- **Focus** — border → `form.field_border_focus`, plus a 2px `state.focus_ring`
  (offset 1px).
- **Error** — border `feedback.danger`, helper text `feedback.danger`, optional
  `feedback.danger_bg` fill; associate via `aria-describedby` + `aria-invalid`.
- **Success** — border `feedback.success`, hint `feedback.success`.
- **Disabled** — `state.disabled_bg` fill, `state.disabled_text` text.
- **Checkbox / radio** — 20px box, `brand.primary` when checked, 44px hit area.
- **Validation** is inline and per-field; never rely on color alone — pair with
  an icon and text.

### 5.6 Alerts & Toasts — _molecules_

- **Inline alert** — full-width banner, `*_bg` tint fill + matching `feedback.*`
  left border (3px) and icon. Heading + message in `ink.700`. Use for form-level
  success/error.
- **Toast** — bottom-center (mobile) / bottom-right (desktop), `z_index.toast`,
  auto-dismiss ~4s, swipe/tap to dismiss, `aria-live="polite"`. Respect
  safe-area insets on mobile.

### 5.7 Modal / Dialog — _organism_

Centered card on desktop, **bottom sheet on mobile** (slides up, rounded top
corners `radius.lg`). `state.overlay` scrim, `elevation.drawer`, `z_index.modal`.
Trap focus, restore focus to trigger on close, close on Esc / scrim / ✕.

### 5.8 Loading & Empty States — _molecules_

- **Skeleton** — `surface.subtle` blocks with a subtle shimmer for cards/lists.
- **Spinner** — `brand.primary`, used inside buttons and for route loads.
- **Empty state** — centered line icon (`ink.400`), short message (`ink.500`),
  optional primary action. Required for any list/result view (e.g. Referencer).

### 5.9 Iconography — _atom_

Outline/line icons, ~1.75px stroke, drawn in `brand.primary`, 28px in feature
contexts and 16px inline; 24px inside 44px touch targets. Keep them monochrome —
no fills, no duotone. Pick one set (see `iconography.set`) and stick to it.

## 6. Accessibility & Motion

- **Contrast** — target WCAG AA: 4.5:1 body, 3:1 large headings. The
  muted-on-navy pairing (`navy.on_dark_muted` on `navy.900`) is borderline — use
  it only for secondary labels, never for essential instructions.
- **Approved pairs** (verify with a checker before shipping):
  | Foreground | Background | Use |
  |-----------------------|----------------|----------------|
  | `text.on_dark` white | `navy.900` | Hero/footer |
  | `ink.900` | `surface.base` | Headings |
  | `ink.500` | `surface.base`/`surface.subtle` | Body |
  | `text.on_primary` | `brand.primary`| Buttons |
  | `feedback.danger` | `surface.base` | Error text |
- **Focus** — every interactive element exposes a visible ring
  (`state.focus_ring`, or `state.focus_ring_dark` on navy). Never remove it.
- **Touch** — ≥44px targets, ≥8px apart (`touch` tokens). No hover-only actions.
- **Semantics** — real `<button>`/`<a>`, labelled form fields, `aria-live` for
  toasts, focus trapping in drawer/modal, logical heading order.
- **Motion** — use the `motion` tokens (durations + easings). Respect
  `prefers-reduced-motion`: drop translate/slide/arrow-nudge, keep opacity fades.
- **Language** — `lang="da"`; ensure screen-reader pronunciation and that phone
  numbers are `tel:` links.

## 7. Token → Code Mapping

Tokens here are the **single source of truth**. Implement them once, consume
everywhere — never hardcode a raw hex/px in a component.

- **Web (CSS)** — emit as custom properties under `:root`
  (`--color-brand-primary: #1A6DF0; --space-6: 24px; --radius-lg: 8px;`).
  Components reference `var(--…)` only.
- **Web (Tailwind v4)** — define brand-specific tokens in a CSS `@theme` block
  (`theme.css`). **Do not redefine values that already match Tailwind defaults**
  (spacing 4px grid, `rounded-sm/md/lg`, `min-h-11`, `sm/md/lg/xl` breakpoints,
  `duration-150/200/300`). Only override for: brand colors, fluid heading sizes,
  and custom shadows. Prefer default-scale utilities over arbitrary `[12px]`
  values — reserve brackets for genuine one-offs (e.g. the `max-w-[1180px]`
  container and `clamp()` heading sizes).
- **Native / cross-platform** — export the front matter to a tokens JSON and run
  it through Style Dictionary to generate CSS, TS, and native (iOS/Android)
  outputs from the same source.
- **Naming** — `category-role-variant` (e.g. `color-feedback-danger-bg`). Keep
  the YAML keys and the code variable names aligned.
- **Theming hook** — even though this is light-mode only today, scope all colors
  behind semantic names (not `blue-500`) so a future dark theme is a token swap,
  not a refactor.

## 8. Localization (da-DK)

- Primary language Danish; copy may run longer than English — components must
  tolerate ~30% text expansion without breaking layout.
- Format phone numbers `+45 ## ## ## ##`; expose as `tel:` links.
- Use locale-aware date/number formatting; currency in DKK if introduced.

## 9. Reserved / Unverified Tokens

Marked `UNVERIFIED` in the front matter — placeholders pending the real brand
spec; confirm before shipping:

- All `color.feedback.*` and `*_bg` values (success/warning/danger/info).
- The actual typeface and `typography.font_loading` strategy (Inter/Poppins is
  an educated guess from the screenshot).
- `iconography.set` — pick and lock one icon library.
- `assets.*` — real logo variants, favicon set, OG image.
- `radius.pill` and any component not visible in the source capture (forms,
  drawer, modal, toast were inferred from typical site needs, not observed).
