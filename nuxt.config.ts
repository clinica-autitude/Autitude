export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: ['@nuxtjs/color-mode'],

  runtimeConfig: {
    public: {
      siteBase: process.env.SITE_BASE || 'https://autitude.com.br'
    }
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
    // @ts-expect-error -- @nuxtjs/color-mode supports preferClass but types lag behind
    preferClass: true,
    storageKey: 'nuxt-color-mode'
  },

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'pt-BR', dir: 'ltr' },
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
        { name: 'application-name', content: 'Autitude' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'Autitude' },
        { property: 'og:title', content: 'Autitude | Desenvolvimento e Ação Humana' },
        { property: 'og:description', content: 'Desenvolvimento com acolhimento, ciência e humanidade. Cuidamos de pessoas. Potencializamos possibilidades.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:url', content: process.env.SITE_BASE || 'https://autitude.com.br' },
        { property: 'og:image', content: `${process.env.SITE_BASE || 'https://autitude.com.br'}/full-logo.png` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Autitude - Desenvolvimento e Ação Humana' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Autitude | Desenvolvimento e Ação Humana' },
        { name: 'twitter:description', content: 'Desenvolvimento com acolhimento, ciência e humanidade. Cuidamos de pessoas. Potencializamos possibilidades.' },
        { name: 'twitter:image', content: `${process.env.SITE_BASE || 'https://autitude.com.br'}/full-logo.png` },
        { name: 'twitter:creator', content: '@clinicaautitude' },
        { name: 'twitter:site', content: '@clinicaautitude' },
        { name: 'ICBM', content: '-22.9309, -45.4607' },
        { name: 'geo.position', content: '-22.9309;-45.4607' },
        { name: 'geo.region', content: 'BR-SP' },
        { name: 'geo.placename', content: 'Pindamonhangaba' },
        { name: 'alternateName', content: 'Autitude Desenvolvimento e Ação Humana' },
        { name: 'category', content: 'healthcare' }
      ],
      link: [
        { rel: 'canonical', href: process.env.SITE_BASE || 'https://autitude.com.br' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap' },
        { rel: 'alternate', href: process.env.SITE_BASE || 'https://autitude.com.br', hreflang: 'pt-BR' },
        { rel: 'index', href: `${process.env.SITE_BASE || 'https://autitude.com.br'}/sitemap.xml` },
        { rel: 'help', href: `${process.env.SITE_BASE || 'https://autitude.com.br'}/llms.txt`, title: 'LLMS Information' },
        { rel: 'alternate', href: `${process.env.SITE_BASE || 'https://autitude.com.br'}/llms.txt`, title: 'LLMS Information for AI' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon-png.svg' },
        { rel: 'apple-touch-icon', href: '/small-logo.png' }
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
    '/privacidade': { prerender: true },
    '/neuropsicologia': { prerender: true },
    '/neuropsicopedagogia': { prerender: true },
    '/fonoaudiologia': { prerender: true },
    '/terapia-ocupacional': { prerender: true },
    '/terapia-aba': { prerender: true },
    '/blog/**': { prerender: true }
  },

  nitro: {
    prerender: {
      routes: [
        '/',
        '/sobre',
        '/servicos',
        '/equipe',
        '/contato',
        '/agendar',
        '/faq',
        '/privacidade',
        '/neuropsicologia',
        '/neuropsicopedagogia',
        '/fonoaudiologia',
        '/terapia-ocupacional',
        '/terapia-aba',
        '/blog',
        '/blog/terapia-ocupacional-infantil',
        '/blog/integracao-sensorial',
        '/blog/neuropsicologia-infantil',
        '/blog/neuropsicopedagogia',
        '/blog/fonoaudiologia-infantil',
        '/blog/autismo-terapia',
        '/blog/tdah-tratamento',
        '/blog/terapia-aba',
        '/blog/dificuldades-aprendizagem',
        '/blog/desenvolvimento-infantil',
        '/blog/neurodivergencia',
        '/blog/terapia-ocupacional-adulto',
        '/blog/laudo-neuropsicologico',
        '/blog/avaliacao-desenvolvimento',
        '/blog/escola-inclusiva',
        '/blog/autismo-adulto',
        '/blog/regulacao-emocional',
        '/blog/habilidades-sociais',
        '/blog/alimentacao-neurodivergencia',
        '/blog/exercicios-fisicos',
        '/blog/terapia-familiar',
        '/blog/acolhimento-familia',
        '/blog/inclusao-social',
        '/blog/comunicacao-alternativa',
        '/blog/deficiencia-aprendizagem',
        '/blog/ansiedade-infantil',
        '/blog/sono-neurodivergencia',
        '/blog/brincadeira-desenvolvimento',
        '/blog/diagnostico-autismo-idade-escolar',
        '/blog/diferenca-autismo-tdah-infancia',
        '/blog/avaliacao-neuropsicologica-processo',
        '/blog/birra-ou-crise-sensorial',
        '/blog/comportamento-opositor-tod-escola',
        '/blog/aba-humanizada-estereotipias',
        '/blog/marcos-fala-infantil',
        '/blog/seletividade-alimentar-autismo',
        '/blog/integracao-sensorial-comunicacao-criancas-nao-verbais',
        '/blog/cobertura-plano-saude-aba-fono',
        '/blog/liminar-tratamento-autismo',
        '/blog/vinculo-terapeutico-relatorios-evolucao'
      ]
    }
  },

  css: ['~/assets/main.css'],

})
