<script setup>
const siteBase = 'https://autitude.com.br'

useHead({
  title: 'Página não encontrada (404) | Autitude - Desenvolvimento e Ação Humana',
  meta: [
    { name: 'description', content: 'Página não encontrada. Volte para a página inicial da Autitude ou entre em contato conosco.' },
    { name: 'robots', content: 'noindex, nofollow' },
    { property: 'og:title', content: 'Página não encontrada | Autitude' },
    { property: 'og:description', content: 'Página não encontrada. Volte para a página inicial.' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}/404` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Página não encontrada (404)',
        description: 'A página que você procura não existe ou foi movida.',
        url: `${siteBase}/404`,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          url: siteBase
        }
      })
    }
  ]
})
</script>

<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content">
        <div class="error-visual">
          <span class="error-code">404</span>
        </div>
        <h1>Página não encontrada</h1>
        <p>Desculpe, a página que você procura não existe ou foi movida. Vamos voltar para cuidar de você.</p>
        <div class="error-actions">
          <NuxtLink to="/" class="btn btn-primary btn-lg">
            Voltar ao Início
          </NuxtLink>
          <NuxtLink to="/contato" class="btn btn-secondary btn-lg">
            Fale Conosco
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--space-section-top);
}

.error-content {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.error-visual {
  margin-bottom: 2rem;
}

.error-code {
  font-size: 8rem;
  font-weight: 800;
  line-height: 1;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

h1 {
  margin-bottom: 1rem;
}

p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

.error-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .error-code {
    font-size: 5rem;
  }

  .error-actions {
    flex-direction: column;
  }

  .error-actions .btn {
    width: 100%;
  }
}
</style>
