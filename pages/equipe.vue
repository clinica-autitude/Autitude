<script setup>
import { Award, Heart, Users, Star } from 'lucide-vue-next'
import Grainient from '~/components/Grainient.vue'
import {
  JulianaHero,
  JulianaJourney,
  JulianaSpecializations,
  JulianaApproach,
  JulianaCommitment
} from '~/components/juliana'

const siteBase = 'https://autitude.com.br'

useHead({
  title: 'Equipe — Profissionais Especializados em Neurodivergência | Autitude',
  meta: [
    { name: 'description', content: 'Conheça a equipe da Autitude em Pindamonhangaba-SP: Dra. Juliana Mariani, Terapeuta Ocupacional com 25+ anos de experiência, certificação USC em Integração Sensorial e pós-graduação em ABA para TEA.' },
    { name: 'keywords', content: 'equipe autitude, profissionais neurodivergência, Dra Juliana Mariani, terapeuta ocupacional Pindamonhangaba, integração sensorial USC, ABA TEA, neuropsicólogo, fonoaudiólogo, neuropsicopedagogo' },
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
    { property: 'og:title', content: 'Equipe — Profissionais Especializados | Autitude' },
    { property: 'og:description', content: 'Conheça a equipe da Autitude — profissionais dedicados ao cuidado de crianças, adolescentes e famílias.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${siteBase}/equipe` }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}/equipe` }
  ],
  script: [
{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Equipe — Autitude',
          description: 'Conheça a equipe da Autitude — Dra. Juliana Mariani, Terapeuta Ocupacional com certificação USC em Integração Sensorial e pós-graduação em ABA, liderando cuidado neurodivergente em Pindamonhangaba-SP.',
          url: `${siteBase}/equipe`,
          datePublished: '2024-01-01',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.seo-paragraph', '.seo-faq-hidden']
          },
          mainEntity: {
            '@type': 'MedicalBusiness',
            name: 'Autitude - Desenvolvimento e Ação Humana',
            employee: [
              {
                '@type': 'Person',
                name: 'Dra. Juliana Mariani',
                givenName: 'Juliana',
                familyName: 'Mariani',
                honorificPrefix: 'Dra.',
                jobTitle: 'Terapeuta Ocupacional e Fundadora',
                description: 'Terapeuta Ocupacional há mais de 25 anos, fundadora da Autitude Desenvolvimento e Ação Humana. Especialista em Integração Sensorial com certificação internacional pela University of Southern California (USC, USA). Pós-graduada em Análise do Comportamento Aplicada (ABA) para o Transtorno do Espectro Autista (TEA). Atua na estimulação precoce, acompanhamento de crianças e adolescentes neurodivergentes e intervenção terapêutica voltada ao desenvolvimento da autonomia e qualidade de vida.',
                identifier: 'CREFITO 20083-TO',
                knowsAbout: [
                  'Terapia Ocupacional',
                  'Integração Sensorial',
                  'Análise do Comportamento Aplicada',
                  'Transtorno do Espectro Autista',
                  'Estimulação Precoce',
                  'Neurodesenvolvimento Infantil',
                  'Cromoterapia',
                  'Musicoterapia',
                  'Florais de Bach'
                ],
                hasCredential: [
                  {
                    '@type': 'EducationalOccupationalCredential',
                    credentialCategory: 'degree',
                    educationalLevel: 'Graduação',
                    name: 'Graduação em Terapia Ocupacional'
                  },
                  {
                    '@type': 'EducationalOccupationalCredential',
                    credentialCategory: 'certificate',
                    name: 'Certificação Internacional em Integração Sensorial de Ayres',
                    recognizedBy: {
                      '@type': 'Organization',
                      name: 'University of Southern California (USC)'
                    }
                  },
                  {
                    '@type': 'EducationalOccupationalCredential',
                    credentialCategory: 'degree',
                    educationalLevel: 'Pós-graduação',
                    name: 'Pós-graduação em Análise do Comportamento Aplicada (ABA) para TEA'
                  }
                ],
                alumniOf: {
                  '@type': 'Organization',
                  name: 'University of Southern California (USC)'
                },
                datePublished: '2024-01-01',
                dateModified: '2026-06-09',
                worksFor: {
                  '@type': 'MedicalBusiness',
                  name: 'Autitude - Desenvolvimento e Ação Humana',
                  url: 'https://autitude.com.br'
                },
                url: 'https://autitude.com.br/equipe'
              }
            ]
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
          { '@type': 'ListItem', position: 2, name: 'Equipe', item: `${siteBase}/equipe` }
        ]
      })
    }
  ]
})

const culture = [
  { title: 'Excelência', description: 'Prática baseada em evidências e em constante atualização.', icon: Award },
  { title: 'Humanização', description: 'Cada pessoa é única. Cuidamos com respeito e sensibilidade.', icon: Heart },
  { title: 'Parceria', description: 'A família é parte essencial do processo terapêutico.', icon: Users },
  { title: 'Crescimento', description: 'Monitoramos e acompanhamos cada conquista com atenção e dedicação.', icon: Star }
]
</script>

<template>
  <div class="team">
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
        <div class="section-header">
          <span class="section-tag texture-hd">Nossa profissional</span>
          <h1>Quem são os profissionais da Autitude?</h1>
          <p>Profissionais dedicados ao desenvolvimento integral de cada pessoa, ambiente e de sua família.</p>
        </div>

        <div class="seo-answer seo-text">
          <p class="seo-paragraph texture-hd" style="--texture-hd: var(--texture-hd-paper)">
            A equipe da Autitude é liderada pela <strong>Dra. Juliana Mariani</strong>,
            Terapeuta Ocupacional com <strong>mais de 25 anos de experiência</strong> e
            <strong>certificação internacional em Integração Sensorial pela University of Southern California (USC, USA)</strong>.
            Fundadora da Autitude, ela é pós-graduada em <a href="/terapia-aba">Análise do Comportamento Aplicada (ABA)</a>
            para o Transtorno do Espectro Autista e atua na
            <a href="/sobre">estimulação precoce, acompanhamento de crianças e adolescentes neurodivergentes</a>
            e intervenção terapêutica voltada ao desenvolvimento da autonomia, regulação sensorial e qualidade de vida em
            <strong>Pindamonhangaba-SP</strong>.
          </p>
        </div>

        <div class="team-profile">
          <div class="profile-card texture-hd">
            <JulianaHero />
          </div>

          <div class="profile-sections">
            <div class="profile-card texture-hd">
              <JulianaJourney />
            </div>
            <div class="profile-card texture-hd">
              <JulianaSpecializations />
            </div>
            <div class="profile-card texture-hd">
              <JulianaApproach />
            </div>
            <JulianaCommitment />
          </div>
        </div>
      </div>
    </section>

    <section class="values-section section texture-hd-velvet">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-tag texture-hd">Nossos Valores</span>
            <h2>O que nos move</h2>
          </div>
        </div>
        
        <div class="values-grid">
          <div class="value-card texture-hd" v-for="value in culture" :key="value.title">
            <div class="value-icon-wrapper">
              <component :is="value.icon" :size="24" class="icon-primary value-icon-inner" />
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaSection
      title="Gostaria de nos conhecer?"
      tagline="💜 Cuidamos de pessoas. Potencializamos possibilidades."
      primary-btn="/agendar"
      primary-btn-text="Agendar Visita"
      secondary-btn="/contato"
      secondary-btn-text="Falar Conosco"
      :whatsapp-btn="false"
      :show-contact="false"
      :colors="['#6B4FA3', '#8FB1F0', '#8FC176', '#3D2D5E']"
      :color-bends-props="{ rotation: 15, speed: 0.12, scale: 1.4, frequency: 1.0, warpStrength: 0.8, mouseInfluence: 0.3, parallax: 0.2, noise: 0.04 }"
    />
  </div>
    <!-- Hidden SEO content for crawlers -->
    <section class="seo-faq-hidden" aria-label="Perguntas Frequentes"
      style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;">
      <h2>Quem são os profissionais da Autitude?</h2>
      <p>A equipe da Autitude é liderada pela <strong>Dra. Juliana Mariani</strong>, Terapeuta Ocupacional com <strong>mais de 25 anos de experiência</strong> em neurodesenvolvimento — CREFITO 20083-TO. Fundadora da Autitude Desenvolvimento e Ação Humana, ela é pós-graduada em Análise do Comportamento Aplicada (ABA) para o Transtorno do Espectro Autista (TEA) e possui <strong>certificação internacional em Integração Sensorial de Ayres pela University of Southern California (USC, USA)</strong>. Sua atuação inclui estimulação precoce de bebês, acompanhamento de crianças e adolescentes neurodivergentes, intervenção terapêutica voltada ao desenvolvimento da autonomia, regulação sensorial e qualidade de vida. Também supervisiona a formação prática de graduandos em Terapia Ocupacional em Pindamonhangaba-SP.</p>
      <h2>O que é certificação internacional em Integração Sensorial USC?</h2>
      <p>A certificação pela University of Southern California (USC) é a mais reconhecida formação internacional em Integração Sensorial, baseada no trabalho da Dra. Jean Ayres. A integração sensorial organiza as sensações do corpo e do ambiente para promover respostas adaptativas. Veja como isso se conecta com <a href="/blog/integracao-sensorial-comunicacao-criancas-nao-verbais">comunicação em crianças não-verbais</a>.</p>
      <h2>O que é seletividade alimentar no autismo?</h2>
      <p>A seletividade alimentar é comum em crianças no espectro autista, relacionada à hipersensibilidade sensorial. Não se trata de comportamento voluntário, mas de resposta neurológica a estímulos aversivos. Saiba como intervir em <a href="/blog/seletividade-alimentar-autismo">seletividade alimentar no autismo</a>.</p>
      <h2>Quais são os marcos da fala infantil?</h2>
      <p>Os marcos da fala incluem: balbucio aos 6 meses, primeiras palavras aos 12 meses, combinação de 2 palavras aos 24 meses e frases completas aos 36 meses. Atrasos podem indicar necessidade de intervenção fonoaudiológica. Confira a tabela completa em <a href="/blog/marcos-fala-infantil">marcos da fala infantil</a>.</p>
    </section>
</template>

<style scoped>
.icon-primary {
  color: var(--lilac-deep);
}

.hero-section {
  padding-top: var(--space-section-top);
  padding-bottom: clamp(2.5rem, 6vw, 4rem);
}

.section-header {
  text-align: center;
  max-width: 560px;
  margin: 0 auto clamp(2rem, 5vw, 3rem);
}

.section-header h1 {
  margin-bottom: 0.75rem;
}

.section-header p {
  font-size: clamp(0.9375rem, 1.5vw + 0.25rem, 1.125rem);
  color: var(--text-secondary);
}

.seo-answer {
  max-width: 800px;
  margin: 0 auto clamp(2rem, 5vw, 3rem);
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

.team-profile {
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
  max-width: 900px;
  margin: 0 auto;
}

.profile-card {
  background: var(--surface);
  border-radius: var(--radius-2xl);
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: var(--shadow-md);
  transition: transform 0.5s var(--ease-out-expo), box-shadow 0.5s var(--ease-out-expo);
  opacity: 0;
  animation: fadeInUp 0.7s var(--ease-out-expo) forwards;
}

.profile-card:nth-child(2) { animation-delay: 0.1s; }
.profile-card:nth-child(3) { animation-delay: 0.2s; }
.profile-card:nth-child(4) { animation-delay: 0.3s; }
.profile-card:nth-child(5) { animation-delay: 0.4s; }

.profile-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.profile-sections {
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
}

.values-section {
  background: var(--surface-alt);
}

.header-content {
  text-align: center;
  margin-bottom: 3rem;
}

.header-content h2 {
  margin-bottom: 0;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: clamp(0.75rem, 2vw, 1.5rem);
  max-width: 1000px;
  margin: 0 auto;
}

.value-card {
  background: var(--background);
  padding: clamp(1.25rem, 3vw, 2rem);
  border-radius: var(--radius-xl);
  text-align: center;
  transition: transform 0.4s var(--ease-out-expo), box-shadow 0.4s var(--ease-out-expo);
  opacity: 0;
  animation: fadeInUp 0.6s var(--ease-out-expo) forwards;
}

.value-card:nth-child(2) { animation-delay: 0.15s; }
.value-card:nth-child(3) { animation-delay: 0.3s; }
.value-card:nth-child(4) { animation-delay: 0.45s; }

.value-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.value-icon-wrapper {
  width: 52px;
  height: 52px;
  background: var(--lilac-soft);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.value-icon-inner {
  opacity: 1;
}

.value-card h3 {
  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
  margin-bottom: 0.5rem;
}

.value-card p {
  font-size: clamp(0.8125rem, 1.2vw, 0.9375rem);
  color: var(--text-secondary);
}

@media (max-width: 900px) {
  .hero-section {
    padding-top: clamp(4rem, 8vw, 5rem);
  }

  .section-header h1 {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }

  .seo-paragraph {
    padding: 1.25rem 1.25rem;
  }
}

@media (max-width: 640px) {
  .profile-card {
    padding: 1.25rem;
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

  .section-header h1 {
    font-size: clamp(1.25rem, 6vw, 1.5rem);
  }

  .section-header p {
    font-size: 0.875rem;
  }

  .seo-paragraph {
    padding: 1rem 1rem;
    font-size: 0.875rem;
  }

  .profile-card {
    padding: 1rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .value-card h3 {
    font-size: 0.875rem;
  }

  .value-card p {
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
