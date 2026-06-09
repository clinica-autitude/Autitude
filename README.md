# Autitude — Desenvolvimento e Ação Humana

> Multidisciplinary clinic specialized in neurodivergent care. Neuropsychology, Speech Therapy, Occupational Therapy, and ABA Therapy in Pindamonhangaba-SP, Brazil.

## Overview

Autitude is a modern, PWA-enabled healthcare website built with Nuxt 3. It serves as the digital presence for a clinic focused on children, adolescents, adults and families — with specialization in neurodivergent individuals (ASD, ADHD, learning disabilities).

**Live site:** [autitude.com.br](https://autitude.com.br)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Nuxt 3 (Vue 3, SSR/SSG) |
| Styling | CSS Custom Properties, Component-scoped styles |
| Animations | GSAP, WebGL (OGL, Three.js) |
| Icons | Lucide Vue Next |
| Color Mode | @nuxtjs/color-mode (light/dark/sepia) |
| Deployment | GitHub Pages (static generation) |
| PWA | Service Worker + Web App Manifest |

## Project Structure

```
├── app.vue                  # Root layout (nav, footer, NuxtPage)
├── nuxt.config.ts           # Nuxt configuration (SEO, meta, route rules)
├── pages/
│   ├── index.vue            # Landing page (hero, pillars, services, CTA)
│   ├── sobre.vue            # About / Quem somos
│   ├── servicos.vue         # Services / Especialidades
│   ├── equipe.vue           # Team / Professionals
│   ├── contato.vue          # Contact
│   ├── agendar.vue          # Appointment scheduling
│   ├── faq.vue              # FAQ (categorized)
│   ├── privacidade.vue      # Privacy policy
│   ├── blog/
│   │   └── [slug].vue       # Blog SEO redirect pages
│   └── [...slug].vue        # 404 catch-all
├── components/
│   ├── hero/                # Hero section components
│   ├── AccessibilityWidget.vue
│   ├── CtaSection.vue
│   ├── ThemeSwitcher.vue
│   └── (visual components: Silk, MagicRings, ColorBends, etc.)
├── composables/
│   └── useContact.ts        # Contact info composable
├── plugins/
│   └── path-resolver.ts     # Canonical URL + OG resolution
├── assets/
│   ├── main.css             # CSS imports
│   └── css/                 # tokens, base, components, utilities, themes
├── public/
│   ├── robots.txt           # Crawler directives
│   ├── sitemap.xml          # XML Sitemap
│   ├── _redirects           # Netlify/Cloudflare redirect rules
│   ├── manifest.json        # PWA Web App Manifest
│   ├── sw.js                # Service Worker
│   ├── favicon.svg          # SVG Favicon
│   └── blog/                # Blog content (CMS-ready)
└── server/
    └── middleware/           # Server middleware
```

## SEO Strategy

### Meta Tags
- Full Open Graph + Twitter Card meta per page
- Canonical URLs resolved via `path-resolver.ts` plugin
- Structured data (JSON-LD) on every page:
  - `MedicalBusiness` schema on homepage
  - `WebPage` schema on service/about pages
  - `FAQPage` schema on FAQ page
- Geolocation meta tags (ICBM, geo.position) for local SEO
- `hreflang` alternate for Portuguese (pt-BR)

### Blog & Tag-Based Indexing
Blog posts are organized by **28 high-traffic tags** for maximum Google indexing:

| Tier | Tags | Focus |
|---|---|---|
| **Primary** | `terapia-ocupacional-infantil`, `integracao-sensorial`, `neuropsicologia-infantil`, `neuropsicopedagogia`, `fonoaudiologia-infantil`, `autismo-terapia`, `tdah-tratamento` | Core services — highest search volume |
| **Related** | `terapia-aba`, `dificuldades-aprendizagem`, `desenvolvimento-infantil`, `neurodivergencia`, `deficiencia-aprendizagem` | Adjacent therapies and conditions |
| **Clinical** | `laudo-neuropsicologico`, `avaliacao-desenvolvimento`, `autismo-adulto`, `ansiedade-infantil` | Diagnosis and assessment |
| **Daily Life** | `regulacao-emocional`, `habilidades-sociais`, `alimentacao-neurodivergencia`, `exercicios-fisicos`, `sono-neurodivergencia`, `brincadeira-desenvolvimento` | Practical care topics |
| **Family/Social** | `terapia-familiar`, `acolhimento-familia`, `inclusao-social`, `comunicacao-alternativa`, `escola-inclusiva`, `terapia-ocupacional-adulto` | Support and inclusion |

Each blog slug page renders SEO-optimized content (JSON-LD, OG tags, canonical URL) and auto-redirects to `/` using a client-side redirect with pre-rendered HTML for crawlers.

### Sitemap
Static `sitemap.xml` includes all 8 main pages + 28 blog tag URLs (36 total) with `<lastmod>`, `<changefreq>`, `<priority>`, and `<xhtml:link>` hreflang annotations.

### Robots.txt
All crawlers allowed. Blog paths are crawlable (updated from previous `Disallow: /blog/`).

### Redirect Strategy
- `_redirects` handles SPA fallback for static hosting
- Blog slug pages use soft redirect (HTML content visible to crawlers, JS redirect for users)
- Canonical URLs prevent duplicate content across `/blog/*` paths

## PWA Integration

- **Web App Manifest** (`public/manifest.json`) — installable, theme color `#6B4FA3`
- **Service Worker** (`public/sw.js`) — caches static assets for offline support
- **Apple Touch Icon** — referenced in manifest for iOS home screen
- **Theme Color** — matches brand purple across browser chrome

## Brand

- **Primary:** `#6B4FA3` (lilac purple)
- **Pillars:** Acolher, Compreender, Desenvolver, Incluir
- **Tagline:** "Cuidamos de pessoas. Potencializamos possibilidades."

## Development

```bash
# Install dependencies
pnpm install

# Dev server
pnpm dev

# Build (static generation)
pnpm generate

# Preview production build
pnpm preview
```

## Deployment

The site is deployed to **GitHub Pages** with static generation. Push to `main` triggers a build via GitHub Actions. The CNAME file points to `autitude.com.br`.

## License

Proprietary — Autitude Desenvolvimento e Ação Humana.
