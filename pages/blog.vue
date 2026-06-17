<script setup>
const siteBase = 'https://autitude.com.br'

useHead({
  title: 'Blog | Autitude',
  meta: [
    { name: 'description', content: 'Conteúdo da Autitude sobre neurodivergência, desenvolvimento infantil e cuidado integrado. Esta página redireciona para o início para visitantes.' },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { name: 'author', content: 'Autitude - Desenvolvimento e Ação Humana' },
    { property: 'og:title', content: 'Blog | Autitude' },
    { property: 'og:description', content: 'Conteúdo sobre neurodivergência, desenvolvimento infantil e cuidado integrado.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'pt_BR' },
    { name: 'date-published', content: '2024-01-01' },
    { name: 'date-modified', content: '2026-06-11' }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}/blog` },
    { rel: 'alternate', href: `${siteBase}/blog`, hreflang: 'pt-BR' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Blog | Autitude',
        description: 'Conteúdo da Autitude sobre neurodivergência, desenvolvimento infantil e cuidado integrado.',
        url: `${siteBase}/blog`,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          url: siteBase
        }
      })
    }
  ]
})

onMounted(() => {
  navigateTo('/', { replace: true })
})
</script>

<template>
  <div class="blog-redirect" aria-label="Redirecionamento do blog">
    <section class="seo-answer seo-text" aria-label="Resumo">
      <h1>Blog da Autitude</h1>
      <p class="seo-paragraph">
        O blog da <strong>Autitude</strong> reúne conteúdos sobre neurodivergência, desenvolvimento infantil,
        terapia ocupacional, neuropsicologia, fonoaudiologia, neuropsicopedagogia e terapia ABA humanizada.
        Para visitantes, esta página redireciona automaticamente para o início.
      </p>
    </section>
  </div>
</template>

<style scoped>
.blog-redirect {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: var(--space-section-top) 1.5rem 2rem;
}

.seo-answer {
  max-width: 720px;
  text-align: center;
}

.seo-paragraph {
  margin-top: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

@media (max-width: 480px) {
  .blog-redirect {
    padding: 4rem 0.875rem 1.5rem;
  }

  .seo-paragraph {
    font-size: 0.875rem;
  }
}
</style>
