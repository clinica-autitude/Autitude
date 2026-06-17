<script setup>
import { computed } from 'vue'
import {
  Brain, Heart, Sparkles, HandHeart,
  BookOpen, Mic, Activity, Puzzle
} from 'lucide-vue-next'
import Grainient from '~/components/Grainient.vue'
import MagicRings from '~/components/MagicRings.vue'
import {
  HeroPanel, HeroTitle, HeroTitleHighlight,
  HeroActions
} from '~/components/hero'

const { siteBase } = useSiteBase()
const {
  whatsappUrl,
  phone,
  email,
  address,
  neighborhood,
  city,
  state,
  postalCode,
  fullAddress,
  instagramUrl,
  latitude,
  longitude
} = useContact()
const fullLogoUrl = computed(() => `${siteBase.value}/full-logo.png`)
const heroLogoUrl = '/full-logo-no-bg.png'

useHead({
  title: 'Autitude | Desenvolvimento e Ação Humana',
  meta: [
    { name: 'description', content: 'Autitude — Desenvolvimento e Ação Humana. Espaço especializado em crianças, adolescentes, adultos e famílias, com foco no público neurodivergente. Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia, Terapia Ocupacional e Terapia ABA Humanizada em Pindamonhangaba-SP.' },
    { name: 'keywords', content: 'autitude, neurodivergência, neuropsicologia, neuropsicopedagogia, fonoaudiologia, terapia ocupacional, terapia ABA, integração sensorial, Pindamonhangaba, desenvolvimento infantil, TEA, TDAH' },
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
    { property: 'og:title', content: 'Autitude | Desenvolvimento e Ação Humana' },
    { property: 'og:description', content: 'Desenvolvimento com acolhimento, ciência e humanidade. Cuidamos de pessoas. Potencializamos possibilidades.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://autitude.com.br' }
  ],
  link: [
    { rel: 'canonical', href: 'https://autitude.com.br' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@id': 'https://autitude.com.br/#clinic',
        '@type': 'MedicalBusiness',
        name: 'Autitude — Desenvolvimento e Ação Humana',
        description: 'Espaço especializado em crianças, adolescentes, adultos e famílias, com foco no público neurodivergente. Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia, Terapia Ocupacional e Terapia ABA Humanizada em Pindamonhangaba-SP.',
        url: 'https://autitude.com.br',
        logo: 'https://autitude.com.br/full-logo.png',
        image: 'https://autitude.com.br/logo.png',
        telephone: `+${phone}`,
        email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${address} — ${neighborhood}`,
          addressLocality: city,
          addressRegion: state,
          addressCountry: 'BR',
          postalCode
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude,
          longitude
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
        areaServed: [
          { '@type': 'City', name: 'Pindamonhangaba' },
          { '@type': 'City', name: 'São José dos Campos' },
          { '@type': 'City', name: 'Taubaté' },
          { '@type': 'City', name: 'Guaratinguetá' },
          { '@type': 'State', name: 'São Paulo' }
        ],
        serviceType: ['Neuropsicologia', 'Neuropsicopedagogia', 'Fonoaudiologia', 'Terapia Ocupacional', 'Terapia ABA Humanizada'],
        medicalSpecialty: ['Neuropsychiatry', 'Pediatrics', 'Physiotherapy'],
        amenityFeature: ['Sala Multissensorial de Integração Sensorial'],
        knowsAbout: ['Neurodivergência', 'Neuropsicologia', 'Neuropsicopedagogia', 'Fonoaudiologia', 'Terapia Ocupacional', 'Integração Sensorial', 'Desenvolvimento Infantil', 'TEA', 'TDAH', 'Terapia ABA', 'Dislexia'],
        sameAs: [
          instagramUrl
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          bestRating: '5',
          ratingCount: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Família' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Atendimento excelente, profissionais muito capacitados e acolhedores.'
          }
        ],
        foundingDate: '2004',
        slogan: 'Cuidamos de pessoas. Potencializamos possibilidades.'
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Autitude - Desenvolvimento e Ação Humana',
        url: 'https://autitude.com.br',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://autitude.com.br/faq?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://autitude.com.br' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Autitude - Desenvolvimento e Ação Humana',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.seo-paragraph', '.seo-faq-hidden']
        }
      })
    }
  ]
})

const pillars = [
  {
    title: 'Acolher',
    description: 'Receber cada família com escuta, respeito e presença.',
    color: 'linear-gradient(135deg, #FFF1F4 0%, #FFE4EA 100%)',
    icon: Heart
  },
  {
    title: 'Compreender',
    description: 'Investigar o perfil único de cada pessoa com base em evidências.',
    color: 'linear-gradient(135deg, #F0F6FE 0%, #DCEBFC 100%)',
    icon: Brain
  },
  {
    title: 'Desenvolver',
    description: 'Potencializar habilidades com cuidado integral e individualizado.',
    color: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
    icon: Sparkles
  },
  {
    title: 'Incluir',
    description: 'Construir caminhos de participação e pertencimento em cada contexto.',
    color: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
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
    shortDesc: 'Avaliação Clínica, Integração Sensorial e Autonomia',
    color: 'linear-gradient(135deg, #FFF8D6 0%, #FEF3C7 100%)',
    icon: Activity
  },
  {
    name: 'Terapia ABA Humanizada',
    shortDesc: 'Desenvolvimento de habilidades e aprendizado',
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
          <Grainient
            className="silk-bg"
            :timeSpeed="0.3"
            :zoom="1"
            color1="#6B4FA3"
            color2="#8FC176"
            color3="#3D2D5E"
            :grainAmount="0.05"
            :contrast="1.0"
            :gamma="1.0"
            :saturation="1.0"
            :warpStrength="2.0"
            :warpFrequency="3.0"
            :warpSpeed="1.0"
            :rotationAmount="0"
          />
        </ClientOnly>
        <div class="hero-bg-center">
          <div class="hero-rings float float-slow" aria-hidden="true" style="--float-delay: 0s">
            <ClientOnly>
              <MagicRings
                color="#6B4FA3"
                colorTwo="#EE00FF"
                :ringCount="8"
                :speed="0.8"
                :attenuation="8"
                :lineThickness="2.5"
                :baseRadius="0.3"
                :radiusStep="0.12"
                :scaleRate="0.08"
                :opacity="0.9"
                :blur="0"
                :noiseAmount="0.05"
                :rotation="0"
                :ringGap="1.4"
                :fadeIn="0.6"
                :fadeOut="0.4"
                :followMouse="true"
                :mouseInfluence="0.15"
                :hoverScale="0.6"
                :parallax="0.4"
                :clickBurst="true"
              />
            </ClientOnly>
          </div>
          <img
            :src="heroLogoUrl"
            alt=""
            class="hero-rings-logo float-reverse"
            style="--float-duration: 7s; --float-delay: 1.5s;"
          />
        </div>
        <div class="gradient-blob blob-1"></div>
        <div class="gradient-blob blob-2"></div>
        <div class="gradient-blob blob-3"></div>
      </div>
      
      <div class="container hero-container">
        <div class="hero-layout">
          <div class="hero-left float-slow texture-hd-velvet" style="--float-duration: 7s">
            <span class="hero-eyebrow float-subtle">Cuidado humanizado e baseado em evidências</span>
            <HeroTitle>
              Autitude — Desenvolvimento com
              <HeroTitleHighlight>acolhimento,</HeroTitleHighlight>
              ciência e humanidade.
            </HeroTitle>
          </div>

          <div class="hero-right texture-hd-velvet">
            <div class="hero-card hero-card--desc" :style="{ '--stagger': 0 }">
              <div class="card-shine" />
              <p>Espaço especializado no atendimento de <strong>crianças, adolescentes, adultos</strong> e suas famílias.</p>
            </div>

            <div class="hero-badge" :style="{ '--stagger': 1 }">
              <span class="badge-accent" />
              <span>Nosso foco é o público <strong>neurodivergente</strong>.</span>
            </div>

            <div class="hero-emphasis" :style="{ '--stagger': 2 }">
              <span class="emphasis-heart" aria-hidden="true">💜</span>
              <span>Cuidamos de pessoas. <em>Potencializamos possibilidades.</em></span>
            </div>

            <HeroPanel side="right" compact class="hero-right-actions" :style="{ '--stagger': 3 }">
              <HeroActions
                :actions="[
                  { to: '/agendar', label: 'Agendar Consulta', variant: 'btn-primary' },
                  { to: '/sobre', label: 'Quem Somos' }
                ]"
              />
            </HeroPanel>
          </div>
        </div>
      </div>
    </section>

    <section class="seo-answer" aria-label="Resumo">
      <div class="container">
        <p class="seo-paragraph texture-hd" style="--texture-hd: var(--texture-hd-paper)">
          A <strong>Autitude</strong> é uma clínica especializada em <strong>neurodivergência</strong> em Pindamonhangaba, SP.
          Oferecemos <a href="/servicos">terapia ocupacional infantil, neuropsicologia, fonoaudiologia e terapia ABA</a>
          para crianças, adolescentes, adultos e suas famílias. Nosso time de <a href="/equipe">profissionais especializados</a>
          atua de forma integrada e transdisciplinar, com foco em desenvolvimento real e independência progressiva.
        </p>
      </div>
    </section>

    <section id="quem-somos" class="about-preview section texture-hd-velvet">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-tag">Quem somos</span>
            <h2>O que faz cada indivíduo ser único?</h2>
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

          <figure class="history-quote texture-hd-paper">
            <span class="quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote>
              &ldquo;Neurodivergência não é um problema a corrigir, é uma forma de ser que merece suporte
              qualificado, respeitoso e eficaz.&rdquo;
            </blockquote>
          </figure>
        </div>

        <div class="pillars-grid">
          <div
            class="pillar-card texture-hd"
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

    <section class="services-preview section texture-hd" style="--texture-hd: var(--texture-hd-velvet)">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-tag">Nossas especialidades</span>
            <h2>Quais especialidades a Autitude oferece?</h2>
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
              <div class="card-arrow" aria-hidden="true"></div>
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
      :address="`📍 ${fullAddress}`"
      :colors="['#6B4FA3', '#8FC176', '#8FB1F0', '#F0C850', '#3D2D5E']"
      :color-bends-props="{ rotation: 25, speed: 0.15, scale: 1.3, frequency: 1.2, warpStrength: 1.0, mouseInfluence: 0.4, parallax: 0.3, noise: 0.05 }"
    />

    <!-- Hidden SEO FAQ content for crawlers — questions/answers for featured snippets and AI citations -->
    <section class="seo-faq-hidden" aria-label="Perguntas Frequentes"
      style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;"
      itemscope itemtype="https://schema.org/FAQPage">
      
      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h2 itemprop="name">O que é a Autitude e onde ela está localizada?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>A <strong>Autitude — Desenvolvimento e Ação Humana</strong> é uma clínica especializada em <strong>neurodivergência</strong> localizada em <strong>Pindamonhangaba, SP</strong>, na Rua Major José dos Santos Moreira, 328 — Vila Rica. Atendemos crianças, adolescentes, adultos e famílias com foco em neuropsicologia, neuropsicopedagogia, fonoaudiologia, terapia ocupacional com integração sensorial e terapia ABA humanizada.</p>
          </div>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">O que é diagnóstico tardio de autismo e como identificá-lo na idade escolar?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>O <strong>diagnóstico tardio de autismo</strong> ocorre quando crianças em idade escolar (6 a 12 anos) recebem o diagnóstico de Transtorno do Espectro Autista após os primeiros anos de vida. Muitas vezes os sinais são confundidos com outros transtornos ou atribuídos à personalidade da criança. Saiba mais em nosso artigo sobre <a href="/blog/diagnostico-autismo-idade-escolar">diagnóstico de autismo na idade escolar</a>.</p>
          </div>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">Quais as diferenças entre autismo e TDAH na infância?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>Embora <strong>autismo (TEA)</strong> e <strong>TDAH</strong> compartilhem sintomas como desatenção e impulsividade, são condições distintas. No TEA há prejuízos na comunicação social e comportamentos repetitivos, enquanto no TDAH o núcleo é a desregulação da atenção e hiperatividade. Veja nossa comparação detalhada em <a href="/blog/diferenca-autismo-tdah-infancia">diferença entre autismo e TDAH na infância</a>.</p>
          </div>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">Como funciona o processo de avaliação neuropsicológica?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>A <strong>avaliação neuropsicológica</strong> é um processo abrangente que inclui entrevistas, aplicação de testes padronizados e observação comportamental para investigar funções cognitivas como memória, atenção, linguagem e funções executivas. O processo completo pode levar de 4 a 8 sessões. Entenda cada etapa em <a href="/blog/avaliacao-neuropsicologica-processo">como é o processo de avaliação neuropsicológica</a>.</p>
          </div>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">Como diferenciar birra de crise sensorial em crianças?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>A <strong>birra</strong> é um comportamento intencional para obter algo, enquanto a <strong>crise sensorial</strong> é uma reação involuntária a estímulos avassaladores no ambiente. Crianças neurodivergentes, especialmente no espectro autista, podem ter crises sensoriais que não devem ser confundidas com birras. Aprenda a diferenciar em <a href="/blog/birra-ou-crise-sensorial">birra ou crise sensorial</a>.</p>
          </div>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">O que é comportamento opositor (TOD) no contexto escolar?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>O <strong>Transtorno Opositor-Desafiante (TOD)</strong> se caracteriza por um padrão persistente de irritabilidade, discussão e desafio a figuras de autoridade. Na escola, esses comportamentos podem ser confundidos com má conduta, mas frequentemente indicam necessidades não atendidas. Veja estratégias em <a href="/blog/comportamento-opositor-tod-escola">comportamento opositor TOD na escola</a>.</p>
          </div>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">Como a terapia ABA humanizada trabalha as estereotipias?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>A <strong>terapia ABA humanizada</strong> aborda as estereotipias (movimentos ou sons repetitivos) não como comportamentos a serem eliminados, mas como formas de comunicação e regulação que podem ser compreendidas e redirecionadas. A abordagem respeita a funcionalidade do estímulo para a pessoa. Leia mais em <a href="/blog/aba-humanizada-estereotipias">ABA humanizada e estereotipias</a>.</p>
          </div>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">Quais são os marcos do desenvolvimento da fala infantil?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>Os <strong>marcos da fala infantil</strong> incluem: balbucio aos 6 meses, primeiras palavras aos 12 meses, combinação de 2 palavras aos 24 meses e frases completas aos 36 meses. Atrasos nesses marcos podem indicar a necessidade de intervenção fonoaudiológica. Confira a tabela completa em <a href="/blog/marcos-fala-infantil">marcos da fala infantil</a>.</p>
          </div>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">O que é seletividade alimentar no autismo?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>A <strong>seletividade alimentar</strong> é comum em crianças no espectro autista, relacionada à hipersensibilidade sensorial a texturas, cores, cheiros e temperaturas dos alimentos. Não se trata de "frescura", mas de uma resposta neurológica a estímulos aversivos. Saiba como intervir em <a href="/blog/seletividade-alimentar-autismo">seletividade alimentar no autismo</a>.</p>
          </div>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">Como a integração sensorial ajuda crianças não-verbais a se comunicarem?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>A <strong>integração sensorial</strong> organiza as sensações do corpo e do ambiente, criando as bases neurológicas para a comunicação intencional. Para crianças não-verbais, a regulação sensorial precede qualquer intervenção de comunicação aumentativa ou alternativa. Veja como em <a href="/blog/integracao-sensorial-comunicacao-criancas-nao-verbais">integração sensorial e comunicação em crianças não-verbais</a>.</p>
          </div>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">O plano de saúde cobre terapia ABA e fonoaudiologia?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>Sim, os <strong>planos de saúde</strong> são obrigados por lei a cobrir terapias como <strong>ABA</strong> e <strong>fonoaudiologia</strong> para pacientes com diagnóstico de TEA e outros transtornos do neurodesenvolvimento, conforme a Lei dos Planos de Saúde (Lei 9.656/98) e a Lei Berenice Piana (Lei 12.764/12). Descubra seus direitos em <a href="/blog/cobertura-plano-saude-aba-fono">cobertura do plano de saúde para ABA e fonoaudiologia</a>.</p>
          </div>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">Como conseguir liminar para tratamento de autismo?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>A <strong>liminar para tratamento de autismo</strong> é um recurso judicial que obriga planos de saúde ou o poder público a custearem terapias quando há recusa de cobertura ou falta de atendimento. O direito ao tratamento multidisciplinar é garantido pelo Estatuto da Pessoa com Deficiência (Lei 13.146/15). Veja o passo a passo em <a href="/blog/liminar-tratamento-autismo">liminar para tratamento de autismo</a>.</p>
          </div>
        </div>
      </div>

      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">O que são relatórios de evolução no vínculo terapêutico?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>Os <strong>relatórios de evolução</strong> são documentos técnicos elaborados pelos terapeutas que registram o progresso do paciente, as intervenções realizadas e os próximos passos do tratamento. Esses relatórios são essenciais para o vínculo terapêutico, a comunicação entre profissionais e a solicitação de cobertura pelos planos de saúde. Saiba mais em <a href="/blog/vinculo-terapeutico-relatorios-evolucao">vínculo terapêutico e relatórios de evolução</a>.</p>
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

.seo-answer {
  padding: clamp(1.5rem, 3vw, 2rem) 0;
}

.seo-paragraph {
  max-width: 800px;
  margin: 0 auto;
  font-size: clamp(0.9375rem, 1.3vw, 1.0625rem);
  line-height: 1.8;
  color: var(--text-secondary);
  text-align: center;
  background: var(--lilac-soft);
  border-left: 4px solid var(--primary);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: clamp(1rem, 2vw, 1.5rem) clamp(1.25rem, 3vw, 2rem);
}

.seo-paragraph strong {
  color: var(--text);
}

.seo-paragraph a {
  color: var(--primary);
  text-decoration: underline;
  text-decoration-color: var(--lilac-light);
  text-underline-offset: 2px;
  transition: color 0.2s ease, text-decoration-color 0.2s ease;
}

.seo-paragraph a:hover {
  color: var(--lilac-deep);
  text-decoration-color: var(--primary);
}

.hero {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  padding-top: clamp(3rem, 5vw, 5rem);
  position: relative;
  overflow: hidden;
  container-type: inline-size;
}

.hero-bg {
  position: absolute;
  inset: 0;
  isolation: isolate;
}

.hero-bg-center {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
  z-index: 1;
}

.hero-rings {
  grid-row: 1;
  grid-column: 1;
  width: 100%;
  height: 100%;
  user-select: none;
  opacity: 0.75;
  will-change: transform;
  pointer-events: auto;
  translate: clamp(1px, 0.5vw, 8px) clamp(-8px, -0.5vh, -1px);
}

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
  grid-row: 1;
  grid-column: 1;
  width: min(50%, 360px);
  height: auto;
  z-index: 2;
  pointer-events: none;
  filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.5));
  will-change: transform;
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
  will-change: transform;
}

.blob-1 {
  width: min(500px, 60vw);
  height: min(500px, 60vw);
  background: var(--lilac-light);
  top: -180px;
  right: -80px;
}

.blob-2 {
  width: min(350px, 45vw);
  height: min(350px, 45vw);
  background: var(--pink-light);
  bottom: -80px;
  left: -40px;
}

.blob-3 {
  width: min(280px, 35vw);
  height: min(280px, 35vw);
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
  padding: 0 clamp(1rem, 4vw, 1.5rem);
}

.hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  align-items: center;
  gap: var(--hero-gap, clamp(1.5rem, 3vw, 2.5rem));
  min-height: 100dvh;
  padding-top: clamp(2rem, 4vw, 4rem);
  padding-bottom: clamp(2rem, 4vw, 4rem);
}

.hero-left {
  text-align: left;
  padding-right: clamp(1rem, 4vw, 3rem);
  padding-bottom: clamp(1rem, 2vw, 2rem);
  animation:
    heroCopyCascade 0.9s var(--ease-out-expo) 0.15s both,
    float-subtle var(--float-duration, 7s) ease-in-out 1.2s infinite;
}

.hero-eyebrow {
  display: block;
  font-size: clamp(0.75rem, 1.2vw, 0.875rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--primary);
  margin-bottom: clamp(0.75rem, 1.5vw, 1.25rem);
  text-transform: uppercase;
}

.hero-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0;
  padding-left: clamp(0.75rem, 3vw, 2rem);
  padding-top: clamp(0.5rem, 1.2vw, 1rem);
  padding-bottom: clamp(0.5rem, 1.2vw, 1rem);
  align-self: stretch;
  animation: heroCopyCascade 0.8s var(--ease-out-expo) 0.35s both;
}

.hero-right-actions {
  width: 100%;
  max-width: min(80vw, 500px);
}

/* --- Hero card (description) --- */
.hero-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-2xl);
  padding: clamp(1rem, 2vw, 1.375rem) clamp(1.25rem, 2.5vw, 1.75rem);
  background: color-mix(in srgb, var(--surface) 72%, transparent);
  backdrop-filter: blur(16px) saturate(1.4);
  border: 1px solid transparent;
  background-clip: padding-box;
  box-shadow:
    0 4px 24px -8px color-mix(in srgb, var(--lilac) 12%, transparent),
    inset 0 1px 0 color-mix(in srgb, var(--white) 8%, transparent);
  width: 100%;
  max-width: min(85vw, 520px);
  opacity: 0;
  animation: fadeInUp 0.7s var(--ease-out-expo) forwards;
  animation-delay: calc(0.3s + (var(--stagger, 0) * 0.14s));
}

.hero-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, color-mix(in srgb, var(--lilac-light) 40%, transparent), color-mix(in srgb, var(--pink-light) 20%, transparent) 50%, transparent 70%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}

.hero-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(105deg, transparent 30%, color-mix(in srgb, var(--white) 12%, transparent) 50%, transparent 70%);
  animation: cardShine 6s var(--ease-out-expo) infinite;
  pointer-events: none;
}

@keyframes cardShine {
  0% { transform: translateX(-100%) rotate(15deg); }
  30% { transform: translateX(100%) rotate(15deg); }
  100% { transform: translateX(100%) rotate(15deg); }
}

.hero-card p {
  font-size: clamp(0.875rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: var(--text-secondary);
  margin: 0;
  position: relative;
  z-index: 1;
}

.hero-card p strong {
  color: var(--text);
  font-weight: 600;
}

.card-shine {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(135deg, color-mix(in srgb, var(--white) 30%, transparent) 0%, transparent 50%);
  border-radius: inherit;
}

/* --- Hero badge (focus) --- */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: clamp(0.5rem, 1vw, 0.75rem);
  border-radius: var(--radius-full);
  padding: clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 1.8vw, 1.375rem);
  background: linear-gradient(135deg, color-mix(in srgb, var(--lilac) 22%, var(--surface)) 0%, color-mix(in srgb, var(--pink) 15%, var(--surface)) 60%, color-mix(in srgb, var(--lilac-deep) 10%, var(--surface)) 100%);
  border: 1px solid color-mix(in srgb, var(--lilac-light) 25%, transparent);
  font-size: clamp(0.8125rem, 1.4vw, 0.9375rem);
  font-weight: 500;
  color: var(--primary);
  letter-spacing: 0.01em;
  width: 100%;
  max-width: min(68vw, 420px);
  opacity: 0;
  animation: fadeInUp 0.6s var(--ease-out-expo) forwards;
  animation-delay: calc(0.3s + (var(--stagger, 0) * 0.14s));
  box-shadow: 0 0 20px color-mix(in srgb, var(--lilac) 6%, transparent);
}

.badge-accent {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--lilac);
  flex-shrink: 0;
  box-shadow: 0 0 8px color-mix(in srgb, var(--lilac) 50%, transparent);
  animation: badgePulse 2.5s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { box-shadow: 0 0 8px color-mix(in srgb, var(--lilac) 40%, transparent); }
  50% { box-shadow: 0 0 16px color-mix(in srgb, var(--lilac) 60%, transparent), 0 0 24px color-mix(in srgb, var(--pink) 30%, transparent); }
}

.hero-badge strong {
  color: var(--lilac-deep);
  font-weight: 700;
}

/* --- Hero emphasis (tagline) --- */
.hero-emphasis {
  display: inline-flex;
  align-items: center;
  gap: clamp(0.5rem, 1vw, 0.75rem);
  font-size: clamp(0.8125rem, 1.3vw, 0.9375rem);
  font-weight: 500;
  color: var(--text-secondary);
  letter-spacing: 0.01em;
  width: 100%;
  max-width: min(75vw, 460px);
  padding: clamp(0.5rem, 1vw, 0.75rem) clamp(0.75rem, 1.5vw, 1rem);
  position: relative;
  opacity: 0;
  animation: heroCascadeUp 0.5s var(--ease-out-expo) forwards;
  animation-delay: calc(0.3s + (var(--stagger, 0) * 0.14s));
}

.hero-emphasis::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10%;
  bottom: 10%;
  width: 3px;
  border-radius: var(--radius-full);
  background: linear-gradient(to bottom, var(--lilac), var(--pink), var(--lilac-light));
  opacity: 0.5;
}

.hero-emphasis::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius-2xl);
  background: color-mix(in srgb, var(--lilac) 4%, transparent);
  pointer-events: none;
}

.emphasis-heart {
  flex-shrink: 0;
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1;
  position: relative;
  z-index: 1;
}

.hero-emphasis span:last-child {
  position: relative;
  z-index: 1;
}

.hero-emphasis em {
  font-style: italic;
  color: var(--primary);
  font-weight: 600;
}

@keyframes heroCascadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Staggered reveal animation for hero panels */
.hero-right > .hero-panel {
  animation:
    panelFadeIn 0.7s var(--ease-out-expo) forwards,
    float-subtle var(--float-duration, 5.5s) ease-in-out calc(1.1s + (var(--stagger, 0) * 0.2s)) infinite;
  animation-delay: calc(0.45s + (var(--stagger, 0) * 0.14s)), calc(1.1s + (var(--stagger, 0) * 0.2s));
  opacity: 0;
}

@keyframes panelFadeIn {
  from { opacity: 0; transform: translateY(24px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes heroCopyCascade {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-preview {
  background: var(--surface-alt);
}

.section-header {
  text-align: center;
  margin-bottom: clamp(2rem, 5vw, 3rem);
}

.header-content {
  max-width: 720px;
  margin: 0 auto;
}

.section-header p {
  font-size: clamp(0.9375rem, 1.3vw, 1.0625rem);
  color: var(--text-secondary);
  margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: clamp(0.75rem, 2vw, 1.5rem);
  max-width: 1100px;
  margin: 0 auto;
}

.pillar-card {
  background: var(--background);
  padding: clamp(1.25rem, 3vw, 2rem) clamp(1rem, 2.5vw, 1.5rem);
  border-radius: var(--radius-xl);
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s var(--ease-out-expo), box-shadow 0.4s var(--ease-out-expo);
  will-change: transform;
  animation: fadeInUp 0.6s var(--ease-out-expo) forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

.pillar-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.pillar-icon-wrapper {
  width: clamp(56px, 10vw, 72px);
  height: clamp(56px, 10vw, 72px);
  margin: 0 auto clamp(0.75rem, 1.5vw, 1rem);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
}

.pillar-icon-inner {
  opacity: 1;
}

.pillar-content h3 {
  margin-bottom: clamp(0.375rem, 0.7vw, 0.5rem);
  font-size: clamp(0.9375rem, 1.3vw, 1.0625rem);
}

.pillar-content p {
  font-size: clamp(0.8125rem, 1.1vw, 0.875rem);
  line-height: 1.6;
  color: var(--text-secondary);
}

.section-tag {
  display: inline-block;
  padding: clamp(0.25rem, 0.5vw, 0.375rem) clamp(0.75rem, 1.5vw, 1rem);
  background: var(--lilac-soft);
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-full);
  font-size: clamp(0.75rem, 1vw, 0.8125rem);
  font-weight: 600;
  color: var(--lilac-deep);
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
}

.section-header h2 {
  margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
}

.services-preview {
  background: var(--background);
}

.services-showcase {
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
}

.service-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: clamp(0.75rem, 2vw, 1rem);
  max-width: 1100px;
  margin: 0 auto;
}

.history-block {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  max-width: 1100px;
  margin: 0 auto clamp(2rem, 5vw, 3rem);
  align-items: start;
}

.history-eyebrow {
  display: inline-block;
  padding: clamp(0.2rem, 0.4vw, 0.3rem) clamp(0.6rem, 1.2vw, 0.8rem);
  background: var(--lilac-soft);
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-full);
  font-size: clamp(0.6875rem, 0.9vw, 0.75rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--lilac-deep);
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
}

.history-content p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
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
  padding: clamp(1.25rem, 3vw, 2rem) clamp(1rem, 2.5vw, 1.75rem);
  margin: 0;
  box-shadow: var(--shadow-sm);
}

.quote-mark {
  position: absolute;
  top: -0.5rem;
  left: 1.25rem;
  font-family: 'Nunito', serif;
  font-size: clamp(3rem, 5vw, 4rem);
  line-height: 1;
  color: var(--lilac);
  font-weight: 800;
  opacity: 0.4;
}

.history-quote blockquote {
  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
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
  padding: clamp(1rem, 2.5vw, 1.5rem);
  display: flex;
  align-items: center;
  gap: clamp(0.75rem, 2vw, 1rem);
  text-decoration: none;
  transition: transform 0.35s var(--ease-out-expo), box-shadow 0.35s var(--ease-out-expo), border-color 0.35s var(--ease-out-expo);
  will-change: transform;
  border: 1.5px solid transparent;
}

.service-card-mini:hover {
  transform: translateX(6px);
  box-shadow: var(--shadow-md);
  border-color: var(--border);
}

.card-mini-icon {
  width: 52px;
  height: 52px;
  min-width: 52px;
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
  font-size: clamp(0.875rem, 1.2vw, 0.9375rem);
  margin-bottom: clamp(0.125rem, 0.3vw, 0.25rem);
  color: var(--text);
}

.card-mini-content p {
  font-size: clamp(0.75rem, 1vw, 0.8125rem);
  color: var(--text-secondary);
  margin: 0;
}

.card-arrow {
  width: clamp(16px, 2vw, 20px);
  height: clamp(16px, 2vw, 20px);
  border-right: 2px solid var(--text-light);
  border-bottom: 2px solid var(--text-light);
  transform: rotate(-45deg);
  opacity: 0.25;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.service-card-mini:hover .card-arrow {
  opacity: 0.5;
  transform: rotate(-45deg) translate(-2px, 2px);
}

.section-cta {
  text-align: center;
}

@media (max-width: 1024px) {
  .history-block {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .hero-layout {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    justify-items: center;
    gap: clamp(1rem, 2vw, 1.5rem);
    min-height: auto;
    padding-top: clamp(3rem, 5vw, 5rem);
    padding-bottom: clamp(1rem, 2vw, 2rem);
  }

  .hero-layout {
    min-height: auto;
    padding-top: clamp(3rem, 5vw, 5rem);
    padding-bottom: clamp(1rem, 2vw, 2rem);
    align-items: flex-start;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
  }

  .hero-layout {
    padding-top: clamp(0.5rem, 1vw, 0.75rem);
    gap: clamp(0.5rem, 1vw, 0.75rem);
    min-height: auto;
    padding-bottom: clamp(0.75rem, 1.5vw, 1rem);
  }

  .hero-left {
    padding-right: 0;
    padding-bottom: clamp(0.375rem, 0.7vw, 0.5rem);
  }

  .hero-eyebrow {
    font-size: clamp(0.625rem, 0.9vw, 0.7rem);
    margin-bottom: clamp(0.375rem, 0.7vw, 0.5rem);
  }

  .hero-bg-center {
    position: absolute;
    inset: 0;
  }

  .hero-rings {
    opacity: 0.6;
  }

  .hero-rings-logo {
    width: min(45%, 180px);
  }

  .hero-container {
    padding: 0 clamp(0.75rem, 4vw, 1rem);
    position: relative;
    z-index: 3;
  }

  .hero-right {
    justify-content: flex-start;
    align-items: stretch;
    gap: clamp(0.5rem, 1vw, 0.75rem);
    padding-left: 0;
    padding-top: clamp(0.5rem, 1.5vw, 1rem);
    padding-bottom: 0;
    align-self: auto;
  }

  .hero-card,
  .hero-badge,
  .hero-emphasis,
  .hero-right-actions {
    max-width: none;
    width: 100%;
  }

  .service-card-mini {
    flex-direction: column;
    text-align: center;
    gap: clamp(0.5rem, 1vw, 0.75rem);
  }

  .card-arrow {
    display: none;
  }

  .history-content {
    padding: 0;
  }

  .history-quote {
    padding: clamp(1rem, 2vw, 1.25rem);
  }

  .history-quote blockquote {
    font-size: clamp(0.875rem, 1.2vw, 0.9375rem);
  }

  .quote-mark {
    font-size: clamp(2.5rem, 4vw, 3rem);
  }
}

@media (max-width: 480px) {
  .hero-layout {
    padding-top: clamp(6rem, 18vw, 8rem);
    gap: clamp(0.75rem, 2vw, 1rem);
  }

  .hero-eyebrow {
    font-size: 0.625rem;
    margin-bottom: 0.375rem;
  }

  .hero-card {
    padding: 0.875rem 1rem;
  }

  .hero-card p {
    font-size: 0.8125rem;
  }

  .hero-badge {
    padding: 0.5rem 0.875rem;
    font-size: 0.75rem;
  }

  .hero-emphasis {
    padding: 0.375rem 0.625rem;
    font-size: 0.75rem;
  }

  .pillars-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .pillar-card {
    padding: 1.25rem 1rem;
  }

  .service-cards-grid {
    grid-template-columns: 1fr;
  }

  .seo-paragraph {
    padding: 0.875rem 1rem;
    font-size: 0.8125rem;
  }

  .hero-rings {
    opacity: 0.5;
  }

  .hero-rings-logo {
    width: min(35%, 100px);
  }
}
</style>
