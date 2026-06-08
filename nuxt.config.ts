export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: ['@nuxtjs/color-mode'],

  runtimeConfig: {
    public: {
      siteBase: process.env.SITE_BASE || 'https://hautlys.github.io/Autitude',
      basePath: process.env.NUXT_PUBLIC_BASE_PATH || ''
    }
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
    preferClass: true,
    storageKey: 'nuxt-color-mode',
    thresholds: {
      dark: 0.5,
      sepia: 0.3
    },
    value: {
      light: 'light',
      dark: 'dark',
      sepia: 'sepia'
    }
  },

  app: {
    baseURL: process.env.NUXT_PUBLIC_BASE_PATH || '/Autitude/',
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Autitude | Desenvolvimento e Ação Humana',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Autitude — Desenvolvimento e Ação Humana. Espaço especializado em crianças, adolescentes, adultos e famílias, com foco no público neurodivergente. Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia, Terapia Ocupacional e Terapia ABA Humanizada em Pindamonhangaba-SP.' },
        { name: 'keywords', content: 'autitude, neurodivergência, neuropsicologia, neuropsicopedagogia, fonoaudiologia, terapia ocupacional, terapia ABA, integração sensorial, Pindamonhangaba, desenvolvimento infantil, TEA, TDAH' },
        { name: 'author', content: 'Autitude - Desenvolvimento e Ação Humana' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'theme-color', content: '#6B4FA3' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'language', content: 'Portuguese' },
        { property: 'og:title', content: 'Autitude | Desenvolvimento e Ação Humana' },
        { property: 'og:description', content: 'Desenvolvimento com acolhimento, ciência e humanidade. Cuidamos de pessoas. Potencializamos possibilidades.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:url', content: 'https://hautlys.github.io/Autitude' },
        { property: 'og:image', content: 'https://hautlys.github.io/Autitude/full-logo.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Autitude - Desenvolvimento e Ação Humana' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Autitude | Desenvolvimento e Ação Humana' },
        { name: 'twitter:description', content: 'Desenvolvimento com acolhimento, ciência e humanidade. Cuidamos de pessoas. Potencializamos possibilidades.' },
        { name: 'twitter:image', content: 'https://hautlys.github.io/Autitude/full-logo.png' },
        { name: 'twitter:creator', content: '@clinicaautitude' },
        { name: 'twitter:site', content: '@clinicaautitude' },
        { name: 'ICBM', content: '-22.9309, -45.4607' },
        { name: 'geo.position', content: '-22.9309;-45.4607' },
        { name: 'geo.region', content: 'BR-SP' },
        { name: 'geo.placename', content: 'Pindamonhangaba' },
        { name: 'alternateName', content: 'Autitude Desenvolvimento e Ação Humana' }
      ],
      link: [
        { rel: 'canonical', href: 'https://hautlys.github.io/Autitude' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap' },
        { rel: 'alternate', href: 'https://hautlys.github.io/Autitude', hreflang: 'pt-BR' },
        { rel: 'index', href: 'https://hautlys.github.io/Autitude/sitemap.xml' },
        { rel: 'help', href: 'https://hautlys.github.io/Autitude/llms.txt', title: 'LLMS Information' }
      ]
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/sobre': { prerender: true },
    '/servicos': { prerender: true },
    '/equipe': { prerender: true },
    '/contato': { prerender: true },
    '/agendar': { prerender: true },
    '/faq': { prerender: true },
    '/privacidade': { prerender: true }
  },

  nitro: {
    prerender: {
      routes: ['/', '/sobre', '/servicos', '/equipe', '/contato', '/agendar', '/faq', '/privacidade']
    }
  },

  css: ['~/assets/main.css'],

  srcDir: '.'
})