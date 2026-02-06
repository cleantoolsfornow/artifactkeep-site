# ArtifactKeep Website Visual Style Guide

This document captures the visual system used on the marketing site so it can be reused inside the app repo for a cohesive look and feel.

## 1. Visual Direction

ArtifactKeep's website style is:

- Clean and modern, with a light local-first "tooling" feel.
- Blue-forward (not neon), with soft gradients and restrained contrast.
- Card-based, with rounded corners and subtle elevation.
- Motion-aware, but calm and non-distracting.
- Dense enough for power users, still approachable for new users.

## 2. Core Design Tokens (Use These First)

Source of truth: `css/variables.css`.

### Color tokens

- `--color-accent: #0b6dff`
- `--color-accent-strong: #0056d6`
- `--color-accent-soft: #dce9ff`
- `--color-accent-gradient: linear-gradient(135deg, #0056d6 0%, #0b6dff 56%, #46a4ff 100%)`
- `--color-bg: #edf2f8`
- `--color-bg-alt: #e6ecf5`
- `--color-surface: #ffffff`
- `--color-surface-muted: #f7f9fc`
- `--color-surface-strong: #e0e7f2`
- `--color-text-primary: #102039`
- `--color-text-secondary: #4a5d79`
- `--color-text-muted: #71819b`
- `--color-border: #d2dced`
- `--color-border-strong: #bcc9de`

### Spacing scale

- `--space-xs: 4px`
- `--space-sm: 8px`
- `--space-md: 16px`
- `--space-lg: 24px`
- `--space-xl: 32px`
- `--space-2xl: 48px`
- `--space-3xl: 64px`
- `--space-4xl: 96px`

### Radius + shadow

- `--radius-sm: 8px`
- `--radius-md: 12px`
- `--radius-lg: 18px`
- `--radius-xl: 24px`
- `--radius-2xl: 32px`
- `--radius-full: 9999px`
- `--shadow-soft: 0 6px 16px rgba(22, 43, 75, 0.07)`
- `--shadow-card: 0 12px 26px rgba(18, 35, 63, 0.08)`
- `--shadow-card-hover: 0 18px 36px rgba(10, 34, 71, 0.14)`
- `--shadow-button: 0 10px 22px rgba(11, 109, 255, 0.28)`

### Motion tokens

- `--transition-fast: 160ms ease`
- `--transition-normal: 240ms ease`
- `--transition-smooth: 420ms cubic-bezier(0.22, 1, 0.36, 1)`

### Typography tokens

- Display font: `Plus Jakarta Sans`
- Body font: `Manrope`
- Mono font: `JetBrains Mono`
- `--font-size-hero: clamp(2.45rem, 5.7vw, 4.2rem)`
- `--font-size-h1: clamp(2.05rem, 3.1vw, 2.8rem)`
- `--font-size-h2: clamp(1.6rem, 2.4vw, 2.15rem)`
- `--font-size-h3: clamp(1.2rem, 1.65vw, 1.44rem)`
- `--font-size-body: 1.03rem`
- `--font-size-small: 0.92rem`

## 3. Background + Atmosphere

Source of truth: `css/main.css`.

Use layered backgrounds, not flat fills:

- Base: vertical gradient from `--color-bg` to `--color-bg-alt`.
- Ambient blobs: large radial gradients in brand blue at top-left and top-right.
- Subtle grid texture overlay via `body::before` (very low opacity).
- Alternating sections use translucent white gradients with soft top/bottom borders.

This keeps the UI "alive" without dark mode or heavy contrast.

## 4. Layout System

Source of truth: `css/layout.css`.

- Main container: `--container-width: 1200px`.
- Reading content width: `--content-width: 820px`.
- Standard gap rhythm is `--space-lg` and above.
- Grids commonly use 2/3 columns on desktop, collapse to 1 column on small screens.
- Breakpoints: `1024px` (tablet/nav collapse) and `640px` (mobile single-column and tighter padding).

## 5. Key Component Styling Patterns

Source of truth: `css/components.css` and `css/main.css`.

### Buttons

- Rounded-pill geometry (`--radius-full`).
- Primary uses brand gradient + white text + strong glow shadow.
- Secondary is white/light surface with blue text and thin border.
- Hover behavior is lift (`translateY(-2px)`) plus shadow increase.

Important classes:

- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-large`, `.btn-small`

### Cards

- White surface, rounded `--radius-lg`, 1px border, soft elevation.
- Hover state: slight lift (`translateY(-5px)`), stronger shadow, darker border.
- Supports icon + title + description rhythm.

Important classes:

- `.card`, `.card-title`, `.card-description`, `.feature-card`, `.persona-card`

### Header and navigation

- Sticky top header with translucent background and blur (`backdrop-filter`).
- Scroll state adds subtle shadow and stronger background opacity.
- Desktop nav uses animated gradient underline on hover/current item.
- Mobile nav becomes a dropdown panel with card styling.

Important classes:

- `.header`, `.header-scrolled`, `.header-nav`, `.header-mobile-toggle`

### Footer

- Gentle gradient panel with 3-column layout on desktop.
- Uppercase micro-headings, muted links, slight hover movement.

Important classes:

- `.footer`, `.footer-content`, `.footer-links`, `.footer-bottom`

### Hero

- Large display typography + center alignment.
- Decorative moving radial orbs (`::before` / `::after`) with slow drift animations.
- CTA row uses primary + secondary button pair.

Important classes:

- `.hero`, `.gradient-hero`, `.hero-title`, `.hero-subtitle`, `.hero-cta`

### Badge and chips

- Small uppercase labels with pill border and soft blue fill.

Important classes:

- `.badge`, `.shortcut-key`

## 6. Motion and Interaction Principles

Source of truth: `css/utilities.css` and `js/main.js`.

- Entrance animation: `riseIn` (fade + upward motion).
- Scroll reveal: elements start slightly down + transparent, then ease in.
- Stagger delay uses 60ms increments for up to 8 elements.
- Microinteractions are mostly lift/slide by 2-6px.
- `prefers-reduced-motion: reduce` is respected (animations/transitions disabled).

Important classes/functions:

- `.animate-fade-in`, `.scroll-reveal`, `.scroll-reveal.visible`
- `initScrollEffects()` in `js/main.js`

## 7. Reuse Priorities for the App Repo

If the app cannot adopt everything, apply these in order:

1. Design tokens (colors, spacing, radius, shadows, type).
2. Button and card styling model.
3. Header/nav translucency + border/shadow behavior.
4. Section background layering (soft gradient + subtle texture).
5. Motion curve + timing consistency.

## 8. "Flavor Guardrails" for AI Styling

Use this when prompting another AI:

- Keep the palette blue-forward and low-noise.
- Prefer soft gradients over solid saturated fills.
- Use rounded corners (`12px`-`32px`) and restrained shadows.
- Keep body text high-legibility (`#102039` primary, `#4a5d79` secondary).
- Use subtle motion; avoid bouncy or spring-heavy effects.
- Preserve a light, professional look suitable for productivity software.
- Do not introduce unrelated visual themes (neon, glassmorphism-heavy, cyberpunk, etc.).

## 9. Direct Source References

- Token definitions: `css/variables.css`
- Reset and focus baseline: `css/reset.css`
- Layout/grid helpers: `css/layout.css`
- Shared components: `css/components.css`
- Typography, animations, utilities: `css/utilities.css`
- Page-level visuals and sections: `css/main.css`
- Interaction behavior: `js/main.js`

## 10. Ready-to-Paste Prompt for App AI

Use this prompt in the app repo when you want UI changes to match the website:

```text
Use the ArtifactKeep website visual language.
Style direction: clean, light, blue-forward productivity UI with soft gradients, rounded cards, and subtle motion.
Required tokens: accent #0b6dff, accent-strong #0056d6, bg #edf2f8, bg-alt #e6ecf5, surface #ffffff, text-primary #102039, text-secondary #4a5d79, border #d2dced.
Typography: Plus Jakarta Sans for headings, Manrope for body, JetBrains Mono for code.
Use 12px/18px/24px/32px corner radii depending on component size.
Use calm shadows (soft/card) and lift-on-hover interactions (2-5px translateY).
Use layered light backgrounds (linear + radial gradients), not flat fills.
Respect reduced motion preferences.
Avoid unrelated styles (neon, cyberpunk, high-gloss glassmorphism).
```
