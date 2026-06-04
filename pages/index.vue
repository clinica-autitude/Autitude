<script setup>
import { 
  Brain, Heart, Sparkles, HandHeart,
  BookOpen, Mic, Activity
} from 'lucide-vue-next'
import ColorBends from '~/components/ColorBends.vue'
import Silk from '~/components/Silk.vue'
import MagicRings from '~/components/MagicRings.vue'

const config = useRuntimeConfig()
const siteBase = config.public.siteBase || 'https://hautlys.github.io/Autitude'
const fullLogoUrl = `${siteBase}/full-logo.png`
const heroLogoUrl = `${siteBase}/full-logo-no-bg.png`
const whatsappUrl = 'https://wa.me/5512991968683'

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: 'Autitude - Desenvolvimento e Ação Humana',
        description: 'Espaço especializado em crianças, adolescentes e famílias, com foco no público neurodivergente. Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia e Terapia Ocupacional em Pindamonhangaba-SP.',
        url: 'https://hautlys.github.io/Autitude',
        logo: 'https://hautlys.github.io/Autitude/full-logo.png',
        image: 'https://hautlys.github.io/Autitude/full-logo.png',
        telephone: '+5512991968683',
        email: 'contato@autitude.com.br',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Rua Major José dos Santos Moreira, 328',
          addressLocality: 'Pindamonhangaba',
          addressRegion: 'SP',
          addressCountry: 'BR',
          postalCode: '12400-010'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '-22.9309',
          longitude: '-45.4607'
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00'
          }
        ],
        priceRange: '$$',
        areaServed: {
          '@type': 'State',
          name: 'São Paulo'
        },
        serviceType: ['Neuropsicologia', 'Neuropsicopedagogia', 'Fonoaudiologia', 'Terapia Ocupacional'],
        medicalSpecialty: 'Neurodevelopmental care',
        knowsAbout: ['Neurodivergência', 'Neuropsicologia', 'Neuropsicopedagogia', 'Fonoaudiologia', 'Terapia Ocupacional', 'Integração Sensorial', 'Desenvolvimento Infantil']
      })
    }
  ]
})

const pillars = [
  {
    title: 'Acolher',
    description: 'Receber cada família com escuta, respeito e presença.',
    color: 'linear-gradient(135deg, #FFF1F4 0%, #FFE4EA 100%)',
    solidColor: '#FFF1F4',
    icon: Heart
  },
  {
    title: 'Compreender',
    description: 'Investigar o perfil único de cada pessoa com base em evidências.',
    color: 'linear-gradient(135deg, #F0F6FE 0%, #DCEBFC 100%)',
    solidColor: '#F0F6FE',
    icon: Brain
  },
  {
    title: 'Desenvolver',
    description: 'Potencializar habilidades com cuidado integral e individualizado.',
    color: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
    solidColor: '#F0FDF4',
    icon: Sparkles
  },
  {
    title: 'Incluir',
    description: 'Construir caminhos de participação e pertencimento em cada contexto.',
    color: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
    solidColor: '#FFFBEB',
    icon: HandHeart
  }
]

const services = [
  {
    name: 'Neuropsicologia',
    shortDesc: 'Avaliação e desenvolvimento cognitivo',
    color: 'linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%)',
    icon: Brain
  },
  {
    name: 'Neuropsicopedagogia',
    shortDesc: 'Apoio à aprendizagem',
    color: 'linear-gradient(135deg, var(--pastel-pink) 0%, var(--secondary-light) 100%)',
    icon: BookOpen
  },
  {
    name: 'Fonoaudiologia',
    shortDesc: 'Linguagem e comunicação',
    color: 'linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%)',
    icon: Mic
  },
  {
    name: 'Terapia Ocupacional',
    shortDesc: 'Autonomia e Integração Sensorial',
    color: 'linear-gradient(135deg, #FFF8D6 0%, #FEF3C7 100%)',
    icon: Activity
  }
]
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-bg">
        <Silk
          class="silk-bg"
          :speed="5"
          :scale="1"
          color="#6B4FA3"
          :noise-intensity="1.5"
          :rotation="0"
        />
        <div class="hero-rings" aria-hidden="true">
          <MagicRings
            color="#EE00FF"
            colorTwo="#EE00FF"
            :ringCount="6"
            :speed="1"
            :attenuation="10"
            :lineThickness="2"
            :baseRadius="0.35"
            :radiusStep="0.1"
            :scaleRate="0.1"
            :opacity="1"
            :blur="0"
            :noiseAmount="0.1"
            :rotation="0"
            :ringGap="1.5"
            :fadeIn="0.7"
            :fadeOut="0.5"
            :followMouse="true"
            :mouseInfluence="0.2"
            :hoverScale="1.2"
            :parallax="0.10"
            :clickBurst="true"
          />
        </div>
        <img
          :src="heroLogoUrl"
          alt=""
          class="hero-rings-logo"
        />
        <div class="gradient-blob blob-1"></div>
        <div class="gradient-blob blob-2"></div>
        <div class="gradient-blob blob-3"></div>
      </div>
      
      <div class="container">
        <div class="hero-wrapper">
          <div class="hero-content">
            <div class="badge-wrapper">
              <span class="hero-badge">
                <span class="badge-dot"></span>
                Cuidado humanizado e baseado em evidências
              </span>
            </div>
            
            <h1 class="hero-title">
              Desenvolvimento com
              <span class="title-highlight">acolhimento,</span>
              ciência e humanidade.
            </h1>
            
            <p class="hero-subtitle">
              A Autitude é um espaço especializado no atendimento de crianças, adolescentes e suas famílias, com foco no público neurodivergente. 
              Atuamos com uma abordagem humanizada, integrativa e baseada em evidências científicas.
            </p>

            <p class="hero-tagline">
              💜 Cuidamos de pessoas. Potencializamos possibilidades.
            </p>
            
            <div class="hero-actions">
              <NuxtLink to="/agendar" class="btn btn-primary btn-lg">
                Agendar Consulta
              </NuxtLink>
              <NuxtLink to="/servicos" class="btn btn-secondary btn-lg">
                Conhecer Serviços
              </NuxtLink>
            </div>
          </div>
          
          <div class="hero-visual">
            <div
              v-for="(pillar, index) in pillars"
              :key="pillar.title"
              class="visual-card"
              :class="`card-${index + 1}`"
              :style="{ background: pillar.solidColor }"
            >
              <div class="card-accent">
                <component :is="pillar.icon" :size="20" class="card-icon" />
              </div>
              <div class="card-text">{{ pillar.title }}</div>
            </div>
          </div>
        </div>
        
        <div class="hero-pillars">
          <p class="pillars-eyebrow">Cada indivíduo é único. Nosso cuidado também.</p>
          <div class="pillars-row">
            <span
              v-for="(pillar, index) in pillars"
              :key="`p-${pillar.title}`"
              class="pillar-chip"
            >
              <span class="pillar-num">{{ index + 1 }}</span>
              {{ pillar.title }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section id="quem-somos" class="about-preview section">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-tag">Quem somos</span>
            <h2>Cada indivíduo é único. Nosso cuidado também.</h2>
            <p>
              A <strong>Autitude Desenvolvimento e Ação Humana</strong> é um espaço especializado 
              no atendimento de crianças, adolescentes e suas famílias, com foco no público neurodivergente.
            </p>
            <p>
              Nossa abordagem é humanizada, integrativa e baseada em evidências científicas.
            </p>
          </div>
        </div>
        
        <div class="pillars-grid">
          <div
            class="pillar-card"
            v-for="(pillar, index) in pillars"
            :key="`card-${pillar.title}`"
            :style="{ '--delay': index * 0.1 + 's' }"
          >
            <div class="pillar-icon-wrapper" :style="{ background: pillar.color }">
              <component :is="pillar.icon" :size="32" class="icon-primary pillar-icon-inner" />
            </div>
            <div class="pillar-content">
              <h3>{{ pillar.title }}</h3>
              <p>{{ pillar.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services-preview section">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-tag">Nossas especialidades</span>
            <h2>Um cuidado integrado e interdisciplinar</h2>
            <p>Uma equipe multidisciplinar trabalhando em conjunto pelo desenvolvimento de cada pessoa.</p>
          </div>
        </div>
        
        <div class="services-showcase">
          <div class="service-cards-grid">
            <NuxtLink 
              v-for="service in services" 
              :key="service.name"
              to="/servicos" 
              class="service-card-mini"
            >
              <div class="card-mini-icon" :style="{ background: service.color }">
                <component :is="service.icon" :size="24" class="icon-primary mini-icon-shape" />
              </div>
              <div class="card-mini-content">
                <h4>{{ service.name }}</h4>
                <p>{{ service.shortDesc }}</p>
              </div>
              <div class="card-arrow"></div>
            </NuxtLink>
          </div>
        </div>
        
        <div class="section-cta">
          <NuxtLink to="/servicos" class="btn btn-secondary btn-lg">
            Ver Todas as Especialidades
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="cta-section section">
      <div class="container">
        <div class="cta-wrapper">
          <ColorBends
            class="cta-bg-effect"
            :colors="['#6B4FA3', '#8FC176', '#8FB1F0', '#F0C850', '#3D2D5E']"
            :rotation="25"
            :speed="0.15"
            :scale="1.3"
            :frequency="1.2"
            :warpStrength="1.0"
            :mouseInfluence="0.4"
            :parallax="0.3"
            :noise="0.05"
            transparent
          />
          <div class="cta-content">
            <span class="cta-tag">Autitude — Desenvolvimento e Ação Humana</span>
            <h2>Pronto para nos conhecer?</h2>
            <p>💜 Cuidamos de pessoas. Potencializamos possibilidades.</p>
            <div class="cta-contact">
              <a href="tel:+5512991968683" class="cta-contact-item">
                📱 (12) 99196-8683
              </a>
              <a href="https://www.instagram.com/clinicaautitude" target="_blank" rel="noopener" class="cta-contact-item">
                📷 @clinicaautitude
              </a>
              <a href="https://wa.me/5512991968683" target="_blank" rel="noopener" class="cta-contact-item">
                💬 WhatsApp
              </a>
            </div>
            <div class="cta-actions">
              <NuxtLink to="/agendar" class="btn btn-primary btn-lg">
                Agendar Avaliação
              </NuxtLink>
              <a :href="whatsappUrl" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
                Falar no WhatsApp
              </a>
            </div>
            <p class="cta-address">
              📍 Rua Major José dos Santos Moreira, 328 — Vila Rica — Pindamonhangaba/SP
            </p>
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

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 6.25rem;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  isolation: isolate;
}

.hero-rings {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(95vh, 880px);
  height: min(95vh, 880px);
  z-index: 1;
  user-select: none;
}

.hero-rings,
.hero-rings > * {
  width: 100%;
  height: 100%;
}

.hero-rings :deep(canvas) {
  display: block;
  width: 100% !important;
  height: 100% !important;
}

.hero-rings-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 68%;
  max-width: 480px;
  height: auto;
  z-index: 2;
  pointer-events: none;
  filter: drop-shadow(0 0 32px rgba(255, 255, 255, 0.55));
}

.silk-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.4;
  pointer-events: none;
}

.gradient-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  z-index: 1;
  pointer-events: none;
}

.blob-1 {
  width: 600px;
  height: 600px;
  background: var(--lilac-light);
  top: -200px;
  right: -100px;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: var(--pink-light);
  bottom: -100px;
  left: -50px;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: var(--blue-light);
  top: 40%;
  left: 30%;
}

.hero .container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.hero-wrapper {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-content {
  max-width: 560px;
}

.badge-wrapper {
  margin-bottom: 1.5rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--lilac-soft);
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--lilac-deep);
  box-shadow: var(--shadow-sm);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--success);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: 1.15;
  margin-bottom: 1.25rem;
}

.title-highlight {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-visual {
  position: relative;
  height: 460px;
}

.visual-card {
  position: absolute;
  background: var(--surface);
  padding: 1.1rem 1.5rem;
  border-radius: var(--radius-xl);
  box-shadow: 0 10px 28px rgba(42, 36, 64, 0.22);
  border: 1px solid color-mix(in srgb, var(--primary) 12%, transparent);
  display: flex;
  align-items: center;
  gap: 0.875rem;
  animation: float 6s ease-in-out infinite;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.visual-card:hover {
  transform: scale(1.02);
}

.card-1 {
  top: 2%;
  right: 18%;
  animation-delay: 0s;
}

.card-2 {
  top: 26%;
  right: 4%;
  animation-delay: -1.5s;
}

.card-3 {
  top: 50%;
  right: 22%;
  animation-delay: -3s;
}

.card-4 {
  top: 74%;
  right: 6%;
  animation-delay: -4.5s;
}

.hero-tagline {
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--primary);
  margin: 0 0 1.75rem;
  letter-spacing: 0.01em;
}

.hero-pillars {
  margin-top: 1.5rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--border);
  text-align: center;
}

.pillars-eyebrow {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-style: italic;
}

.pillars-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.pillar-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--surface);
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--lilac-deep);
  box-shadow: var(--shadow-xs);
}

.pillar-num {
  width: 22px;
  height: 22px;
  background: var(--lilac);
  color: var(--white);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.card-accent {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--primary) 10%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.3s ease;
}

.card-icon {
  color: var(--primary);
  flex-shrink: 0;
}

.card-text {
  font-weight: 700;
  font-size: 0.9375rem;
  color: var(--primary);
  white-space: nowrap;
  letter-spacing: 0.01em;
  transition: color 0.3s ease;
}

.about-preview {
  background: var(--surface-alt);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.header-content {
  max-width: 720px;
  margin: 0 auto;
}

.section-header p {
  font-size: 1.0625rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.pillar-card {
  background: var(--background);
  padding: 2rem 1.5rem;
  border-radius: var(--radius-xl);
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.pillar-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.pillar-icon-wrapper {
  width: 72px;
  height: 72px;
  margin: 0 auto 1.25rem;
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
}

.pillar-icon-inner {
  opacity: 1;
}

.pillar-content h3 {
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
}

.pillar-content p {
  font-size: 0.875rem;
  line-height: 1.6;
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

.section-header h2 {
  margin-bottom: 0.75rem;
}

.services-preview {
  background: var(--background);
}

.services-showcase {
  margin-bottom: 2.5rem;
}

.service-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
}

.service-card-mini {
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.service-card-mini:hover {
  transform: translateX(8px);
  box-shadow: var(--shadow-md);
}

.card-mini-icon {
  width: 56px;
  height: 56px;
  min-width: 56px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mini-icon-shape {
  opacity: 1;
}

.card-mini-content {
  flex: 1;
}

.card-mini-content h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: var(--text);
}

.card-mini-content p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
}

.card-arrow {
  width: 24px;
  height: 24px;
  border-right: 2px solid var(--text-light);
  border-bottom: 2px solid var(--text-light);
  transform: rotate(-45deg);
  opacity: 0.3;
}

.section-cta {
  text-align: center;
}

.cta-section {
  position: relative;
  overflow: hidden;
}

.cta-wrapper {
  position: relative;
  background: var(--surface);
  border: 1.5px solid var(--cta-card-border);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.cta-bg-effect {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.cta-content {
  position: relative;
  z-index: 1;
  padding: 4rem;
  text-align: center;
  color: var(--cta-text);
}

.cta-tag {
  display: inline-block;
  padding: 0.375rem 1rem;
  background: var(--cta-tag-bg);
  border: 1px solid var(--cta-card-border);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--cta-tag-text);
  margin-bottom: 1rem;
}

.cta-content h2 {
  margin-bottom: 0.75rem;
  color: var(--cta-text);
}

.cta-content p {
  font-size: 1.0625rem;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  color: var(--cta-text-secondary);
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.75rem;
}

.cta-contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem 1.5rem;
  margin: 1.5rem 0 0.5rem;
  font-size: 0.9375rem;
  color: var(--cta-text-secondary);
}

.cta-contact-item {
  color: var(--cta-text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.cta-contact-item:hover {
  color: var(--cta-text);
}

.cta-address {
  margin-top: 1.25rem;
  font-size: 0.9375rem;
  color: var(--cta-text-secondary);
}

@media (max-width: 1024px) {
  .hero-wrapper {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-content {
    max-width: 100%;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-visual {
    display: none;
  }
  
  .pillars-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .service-cards-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: clamp(4rem, 12vw, 6rem);
    padding-bottom: 2rem;
  }
  
  .pillars-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card-mini {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .card-arrow {
    display: none;
  }
  
  .cta-wrapper {
    padding: 2.5rem 1.5rem;
  }
  
  .cta-actions {
    flex-direction: column;
  }
  
  .cta-actions .btn {
    width: 100%;
  }
}
</style>