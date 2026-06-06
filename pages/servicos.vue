<script setup>
import { Brain, BookOpen, Mic, Activity, Puzzle } from 'lucide-vue-next'
import ColorBends from '~/components/ColorBends.vue'
import Squares from '~/components/Squares.vue'

useHead({
  title: 'Especialidades | Autitude - Desenvolvimento e Ação Humana',
  meta: [
    { name: 'description', content: 'Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia, Terapia Ocupacional e Terapia ABA Humanizada em Pindamonhangaba-SP. Atendimento especializado para crianças, adolescentes e famílias, com foco no público neurodivergente.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Especialidades - Autitude',
        description: 'Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia, Terapia Ocupacional e Terapia ABA Humanizada em Pindamonhangaba-SP.',
        url: 'https://hautlys.github.io/Autitude/servicos',
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          provides: [
            'Neuropsicologia',
            'Neuropsicopedagogia',
            'Fonoaudiologia',
            'Terapia Ocupacional',
            'Terapia ABA Humanizada'
          ]
        }
      })
    }
  ]
})

const whatsappUrl = 'https://wa.me/5512991968683'

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
    description: 'Cuidado especializado das dificuldades de aprendizagem, articulando neurociência e pedagogia para potencializar o percurso escolar.',
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
      'Socialização e independência funcional'
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
  { title: 'Acompanhamento', description: 'Conduzimos o cuidado com a família e a rede de apoio.' }
]
</script>

<template>
  <div class="services">
    <section class="hero-section">
      <div class="hero-bg-grid">
        <Squares
          direction="diagonal"
          :speed="1"
          :square-size="40"
          border-color="#6B4FA3"
          hover-fill-color="#3D2D5E"
        />
      </div>
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Nossas especialidades</span>
          <h1>Cuidado integrado e transdisciplinar</h1>
          <p>Profissionais alinhados às necessidades e trabalhando em conjunto pelo desenvolvimento de cada pessoa.</p>
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
            <h2>Nosso Processo</h2>
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

    <section class="cta-section section">
      <div class="container">
        <div class="cta-card">
          <ColorBends
            class="cta-bg-effect"
            :colors="['#6B4FA3', '#8FC176', '#8FB1F0', '#3D2D5E', '#5C9F45']"
            :rotation="28"
            :speed="0.16"
            :scale="1.3"
            :frequency="1.35"
            :warpStrength="1.05"
            :mouseInfluence="0.45"
            :parallax="0.35"
            :noise="0.055"
            transparent
          />
          <div class="cta-content">
            <span class="cta-tag">Autitude — Desenvolvimento e Ação Humana</span>
            <h2>Agende uma avaliação</h2>
            <p>💜 Cuidamos de pessoas. Potencializamos possibilidades.</p>
            <div class="cta-actions">
              <NuxtLink to="/agendar" class="btn btn-primary btn-lg">
                Agendar Agora
              </NuxtLink>
              <a :href="whatsappUrl" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.icon-primary {
  color: var(--lilac-deep);
}

.hero-section {
  padding-top: var(--space-section-top);
  padding-bottom: 4rem;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-bg-grid {
  position: fixed;
  inset: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
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
  margin: 0 auto 3rem;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;
}

.service-card-main {
  background: var(--surface);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xs);
  transition: all 0.3s ease;
  position: relative;
}

.service-card-main:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.card-number {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  background: var(--lilac-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--lilac-deep);
  font-size: 1rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
}

.service-icon-large {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-inner {
  opacity: 1;
}

.service-text h3 {
  font-size: 1.25rem;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.step-marker {
  width: 56px;
  height: 56px;
  background: var(--gradient-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
}

.step-content h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.step-content p {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.cta-section {
  background: var(--background);
}

.cta-card {
  position: relative;
  background: var(--surface);
  border-radius: var(--radius-2xl);
  overflow: hidden;
}

.cta-bg-effect {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.cta-content {
  position: relative;
  z-index: 1;
  padding: 3rem;
  text-align: center;
}

.cta-tag {
  display: inline-block;
  padding: 0.375rem 1rem;
  background: rgba(255,255,255,0.6);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 1rem;
}

.cta-content h2 {
  margin-bottom: 0.75rem;
}

.cta-content p {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 900px) {
  .services-showcase {
    grid-template-columns: 1fr;
  }
  
  .process-timeline {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .process-timeline {
    grid-template-columns: 1fr;
  }
  
  .cta-actions {
    flex-direction: column;
  }
  
  .cta-actions .btn {
    width: 100%;
  }
}
</style>