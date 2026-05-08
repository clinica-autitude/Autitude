export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const siteBase = config.public.siteBase || 'https://hautlys.github.io/Autitude'

  nuxtApp.hook('app:created', () => {
    useHead({
      meta: [
        { property: 'og:url', content: siteBase },
        { property: 'og:image', content: `${siteBase}/full-logo.png` },
        { name: 'twitter:image', content: `${siteBase}/full-logo.png` }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${siteBase}/favicon-png.svg` },
        { rel: 'apple-touch-icon', href: `${siteBase}/small-logo.png` },
        { rel: 'canonical', href: siteBase }
      ]
    })
  })

  if (process.client) {
    try {
      const stored = localStorage.getItem('nuxt-color-mode')
      if (stored) {
        const mode = JSON.parse(stored).value
        if (mode && mode !== 'light') {
          document.documentElement.setAttribute('data-theme', mode)
        }
      }
    } catch (e) {}
  }
})
