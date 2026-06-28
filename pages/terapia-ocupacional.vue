<script setup>
import { Activity, Award, Heart, Users } from 'lucide-vue-next'
import Grainient from '~/components/Grainient.vue'

const { whatsappUrl, phone, address, postalCode } = useContact()

const openFaq = ref(null)

const { siteBase } = useSiteBase()

useHead({
  title: 'Terapia Ocupacional em Pindamonhangaba | Autitude',
  meta: [
    { name: 'description', content: 'Terapia Ocupacional em Pindamonhangaba-SP com certificação internacional em Integração Sensorial pela USC (USA). Avaliação clínica, autonomia e socialização para crianças e adolescentes neurodivergentes.' },
    { name: 'keywords', content: 'terapia ocupacional, terapeuta ocupacional Pindamonhangaba, integração sensorial, certificação internacional USC, autonomia infantil, neurodivergência, TEA, TDAH' },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { name: 'author', content: 'Autitude - Desenvolvimento e Ação Humana' },
    { property: 'og:title', content: 'Terapia Ocupacional em Pindamonhangaba | Autitude' },
    { property: 'og:description', content: 'Terapia Ocupacional com certificação internacional em Integração Sensorial pela USC (USA). Avaliação clínica, autonomia e socialização em Pindamonhangaba-SP.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:url', content: `${siteBase}/terapia-ocupacional` },
    { property: 'og:image', content: `${siteBase}/full-logo.png` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Terapia Ocupacional em Pindamonhangaba | Autitude' },
    { name: 'twitter:description', content: 'Terapia Ocupacional com certificação internacional em Integração Sensorial pela USC (USA). Autonomia e socialização.' },
    { name: 'geo.region', content: 'BR-SP' },
    { name: 'geo.placename', content: 'Pindamonhangaba' },
    { name: 'ICBM', content: '-22.9309, -45.4607' },
    { name: 'geo.position', content: '-22.9309;-45.4607' },
    { name: 'date-published', content: '2024-01-01' },
    { name: 'date-modified', content: '2026-06-09' }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}/terapia-ocupacional` },
    { rel: 'alternate', href: `${siteBase}/terapia-ocupacional`, hreflang: 'pt-BR' }
  ],
  script: [
    {
      type: 'application/ld+json',
      key: 'medical-webpage',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Terapia Ocupacional em Pindamonhangaba | Autitude',
        description: 'Terapia Ocupacional com certificação internacional em Integração Sensorial pela USC (USA). Avaliação clínica, autonomia e socialização.',
        url: `${siteBase}/terapia-ocupacional`,
        datePublished: '2024-01-01',
        dateModified: '2026-06-09',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.seo-paragraph', '.seo-faq-hidden']
        },
        about: {
          '@type': 'MedicalTherapy',
          name: 'Terapia Ocupacional',
          description: 'Avaliação clínica, integração sensorial e promoção da autonomia pessoal e social, com certificação internacional em Integração Sensorial pela University of Southern California (USC, USA).'
        },
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          url: siteBase,
          telephone: `+${phone}`,
          address: {
            '@type': 'PostalAddress',
            streetAddress: address,
            addressLocality: 'Pindamonhangaba',
            addressRegion: 'SP',
            addressCountry: 'BR',
            postalCode: postalCode
          }
        }
      })
    },
    {
      type: 'application/ld+json',
      key: 'breadcrumb',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: siteBase },
          { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${siteBase}/servicos` },
          { '@type': 'ListItem', position: 3, name: 'Terapia Ocupacional', item: `${siteBase}/terapia-ocupacional` }
        ]
      })
    },
    {
      type: 'application/ld+json',
      key: 'faqpage',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        name: 'Perguntas Frequentes — Terapia Ocupacional | Autitude',
        description: 'Respostas para perguntas comuns sobre Terapia Ocupacional na Autitude em Pindamonhangaba-SP.',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'O que é Terapia Ocupacional?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A terapia ocupacional utiliza atividades significativas para promover autonomia e qualidade de vida. Na Autitude, o serviço é liderado pela Dra. Juliana Mariani, Terapeuta Ocupacional com mais de 25 anos de experiência, certificação internacional em Integração Sensorial pela University of Southern California (USC, USA) e pós-graduação em Análise do Comportamento Aplicada (ABA) para TEA. O tratamento aborda dificuldades sensoriais, motoras, de autocuidado e participação social.'
            }
          },
          {
            '@type': 'Question',
            name: 'Para quem é indicado?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'É indicada para crianças e adolescentes com dificuldades no processamento sensorial, atraso no desenvolvimento motor, problemas de coordenação, seletividade alimentar, dificuldades de regulação emocional, e para aqueles com TEA, TDAH, síndromes genéticas ou paralisia cerebral.'
            }
          },
          {
            '@type': 'Question',
            name: 'Como funciona o atendimento na Autitude?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A terapia começa com avaliação clínica e sensorial detalhada. São utilizadas atividades lúdicas e estruturadas na sala multissensorial para trabalhar integração sensorial, coordenação motora, autonomia em atividades diárias e regulação emocional. O tratamento é integrado com as demais especialidades e inclui orientação familiar contínua.'
            }
          }
        ]
      })
    }
  ]
})

const benefits = [
  {
    icon: Award,
    title: 'Certificação Internacional em Integração Sensorial (USC, USA)',
    description: 'A Autitude conta com certificação internacional em Integração Sensorial pela University of Southern California (USC, USA), garantindo avaliação e intervenção de excelência baseados no método desenvolvido pela Dra. Jean Ayres.'
  },
  {
    icon: Activity,
    title: 'Avaliação clínica e funcional',
    description: 'Avaliação detalhada do processamento sensorial, das habilidades motoras, da coordenação e do equilíbrio, identificando as necessidades específicas de cada criança ou adolescente.'
  },
  {
    icon: Heart,
    title: 'Desenvolvimento da autonomia',
    description: 'Trabalho direcionado às atividades da vida diária — vestir-se, alimentar-se, cuidar da higiene — promovendo independência e autoconfiança no cotidiano.'
  },
  {
    icon: Users,
    title: 'Socialização e independência',
    description: 'Intervenções que favorecem a participação social, o brincar, a interação com pares e a inclusão em contextos escolares e comunitários, respeitando o ritmo de cada pessoa.'
  }
]

const faqs = [
  {
    question: 'O que é Integração Sensorial?',
    answer: 'Integração Sensorial é uma abordagem terapêutica desenvolvida pela terapeuta ocupacional Dra. Jean Ayres, que estuda como o cérebro organiza e interpreta as informações recebidas pelos sentidos (tato, movimento, equilíbrio, visão, audição, paladar e olfato). Quando esse processo não ocorre de forma eficiente, a criança pode apresentar reações exageradas ou reduzidas a estímulos, dificuldades motoras, de atenção e de regulação emocional. A terapia de Integração Sensorial utiliza atividades lúdicas e estruturadas para melhorar o processamento sensorial e a resposta adaptativa.'
  },
  {
    question: 'Como a Terapia Ocupacional ajuda crianças com TEA?',
    answer: 'A Terapia Ocupacional auxilia crianças com Transtorno do Espectro Autista (TEA) em diversas áreas: regulação sensorial (lidar com estímulos que causam desconforto), desenvolvimento de habilidades motoras finas e grossas, autonomia em atividades diárias (alimentação, vestuário, higiene), brincar funcional e simbólico, interação social e comunicação não verbal. O tratamento é lúdico, individualizado e centrado nos interesses da criança, promovendo engajamento e progresso significativo.'
  },
  {
    question: 'O que significa a certificação USC em Integração Sensorial?',
    answer: 'A certificação internacional em Integração Sensorial pela University of Southern California (USC, USA) é uma das mais reconhecidas no mundo. Ela atesta que o profissional completou uma formação avançada e rigorosa nos fundamentos teóricos e práticos da abordagem de Integração Sensorial de Jean Ayres, incluindo avaliação padronizada (SIPT), raciocínio clínico e intervenção baseada em evidências. Na Autitude, essa certificação é um diferencial que garante qualidade e excelência no atendimento.'
  },
  {
    question: 'Quanto tempo dura o tratamento?',
    answer: 'A duração do tratamento em Terapia Ocupacional varia conforme as necessidades de cada pessoa, a frequência das sessões e os objetivos terapêuticos. Em geral, recomenda-se sessões semanais de 45 a 60 minutos, com reavaliações periódicas para ajustar o plano terapêutico. Resultados significativos costumam ser observados após alguns meses de intervenção consistente, mas cada caso é único e o progresso é continuamente monitorado.'
  }
]
</script>

<template>
  <div class="service-page">
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
        <span class="section-tag texture-hd">Terapia Ocupacional</span>
        <h1>Terapia Ocupacional em Pindamonhangaba: Integração Sensorial e Autonomia</h1>

        <div class="seo-answer seo-text">
          <p class="seo-paragraph texture-hd">
            A <strong>Terapia Ocupacional</strong> da Autitude em Pindamonhangaba-SP conta com
            <strong>certificação internacional em Integração Sensorial pela University of Southern California (USC, USA)</strong>
            — um dos mais altos padrões de excelência na área. A terapia ocupacional atua na avaliação clínica e funcional,
            no desenvolvimento da autonomia, na socialização e na independência de crianças e adolescentes neurodivergentes,
            utilizando atividades significativas e baseadas em evidências para promover qualidade de vida.
          </p>
        </div>

        <div class="service-overview">
          <div class="overview-content">
            <h2>O que é a Terapia Ocupacional com Integração Sensorial?</h2>
            <h2>Quais sinais indicam que meu filho precisa de terapia ocupacional?</h2>
            <p class="overview-text">
              A Terapia Ocupacional é uma profissão da saúde que utiliza atividades cotidianas (ocupações) como
              ferramenta terapêutica para promover a autonomia, a participação social e a qualidade de vida.
              Quando combinada com a abordagem de <strong>Integração Sensorial</strong> — certificada pela
              <strong>University of Southern California (USC, USA)</strong> —, a terapia ocupacional se torna
              uma poderosa aliada no cuidado de crianças e adolescentes com desafios no processamento sensorial,
              na coordenação motora, na regulação emocional e na interação social.
            </p>
            <p class="overview-text">
              Na Autitude, a terapia ocupacional se integra à <NuxtLink to="/neuropsicologia">neuropsicologia</NuxtLink>,
              à <NuxtLink to="/fonoaudiologia">fonoaudiologia</NuxtLink> e à
              <NuxtLink to="/terapia-aba">terapia ABA</NuxtLink> para um cuidado verdadeiramente transdisciplinar,
              onde cada profissional contribui com seu olhar especializado em torno de um plano comum.
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
          <h2>Perguntas frequentes sobre Terapia Ocupacional</h2>
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
          title="Agende uma avaliação de Terapia Ocupacional"
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
      <h2>Terapia Ocupacional em Pindamonhangaba — Perguntas Frequentes</h2>
      <p>A <strong>Terapia Ocupacional</strong> na <strong>Autitude em Pindamonhangaba-SP</strong> conta com <strong>certificação internacional em Integração Sensorial pela University of Southern California (USC, USA)</strong>. Trabalhamos avaliação clínica, autonomia pessoal e social, e integração sensorial para crianças e adolescentes neurodivergentes.</p>
      <h2>Como a integração sensorial ajuda crianças não-verbais?</h2>
      <p>A integração sensorial organiza as sensações do corpo e do ambiente, criando as bases neurológicas para a comunicação intencional. Para crianças não-verbais, a regulação sensorial precede qualquer intervenção de comunicação aumentativa. Veja mais em <a href="/blog/integracao-sensorial-comunicacao-criancas-nao-verbais">integração sensorial e comunicação em crianças não-verbais</a>.</p>
      <h2>O que é seletividade alimentar no autismo?</h2>
      <p>A seletividade alimentar está relacionada à hipersensibilidade sensorial a texturas, cores, cheiros e temperaturas. Não se trata de "frescura", mas de resposta neurológica. Saiba como intervir em <a href="/blog/seletividade-alimentar-autismo">seletividade alimentar no autismo</a>.</p>
      <h2>Como diferenciar birra de crise sensorial?</h2>
      <p>A birra é intencional para obter algo; a crise sensorial é uma reação involuntária a estímulos avassaladores. Crianças neurodivergentes precisam de abordagem específica. Leia mais em <a href="/blog/birra-ou-crise-sensorial">birra ou crise sensorial</a>.</p>
      <h2>O que são relatórios de evolução no vínculo terapêutico?</h2>
      <p>Relatórios de evolução documentam o progresso do paciente e as intervenções realizadas. São essenciais para a comunicação entre profissionais e solicitação de cobertura. Saiba mais em <a href="/blog/vinculo-terapeutico-relatorios-evolucao">relatórios de evolução no vínculo terapêutico</a>.</p>
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

@media (max-width: 900px) {
  .hero-section {
    padding-top: clamp(4rem, 8vw, 5rem);
  }

  .hero-bg-grid {
    position: absolute;
    height: 100vh;
    height: 100dvh;
  }

  .seo-paragraph {
    padding: 1.25rem 1.25rem;
  }

  h1 {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
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

@media (max-width: 480px) {
  .hero-section {
    padding-top: 3.5rem;
    padding-bottom: 2rem;
  }

  h1 {
    font-size: clamp(1.25rem, 6vw, 1.5rem);
    margin-bottom: 1rem;
  }

  .section-tag {
    font-size: 0.6875rem;
    padding: 0.25rem 0.75rem;
    margin-bottom: 0.625rem;
  }

  .seo-paragraph {
    padding: 1rem 1rem;
    font-size: 0.875rem;
  }

  .overview-content h2 {
    font-size: clamp(1.125rem, 5vw, 1.25rem);
    margin-bottom: 0.75rem;
  }

  .overview-text {
    font-size: 0.875rem;
  }

  .benefit-item {
    flex-direction: column;
    gap: 0.625rem;
    padding: 1rem;
  }

  .benefit-icon-wrap {
    width: 40px;
    height: 40px;
    min-width: 40px;
  }

  .benefit-item h3 {
    font-size: 0.875rem;
  }

  .benefit-item p {
    font-size: 0.8125rem;
  }

  .faq-section h2 {
    font-size: clamp(1.125rem, 5vw, 1.25rem);
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
}
</style>
