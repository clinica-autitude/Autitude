<template>
  <div class="home">
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">
            <span class="badge-dot"></span>
            Clinica Especializada
          </span>
          
          <h1 class="hero-title">
            Cuidado que
            <span class="title-highlight">transforma</span>
            <br>vidatorias
          </h1>
          
          <p class="hero-subtitle">
            Especialistas em Terapia Ocupacional e Integracao Sensorial. 
            O cuidado que seu filho merece, com carinho e excelencia.
          </p>
          
          <div class="hero-actions">
            <router-link to="/agendar" class="btn btn-primary">
              Agendar Consulta
            </router-link>
            <router-link to="/servicos" class="btn btn-secondary">
              Conhecer Servicos
            </router-link>
          </div>
          
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-value">15+</span>
              <span class="stat-label">Anos de Experiencia</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-value">Certificada</span>
              <span class="stat-label">NC University USA</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-value">Pindamonhangaba</span>
              <span class="stat-label">Localizacao</span>
            </div>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="visual-card card-1">
            <div class="card-icon"></div>
            <span class="card-text">Desenvolvimento Integral</span>
          </div>
          <div class="visual-card card-2">
            <div class="card-icon"></div>
            <span class="card-text">Cuidado Humanizado</span>
          </div>
          <div class="visual-card card-3">
            <div class="card-icon"></div>
            <span class="card-text">Tratamento Personalizado</span>
          </div>
        </div>
      </div>
      
      <div class="scroll-hint" @click="scrollToFeatures">
        <span>Descobrir mais</span>
        <div class="scroll-arrow"></div>
      </div>
    </section>

    <section id="features" class="features section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Por que escolher a Autitude</span>
          <h2>Um atendimento unico</h2>
          <p>Combinamos excelencia tecnica com humanizacao para oferecer o melhor cuidado ao seu filho.</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card" v-for="feature in features" :key="feature.title">
            <div class="feature-icon" :style="{ background: feature.color }">
              <div class="icon-inner"></div>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="services-preview section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Nossos Servicos</span>
          <h2>Especialidades</h2>
        </div>
        
        <div class="services-grid">
          <router-link 
            v-for="service in services" 
            :key="service.name"
            to="/servicos" 
            class="service-card"
          >
            <div class="service-icon">
              <div class="icon-box"></div>
            </div>
            <div class="service-content">
              <h4>{{ service.name }}</h4>
              <p>{{ service.shortDesc }}</p>
            </div>
            <span class="service-link">Ver detalhes</span>
          </router-link>
        </div>
        
        <div class="section-cta">
          <router-link to="/servicos" class="btn btn-primary">
            Ver Todos os Servicos
          </router-link>
        </div>
      </div>
    </section>

    <section class="cta-section section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2>Pronto para comecar?</h2>
            <p>Agende uma avaliacao e descubra como podemos ajudar no desenvolvimento do seu filho.</p>
            <div class="cta-actions">
              <router-link to="/agendar" class="btn btn-primary">
                Agendar Avaliacao
              </router-link>
              <a href="https://wa.me/5512991968683" class="btn btn-whatsapp" target="_blank">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      features: [
        {
          title: 'Especializacao',
          description: 'Equipe com certificacao internacional em Integracao Sensorial e abordagens baseadas em evidencias.',
          color: 'var(--pastel-lavender)'
        },
        {
          title: 'Cuidado Humanizado',
          description: 'Atendimento individualizado respeitando o ritmo e as necessidades de cada crianca e familia.',
          color: 'var(--pastel-pink)'
        },
        {
          title: 'Ambiente Acolhedor',
          description: 'Espaco pensado para proporcionar seguranca, conforto e estimulação adequada ao desenvolvimento.',
          color: 'var(--pastel-mint)'
        }
      ],
      services: [
        { name: 'Terapia Ocupacional', shortDesc: 'Habilidades motoras e cognitivas' },
        { name: 'Integracao Sensorial', shortDesc: 'Processamento sensorial' },
        { name: 'Estimulacao Precoce', shortDesc: 'Primeiros anos de vida' },
        { name: 'Avaliacao Compreensiva', shortDesc: 'Diagnostico completo' }
      ]
    }
  },
  methods: {
    scrollToFeatures() {
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 100px;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.hero-shapes {
  position: absolute;
  right: -5%;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: var(--primary-light);
  top: 10%;
  right: 10%;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: var(--secondary-light);
  top: 40%;
  right: 30%;
}

.shape-3 {
  width: 200px;
  height: 200px;
  background: var(--accent-light);
  top: 65%;
  right: 5%;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content {
  max-width: 560px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--surface);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary);
  box-shadow: var(--shadow-sm);
  margin-bottom: 1.5rem;
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
  line-height: 1.1;
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
  margin-bottom: 2rem;
  max-width: 480px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 0.8125rem;
  color: var(--text-light);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(155, 126, 217, 0.2);
}

.hero-visual {
  position: relative;
  height: 500px;
}

.visual-card {
  position: absolute;
  background: var(--surface);
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: float 6s ease-in-out infinite;
}

.card-1 {
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 40%;
  right: 0;
  animation-delay: -2s;
}

.card-3 {
  top: 70%;
  right: 20%;
  animation-delay: -4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--primary-light);
}

.card-text {
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--text);
}

.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: var(--text-light);
  font-size: 0.8125rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.scroll-arrow {
  width: 24px;
  height: 24px;
  border-right: 2px solid var(--text-light);
  border-bottom: 2px solid var(--text-light);
  transform: rotate(45deg);
  animation: arrow 2s infinite;
}

@keyframes arrow {
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50% { transform: rotate(45deg) translateY(6px); }
}

.features {
  background: var(--surface);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
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

.section-header h2 {
  margin-bottom: 0.75rem;
}

.section-header p {
  max-width: 560px;
  margin: 0 auto;
  font-size: 1.0625rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.feature-card {
  background: var(--surface);
  padding: 2rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xs);
  text-align: center;
  transition: all 0.3s var(--ease-smooth);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 1.25rem;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-inner {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--primary);
  opacity: 0.3;
}

.feature-card h3 {
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
}

.feature-card p {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.services-preview {
  background: var(--background);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.service-card {
  background: var(--surface);
  padding: 1.75rem;
  border-radius: var(--radius-xl);
  text-decoration: none;
  transition: all 0.3s var(--ease-smooth);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.service-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background: var(--pastel-lavender);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-box {
  width: 24px;
  height: 24px;
  background: var(--primary);
  border-radius: 6px;
}

.service-content h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--text);
}

.service-content p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
}

.service-link {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--primary);
  margin-top: auto;
}

.section-cta {
  text-align: center;
  margin-top: 2.5rem;
}

.cta-section {
  background: var(--surface);
}

.cta-card {
  background: linear-gradient(135deg, var(--pastel-lavender) 0%, var(--pastel-mint) 100%);
  border-radius: var(--radius-2xl);
  padding: 4rem;
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

@media (max-width: 1024px) {
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-content {
    max-width: 100%;
  }
  
  .hero-subtitle {
    max-width: 100%;
    margin: 0 auto clamp(1.5rem, 4vw, 2rem);
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-stats {
    justify-content: center;
  }
  
  .hero-visual {
    display: none;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: clamp(4rem, 12vw, 6rem);
    min-height: auto;
    padding-bottom: 3rem;
  }
  
  .hero-badge {
    font-size: clamp(0.75rem, 2.5vw, 0.85rem);
  }
  
  .hero-title {
    font-size: clamp(2rem, 8vw, 2.75rem);
  }
  
  .hero-subtitle {
    font-size: clamp(0.95rem, 3vw, 1.1rem);
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
  }
  
  .hero-actions .btn {
    width: 100%;
    justify-content: center;
  }
  
  .hero-stats {
    flex-wrap: wrap;
    gap: clamp(1rem, 4vw, 1.5rem);
  }
  
  .stat-divider {
    display: none;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: clamp(1.25rem, 4vw, 1.5rem);
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card {
    padding: clamp(1.25rem, 4vw, 1.5rem);
  }
  
  .cta-content {
    padding: clamp(1.5rem, 5vw, 2rem);
  }
  
  .cta-content h2 {
    font-size: clamp(1.5rem, 5vw, 1.75rem);
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .cta-actions .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 380px) {
  .hero-title {
    font-size: 1.75rem;
  }
}
</style>