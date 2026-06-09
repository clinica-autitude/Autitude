export const useSiteBase = () => {
  const config = useRuntimeConfig()

  const siteBase = computed(() => {
    if (import.meta.server) return config.public.siteBase || 'https://autitude.com.br'
    const host = window.location.hostname
    if (host === 'autitude.com.br' || host === 'www.autitude.com.br') return 'https://autitude.com.br'
    if (host === 'localhost' || host === '127.0.0.1') return ''
    return config.public.siteBase || 'https://autitude.com.br'
  })

  return { siteBase }
}
