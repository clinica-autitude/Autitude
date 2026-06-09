<script setup>
import { Brain, BookOpen, Mic, Activity, Puzzle } from 'lucide-vue-next'
import Squares from '~/components/Squares.vue'

const siteBase = 'https://autitude.com.br'

useHead({
  title: 'Especialidades — Neuropsicologia, Fonoaudiologia, Terapia Ocupacional | Autitude',
  meta: [
    { name: 'description', content: 'Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia, Terapia Ocupacional e Terapia ABA Humanizada em Pindamonhangaba-SP. Atendimento especializado para crianças, adolescentes, adultos e famílias neurodivergentes.' },
    { name: 'keywords', content: 'especialidades autitude, neuropsicologia, neuropsicopedagogia, fonoaudiologia, terapia ocupacional, terapia ABA, integração sensorial, Pindamonhangaba, neurodivergência' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Especialidades — Neuropsicologia, Fonoaudiologia, Terapia Ocupacional | Autitude' },
    { property: 'og:description', content: 'Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia, Terapia Ocupacional e Terapia ABA Humanizada em Pindamonhangaba-SP.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${siteBase}/servicos` }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}/servicos` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Especialidades — Autitude',
        description: 'Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia, Terapia Ocupacional e Terapia ABA Humanizada.',
        url: `${siteBase}/servicos`,
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          provides: [
            {
              '@type': 'MedicalTherapy',
              name: 'Neuropsicologia',
              description: 'Avaliação neuropsicológica completa, rastreamento de neurodivergências, desenvolvimento cognitivo e comportamental.'
            },
            {
              '@type': 'MedicalTherapy',
              name: 'Neuropsicopedagogia',
              description: 'Avaliação de dificuldades de aprendizagem, plano pedagógico individualizado.'
            },
            {
              '@type': 'MedicalTherapy',
              name: 'Fonoaudiologia',
              description: 'Desenvolvimento da linguagem, comunicação social, fala e motricidade orofacial.'
            },
            {
              '@type': 'MedicalTherapy',
              name: 'Terapia Ocupacional',
              description: 'Avaliação e intervenção em Integração Sensorial, autonomia pessoal e social. Certificação internacional USC.'
            },
            {
              '@type': 'MedicalTherapy',
              name: 'Terapia ABA Humanizada',
              description: 'Análise do comportamento aplicada, desenvolvimento de habilidades adaptativas.'
            }
          ]
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
          { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${siteBase}/servicos` }
        ]
      })
    }
  ]
})

const { whatsappUrl } = useContact()

const services = [
  {
    title: 'Neuropsicologia',
    description: 'Investigação detalhada do funcionamento cognitivo, emocional e comportamental para compreender o perfil único de cada pessoa.',
    color: 'linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%)',
    icon: Brain,
    items: [
      'Avaliação neuropsicológica',
      'Rastreamento de neurodivergências',
      'Desenvolvimento cognitivo, emocional e comportamental',
      'Orientação e apoio às famílias'
    ]
  },
  {
    title: 'Neuropsicopedagogia',
    description: 'Avaliação e plano pedagógico individualizado, com identificação de desafios e apoio ao desenvolvimento escolar.',
    color: 'linear-gradient(135deg, var(--pastel-pink) 0%, var(--secondary-light) 100%)',
    icon: BookOpen,
    items: [
      'Avaliação das dificuldades de aprendizagem',
      'Identificação de desafios pedagógicos',
      'Planejamento e aplicação de plano pedagógico individualizado',
      'Apoio ao desenvolvimento escolar'
    ]
  },
  {
    title: 'Fonoaudiologia',
    description: 'Acompanhamento da linguagem, fala, comunicação social e motricidade orofacial, com olhar atento à neurodivergência.',
    color: 'linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%)',
    icon: Mic,
    items: [
      'Desenvolvimento da linguagem',
      'Comunicação social',
      'Fala e motricidade orofacial',
      'Atendimento especializado em neurodivergência'
    ]
  },
  {
    title: 'Terapia Ocupacional',
    description: 'Avaliação clínica, integração sensorial e promoção da autonomia pessoal e social, com certificação internacional em Integração Sensorial pela University of Southern California (USC, USA).',
    color: 'linear-gradient(135deg, var(--pastel-peach) 0%, var(--secondary-light) 100%)',
    icon: Activity,
    items: [
      'Certificação internacional em Integração Sensorial (USC, USA)',
      'Avaliação clínica e funcional',
      'Desenvolvimento da autonomia',
      'Socialização e independência'
    ]
  },
  {
    title: 'Terapia ABA Humanizada',
    description: 'Aplicação da Análise do Comportamento Aplicada (ABA) de forma humanizada e centrada na pessoa, desenvolvendo habilidades e aprendizagens significativas no ritmo de cada paciente.',
    color: 'linear-gradient(135deg, var(--pastel-lavender) 0%, var(--pastel-mint) 100%)',
    icon: Puzzle,
    items: [
      'Plano terapêutico individualizado',
      'Desenvolvimento de habilidades comunicativas, sociais e funcionais',
      'Aprendizagem acadêmica e cotidiana',
      'Envolvimento e orientação familiar'
    ]
  }
]

const processSteps = [
  { title: 'Acolhimento', description: 'Você entra em contato pelo WhatsApp ou formulário de agendamento.' },
  { title: 'Avaliação', description: 'Realizamos uma escuta cuidadosa e avaliação especializada.' },
  { title: 'Plano', description: 'Construímos juntos um plano individualizado e baseado em evidências.' },
  { title: 'Acompanhamento', description: 'Desenvolvemos o plano terapêutico integrativo conectando os profissionais, a família e a rede de apoio.' }
]
</script>

<template>
  <div class="services">
    <section class="hero-section">
      <div class="hero-bg-grid">
        <ClientOnly>
          <Squares
            direction="diagonal"
            :speed="1"
            :square-size="40"
            border-color="#6B4FA3"
            hover-fill-color="#3D2D5E"
          />
        </ClientOnly>
      </div>
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Nossas especialidades</span>
          <h1>Quais especialidades a Autitude oferece?</h1>
          <p>Uma equipe integrada trabalhando em conjunto pelo desenvolvimento de cada criança, adolescente, adulto e família.</p>
        </div>

        <div class="seo-answer">
          <p class="seo-paragraph">
            A Autitude oferece <strong>5 especialidades integradas</strong> para atendimento neurodivergente:
            <strong>Neuropsicologia</strong> (avaliação e diagnóstico),
            <strong>Neuropsicopedagogia</strong> (dificuldades de aprendizagem),
            <strong>Fonoaudiologia</strong> (linguagem e comunicação),
            <strong>Terapia Ocupacional</strong> (integração sensorial e autonomia) e
            <strong>Terapia ABA Humanizada</strong> (comportamento e habilidades adaptativas).
            Todas as especialidades trabalham de forma integrada em Pindamonhangaba-SP.
          </p>
        </div>

        <div class="services-showcase">
          <div 
            class="service-card-main" 
            v-for="(service, index) in services" 
            :key="service.title"
          >
            <div class="card-number">{{ index + 1 }}</div>
            <div class="card-content">
              <div class="service-icon-large" :style="{ background: service.color }">
                <component :is="service.icon" :size="28" class="icon-primary icon-inner" />
              </div>
              <div class="service-text">
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                <ul class="service-list">
                  <li v-for="item in service.items" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="process-section section">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-tag">Como funciona</span>
            <h2>Como funciona o atendimento?</h2>
          </div>
        </div>
        
        <div class="process-timeline">
          <div 
            class="process-step" 
            v-for="(step, index) in processSteps" 
            :key="index"
          >
            <div class="step-marker">{{ index + 1 }}</div>
            <div class="step-content">
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaSection
      title="Agende uma avaliação"
      tagline="💜 Cuidamos de pessoas. Potencializamos possibilidades."
      primary-btn="/agendar"
      primary-btn-text="Agendar Agora"
      :whatsapp-btn="true"
      :show-contact="false"
      :colors="['#6B4FA3', '#8FC176', '#8FB1F0', '#3D2D5E', '#5C9F45']"
      :color-bends-props="{ rotation: 28, speed: 0.16, scale: 1.3, frequency: 1.35, warpStrength: 1.05, mouseInfluence: 0.45, parallax: 0.35, noise: 0.055 }"
    />
  </div>
</template>

<style scoped>
.icon-primary {
  color: var(--lilac-deep);
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
}

.seo-paragraph strong {
  color: var(--text);
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

.section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto clamp(2rem, 5vw, 3rem);
}

.section-header h1 {
  margin-bottom: 0.75rem;
}

.section-header p {
  font-size: 1.0625rem;
  color: var(--text-secondary);
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

.services-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 480px), 1fr));
  gap: clamp(0.75rem, 2vw, 1.5rem);
  width: 100%;
}

.service-card-main {
  background: var(--surface);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xs);
  transition: all 0.35s var(--ease-out-expo);
  position: relative;
}

.service-card-main:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.card-number {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 36px;
  height: 36px;
  background: var(--lilac-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--lilac-deep);
  font-size: 0.875rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: clamp(1.25rem, 3vw, 2rem);
}

.service-icon-large {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-inner {
  opacity: 1;
}

.service-text h3 {
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  margin-bottom: 0.75rem;
}

.service-text > p {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.service-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.service-list li {
  font-size: 0.875rem;
  color: var(--text-secondary);
  padding-left: 1rem;
  position: relative;
}

.service-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 6px;
  height: 6px;
  background: var(--lilac);
  border-radius: 50%;
}

.process-section {
  background: var(--surface-alt);
}

.header-content {
  text-align: center;
  margin-bottom: 3rem;
}

.process-timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr));
  gap: clamp(1rem, 3vw, 1.5rem);
  max-width: 900px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
}

.step-marker {
  width: 52px;
  height: 52px;
  background: var(--gradient-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.125rem;
  flex-shrink: 0;
}

.step-content h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.step-content p {
  font-size: 0.8125rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

@media (max-width: 640px) {
  .services-showcase {
    grid-template-columns: 1fr;
  }
}
</style>
