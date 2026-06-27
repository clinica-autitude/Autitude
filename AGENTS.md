# AGENTS.md — Autitude

> Instructions for AI agents working on this codebase.

## Project Overview

**Autitude** is a Nuxt 3 (Vue 3) static site for a Brazilian neurodivergent care clinic. Deployed to GitHub Pages at autitude.com.br. Portuguese (pt-BR) language.

## Critical Rules

1. **Language:** All user-facing content MUST be in Brazilian Portuguese (pt-BR). Code comments and variable names in English.
2. **Static Generation Only:** This is an SSG site. No server-side rendering in production. All routes should be pre-renderable.
3. **No External APIs:** Content is embedded in Vue components. No CMS, no databases, no server APIs.
4. **Brand Colors:** Primary is `#6B4FA3` (lilac purple). Never change without explicit approval.
5. **SEO First:** Every page MUST have `useHead()` with title, description, OG tags. Structured data (JSON-LD) required for key pages.

## File Structure Rules

- **Pages** go in `pages/`. File name = route path.
- **Components** go in `components/`. Use PascalCase filenames.
- **Composables** go in `composables/`. Use `use` prefix.
- **Plugins** go in `plugins/`.
- **Static assets** go in `public/`.
- **CSS** goes in `assets/css/` (tokens, base, components, utilities, themes).

## SEO Checklist (Every Page)

```js
useHead({
  title: 'Page Title | Autitude',
  meta: [
    { name: 'description', content: '...' },
    { name: 'keywords', content: '...' },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { name: 'author', content: 'Autitude - Desenvolvimento e Ação Humana' },
    { property: 'og:title', content: '...' },
    { property: 'og:description', content: '...' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'pt_BR' },
    { name: 'date-published', content: '2024-01-01' },
    { name: 'date-modified', content: '2026-06-09' }
  ],
  link: [
    { rel: 'canonical', href: 'https://autitude.com.br/current-page' },
    { rel: 'alternate', href: 'https://autitude.com.br/current-page', hreflang: 'pt-BR' }
  ]
})
```

Add JSON-LD structured data via `script` in `useHead()` for:
- Homepage: `MedicalBusiness` + `WebSite` + `Speakable` schemas
- Service pages: `WebPage` with `mainEntity` + `MedicalTherapy` schemas
- FAQ page: `FAQPage` schema
- Blog pages: `Article` schema with named author Person
- Contact page: `ContactPage` with `ContactPoint`
- Team page: Person + `worksFor` schema

### Answer-First Paragraphs (AEO)
Every page MUST have an answer-first paragraph immediately after the H1:
- Use `.seo-answer` wrapper with `.seo-paragraph` inside
- First 80-120 words must directly answer the user's query
- Include strong keywords and internal links
- This drives 44.2% of AI citations (first 30% of page)

### Question-Format H2 Headings
H2 headings should be phrased as questions:
- "O que faz cada indivíduo ser único?" instead of "Quem Somos"
- "Quais especialidades a Autitude oferece?" instead of "Nossas Especialidades"
- "Como funciona o atendimento?" instead of "Nosso Processo"
- This drives 40% more AI citations

### E-E-A-T Signals
- Author bylines with Person schema on blog posts
- Named author with medical credentials (CREFITO, CRM)
- datePublished and dateModified on all pages
- "Last updated" visible dates for freshness signals

### robots.txt Strategy
- AI Retrieval Crawlers (ALLOW): OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot, DuckAssistBot
- AI Training Crawlers (DISALLOW): GPTBot, CCBot, anthropic-ai, ClaudeBot, Google-Extended, Bytespider
- Social Crawlers (ALLOW): FacebookBot, Twitterbot, LinkedInBot, WhatsApp

## Blog Strategy

Blog pages live in `pages/blog/[slug].vue`. Each slug:
1. Has SEO content defined in `seoContent` object
2. Renders hidden HTML visible to crawlers
3. Auto-redirects to `/` for users
4. MUST include canonical URL pointing to the slug

### Blog Tags — 40 SEO Pages (by tier)

**Tier 1 — Primary Services:**
`terapia-ocupacional-infantil`, `integracao-sensorial`, `neuropsicologia-infantil`, `neuropsicopedagogia`, `fonoaudiologia-infantil`, `autismo-terapia`, `tdah-tratamento`

**Tier 2 — Related Therapies:**
`terapia-aba`, `dificuldades-aprendizagem`, `desenvolvimento-infantil`, `neurodivergencia`, `deficiencia-aprendizagem`

**Tier 3 — Clinical/Diagnostic:**
`laudo-neuropsicologico`, `avaliacao-desenvolvimento`, `autismo-adulto`, `ansiedade-infantil`

**Tier 4 — Daily Life:**
`regulacao-emocional`, `habilidades-sociais`, `alimentacao-neurodivergencia`, `exercicios-fisicos`, `sono-neurodivergencia`, `brincadeira-desenvolvimento`

**Tier 5 — Family/Social:**
`terapia-familiar`, `acolhimento-familia`, `inclusao-social`, `comunicacao-alternativa`, `escola-inclusiva`, `terapia-ocupacional-adulto`

**Tier 6 — New 2026:**
`diagnostico-autismo-idade-escolar`, `diferenca-autismo-tdah-infancia`, `avaliacao-neuropsicologica-processo`, `birra-ou-crise-sensorial`, `comportamento-opositor-tod-escola`, `aba-humanizada-estereotipias`, `marcos-fala-infantil`, `seletividade-alimentar-autismo`, `integracao-sensorial-comunicacao-criancas-nao-verbais`, `cobertura-plano-saude-aba-fono`, `liminar-tratamento-autismo`, `vinculo-terapeutico-relatorios-evolucao`

When adding new blog slugs, update:
- `seoContent` in `pages/blog/[slug].vue`
- `public/sitemap.xml`
- `llms.txt` (blog section)

## PWA Requirements

- `public/manifest.json` — must have name, icons, theme_color
- `public/sw.js` — service worker for offline caching
- Apple touch icon referenced in manifest
- Theme color `#6B4FA3` matches across manifest, meta, and CSS

## Contact Data

All contact info is centralized in `composables/useContact.ts`. NEVER hardcode phone numbers, addresses, or URLs. Always use the composable.

```js
const { phone, whatsappUrl, instagramUrl, fullAddress } = useContact()
```

## Redirect Strategy

- `public/_redirects` — SPA fallback for static hosting: `/* /index.html 200`
- Blog slug pages — client-side redirect with SEO content
- Canonical URLs prevent duplicate content

## Build Commands

```bash
pnpm dev        # Development server
pnpm generate   # Static generation (production)
pnpm preview    # Preview production build
```

## Common Tasks

### Add a new page
1. Create `pages/newpage.vue`
2. Add `useHead()` with full SEO meta
3. Add to `routeRules` in `nuxt.config.ts` for pre-rendering
4. Add to `nitro.prerender.routes` in `nuxt.config.ts`
5. Add to `public/sitemap.xml`
6. Add nav link in `app.vue` footer

### Add a new blog post
1. Add slug entry to `seoContent` in `pages/blog/[slug].vue`
2. Add URL to `public/sitemap.xml`
3. Add description to `llms.txt`

### Modify SEO meta
1. Global meta is in `nuxt.config.ts` → `app.head`
2. Page-specific meta is in each page's `useHead()`
3. Dynamic OG resolution is in `plugins/path-resolver.ts`

## Testing

Tests are in `tests/`. Run with:
```bash
node tests/run.js
```

## Deployment

Push to `main` branch triggers GitHub Actions workflow that runs `nuxt generate` and deploys to GitHub Pages.

## Don'ts

- Don't add external tracking scripts (no Google Analytics, no Facebook Pixel)
- Don't add server-side API routes without approval
- Don't change the brand color `#6B4FA3`
- Don't add new dependencies without checking bundle size impact
- Don't use `console.log` in production code
- Don't commit secrets, API keys, or credentials
