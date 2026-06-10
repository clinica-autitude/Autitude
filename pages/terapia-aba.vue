<script setup>
import { Puzzle, MessageSquare, BookOpen, HeartHandshake } from 'lucide-vue-next'
import DotGrid from '~/components/DotGrid.vue'

const { whatsappUrl } = useContact()

const openFaq = ref(null)

const siteBase = 'https://autitude.com.br'

useHead({
  title: 'Terapia ABA Humanizada em Pindamonhangaba | Autitude',
  meta: [
    { name: 'description', content: 'Terapia ABA Humanizada em Pindamonhangaba-SP. Análise do Comportamento Aplicada com plano terapêutico individualizado, desenvolvimento de habilidades e envolvimento familiar. Atendimento neurodivergente.' },
    { name: 'keywords', content: 'terapia ABA, ABA humanizada, análise do comportamento aplicada, Pindamonhangaba, autismo, TEA, habilidades sociais, plano terapêutico individualizado, neurodivergência' },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { name: 'author', content: 'Autitude - Desenvolvimento e Ação Humana' },
    { property: 'og:title', content: 'Terapia ABA Humanizada em Pindamonhangaba | Autitude' },
    { property: 'og:description', content: 'Terapia ABA Humanizada em Pindamonhangaba: análise do comportamento aplicada com plano individualizado, desenvolvimento de habilidades e envolvimento familiar.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:url', content: `${siteBase}/terapia-aba` },
    { property: 'og:image', content: `${siteBase}/full-logo.png` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Terapia ABA Humanizada em Pindamonhangaba | Autitude' },
    { name: 'twitter:description', content: 'Terapia ABA Humanizada em Pindamonhangaba: análise do comportamento aplicada com plano individualizado.' },
    { name: 'geo.region', content: 'BR-SP' },
    { name: 'geo.placename', content: 'Pindamonhangaba' },
    { name: 'ICBM', content: '-22.9309, -45.4607' },
    { name: 'geo.position', content: '-22.9309;-45.4607' },
    { name: 'date-published', content: '2024-01-01' },
    { name: 'date-modified', content: '2026-06-09' }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}/terapia-aba` },
    { rel: 'alternate', href: `${siteBase}/terapia-aba`, hreflang: 'pt-BR' }
  ],
  script: [
    {
      type: 'application/ld+json',
      key: 'medical-webpage',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Terapia ABA Humanizada em Pindamonhangaba | Autitude',
        description: 'Análise do Comportamento Aplicada (ABA) humanizada com plano terapêutico individualizado, desenvolvimento de habilidades e envolvimento familiar.',
        url: `${siteBase}/terapia-aba`,
        datePublished: '2024-01-01',
        dateModified: '2026-06-09',
        about: {
          '@type': 'MedicalTherapy',
          name: 'Terapia ABA Humanizada',
          description: 'Aplicação da Análise do Comportamento Aplicada (ABA) de forma humanizada e centrada na pessoa, desenvolvendo habilidades e aprendizagens significativas.'
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
          { '@type': 'ListItem', position: 3, name: 'Terapia ABA Humanizada', item: `${siteBase}/terapia-aba` }
        ]
      })
    },
    {
      type: 'application/ld+json',
      key: 'faqpage',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        name: 'Perguntas Frequentes — Terapia ABA Humanizada | Autitude',
        description: 'Respostas para perguntas comuns sobre Terapia ABA na Autitude em Pindamonhangaba-SP.',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'O que é Terapia ABA Humanizada?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A Terapia ABA (Applied Behavior Analysis) é uma abordagem baseada em evidências científicas que ensina habilidades importantes e reduz comportamentos que interferem no aprendizado e na qualidade de vida. Na Autitude, a ABA é aplicada de forma humanizada, respeitando o ritmo e as características individuais de cada pessoa.'
            }
          },
          {
            '@type': 'Question',
            name: 'Para quem é indicado?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A ABA é especialmente indicada para crianças e adolescentes com Transtorno do Espectro Autista (TEA), mas também beneficia pessoas com TDAH, dificuldades de aprendizagem, atrasos no desenvolvimento e outras condições que impactam a aquisição de habilidades adaptativas, comunicação e interação social.'
            }
          },
          {
            '@type': 'Question',
            name: 'Como funciona o atendimento na Autitude?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O atendimento começa com uma avaliação funcional detalhada para identificar habilidades existentes e áreas que precisam de desenvolvimento. Um plano de ensino individualizado é criado com metas claras e mensuráveis. As sessões são lúdicas e estruturadas, com ensino de habilidades em ambiente natural. A família é treinada para aplicar estratégias no dia a dia.'
            }
          }
        ]
      })
    }
  ]
})

const benefits = [
  {
    icon: Puzzle,
    title: 'Plano terapêutico individualizado',
    description: 'Cada pessoa recebe um plano construído sob medida, baseado em avaliação funcional detalhada, com metas claras e estratégias que respeitam seu ritmo, interesses e necessidades específicas.'
  },
  {
    icon: MessageSquare,
    title: 'Habilidades comunicativas e sociais',
    description: 'Desenvolvimento da comunicação funcional, linguagem expressiva e receptiva, interação social, brincar compartilhado, turnos de conversa e compreensão de contextos sociais.'
  },
  {
    icon: BookOpen,
    title: 'Aprendizagem acadêmica e cotidiana',
    description: 'Ensino de habilidades acadêmicas (leitura, escrita, matemática) e atividades da vida diária (autocuidado, rotinas, tarefas domésticas) com base nos princípios da Análise do Comportamento Aplicada.'
  },
  {
    icon: HeartHandshake,
    title: 'Envolvimento e orientação familiar',
    description: 'A família é parte essencial do processo terapêutico. Oferecemos treinamento parental, orientação continuada e suporte emocional para que as estratégias sejam aplicadas no dia a dia.'
  }
]

const faqs = [
  {
    question: 'O que é a Terapia ABA Humanizada?',
    answer: 'ABA (Applied Behavior Analysis) é uma abordagem científica que estuda o comportamento humano e utiliza seus princípios para ensinar habilidades e reduzir comportamentos desafiadores. A Terapia ABA Humanizada da Autitude vai além da técnica: ela coloca a pessoa no centro do processo, respeitando sua individualidade, interesses e ritmo. O trabalho é feito com afeto, escuta ativa e parceria com a família, garantindo que cada intervenção seja significativa e respeitosa.'
  },
  {
    question: 'Qual a diferença entre ABA tradicional e ABA humanizada?',
    answer: 'A ABA tradicional pode ser excessivamente mecanicista, focada apenas na repetição de tentativas e na extinção de comportamentos. A ABA humanizada da Autitude integra os princípios comportamentais com uma abordagem centrada na pessoa, respeitando a neurodivergência, utilizando reforçadores naturais e significativos, priorizando o vínculo terapêutico e envolvendo ativamente a família. O objetivo não é "normalizar", mas sim desenvolver habilidades que ampliem a qualidade de vida e a autonomia.'
  },
  {
    question: 'Quantas horas de terapia ABA são necessárias?',
    answer: 'A intensidade da terapia ABA varia conforme as necessidades de cada pessoa. Estudos indicam que intervenções de 10 a 20 horas semanais podem trazer resultados significativos, mas não existe uma fórmula única. Na Autitude, definimos a carga horária após avaliação funcional inicial, considerando a idade, o repertório atual, as metas terapêuticas e a disponibilidade da família. O plano é revisado periodicamente e ajustado conforme o progresso.'
  },
  {
    question: 'A partir de que idade começar a terapia ABA?',
    answer: 'A terapia ABA pode ser iniciada desde os primeiros anos de vida, assim que surgem sinais de atraso no desenvolvimento ou diagnóstico de TEA. Quanto mais precoce a intervenção, melhores os resultados a longo prazo, pois o cérebro infantil tem maior plasticidade. Na Autitude, atendemos crianças a partir de 2 anos de idade, com programas adaptados para cada faixa etária e nível de desenvolvimento.'
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
        <span class="section-tag texture-hd">Terapia ABA Humanizada</span>
        <h1>Terapia ABA Humanizada em Pindamonhangaba: Desenvolvimento de Habilidades</h1>

        <div class="seo-answer seo-text">
          <p class="seo-paragraph texture-hd">
            A <strong>Terapia ABA Humanizada</strong> da Autitude em Pindamonhangaba-SP aplica a
            <strong>Análise do Comportamento Aplicada (ABA)</strong> com uma abordagem centrada na pessoa,
            respeitando a individualidade e a neurodivergência de cada criança e adolescente. O foco está no
            <strong>desenvolvimento de habilidades comunicativas, sociais, acadêmicas e cotidianas</strong>,
            sempre com o envolvimento ativo da família. Mais do que uma técnica, é uma forma de cuidar que
            valoriza o vínculo, o afeto e o progresso no ritmo de cada um.
          </p>
        </div>

        <div class="service-overview">
          <div class="overview-content">
            <h2>O que é a Terapia ABA Humanizada?</h2>
            <h2>Como a terapia ABA humanizada pode ajudar meu filho?</h2>
            <p class="overview-text">
              A Análise do Comportamento Aplicada (ABA) é uma abordagem científica com décadas de evidências
              no ensino de habilidades e na redução de comportamentos desafiadores para pessoas com TEA e
              outras condições do neurodesenvolvimento. Na Autitude, levamos a ABA além da técnica:
              <strong>humanizamos o processo</strong>, colocando a pessoa — não o protocolo — no centro da intervenção.
            </p>
            <p class="overview-text">
              Nossa abordagem se integra às demais especialidades da clínica —
              <NuxtLink to="/neuropsicologia">neuropsicologia</NuxtLink>,
              <NuxtLink to="/fonoaudiologia">fonoaudiologia</NuxtLink> e
              <NuxtLink to="/terapia-ocupacional">terapia ocupacional</NuxtLink> —
              para que o cuidado seja completo e coerente. Cada conquista na terapia ABA reverbera em todos
              os contextos da vida: em casa, na escola e na comunidade.
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
          <h2>Perguntas frequentes sobre Terapia ABA Humanizada</h2>
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
          title="Agende uma avaliação de Terapia ABA"
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
      <h2>Terapia ABA Humanizada em Pindamonhangaba — Perguntas Frequentes</h2>
      <p>A <strong>Terapia ABA Humanizada</strong> na <strong>Autitude em Pindamonhangaba-SP</strong> aplica a Análise do Comportamento Aplicada de forma centrada na pessoa, desenvolvendo habilidades comunicativas, sociais, funcionais e de aprendizagem com planos terapêuticos individualizados e envolvimento familiar.</p>
      <h2>Como a terapia ABA humanizada trabalha as estereotipias?</h2>
      <p>A ABA humanizada aborda estereotipias (movimentos ou sons repetitivos) não como comportamentos a serem eliminados, mas como formas de comunicação e regulação que podem ser compreendidas e redirecionadas. Leia mais em <a href="/blog/aba-humanizada-estereotipias">ABA humanizada e estereotipias</a>.</p>
      <h2>Qual a diferença entre birra e crise sensorial?</h2>
      <p>A birra é intencional; a crise sensorial é involuntária. Crianças neurodivergentes frequentemente têm crises sensoriais que não devem ser confundidas com birras. Aprenda a diferenciar em <a href="/blog/birra-ou-crise-sensorial">birra ou crise sensorial</a>.</p>
      <h2>O que é comportamento opositor (TOD) na escola?</h2>
      <p>O TOD se caracteriza por padrão persistente de irritabilidade e desafio a figuras de autoridade. Veja estratégias baseadas em ABA em <a href="/blog/comportamento-opositor-tod-escola">comportamento opositor TOD na escola</a>.</p>
      <h2>O plano de saúde cobre terapia ABA?</h2>
      <p>Sim, os planos de saúde são obrigados por lei a cobrir terapia ABA para pacientes com TEA. Veja seus direitos em <a href="/blog/cobertura-plano-saude-aba-fono">cobertura do plano de saúde para ABA e fonoaudiologia</a>.</p>
      <h2>Como conseguir liminar para tratamento de autismo?</h2>
      <p>A liminar judicial obriga planos de saúde a custearem terapias quando há recusa de cobertura. Veja o passo a passo em <a href="/blog/liminar-tratamento-autismo">liminar para tratamento de autismo</a>.</p>
      <h2>O que são relatórios de evolução no vínculo terapêutico?</h2>
      <p>Relatórios de evolução registram o progresso do paciente e são essenciais para a comunicação entre profissionais e solicitação de cobertura. Saiba mais em <a href="/blog/vinculo-terapeutico-relatorios-evolucao">relatórios de evolução no vínculo terapêutico</a>.</p>
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
