# Design System — Autitude

## Brand Identity

### Colors

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#6B4FA3` | Brand purple, CTAs, accents |
| `--primary-light` | Light variant | Hover states, backgrounds |
| `--secondary` | Complementary | Secondary actions |
| `--accent` | `#8FC176` | Success, growth, nature |
| `--white` | `#FFFFFF` | Text on dark, backgrounds |
| `--lilac` | Lilac shade | Pill backgrounds, tags |
| `--lilac-deep` | Deep lilac | Strong text, icons |
| `--lilac-soft` | Soft lilac | Light backgrounds |
| `--pink-light` | Pastel pink | Blob decorations |
| `--blue-light` | Pastel blue | Blob decorations |
| `--pastel-lavender` | Lavender | Service card gradients |
| `--pastel-pink` | Pastel pink | Service card gradients |
| `--pastel-mint` | Pastel mint | Service card gradients |

### Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| Display | DM Sans | 800 | clamp(2.2rem, 4vw, 3.2rem) |
| Heading | DM Sans | 700 | clamp(1.5rem, 3vw, 2rem) |
| Body | DM Sans | 400-500 | 1rem (16px) |
| Small | DM Sans | 500-600 | 0.875-0.9375rem |
| Tagline | Nunito | 600-700 | 0.9375rem |

### Spacing

| Token | Usage |
|---|---|
| `--radius-sm` | 8px — buttons, inputs |
| `--radius-md` | 12px — cards, containers |
| `--radius-lg` | 16px — large cards |
| `--radius-xl` | 24px — hero elements |
| `--radius-full` | 9999px — pills, badges |

### Shadows

| Token | Usage |
|---|---|
| `--shadow-xs` | Navbar, subtle elevation |
| `--shadow-sm` | Cards at rest |
| `--shadow-md` | Cards on hover |
| `--shadow-lg` | Elevated elements |

## Component Patterns

### Navigation

**Desktop:** Fixed top bar with horizontal links, logo left, CTA right.
**Mobile:** Hamburger → slide-in drawer from right, full-height, backdrop blur.

```
┌─────────────────────────────────────────┐
│ [Logo] Autitude    Início Sobre ... [Agendar] │
└─────────────────────────────────────────┘
```

### Hero Section

Three-column grid on desktop:
```
┌──────────┬────────────────────┬──────────┐
│  Left    │   WebGL Animation  │  Right   │
│  Pill    │   (MagicRings +    │  Subtitle│
│  Title   │    Silk BG)        │  Tagline │
│          │                    │  Actions │
└──────────┴────────────────────┴──────────┘
```

Collapses to single column on mobile with stacked layout.

### Card Patterns

**Service Cards (Mini):**
```
┌─────────────────────────────┐
│ [Icon] Service Name    →    │
│        Short description    │
└─────────────────────────────┘
```

**Pillar Cards:**
```
┌─────────────────┐
│   [Icon]        │
│   Title         │
│   Description   │
└─────────────────┘
```

### CTA Section

Full-width gradient section with:
- Title + tagline
- Action buttons (primary + WhatsApp)
- Address line
- Color bend WebGL background

### FAQ

Categorized accordion with filter pills:
```
[Todas] [Geral] [Neurodivergência] [Especialidades] [Agendamento]
```

### Footer

Four-column grid:
```
┌──────────┬──────────┬──────────┬──────────┐
│  Brand   │  Nav     │  Service │  Contact │
│  + desc  │  links   │  links   │  + map   │
└──────────┴──────────┴──────────┴──────────┘
```

Collapses to 2-col on tablet, 1-col on mobile.

## Accessibility

### Features
- Skip-to-content link (visible on focus)
- ARIA labels on interactive elements
- `aria-expanded` on mobile menu toggle
- Focus management (Escape closes menu)
- Keyboard navigation support
- High contrast mode support
- Color theme switching (light/dark/sepia)

### Contrast Modes
```css
[data-a11y-contrast="high"] — High contrast borders
[data-a11y-contrast="dark"] — Dark theme with enhanced borders
```

## Animation Philosophy

- **Entrance:** `fadeInUp` with staggered delays
- **Hover:** Transform translateY/X with shadow transitions
- **WebGL:** Silk background (ambient), MagicRings (interactive), ColorBends (CTA)
- **Duration:** 0.2-0.4s for micro-interactions, 0.6-0.7s for entrances
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` for smooth feel
- **Reduced motion:** Respect `prefers-reduced-motion`

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| > 1024px | Full desktop, 4-col grids |
| 900px | Tablet, 2-col grids, mobile nav |
| 640px | Mobile, single column, stacked |
| 500px | Small mobile, simplified footer |

## Theme System

Three themes via `@nuxtjs/color-mode`:

| Theme | Background | Text | Usage |
|---|---|---|---|
| Light | White | Dark | Default |
| Dark | Near-black | Light | Night use |
| Sepia | Warm cream | Brown | Reading comfort |

## Brand Gradient

```css
--gradient-primary: linear-gradient(135deg, #6B4FA3, #8B6FBF)
```

Used for: logo text, hero title highlights, CTA buttons, error page code.

## Visual Components

| Component | Purpose | Tech |
|---|---|---|
| Silk | Ambient background texture | WebGL (OGL) |
| MagicRings | Interactive hero animation | WebGL (OGL) |
| ColorBends | CTA section gradient | WebGL |
| Squares | Service page background | WebGL |
| Grainient | Texture overlay | CSS |
| DotGrid | Decorative pattern | CSS |
