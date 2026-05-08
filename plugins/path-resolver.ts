export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  nuxtApp.hook('app:created', () => {
    const base = config.public.siteBase || 'https://hautlys.github.io/Autitude'
    const path = config.public.basePath || ''

    useHead({
      meta: [
        { property: 'og:url', content: `${base}${path}` },
        { property: 'og:image', content: `${base}${path}/full-logo.png` },
        { name: 'twitter:image', content: `${base}${path}/full-logo.png` }
      ],
      link: [
        { rel: 'canonical', href: `${base}${path}` },
        { rel: 'alternate', href: `${base}${path}`, hreflang: 'pt-BR' },
        { rel: 'index', href: `${base}${path}/sitemap.xml` },
        { rel: 'help', href: `${base}${path}/llms.txt`, title: 'LLMS Information' }
      ]
    })
  })

  if (process.client) {
    const stored = localStorage.getItem('nuxt-color-mode')
    if (stored) {
      try {
        const mode = JSON.parse(stored).value
        if (mode && mode !== 'light') {
          document.documentElement.setAttribute('data-theme', mode)
        }
      } catch (e) {}
    }
  }
})
