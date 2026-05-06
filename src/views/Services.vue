<template>
  <div class="services">
    <section class="section hero-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Nossos Servicos</span>
          <h1>Tratamentos especializados</h1>
          <p>Oferecemos intervencoes especializadas para o desenvolvimento integral da crianca.</p>
        </div>

        <div class="services-grid">
          <div 
            class="service-card" 
            v-for="service in services" 
            :key="service.title"
          >
            <div class="service-icon" :style="{ background: service.color }">
              <div class="icon-inner"></div>
            </div>
            <div class="service-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <ul class="service-list">
                <li v-for="item in service.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="process-section section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Como funciona</span>
          <h2>Nosso Processo</h2>
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
          <h2>Agende uma avaliacao</h2>
          <p>Nossa equipe esta pronta para entender as necessidades do seu filho.</p>
          <router-link to="/agendar" class="btn btn-primary">
            Agendar Agora
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesView',
  data() {
    return {
      services: [
        {
          title: 'Terapia Ocupacional',
          description: 'Intervencoes para desenvolver habilidades motoras, cognitivas e funcionais.',
          color: 'var(--pastel-lavender)',
          items: ['Motor fino e grosso', 'Coordenacao motora', 'Autonomia pessoal', 'Atividades de vida diaria']
        },
        {
          title: 'Integracao Sensorial',
          description: 'Abordagem especializada para organizar o processamento sensorial. Desenvolvida pela Dra. Jean Ayres, trabalha as 8 sensacoes do corpo.',
          color: 'var(--pastel-pink)',
          items: [
            'Diagnostico sensorial completo',
            'Terapia de Integracao Sensorial (SIT)',
            'Sala Snoezelen / Sala Sensorial',
            'Programa de intervencao individualizado',
            'Orientacao para escola e familia',
            'Estrategias de regulacao sensorial'
          ]
        },
        {
          title: 'Estimulacao Precoce',
          description: 'Intervencoes para os primeiros anos de vida.',
          color: 'var(--pastel-mint)',
          items: ['Avaliacao do desenvolvimento', 'Programa de estimulacao', 'Suporte aos pais', 'Monitoramento']
        },
        {
          title: 'Avaliacao Comportamental',
          description: 'Processos avaliativos para compreender o perfil funcional.',
          color: 'var(--pastel-peach)',
          items: ['Avaliacao sensorial', 'Perfil motor', 'Escala de independencia', 'Relatorio completo']
        }
      ],
      processSteps: [
        { title: 'Contato', description: 'Voce entra em contato pelo WhatsApp ou formulario.' },
        { title: 'Agendamento', description: 'Marcamos uma avaliacao inicial.' },
        { title: 'Avaliacao', description: 'Realizamos avaliacao completa do desenvolvimento.' },
        { title: 'Plano', description: 'Elaboramos um plano personalizado.' }
      ]
    }
  }
}
</script>

<style scoped>
.hero-section {
  padding-top: 120px;
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.service-card {
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: 0;
  overflow: hidden;
  box-shadow: var(--shadow-xs);
  transition: all 0.3s var(--ease-smooth);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.service-icon {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-inner {
  width: 48px;
  height: 48px;
  background: var(--primary);
  border-radius: 12px;
  opacity: 0.5;
}

.service-content {
  padding: 1.5rem 2rem 2rem;
}

.service-content h3 {
  margin-bottom: 0.5rem;
}

.service-content > p {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.service-list {
  list-style: none;
}

.service-list li {
  font-size: 0.875rem;
  color: var(--text-secondary);
  padding: 0.375rem 0;
  border-bottom: 1px solid rgba(155, 126, 217, 0.08);
}

.service-list li:last-child {
  border-bottom: none;
}

.process-section {
  background: var(--surface);
}

.process-timeline {
  display: flex;
  flex-direction: column;
  max-width: 640px;
  margin: 0 auto;
  gap: 1rem;
}

.process-step {
  display: flex;
  gap: 1.25rem;
  background: var(--background);
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-lg);
}

.step-marker {
  width: 40px;
  height: 40px;
  min-width: 40px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.step-content h4 {
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
  background: var(--surface);
  border-radius: var(--radius-2xl);
  padding: 3rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.cta-card h2 {
  margin-bottom: 0.75rem;
}

.cta-card p {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>