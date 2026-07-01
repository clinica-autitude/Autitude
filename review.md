Critical (3)
   # │ Issue                                                         │ Location
  ───┼───────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────
   1 │ Broken logo.png in JSON-LD — Schema references logo.png but   │ pages/index.vue:71
     │ only full-logo.png exists in /public/                         │
   2 │ Stale root index.html — Leftover from Vite/SPA setup with     │ index.html
     │ broken template syntax ({{ base }}) and reference to non-     │
     │ existent /src/main.js. Will conflict with Nuxt's generated    │
     │ output on GitHub Pages                                        │
   3 │ SEO sections outside root container — Hidden SEO divs sit as  │ pages/index.vue:448-572, pages/servicos.vue:279-293,
     │ siblings outside the main wrapper with position: absolute but │ pages/contato.vue:207-218
     │ no positioned parent, causing overlay issues                  │
  --------
  High (5)
   # │ Issue                                                         │ Location
  ───┼───────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────
   4 │ Missing <h1> on contact and FAQ pages (uses <h2> as main      │ pages/contato.vue:152, pages/faq.vue:223
     │ heading)                                                      │
   5 │ Canonical URL plugin conflicts — path-resolver.ts sets        │ plugins/path-resolver.ts:7
     │ canonical to root on every page, creating duplicate canonical │
     │ tags that conflict with page-specific ones                    │
   6 │ useSeo composable is dead code — 201 lines never imported     │ composables/useSeo.ts
     │ anywhere                                                      │
   7 │ Hardcoded siteBase in 8+ pages instead of using useSiteBase() │ pages/sobre.vue:12, pages/servicos.vue:5,
     │ composable                                                    │ pages/equipe.vue:12, etc.
   8 │ fullLogoUrl computed is dead code — Defined but never used    │ pages/index.vue:29
  --------
  Medium (8)
   #  │ Issue                                                            │ Location
  ────┼──────────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────
   9  │ Unused Compass import                                            │ pages/sobre.vue:4
   10 │ Unnecessary explicit computed import (Nuxt auto-imports it)      │ pages/index.vue:2
   11 │ Dead config object never used in template                        │ pages/contato.vue:117-124
   12 │ 6 unused components (DotGrid, HeroTypewriter, HeroGlass,         │ components/
      │ HeroPill, HeroSubtitle, HeroTagline)                             │
   13 │ Three.js (184KB+) loaded via * as THREE on components used       │ components/ColorBends.vue, components/MagicRings.vue
      │ across pages                                                     │
   14 │ /blog index page missing from routeRules                         │ nuxt.config.ts:79-94
   15 │ isWebGLAvailable utility not SSR-safe (no document guard)        │ utils/webgl.ts
   16 │ Duplicate content risk: /terapia-aba (page) vs /blog/terapia-aba │ public/sitemap.xml
      │ (blog) with different canonicals                                 │
  --------
  Low (6)
   #                       │ Issue                                                                │ Location
  ─────────────────────────┼──────────────────────────────────────────────────────────────────────┼─────────────────────────────
   17                      │ @vue-a11y/vlibras may not support Vue 3                              │ package.json:16
   18                      │ Service worker caches 60+ routes on install — one failure breaks all │ public/sw.js:2-61
   19                      │ Google Fonts loaded render-blocking                                  │ nuxt.config.ts:67
   20                      │ Inconsistent date-modified across pages                              │ pages/blog.vue:17 vs others
   21                      │ FAQ and Privacy pages are orphan pages (no links from nav/footer)    │ app.vue:140-154
   22                      │ Root index.html references non-existent /src/main.js                 │ index.html:39
  --------
  Recommended Priority
  1. Delete the stale root index.html file
  2. Fix logo.png → full-logo.png in the JSON-LD schema
  3. Fix the path-resolver.ts plugin (remove or make it respect page-specific canonicals)
  4. Add <h1> to contact and FAQ pages
  5. Remove dead code: useSeo.ts, unused imports, unused components
  6. Add SSR guard to utils/webgl.ts
