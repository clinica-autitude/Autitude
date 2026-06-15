<script setup>
import {
  HandHeart, Brain, Sparkles, Users, BookOpen, Mic, Activity, Puzzle,
  MapPin, ArrowUpRight, ArrowDown, Compass, ShieldCheck, Quote,
  Clock
} from 'lucide-vue-next'
import ColorBends from '~/components/ColorBends.vue'

const { whatsappUrl, address, neighborhood, city, state } = useContact()

const siteBase = 'https://autitude.com.br'

useHead({
  title: 'Quem Somos — Nossa História e Valores | Autitude - Desenvolvimento e Ação Humana',
  meta: [
    { name: 'description', content: 'A Autitude é um espaço especializado no cuidado integrado de crianças, adolescentes, adultos e famílias, com foco no público neurodivergente. Há mais de 20 anos com acolhimento, ciência e humanidade em Pindamonhangaba-SP.' },
    { name: 'keywords', content: 'quem somos autitude, história autitude, valores autitude, clínica neurodivergência Pindamonhangaba, equipe especializada, acolhimento ciência humanidade' },
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
    { property: 'og:title', content: 'Quem Somos — Nossa História e Valores | Autitude' },
    { property: 'og:description', content: 'A Autitude é um espaço especializado em crianças, adolescentes e famílias, com foco no público neurodivergente.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${siteBase}/sobre` }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}/sobre` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Quem Somos — Autitude',
        description: 'A Autitude é um espaço especializado em crianças, adolescentes e famílias, com foco no público neurodivergente.',
        url: `${siteBase}/sobre`,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.seo-paragraph', '.seo-faq-hidden']
        },
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          description: 'Espaço especializado em crianças, adolescentes, adultos e famílias, com foco no público neurodivergente. Há mais de 20 anos de atuação.',
          url: siteBase,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rua Major José dos Santos Moreira, 328',
            addressLocality: 'Pindamonhangaba',
            addressRegion: 'SP',
            addressCountry: 'BR'
          },
          foundingDate: '2004',
          numberOfEmployees: {
            '@type': 'QuantitativeValue',
            value: '5-10'
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
          { '@type': 'ListItem', position: 2, name: 'Sobre', item: `${siteBase}/sobre` }
        ]
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
    blurb: 'Avaliação e plano pedagógico individualizado, com identificação de desafios e apoio ao desenvolvimento escolar.',
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
    blurb: 'Avaliação clínica, integração sensorial e promoção da autonomia pessoal e social, com certificação internacional (USC, USA).',
    icon: Activity,
    tone: 'yellow'
  },
  {
    name: 'Terapia ABA Humanizada',
    blurb: 'Aplicação humanizada da ABA para o desenvolvimento de habilidades comunicativas, sociais, funcionais e de aprendizagem.',
    icon: Puzzle,
    tone: 'lavender',
    span: 'full'
  }
]

const differentiators = [
  {
    label: 'Foco',
    title: 'Cuidado neurodivergente',
    text: 'Especializados em crianças, adolescentes e famílias neurodivergentes.',
    icon: Sparkles,
    tone: 'pink',
    span: 'half'
  },
  {
    label: 'Evidências Científicas',
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
          <strong>Autitude</strong> —
          Cuidado com sensibilidade e responsabilidade para um futuro de potencial pleno.
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

    <section class="seo-answer seo-text">
      <div class="container">
        <p class="seo-paragraph texture-hd" style="--texture-hd: var(--texture-hd-paper)">
          A <strong>Autitude - Desenvolvimento e Ação Humana</strong> é uma clínica especializada em neurodivergência
          localizada em Pindamonhangaba-SP, com mais de <strong>20 anos de atuação</strong>. Nossa equipe multidisciplinar
          atende crianças, adolescentes, adultos e famílias, oferecendo <a href="/servicos">neuropsicologia, fonoaudiologia,
          terapia ocupacional e terapia ABA</a> de forma integrada e baseada em evidências científicas.
        </p>
      </div>
    </section>

    <!-- BENTO: tudo no centro -->
    <section id="abordagem" class="bento-section">
      <div class="container">
        <header class="section-header section-header--center">
          <span class="tag tag--glass">
            <span class="tag-dot" /> Nossa abordagem
          </span>
          <h2 class="section-title">
            Como a Autitude trabalha o <span class="grad-text">pleno desenvolvimento</span>?
          </h2>
        </header>

        <div class="bento">
          <!-- Manifesto / statement -->
          <article class="bento__card bento__card--statement texture-hd-velvet">
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
              <span class="chip"><span class="chip-dot" />Evidências Científicas</span>
            </div>
          </article>

          <!-- Especialidades -->
          <article
            v-for="(s, i) in specialties"
            :key="s.name"
            class="bento__card bento__card--specialty texture-hd-velvet"
            :class="{ 'bento__card--specialty-full': s.span === 'full' }"
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
            class="bento__card bento__card--feature texture-hd-velvet"
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
          <article class="bento__card bento__card--location texture-hd-velvet" data-tone="lavender">
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
              {{ address }}<br />
              {{ neighborhood }} — {{ city }} / {{ state }}
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
      <ClientOnly>
        <ColorBends class="cta__bg" :colors="['#c8a8e9', '#f4a5b9', '#a8d8b9', '#FDE68A']" :speed="0.18" :warpStrength="2.4" :noise="0.08" :rotation="25" :scale="1.3" :frequency="1.2" :mouseInfluence="0.4" :parallax="0.3" transparent />
      </ClientOnly>
      <div class="container cta__inner">
        <span class="tag tag--glass">
          <span class="tag-dot" /> Vamos conversar
        </span>
        <h2 class="cta__title">
          Cada família traz uma história.<br />
          Isso importa para <span class="grad-text">nós</span>.
        </h2>
        <div class="cta__actions">
          <a
            :href="`${whatsappUrl}?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20conversa%20inicial%20na%20Autitude.`"
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
    <!-- Hidden SEO content for crawlers — featured snippets and AI citations -->
    <section class="seo-faq-hidden" aria-label="Perguntas Frequentes"
      style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;">
      <h2>O que é a Autitude — Desenvolvimento e Ação Humana?</h2>
      <p>A <strong>Autitude</strong> é uma clínica multidisciplinar especializada em <strong>neurodivergência</strong> localizada em <strong>Pindamonhangaba-SP</strong>. Fundada há mais de 20 anos, oferecemos <strong>neuropsicologia, neuropsicopedagogia, fonoaudiologia, terapia ocupacional com integração sensorial e terapia ABA humanizada</strong>. Nosso atendimento é integrado, transdisciplinar e centrado na pessoa e na família.</p>
      <h2>Qual a diferença entre birra e crise sensorial?</h2>
      <p>A birra é um comportamento intencional para obter algo, enquanto a crise sensorial é uma resposta involuntária a estímulos avassaladores. Crianças neurodivergentes podem ter crises sensoriais que exigem abordagem específica. Leia mais em <a href="/blog/birra-ou-crise-sensorial">birra ou crise sensorial</a>.</p>
      <h2>O que é comportamento opositor (TOD) na escola?</h2>
      <p>O Transtorno Opositor-Desafiante (TOD) se caracteriza por um padrão persistente de irritabilidade e desafio a figuras de autoridade. Frequentemente confundido com má conduta, o TOD requer avaliação e intervenção especializadas. Veja mais em <a href="/blog/comportamento-opositor-tod-escola">comportamento opositor TOD na escola</a>.</p>
      <h2>O plano de saúde cobre terapia ABA e fonoaudiologia?</h2>
      <p>Sim, os planos de saúde são obrigados por lei a cobrir terapias como ABA e fonoaudiologia para pacientes com TEA, conforme a Lei 9.656/98 e a Lei Berenice Piana (12.764/12). Saiba mais em <a href="/blog/cobertura-plano-saude-aba-fono">cobertura do plano de saúde para ABA e fonoaudiologia</a>.</p>
      <h2>Como conseguir liminar para tratamento de autismo?</h2>
      <p>A liminar para tratamento de autismo é um recurso judicial que obriga planos de saúde ou o poder público a custearem terapias quando há recusa de cobertura. Veja o passo a passo em <a href="/blog/liminar-tratamento-autismo">liminar para tratamento de autismo</a>.</p>
      <h2>O que são relatórios de evolução no vínculo terapêutico?</h2>
      <p>Os relatórios de evolução são documentos técnicos que registram o progresso do paciente, as intervenções realizadas e os próximos passos. São essenciais para o vínculo terapêutico e para solicitação de cobertura pelos planos. Saiba mais em <a href="/blog/vinculo-terapeutico-relatorios-evolucao">relatórios de evolução e vínculo terapêutico</a>.</p>
    </section>
    <!-- Hidden structured data for AI citation — services comparison table -->
    <div style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;" role="table" aria-label="Comparação de especialidades">
      <h2>Comparação entre as especialidades da Autitude</h2>
      <table>
        <thead>
          <tr>
            <th>Especialidade</th>
            <th>Foco Principal</th>
            <th>Para Quem</th>
            <th>Diferencial</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Neuropsicologia</td>
            <td>Avaliação cognitiva e diagnóstico de TEA/TDAH</td>
            <td>Crianças, adolescentes e adultos</td>
            <td>Rastreamento de neurodivergências com instrumentos padronizados</td>
          </tr>
          <tr>
            <td>Neuropsicopedagogia</td>
            <td>Dificuldades de aprendizagem e plano pedagógico</td>
            <td>Crianças e adolescentes em idade escolar</td>
            <td>Integra neurociência, psicologia e pedagogia</td>
          </tr>
          <tr>
            <td>Fonoaudiologia</td>
            <td>Linguagem, comunicação social e fala</td>
            <td>Crianças, adolescentes e adultos</td>
            <td>Atendimento especializado em neurodivergência</td>
          </tr>
          <tr>
            <td>Terapia Ocupacional</td>
            <td>Integração sensorial e autonomia</td>
            <td>Crianças e adolescentes</td>
            <td>Certificação internacional USC (USA) em Integração Sensorial</td>
          </tr>
          <tr>
            <td>Terapia ABA Humanizada</td>
            <td>Desenvolvimento de habilidades adaptativas</td>
            <td>Crianças e adolescentes</td>
            <td>Abordagem humanizada e centrada na pessoa</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<style scoped>
/* ==========================
   Tokens
   ========================== */
.about {
  --gap-card: clamp(0.875rem, 1.5vw, 1.25rem);
  --radius-card: var(--radius-2xl);
  --radius-pill: 999px;

  --grad-text: linear-gradient(135deg,
    var(--lilac) 0%,
    var(--lilac-dark) 40%,
    var(--lilac-deep) 100%);
    
  --border-card: 1px solid color-mix(in srgb, var(--lilac) 10%, transparent);
  --shadow-card: 0 1px 2px color-mix(in srgb, var(--text) 4%, transparent);
  --shadow-hover: 0 24px 56px -24px color-mix(in srgb, var(--lilac) 50%, transparent);
}

/* ==========================
   SEO Answer Section
   ========================== */
.seo-answer {
  padding: clamp(2rem, 5vw, 4rem) 0;
}

.seo-paragraph {
  max-width: 800px;
  margin: 0 auto;
  font-size: clamp(0.9375rem, 1.5vw + 0.25rem, 1.125rem);
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

.seo-paragraph a {
  color: var(--primary);
  text-decoration: underline;
  text-decoration-color: var(--lilac-light);
  text-underline-offset: 2px;
  transition: color 0.2s, text-decoration-color 0.2s;
}

.seo-paragraph a:hover {
  color: var(--lilac-deep);
  text-decoration-color: var(--primary);
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
  font-size: clamp(0.75rem, 1.3vw, 0.875rem);
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
  font-size: clamp(0.875rem, 1.3vw, 1rem);
  text-decoration: none;
  transition: background-color 0.3s var(--ease-out-expo), border-color 0.3s var(--ease-out-expo), color 0.3s var(--ease-out-expo), transform 0.3s var(--ease-out-expo), box-shadow 0.3s var(--ease-out-expo);
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
  width: min(480px, 70vw); height: min(480px, 70vw);
  top: -120px; left: -100px;
  background: radial-gradient(circle, var(--pastel-lavender) 0%, transparent 70%);
}
.orb--2 {
  width: min(360px, 55vw); height: min(360px, 55vw);
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
  transition: transform 0.3s var(--ease-out-expo), background 0.3s var(--ease-out-expo);
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
.hero__pillars li[data-tone="pink"] .pillar-icon { background: linear-gradient(135deg, var(--pastel-pink) 0%, var(--pink-dark) 100%); }
.hero__pillars li[data-tone="lavender"] .pillar-icon { background: linear-gradient(135deg, var(--pastel-lavender) 0%, var(--lilac) 100%); }
.hero__pillars li[data-tone="mint"] .pillar-icon { background: linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%); }
.hero__pillars li[data-tone="yellow"] .pillar-icon { background: linear-gradient(135deg, var(--yellow-soft) 0%, var(--highlight-light) 100%); }

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
  transition: transform 0.5s var(--ease-out-expo), box-shadow 0.5s var(--ease-out-expo);
  opacity: 0;
  animation: fadeSectionIn 0.7s var(--ease-out-expo) forwards;
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
  transition: opacity 0.4s var(--ease-out-expo);
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
.card__icon[data-tone="pink"]     { background: linear-gradient(135deg, var(--pastel-pink) 0%, var(--pink-dark) 100%); }
.card__icon[data-tone="mint"]     { background: linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%); }
.card__icon[data-tone="yellow"]    { background: linear-gradient(135deg, var(--yellow-soft) 0%, var(--highlight-light) 100%); }

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

.bento__card--specialty-full {
  grid-column: span 6;
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
  transition: background-color 0.3s var(--ease-out-expo), border-color 0.3s var(--ease-out-expo), color 0.3s var(--ease-out-expo), transform 0.3s var(--ease-out-expo);
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
  .bento__card--specialty-full { grid-column: span 6; }
}
@media (max-width: 640px) {
  .bento { grid-template-columns: 1fr; }
  .bento__card,
  .bento__card--statement,
  .bento__card--specialty,
  .bento__card--specialty-full,
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
