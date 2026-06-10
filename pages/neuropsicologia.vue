<script setup>
import { Brain, Search, Heart, Users } from 'lucide-vue-next'
import DotGrid from '~/components/DotGrid.vue'

const { whatsappUrl } = useContact()

const openFaq = ref(null)

const siteBase = 'https://autitude.com.br'

useHead({
  title: 'Neuropsicologia em Pindamonhangaba | Autitude',
  meta: [
    { name: 'description', content: 'Avaliação neuropsicológica em Pindamonhangaba-SP. Rastreamento de TEA e TDAH, desenvolvimento cognitivo, emocional e comportamental. Orientação familiar especializada.' },
    { name: 'keywords', content: 'neuropsicologia, avaliação neuropsicológica, neuropsicólogo Pindamonhangaba, rastreamento TEA, rastreamento TDAH, desenvolvimento cognitivo, neurodivergência' },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { name: 'author', content: 'Autitude - Desenvolvimento e Ação Humana' },
    { property: 'og:title', content: 'Neuropsicologia em Pindamonhangaba | Autitude' },
    { property: 'og:description', content: 'Avaliação neuropsicológica completa, rastreamento de neurodivergências e desenvolvimento cognitivo, emocional e comportamental em Pindamonhangaba-SP.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:url', content: `${siteBase}/neuropsicologia` },
    { property: 'og:image', content: `${siteBase}/full-logo.png` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Neuropsicologia em Pindamonhangaba | Autitude' },
    { name: 'twitter:description', content: 'Avaliação neuropsicológica completa, rastreamento de neurodivergências e desenvolvimento cognitivo, emocional e comportamental em Pindamonhangaba-SP.' },
    { name: 'geo.region', content: 'BR-SP' },
    { name: 'geo.placename', content: 'Pindamonhangaba' },
    { name: 'ICBM', content: '-22.9309, -45.4607' },
    { name: 'geo.position', content: '-22.9309;-45.4607' },
    { name: 'date-published', content: '2024-01-01' },
    { name: 'date-modified', content: '2026-06-09' }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}/neuropsicologia` },
    { rel: 'alternate', href: `${siteBase}/neuropsicologia`, hreflang: 'pt-BR' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Neuropsicologia em Pindamonhangaba | Autitude',
        description: 'Avaliação neuropsicológica completa, rastreamento de neurodivergências e desenvolvimento cognitivo, emocional e comportamental.',
        url: `${siteBase}/neuropsicologia`,
        datePublished: '2024-01-01',
        dateModified: '2026-06-09',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.seo-paragraph', '.seo-faq-hidden']
        },
        about: {
          '@type': 'MedicalTherapy',
          name: 'Neuropsicologia',
          description: 'Investigação detalhada do funcionamento cognitivo, emocional e comportamental para compreender o perfil único de cada pessoa.'
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
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: siteBase },
          { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${siteBase}/servicos` },
          { '@type': 'ListItem', position: 3, name: 'Neuropsicologia', item: `${siteBase}/neuropsicologia` }
        ]
      })
    },
    {
      type: 'application/ld+json',
      key: 'faqpage',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        name: 'Neuropsicologia em Pindamonhangaba — Perguntas Frequentes',
        description: 'Perguntas frequentes sobre avaliação neuropsicológica, autismo, TDAH, diagnóstico tardio e mais.',
        url: `${siteBase}/neuropsicologia`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'O que é a avaliação neuropsicológica?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A avaliação neuropsicológica é um processo investigativo que analisa o funcionamento cognitivo, emocional e comportamental por meio de entrevistas, testes padronizados e observação clínica, mapeando habilidades e dificuldades em áreas como memória, atenção, funções executivas, linguagem e raciocínio.'
            }
          },
          {
            '@type': 'Question',
            name: 'Qual a diferença entre autismo e TDAH na infância?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Embora compartilhem sintomas como desatenção, o TEA envolve prejuízos na comunicação social e comportamentos repetitivos, enquanto o TDAH tem como núcleo a desregulação da atenção e hiperatividade.'
            }
          },
          {
            '@type': 'Question',
            name: 'Quando meu filho precisa de uma avaliação neuropsicológica?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Quando há suspeita de dificuldades de aprendizagem, atrasos no desenvolvimento, desatenção frequente, hiperatividade, impulsividade, dificuldades de interação social ou alterações no comportamento que impactam a vida escolar e familiar.'
            }
          }
        ]
      })
    }
  ]
})

const benefits = [
  {
    icon: Search,
    title: 'Avaliação cognitiva completa',
    description: 'Investigação detalhada das funções cognitivas como memória, atenção, funções executivas, linguagem e raciocínio para compreender o perfil neuropsicológico de cada pessoa.'
  },
  {
    icon: Brain,
    title: 'Rastreamento de neurodivergências',
    description: 'Identificação de sinais de Transtorno do Espectro Autista (TEA), TDAH, dislexia e outras condições do neurodesenvolvimento por meio de instrumentos padronizados e validados.'
  },
  {
    icon: Heart,
    title: 'Desenvolvimento emocional e comportamental',
    description: 'Acompanhamento integrado das dimensões socioemocionais, auxiliando na regulação emocional, no comportamento adaptativo e na qualidade de vida.'
  },
  {
    icon: Users,
    title: 'Orientação familiar',
    description: 'Suporte e acolhimento às famílias com orientações personalizadas, devolutivas detalhadas e encaminhamentos que integram o cuidado no dia a dia.'
  }
]

const faqs = [
  {
    question: 'O que é a avaliação neuropsicológica?',
    answer: 'A avaliação neuropsicológica é um processo investigativo que analisa o funcionamento cognitivo, emocional e comportamental de uma pessoa. Por meio de entrevistas, testes padronizados e observação clínica, o neuropsicólogo mapeia habilidades e dificuldades em áreas como memória, atenção, funções executivas, linguagem e raciocínio. O resultado orienta diagnósticos, planos terapêuticos e intervenções personalizadas.'
  },
  {
    question: 'Quando meu filho precisa de uma avaliação neuropsicológica?',
    answer: 'Quando há suspeita de dificuldades de aprendizagem, atrasos no desenvolvimento, desatenção frequente, hiperatividade, impulsividade, dificuldades de interação social ou alterações no comportamento que impactam a vida escolar e familiar. A avaliação é recomendada também para crianças com diagnóstico prévio que precisam de um plano terapêutico mais direcionado.'
  },
  {
    question: 'Quanto tempo dura a avaliação?',
    answer: 'O processo de avaliação neuropsicológica costuma durar de 4 a 8 sessões, dependendo da complexidade do caso e da idade do paciente. Cada sessão tem aproximadamente 50 minutos. Ao final, é realizada uma devolutiva detalhada com a família, apresentando os resultados, orientações e recomendações terapêuticas.'
  },
  {
    question: 'A avaliação neuropsicológica fecha diagnóstico?',
    answer: 'Sim, a avaliação neuropsicológica fornece subsídios fundamentais para o diagnóstico de condições como TEA, TDAH, dislexia e outros transtornos do neurodesenvolvimento. O neuropsicólogo integra os resultados dos testes com a história clínica e observações comportamentais, podendo fechar diagnósticos ou indicar a necessidade de investigação complementar com outros profissionais.'
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
        <span class="section-tag">Neuropsicologia</span>
        <h1>Neuropsicologia em Pindamonhangaba: Avaliação e Desenvolvimento Cognitivo</h1>

        <div class="seo-answer">
          <p class="seo-paragraph">
            A <strong>Neuropsicologia</strong> é a especialidade que investiga o funcionamento cognitivo, emocional e comportamental,
            oferecendo <strong>avaliação neuropsicológica completa</strong> em Pindamonhangaba-SP. Ajuda a identificar condições como
            <strong>TEA (Transtorno do Espectro Autista)</strong> e <strong>TDAH</strong> por meio de instrumentos padronizados,
            além de orientar planos terapêuticos individualizados. Na Autitude, a neuropsicologia se integra às demais especialidades
            para um cuidado transdisciplinar e humanizado, apoiando crianças, adolescentes, adultos e suas famílias.
          </p>
        </div>

        <div class="service-overview">
          <div class="overview-content">
            <h2>O que é a Neuropsicologia?</h2>
            <h2>Quando procurar um neuropsicólogo em Pindamonhangaba?</h2>
            <p class="overview-text">
              A Neuropsicologia estuda a relação entre o cérebro e o comportamento, investigando como as funções cognitivas
              — memória, atenção, linguagem, funções executivas, raciocínio — se organizam e se expressam no dia a dia.
              Por meio de uma avaliação neuropsicológica detalhada, é possível compreender o perfil único de cada pessoa,
              identificando potências e desafios. Esse processo é essencial para o diagnóstico de condições do neurodesenvolvimento
              e para a construção de planos terapêuticos realmente individualizados, que consideram a pessoa como um todo.
            </p>
            <p class="overview-text">
              Na Autitude, a neuropsicologia caminha lado a lado com a <NuxtLink to="/neuropsicopedagogia">neuropsicopedagogia</NuxtLink>,
              a <NuxtLink to="/fonoaudiologia">fonoaudiologia</NuxtLink>, a <NuxtLink to="/terapia-ocupacional">terapia ocupacional</NuxtLink>
              e a <NuxtLink to="/terapia-aba">terapia ABA</NuxtLink>, formando uma rede de cuidado integrada e verdadeiramente centrada na pessoa.
            </p>

            <div class="benefits-list">
              <div class="benefit-item" v-for="benefit in benefits" :key="benefit.title">
                <div class="benefit-icon-wrap">
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
          <h2>Perguntas frequentes sobre Neuropsicologia</h2>
          <div class="faq-list">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="faq-item"
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
          title="Agende uma avaliação neuropsicológica"
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
      <h2>Neuropsicologia em Pindamonhangaba — Perguntas Frequentes</h2>
      <p>A <strong>Neuropsicologia</strong> investiga o funcionamento cognitivo, emocional e comportamental. Na <strong>Autitude em Pindamonhangaba-SP</strong>, realizamos <strong>avaliação neuropsicológica completa</strong> para rastreamento de TEA, TDAH, dislexia e outras condições do neurodesenvolvimento, com devolutiva detalhada para a família.</p>
      <h2>Qual a diferença entre autismo e TDAH na infância?</h2>
      <p>Embora compartilhem sintomas, são condições distintas. No TEA há prejuízos na comunicação social e comportamentos repetitivos; no TDAH o núcleo é a desregulação da atenção e hiperatividade. Veja a comparação em <a href="/blog/diferenca-autismo-tdah-infancia">diferença entre autismo e TDAH na infância</a>.</p>
      <h2>O que é diagnóstico tardio de autismo na idade escolar?</h2>
      <p>Crianças em idade escolar frequentemente recebem diagnóstico tardio de autismo, quando os sinais são confundidos com TDAH ou outras condições. Saiba identificar em <a href="/blog/diagnostico-autismo-idade-escolar">diagnóstico de autismo na idade escolar</a>.</p>
      <h2>Como funciona o processo de avaliação neuropsicológica?</h2>
      <p>A avaliação leva de 4 a 8 sessões com testes padronizados para memória, atenção, funções executivas e linguagem. Veja cada etapa em <a href="/blog/avaliacao-neuropsicologica-processo">processo de avaliação neuropsicológica</a>.</p>
      <h2>O que são relatórios de evolução?</h2>
      <p>Relatórios de evolução documentam o progresso do paciente e são essenciais para a comunicação entre profissionais e solicitação de cobertura. Saiba mais em <a href="/blog/vinculo-terapeutico-relatorios-evolucao">relatórios de evolução no vínculo terapêutico</a>.</p>
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
  font-size: 0.8125rem;
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
  font-size: 1.0625rem;
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
  font-size: 1.0625rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.overview-text a {
  color: var(--primary);
  text-decoration: underline;
  text-decoration-color: var(--lilac-light);
  text-underline-offset: 2px;
  transition: all 0.2s;
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
  transition: all 0.35s var(--ease-out-expo);
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
  font-size: 1rem;
  margin-bottom: 0.375rem;
}

.benefit-item p {
  font-size: 0.875rem;
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
  transition: all 0.3s;
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
  font-size: 1rem;
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
  transition: all 0.3s;
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
  transition: all 0.3s;
}

.faq-item.open .faq-toggle span::after {
  transform: translate(-50%, -50%) rotate(90deg);
  opacity: 0;
}

.faq-answer {
  padding: 0 1.5rem 1.25rem;
}

.faq-answer p {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s;
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
    font-size: 0.9375rem;
  }

  .benefits-list {
    grid-template-columns: 1fr;
  }
}
</style>
