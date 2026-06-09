export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const getSiteBase = () => {
    if (import.meta.server) return config.public.siteBase || 'https://autitude.com.br'
    const host = window.location.hostname
    if (host === 'autitude.com.br' || host === 'www.autitude.com.br') return 'https://autitude.com.br'
    if (host === 'localhost' || host === '127.0.0.1') return ''
    return config.public.siteBase || 'https://autitude.com.br'
  }

  nuxtApp.hook('app:created', () => {
    const siteBase = getSiteBase()
    useHead({
      meta: [
        { property: 'og:url', content: siteBase || 'https://autitude.com.br' },
        { property: 'og:image', content: `${siteBase || 'https://autitude.com.br'}/full-logo.png` },
        { name: 'twitter:image', content: `${siteBase || 'https://autitude.com.br'}/full-logo.png` }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon-png.svg' },
        { rel: 'apple-touch-icon', href: '/small-logo.png' },
        { rel: 'canonical', href: siteBase || 'https://autitude.com.br' }
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
