<script setup>
import { Award, Heart, Users, Star } from 'lucide-vue-next'

const siteBase = 'https://autitude.com.br'

useHead({
  title: 'Equipe — Profissionais Especializados em Neurodivergência | Autitude',
  meta: [
    { name: 'description', content: 'Conheça a equipe da Autitude em Pindamonhangaba-SP: neuropsicólogos, fonoaudiólogos, terapeutas ocupacionais e pedagogos especializados em neurodivergência.' },
    { name: 'keywords', content: 'equipe autitude, profissionais neurodivergência, neuropsicólogo Pindamonhangaba, fonoaudiólogo, terapeuta ocupacional, Dra Juliana Mariani' },
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
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Equipe — Autitude',
          description: 'Conheça a equipe da Autitude — profissionais dedicados ao cuidado de crianças, adolescentes e famílias.',
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
                jobTitle: 'Terapeuta Ocupacional',
                description: 'Especialista em Integração Sensorial com certificação internacional pela University of Southern California (USC, USA). Atua há mais de 20 anos em neurodesenvolvimento.',
                identifier: 'CREFITO 20083-TO',
                datePublished: '2026-06-09',
                dateModified: '2026-06-09',
                worksFor: {
                  '@type': 'MedicalBusiness',
                  name: 'Autitude - Desenvolvimento e Ação Humana'
                }
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
          { '@type': 'ListItem', position: 2, name: 'Equipe', item: `${siteBase}/equipe` }
        ]
      })
    }
  ]
})

const team = [
  {
    name: 'Dra. Juliana Mariani',
    role: 'Terapeuta Ocupacional | CREFITO 20083-TO',
    bio: 'Especialista em Integração Sensorial com certificação internacional pela University of Southern California (USC, USA). Atua há mais de 20 anos em neurodesenvolvimento.',
    tags: ['CREFITO 20083-TO', 'Integração Sensorial', 'Certificação USC', 'Terapia Pediátrica']
  }
]

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
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Nossa profissional</span>
          <h1>Quem são os profissionais da Autitude?</h1>
          <p>Profissionais dedicados ao desenvolvimento integral de cada pessoa, ambiente e de sua família.</p>
        </div>

        <div class="seo-answer">
          <p class="seo-paragraph texture-hd" style="--texture-hd: var(--texture-hd-paper)">
            A equipe da Autitude é liderada pela <strong>Dra. Juliana Mariani</strong>,
            Terapeuta Ocupacional com <strong>certificação internacional em Integração Sensorial
            pela University of Southern California (USC, USA)</strong>. Com mais de 20 anos de experiência,
            ela lidera uma abordagem <a href="/servicos">transdisciplinar e integrada</a> no
            <a href="/sobre">cuidado de crianças, adolescentes e famílias neurodivergentes</a> em Pindamonhangaba-SP.
          </p>
        </div>

        <div class="team-showcase">
          <div class="team-main-card texture-hd" v-for="member in team" :key="member.name">
            <div class="member-visual">
              <div class="visual-shape"></div>
              <div class="visual-accent"></div>
            </div>
            <div class="member-details">
              <h2>{{ member.name }}</h2>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-bio">{{ member.bio }}</p>
              <div class="member-tags">
                <span v-for="tag in member.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="values-section section texture-hd-velvet">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-tag">Nossos Valores</span>
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
      <p>A equipe da Autitude é liderada pela <strong>Dra. Juliana Mariani</strong>, Terapeuta Ocupacional com <strong>certificação internacional em Integração Sensorial pela University of Southern California (USC, USA)</strong> — CREFITO 20083-TO. Com mais de 20 anos de experiência em neurodesenvolvimento, ela coordena uma equipe multidisciplinar que inclui neuropsicólogos, neuropsicopedagogos, fonoaudiólogos e terapeutas ABA em Pindamonhangaba-SP.</p>
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
  font-size: 1.0625rem;
  color: var(--text-secondary);
}

.seo-answer {
  max-width: 800px;
  margin: 0 auto clamp(2rem, 5vw, 3rem);
}

.seo-paragraph {
  font-size: 1.0625rem;
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
  transition: all 0.2s;
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
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--lilac-deep);
  margin-bottom: 1rem;
}

.team-showcase {
  display: flex;
  justify-content: center;
}

.team-main-card {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  background: var(--surface);
  border-radius: var(--radius-2xl);
  padding: clamp(1.5rem, 4vw, 3rem);
  box-shadow: var(--shadow-md);
  max-width: 900px;
  width: 100%;
}

.member-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-shape {
  width: 160px;
  height: 160px;
  background: linear-gradient(135deg, var(--lilac-soft) 0%, var(--lilac-light) 100%);
  border-radius: 50%;
}

.visual-accent {
  position: absolute;
  width: 90px;
  height: 90px;
  background: var(--gradient-primary);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  opacity: 0.3;
  animation: morphShape 8s ease-in-out infinite;
}

@keyframes morphShape {
  0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
}

.member-details h2 {
  font-size: clamp(1.4rem, 3vw, 1.75rem);
  margin-bottom: 0.5rem;
}

.member-role {
  font-size: 1rem;
  color: var(--lilac-deep);
  font-weight: 600;
  margin-bottom: 1rem;
}

.member-bio {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.member-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.375rem 0.875rem;
  background: var(--lilac-soft);
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--lilac-deep);
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
  transition: all 0.35s var(--ease-out-expo);
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
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
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.value-card p {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

@media (max-width: 900px) {
  .team-main-card {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .member-visual {
    order: -1;
  }
  
  .member-tags {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .team-main-card {
    padding: 1.5rem;
  }

  .visual-shape {
    width: 120px;
    height: 120px;
  }

  .visual-accent {
    width: 70px;
    height: 70px;
  }
}
</style>
