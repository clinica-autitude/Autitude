export const useSeo = (options: {
  title: string
  description: string
  path: string
  image?: string
  type?: string
  keywords?: string
  datePublished?: string
  dateModified?: string
  author?: string
}) => {
  const siteBase = 'https://autitude.com.br'
  const url = `${siteBase}${options.path}`
  const image = options.image || `${siteBase}/full-logo.png`
  const pageType = options.type || 'website'
  const dateModified = options.dateModified || '2026-06-09'
  const datePublished = options.datePublished || '2024-01-01'
  const author = options.author || 'Autitude - Desenvolvimento e Ação Humana'

  useHead({
    title: options.title,
    meta: [
      { name: 'description', content: options.description },
      ...(options.keywords ? [{ name: 'keywords', content: options.keywords }] : []),
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { name: 'author', content: author },
      { property: 'og:title', content: options.title },
      { property: 'og:description', content: options.description },
      { property: 'og:type', content: pageType },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: 'Autitude - Desenvolvimento e Ação Humana' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: options.title },
      { name: 'twitter:description', content: options.description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:creator', content: '@clinicaautitude' },
      { name: 'date-published', content: datePublished },
      { name: 'date-modified', content: dateModified }
    ],
    link: [
      { rel: 'canonical', href: url },
      { rel: 'alternate', href: url, hreflang: 'pt-BR' }
    ]
  })

  return { siteBase, url, image, datePublished, dateModified }
}
