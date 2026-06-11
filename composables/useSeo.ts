export const useSeo = (options: {
  pageTitle: string
  pageDescription: string
  pageKeywords?: string
  schemaType?: "MedicalBusiness" | "WebPage" | "MedicalTherapy" | "FAQPage" | "Article" | "ContactPage" | "Person"
  customSchema?: any
  datePublished?: string
  dateModified?: string
  ogImage?: string
  noIndex?: boolean
  path?: string
  answerFirstParagraph?: string
  questionFormatH2?: string
}) => {
  const siteBase = 'https://autitude.com.br'
  const { phone, email, address, city, state } = useContact()
  const datePublished = options.datePublished || '2024-01-01'
  const dateModified = options.dateModified || '2026-06-09'
  const ogImage = options.ogImage || `${siteBase}/full-logo.png`
  const url = options.path ? `${siteBase}${options.path}` : siteBase
  const schemaType = options.schemaType || 'WebPage'

  // Answer-first paragraph content
  const answerFirstParagraph = options.answerFirstParagraph || ''

  // Question-format H2 heading data
  const questionFormatH2 = options.questionFormatH2 || ''

  // Default author for E-E-A-T signals
  const author = 'Autitude - Desenvolvimento e Ação Humana'

  // Determine SEO answer content
  const getAnswerFirstParagraph = () => {
    if (answerFirstParagraph) return answerFirstParagraph
    return 'A Autitude é um espaço especializado em crianças, adolescentes, adultos e famílias, com foco no público neurodivergente. Localizada em Pindamonhangaba-SP, com mais de 20 anos de atuação na área de saúde.'
  }

  // Build structured data based on schema type
  const buildStructuredData = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      name: options.pageTitle,
      description: options.pageDescription,
      url: url,
      datePublished: datePublished,
      dateModified: dateModified,
      author: {
        '@type': 'Person',
        name: author,
        worksFor: {
          '@type': 'Organization',
          name: 'Autitude - Desenvolvimento e Ação Humana'
        }
      }
    }

    // Add type-specific fields
    switch (schemaType) {
      case 'MedicalBusiness':
        return {
          ...baseSchema,
          address: {
            '@type': 'PostalAddress',
            streetAddress: address,
            addressLocality: city,
            addressRegion: state,
            addressCountry: 'BR'
          },
          foundingDate: '2004',
          numberOfEmployees: {
            '@type': 'QuantitativeValue',
            value: '5-10'
          }
        }

      case 'MedicalTherapy':
        return {
          ...baseSchema,
          medicalSpecialty: 'Saúde Mental e Neurodesenvolvimento',
          provider: {
            '@type': 'Person',
            name: author
          }
        }

      case 'ContactPage':
        return {
          ...baseSchema,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: `+${phone}`,
            email,
            contactType: 'customer service',
            availableLanguage: ['Portuguese', 'Spanish']
          }
        }

      case 'Person':
        return {
          ...baseSchema,
          jobTitle: 'Fundador e Especialista',
          worksFor: {
            '@type': 'Organization',
            name: 'Autitude - Desenvolvimento e Ação Humana'
          }
        }

      case 'Article':
        return {
          ...baseSchema,
          articleSection: 'Neurodesenvolvimento',
          articleBody: options.pageDescription,
          publisher: {
            '@type': 'Organization',
            name: 'Autitude - Desenvolvimento e Ação Humana'
          }
        }

      case 'FAQPage':
        return {
          ...baseSchema,
          mainEntity: []
        }

      default: // WebPage
        return {
          ...baseSchema,
          mainEntity: {
            '@type': 'MedicalBusiness',
            name: 'Autitude - Desenvolvimento e Ação Humana',
            description: 'Espaço especializado em crianças, adolescentes, adultos e famílias, com foco no público neurodivergente.',
            url: siteBase,
            address: {
              '@type': 'PostalAddress',
              streetAddress: address,
              addressLocality: city,
              addressRegion: state,
              addressCountry: 'BR'
            },
            foundingDate: '2004'
          }
        }
    }
  }

  const structuredData = options.customSchema || buildStructuredData()

  useHead({
    title: options.pageTitle,
    htmlAttrs: { lang: 'pt-BR', dir: 'ltr' },
    meta: [
      { name: 'description', content: options.pageDescription },
      ...(options.pageKeywords ? [{ name: 'keywords', content: options.pageKeywords }] : []),
      { name: 'robots', content: options.noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large' },
      { name: 'author', content: author },
      { name: 'theme-color', content: '#6B4FA3' },
      { name: 'date-published', content: datePublished },
      { name: 'date-modified', content: dateModified },
      // Open Graph tags
      { property: 'og:title', content: options.pageTitle },
      { property: 'og:description', content: options.pageDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:url', content: url },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: 'Autitude - Desenvolvimento e Ação Humana' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: options.pageTitle },
      { name: 'twitter:description', content: options.pageDescription },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:creator', content: '@clinicaautitude' },
      { name: 'twitter:site', content: '@clinicaautitude' }
    ],
    link: [
      { rel: 'canonical', href: url },
      { rel: 'alternate', href: url, hreflang: 'pt-BR' }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(structuredData)
      }
    ]
  })

  return {
    siteBase,
    url,
    ogImage,
    datePublished,
    dateModified,
    author,
    getAnswerFirstParagraph,
    getQuestionFormatH2: () => questionFormatH2
  }
}
