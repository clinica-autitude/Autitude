<script setup>
import Grainient from '~/components/Grainient.vue'

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
    <div class="hero-bg-grid">
      <ClientOnly>
        <Grainient
          className="w-full h-full"
          :timeSpeed="0.2"
          :grainAmount="0.03"
          :contrast="1.0"
          :gamma="1.0"
          :saturation="1.0"
          :warpStrength="1.5"
          :warpFrequency="3.0"
          :warpSpeed="0.8"
          :rotationAmount="0"
          color1="#6B4FA3"
          color2="#8FC176"
          color3="#3D2D5E"
        />
      </ClientOnly>
    </div>
    <section class="seo-answer seo-text" aria-label="Resumo">
      <h1>Blog da Autitude</h1>
      <p class="seo-paragraph texture-hd">
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

.hero-bg-grid {
  position: fixed;
  inset: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
}

@media (max-width: 900px) {
  .hero-bg-grid {
    position: absolute;
    height: 100vh;
    height: 100dvh;
  }
}
</style>
