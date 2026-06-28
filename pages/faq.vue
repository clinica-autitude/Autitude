<script setup>
import Grainient from '~/components/Grainient.vue'

const { whatsappUrl } = useContact()

const activeCategory = ref('all')
const openFaq = ref(null)

const categories = [
  { id: 'all', name: 'Todas' },
  { id: 'general', name: 'Geral' },
  { id: 'neuro', name: 'Neurodivergência' },
  { id: 'therapy', name: 'Especialidades' },
  { id: 'schedule', name: 'Agendamento' }
]

const faqs = [
  {
    category: 'general',
    question: 'O que é a Autitude?',
    answer: 'A Autitude é um espaço especializado no atendimento de crianças, adolescentes, adultos e suas famílias, com foco no público neurodivergente. Nossa abordagem é transdisciplinar, humanizada e baseada em evidências científicas, articulando diferentes especialidades em torno de cada pessoa.'
  },
  {
    category: 'general',
    question: 'Quais especialidades vocês oferecem?',
    answer: 'Trabalhamos com Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia, Terapia Ocupacional e Terapia ABA Humanizada — especialidades que se articulam em torno de cada pessoa e de sua família. A Terapia Ocupacional conta com certificação internacional em Integração Sensorial.'
  },
  {
    category: 'general',
    question: 'A partir de qual idade vocês atendem?',
    answer: 'Atendemos crianças, adolescentes, adultos e suas famílias. O cuidado pode começar mesmo nos primeiros anos de vida, favorecendo o desenvolvimento desde cedo.'
  },
  {
    category: 'general',
    question: 'Quanto tempo dura cada sessão?',
    answer: 'As sessões têm duração de 45 a 60 minutos, de acordo com a necessidade e o tipo de intervenção. Avaliações iniciais costumam ser mais longas para uma escuta e investigação completas.'
  },
  {
    category: 'general',
    question: 'A família participa do processo?',
    answer: 'Sim. Acreditamos que a família é parte essencial do cuidado. Por isso, oferecemos orientações e conduzimos o trabalho em parceria, para que as conquistas possam acontecer também no cotidiano.'
  },
  {
    category: 'neuro',
    question: 'O que é neurodivergência?',
    answer: 'Neurodivergência é um conceito que reconhece variações no funcionamento do cérebro humano, como o Transtorno do Espectro Autista (TEA), o TDAH, a dislexia, entre outras. Cada pessoa neurodivergente tem um perfil único, com potências e desafios próprios.'
  },
  {
    category: 'neuro',
    question: 'Como sei se meu filho precisa de avaliação?',
    answer: 'Se você percebe desafios na comunicação, na aprendizagem, no comportamento, na regulação emocional ou na interação social, uma avaliação especializada pode ajudar a compreender o perfil e construir um plano de cuidado individualizado.'
  },
  {
    category: 'neuro',
    question: 'O que é Integração Sensorial?',
    answer: 'Integração Sensorial é uma abordagem terapêutica desenvolvida pela Dra. Jean Ayres que trabalha o processamento das informações sensoriais pelo cérebro, ajudando crianças e adolescentes a se organizarem melhor em relação aos estímulos do cotidiano.'
  },
  {
    category: 'neuro',
    question: 'Quais são os sinais de desregulação sensorial?',
    answer: 'Alguns sinais incluem: rejeição a texturas de roupas ou alimentos, reação intensa a barulhos, dificuldade em transições, quedas frequentes, busca excessiva de movimento ou, ao contrário, medo de se movimentar, dificuldade de concentração e seletividade alimentar.'
  },
  {
    category: 'therapy',
    question: 'O que faz a Neuropsicologia?',
    answer: 'A Neuropsicologia investiga o funcionamento cognitivo, emocional e comportamental, realiza avaliações neuropsicológicas e rastreamento de neurodivergências, além de oferecer orientação e apoio às famílias.'
  },
  {
    category: 'therapy',
    question: 'O que faz a Neuropsicopedagogia?',
    answer: 'A Neuropsicopedagogia identifica e acompanha dificuldades de aprendizagem, planeja e aplica planos pedagógicos individuais e apoia o desenvolvimento escolar, articulando neurociência e educação.'
  },
  {
    category: 'therapy',
    question: 'O que faz a Fonoaudiologia?',
    answer: 'A Fonoaudiologia trabalha o desenvolvimento da linguagem, a comunicação social, a fala e a motricidade orofacial, com atenção especial ao atendimento de pessoas neurodivergentes.'
  },
  {
    category: 'therapy',
    question: 'O que faz a Terapia Ocupacional?',
    answer: 'A Terapia Ocupacional promove a autonomia, a socialização, a independência funcional e o enfrentamento dos desafios do cotidiano, com certificação internacional em Integração Sensorial pela University of Southern California (USC, USA).'
  },
  {
    category: 'schedule',
    question: 'Como funciona o agendamento?',
    answer: 'Você pode entrar em contato pelo WhatsApp ou preencher o formulário de agendamento em nosso site. Retornaremos em até 24 horas para entender suas necessidades e marcar a avaliação inicial.'
  },
  {
    category: 'schedule',
    question: 'Quanto custa a avaliação?',
    answer: 'A avaliação inicial tem investimento que pode variar conforme a especialidade e a extensão (consulte nossos valores pelo WhatsApp). Após a avaliação, apresentamos um plano de cuidado personalizado, com sessões e pacotes com desconto. Aceitamos PIX, cartão de crédito e boleto bancário.'
  },
  {
    category: 'schedule',
    question: 'Vocês atendem por plano de saúde?',
    answer: 'Atualmente atendemos de forma particular. Fornecemos nota fiscal para que você possa solicitar reembolso junto ao seu plano de saúde (consulte sua operadora sobre a política de reembolso). Também oferecemos pacotes de sessões com valores especiais. Entre em contato pelo WhatsApp para mais informações.'
  },
  {
    category: 'schedule',
    question: 'Onde vocês estão localizados?',
    answer: 'Estamos na Rua Major José dos Santos Moreira, 328 — Vila Rica, Pindamonhangaba-SP. O atendimento é presencial, com agendamento prévio, e também oferecemos orientações online para famílias de outras regiões.'
  }
]

const filteredFaqs = computed(() => {
  if (activeCategory.value === 'all') return faqs
  return faqs.filter(faq => faq.category === activeCategory.value)
})

const approach = [
  { title: 'Acolhimento', description: 'Escuta atenta da história e das necessidades de cada família' },
  { title: 'Avaliação', description: 'Investigação cuidadosa do perfil único de cada pessoa' },
  { title: 'Plano', description: 'Construção de um plano individualizado e baseado em evidências' },
  { title: 'Acompanhamento', description: 'Cuidado contínuo, com orientação à família e à rede de apoio' }
]

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

const siteBase = 'https://autitude.com.br'

useHead({
  title: 'FAQ — Perguntas Frequentes | Autitude - Desenvolvimento e Ação Humana',
  meta: [
    { name: 'description', content: 'Perguntas frequentes sobre a Autitude: neuropsicologia, neuropsicopedagogia, fonoaudiologia, terapia ocupacional, integração sensorial, agendamento, valores e localização em Pindamonhangaba-SP.' },
    { name: 'keywords', content: 'FAQ, perguntas frequentes, autitude, neurodivergência, neuropsicologia, fonoaudiologia, terapia ocupacional, integração sensorial, agendamento, valores, Pindamonhangaba' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:locale', content: 'pt_BR' },
    { name: 'author', content: 'Autitude - Desenvolvimento e Ação Humana' },
    { property: 'og:image', content: 'https://autitude.com.br/full-logo.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: 'Autitude - Desenvolvimento e Ação Humana' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Autitude | Desenvolvimento e Ação Humana' },
    { name: 'twitter:description', content: 'Desenvolvimento com acolhimento, ciência e humanidade. Cuidamos de pessoas. Potencializamos possibilidades.' },
    { name: 'twitter:image', content: 'https://autitude.com.br/full-logo.png' },
    { name: 'twitter:creator', content: '@clinicaautitude' },
    { name: 'twitter:site', content: '@clinicaautitude' },
    { name: 'date-published', content: '2024-01-01' },
    { name: 'date-modified', content: '2026-06-09' },
    { property: 'og:title', content: 'FAQ — Perguntas Frequentes | Autitude' },
    { property: 'og:description', content: 'Tire suas dúvidas sobre o atendimento da Autitude: especialidades, agendamento, valores e localização.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${siteBase}/faq` }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}/faq` }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        name: 'FAQ — Perguntas Frequentes | Autitude',
        description: 'Perguntas frequentes sobre o atendimento da Autitude.',
        url: `${siteBase}/faq`,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.seo-paragraph', '.seo-faq-hidden']
        },
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        })),
        publisher: {
          '@type': 'Organization',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          url: siteBase,
          logo: {
            '@type': 'ImageObject',
            url: `${siteBase}/full-logo.png`
          }
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: siteBase },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${siteBase}/faq` }
        ]
      })
    }
  ]
})
</script>

<template>
  <div class="faq">
    <section class="hero-section">
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
      <div class="container">
        <div class="section-title">
          <span class="section-tag texture-hd">Perguntas frequentes</span>
          <h2>O que você precisa saber sobre a Autitude?</h2>
          <p>Tire suas dúvidas sobre o cuidado que oferecemos na Autitude.</p>
        </div>

        <div class="seo-answer seo-text">
          <p class="seo-paragraph texture-hd" style="--texture-hd: var(--texture-hd-paper)">
            A Autitude é uma clínica especializada em neurodivergência em Pindamonhangaba-SP,
            oferecendo <strong>neuropsicologia, fonoaudiologia, terapia ocupacional e terapia ABA</strong>
            para crianças, adolescentes, adultos e famílias. Atendemos com equipe multidisciplinar,
            abordagem transdisciplinar e base em evidências científicas. Agende pelo WhatsApp ou formulário online.
          </p>
        </div>

        <div class="faq-categories">
          <button 
            v-for="category in categories" 
            :key="category.id"
            class="category-btn texture-hd"
            :class="{ active: activeCategory === category.id }"
            @click="activeCategory = category.id"
          >
            {{ category.name }}
          </button>
        </div>

        <div class="faq-list">
          <div
            v-for="(faq, index) in filteredFaqs"
            :key="`${activeCategory}-${index}`"
            class="faq-item texture-hd-paper"
            :class="{ open: openFaq === index }"
          >
            <div
              class="faq-question"
              role="button"
              tabindex="0"
              :aria-expanded="openFaq === index"
              @click="toggleFaq(index)"
              @keydown.enter.prevent="toggleFaq(index)"
              @keydown.space.prevent="toggleFaq(index)"
            >
              <span class="faq-number">{{ index + 1 }}</span>
              <h3>{{ faq.question }}</h3>
              <div class="faq-toggle">
                <span></span>
              </div>
            </div>
            <Transition name="accordion">
              <div class="faq-answer" v-show="openFaq === index">
                <p>{{ faq.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  </div>
    <!-- Hidden supplementary SEO content for crawlers — extends visible FAQ -->
    <section class="seo-faq-hidden" aria-label="Informações Complementares"
      style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;">
      <h2>O que é diagnóstico tardio de autismo?</h2>
      <p>O <strong>diagnóstico tardio de autismo</strong> ocorre quando crianças em idade escolar (6 a 12 anos) recebem o diagnóstico de TEA. Muitas vezes os sinais são confundidos com TDAH, ansiedade ou questões comportamentais. Saiba identificar em <a href="/blog/diagnostico-autismo-idade-escolar">diagnóstico de autismo na idade escolar</a>.</p>
      <h2>Qual a diferença entre autismo e TDAH na infância?</h2>
      <p>TEA e TDAH compartilham sintomas como desatenção, mas no TEA há prejuízos na comunicação social e comportamentos repetitivos. Veja a comparação em <a href="/blog/diferenca-autismo-tdah-infancia">diferença entre autismo e TDAH na infância</a>.</p>
      <h2>Como diferenciar birra de crise sensorial?</h2>
      <p>A birra é intencional; a crise sensorial é involuntária. Crianças neurodivergentes podem ter crises sensoriais que exigem abordagem específica. Leia mais em <a href="/blog/birra-ou-crise-sensorial">birra ou crise sensorial</a>.</p>
      <h2>O que é comportamento opositor (TOD)?</h2>
      <p>O TOD se caracteriza por padrão persistente de irritabilidade e desafio a figuras de autoridade. Veja estratégias em <a href="/blog/comportamento-opositor-tod-escola">comportamento opositor TOD na escola</a>.</p>
      <h2>Como conseguir liminar para tratamento de autismo?</h2>
      <p>A liminar judicial obriga o plano de saúde a custear terapias quando há recusa. Veja o passo a passo em <a href="/blog/liminar-tratamento-autismo">liminar para tratamento de autismo</a>.</p>
    </section>
</template>

<style scoped>
.faq {
  padding-top: 6rem;
}

.hero-section {
  padding-bottom: 4rem;
}

.section-title {
  text-align: center;
  margin-bottom: 2.5rem;
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

.section-title h2 {
  margin-bottom: 0.75rem;
}

.section-title p {
  font-size: clamp(0.9375rem, 1.5vw + 0.25rem, 1.125rem);
  color: var(--text-secondary);
}

.seo-answer {
  max-width: 800px;
  margin: 0 auto 2.5rem;
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

.faq-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.category-btn {
  padding: 0.5rem 1.25rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  background: var(--background);
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.9375rem;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}

.category-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.category-btn.active {
  background: var(--primary);
  color: var(--white);
  border-color: var(--primary);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
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

.faq-number {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--primary);
  min-width: 1.75rem;
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
  padding: 0 1.5rem 1.25rem 1.5rem;
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

@media (max-width: 900px) {
  .hero-section {
    padding-top: clamp(4rem, 8vw, 5rem);
  }

  .seo-paragraph {
    padding: 1.25rem 1.25rem;
  }

  .section-title h2 {
    font-size: clamp(1.375rem, 5vw, 1.75rem);
  }
}

@media (max-width: 640px) {
  .faq {
    padding-top: 5rem;
  }

  .faq-question {
    padding: 1rem 1.25rem;
  }

  .faq-question h3 {
    font-size: clamp(0.875rem, 4vw, 0.9375rem);
  }

  .faq-categories {
    gap: 0.375rem;
  }

  .category-btn {
    padding: 0.4rem 1rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding-top: 3.5rem;
    padding-bottom: 2rem;
  }

  .section-tag {
    font-size: 0.6875rem;
    padding: 0.25rem 0.75rem;
    margin-bottom: 0.625rem;
  }

  .section-title h2 {
    font-size: clamp(1.125rem, 5vw, 1.25rem);
  }

  .seo-paragraph {
    padding: 1rem 1rem;
    font-size: 0.875rem;
  }

  .faq-question {
    padding: 0.75rem 1rem;
  }

  .faq-question h3 {
    font-size: 0.8125rem;
  }

  .faq-answer {
    padding: 0 1rem 0.875rem;
  }

  .faq-answer p {
    font-size: 0.8125rem;
  }

  .category-btn {
    padding: 0.3rem 0.75rem;
    font-size: 0.8125rem;
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
