<script setup>
import { ref, computed } from 'vue'
import ColorBends from '~/components/ColorBends.vue'

useHead({
  title: 'FAQ | Autitude - Desenvolvimento e Ação Humana',
  meta: [
    { name: 'description', content: 'Perguntas frequentes sobre o atendimento da Autitude: neuropsicologia, neuropsicopedagogia, fonoaudiologia, terapia ocupacional e integração sensorial.' }
  ]
})

const config = {
  whatsappUrl: 'https://wa.me/5512991968683'
}

const activeCategory = ref('all')
const openFaq = ref(null)

const categories = [
  { id: 'all', name: 'Todas' },
  { id: 'general', name: 'Geral' },
  { id: 'neuro', name: 'Neurodivergência' },
  { id: 'therapy', name: 'Especialidades' },
  { id: 'schedule', name: 'Agendamento' }
]

const faqs = [
  {
    category: 'general',
    question: 'O que é a Autitude?',
    answer: 'A Autitude é um espaço especializado no atendimento de crianças, adolescentes e suas famílias, com foco no público neurodivergente. Nossa abordagem é humanizada, integrativa e baseada em evidências científicas, articulando diferentes especialidades em torno de cada pessoa.'
  },
  {
    category: 'general',
    question: 'Quais especialidades vocês oferecem?',
    answer: 'Trabalhamos com Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia e Terapia Ocupacional — especialidades que se articulam em torno de cada pessoa e de sua família. A Terapia Ocupacional conta com certificação internacional em Integração Sensorial.'
  },
  {
    category: 'general',
    question: 'A partir de qual idade vocês atendem?',
    answer: 'Atendemos crianças, adolescentes e suas famílias. O cuidado pode começar mesmo nos primeiros anos de vida, favorecendo o desenvolvimento desde cedo.'
  },
  {
    category: 'general',
    question: 'Quanto tempo dura cada sessão?',
    answer: 'As sessões têm duração de 45 a 60 minutos, de acordo com a necessidade e o tipo de intervenção. Avaliações iniciais costumam ser mais longas para uma escuta e investigação completas.'
  },
  {
    category: 'general',
    question: 'A família participa do processo?',
    answer: 'Sim. Acreditamos que a família é parte essencial do cuidado. Por isso, oferecemos orientações e conduzimos o trabalho em parceria, para que as conquistas possam acontecer também no cotidiano.'
  },
  {
    category: 'neuro',
    question: 'O que é neurodivergência?',
    answer: 'Neurodivergência é um conceito que reconhece variações no funcionamento do cérebro humano, como o Transtorno do Espectro Autista (TEA), o TDAH, a dislexia, entre outras. Cada pessoa neurodivergente tem um perfil único, com potências e desafios próprios.'
  },
  {
    category: 'neuro',
    question: 'Como sei se meu filho precisa de avaliação?',
    answer: 'Se você percebe desafios na comunicação, na aprendizagem, no comportamento, na regulação emocional ou na interação social, uma avaliação especializada pode ajudar a compreender o perfil e construir um plano de cuidado individualizado.'
  },
  {
    category: 'neuro',
    question: 'O que é Integração Sensorial?',
    answer: 'Integração Sensorial é uma abordagem terapêutica desenvolvida pela Dra. Jean Ayres que trabalha o processamento das informações sensoriais pelo cérebro, ajudando crianças e adolescentes a se organizarem melhor em relação aos estímulos do cotidiano.'
  },
  {
    category: 'neuro',
    question: 'Quais são os sinais de desregulação sensorial?',
    answer: 'Alguns sinais incluem: rejeição a texturas de roupas ou alimentos, reação intensa a barulhos, dificuldade em transições, quedas frequentes, busca excessiva de movimento ou, ao contrário, medo de se movimentar, dificuldade de concentração e seletividade alimentar.'
  },
  {
    category: 'therapy',
    question: 'O que faz a Neuropsicologia?',
    answer: 'A Neuropsicologia investiga o funcionamento cognitivo, emocional e comportamental, realiza avaliações neuropsicológicas e rastreamento de neurodivergências, além de oferecer orientação e apoio às famílias.'
  },
  {
    category: 'therapy',
    question: 'O que faz a Neuropsicopedagogia?',
    answer: 'A Neuropsicopedagogia identifica e acompanha dificuldades de aprendizagem, planeja e aplica planos pedagógicos individuais e apoia o desenvolvimento escolar, articulando neurociência e educação.'
  },
  {
    category: 'therapy',
    question: 'O que faz a Fonoaudiologia?',
    answer: 'A Fonoaudiologia trabalha o desenvolvimento da linguagem, a comunicação social, a fala e a motricidade orofacial, com atenção especial ao atendimento de pessoas neurodivergentes.'
  },
  {
    category: 'therapy',
    question: 'O que faz a Terapia Ocupacional?',
    answer: 'A Terapia Ocupacional promove a autonomia, a socialização, a independência funcional e o enfrentamento dos desafios do cotidiano, com certificação internacional em Integração Sensorial pela University of Southern California (USC, USA).'
  },
  {
    category: 'schedule',
    question: 'Como funciona o agendamento?',
    answer: 'Você pode entrar em contato pelo WhatsApp ou preencher o formulário de agendamento em nosso site. Retornaremos em até 24 horas para entender suas necessidades e marcar a avaliação inicial.'
  },
  {
    category: 'schedule',
    question: 'Quanto custa a avaliação?',
    answer: 'A avaliação inicial tem investimento que pode variar conforme a especialidade e a extensão. Após a avaliação, apresentamos um plano de cuidado personalizado, com sessões e formas de pagamento adequadas a cada família.'
  },
  {
    category: 'schedule',
    question: 'Vocês atendem por plano de saúde?',
    answer: 'Trabalhamos com alguns planos de saúde e também com opções particulares, incluindo pacotes. Entre em contato para verificarmos o seu plano.'
  },
  {
    category: 'schedule',
    question: 'Onde vocês estão localizados?',
    answer: 'Estamos na Rua Major José dos Santos Moreira, 328 — Vila Rica, Pindamonhangaba-SP. O atendimento é presencial, com agendamento prévio, e também oferecemos orientações online para famílias de outras regiões.'
  }
]

const filteredFaqs = computed(() => {
  if (activeCategory.value === 'all') return faqs
  return faqs.filter(faq => faq.category === activeCategory.value)
})

const approach = [
  { title: 'Acolhimento', description: 'Escuta atenta da história e das necessidades de cada família' },
  { title: 'Avaliação', description: 'Investigação cuidadosa do perfil único de cada pessoa' },
  { title: 'Plano', description: 'Construção de um plano individualizado e baseado em evidências' },
  { title: 'Acompanhamento', description: 'Cuidado contínuo, com orientação à família e à rede de apoio' }
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
          <span class="section-tag">Perguntas frequentes</span>
          <h2>O que você precisa saber</h2>
          <p>Tire suas dúvidas sobre o cuidado que oferecemos na Autitude.</p>
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
              e o comportamento humano.
            </p>
            <p>
              Quando o cérebro processa as informações sensoriais de forma desorganizada, a criança ou o adolescente pode apresentar 
              dificuldades em atividades cotidianas, comportamento desregulado e desafios na aprendizagem.
            </p>
            
            <h3>Sistema sensorial</h3>
            <p>
              O sistema sensorial inclui 8 sentidos que trabalham juntos: tato, olfato, paladar, visão, audição, 
              propriocepção (consciência do corpo), vestibular (equilíbrio e movimento) e interocepção.
            </p>
          </div>
          
          <div class="sensory-signs">
            <h3>Sinais de regulação sensorial</h3>
            <ul>
              <li><strong>Hiporreativo:</strong> busca estímulos intensos, parece não perceber dor ou temperatura</li>
              <li><strong>Hipersensível:</strong> reage excessivamente a ruídos, texturas e luzes</li>
              <li><strong>Desorganizado:</strong> dificuldade de concentração e nas transições</li>
              <li><strong>Motor:</strong> coordenação ruim e quedas frequentes</li>
              <li><strong>Alimentar:</strong> seletividade alimentar extrema</li>
              <li><strong>Sonoro:</strong> tapar os ouvidos ou buscar barulhos de forma intensa</li>
            </ul>
          </div>
        </div>

        <div class="sensory-approach">
          <h3>Como conduzimos o cuidado</h3>
          <div class="approach-grid">
            <div class="approach-step" v-for="step in approach" :key="step.title">
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
          <ColorBends
            class="cta-bg-effect"
            :colors="['#6B4FA3', '#8FC176', '#3D2D5E', '#5C9F45']"
            :rotation="40"
            :speed="0.18"
            :scale="1.25"
            :frequency="1.5"
            :warpStrength="1.1"
            :mouseInfluence="0.5"
            :parallax="0.4"
            :noise="0.06"
            transparent
          />
          <div class="cta-content">
            <span class="cta-tag">Autitude — Desenvolvimento e Ação Humana</span>
            <h2>Ainda tem dúvidas?</h2>
            <p>💜 Cuidamos de pessoas. Potencializamos possibilidades.</p>
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
  padding-top: var(--space-section-top);
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
  background: var(--lilac-soft);
  color: var(--lilac-deep);
  border: 1px solid var(--lilac-light);
  padding: 0.3rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 600;
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
  border: 2px solid var(--lilac-soft);
  border-radius: var(--radius-full);
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  border-color: var(--lilac-light);
}

.category-btn.active {
  background: var(--lilac);
  color: var(--white);
  border-color: var(--lilac);
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
  background: var(--lilac-light);
  color: var(--lilac-deep);
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
  background: var(--surface-alt);
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
  color: var(--lilac-deep);
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
  background: var(--lilac-soft);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.step-icon-inner {
  width: 20px;
  height: 20px;
  background: var(--lilac);
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
  position: relative;
  background: var(--surface);
  border-radius: var(--radius-2xl);
  overflow: hidden;
}

.cta-bg-effect {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.cta-content {
  position: relative;
  z-index: 1;
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

.cta-tag {
  display: inline-block;
  padding: 0.375rem 1rem;
  background: rgba(255,255,255,0.6);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 1rem;
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