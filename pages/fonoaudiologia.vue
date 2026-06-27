<script setup>
import { Mic, MessageCircle, Volume2, Ear } from 'lucide-vue-next'
import Grainient from '~/components/Grainient.vue'

const { whatsappUrl, phoneDisplay, address, postalCode } = useContact()

const openFaq = ref(null)

const siteBase = 'https://autitude.com.br'

useHead({
  title: 'Fonoaudiologia em Pindamonhangaba | Autitude',
  meta: [
    { name: 'description', content: 'Fonoaudiologia em Pindamonhangaba-SP: desenvolvimento da linguagem, comunicação social, fala e motricidade orofacial. Atendimento especializado para crianças e adolescentes neurodivergentes.' },
    { name: 'keywords', content: 'fonoaudiologia, fonoaudiólogo Pindamonhangaba, linguagem infantil, comunicação social, motricidade orofacial, TEA, autismo, atraso de fala, neurodivergência' },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { name: 'author', content: 'Autitude - Desenvolvimento e Ação Humana' },
    { property: 'og:title', content: 'Fonoaudiologia em Pindamonhangaba | Autitude' },
    { property: 'og:description', content: 'Fonoaudiologia em Pindamonhangaba: desenvolvimento da linguagem, comunicação social, fala e motricidade orofacial para crianças e adolescentes neurodivergentes.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:url', content: `${siteBase}/fonoaudiologia` },
    { property: 'og:image', content: `${siteBase}/full-logo.png` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Fonoaudiologia em Pindamonhangaba | Autitude' },
    { name: 'twitter:description', content: 'Fonoaudiologia em Pindamonhangaba: desenvolvimento da linguagem, comunicação social, fala e motricidade orofacial.' },
    { name: 'geo.region', content: 'BR-SP' },
    { name: 'geo.placename', content: 'Pindamonhangaba' },
    { name: 'ICBM', content: '-22.9309, -45.4607' },
    { name: 'geo.position', content: '-22.9309;-45.4607' },
    { name: 'date-published', content: '2024-01-01' },
    { name: 'date-modified', content: '2026-06-09' }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}/fonoaudiologia` },
    { rel: 'alternate', href: `${siteBase}/fonoaudiologia`, hreflang: 'pt-BR' }
  ],
  script: [
    {
      type: 'application/ld+json',
      key: 'medical-webpage',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Fonoaudiologia em Pindamonhangaba | Autitude',
        description: 'Desenvolvimento da linguagem, comunicação social, fala e motricidade orofacial com atendimento especializado para neurodivergentes.',
        url: `${siteBase}/fonoaudiologia`,
        datePublished: '2024-01-01',
        dateModified: '2026-06-09',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.seo-paragraph', '.seo-faq-hidden']
        },
        about: {
          '@type': 'MedicalTherapy',
          name: 'Fonoaudiologia',
          description: 'Acompanhamento da linguagem, fala, comunicação social e motricidade orofacial, com olhar atento à neurodivergência.'
        },
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          url: siteBase,
          telephone: phoneDisplay,
          address: {
            '@type': 'PostalAddress',
            streetAddress: address,
            addressLocality: 'Pindamonhangaba',
            addressRegion: 'SP',
            addressCountry: 'BR',
            postalCode: postalCode
          }
        }
      })
    },
    {
      type: 'application/ld+json',
      key: 'breadcrumb',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: siteBase },
          { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${siteBase}/servicos` },
          { '@type': 'ListItem', position: 3, name: 'Fonoaudiologia', item: `${siteBase}/fonoaudiologia` }
        ]
      })
    },
    {
      type: 'application/ld+json',
      key: 'faqpage',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        name: 'Perguntas Frequentes — Fonoaudiologia | Autitude',
        description: 'Respostas para perguntas comuns sobre Fonoaudiologia na Autitude em Pindamonhangaba-SP.',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'O que é Fonoaudiologia?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A fonoaudiologia cuida da comunicação humana em todas as suas formas: fala, linguagem oral e escrita, voz, audição e motricidade orofacial. Na Autitude, o atendimento fonoaudiológico é especializado em crianças e adolescentes neurodivergentes, trabalhando a comunicação social, a interação e a expressão de forma lúdica e individualizada.'
            }
          },
          {
            '@type': 'Question',
            name: 'Para quem é indicado?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'É indicada para crianças com atraso na fala, dificuldades de articulação, compreensão ou expressão verbal, alterações na voz, gagueira, dificuldades de alimentação por questões motoras orais, e para crianças no espectro autista que precisam desenvolver habilidades de comunicação social e linguagem.'
            }
          },
          {
            '@type': 'Question',
            name: 'Como funciona o atendimento na Autitude?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O processo inicia com uma avaliação completa da comunicação e motricidade orofacial. A partir dos resultados, são planejadas sessões lúdicas e estruturadas com objetivos específicos. A família recebe orientações para estimular a comunicação em casa, e há integração com as demais terapias da criança na clínica.'
            }
          }
        ]
      })
    }
  ]
})

const benefits = [
  {
    icon: MessageCircle,
    title: 'Desenvolvimento da linguagem',
    description: 'Estimulação da linguagem oral e compreensão verbal, ampliação do vocabulário, construção de frases e narrativas, e desenvolvimento da comunicação funcional no dia a dia.'
  },
  {
    icon: Mic,
    title: 'Comunicação social',
    description: 'Trabalho direcionado às habilidades pragmáticas da linguagem — iniciar e manter conversas, fazer pedidos, expressar emoções, interpretar contextos sociais e desenvolver reciprocidade.'
  },
  {
    icon: Volume2,
    title: 'Fala e motricidade orofacial',
    description: 'Intervenção em alterações de fala (troca de sons, omissões), gagueira, respiração oral, mastigação, deglutição e demais funções orofaciais que impactam a comunicação e a alimentação.'
  },
  {
    icon: Ear,
    title: 'Atendimento neurodivergente',
    description: 'Abordagem especializada para crianças e adolescentes com TEA, TDAH, síndromes genéticas e outras condições do neurodesenvolvimento, com estratégias baseadas em evidências e centradas na pessoa.'
  }
]

const faqs = [
  {
    question: 'Quando procurar um fonoaudiólogo?',
    answer: 'Recomenda-se procurar um fonoaudiólogo quando a criança não está desenvolvendo a fala conforme o esperado para a idade, apresenta dificuldade de compreensão, troca ou omite sons da fala, gagueja, tem dificuldade para se alimentar (engasgos, seletividade alimentar extrema), respira pela boca com frequência ou apresenta dificuldades de interação social e comunicação.'
  },
  {
    question: 'Qual a diferença entre atraso de fala e autismo?',
    answer: 'O atraso simples de fala é caracterizado por um desenvolvimento mais lento da linguagem, mas a criança mantém interesse social, contato visual e intenção comunicativa. No autismo (TEA), além do atraso ou atipia na linguagem, há comprometimento na comunicação social, dificuldade em iniciar e manter interações, interesses restritos e comportamentos repetitivos. A avaliação fonoaudiológica é essencial para diferenciar esses quadros e direcionar a intervenção adequada.'
  },
  {
    question: 'Como a fonoaudiologia ajuda crianças com TEA?',
    answer: 'A fonoaudiologia auxilia crianças com TEA no desenvolvimento da comunicação funcional — seja por linguagem oral, pranchas de comunicação alternativa, sinais ou dispositivos eletrônicos. Também trabalha habilidades sociais como contato visual, turnos de fala, compreensão de regras sociais, expressão de emoções e redução de comportamentos desafiadores por meio de estratégias comunicativas. O trabalho é sempre individualizado e centrado nos interesses da criança.'
  },
  {
    question: 'A partir de que idade posso levar meu filho ao fono?',
    answer: 'A fonoaudiologia pode ser iniciada desde os primeiros meses de vida, especialmente em casos de bebês com dificuldades de sucção, deglutição ou alimentação. Para questões de linguagem e fala, a avaliação pode ocorrer a partir de 1 ano e meio, quando começam a surgir as primeiras palavras. Quanto mais precoce a intervenção, melhores os resultados no desenvolvimento da comunicação.'
  }
]
</script>

<template>
  <div class="service-page">
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
        <span class="section-tag texture-hd">Fonoaudiologia</span>
        <h1>Fonoaudiologia em Pindamonhangaba: Linguagem, Comunicação e Desenvolvimento</h1>

        <div class="seo-answer seo-text">
          <p class="seo-paragraph texture-hd">
            A <strong>Fonoaudiologia</strong> é a especialidade dedicada ao desenvolvimento da <strong>linguagem</strong>,
            da <strong>comunicação social</strong>, da <strong>fala</strong> e da <strong>motricidade orofacial</strong>.
            Em Pindamonhangaba-SP, a Autitude oferece atendimento fonoaudiológico especializado para crianças e adolescentes
            neurodivergentes, com abordagem humanizada e baseada em evidências. O trabalho fonoaudiológico é essencial para
            ampliar a comunicação, reduzir frustrações e promover interações sociais mais significativas.
          </p>
        </div>

        <div class="service-overview">
          <div class="overview-content">
            <h2>O que é a Fonoaudiologia?</h2>
            <h2>Quando procurar um fonoaudiólogo em Pindamonhangaba?</h2>
            <p class="overview-text">
              A Fonoaudiologia cuida da comunicação humana em todas as suas formas — fala, linguagem oral e escrita,
              voz, audição e funções orofaciais relacionadas à alimentação e respiração. Na infância e adolescência,
              o fonoaudiólogo atua na prevenção, avaliação e intervenção de alterações que possam impactar o
              desenvolvimento comunicativo, social e acadêmico.
            </p>
            <p class="overview-text">
              Na Autitude, a fonoaudiologia se integra à <NuxtLink to="/neuropsicologia">neuropsicologia</NuxtLink>,
              à <NuxtLink to="/neuropsicopedagogia">neuropsicopedagogia</NuxtLink> e à
              <NuxtLink to="/terapia-ocupacional">terapia ocupacional</NuxtLink>, oferecendo um cuidado transdisciplinar
              que considera a pessoa em sua totalidade. A família é acolhida e orientada para que a comunicação
              se fortaleça também no ambiente doméstico e escolar.
            </p>

            <div class="benefits-list">
              <div class="benefit-item texture-hd-paper" v-for="benefit in benefits" :key="benefit.title">
                <div class="benefit-icon-wrap texture-hd">
                  <component :is="benefit.icon" :size="24" class="icon-primary" />
                </div>
                <div>
                  <h3>{{ benefit.title }}</h3>
                  <p>{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="faq-section">
          <h2>Perguntas frequentes sobre Fonoaudiologia</h2>
          <div class="faq-list">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="faq-item texture-hd-paper"
              :class="{ open: openFaq === index }"
            >
              <div
                class="faq-question"
                role="button"
                tabindex="0"
                :aria-expanded="openFaq === index"
                @click="openFaq = openFaq === index ? null : index"
                @keydown.enter.prevent="openFaq = openFaq === index ? null : index"
                @keydown.space.prevent="openFaq = openFaq === index ? null : index"
              >
                <h3>{{ faq.question }}</h3>
                <div class="faq-toggle">
                  <span></span>
                </div>
              </div>
              <Transition name="accordion">
                <div v-show="openFaq === index" class="faq-answer">
                  <p>{{ faq.answer }}</p>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        <CtaSection
          title="Agende uma avaliação fonoaudiológica"
          tagline="💜 Cuidamos de pessoas. Potencializamos possibilidades."
          primary-btn="/agendar"
          primary-btn-text="Agendar Agora"
          :whatsapp-btn="true"
          :show-contact="false"
          :colors="['#6B4FA3', '#8FC176', '#8FB1F0', '#3D2D5E', '#5C9F45']"
          :color-bends-props="{ rotation: 28, speed: 0.16, scale: 1.3, frequency: 1.35, warpStrength: 1.05, mouseInfluence: 0.45, parallax: 0.35, noise: 0.055 }"
        />
      </div>
    </section>
  </div>
    <!-- Hidden SEO content for crawlers -->
    <section class="seo-faq-hidden" aria-label="Perguntas Frequentes"
      style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;">
      <h2>Fonoaudiologia em Pindamonhangaba — Perguntas Frequentes</h2>
      <p>A <strong>Fonoaudiologia</strong> na <strong>Autitude em Pindamonhangaba-SP</strong> atua no desenvolvimento da linguagem, comunicação social, fala e motricidade orofacial, com atendimento especializado para crianças e adolescentes neurodivergentes, incluindo TEA e TDAH.</p>
      <h2>Quais são os marcos do desenvolvimento da fala infantil?</h2>
      <p>Os marcos incluem: balbucio aos 6 meses, primeiras palavras aos 12 meses, combinação de 2 palavras aos 24 meses e frases completas aos 36 meses. Atrasos podem indicar necessidade de intervenção. Confira a tabela completa em <a href="/blog/marcos-fala-infantil">marcos da fala infantil</a>.</p>
      <h2>Como a integração sensorial ajuda crianças não-verbais a se comunicarem?</h2>
      <p>A integração sensorial organiza as sensações do corpo, criando as bases neurológicas para a comunicação intencional. Para crianças não-verbais, a regulação sensorial precede qualquer intervenção de comunicação. Veja como em <a href="/blog/integracao-sensorial-comunicacao-criancas-nao-verbais">integração sensorial e comunicação em crianças não-verbais</a>.</p>
      <h2>O que é seletividade alimentar no autismo?</h2>
      <p>A seletividade alimentar é comum no TEA, relacionada à hipersensibilidade sensorial. A fonoaudiologia pode auxiliar na introdução de novos alimentos. Saiba mais em <a href="/blog/seletividade-alimentar-autismo">seletividade alimentar no autismo</a>.</p>
      <h2>O plano de saúde cobre fonoaudiologia?</h2>
      <p>Sim, os planos de saúde são obrigados por lei a cobrir fonoaudiologia para pacientes com TEA. Veja seus direitos em <a href="/blog/cobertura-plano-saude-aba-fono">cobertura do plano de saúde para ABA e fonoaudiologia</a>.</p>
    </section>
</template>

<style scoped>
.icon-primary {
  color: var(--lilac-deep);
}

.hero-section {
  padding-top: var(--space-section-top);
  padding-bottom: clamp(2.5rem, 6vw, 4rem);
  position: relative;
  overflow: hidden;
}

.hero-bg-grid {
  position: fixed;
  inset: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
}

.hero-section .container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
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

h1 {
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
  max-width: 800px;
}

.seo-answer {
  margin: 0 auto clamp(2rem, 5vw, 3rem);
  max-width: 800px;
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

.service-overview {
  margin-bottom: clamp(2.5rem, 6vw, 4rem);
}

.overview-content h2 {
  margin-bottom: 1.25rem;
}

.overview-text {
  font-size: clamp(0.9375rem, 1.5vw + 0.25rem, 1.125rem);
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.overview-text a {
  color: var(--primary);
  text-decoration: underline;
  text-decoration-color: var(--lilac-light);
  text-underline-offset: 2px;
  transition: color 0.2s, text-decoration-color 0.2s;
}

.overview-text a:hover {
  color: var(--lilac-deep);
  text-decoration-color: var(--primary);
}

.benefits-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
  margin-top: 2rem;
}

.benefit-item {
  display: flex;
  gap: 1rem;
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: clamp(1.25rem, 3vw, 1.75rem);
  box-shadow: var(--shadow-xs);
  transition: transform 0.35s var(--ease-out-expo), box-shadow 0.35s var(--ease-out-expo);
}

.benefit-item:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.benefit-icon-wrap {
  width: 48px;
  height: 48px;
  min-width: 48px;
  background: var(--lilac-soft);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-item h3 {
  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
  margin-bottom: 0.375rem;
}

.benefit-item p {
  font-size: clamp(0.8125rem, 1.2vw, 0.9375rem);
  line-height: 1.6;
  color: var(--text-secondary);
}

.faq-section {
  margin-bottom: clamp(2.5rem, 6vw, 4rem);
}

.faq-section h2 {
  margin-bottom: 1.5rem;
}

.faq-list {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.faq-item.open {
  border-color: var(--primary);
  box-shadow: var(--shadow-sm);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  user-select: none;
}

.faq-question h3 {
  flex: 1;
  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
  font-weight: 600;
}

.faq-toggle {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.faq-toggle span {
  display: block;
  width: 12px;
  height: 2px;
  background: var(--text-secondary);
  position: relative;
  transition: background-color 0.3s;
}

.faq-toggle span::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 12px;
  background: var(--text-secondary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s, opacity 0.3s;
}

.faq-item.open .faq-toggle span::after {
  transform: translate(-50%, -50%) rotate(90deg);
  opacity: 0;
}

.faq-answer {
  padding: 0 1.5rem 1.25rem;
}

.faq-answer p {
  font-size: clamp(0.875rem, 1.3vw, 1rem);
  line-height: 1.7;
  color: var(--text-secondary);
}

.accordion-enter-active,
.accordion-leave-active {
  transition: opacity 0.3s, max-height 0.3s;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 300px;
}

@media (max-width: 900px) {
  .hero-section {
    padding-top: clamp(4rem, 8vw, 5rem);
  }

  .hero-bg-grid {
    position: absolute;
    height: 100vh;
    height: 100dvh;
  }

  .seo-paragraph {
    padding: 1.25rem 1.25rem;
  }

  h1 {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
}

@media (max-width: 640px) {
  .faq-question {
    padding: 1rem 1.25rem;
  }

  .faq-question h3 {
    font-size: clamp(0.875rem, 4vw, 0.9375rem);
  }

  .benefits-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding-top: 3.5rem;
    padding-bottom: 2rem;
  }

  h1 {
    font-size: clamp(1.25rem, 6vw, 1.5rem);
    margin-bottom: 1rem;
  }

  .section-tag {
    font-size: 0.6875rem;
    padding: 0.25rem 0.75rem;
    margin-bottom: 0.625rem;
  }

  .seo-paragraph {
    padding: 1rem 1rem;
    font-size: 0.875rem;
  }

  .overview-content h2 {
    font-size: clamp(1.125rem, 5vw, 1.25rem);
    margin-bottom: 0.75rem;
  }

  .overview-text {
    font-size: 0.875rem;
  }

  .benefit-item {
    flex-direction: column;
    gap: 0.625rem;
    padding: 1rem;
  }

  .benefit-icon-wrap {
    width: 40px;
    height: 40px;
    min-width: 40px;
  }

  .benefit-item h3 {
    font-size: 0.875rem;
  }

  .benefit-item p {
    font-size: 0.8125rem;
  }

  .faq-section h2 {
    font-size: clamp(1.125rem, 5vw, 1.25rem);
  }

  .faq-question {
    padding: 0.75rem 1rem;
  }

  .faq-question h3 {
    font-size: 0.8125rem;
  }

  .faq-answer {
    padding: 0 1rem 0.875rem;
  }

  .faq-answer p {
    font-size: 0.8125rem;
  }
}
</style>
