<script setup>
import { ref, computed } from 'vue'

const config = {
  whatsappUrl: 'https://wa.me/5512991968683'
}

const activeCategory = ref('all')
const openFaq = ref(null)

const categories = [
  { id: 'all', name: 'Todas' },
  { id: 'general', name: 'Geral' },
  { id: 'sensory', name: 'Sensorial' },
  { id: 'therapy', name: 'Terapia' },
  { id: 'schedule', name: 'Agendamento' }
]

const faqs = [
  {
    category: 'general',
    question: 'O que é Terapia Ocupacional pediátrica?',
    answer: 'A Terapia Ocupacional pediátrica é uma especialidade que ajuda crianças a desenvolver habilidades necessárias para realizar as atividades cotidianas, brincas e escolares. O terapeuta ocupacional utiliza atividades significativas para promover independência, coordenação motora, integração sensorial e participação nas rotinas diárias.'
  },
  {
    category: 'general',
    question: 'A partir de qual idade atende?',
    answer: 'Atendemos crianças a partir de 0 anos, com foco especial na estimulação precoce nos primeiros anos de vida. Quanto mais cedo for identificada a necessidade de intervenção, melhor para o desenvolvimento da criança.'
  },
  {
    category: 'general',
    question: 'Quanto tempo dura cada sessão?',
    answer: 'As sessões têm duração de 45 a 60 minutos, dependendo da necessidade da criança e do tipo de intervenção. Avaliações iniciais geralmente duram mais tempo para serem completas.'
  },
  {
    category: 'general',
    question: 'Preciso estar presente durante a sessão?',
    answer: 'Sim, a presença do responsável é fundamental durante as sessões, especialmente em crianças menores. Além disso, a orientação familiar é parte essencial do tratamento para garantir a generalização das habilidades aprendidas em casa.'
  },
  {
    category: 'sensory',
    question: 'O que é Integração Sensorial?',
    answer: 'Integração Sensorial é uma abordagem terapêutica que trabalha o processamento das informações sensoriais pelo cérebro. Desenvolvida pela Dra. Jean Ayres, ajuda crianças que têm dificuldade em processar estímulos sensoriais do ambiente de forma organizada.'
  },
  {
    category: 'sensory',
    question: 'Quais são os sinais de desregulação sensorial?',
    answer: 'Os sinais incluem: rejeição a certas texturas de roupas ou alimentos, tapar os ouvidos com barulhos comuns, dificuldade em transições entre atividades, quedas frequentes, busca excessiva de movimento ou, ao contrário, medo de se mexer, dificuldade em se concentrar, reações intensas a estímulos sensoriais.'
  },
  {
    category: 'sensory',
    question: 'Como saber se meu filho precisa de terapia sensorial?',
    answer: 'Se seu filho apresenta comportamentos que parecem incomuns para a idade, como dificuldade em se acalmar, seletividade alimentar extrema, rejeição a texturas, quedas frequentes, dificuldade com transições ou escolar atrasadas, uma avaliação com terapeuta ocupacional pode ajudar a identificar necessidades sensoriais.'
  },
  {
    category: 'sensory',
    question: 'O que é a "Sala Sensorial" (Snoezelen)?',
    answer: 'A Sala Sensorial é um ambiente controlado com estímulos visuais, táteis, sonoros e próprioceptivos, desenhado para ajudar a criança a processar informações sensoriais de forma mais organizada. É um espaço seguro para exploração e regulação.'
  },
  {
    category: 'therapy',
    question: 'Qual a diferença entre Terapia Ocupacional e Fisioterapia?',
    answer: 'A Terapia Ocupacional foca em habilidades funcionais para realizar atividades diárias, enquanto a Fisioterapia se concentra na reabilitação física e motora. A TO trabalha habilidades específicas para independência em brincas, alimentação, vestuário, escolar, enquanto a FM trabalha força, movimento e postura.'
  },
  {
    category: 'therapy',
    question: 'O que é Estimulação Precoce?',
    answer: 'Estimulação Precoce é um programa de intervenção destinado a crianças de 0 a 6 anos que visa otimizar o potencial de desenvolvimento através de atividades adequadas ao nível da criança. É especialmente importante quando há atrasos no desenvolvimento ou risco neurológico.'
  },
  {
    category: 'therapy',
    question: 'Os pais participam do tratamento?',
    answer: 'Sim! A família é parte essencial do tratamento. Os pais recebem orientações para aplicar estratégias em casa, garantindo que os progressos na terapia sejam generalizados para o cotidiano da criança. O sucesso do tratamento depende muito do envolvimento familiar.'
  },
  {
    category: 'schedule',
    question: 'Como funciona o agendamento?',
    answer: 'Você pode entrar em contato pelo WhatsApp ou preencher o formulário de agendamento. Retornaremos em até 24 horas para entender suas necessidades e agendar a avaliação inicial.'
  },
  {
    category: 'schedule',
    question: 'Quanto custa a avaliação?',
    answer: 'A avaliação inicial tem custo específico que varia conforme a extensão. Após a avaliação, apresentamos um plano de intervenção com as sessões recomendadas e investimento. Aceitamos diversas formas de pagamento.'
  },
  {
    category: 'schedule',
    question: 'Vocês atendem por plano de saúde?',
    answer: 'Trabalhamos com alguns planos de saúde. Entre em contato para verificar se aceitamos o seu plano. Também oferecemos opções de pagamento particular com pacotes.'
  },
  {
    category: 'schedule',
    question: 'Onde ficam localizados?',
    answer: 'Estamos na Rua Major José dos Santos Moreira, 328, Pindamonhangaba-SP, com atendimento presencial mediante agendamento prévio. Também oferecemos orientações online para famílias de outras regiões.'
  }
]

const filteredFaqs = computed(() => {
  if (activeCategory.value === 'all') return faqs
  return faqs.filter(faq => faq.category === activeCategory.value)
})

const sensoryApproach = [
  { title: 'Avaliação', description: 'Avaliação completa do perfil sensorial e funcional da criança' },
  { title: 'Plano', description: 'Elaboração de plano personalizado com metas específicas' },
  { title: 'Intervenção', description: 'Sessões terapêuticas com atividades estruturadas' },
  { title: 'Orientação', description: 'Orientação familiar para generalização em casa' }
]

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<template>
  <div class="faq">
    <section class="hero-section">
      <div class="container">
        <div class="section-title">
          <span class="section-tag">Perguntas Frequentes</span>
          <h2>O que Você Precisa Saber</h2>
          <p>Tire suas dúvidas sobre Terapia Ocupacional e Integração Sensorial.</p>
        </div>

        <div class="faq-categories">
          <button 
            v-for="category in categories" 
            :key="category.id"
            class="category-btn"
            :class="{ active: activeCategory === category.id }"
            @click="activeCategory = category.id"
          >
            {{ category.name }}
          </button>
        </div>

        <div class="faq-list">
          <div 
            v-for="(faq, index) in filteredFaqs" 
            :key="index"
            class="faq-item"
            :class="{ open: openFaq === index }"
            @click="toggleFaq(index)"
          >
            <div class="faq-question">
              <span class="faq-number">{{ index + 1 }}</span>
              <h3>{{ faq.question }}</h3>
              <div class="faq-toggle">
                <span></span>
              </div>
            </div>
            <div class="faq-answer" v-show="openFaq === index">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sensory-section section">
      <div class="container">
        <div class="section-title">
          <span class="section-tag">Especialidade</span>
          <h2>O que é Integração Sensorial?</h2>
        </div>
        
        <div class="sensory-showcase">
          <div class="sensory-text">
            <p>
              A <strong>Integração Sensorial</strong> é uma abordagem terapêutica desenvolvida pela Dra. Jean Ayres, 
              fundamentada na ideia de que o processamento das informações sensoriais é essencial para o desenvolvimento 
              e comportamento humano.
            </p>
            <p>
              Quando o cérebro processa as informações sensoriais de forma desorganizada, a criança pode apresentar 
              dificuldades em atividades cotidianas, comportamento desregulado e desafios no aprendizado.
            </p>
            
            <h3>Sistema Sensorial</h3>
            <p>
              O sistema sensorial inclui 8 sentidos que trabalham juntos: toque, olfato, paladar, visão, audição, 
              propriocepção (consciência do corpo), vestibular (equilíbrio e movimento) e interocepção.
            </p>
          </div>
          
          <div class="sensory-signs">
            <h3>Sinais de Regulação Sensorial</h3>
            <ul>
              <li><strong>Hiporreativo:</strong> Busca estímulos intensos, não percebe dor/temperatura, bate objetos</li>
              <li><strong>Hipersensível:</strong> Reage excessivamente a ruídos, texturas, luzes</li>
              <li><strong>Desorganizado:</strong> Dificuldade em se concentrar, transições</li>
              <li><strong>Motor:</strong> Coordenação ruim, quedas frequentes</li>
              <li><strong>Alimentar:</strong> Seletividade alimentar extrema</li>
              <li><strong>Sonoro:</strong> Tapando ouvidos ou procurando barulho</li>
            </ul>
          </div>
        </div>

        <div class="sensory-approach">
          <h3>Abordagem Terapêutica</h3>
          <div class="approach-grid">
            <div class="approach-step" v-for="step in sensoryApproach" :key="step.title">
              <div class="step-icon">
                <div class="step-icon-inner"></div>
              </div>
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
          <div class="cta-content">
            <h2>Ainda tem dúvidas?</h2>
            <p>Entre em contato conosco para saber como podemos ajudar seu filho.</p>
            <div class="cta-buttons">
              <NuxtLink to="/agendar" class="btn btn-primary btn-lg">Agendar Avaliação</NuxtLink>
              <a :href="config.whatsappUrl" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  padding-top: 140px;
  padding-bottom: 4rem;
}

.section-title {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title h2 {
  margin-bottom: 0.5rem;
}

.section-title p {
  opacity: 0.8;
}

.section-tag {
  display: inline-block;
  background: var(--pastel-lavender);
  color: var(--primary-dark);
  padding: 0.3rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.faq-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.category-btn {
  padding: 0.625rem 1.25rem;
  background: var(--surface);
  border: 2px solid var(--pastel-lavender);
  border-radius: var(--radius-full);
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  border-color: var(--primary-light);
}

.category-btn.active {
  background: var(--primary);
  color: var(--white);
  border-color: var(--primary);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: var(--surface);
  border-radius: var(--radius-lg);
  margin-bottom: 0.75rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: var(--shadow-sm);
}

.faq-item.open {
  box-shadow: var(--shadow-md);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
}

.faq-number {
  width: 32px;
  height: 32px;
  background: var(--primary-light);
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  font-weight: 600;
  flex-shrink: 0;
}

.faq-question h3 {
  flex: 1;
  font-size: 1rem;
  font-weight: 600;
}

.faq-toggle {
  width: 24px;
  height: 24px;
  position: relative;
  flex-shrink: 0;
}

.faq-toggle::before,
.faq-toggle::after {
  content: '';
  position: absolute;
  background: var(--text-light);
  border-radius: 2px;
  transition: transform 0.3s ease;
}

.faq-toggle::before {
  width: 12px;
  height: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.faq-toggle::after {
  width: 2px;
  height: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.faq-item.open .faq-toggle::after {
  transform: translate(-50%, -50%) rotate(90deg);
  opacity: 0;
}

.faq-answer {
  padding: 0 1.5rem 1.25rem;
  padding-left: calc(1.5rem + 32px + 1rem);
}

.faq-answer p {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.sensory-section {
  background: var(--surface);
}

.sensory-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.sensory-text p {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.sensory-text h3 {
  margin: 1.5rem 0 1rem;
}

.sensory-signs {
  background: var(--background);
  padding: 1.5rem;
  border-radius: var(--radius-xl);
}

.sensory-signs h3 {
  margin-bottom: 1rem;
}

.sensory-signs ul {
  list-style: none;
}

.sensory-signs li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
  font-size: 0.875rem;
  line-height: 1.5;
}

.sensory-signs li:last-child {
  border-bottom: none;
}

.sensory-signs li strong {
  color: var(--primary);
}

.sensory-approach {
  text-align: center;
}

.sensory-approach h3 {
  margin-bottom: 2rem;
}

.approach-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.approach-step {
  background: var(--background);
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  text-align: center;
  transition: all 0.3s ease;
}

.approach-step:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.step-icon {
  width: 48px;
  height: 48px;
  background: var(--pastel-lavender);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.step-icon-inner {
  width: 20px;
  height: 20px;
  background: var(--primary);
  border-radius: 6px;
  opacity: 0.5;
}

.approach-step h4 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.approach-step p {
  font-size: 0.8125rem;
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
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .sensory-showcase {
    grid-template-columns: 1fr;
  }
  
  .approach-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .faq-categories {
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 0.5rem;
  }
  
  .category-btn {
    flex-shrink: 0;
  }
  
  .approach-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .cta-buttons .btn {
    width: 100%;
  }
}
</style>