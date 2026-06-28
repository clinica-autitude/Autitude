export const useSiteBase = () => {
  const config = useRuntimeConfig()

  let base: string
  if (import.meta.server) {
    base = config.public.siteBase || 'https://autitude.com.br'
  } else {
    const host = window.location.hostname
    if (host === 'autitude.com.br' || host === 'www.autitude.com.br') {
      base = 'https://autitude.com.br'
    } else if (host === 'localhost' || host === '127.0.0.1') {
      base = ''
    } else {
      base = config.public.siteBase || 'https://autitude.com.br'
    }
  }

  return { siteBase: base }
}
