<script setup>
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

const seoContent = {
  'terapia-ocupacional-infantil': {
    title: 'Terapia Ocupacional Infantil - Autitude',
    description: 'Descubra como a terapia ocupacional infantil pode ajudar no desenvolvimento do seu filho. Tratamento especializado em Pindamonhangaba-SP.',
    keywords: 'terapia ocupacional infantil, desenvolvimento infantil,儿科职业治疗'
  },
  'integracao-sensorial': {
    title: 'Integração Sensorial - Autitude',
    description: 'Entenda a integração sensorial e como ela afeta o desenvolvimento da criança. Tratamento especializado com certificação internacional.',
    keywords: 'integração sensorial, sensory integration, tratamento sensorial'
  },
  'estimulacao-precoce': {
    title: 'Estimulação Precoce - Autitude',
    description: 'A estimulação precoce é essencial nos primeiros anos de vida. Veja como podemos ajudar no desenvolvimento do seu filho.',
    keywords: 'estimulação precoce, early intervention, desenvolvimento infantil'
  },
  'autismo-terapia': {
    title: 'Terapia para Autismo - Autitude',
    description: 'Tratamento especializado para crianças no espectro autista. Abordagem humanizada e baseada em evidências.',
    keywords: 'autismo, TEA, autism therapy,儿科治疗'
  },
  'tdah-tratamento': {
    title: 'Tratamento para TDAH - Autitude',
    description: 'Apoio terapêutico para crianças com TDAH. Desenvolvimento de fokus e habilidades comportamentais.',
    keywords: 'TDAH, ADHD, atenção, hiperatividade'
  },
  'blog': {
    title: 'Blog - Autitude',
    description: 'Artigos e informações sobre terapia ocupacional e integração sensorial para pais.',
    keywords: 'blog, artigos, parenting, desenvolvimento infantil'
  }
}

const content = seoContent[slug] || {
  title: 'Autitude - Clínica de Terapia Ocupacional',
  description: 'Clínica especializada em terapia ocupacional e integração sensorial em Pindamonhangaba-SP.',
  keywords: 'terapia ocupacional, integração sensorial, Pindamonhangaba'
}

useHead({
  title: content.title,
  meta: [
    { name: 'description', content: content.description },
    { name: 'keywords', content: content.keywords },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: content.title },
    { property: 'og:description', content: content.description },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: 'https://hautlys.github.io/Autitude' }
  ]
})

onMounted(() => {
  setTimeout(() => {
    navigateTo('/', { replace: true })
  }, 100)
})
</script>

<template>
  <div class="seo-redirect-page">
    <h1>{{ content.title }}</h1>
    <p>{{ content.description }}</p>
  </div>
</template>

<style scoped>
.seo-redirect-page {
  position: absolute;
  left: -9999px;
  top: 0;
}
h1 {
  font-size: 1px;
  color: transparent;
}
p {
  position: absolute;
  left: -9999px;
}
</style>