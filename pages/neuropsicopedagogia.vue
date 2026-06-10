<script setup>
import { BookOpen, ClipboardList, School, Users } from 'lucide-vue-next'
import DotGrid from '~/components/DotGrid.vue'

const { whatsappUrl } = useContact()

const openFaq = ref(null)

const siteBase = 'https://autitude.com.br'

useHead({
  title: 'Neuropsicopedagogia em Pindamonhangaba | Autitude',
  meta: [
    { name: 'description', content: 'Neuropsicopedagogia em Pindamonhangaba-SP: avaliação de dificuldades de aprendizagem, plano pedagógico individualizado e apoio escolar para crianças e adolescentes neurodivergentes.' },
    { name: 'keywords', content: 'neuropsicopedagogia, dificuldades de aprendizagem, plano pedagógico individualizado, apoio escolar, neuropsicopedagogo Pindamonhangaba, neurodivergência, dislexia, TDAH' },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { name: 'author', content: 'Autitude - Desenvolvimento e Ação Humana' },
    { property: 'og:title', content: 'Neuropsicopedagogia em Pindamonhangaba | Autitude' },
    { property: 'og:description', content: 'Neuropsicopedagogia em Pindamonhangaba: avaliação de dificuldades de aprendizagem, plano pedagógico individualizado e apoio escolar para crianças e adolescentes.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:url', content: `${siteBase}/neuropsicopedagogia` },
    { property: 'og:image', content: `${siteBase}/full-logo.png` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Neuropsicopedagogia em Pindamonhangaba | Autitude' },
    { name: 'twitter:description', content: 'Neuropsicopedagogia em Pindamonhangaba: avaliação de dificuldades de aprendizagem, plano pedagógico individualizado e apoio escolar.' },
    { name: 'geo.region', content: 'BR-SP' },
    { name: 'geo.placename', content: 'Pindamonhangaba' },
    { name: 'ICBM', content: '-22.9309, -45.4607' },
    { name: 'geo.position', content: '-22.9309;-45.4607' },
    { name: 'date-published', content: '2024-01-01' },
    { name: 'date-modified', content: '2026-06-09' }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}/neuropsicopedagogia` },
    { rel: 'alternate', href: `${siteBase}/neuropsicopedagogia`, hreflang: 'pt-BR' }
  ],
  script: [
    {
      type: 'application/ld+json',
      key: 'medical-webpage',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Neuropsicopedagogia em Pindamonhangaba | Autitude',
        description: 'Avaliação de dificuldades de aprendizagem, plano pedagógico individualizado e apoio escolar para crianças e adolescentes.',
        url: `${siteBase}/neuropsicopedagogia`,
        datePublished: '2024-01-01',
        dateModified: '2026-06-09',
        about: {
          '@type': 'MedicalTherapy',
          name: 'Neuropsicopedagogia',
          description: 'Avaliação e plano pedagógico individualizado, com identificação de desafios e apoio ao desenvolvimento escolar.'
        },
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          url: siteBase,
          telephone: '+55-12-99196-8683',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rua Major José dos Santos Moreira, 328',
            addressLocality: 'Pindamonhangaba',
            addressRegion: 'SP',
            addressCountry: 'BR',
            postalCode: '12410-050'
          }
        }
      })
    },
    {
      type: 'application/ld+json',
      key: 'breadcrumb',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: siteBase },
          { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${siteBase}/servicos` },
          { '@type': 'ListItem', position: 3, name: 'Neuropsicopedagogia', item: `${siteBase}/neuropsicopedagogia` }
        ]
      })
    },
    {
      type: 'application/ld+json',
      key: 'faqpage',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        name: 'Perguntas Frequentes — Neuropsicopedagogia | Autitude',
        description: 'Respostas para perguntas comuns sobre Neuropsicopedagogia na Autitude em Pindamonhangaba-SP.',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'O que é Neuropsicopedagogia?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A neuropsicopedagogia investiga as dificuldades de aprendizagem considerando os aspectos neuropsicológicos e pedagógicos do desenvolvimento. Na Autitude, realiza-se uma avaliação completa que identifica dislexia, disgrafia, discalculia e outros transtornos que afetam o desempenho escolar, elaborando um plano pedagógico individualizado.'
            }
          },
          {
            '@type': 'Question',
            name: 'Para quem é indicado?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'É indicada para crianças e adolescentes que apresentam baixo rendimento escolar, dificuldades na leitura e escrita, problemas com matemática, desinteresse pelos estudos ou diagnóstico prévio de transtornos de aprendizagem. Também atende jovens que precisam de adaptações curriculares.'
            }
          },
          {
            '@type': 'Question',
            name: 'Como funciona o atendimento na Autitude?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Após a avaliação inicial, a neuropsicopedagoga elabora um plano de intervenção personalizado com estratégias pedagógicas específicas. O acompanhamento inclui orientação à escola e à família, com reavaliações periódicas para monitorar o progresso e ajustar as estratégias conforme necessário.'
            }
          }
        ]
      })
    }
  ]
})

const benefits = [
  {
    icon: ClipboardList,
    title: 'Avaliação de dificuldades de aprendizagem',
    description: 'Identificação precisa de desafios em leitura, escrita, raciocínio lógico-matemático e compreensão, considerando as funções cognitivas e emocionais envolvidas no processo de aprender.'
  },
  {
    icon: BookOpen,
    title: 'Plano pedagógico individualizado',
    description: 'Construção de um plano de ensino personalizado que respeita o ritmo, o estilo de aprendizagem e as necessidades específicas de cada criança ou adolescente.'
  },
  {
    icon: School,
    title: 'Apoio escolar',
    description: 'Articulação com a escola para implementar estratégias pedagógicas inclusivas, adaptações curriculares e acompanhamento do progresso acadêmico.'
  },
  {
    icon: Users,
    title: 'Orientação familiar',
    description: 'Suporte às famílias com orientações práticas para apoiar o aprendizado em casa, fortalecer a autoestima e criar uma rotina de estudos positiva.'
  }
]

const faqs = [
  {
    question: 'Qual a diferença entre neuropsicopedagogia e psicopedagogia?',
    answer: 'A neuropsicopedagogia integra conhecimentos da neurociência, da psicologia cognitiva e da pedagogia, investigando como as funções cerebrais impactam a aprendizagem. Ela vai além da psicopedagogia tradicional ao considerar aspectos neurobiológicos — como memória, atenção e funções executivas — e sua relação direta com o desempenho escolar. É uma abordagem mais abrangente para compreender e intervir nas dificuldades de aprendizagem.'
  },
  {
    question: 'Como saber se meu filho precisa de neuropsicopedagogia?',
    answer: 'Sinais como dificuldade persistente em leitura e escrita, troca de letras após a fase de alfabetização, baixo rendimento escolar apesar de esforço, desinteresse pelos estudos, dificuldade em acompanhar a turma, frustração com tarefas escolares e quedas nas notas podem indicar a necessidade de uma avaliação neuropsicopedagógica.'
  },
  {
    question: 'Como funciona o plano pedagógico individualizado?',
    answer: 'O plano pedagógico individualizado (PPI) é construído a partir da avaliação neuropsicopedagógica e considera o perfil único de cada aluno. Ele define objetivos de aprendizagem, estratégias de ensino, materiais adaptados, prazos e formas de acompanhamento. O PPI é revisado periodicamente e conta com a participação da família e da escola para garantir que as metas sejam alcançadas.'
  },
  {
    question: 'A neuropsicopedagogia ajuda em quais condições?',
    answer: 'A neuropsicopedagogia auxilia em condições como dislexia, discalculia, disgrafia, TDAH, Transtorno do Espectro Autista (TEA), Transtorno do Processamento Auditivo Central, dificuldades de aprendizagem associadas a condições genéticas e também em casos sem diagnóstico fechado, onde há queixas de baixo rendimento escolar ou dificuldade de acompanhamento pedagógico.'
  }
]
</script>

<template>
  <div class="service-page">
    <section class="hero-section">
      <div class="hero-bg-grid">
        <ClientOnly>
          <DotGrid
            :dot-size="6"
            :gap="36"
            base-color="#6B4FA3"
            active-color="#3D2D5E"
            :proximity="120"
            :speed-trigger="100"
            :shock-radius="200"
            :shock-strength="4"
            :max-speed="5000"
            :resistance="750"
            :return-duration="1.5"
          />
        </ClientOnly>
      </div>
      <div class="container">
        <span class="section-tag texture-hd">Neuropsicopedagogia</span>
        <h1>Neuropsicopedagogia em Pindamonhangaba: Apoio para Dificuldades de Aprendizagem</h1>

        <div class="seo-answer seo-text">
          <p class="seo-paragraph texture-hd">
            A <strong>Neuropsicopedagogia</strong> é a especialidade que une neurociência, psicologia e pedagogia para compreender
            e intervir nas <strong>dificuldades de aprendizagem</strong>. Em Pindamonhangaba-SP, a Autitude oferece
            <strong>avaliação neuropsicopedagógica completa</strong> e <strong>planos pedagógicos individualizados</strong>
            para crianças e adolescentes neurodivergentes. O objetivo é identificar os desafios específicos de cada pessoa
            e construir estratégias personalizadas que promovam o sucesso escolar, a autonomia e a autoestima.
          </p>
        </div>

        <div class="service-overview">
          <div class="overview-content">
            <h2>O que é a Neuropsicopedagogia?</h2>
            <h2>Como saber se meu filho precisa de neuropsicopedagogia?</h2>
            <p class="overview-text">
              A Neuropsicopedagogia investiga como o cérebro aprende e processa informações, identificando as causas
              neurobiológicas das dificuldades escolares. Diferente da abordagem pedagógica tradicional, ela considera
              as funções cognitivas — atenção, memória, funções executivas, linguagem — e sua influência direta na
              aprendizagem. A partir dessa compreensão aprofundada, são propostas intervenções personalizadas que
              respeitam o ritmo e o perfil de cada estudante.
            </p>
            <p class="overview-text">
              Na Autitude, a neuropsicopedagogia atua em estreita colaboração com a <NuxtLink to="/neuropsicologia">neuropsicologia</NuxtLink>
              e a <NuxtLink to="/fonoaudiologia">fonoaudiologia</NuxtLink>, garantindo uma visão integrada do desenvolvimento
              e da aprendizagem. A família e a escola são parceiras ativas nesse processo.
            </p>

            <div class="benefits-list">
              <div class="benefit-item texture-hd-paper" v-for="benefit in benefits" :key="benefit.title">
                <div class="benefit-icon-wrap texture-hd">
                  <component :is="benefit.icon" :size="24" class="icon-primary" />
                </div>
                <div>
                  <h3>{{ benefit.title }}</h3>
                  <p>{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="faq-section">
          <h2>Perguntas frequentes sobre Neuropsicopedagogia</h2>
          <div class="faq-list">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="faq-item texture-hd-paper"
              :class="{ open: openFaq === index }"
            >
              <div
                class="faq-question"
                role="button"
                tabindex="0"
                :aria-expanded="openFaq === index"
                @click="openFaq = openFaq === index ? null : index"
                @keydown.enter.prevent="openFaq = openFaq === index ? null : index"
                @keydown.space.prevent="openFaq = openFaq === index ? null : index"
              >
                <h3>{{ faq.question }}</h3>
                <div class="faq-toggle">
                  <span></span>
                </div>
              </div>
              <Transition name="accordion">
                <div v-show="openFaq === index" class="faq-answer">
                  <p>{{ faq.answer }}</p>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        <CtaSection
          title="Agende uma avaliação neuropsicopedagógica"
          tagline="💜 Cuidamos de pessoas. Potencializamos possibilidades."
          primary-btn="/agendar"
          primary-btn-text="Agendar Agora"
          :whatsapp-btn="true"
          :show-contact="false"
          :colors="['#6B4FA3', '#8FC176', '#8FB1F0', '#3D2D5E', '#5C9F45']"
          :color-bends-props="{ rotation: 28, speed: 0.16, scale: 1.3, frequency: 1.35, warpStrength: 1.05, mouseInfluence: 0.45, parallax: 0.35, noise: 0.055 }"
        />
      </div>
    </section>
  </div>
    <!-- Hidden SEO content for crawlers -->
    <section class="seo-faq-hidden" aria-label="Perguntas Frequentes"
      style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;">
      <h2>Neuropsicopedagogia em Pindamonhangaba — Perguntas Frequentes</h2>
      <p>A <strong>Neuropsicopedagogia</strong> na <strong>Autitude em Pindamonhangaba-SP</strong> integra neurociência, psicologia e pedagogia para avaliar e intervir em <strong>dificuldades de aprendizagem</strong>, criando planos pedagógicos individualizados para crianças e adolescentes neurodivergentes.</p>
      <h2>O que é comportamento opositor (TOD) no contexto escolar?</h2>
      <p>O Transtorno Opositor-Desafiante (TOD) se manifesta como padrão persistente de irritabilidade e desafio a figuras de autoridade na escola, frequentemente confundido com má conduta. Veja estratégias em <a href="/blog/comportamento-opositor-tod-escola">comportamento opositor TOD na escola</a>.</p>
      <h2>Como diferenciar birra de crise sensorial?</h2>
      <p>A birra é intencional, enquanto a crise sensorial é involuntária. Crianças neurodivergentes podem ter crises sensoriais que exigem intervenção específica. Leia mais em <a href="/blog/birra-ou-crise-sensorial">birra ou crise sensorial</a>.</p>
      <h2>Quais os marcos da fala infantil?</h2>
      <p>Balbucio aos 6 meses, primeiras palavras aos 12 meses, combinação de 2 palavras aos 24 meses e frases completas aos 36 meses. Atrasos indicam necessidade de avaliação. Confira em <a href="/blog/marcos-fala-infantil">marcos da fala infantil</a>.</p>
      <h2>O que é seletividade alimentar no autismo?</h2>
      <p>A seletividade alimentar no TEA está relacionada à hipersensibilidade sensorial a texturas, cores e cheiros. Saiba como intervir em <a href="/blog/seletividade-alimentar-autismo">seletividade alimentar no autismo</a>.</p>
    </section>
</template>

<style scoped>
.icon-primary {
  color: var(--lilac-deep);
}

.hero-section {
  padding-top: var(--space-section-top);
  padding-bottom: clamp(2.5rem, 6vw, 4rem);
  position: relative;
  overflow: hidden;
}

.hero-bg-grid {
  position: fixed;
  inset: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
}

.hero-section .container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
}

.section-tag {
  display: inline-block;
  padding: 0.375rem 1rem;
  background: var(--lilac-soft);
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-full);
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  font-weight: 600;
  color: var(--lilac-deep);
  margin-bottom: 1rem;
}

h1 {
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
  max-width: 800px;
}

.seo-answer {
  margin: 0 auto clamp(2rem, 5vw, 3rem);
  max-width: 800px;
}

.seo-paragraph {
  font-size: clamp(0.9375rem, 1.5vw + 0.25rem, 1.125rem);
  line-height: 1.8;
  color: var(--text-secondary);
  background: var(--lilac-soft);
  border-left: 4px solid var(--primary);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 1.5rem 2rem;
  text-align: left;
}

.seo-paragraph strong {
  color: var(--text);
}

.service-overview {
  margin-bottom: clamp(2.5rem, 6vw, 4rem);
}

.overview-content h2 {
  margin-bottom: 1.25rem;
}

.overview-text {
  font-size: clamp(0.9375rem, 1.5vw + 0.25rem, 1.125rem);
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.overview-text a {
  color: var(--primary);
  text-decoration: underline;
  text-decoration-color: var(--lilac-light);
  text-underline-offset: 2px;
  transition: color 0.2s, text-decoration-color 0.2s;
}

.overview-text a:hover {
  color: var(--lilac-deep);
  text-decoration-color: var(--primary);
}

.benefits-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
  margin-top: 2rem;
}

.benefit-item {
  display: flex;
  gap: 1rem;
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: clamp(1.25rem, 3vw, 1.75rem);
  box-shadow: var(--shadow-xs);
  transition: transform 0.35s var(--ease-out-expo), box-shadow 0.35s var(--ease-out-expo);
}

.benefit-item:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.benefit-icon-wrap {
  width: 48px;
  height: 48px;
  min-width: 48px;
  background: var(--lilac-soft);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-item h3 {
  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
  margin-bottom: 0.375rem;
}

.benefit-item p {
  font-size: clamp(0.8125rem, 1.2vw, 0.9375rem);
  line-height: 1.6;
  color: var(--text-secondary);
}

.faq-section {
  margin-bottom: clamp(2.5rem, 6vw, 4rem);
}

.faq-section h2 {
  margin-bottom: 1.5rem;
}

.faq-list {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.faq-item.open {
  border-color: var(--primary);
  box-shadow: var(--shadow-sm);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  user-select: none;
}

.faq-question h3 {
  flex: 1;
  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
  font-weight: 600;
}

.faq-toggle {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.faq-toggle span {
  display: block;
  width: 12px;
  height: 2px;
  background: var(--text-secondary);
  position: relative;
  transition: background-color 0.3s;
}

.faq-toggle span::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 12px;
  background: var(--text-secondary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s, opacity 0.3s;
}

.faq-item.open .faq-toggle span::after {
  transform: translate(-50%, -50%) rotate(90deg);
  opacity: 0;
}

.faq-answer {
  padding: 0 1.5rem 1.25rem;
}

.faq-answer p {
  font-size: clamp(0.875rem, 1.3vw, 1rem);
  line-height: 1.7;
  color: var(--text-secondary);
}

.accordion-enter-active,
.accordion-leave-active {
  transition: opacity 0.3s, max-height 0.3s;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 300px;
}

@media (max-width: 640px) {
  .faq-question {
    padding: 1rem 1.25rem;
  }

  .faq-question h3 {
    font-size: clamp(0.875rem, 4vw, 0.9375rem);
  }

  .benefits-list {
    grid-template-columns: 1fr;
  }
}
</style>
