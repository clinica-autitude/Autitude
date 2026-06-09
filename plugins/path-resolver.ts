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
      link: [
        { rel: 'canonical', href: siteBase || 'https://autitude.com.br' }
      ]
    })
  })

  if (process.client) {
    try {
      const stored = localStorage.getItem('nuxt-color-mode')
      if (stored) {
        const parsed = JSON.parse(stored)
        const mode = parsed?.value
        if (mode && mode !== 'light') {
          document.documentElement.setAttribute('data-theme', mode)
        } else {
          document.documentElement.removeAttribute('data-theme')
        }
      }
    } catch (e) {
      if (import.meta.dev) console.warn('[path-resolver] Failed to parse color mode:', e)
    }
  }
})
