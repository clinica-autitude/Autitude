<script setup>
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

const seoContent = {
  'terapia-ocupacional-infantil': {
    title: 'Terapia Ocupacional Infantil - Autitude',
    description: 'Descubra como a terapia ocupacional infantil pode ajudar no desenvolvimento da criança. Atendimento especializado em Pindamonhangaba-SP.',
    keywords: 'terapia ocupacional infantil, integração sensorial, desenvolvimento infantil'
  },
  'integracao-sensorial': {
    title: 'Integração Sensorial - Autitude',
    description: 'Entenda a integração sensorial e como ela afeta o desenvolvimento. Atendimento especializado com certificação internacional pela University of Southern California (USC).',
    keywords: 'integração sensorial, sensory integration, regulação sensorial'
  },
  'neuropsicologia-infantil': {
    title: 'Neuropsicologia Infantil - Autitude',
    description: 'A neuropsicologia infantil investiga o desenvolvimento cognitivo, emocional e comportamental da criança.',
    keywords: 'neuropsicologia infantil, avaliação neuropsicológica, desenvolvimento infantil'
  },
  'neuropsicopedagogia': {
    title: 'Neuropsicopedagogia - Autitude',
    description: 'Apoio especializado para crianças e adolescentes com dificuldades de aprendizagem.',
    keywords: 'neuropsicopedagogia, dificuldades de aprendizagem, aprendizagem'
  },
  'fonoaudiologia-infantil': {
    title: 'Fonoaudiologia Infantil - Autitude',
    description: 'Atendimento fonoaudiológico especializado em linguagem, comunicação e neurodivergência.',
    keywords: 'fonoaudiologia infantil, linguagem, comunicação, neurodivergência'
  },
  'autismo-terapia': {
    title: 'Terapia para Autismo - Autitude',
    description: 'Cuidado integrado e humanizado para crianças e adolescentes no espectro autista.',
    keywords: 'autismo, TEA, autismo infantil, cuidado humanizado'
  },
  'tdah-tratamento': {
    title: 'Acompanhamento para TDAH - Autitude',
    description: 'Cuidado especializado para crianças e adolescentes com TDAH, com foco em regulação, aprendizagem e bem-estar.',
    keywords: 'TDAH, ADHD, atenção, hiperatividade'
  },
  'blog': {
    title: 'Blog - Autitude',
    description: 'Conteúdos sobre desenvolvimento infantil, neurodivergência e cuidado integrado para famílias.',
    keywords: 'blog, artigos, desenvolvimento infantil, neurodivergência'
  }
}

const content = seoContent[slug] || {
  title: 'Autitude - Desenvolvimento e Ação Humana',
  description: 'Espaço especializado em crianças, adolescentes e famílias, com foco no público neurodivergente. Pindamonhangaba-SP.',
  keywords: 'autitude, neurodivergência, Pindamonhangaba, desenvolvimento infantil'
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
    { rel: 'canonical', href: 'https://autitude.com.br' }
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