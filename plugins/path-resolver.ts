export default defineNuxtPlugin((nuxtApp) => {
  const { siteBase } = useSiteBase()

  nuxtApp.hook('app:created', () => {
    useHead({
      link: [
        { rel: 'canonical', href: siteBase.value || 'https://autitude.com.br' }
      ]
    })
  })

  if (import.meta.client) {
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
