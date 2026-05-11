<script setup>
import { Award, Heart, Users, Star } from 'lucide-vue-next'

useHead({
  title: 'Equipe | Autitude - Dra. Juliana Mariani',
  meta: [
    { name: 'description', content: 'Conheça a equipe da Autitude. Dra. Juliana Mariani - Terapeuta Ocupacional CREFITO 20083-TO.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Equipe - Autitude',
        description: 'Conheça a equipe da Autitude. Dra. Juliana Mariani - Terapeuta Ocupacional CREFITO 20083-TO.',
        url: 'https://hautlys.github.io/Autitude/equipe',
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'Autitude - Nossa Equipe',
          employee: [
            {
              '@type': 'Person',
              name: 'Dra. Juliana Mariani',
              jobTitle: 'Terapeuta Ocupacional',
              description: 'Especialista em Integração Sensorial com certificação pela North Carolina University (USA)',
              identifier: 'CREFITO 20083-TO'
            }
          ]
        }
      })
    }
  ]
})

const team = [
  {
    name: 'Dra. Juliana Mariani',
    role: 'Terapeuta Ocupacional | CREFITO 20083-TO',
    bio: 'Especialista em Integração Sensorial com certificação pela North Carolina University (USA). Mais de 15 anos de experiência em terapia ocupacional pediátrica e desenvolvimento infantil.',
    tags: ['CREFITO 20083-TO', 'Integração Sensorial', 'Certificação NC University', 'Terapia Pediátrica']
  }
]

const culture = [
  { title: 'Excelência', description: 'Profissionais em constante atualização científica e técnica.', icon: Award },
  { title: 'Humanização', description: 'Cada criança é única. Tratamos com respeito e sensibilidade.', icon: Heart },
  { title: 'Parceria', description: 'Família é parte essencial do processo de desenvolvimento.', icon: Users },
  { title: 'Crescimento', description: 'Acompanhamos cada passo com atenção e dedicação.', icon: Star }
]
</script>

<template>
  <div class="team">
    <section class="hero-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Nossa Profissional</span>
          <h1>Especialista dedicada</h1>
          <p>Comprometida com o desenvolvimento das crianças.</p>
        </div>

        <div class="team-showcase">
          <div class="team-main-card" v-for="member in team" :key="member.name">
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

    <section class="values-section section">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-tag">Nossos Valores</span>
            <h2>O que nos move</h2>
          </div>
        </div>
        
        <div class="values-grid">
          <div class="value-card" v-for="value in culture" :key="value.title">
            <div class="value-icon-wrapper">
              <component :is="value.icon" :size="24" class="icon-primary value-icon-inner" />
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
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
            <div class="cta-actions">
              <NuxtLink to="/agendar" class="btn btn-primary btn-lg">
                Agendar Visita
              </NuxtLink>
              <NuxtLink to="/contato" class="btn btn-secondary btn-lg">
                Falar Conosco
              </NuxtLink>
            </div>
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

.section-header {
  text-align: center;
  max-width: 560px;
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
  background: var(--pastel-lavender);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 1rem;
}

.team-showcase {
  display: flex;
  justify-content: center;
}

.team-main-card {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  background: var(--surface);
  border-radius: var(--radius-2xl);
  padding: 3rem;
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
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%);
  border-radius: 50%;
}

.visual-accent {
  position: absolute;
  width: 100px;
  height: 100px;
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
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.member-role {
  font-size: 1rem;
  color: var(--primary);
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
  background: var(--pastel-lavender);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--primary-dark);
}

.values-section {
  background: var(--surface);
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

.value-icon-wrapper {
  width: 56px;
  height: 56px;
  background: var(--pastel-lavender);
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

.cta-section {
  background: var(--background);
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
  font-size: 1.0625rem;
  margin-bottom: 2rem;
  color: var(--text-secondary);
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
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
  
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .team-main-card {
    padding: 2rem;
  }
  
  .values-grid {
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