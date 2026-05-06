<template>
  <div class="faq" ref="faqContainer">
    <section class="section hero-section">
      <div class="container">
        <div class="section-title" ref="faqTitle">
          <span class="section-tag">Perguntas Frequentes</span>
          <h2>O que Voce Precisa Saber</h2>
          <p>Tire suas duvidas sobre Terapia Ocupacional e Integracao Sensorial.</p>
        </div>

        <div class="faq-categories">
          <button 
            v-for="category in categories" 
            :key="category.id"
            class="category-btn"
            :class="{ active: activeCategory === category.id }"
            @click="activeCategory = category.id"
          >
            <div class="category-icon"></div>
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
              <span class="faq-arrow">▼</span>
            </div>
            <div class="faq-answer" v-show="openFaq === index">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sensory-section section" ref="sensorySection">
      <div class="container">
        <div class="section-title">
          <span class="section-tag">Especialidade</span>
          <h2>O que e Integracao Sensorial?</h2>
        </div>
        
        <div class="sensory-content">
          <div class="sensory-text">
            <p>
              A <strong>Integracao Sensorial</strong> e uma abordagem terapeutica desenvolvida pela Dra. Jean Ayres, 
              fundamentada na ideia de que o processamento das informacoes sensoriais e essencial para o desenvolvimento 
              e comportamento humano.
            </p>
            <p>
              Quando o cerebro processa as informacoes sensoriais de forma desorganizada, a crianca pode apresentar 
              dificuldades em atividades cotidianas, comportamento desregulado e desafios no aprendizado.
            </p>
            
            <h3>Sistema Sensorial</h3>
            <p>
              O sistema sensorial inclui 7 sentidos que trabalham juntos: toque, olfato, paladar, visao, audiicao, 
              propriocepcao (consciencia do corpo) e vestibular (equilibrio e movimento).
            </p>
          </div>
          
          <div class="sensory-signs">
            <h3>Sinais de Regulacao Sensorial</h3>
            <ul>
              <li><strong>Hiporreativo:</strong> Busca estimulos intensos, nao percebe dor/temperatura, bate objetos</li>
              <li><strong>Hipersensivel:</strong> Reage excessivamente a ruidos, texturas, luzes</li>
              <li><strong>Desorganizado:</strong> Dificuldade em se concentrar, transicoes</li>
              <li><strong>Motor:</strong> Coordinacao ruim, quedas frequentes</li>
              <li><strong>Alimentar:</strong> Seletividade alimentar extrema</li>
              <li><strong>Sonoro:</strong> Tapando ouvidos ou procurando barulho</li>
            </ul>
          </div>
        </div>

        <div class="sensory-approach">
          <h3>Abordagem Terapeutica</h3>
          <div class="approach-steps">
            <div class="approach-step" v-for="step in sensoryApproach" :key="step.title">
              <div class="step-icon"></div>
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta section" ref="ctaSection">
      <div class="container">
        <div class="cta-content">
          <h2>Ainda tem duvidas?</h2>
          <p>Entre em contato conosco para saber como podemos ajudar seu filho.</p>
          <div class="cta-buttons">
            <router-link to="/agendar" class="btn btn-primary">Agendar Avaliacao</router-link>
            <a href="https://wa.me/5512991968683" class="btn btn-whatsapp" target="_blank">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'FaqView',
  setup() {
    const faqContainer = ref(null)
    const faqTitle = ref(null)
    const sensorySection = ref(null)
    const ctaSection = ref(null)
    let gsapCtx = null

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
        question: 'O que e Terapia Ocupacional pediatrica?',
        answer: 'A Terapia Ocupacional pediatrica e uma especialidade que ajuda criancas a desenvolver habilidades necessarias para realizar as atividades cotidianas, brincas e escolares. O terapeuta ocupacional utiliza atividades significativas para promover independencia, coordinacao motora, integracao sensorial e participacao nas rotinas diarias.'
      },
      {
        category: 'general',
        question: 'A partir de qual idade atende?',
        answer: 'Atendemos criancas a partir de 0 anos, com foco especial na estimulacao precoce nos primeiros anos de vida. Quanto mais cedo for identificada a necessidade de intervencao, melhor para o desenvolvimento da crianca.'
      },
      {
        category: 'general',
        question: 'Quanto tempo dura cada sessao?',
        answer: 'As sessoes tem duracao de 45 a 60 minutos, dependendo da necessidade da crianca e do tipo de intervencao. Avaliacoes iniciais geralmente duram mais tempo para serem completas.'
      },
      {
        category: 'general',
        question: 'Preciso estar presente durante a sessao?',
        answer: 'Sim, a presenca do responsavel e fundamental durante as sessoes, especialmente em criancas menores. Alem disso, a orientacao familiar e parte essencial do tratamento para garantir a generalizacao das habilidades aprendidas em casa.'
      },
      {
        category: 'sensory',
        question: 'O que e Integracao Sensorial?',
        answer: 'Integracao Sensorial e uma abordagem terapeutica que trabalha o processamento das informacoes sensoriais pelo cerebro. Desenvolvida pela Dra. Jean Ayres, ajuda criancas que tem dificuldade em processar estimulos sensoriais do ambiente de forma organizada.'
      },
      {
        category: 'sensory',
        question: 'Quais sao os sinais de desregulacao sensorial?',
        answer: 'Os sinais incluem: rejeicao a certas texturas de roupas ou alimentos, tapar os ouvidos com barulhos comuns, dificuldade em transicoes entre atividades, quedas frequentes, busca excessiva de movimento ou, ao contrario, medo de se mexer, dificuldade em se concentrar, reagicoes intensas a estimulos sensoriais.'
      },
      {
        category: 'sensory',
        question: 'Como saber se meu filho precisa de terapia sensorial?',
        answer: 'Se seu filho apresenta comportamentos que parecem incomuns para a idade, como dificuldade em se acalmar, seletividade alimentar extrema, rejeicao a texturas, quedas frequentes, dificuldade com transicoes ou escolar atrasadas, uma avaliacao com terapeuta ocupacional pode ajudar a identificar necessidades sensoriais.'
      },
      {
        category: 'sensory',
        question: 'O que e a "Sala Sensorial" (Snoezelen)?',
        answer: 'A Sala Sensorial e um ambiente controlado com estimulos visuais, tateis, sonoros e proprioceptivos, desenhado para ajudar a crianca a processar informacoes sensoriais de forma mais organizada. E um espaco seguro para exploracao e regulacao.'
      },
      {
        category: 'therapy',
        question: 'Qual a diferenca entre Terapia Ocupacional e Fisioterapia?',
        answer: 'A Terapia Ocupacional foca em habilidades funcionais para realizar atividades diarias, enquanto a Fisioterapia se concentra na reabilitacao fisica e motora. A TO trabalha habilidades especificas para independencia em brincas, alimentacao, vestuario, escolar, enquanto a FM trabalha forca, movimento e postura.'
      },
      {
        category: 'therapy',
        question: 'O que e Estimulacao Precoce?',
        answer: 'Estimulacao Precoce e um programa de intervencao destinado a criancas de 0 a 6 anos que visa otimizar o potencial de desenvolvimento atraves de atividades adequadas ao nivel da crianca. E especialmente importante quando ha atrasos no desenvolvimento ou risco neurologico.'
      },
      {
        category: 'therapy',
        question: 'Os pais participam do tratamento?',
        answer: 'Sim! A familia e parte essencial do tratamento. Os pais recebem orientacoes para aplicar estrategias em casa, garantindo que os progressos na terapia sejam generalizados para o cotidiano da crianca. O sucesso do tratamento depende muito do envolvimento familiar.'
      },
      {
        category: 'schedule',
        question: 'Como funciona o agendamento?',
        answer: 'Voce pode entrar em contato pelo WhatsApp ou preencher o formulario de agendamento. Retornaremos em ate 24 horas para entender suas necessidades e agendar a avaliacao inicial.'
      },
      {
        category: 'schedule',
        question: 'Quanto custa a avaliacao?',
        answer: 'A avaliacao inicial tem custo especifico que varia conforme a extensao. Apos a avaliacao, apresentamos um plano de intervencao com as sessoes recomendadas e investimento. Aceitamos diversas formas de pagamento.'
      },
      {
        category: 'schedule',
        question: 'Voces atendem por plano de saude?',
        answer: 'Trabalhamos com alguns planos de saude. Entre em contato para verificar se aceitamos o seu plano. Tambem oferecemos opcoes de pagamento particular com pacotes.'
      },
      {
        category: 'schedule',
        question: 'Onde ficam localizados?',
        answer: 'Estamos na Rua Major Jose dos Santos Moreira, 328, Pindamonhangaba-SP, com atendimento presencial mediante agendamento previo. Tambem oferecemos orientacoes online para familias de outras regioes.'
      }
    ]

    const filteredFaqs = computed(() => {
      if (activeCategory.value === 'all') return faqs
      return faqs.filter(faq => faq.category === activeCategory.value)
    })

    const sensoryApproach = [
      {
        title: 'Avaliacao',
        description: 'Avaliacao completa do perfil sensorial e funcional da crianca'
      },
      {
        title: 'Plano',
        description: 'Elaboracao de plano personalizado com metas especificas'
      },
      {
        title: 'Intervencao',
        description: 'Sessoes terapeuticas com atividades estruturadas'
      },
      {
        title: 'Orientacao',
        description: 'Orientacao familiar para generalizacao em casa'
      }
    ]

    const toggleFaq = (index) => {
      openFaq.value = openFaq.value === index ? null : index
    }

    onMounted(() => {
      gsapCtx = gsap.context(() => {
        gsap.from(faqTitle.value, {
          scrollTrigger: {
            trigger: faqTitle.value,
            start: 'top 80%'
          },
          y: 40,
          opacity: 0,
          duration: 0.8
        })

        gsap.from('.category-btn', {
          scrollTrigger: {
            trigger: '.faq-categories',
            start: 'top 85%'
          },
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1
        })

        gsap.from('.faq-item', {
          scrollTrigger: {
            trigger: '.faq-list',
            start: 'top 85%'
          },
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1
        })

        gsap.from('.sensory-content', {
          scrollTrigger: {
            trigger: sensorySection.value,
            start: 'top 80%'
          },
          y: 40,
          opacity: 0,
          duration: 0.8
        })

        gsap.from('.approach-step', {
          scrollTrigger: {
            trigger: '.approach-steps',
            start: 'top 85%'
          },
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.15
        })

        gsap.from('.cta-content', {
          scrollTrigger: {
            trigger: ctaSection.value,
            start: 'top 80%'
          },
          y: 40,
          opacity: 0,
          duration: 0.8
        })
      }, faqContainer.value)
    })

    onUnmounted(() => {
      if (gsapCtx) gsapCtx.revert()
    })

    return {
      faqContainer,
      faqTitle,
      sensorySection,
      ctaSection,
      activeCategory,
      openFaq,
      categories,
      filteredFaqs,
      sensoryApproach,
      toggleFaq
    }
  }
}
</script>

<style scoped>
.section-tag {
  display: inline-block;
  background: var(--lilac);
  color: white;
  padding: 0.3rem clamp(0.75rem, 2vw, 1rem);
  border-radius: var(--radius-full);
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  margin-bottom: 1rem;
}

.section-title {
  text-align: center;
  margin-bottom: clamp(2rem, 5vw, 3rem);
}

.section-title h2 {
  margin-bottom: 0.5rem;
}

.section-title p {
  opacity: 0.8;
}

.faq-categories {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.5rem, 2vw, 0.75rem);
  justify-content: center;
  margin-bottom: clamp(2rem, 5vw, 3rem);
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem);
  background: rgba(255, 255, 255, 0.7);
  border: 2px solid transparent;
  border-radius: var(--radius-full);
  font-size: clamp(0.8rem, 2vw, 0.95rem);
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  background: white;
}

.category-btn.active {
  background: var(--lilac);
  color: white;
}

.category-icon {
  width: 16px;
  height: 16px;
  background: var(--primary);
  border-radius: 4px;
  opacity: 0.5;
}

.faq-list {
  max-width: clamp(300px, 80vw, 800px);
  margin: 0 auto;
}

.faq-item {
  background: rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-medium);
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-item:hover {
  background: rgba(255, 255, 255, 0.9);
}

.faq-item.open {
  background: rgba(255, 255, 255, 0.95);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: clamp(0.75rem, 2vw, 1rem);
  padding: clamp(1rem, 3vw, 1.5rem);
}

.faq-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(28px, 6vw, 32px);
  height: clamp(28px, 6vw, 32px);
  background: var(--lilac);
  color: white;
  border-radius: 50%;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 600;
  flex-shrink: 0;
}

.faq-question h3 {
  flex: 1;
  font-size: clamp(0.9rem, 2.5vw, 1.05rem);
  font-weight: 600;
}

.faq-arrow {
  font-size: clamp(0.75rem, 2vw, 0.9rem);
  transition: transform 0.3s ease;
}

.faq-item.open .faq-arrow {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 clamp(1rem, 3vw, 1.5rem) clamp(1rem, 3vw, 1.5rem);
  padding-bottom: clamp(1rem, 3vw, 1.5rem);
}

.faq-answer p {
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  line-height: 1.7;
  opacity: 0.85;
}

.sensory-section {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(195, 177, 225, 0.1));
}

.sensory-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(250px, 45vw, 400px), 1fr));
  gap: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: clamp(2rem, 5vw, 3rem);
}

.sensory-text p {
  margin-bottom: 1rem;
  line-height: 1.7;
  opacity: 0.85;
}

.sensory-text h3 {
  margin: 1.5rem 0 1rem;
}

.sensory-signs {
  background: rgba(255, 255, 255, 0.7);
  padding: clamp(1.25rem, 4vw, 2rem);
  border-radius: var(--radius-medium);
}

.sensory-signs h3 {
  margin-bottom: 1rem;
}

.sensory-signs ul {
  list-style: none;
}

.sensory-signs li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  line-height: 1.5;
}

.sensory-signs li:last-child {
  border-bottom: none;
}

.sensory-signs li strong {
  color: var(--lilac);
}

.sensory-approach {
  margin-top: clamp(2rem, 5vw, 3rem);
}

.sensory-approach h3 {
  text-align: center;
  margin-bottom: clamp(1.5rem, 4vw, 2rem);
}

.approach-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(180px, 30vw, 220px), 1fr));
  gap: clamp(1rem, 3vw, 1.5rem);
}

.approach-step {
  text-align: center;
  background: rgba(255, 255, 255, 0.7);
  padding: clamp(1.25rem, 4vw, 2rem);
  border-radius: var(--radius-medium);
  transition: transform 0.3s ease;
}

.approach-step:hover {
  transform: translateY(-5px);
}

.step-icon {
  width: 40px;
  height: 40px;
  background: var(--primary-light);
  border-radius: 50%;
  margin: 0 auto 0.75rem;
}

.approach-step h4 {
  margin-bottom: 0.5rem;
}

.approach-step p {
  font-size: clamp(0.8rem, 2vw, 0.85rem);
  opacity: 0.8;
}

.cta-content {
  text-align: center;
  background: rgba(255, 255, 255, 0.7);
  padding: clamp(2rem, 6vw, 3rem);
  border-radius: var(--radius-large);
}

.cta h2 {
  margin-bottom: 0.75rem;
}

.cta p {
  margin-bottom: clamp(1.5rem, 4vw, 2rem);
  opacity: 0.8;
}

.cta-buttons {
  display: flex;
  gap: clamp(0.75rem, 3vw, 1rem);
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .faq-categories {
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 0.5rem;
  }
  
  .category-btn {
    flex-shrink: 0;
  }
}
</style>