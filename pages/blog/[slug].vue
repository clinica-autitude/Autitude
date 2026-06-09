<script setup>
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

const seoContent = {
  // === ORIGINAL 7 (HIGH-TRAFFIC) ===
  'terapia-ocupacional-infantil': {
    title: 'Terapia Ocupacional Infantil — Intervenção Precoce e Autonomia | Autitude',
    description: 'Terapia ocupacional infantil em Pindamonhangaba-SP. Avaliação e intervenção em integração sensorial, autonomia pessoal e social. Certificação internacional USC.',
    keywords: 'terapia ocupacional infantil, integração sensorial, autonomia infantil, desenvolvimento sensorial, terapia ocupacional Pindamonhangaba, sensory integration, terapia ocupacional criança',
    canonical: '/blog/terapia-ocupacional-infantil'
  },
  'integracao-sensorial': {
    title: 'Integração Sensorial — Avaliação e Intervenção Certificada | Autitude',
    description: 'Integração sensorial com certificação internacional pela University of Southern California (USC). Avaliação e intervenção em Pindamonhangaba-SP.',
    keywords: 'integração sensorial, sensory integration, regulação sensorial, avaliação sensorial, processamento sensorial, integração sensorial criança',
    canonical: '/blog/integracao-sensorial'
  },
  'neuropsicologia-infantil': {
    title: 'Neuropsicologia Infantil — Avaliação Cognitiva e Comportamental | Autitude',
    description: 'Neuropsicologia infantil: avaliação neuropsicológica completa, rastreamento de neurodivergências, desenvolvimento cognitivo e emocional. Pindamonhangaba-SP.',
    keywords: 'neuropsicologia infantil, avaliação neuropsicológica, desenvolvimento cognitivo, neurodivergência criança, TDAH avaliação, TEA avaliação neuropsicológica',
    canonical: '/blog/neuropsicologia-infantil'
  },
  'neuropsicopedagogia': {
    title: 'Neuropsicopedagogia — Apoio à Aprendizagem e Desenvolvimento Escolar | Autitude',
    description: 'Neuropsicopedagogia: avaliação de dificuldades de aprendizagem, plano pedagógico individualizado e apoio ao desenvolvimento escolar em Pindamonhangaba-SP.',
    keywords: 'neuropsicopedagogia, dificuldades de aprendizagem, plano pedagógico, apoio escolar, dislexia, disgrafia, déficit de atenção escolar',
    canonical: '/blog/neuropsicopedagogia'
  },
  'fonoaudiologia-infantil': {
    title: 'Fonoaudiologia Infantil — Linguagem, Comunicação e Neurodivergência | Autitude',
    description: 'Fonoaudiologia infantil: desenvolvimento da linguagem, comunicação social, fala e motricidade orofacial. Atendimento especializado em neurodivergência.',
    keywords: 'fonoaudiologia infantil, linguagem infantil, atraso de linguagem, fala criança, comunicação social, fonoaudiologia neurodivergência',
    canonical: '/blog/fonoaudiologia-infantil'
  },
  'autismo-terapia': {
    title: 'Terapia para Autismo (TEA) — Cuidado Integrado e Humanizado | Autitude',
    description: 'Cuidado integrado e humanizado para crianças e adolescentes no espectro autista (TEA). Terapia ABA, integração sensorial, fonoaudiologia e mais.',
    keywords: 'autismo, TEA, autismo infantil, espectro autista, terapia autismo, ABA autismo, intervenção precoce autismo',
    canonical: '/blog/autismo-terapia'
  },
  'tdah-tratamento': {
    title: 'Acompanhamento para TDAH — Regulação, Aprendizagem e Bem-Estar | Autitude',
    description: 'Cuidado especializado para crianças e adolescentes com TDAH. Avaliação neuropsicológica, estratégias de regulação e apoio ao aprendizado.',
    keywords: 'TDAH, ADHD, atenção, hiperatividade, TDAH infantil, avaliação TDAH, estratégias TDAH escola',
    canonical: '/blog/tdah-tratamento'
  },

  // === NEW 21 BLOG PAGES ===
  'terapia-aba': {
    title: 'Terapia ABA — Análise do Comportamento Aplicada e Desenvolvimento de Habilidades | Autitude',
    description: 'Terapia ABA (Applied Behavior Analysis) humanizada em Pindamonhangaba-SP. Desenvolvimento de habilidades adaptativas, redução de comportamentos desafiadores e ensino baseado em evidências.',
    keywords: 'terapia ABA, ABA autismo, análise comportamental, comportamento aplicado, habilidades adaptativas, ABA infantil, intervenção comportamental, ABA humanizada',
    canonical: '/blog/terapia-aba'
  },
  'dificuldades-aprendizagem': {
    title: 'Dificuldades de Aprendizagem — Identificação, Diagnóstico e Apoio Escolar | Autitude',
    description: 'Dificuldades de aprendizagem: dislexia, disgrafia, discalculia e déficits de atenção. Avaliação neuropsicológica e plano pedagógico individualizado em Pindamonhangaba-SP.',
    keywords: 'dificuldades de aprendizagem, dislexia, disgrafia, discalculia, apoio escolar, criança dificuldade aprendizagem, avaliação aprendizagem',
    canonical: '/blog/dificuldades-aprendizagem'
  },
  'desenvolvimento-infantil': {
    title: 'Desenvolvimento Infantil — Marcos, Avaliação e Estimulação Precoce | Autitude',
    description: 'Desenvolvimento infantil: marcos motores, cognitivos, linguagem e socioemocionais. Avaliação e estimulação precoce para crianças de 0 a 12 anos em Pindamonhangaba-SP.',
    keywords: 'desenvolvimento infantil, marcos do desenvolvimento, estimulação precoce, desenvolvimento motor, desenvolvimento cognitivo, desenvolvimento linguagem, criança pequena',
    canonical: '/blog/desenvolvimento-infantil'
  },
  'neurodivergencia': {
    title: 'Neurodivergência — O Que É, Tipos e Como Cuidar com Respeito e Ciência | Autitude',
    description: 'Neurodivergência: o que é, como se manifesta e por que o cuidado humanizado e baseado em evidências faz diferença. Autismo, TDAH, deficiências de aprendizagem e mais.',
    keywords: 'neurodivergência, neurodiversidade, autismo, TDAH, deficiência aprendizagem, transtorno coordenação motora, síndrome de Asperger, neurodivergente',
    canonical: '/blog/neurodivergencia'
  },
  'terapia-ocupacional-adulto': {
    title: 'Terapia Ocupacional para Adultos — Autonomia, Produtividade e Bem-Estar | Autitude',
    description: 'Terapia ocupacional para adultos: reabilitação cognitiva, adaptação funcional, manejo de estresse e promoção de independência. Atendimento especializado em Pindamonhangaba-SP.',
    keywords: 'terapia ocupacional adulto, reabilitação cognitiva, adaptação funcional, bem-estar adulto, autonomia adulto, terapia ocupacional Pindamonhangaba',
    canonical: '/blog/terapia-ocupacional-adulto'
  },
  'laudo-neuropsicologico': {
    title: 'Laudo Neuropsicológico — O Que É, Como Funciona e Por Que É Importante | Autitude',
    description: 'Laudo neuropsicológico: documento técnico-científico que caracteriza o perfil cognitivo e comportamental. Essencial para diagnóstico de TEA, TDAH e dificuldades de aprendizagem.',
    keywords: 'laudo neuropsicológico, relatório neuropsicológico, avaliação neuropsicológica laudo, diagnóstico neuropsicológico, laudo TEA, laudo TDAH',
    canonical: '/blog/laudo-neuropsicologico'
  },
  'avaliacao-desenvolvimento': {
    title: 'Avaliação do Desenvolvimento Infantil — Como Funciona e Quando Procurar | Autitude',
    description: 'Avaliação do desenvolvimento infantil: quando procurar, como funciona o processo e quais áreas são investigadas. Pindamonhangaba-SP.',
    keywords: 'avaliação desenvolvimento infantil, avaliação neuropsicológica criança, quando procurar avaliação, atraso desenvolvimento, avaliação precoce',
    canonical: '/blog/avaliacao-desenvolvimento'
  },
  'escola-inclusiva': {
    title: 'Escola Inclusiva — Como Adaptar o Ambiente Escolar para Neurodivergentes | Autitude',
    description: 'Escola inclusiva: estratégias pedagógicas, adaptações curriculares e apoio multidisciplinar para alunos neurodivergentes. Orientação para escolas e famílias.',
    keywords: 'escola inclusiva, inclusão escolar, adaptação curricular, aluno neurodivergente, educação inclusiva, escola TEA, escola TDAH, adaptacão sala aula',
    canonical: '/blog/escola-inclusiva'
  },
  'autismo-adulto': {
    title: 'Autismo no Adulto — Diagnóstico Tardio, Autoconhecimento e Apoio | Autitude',
    description: 'Autismo no adulto: diagnóstico tardio, como impacta a vida cotidiana, estratégias de adaptação e apoio profissional especializado em Pindamonhangaba-SP.',
    keywords: 'autismo adulto, TEA adulto, diagnóstico tardio autismo, autismo mulher, autismo no trabalho, autoconhecimento autismo, autismo vida adulta',
    canonical: '/blog/autismo-adulto'
  },
  'regulacao-emocional': {
    title: 'Regulação Emocional — Estratégias para Crianças e Adolescentes Neurodivergentes | Autitude',
    description: 'Regulação emocional em crianças e adolescentes neurodivergentes: o que é, por que é difícil e estratégias práticas para apoio familiar e escolar.',
    keywords: 'regulação emocional, regulação afetiva, crises emocionais criança, meltdowns, autoregulação, estratégias regulação, TDAH regulação emocional, TEA regulação',
    canonical: '/blog/regulacao-emocional'
  },
  'habilidades-sociais': {
    title: 'Habilidades Sociais — Desenvolvimento e Apoio para Neurodivergentes | Autitude',
    description: 'Habilidades sociais em crianças e adolescentes neurodivergentes: dificuldades comuns, intervenções eficazes e treinamento em interação social em Pindamonhangaba-SP.',
    keywords: 'habilidades sociais, interação social criança, dificuldade social neurodivergente, treinamento habilidades sociais, TEA habilidades sociais, amizade criança neurodivergente',
    canonical: '/blog/habilidades-sociais'
  },
  'alimentacao-neurodivergencia': {
    title: 'Alimentação e Neurodivergência — Seletividade Alimentar e Nutrição | Autitude',
    description: 'Alimentação e neurodivergência: seletividade alimentar, sensibilidades sensoriais na comida e estratégias nutricionais para crianças neurodivergentes.',
    keywords: 'seletividade alimentar, alimentação neurodivergente, TEA alimentação, sensibilidade sensorial comida, nutrição criança, picky eating, alimentação saudável criança',
    canonical: '/blog/alimentacao-neurodivergencia'
  },
  'exercicios-fisicos': {
    title: 'Exercícios Físicos e Neurodivergência — Benefícios para o Desenvolvimento | Autitude',
    description: 'Exercícios físicos para crianças e adolescentes neurodivergentes: benefícios motores, cognitivos e emocionais. Atividades recomendadas e como começar.',
    keywords: 'exercício físico criança, atividade física neurodivergente, benefícios exercício TEA, TDAH exercício, motricidade grossa, coordenação motora, esporte adaptado',
    canonical: '/blog/exercicios-fisicos'
  },
  'terapia-familiar': {
    title: 'Terapia Familiar — Apoio e Acolhimento para Famílias Neurodivergentes | Autitude',
    description: 'Terapia familiar para famílias de pessoas neurodivergentes: comunicação, vínculos, estratégias de convivência e cuidado mútuo em Pindamonhangaba-SP.',
    keywords: 'terapia familiar, família neurodivergente, apoio familiar, convivência autismo, comunicação familiar, orientação pais neurodivergência, cuidador família',
    canonical: '/blog/terapia-familiar'
  },
  'acolhimento-familia': {
    title: 'Acolhimento à Família — O Papel do Suporte no Cuidado Neurodivergente | Autitude',
    description: 'Acolhimento à família: por que o suporte emocional e prático é essencial no cuidado de pessoas neurodivergentes. Grupos de apoio, orientação e escuta qualificada.',
    keywords: 'acolhimento família, suporte familiar, cuidador neurodivergente, grupo de apoio, escuta qualificada, bem-estar cuidador, família TEA, família TDAH',
    canonical: '/blog/acolhimento-familia'
  },
  'inclusao-social': {
    title: 'Inclusão Social — Participação e Pessoas com Neurodivergência | Autitude',
    description: 'Inclusão social de pessoas neurodivergentes: barreiras, oportunidades e estratégias para participação plena na sociedade. Pindamonhangaba-SP.',
    keywords: 'inclusão social, participação social neurodivergente, barreiras inclusão, direitos neurodivergente, cidadania inclusão, convivência social',
    canonical: '/blog/inclusao-social'
  },
  'comunicacao-alternativa': {
    title: 'Comunicação Alternativa e Aumentativa — Facilitando a Expressão | Autitude',
    description: 'Comunicação alternativa e aumentativa (CAA): recursos e estratégias para pessoas com dificuldade de fala ou linguagem. Pranchas de comunicação, AAC e mais.',
    keywords: 'comunicação alternativa, comunicação aumentativa, CAA, AAC, prancha comunicação, linguagem alternativa, mudo funcional, pré-linguagem',
    canonical: '/blog/comunicacao-alternativa'
  },
  'deficiencia-aprendizagem': {
    title: 'Deficiência de Aprendizagem — Tipos, Diagnóstico e Intervenção | Autitude',
    description: 'Deficiências de aprendizagem: dislexia, disgrafia, discalculia, déficit de processamento auditivo. Avaliação especializada e intervenção eficaz em Pindamonhangaba-SP.',
    keywords: 'deficiência aprendizagem, dislexia, disgrafia, discalculia, déficit processamento auditivo, Transtorno da Leitura, Transtorno da Escrita, Transtorno da Calculação',
    canonical: '/blog/deficiencia-aprendizagem'
  },
  'ansiedade-infantil': {
    title: 'Ansiedade Infantil — Identificação, Sinais e Tratamento em Crianças | Autitude',
    description: 'Ansiedade infantil: como identificar sinais, diferenciais com TEA e TDAH, estratégias de manejo e tratamento especializado em Pindamonhangaba-SP.',
    keywords: 'ansiedade infantil, ansiedade criança, medo excessivo, TAG criança, fobia escolar, ansiedade separação, transtorno ansiedade, TEA ansiedade',
    canonical: '/blog/ansiedade-infantil'
  },
  'sono-neurodivergencia': {
    title: 'Sono e Neurodivergência — Distúrbios do Sono em Crianças Neurodivergentes | Autitude',
    description: 'Sono e neurodivergência: distúrbios do sono em crianças com TEA e TDAH, impacto no desenvolvimento e estratégias para melhorar a qualidade do sono.',
    keywords: 'sono criança, distúrbio sono neurodivergente, insônia criança TEA, TDAH sono, higiene do sono, melatonina criança, sono fragmentado, dificuldade dormir',
    canonical: '/blog/sono-neurodivergencia'
  },
  'brincadeira-desenvolvimento': {
    title: 'Brincadeira e Desenvolvimento — O Papel do Brincar no Crescimento Infantil | Autitude',
    description: 'Brincadeira e desenvolvimento: como o brincar contribui para a aprendizagem, socialização e regulação emocional. Tipos de brincadeira e quando procurar apoio.',
    keywords: 'brincadeira criança, brincar desenvolvimento, brinquedo terapêutico, brincadeira simbólica, imaginação criança, ludoterapia, brincar e aprendizagem',
    canonical: '/blog/brincadeira-desenvolvimento'
  },

  // === BLOG INDEX ===
  'blog': {
    title: 'Blog — Conteúdo sobre Desenvolvimento Infantil e Neurodivergência | Autitude',
    description: 'Artigos sobre desenvolvimento infantil, neurodivergência, neuropsicologia, fonoaudiologia, terapia ocupacional e cuidado integrado para famílias.',
    keywords: 'blog, artigos, desenvolvimento infantil, neurodivergência, educação, saúde infantil',
    canonical: '/blog'
  }
}

const content = seoContent[slug] || {
  title: 'Autitude - Desenvolvimento e Ação Humana',
  description: 'Espaço especializado em crianças, adolescentes, adultos e famílias, com foco no público neurodivergente. Pindamonhangaba-SP.',
  keywords: 'autitude, neurodivergência, Pindamonhangaba, desenvolvimento infantil',
  canonical: `/${slug}`
}

const siteBase = 'https://autitude.com.br'

// Related posts mapping for internal cross-linking
const relatedPosts = {
  'terapia-ocupacional-infantil': ['integracao-sensorial', 'desenvolvimento-infantil', 'terapia-ocupacional-adulto'],
  'integracao-sensorial': ['terapia-ocupacional-infantil', 'autismo-terapia', 'alimentacao-neurodivergencia'],
  'neuropsicologia-infantil': ['tdah-tratamento', 'autismo-terapia', 'laudo-neuropsicologico'],
  'neuropsicopedagogia': ['dificuldades-aprendizagem', 'escola-inclusiva', 'deficiencia-aprendizagem'],
  'fonoaudiologia-infantil': ['comunicacao-alternativa', 'autismo-terapia', 'desenvolvimento-infantil'],
  'autismo-terapia': ['terapia-aba', 'integracao-sensorial', 'habilidades-sociais'],
  'tdah-tratamento': ['neuropsicologia-infantil', 'regulacao-emocional', 'exercicios-fisicos'],
  'terapia-aba': ['autismo-terapia', 'habilidades-sociais', 'regulacao-emocional'],
  'dificuldades-aprendizagem': ['neuropsicopedagogia', 'escola-inclusiva', 'deficiencia-aprendizagem'],
  'desenvolvimento-infantil': ['terapia-ocupacional-infantil', 'brincadeira-desenvolvimento', 'avaliacao-desenvolvimento'],
  'neurodivergencia': ['autismo-terapia', 'tdah-tratamento', 'inclusao-social'],
  'terapia-ocupacional-adulto': ['terapia-ocupacional-infantil', 'laudo-neuropsicologico', 'autismo-adulto'],
  'laudo-neuropsicologico': ['neuropsicologia-infantil', 'avaliacao-desenvolvimento', 'autismo-adulto'],
  'avaliacao-desenvolvimento': ['desenvolvimento-infantil', 'neuropsicologia-infantil', 'laudo-neuropsicologico'],
  'escola-inclusiva': ['neuropsicopedagogia', 'dificuldades-aprendizagem', 'inclusao-social'],
  'autismo-adulto': ['autismo-terapia', 'terapia-ocupacional-adulto', 'neurodivergencia'],
  'regulacao-emocional': ['tdah-tratamento', 'habilidades-sociais', 'ansiedade-infantil'],
  'habilidades-sociais': ['autismo-terapia', 'terapia-aba', 'inclusao-social'],
  'alimentacao-neurodivergencia': ['integracao-sensorial', 'autismo-terapia', 'terapia-ocupacional-infantil'],
  'exercicios-fisicos': ['tdah-tratamento', 'regulacao-emocional', 'habilidades-sociais'],
  'terapia-familiar': ['acolhimento-familia', 'autismo-terapia', 'inclusao-social'],
  'acolhimento-familia': ['terapia-familiar', 'neurodivergencia', 'regulacao-emocional'],
  'inclusao-social': ['escola-inclusiva', 'habilidades-sociais', 'neurodivergencia'],
  'comunicacao-alternativa': ['fonoaudiologia-infantil', 'autismo-terapia', 'habilidades-sociais'],
  'deficiencia-aprendizagem': ['dificuldades-aprendizagem', 'neuropsicopedagogia', 'escola-inclusiva'],
  'ansiedade-infantil': ['regulacao-emocional', 'neuropsicologia-infantil', 'tdah-tratamento'],
  'sono-neurodivergencia': ['tdah-tratamento', 'autismo-terapia', 'regulacao-emocional'],
  'brincadeira-desenvolvimento': ['desenvolvimento-infantil', 'habilidades-sociais', 'alimentacao-neurodivergencia']
}

const currentRelated = computed(() => {
  const slugs = relatedPosts[slug] || []
  return slugs.map(s => ({
    slug: s,
    title: seoContent[s]?.title?.split(' | ')[0] || s
  }))
})

useHead({
  title: content.title,
  meta: [
    { name: 'description', content: content.description },
    { name: 'keywords', content: content.keywords },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { name: 'author', content: 'Autitude - Desenvolvimento e Ação Humana' },
    { property: 'og:title', content: content.title },
    { property: 'og:description', content: content.description },
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: '2024-06-01' },
    { property: 'article:modified_time', content: '2026-06-09' },
    { property: 'article:author', content: 'Autitude - Desenvolvimento e Ação Humana' },
    { property: 'article:section', content: 'Neurodivergência' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:url', content: `${siteBase}${content.canonical}` },
    { property: 'og:image', content: `${siteBase}/full-logo.png` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: 'Autitude - Desenvolvimento e Ação Humana' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: content.title },
    { name: 'twitter:description', content: content.description },
    { name: 'twitter:image', content: `${siteBase}/full-logo.png` },
    { name: 'twitter:creator', content: '@clinicaautitude' }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}${content.canonical}` },
    { rel: 'alternate', href: `${siteBase}${content.canonical}`, hreflang: 'pt-BR' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: content.title.split(' | ')[0],
        description: content.description,
        author: {
          '@type': 'Person',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          url: 'https://autitude.com.br/equipe'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          url: siteBase,
          logo: {
            '@type': 'ImageObject',
            url: `${siteBase}/full-logo.png`
          }
        },
        datePublished: '2024-06-01',
        dateModified: '2026-06-09',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${siteBase}${content.canonical}`
        },
        inLanguage: 'pt-BR',
        about: {
          '@type': 'MedicalBusiness',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rua Major José dos Santos Moreira, 328',
            addressLocality: 'Pindamonhangaba',
            addressRegion: 'SP',
            addressCountry: 'BR'
          }
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.seo-heading', '.seo-paragraph']
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: siteBase },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteBase}/blog` },
          { '@type': 'ListItem', position: 3, name: content.title.split(' | ')[0], item: `${siteBase}${content.canonical}` }
        ]
      })
    }
  ]
})

onMounted(() => {
  setTimeout(() => {
    navigateTo('/', { replace: true })
  }, 2000)
})
</script>

<template>
  <div class="seo-blog-page">
    <article class="blog-content" itemscope itemtype="https://schema.org/WebPage">
      <nav class="blog-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Início</a>
        <span aria-hidden="true">/</span>
        <a href="/blog">Blog</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{{ content.title.split(' | ')[0] }}</span>
      </nav>

      <header>
        <h1 itemprop="name">{{ content.title }}</h1>
        <p class="blog-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
          <span itemprop="name">Autitude - Desenvolvimento e Ação Humana</span>
          <span class="author-separator">|</span>
          <time itemprop="datePublished" datetime="2024-06-01">Publicado em 01/06/2024</time>
          <span class="author-separator">|</span>
          <time itemprop="dateModified" datetime="2026-06-09">Atualizado em 09/06/2026</time>
        </p>
      </header>

      <section class="seo-answer" aria-label="Resumo">
        <p class="seo-paragraph">{{ content.description }}</p>
      </section>

      <section class="blog-keywords" aria-label="Temas relacionados">
        <span class="keyword-tag" v-for="keyword in content.keywords.split(', ').slice(0, 5)" :key="keyword">
          {{ keyword }}
        </span>
      </section>

      <section class="blog-related" v-if="currentRelated.length" aria-label="Artigos relacionados">
        <h2>Artigos Relacionados</h2>
        <div class="related-grid">
          <a
            v-for="post in currentRelated"
            :key="post.slug"
            :href="`/blog/${post.slug}`"
            class="related-link"
          >
            {{ post.title }}
          </a>
        </div>
      </section>

      <section class="blog-cta">
        <p>Conteúdo indexado por motores de busca. Redirecionando para a página principal...</p>
        <a href="/" class="btn btn-primary">Ir para o Início</a>
      </section>
    </article>
  </div>
</template>

<style scoped>
.seo-blog-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem 2rem;
}

.blog-content {
  max-width: 700px;
  text-align: center;
}

.blog-breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
  font-size: 0.8125rem;
  color: var(--text-light);
}

.blog-breadcrumb a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}

.blog-breadcrumb a:hover {
  color: var(--primary);
}

.blog-breadcrumb [aria-current="page"] {
  color: var(--text);
  font-weight: 500;
}

.blog-content h1 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.blog-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.blog-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.875rem;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.author-separator {
  color: var(--border);
}

.seo-answer {
  background: var(--lilac-soft);
  border-left: 4px solid var(--primary);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 1.5rem;
  margin-bottom: 2.5rem;
  text-align: left;
}

.seo-paragraph {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: var(--text);
  font-weight: 500;
}

.blog-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.keyword-tag {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  background: var(--lilac-soft);
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--lilac-deep);
}

.blog-related {
  margin-bottom: 2.5rem;
  text-align: left;
}

.blog-related h2 {
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

.related-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.related-link {
  display: block;
  padding: 0.75rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--text);
  font-size: 0.875rem;
  transition: all 0.2s;
}

.related-link:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateX(4px);
}

.blog-cta {
  margin-top: 1rem;
}

.blog-cta p {
  color: var(--text-light);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

.blog-cta .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 640px) {
  .seo-blog-page {
    padding: 5rem 1rem 2rem;
  }

  .blog-description {
    font-size: 1rem;
  }
}
</style>
