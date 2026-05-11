<script setup>
import { Target, Lightbulb, Heart, Award, Users, Star } from 'lucide-vue-next'

useHead({
  title: 'Sobre Nós | Autitude - Clínica de Terapia Ocupacional',
  meta: [
    { name: 'description', content: 'Conheça a história da Autitude - clínica especializada em Terapia Ocupacional e Integração Sensorial em Pindamonhangaba-SP.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Sobre a Autitude',
        description: 'Conheça a história da Autitude - clínica especializada em Terapia Ocupacional e Integração Sensorial em Pindamonhangaba-SP.',
        url: 'https://hautlys.github.io/Autitude/sobre',
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'Autitude - Clínica de Terapia Ocupacional',
          description: 'Clínica especializada em Terapia Ocupacional e Integração Sensorial'
        }
      })
    }
  ]
})

const values = [
  {
    title: 'Excelência',
    description: 'Profissionais em constante atualização científica e técnica.',
    icon: Award
  },
  {
    title: 'Humanização',
    description: 'Cada criança é única. Tratamos com respeito e sensibilidade.',
    icon: Heart
  },
  {
    title: 'Parceria',
    description: 'Família é parte essencial do processo de desenvolvimento.',
    icon: Users
  },
  {
    title: 'Crescimento',
    description: 'Acompanhamos cada passo com atenção e dedicação.',
    icon: Star
  }
]
</script>

<template>
  <div class="about">
    <section class="hero-section">
      <div class="container">
        <div class="about-header">
          <span class="section-tag">Sobre a Autitude</span>
          <h1>Cuidando do futuro do seu filho</h1>
          <p class="lead">
            Uma clínica dedicada à promoção do desenvolvimento integral de crianças, 
            com excelência técnica e cuidado humanizado.
          </p>
        </div>

        <div class="about-showcase">
          <div class="about-content">
            <h2>Nossa História</h2>
            <p>
              A <strong>Autitude</strong> nasceu do desejo de oferecer um atendimento 
              diferenciado e de alta qualidade para crianças com necessidades 
              neurodivergentes. Fundada por profissionais especializadas em Terapia 
              Ocupacional e Integração Sensorial, nossa clínica se dedica a 
              proporcionar um ambiente acolhedor e especializado.
            </p>
            <p>
              Localizada na <strong>Rua Major José dos Santos Moreira, 328, Pindamonhangaba-SP</strong>, atendemos crianças 
              e famílias com carinho, profissionalismo e embasamento científico.
            </p>
          </div>
          
          <div class="about-stats">
            <div class="stat-card">
              <span class="stat-number">15+</span>
              <span class="stat-text">Anos de Experiência</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">Certificada</span>
              <span class="stat-text">NC University USA</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">Local</span>
              <span class="stat-text">Pindamonhangaba</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="values-section section">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-tag">Nossos Valores</span>
            <h2>O que nos move</h2>
          </div>
        </div>
        
        <div class="values-grid">
          <div class="value-card" v-for="value in values" :key="value.title">
            <div class="value-icon">
              <component :is="value.icon" :size="24" class="icon-primary icon-shape" />
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mission-section section">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-card">
            <div class="mission-icon">
              <Target :size="20" class="icon-primary icon-circle" />
            </div>
            <h3>Missão</h3>
            <p>Promover o desenvolvimento integral de crianças através de intervenções especializadas e baseadas em evidências científicas.</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">
              <Lightbulb :size="20" class="icon-primary icon-circle" />
            </div>
            <h3>Visão</h3>
            <p>Ser referência em terapia ocupacional e integração sensorial na região.</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">
              <Heart :size="20" class="icon-primary icon-circle" />
            </div>
            <h3>Valores</h3>
            <p>Humanização, ética, excelência técnica e compromisso com as famílias.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2>Gostaria de nos conhecer?</h2>
            <p>Agende uma visita e descubra como podemos ajudar no desenvolvimento do seu filho.</p>
            <NuxtLink to="/agendar" class="btn btn-primary btn-lg">
              Agendar Visita
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.icon-primary {
  color: var(--primary);
}

.hero-section {
  padding-top: var(--space-section-top);
  padding-bottom: 4rem;
}

.about-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 3rem;
}

.about-header h1 {
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.125rem;
  color: var(--text-secondary);
}

.section-tag {
  display: inline-block;
  padding: 0.375rem 1rem;
  background: var(--pastel-lavender);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 1rem;
}

.about-showcase {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.about-content h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
}

.about-content p {
  margin-bottom: 1.25rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.about-content strong {
  color: var(--primary);
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-card {
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--radius-xl);
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.25rem;
}

.stat-text {
  font-size: 0.8125rem;
  color: var(--text-secondary);
}

.values-section {
  background: var(--surface);
}

.header-content {
  text-align: center;
  margin-bottom: 3rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.value-card {
  background: var(--background);
  padding: 2rem;
  border-radius: var(--radius-xl);
  text-align: center;
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.value-icon {
  width: 56px;
  height: 56px;
  background: var(--pastel-lavender);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.icon-shape {
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

.mission-section {
  background: var(--background);
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.mission-card {
  background: var(--surface);
  padding: 2rem;
  border-radius: var(--radius-xl);
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.mission-icon {
  width: 56px;
  height: 56px;
  background: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.icon-circle {
  opacity: 1;
}

.mission-card h3 {
  margin-bottom: 0.75rem;
}

.mission-card p {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.cta-section {
  background: var(--surface);
}

.cta-card {
  background: linear-gradient(135deg, var(--pastel-lavender) 0%, var(--pastel-mint) 100%);
  border-radius: var(--radius-2xl);
  padding: 3rem;
  text-align: center;
}

.cta-content h2 {
  margin-bottom: 0.75rem;
}

.cta-content p {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

@media (max-width: 900px) {
  .about-showcase {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .about-stats {
    justify-content: center;
  }
  
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .mission-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .about-stats {
    grid-template-columns: 1fr;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>