<script setup>
import {
  HandHeart, Brain, Sparkles, Users, BookOpen, Mic, Activity,
  MapPin, ArrowUpRight, ArrowDown, Compass, ShieldCheck, Quote,
  Clock
} from 'lucide-vue-next'
import ColorBends from '~/components/ColorBends.vue'

useHead({
  title: 'Quem somos | Autitude - Desenvolvimento e Ação Humana',
  meta: [
    { name: 'description', content: 'A Autitude é um espaço especializado no atendimento de crianças, adolescentes e famílias, com foco no público neurodivergente. Abordagem humanizada, integrativa e baseada em evidências científicas.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Quem somos - Autitude',
        description: 'A Autitude é um espaço especializado em crianças, adolescentes e famílias, com foco no público neurodivergente.',
        url: 'https://hautlys.github.io/Autitude/sobre',
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          description: 'Espaço especializado em crianças, adolescentes e famílias, com foco no público neurodivergente.'
        }
      })
    }
  ]
})

const pillars = [
  { title: 'Acolher', icon: HandHeart, tone: 'pink' },
  { title: 'Compreender', icon: Brain, tone: 'lavender' },
  { title: 'Desenvolver', icon: Sparkles, tone: 'mint' },
  { title: 'Incluir', icon: Users, tone: 'yellow' }
]

const specialties = [
  {
    name: 'Neuropsicologia',
    blurb: 'Avaliação neuropsicológica, rastreamento de neurodivergências e desenvolvimento cognitivo, emocional e comportamental.',
    icon: Brain,
    tone: 'lavender'
  },
  {
    name: 'Neuropsicopedagogia',
    blurb: 'Identificação de desafios pedagógicos e plano individual de aprendizagem, com apoio ao desenvolvimento escolar.',
    icon: BookOpen,
    tone: 'pink'
  },
  {
    name: 'Fonoaudiologia',
    blurb: 'Linguagem, comunicação social, fala e motricidade orofacial — com olhar especializado em neurodivergência.',
    icon: Mic,
    tone: 'mint'
  },
  {
    name: 'Terapia Ocupacional',
    blurb: 'Autonomia, socialização e independência funcional, com certificação internacional em Integração Sensorial (USC, USA).',
    icon: Activity,
    tone: 'yellow'
  }
]

const differentiators = [
  {
    label: 'Multidisciplinar',
    title: 'Quatro especialidades, uma jornada',
    text: 'Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia e Terapia Ocupacional integradas em rede, com a família e a escola.',
    icon: Users,
    tone: 'lavender',
    span: 'wide'
  },
  {
    label: 'Foco',
    title: 'Cuidado neurodivergente',
    text: 'Especializados em crianças, adolescentes e famílias neurodivergentes.',
    icon: Sparkles,
    tone: 'pink',
    span: 'half'
  },
  {
    label: 'Evidências',
    title: 'Ciência que sustenta',
    text: 'Prática baseada em evidências, com certificação internacional (USC, USA).',
    icon: ShieldCheck,
    tone: 'mint',
    span: 'half'
  }
]
</script>

<template>
  <article class="about">
    <!-- HERO: tudo em um só -->
    <section class="hero">
      <div class="hero__decor">
        <span class="orb orb--1" />
        <span class="orb orb--2" />
        <span class="grid-mask" />
      </div>
      <div class="container hero__inner">
        <span class="tag tag--glass">
          <span class="tag-dot" /> Quem somos
        </span>
        <h1 class="hero__title">
          Acolhemos pessoas.<br />
          <span class="grad-text">Potencializamos possibilidades.</span>
        </h1>
        <p class="hero__lead">
          A <strong>Autitude</strong> é um espaço especializado no cuidado integrado de
          <em>crianças, adolescentes e famílias</em>, com foco no público neurodivergente.
          Atuamos com uma abordagem humanizada, integrativa e baseada em evidências.
        </p>

        <ul class="hero__pillars" aria-label="Nossos pilares">
          <li v-for="p in pillars" :key="p.title" :data-tone="p.tone">
            <span class="pillar-icon">
              <component :is="p.icon" :size="16" :stroke-width="2.4" />
            </span>
            <span class="pillar-label">{{ p.title }}</span>
          </li>
        </ul>

        <div class="hero__actions">
          <NuxtLink to="/contato" class="btn btn--primary">
            Conversar com a gente
            <ArrowUpRight :size="18" :stroke-width="2.5" />
          </NuxtLink>
          <NuxtLink to="/servicos" class="btn btn--ghost">
            Ver especialidades
          </NuxtLink>
        </div>
      </div>

      <a href="#abordagem" class="hero__scroll" aria-label="Rolar para a abordagem">
        <ArrowDown :size="18" :stroke-width="2.4" />
      </a>
    </section>

    <!-- BENTO: tudo no centro -->
    <section id="abordagem" class="bento-section">
      <div class="container">
        <header class="section-header section-header--center">
          <span class="tag tag--glass">
            <span class="tag-dot" /> Nossa abordagem
          </span>
          <h2 class="section-title">
            Cuidado integrado, com <span class="grad-text">pessoas no centro</span>
          </h2>
        </header>

        <div class="bento">
          <!-- Manifesto / statement -->
          <article class="bento__card bento__card--statement">
            <div class="statement__bg" />
            <Quote :size="32" :stroke-width="2" class="statement__icon" />
            <p class="statement__text">
              Cada indivíduo é único — <em>nosso cuidado também.</em>
              Combinamos diferentes olhares profissionais para compreender cada pessoa
              em sua totalidade.
            </p>
            <div class="statement__chips">
              <span class="chip"><span class="chip-dot" />Humanizada</span>
              <span class="chip"><span class="chip-dot" />Integrativa</span>
              <span class="chip"><span class="chip-dot" />Evidências</span>
            </div>
          </article>

          <!-- Especialidades -->
          <article
            v-for="(s, i) in specialties"
            :key="s.name"
            class="bento__card bento__card--specialty"
            :data-tone="s.tone"
          >
            <span class="card__index">0{{ i + 1 }}</span>
            <div class="card__icon" :data-tone="s.tone">
              <component :is="s.icon" :size="22" :stroke-width="2.2" />
            </div>
            <h3 class="card__title">{{ s.name }}</h3>
            <p class="card__text">{{ s.blurb }}</p>
          </article>

          <!-- Diferenciais -->
          <article
            v-for="d in differentiators"
            :key="d.label"
            class="bento__card bento__card--feature"
            :class="`bento__card--${d.span}`"
            :data-tone="d.tone"
          >
            <div class="card__icon" :data-tone="d.tone">
              <component :is="d.icon" :size="22" :stroke-width="2.2" />
            </div>
            <span class="card__label">{{ d.label }}</span>
            <h3 class="card__title">{{ d.title }}</h3>
            <p class="card__text">{{ d.text }}</p>
          </article>

          <!-- Localização -->
          <article class="bento__card bento__card--location" data-tone="lavender">
            <div class="location__bg" />
            <div class="location__head">
              <div class="card__icon" data-tone="lavender">
                <MapPin :size="22" :stroke-width="2.2" />
              </div>
              <div>
                <span class="card__label">Onde estamos</span>
                <h3 class="card__title card__title--md">Pindamonhangaba, SP</h3>
              </div>
            </div>
            <p class="card__text">
              Rua Major José dos Santos Moreira, 328<br />
              Vila Rica — Pindamonhangaba / SP
            </p>
            <div class="location__meta">
              <span class="chip chip--sm">
                <Clock :size="12" :stroke-width="2.4" />
                Seg–Sex · 8h às 18h
              </span>
              <span class="chip chip--sm">Presencial &amp; online</span>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Major+Jos%C3%A9+dos+Santos+Moreira%2C+328+-+Vila+Rica%2C+Pindamonhangaba+-+SP"
              target="_blank"
              rel="noopener"
              class="location__link"
            >
              Ver no Google Maps
              <ArrowUpRight :size="15" :stroke-width="2.5" />
            </a>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <ColorBends class="cta__bg" :colors="['#c8a8e9', '#f4a5b9', '#a8d8b9', '#FDE68A']" :speed="0.18" :bend-width="2.4" :noise="0.08" />
      <div class="container cta__inner">
        <span class="tag tag--glass">
          <span class="tag-dot" /> Vamos conversar
        </span>
        <h2 class="cta__title">
          Cada família traz uma história.<br />
          Estamos aqui para <span class="grad-text">escutar a sua</span>.
        </h2>
        <div class="cta__actions">
          <a
            href="https://wa.me/5512991968683?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20conversa%20inicial%20na%20Autitude."
            target="_blank"
            rel="noopener"
            class="btn btn--primary"
          >
            Agendar conversa
            <ArrowUpRight :size="18" :stroke-width="2.5" />
          </a>
          <NuxtLink to="/equipe" class="btn btn--ghost">
            Conhecer a equipe
          </NuxtLink>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
/* ==========================
   Tokens
   ========================== */
.about {
  --gap-card: clamp(0.875rem, 1.5vw, 1.25rem);
  --radius-card: 28px;
  --radius-pill: 999px;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);

  --grad-text: linear-gradient(135deg,
    var(--lilac) 0%,
    var(--pastel-pink) 50%,
    var(--accent-light) 100%);

  --border-card: 1px solid color-mix(in srgb, var(--lilac) 10%, transparent);
  --shadow-card: 0 1px 2px color-mix(in srgb, var(--text) 4%, transparent);
  --shadow-hover: 0 24px 56px -24px color-mix(in srgb, var(--lilac) 50%, transparent);
}

/* ==========================
   Layout
   ========================== */
.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
}

.section-header--center {
  text-align: center;
  max-width: 720px;
  margin: 0 auto clamp(2.5rem, 5vw, 4rem);
}

.section-title {
  font-size: clamp(1.875rem, 4vw, 2.75rem);
  line-height: 1.08;
  letter-spacing: -0.025em;
  font-weight: 800;
  margin: 1rem 0 0;
  color: var(--primary-dark);
}

.grad-text {
  background: var(--grad-text);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

/* ==========================
   Reusable
   ========================== */
.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.9rem;
  border-radius: var(--radius-pill);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--primary-dark);
  background: color-mix(in srgb, var(--lilac) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--lilac) 18%, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.tag-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--lilac);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--lilac) 18%, transparent);
  animation: pulse 2.4s ease-in-out infinite;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 1.5rem;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s var(--ease);
  border: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
}
.btn--primary {
  background: var(--lilac);
  color: white;
  box-shadow: 0 8px 24px -10px color-mix(in srgb, var(--lilac) 60%, transparent);
}
.btn--primary:hover {
  background: var(--lilac-deep);
  transform: translateY(-2px);
  box-shadow: 0 14px 32px -10px color-mix(in srgb, var(--lilac) 70%, transparent);
}
.btn--ghost {
  background: transparent;
  color: var(--primary-dark);
  border-color: color-mix(in srgb, var(--lilac) 30%, transparent);
}
.btn--ghost:hover {
  background: color-mix(in srgb, var(--lilac) 8%, transparent);
  border-color: var(--lilac);
  transform: translateY(-2px);
}

/* ==========================
   HERO
   ========================== */
.hero {
  position: relative;
  padding: clamp(6rem, 12vw, 10rem) 0 clamp(5rem, 10vw, 8rem);
  overflow: hidden;
  isolation: isolate;
}
.hero__decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: -1;
}
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  animation: float 18s ease-in-out infinite;
}
.orb--1 {
  width: 480px; height: 480px;
  top: -120px; left: -100px;
  background: radial-gradient(circle, var(--pastel-lavender) 0%, transparent 70%);
}
.orb--2 {
  width: 360px; height: 360px;
  top: 40%; right: -80px;
  background: radial-gradient(circle, var(--pastel-pink) 0%, transparent 70%);
  animation-delay: -8s;
}
.grid-mask {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, color-mix(in srgb, var(--lilac) 6%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in srgb, var(--lilac) 6%, transparent) 1px, transparent 1px);
  background-size: 48px 48px;
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, black 0%, transparent 80%);
          mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, black 0%, transparent 80%);
}
.hero__inner {
  position: relative;
  z-index: 1;
  max-width: 880px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero__title {
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 1.02;
  letter-spacing: -0.035em;
  font-weight: 800;
  margin: 1.25rem 0 1.5rem;
  color: var(--primary-dark);
}
.hero__lead {
  font-size: clamp(1.0625rem, 1.5vw, 1.2rem);
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 60ch;
  margin: 0 0 2rem;
}
.hero__lead strong { color: var(--primary-dark); }
.hero__lead em {
  color: var(--lilac-deep);
  font-style: normal;
  font-weight: 600;
}

.hero__pillars {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  list-style: none;
  margin: 0 0 2.5rem;
  padding: 0;
}
.hero__pillars li {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius-pill);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary-dark);
  background: color-mix(in srgb, var(--surface) 70%, transparent);
  border: 1px solid color-mix(in srgb, var(--lilac) 12%, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: transform 0.3s var(--ease), background 0.3s var(--ease);
}
.hero__pillars li:hover { transform: translateY(-2px); }
.pillar-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px; height: 22px;
  border-radius: 6px;
  color: white;
}
.hero__pillars li[data-tone="pink"] .pillar-icon { background: linear-gradient(135deg, var(--pastel-pink) 0%, #e08599 100%); }
.hero__pillars li[data-tone="lavender"] .pillar-icon { background: linear-gradient(135deg, var(--pastel-lavender) 0%, var(--lilac) 100%); }
.hero__pillars li[data-tone="mint"] .pillar-icon { background: linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%); }
.hero__pillars li[data-tone="yellow"] .pillar-icon { background: linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%); }

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.hero__scroll {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px; height: 38px;
  border-radius: 50%;
  color: var(--lilac);
  background: color-mix(in srgb, var(--surface) 80%, transparent);
  border: 1px solid color-mix(in srgb, var(--lilac) 18%, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  text-decoration: none;
  animation: bob 2.4s ease-in-out infinite;
  z-index: 1;
}
.hero__scroll:hover { color: var(--lilac-deep); }

/* ==========================
   BENTO
   ========================== */
.bento-section {
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.bento {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--gap-card);
}

.bento__card {
  position: relative;
  background: var(--surface);
  border-radius: var(--radius-card);
  padding: clamp(1.5rem, 2.5vw, 2.25rem);
  border: var(--border-card);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  isolation: isolate;
  transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);
}
/* gradient border on hover */
.bento__card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg,
    color-mix(in srgb, var(--lilac) 50%, transparent),
    color-mix(in srgb, var(--pastel-pink) 50%, transparent),
    color-mix(in srgb, var(--accent-light) 50%, transparent));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s var(--ease);
  pointer-events: none;
}
.bento__card:hover { transform: translateY(-4px); box-shadow: var(--shadow-hover); }
.bento__card:hover::before { opacity: 1; }

/* Card primitives */
.card__index {
  position: absolute;
  top: 1.25rem; right: 1.5rem;
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: color-mix(in srgb, var(--text) 28%, transparent);
  font-variant-numeric: tabular-nums;
}
.card__icon {
  width: 46px; height: 46px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 0.75rem;
}
.card__icon[data-tone="lavender"] { background: linear-gradient(135deg, var(--pastel-lavender) 0%, var(--lilac) 100%); }
.card__icon[data-tone="pink"]     { background: linear-gradient(135deg, var(--pastel-pink) 0%, #e08599 100%); }
.card__icon[data-tone="mint"]     { background: linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%); }
.card__icon[data-tone="yellow"]    { background: linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%); }

.card__label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--lilac);
  margin-bottom: 0.35rem;
}
.card__title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--primary-dark);
  margin: 0 0 0.5rem;
  letter-spacing: -0.01em;
  line-height: 1.25;
}
.card__title--md { font-size: 1.25rem; }
.card__text {
  font-size: 0.9375rem;
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0;
}

/* STATEMENT */
.bento__card--statement {
  grid-column: span 6;
  padding: clamp(2rem, 4vw, 3rem);
  background: linear-gradient(135deg,
    color-mix(in srgb, var(--lilac) 8%, var(--surface)),
    color-mix(in srgb, var(--pastel-pink) 6%, var(--surface)));
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-start;
}
.statement__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--lilac) 20%, transparent) 0%, transparent 50%),
    radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--pastel-pink) 18%, transparent) 0%, transparent 50%);
}
.statement__icon { color: var(--lilac); opacity: 0.6; }
.statement__text {
  font-size: clamp(1.125rem, 1.9vw, 1.5rem);
  line-height: 1.4;
  letter-spacing: -0.015em;
  font-weight: 500;
  color: var(--primary-dark);
  max-width: 60ch;
  margin: 0;
}
.statement__text em {
  font-style: normal;
  color: var(--lilac-deep);
  font-weight: 600;
}
.statement__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-pill);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--lilac-deep);
  background: color-mix(in srgb, var(--lilac) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--lilac) 18%, transparent);
}
.chip-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: currentColor;
}
.chip--sm {
  font-size: 0.75rem;
  padding: 0.3rem 0.7rem;
  color: var(--text-secondary);
  background: color-mix(in srgb, var(--text) 5%, transparent);
  border-color: color-mix(in srgb, var(--text) 10%, transparent);
}

/* SPECIALTY */
.bento__card--specialty {
  grid-column: span 3;
  display: flex;
  flex-direction: column;
  min-height: 220px;
}

/* FEATURE */
.bento__card--feature {
  display: flex;
  flex-direction: column;
  min-height: 200px;
}
.bento__card--wide { grid-column: span 4; }
.bento__card--half { grid-column: span 2; }

/* LOCATION */
.bento__card--location {
  grid-column: span 4;
  background: linear-gradient(135deg,
    color-mix(in srgb, var(--pastel-mint) 10%, var(--surface)),
    color-mix(in srgb, var(--pastel-lavender) 8%, var(--surface)));
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.location__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(to right, color-mix(in srgb, var(--accent-light) 8%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in srgb, var(--accent-light) 8%, transparent) 1px, transparent 1px);
  background-size: 32px 32px;
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 0% 50%, black 0%, transparent 70%);
          mask-image: radial-gradient(ellipse 80% 70% at 0% 50%, black 0%, transparent 70%);
}
.location__head {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}
.location__head .card__icon { margin: 0; }
.location__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.location__link {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: auto;
  padding: 0.55rem 0.95rem;
  border-radius: var(--radius-pill);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--lilac-deep);
  background: color-mix(in srgb, var(--lilac) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--lilac) 22%, transparent);
  text-decoration: none;
  transition: all 0.3s var(--ease);
}
.location__link:hover {
  background: var(--lilac);
  color: white;
  transform: translateX(2px);
}

/* ==========================
   CTA
   ========================== */
.cta {
  position: relative;
  padding: clamp(5rem, 10vw, 8rem) 0;
  overflow: hidden;
  isolation: isolate;
}
.cta__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
}
.cta__inner {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cta__title {
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  font-weight: 800;
  color: var(--primary-dark);
  margin: 1.25rem 0 2rem;
}
.cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

/* ==========================
   Animations
   ========================== */
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%      { transform: translate(30px, -20px) scale(1.05); }
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 4px color-mix(in srgb, var(--lilac) 18%, transparent); }
  50%      { box-shadow: 0 0 0 8px color-mix(in srgb, var(--lilac) 6%, transparent); }
}
@keyframes bob {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%      { transform: translateX(-50%) translateY(6px); }
}

/* ==========================
   Responsive
   ========================== */
@media (max-width: 1024px) {
  .bento__card--wide { grid-column: span 6; }
  .bento__card--half { grid-column: span 3; }
  .bento__card--location { grid-column: span 6; }
}
@media (max-width: 720px) {
  .bento { grid-template-columns: 1fr; }
  .bento__card,
  .bento__card--statement,
  .bento__card--specialty,
  .bento__card--feature,
  .bento__card--wide,
  .bento__card--half,
  .bento__card--location {
    grid-column: span 1;
  }
  .hero__actions { flex-direction: column; align-items: stretch; }
  .btn { justify-content: center; }
  .hero__scroll { display: none; }
}
</style>