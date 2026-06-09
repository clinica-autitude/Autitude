<script setup>
import {
  Brain, Heart, Sparkles, HandHeart,
  BookOpen, Mic, Activity, Puzzle
} from 'lucide-vue-next'
import Silk from '~/components/Silk.vue'
import MagicRings from '~/components/MagicRings.vue'

const config = useRuntimeConfig()
const { whatsappUrl } = useContact()
const siteBase = computed(() => {
  if (import.meta.server) return config.public.siteBase || 'https://autitude.com.br'
  const host = window.location.hostname
  if (host === 'autitude.com.br' || host === 'www.autitude.com.br') return 'https://autitude.com.br'
  if (host === 'localhost' || host === '127.0.0.1') return ''
  return config.public.siteBase || 'https://autitude.com.br'
})
const fullLogoUrl = computed(() => `${siteBase.value}/full-logo.png`)
const heroLogoUrl = '/full-logo-no-bg.png'

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: 'Autitude - Desenvolvimento e Ação Humana',
        description: 'Espaço especializado em crianças, adolescentes e famílias, com foco no público neurodivergente. Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia e Terapia Ocupacional em Pindamonhangaba-SP.',
        url: 'https://autitude.com.br',
        logo: 'https://autitude.com.br/full-logo.png',
        image: 'https://autitude.com.br/full-logo.png',
        telephone: '+5512991968683',
        email: 'clinicaautitude@gmail.com',
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
    shortDesc: 'Avaliação e plano pedagógico individualizado',
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
    shortDesc: 'Avaliação Clínica, Integração Sensorial e Autonomia Pessoal e Social',
    color: 'linear-gradient(135deg, #FFF8D6 0%, #FEF3C7 100%)',
    icon: Activity
  },
  {
    name: 'Terapia ABA Humanizada',
    shortDesc: 'Desenvolvimento de habilidades e Aprendizado',
    color: 'linear-gradient(135deg, var(--pastel-lavender) 0%, var(--pastel-mint) 100%)',
    icon: Puzzle
  }
]
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-bg">
        <ClientOnly>
          <Silk
            class="silk-bg"
            :speed="5"
            :scale="1"
            color="#6B4FA3"
            :noise-intensity="1.5"
            :rotation="0"
          />
        </ClientOnly>
        <div class="hero-rings" aria-hidden="true">
          <ClientOnly>
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
              :blur="0.5"
              :noiseAmount="0.1"
              :rotation="0"
              :ringGap="1.5"
              :fadeIn="0.7"
              :fadeOut="0.5"
              :followMouse="true"
              :mouseInfluence="0.1"
              :hoverScale="0.5"
              :parallax="0.5"
              :clickBurst="true"
            />
          </ClientOnly>
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
      
      <div class="container hero-container">
        <div class="hero-layout">
          <div class="hero-text-left">
            <span class="hero-pill">
              <span class="hero-pill-dot"></span>
              Cuidado humanizado e baseado em evidências
            </span>

            <h1 class="hero-title">
              Desenvolvimento com
              <span class="title-highlight">acolhimento,</span>
              ciência e humanidade.
            </h1>
          </div>

          <div class="hero-text-right">
            <p class="hero-subtitle">
              Espaço especializado no atendimento de crianças, adolescentes, adultos e suas famílias.
              Com foco no público neurodivergente.
            </p>

            <p class="hero-tagline">
              💜 Cuidamos de pessoas. Potencializamos possibilidades.
            </p>

            <div class="hero-actions">
              <NuxtLink to="/agendar" class="btn btn-primary btn-lg">
                Agendar Consulta
              </NuxtLink>
              <NuxtLink to="/sobre" class="btn btn-lg">
                Quem Somos
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="quem-somos" class="about-preview section">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-tag">Quem somos</span>
            <h2>Cada indivíduo é único.<br>Nosso cuidado também.</h2>
          </div>
        </div>

        <div class="history-block">
          <div class="history-content">
            <span class="history-eyebrow">Nossa história</span>
            <p class="history-lead">
              Há mais de 20 anos, acreditamos que cada pessoa tem um caminho próprio de desenvolvimento
              e que o nosso trabalho é caminhar junto, não na frente.
            </p>
            <p>
              Nossa clínica nasceu da prática de profissionais que ouvem antes de concluir,
              que adaptam antes de padronizar, e que medem sucesso pelo que cada pessoa
              conquista para a própria vida.
            </p>
            <p>
              Trabalhamos com foco em desenvolvimento real e independência progressiva,
              construídos no ritmo e nas potências de quem atendemos.
            </p>
          </div>

          <figure class="history-quote">
            <span class="quote-mark" aria-hidden="true">"</span>
            <blockquote>
              "Neurodivergência não é um problema a corrigir, é uma forma de ser que merece suporte
              qualificado, respeitoso e eficaz."
            </blockquote>
          </figure>
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
            <h2>Um cuidado integrado e transdisciplinar</h2>
            <p>Profissionais alinhados às necessidades e trabalhando em conjunto pelo desenvolvimento de cada pessoa.</p>
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
          <NuxtLink to="/servicos" class="btn btn-lg">
            Ver Todas as Especialidades
          </NuxtLink>
        </div>
      </div>
    </section>

    <CtaSection
      title="Pronto para nos conhecer?"
      tagline="💜 Cuidamos de pessoas. Potencializamos possibilidades."
      :show-contact="true"
      primary-btn="/agendar"
      primary-btn-text="Agendar Avaliação"
      :whatsapp-btn="true"
      address="📍 Rua Major José dos Santos Moreira, 328 — Vila Rica — Pindamonhangaba/SP"
      :colors="['#6B4FA3', '#8FC176', '#8FB1F0', '#F0C850', '#3D2D5E']"
      :color-bends-props="{ rotation: 25, speed: 0.15, scale: 1.3, frequency: 1.2, warpStrength: 1.0, mouseInfluence: 0.4, parallax: 0.3, noise: 0.05 }"
    />
  </div>
</template>

<style scoped>
.icon-primary {
  color: var(--lilac-deep);
}

.hero {
  min-height: clamp(600px, 85vh, 880px);
  display: flex;
  align-items: center;
  padding-top: 5rem;
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
  width: min(80vh, 720px);
  height: min(80vh, 720px);
  z-index: 1;
  user-select: none;
  opacity: 0.75;
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
  width: 55%;
  max-width: 380px;
  height: auto;
  z-index: 2;
  pointer-events: none;
  filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.5));
}

.silk-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.35;
  pointer-events: none;
}

.gradient-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.45;
  z-index: 1;
  pointer-events: none;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: var(--lilac-light);
  top: -180px;
  right: -80px;
}

.blob-2 {
  width: 350px;
  height: 350px;
  background: var(--pink-light);
  bottom: -80px;
  left: -40px;
}

.blob-3 {
  width: 280px;
  height: 280px;
  background: var(--blue-light);
  top: 40%;
  left: 30%;
}

.hero-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1fr min(80vh, 720px) 1fr;
  align-items: center;
  gap: 2rem;
  min-height: clamp(600px, 85vh, 880px);
  padding-top: 5rem;
}

.hero-text-left {
  text-align: right;
  padding-right: 1rem;
}

.hero-text-right {
  text-align: left;
  padding-left: 1rem;
}

.hero-text-left > *,
.hero-text-right > * {
  animation: fadeInUp 0.7s var(--ease-smooth) both;
}

.hero-text-left > :nth-child(1) { animation-delay: 0ms; }
.hero-text-left > :nth-child(2) { animation-delay: 80ms; }
.hero-text-right > :nth-child(1) { animation-delay: 160ms; }
.hero-text-right > :nth-child(2) { animation-delay: 240ms; }
.hero-text-right > :nth-child(3) { animation-delay: 320ms; }

.hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem 0.45rem 0.6rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--lilac-deep);
  background: color-mix(in srgb, var(--lilac-soft) 85%, transparent);
  border: 1px solid color-mix(in srgb, var(--lilac-light) 50%, transparent);
  border-radius: var(--radius-full);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  margin-bottom: 1.5rem;
}

.hero-pill-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--lilac);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--lilac) 18%, transparent);
  animation: pulse 2.4s ease-in-out infinite;
}

.hero-title {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  line-height: 1.1;
  margin-bottom: 1.25rem;
  letter-spacing: -0.025em;
  font-weight: 800;
}

.title-highlight {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  line-height: 1.65;
  max-width: 42ch;
}

.hero-tagline {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--primary);
  margin: 0.5rem 0 1.75rem;
  letter-spacing: 0.01em;
}

.hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;
}

.history-block {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  max-width: 1100px;
  margin: 0 auto 3rem;
  align-items: start;
}

.history-eyebrow {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: var(--lilac-soft);
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--lilac-deep);
  margin-bottom: 1rem;
}

.history-content p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.history-lead {
  font-size: 1.0625rem !important;
  color: var(--text) !important;
  font-weight: 500;
}

.history-quote {
  position: relative;
  background: linear-gradient(135deg,
    color-mix(in srgb, var(--lilac) 8%, var(--surface)),
    color-mix(in srgb, var(--pastel-pink) 6%, var(--surface)));
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-xl);
  padding: 2rem 1.75rem 1.75rem;
  margin: 0;
  box-shadow: var(--shadow-sm);
}

.quote-mark {
  position: absolute;
  top: -0.5rem;
  left: 1.25rem;
  font-family: 'Nunito', serif;
  font-size: 4.5rem;
  line-height: 1;
  color: var(--lilac);
  font-weight: 800;
  opacity: 0.5;
}

.history-quote blockquote {
  font-size: 1.0625rem;
  line-height: 1.55;
  color: var(--lilac-deep);
  font-weight: 600;
  margin: 0;
  font-style: italic;
  letter-spacing: -0.01em;
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

/* CTA section styles are in CtaSection.vue component */

@media (max-width: 1024px) {
  .pillars-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .service-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .history-block {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .hero-layout {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    justify-items: center;
    gap: 1.5rem;
    min-height: auto;
    padding-top: 6rem;
    padding-bottom: 2rem;
  }

  .hero-rings {
    width: min(65vw, 440px);
    height: min(65vw, 440px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .hero-rings-logo {
    width: 50%;
    max-width: 280px;
  }

  .hero-text-left {
    text-align: center;
    padding-right: 0;
    order: 2;
  }

  .hero-text-right {
    text-align: center;
    padding-left: 0;
    order: 3;
  }

  .hero-subtitle {
    max-width: 54ch;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero {
    min-height: auto;
    padding-top: 5.5rem;
    padding-bottom: 2rem;
    align-items: flex-start;
  }

  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 55vh;
    min-height: 340px;
    bottom: auto;
  }

  .hero-layout {
    padding-top: 1rem;
    gap: 1rem;
    min-height: auto;
  }

  .hero-rings {
    width: min(85vw, 360px);
    height: min(85vw, 360px);
    opacity: 0.65;
  }

  .hero-rings-logo {
    width: 50%;
    max-width: 200px;
    filter: drop-shadow(0 0 24px rgba(255, 255, 255, 0.4));
  }

  .hero-container {
    padding: 0 1rem;
    position: relative;
    z-index: 3;
  }

  .hero-text-left {
    padding-top: 1rem;
  }

  .hero-pill {
    font-size: 0.75rem;
    padding: 0.35rem 0.85rem 0.35rem 0.5rem;
    margin-bottom: 1rem;
  }

  .hero-pill-dot {
    width: 6px;
    height: 6px;
  }

  .hero-title {
    font-size: clamp(1.75rem, 7vw, 2.25rem);
    line-height: 1.15;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 0.9375rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  .hero-tagline {
    font-size: 0.875rem;
    margin: 0.25rem 0 1.25rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
  }

  .hero-actions .btn {
    width: 100%;
    max-width: 280px;
  }

  .pillars-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .pillar-card {
    padding: 1.5rem 1.25rem;
  }

  .service-cards-grid {
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

  .history-content {
    padding: 1.5rem;
  }

  .history-lead {
    font-size: 1.0625rem;
  }

  .history-quote {
    padding: 1.5rem;
  }

  .history-quote blockquote {
    font-size: 1rem;
  }

  .cta-wrapper {
    padding: 2rem 1.25rem;
  }

  .cta-actions {
    flex-direction: column;
  }

  .cta-actions .btn {
    width: 100%;
  }

  .cta-contact {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
