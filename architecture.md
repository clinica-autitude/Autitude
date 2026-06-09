# Architecture — Autitude

## System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT (Browser)                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────────┐  │
│  │  PWA SW   │  │  Nuxt 3  │  │  WebGL Animations    │  │
│  │  Cache    │  │  Vue 3   │  │  (GSAP + OGL/Three)  │  │
│  └──────────┘  └──────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│               STATIC HOSTING (GitHub Pages)              │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────────┐  │
│  │  HTML    │  │  CSS/JS  │  │  Assets (images,     │  │
│  │  Files   │  │  Bundle  │  │  fonts, manifest)    │  │
│  └──────────┘  └──────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Build Pipeline

```
Source Code (Nuxt 3)
       │
       ▼
  nuxt generate (SSG)
       │
       ▼
  Static HTML + CSS + JS
       │
       ▼
  GitHub Pages Deployment
       │
       ▼
  CDN Edge Cache → autitude.com.br
```

## Rendering Strategy

| Page | Strategy | Rationale |
|---|---|---|
| `/` | Pre-rendered (SSG) | Core landing — maximum performance |
| `/sobre` | Pre-rendered | Static content, SEO critical |
| `/servicos` | Pre-rendered | Service catalog, SEO critical |
| `/equipe` | Pre-rendered | Team info, SEO critical |
| `/contato` | Pre-rendered | Contact info, local SEO |
| `/agendar` | Pre-rendered | CTA page, conversion critical |
| `/faq` | Pre-rendered | FAQ schema for rich results |
| `/privacidade` | Pre-rendered | Legal page |
| `/blog/*` | Pre-rendered + redirect | SEO indexing with user redirect |
| `/*` (catch-all) | 404 page | Client-side fallback |

## Component Architecture

```
app.vue (Root Layout)
├── Navbar (fixed, responsive)
│   ├── Logo + brand
│   ├── NavLinks (desktop)
│   ├── MobileMenu (drawer)
│   └── ThemeSwitcher
├── NuxtPage (route view)
│   ├── pages/index.vue
│   ├── pages/sobre.vue
│   ├── pages/servicos.vue
│   ├── pages/equipe.vue
│   ├── pages/contato.vue
│   ├── pages/agendar.vue
│   ├── pages/faq.vue
│   ├── pages/privacidade.vue
│   ├── pages/blog/[slug].vue
│   └── pages/[...slug].vue (404)
├── AccessibilityWidget (floating)
└── Footer
    ├── Brand + tagline
    ├── Navigation links
    ├── Service links
    └── Location + map embed
```

## Data Flow

### Static Content
All content is statically generated at build time. No CMS integration — content is embedded in Vue components and page files.

### Contact Composable (`useContact.ts`)
Centralized contact information used across all pages:
- Phone, WhatsApp URL, Instagram URL
- Full address components
- Single source of truth for contact data

### SEO Resolution (`path-resolver.ts` plugin)
Runs on app creation:
1. Resolves `siteBase` based on hostname
2. Injects canonical URL
3. Sets OG URL and image meta
4. Manages apple-touch-icon

### Blog SEO Strategy
```
/blog/[slug]  (28 tag pages, pre-rendered)
    │
    ├── Render SEO content (title, description, keywords, JSON-LD)
    ├── Apply OG tags + canonical + hreflang
    ├── Display content (visible to crawlers, hidden from users)
    └── JS redirect → / (after 2s crawl delay)
```

**28 Blog Tags by Tier:**
- **Tier 1 (Primary):** terapia-ocupacional-infantil, integracao-sensorial, neuropsicologia-infantil, neuropsicopedagogia, fonoaudiologia-infantil, autismo-terapia, tdah-tratamento
- **Tier 2 (Related):** terapia-aba, dificuldades-aprendizagem, desenvolvimento-infantil, neurodivergencia, deficiencia-aprendizagem
- **Tier 3 (Clinical):** laudo-neuropsicologico, avaliacao-desenvolvimento, autismo-adulto, ansiedade-infantil
- **Tier 4 (Daily Life):** regulacao-emocional, habilidades-sociais, alimentacao-neurodivergencia, exercicios-fisicos, sono-neurodivergencia, brincadeira-desenvolvimento
- **Tier 5 (Family):** terapia-familiar, acolhimento-familia, inclusao-social, comunicacao-alternativa, escola-inclusiva, terapia-ocupacional-adulto

## PWA Architecture

```
manifest.json (Web App Manifest)
    │
    ├── name: "Autitude - Desenvolvimento e Ação Humana"
    ├── short_name: "Autitude"
    ├── start_url: "/"
    ├── display: "standalone"
    ├── theme_color: "#6B4FA3"
    ├── background_color: "#ffffff"
    └── icons: [
          { src: "/small-logo.png", sizes: "192x192", type: "image/png" },
          { src: "/full-logo.png", sizes: "512x512", type: "image/png" }
        ]

sw.js (Service Worker)
    │
    ├── Install: Cache static assets
    ├── Activate: Clean old caches
    ├── Fetch: Cache-first for static, network-first for navigation
    └── Offline fallback: Serve cached HTML
```

## Performance Targets

| Metric | Target | Strategy |
|---|---|---|
| FCP | < 1.5s | SSG, preloaded fonts |
| LCP | < 2.5s | Static assets, optimized images |
| CLS | < 0.1 | Defined dimensions, font-display: swap |
| TTI | < 3s | Code splitting, lazy WebGL |

## Security

- No server-side secrets (static deployment)
- CSP headers via hosting platform
- No third-party tracking scripts
- HTTPS enforced (GitHub Pages)
- LGPD-compliant privacy policy

## Deployment

```bash
# Production build
pnpm generate

# Output: .output/public/
# Deploy to GitHub Pages via GitHub Actions
```

## Key Files

| File | Purpose |
|---|---|
| `nuxt.config.ts` | Central config: SEO meta, route rules, modules |
| `app.vue` | Root layout with nav, footer, accessibility |
| `composables/useContact.ts` | Contact data composable |
| `plugins/path-resolver.ts` | Canonical URL + OG resolution |
| `public/robots.txt` | Crawler directives |
| `public/sitemap.xml` | XML sitemap for search engines |
| `public/manifest.json` | PWA web app manifest |
| `public/sw.js` | Service worker for offline support |
| `public/_redirects` | Static hosting redirect rules |
