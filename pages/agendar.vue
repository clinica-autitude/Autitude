<script setup>
import Grainient from '~/components/Grainient.vue'

const siteBase = 'https://autitude.com.br'
const {
  whatsappUrl,
  phone: phoneNumber,
  phoneDisplay,
  fullAddress
} = useContact()

useHead({
  title: 'Agendar Avaliação — Neurodivergência e Desenvolvimento | Autitude',
  meta: [
    { name: 'description', content: 'Agende uma avaliação na Autitude em Pindamonhangaba-SP. Neuropsicologia, fonoaudiologia, terapia ocupacional e mais. Retornamos em até 24 horas pelo WhatsApp.' },
    { name: 'keywords', content: 'agendar avaliação, autitude agendamento, neuropsicologia Pindamonhangaba, fonoaudiologia avaliação, terapia ocupacional agendamento, neurodivergência avaliação' },
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
    { property: 'og:title', content: 'Agendar Avaliação | Autitude' },
    { property: 'og:description', content: 'Agende uma avaliação na Autitude. Retornamos em até 24 horas.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${siteBase}/agendar` }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}/agendar` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Agendar Avaliação — Autitude',
        description: 'Agende uma avaliação na Autitude. Retornamos em até 24 horas.',
        url: `${siteBase}/agendar`,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.seo-paragraph', '.seo-faq-hidden']
        },
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          url: siteBase,
          telephone: `+${phoneNumber}`,
          priceRange: '$$'
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
          { '@type': 'ListItem', position: 2, name: 'Agendar', item: `${siteBase}/agendar` }
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Como agendar uma avaliação na Autitude',
        description: 'Passo a passo para agendar sua avaliação na Autitude em Pindamonhangaba-SP.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Preencha o formulário',
            text: 'Preencha seus dados no formulário de agendamento: nome do responsável, telefone, e-mail, cidade e informações sobre o paciente.'
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Aguarde nosso contato',
            text: 'Retornamos em até 24 horas pelo WhatsApp para entender suas necessidades e esclarecer dúvidas sobre as especialidades.'
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Agende a avaliação',
            text: 'Combinamos o melhor horário para a avaliação inicial, de segunda a sexta, das 8h às 18h.'
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Realize a avaliação',
            text: `Compareça à clínica na ${fullAddress} para a avaliação com nossa equipe multidisciplinar.`
          }
        ],
        totalTime: 'P1D',
        tool: {
          '@type': 'Thing',
          name: 'WhatsApp'
        }
      })
    },
  ]
})

const pediatricLimit = 18

const cities = [
  'Aparecida', 'Arapeí', 'Areias', 'Bananal', 'Caçapava', 'Cachoeira Paulista', 'Canas',
  'Caraguatatuba', 'Cruzeiro', 'Cunha', 'Guaratinguetá', 'Ilhabela', 'Jacareí',
  'Lagoinha', 'Lavrinhas', 'Lorena', 'Monteiro Lobato', 'Natividade da Serra',
  'Paraibuna', 'Pindamonhangaba', 'Piquete', 'Potim', 'Queluz', 'Redenção da Serra',
  'Roseira', 'Santa Branca', 'Santo Antônio do Pinhal', 'São Bento do Sapucaí',
  'São José dos Campos', 'São Luís do Paraitinga', 'São Sebastião', 'Silveiras',
  'Taubaté', 'Tremembé', 'Ubatuba',
  'Campinas', 'Guarulhos', 'Osasco', 'Ribeirão Preto', 'Santo André', 'Santos',
  'São Bernardo do Campo', 'São Caetano do Sul', 'São José do Rio Preto', 'São Paulo',
  'Sorocaba',
  'Belo Horizonte', 'Rio de Janeiro', 'Niterói', 'Petrópolis', 'Volta Redonda',
  'Curitiba', 'Florianópolis', 'Porto Alegre', 'Brasília', 'Salvador', 'Fortaleza',
  'Recife', 'Manaus', 'Belém', 'Goiânia', 'Vitória', 'Cuiabá', 'Campo Grande',
  'Maceió', 'Natal', 'João Pessoa', 'Aracaju', 'Teresina', 'São Luís',
  'Porto Velho', 'Boa Vista', 'Macapá', 'Palmas', 'Rio Branco'
]

const form = ref({
  parentName: '',
  phone: '',
  email: '',
  city: '',
  childName: '',
  childAge: 0,
  message: '',
  privacy: false
})
const isSubmitting = ref(false)

const cityQuery = ref('')
const cityOpen = ref(false)
const cityHighlight = ref(0)
const cityWrapperRef = ref(null)

const filteredCities = computed(() => {
  const q = cityQuery.value.trim().toLowerCase()
  if (!q) return cities.slice(0, 8)
  return cities
    .filter(c => c.toLowerCase().includes(q))
    .slice(0, 8)
})

const onCityInput = () => {
  form.value.city = cityQuery.value
  cityOpen.value = true
  cityHighlight.value = 0
}

const onCityFocus = () => {
  cityOpen.value = true
}

const selectCity = (city) => {
  cityQuery.value = city
  form.value.city = city
  cityOpen.value = false
}

const onCityKeydown = (e) => {
  if (!cityOpen.value) {
    if (['ArrowDown', 'ArrowUp'].includes(e.key)) cityOpen.value = true
    return
  }
  const max = filteredCities.value.length - 1
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    cityHighlight.value = cityHighlight.value < max ? cityHighlight.value + 1 : 0
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    cityHighlight.value = cityHighlight.value > 0 ? cityHighlight.value - 1 : max
  } else if (e.key === 'Enter') {
    if (filteredCities.value[cityHighlight.value]) {
      e.preventDefault()
      selectCity(filteredCities.value[cityHighlight.value])
    }
  } else if (e.key === 'Escape') {
    cityOpen.value = false
  }
}

const handleClickOutside = (e) => {
  if (cityWrapperRef.value && !cityWrapperRef.value.contains(e.target)) {
    cityOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})

watch(() => form.value.city, (v) => {
  if (v !== cityQuery.value) cityQuery.value = v || ''
})

const whatsappLink = computed(() => {
  const text = encodeURIComponent('Olá! Gostaria de agendar uma avaliação na Autitude.')
  return `${whatsappUrl}?text=${text}`
})

const formatPhone = (e) => {
  let value = e.target.value.replace(/\D/g, '')
  if (value.length > 0) {
    if (value.length <= 2) value = `(${value}`
    else if (value.length <= 6) value = `(${value.slice(0,2)}) ${value.slice(2)}`
    else value = `(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7,11)}`
  }
  form.value.phone = value
}

const incrementAge = () => {
  if (form.value.childAge < pediatricLimit) form.value.childAge++
}

const decrementAge = () => {
  if (form.value.childAge > 0) form.value.childAge--
}

const canIncrement = computed(() => form.value.childAge < pediatricLimit)
const canDecrement = computed(() => form.value.childAge > 0)

const ageDisplay = computed(() => form.value.childAge === pediatricLimit ? '18+' : form.value.childAge)

const handleSubmit = async () => {
  if (!form.value.privacy) {
    alert('Por favor, aceite a Política de Privacidade.')
    return
  }

  const message = `*AGENDAMENTO - AUTITUDE*\n\n` +
    `*Responsável:* ${form.value.parentName}\n` +
    `*Telefone:* ${form.value.phone}\n` +
    `${form.value.email ? `*E-mail:* ${form.value.email}\n` : ''}` +
    `${form.value.city ? `*Cidade:* ${form.value.city}\n` : ''}` +
    `${form.value.childName ? `*Paciente:* ${form.value.childName}\n` : ''}` +
    `${form.value.childAge ? `*Idade:* ${form.value.childAge}\n` : ''}` +
    `${form.value.message ? `\n*Observações:* ${form.value.message}` : ''}`

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')

  form.value = { parentName: '', phone: '', email: '', city: '', childName: '', childAge: 0, message: '', privacy: false }
  cityQuery.value = ''
}
</script>

<template>
  <div class="schedule">
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
          <span class="section-tag texture-hd">Agendamento</span>
          <h1>Agende sua consulta</h1>
          <p>Preencha o formulário e entraremos em contato. Cuidamos de pessoas. Potencializamos possibilidades.</p>
        </div>

        <div class="seo-answer seo-text">
          <p class="seo-paragraph texture-hd">
            Agende sua <strong>avaliação na Autitude</strong> em <strong>Pindamonhangaba-SP</strong> preenchendo o formulário abaixo. Retornamos em até <strong>24 horas pelo WhatsApp {{ phoneDisplay }}</strong> para entender suas necessidades e marcar a consulta inicial. Atendemos crianças, adolescentes, adultos e famílias com foco em <strong>neurodivergência</strong>, de segunda a sexta, das 8h às 18h.
          </p>
        </div>

        <div class="schedule-showcase">
          <form class="schedule-form texture-hd" @submit.prevent="handleSubmit">
            <div class="form-section">
              <h3>Sobre você</h3>
              <div class="form-grid">
                <div class="form-group">
                  <label class="form-label" for="parentName">Nome do responsável(s) *</label>
                  <input
                    type="text"
                    id="parentName"
                    class="form-input"
                    v-model="form.parentName"
                    required
                    placeholder="Nome completo do responsável"
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="phone">Telefone *</label>
                  <input
                    type="tel"
                    id="phone"
                    class="form-input"
                    v-model="form.phone"
                    required
                    placeholder="(12) 99999-9999"
                    @input="formatPhone"
                  >
                </div>
              </div>

              <div class="form-grid">
                <div class="form-group">
                  <label class="form-label" for="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    class="form-input"
                    v-model="form.email"
                    placeholder="seu@email.com"
                  >
                </div>

                <div class="form-group" ref="cityWrapperRef">
                  <label class="form-label" for="city">Cidade onde mora</label>
                  <div class="autocomplete">
                    <input
                      type="text"
                      id="city"
                      class="form-input"
                      v-model="cityQuery"
                      @input="onCityInput"
                      @focus="onCityFocus"
                      @keydown="onCityKeydown"
                      placeholder="Digite sua cidade"
                      autocomplete="off"
                    >
                    <Transition name="dropdown">
                      <ul v-if="cityOpen && filteredCities.length" class="autocomplete-list" role="listbox">
                        <li
                          v-for="(city, i) in filteredCities"
                          :key="city"
                          class="autocomplete-item"
                          :class="{ active: i === cityHighlight }"
                          role="option"
                          :aria-selected="i === cityHighlight"
                          @mousedown.prevent="selectCity(city)"
                          @mouseenter="cityHighlight = i"
                        >
                          {{ city }}
                        </li>
                      </ul>
                    </Transition>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-section">
              <h3>Sobre o paciente</h3>
              <div class="form-group">
                <label class="form-label" for="childName">Nome do paciente</label>
                <input
                  type="text"
                  id="childName"
                  class="form-input"
                  v-model="form.childName"
                  placeholder="Nome do paciente"
                >
              </div>

              <div class="form-group">
                <label class="form-label">Idade do paciente</label>
                <div class="age-selector">
                  <button type="button" class="age-btn age-btn-minus" @click="decrementAge" :disabled="!canDecrement">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </button>
                  <div class="age-display">
                    <span class="age-value">{{ ageDisplay }}</span>
                  </div>
                  <button type="button" class="age-btn age-btn-plus" @click="incrementAge" :disabled="!canIncrement">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="form-section is-last">
              <h3>Fale um pouco sobre o paciente</h3>
              <div class="form-group">
                <label class="form-label" for="message">Observações</label>
                <textarea
                  id="message"
                  class="form-textarea"
                  v-model="form.message"
                  placeholder="Compartilhe o que considerar importante: rotina, demandas, expectativas..."
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div class="form-privacy">
              <label class="checkbox-label">
                <input type="checkbox" v-model="form.privacy" required>
                <span>Aceito a <NuxtLink to="/privacidade">Política de Privacidade</NuxtLink></span>
              </label>
            </div>

            <button type="submit" class="btn btn-primary btn-lg btn-submit">
              Enviar Solicitação
            </button>
          </form>

          <div class="schedule-info">
            <div class="info-block how-it-works texture-hd-velvet">
              <div class="block-header">
                <div class="block-icon"></div>
                <h3>Como funciona?</h3>
              </div>
              <ol class="steps-list">
                <li><span class="step-num">1</span> Preencha o formulário</li>
                <li><span class="step-num">2</span> Entraremos em contato</li>
                <li><span class="step-num">3</span> Agendamos a avaliação</li>
                <li><span class="step-num">4</span> Iniciamos o tratamento</li>
              </ol>
            </div>

            <div class="info-block contact-quick texture-hd-velvet">
              <div class="block-header">
                <div class="block-icon whatsapp"></div>
                <h3>Prefere WhatsApp?</h3>
              </div>
              <p>Fale conosco diretamente para dúvidas rápidas.</p>
              <a :href="whatsappLink" class="btn btn-whatsapp btn-submit" target="_blank">
                Chamar no WhatsApp
              </a>
            </div>

            <div class="info-block hours-block texture-hd" style="--texture-hd: var(--texture-hd-paper)">
              <div class="block-header">
                <div class="block-icon time"></div>
                <h3>Horário de Atendimento</h3>
              </div>
              <div class="hours-info">
                <p class="days">Segunda a Sexta</p>
                <p class="hours">8h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
    <!-- Hidden SEO content for crawlers -->
    <section class="seo-faq-hidden" aria-label="Perguntas Frequentes"
      style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;">
      <h2>Como agendar uma avaliação na Autitude?</h2>
      <p>Para <strong>agendar uma avaliação</strong> na <strong>Autitude em Pindamonhangaba-SP</strong>, preencha o formulário online ou entre em contato pelo <strong>WhatsApp {{ phoneDisplay }}</strong>. Retornamos em até 24 horas para entender as necessidades e marcar a avaliação inicial. Atendemos crianças, adolescentes, adultos e famílias com foco em neurodivergência, de segunda a sexta, das 8h às 18h.</p>
      <h2>O que esperar da primeira consulta?</h2>
      <p>A primeira consulta envolve uma escuta cuidadosa da história, queixas e objetivos. Dependendo da especialidade, podem ser realizadas triagens iniciais. O processo de avaliação neuropsicológica, por exemplo, leva de 4 a 8 sessões. Saiba mais em <a href="/blog/avaliacao-neuropsicologica-processo">avaliação neuropsicológica</a>.</p>
      <h2>Preciso de encaminhamento médico?</h2>
      <p>Não é necessário encaminhamento médico para agendar uma avaliação na Autitude. Você pode entrar em contato diretamente. Caso já tenha diagnóstico ou relatórios anteriores, traga-os para a consulta inicial.</p>
      <h2>A Autitude aceita convênio ou plano de saúde?</h2>
      <p>Atendemos de forma particular com nota fiscal para reembolso. Para informações sobre cobertura de ABA e fonoaudiologia por plano de saúde, veja <a href="/blog/cobertura-plano-saude-aba-fono">cobertura do plano de saúde</a>. Para orientação sobre liminar judicial, veja <a href="/blog/liminar-tratamento-autismo">liminar para tratamento de autismo</a>.</p>
    </section>
</template>

<style scoped>
.hero-section {
  padding-top: var(--space-section-top);
  padding-bottom: clamp(2.5rem, 6vw, 4rem);
  position: relative;
  overflow: hidden;
}

.hero-bg-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-section .container {
  position: relative;
  z-index: 1;
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

.schedule-showcase {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: clamp(1rem, 3vw, 2rem);
  align-items: start;
}

.schedule-form {
  background: var(--surface);
  padding: clamp(1.25rem, 3vw, 2rem);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.form-section {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid color-mix(in srgb, var(--lilac) 14%, transparent);
}

.form-section.is-last {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}

.form-section h3 {
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: var(--lilac-deep);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.form-grid:last-child {
  margin-bottom: 0;
}

.form-label {
  display: block;
  margin-bottom: 0.375rem;
  font-weight: 600;
  font-size: clamp(0.8125rem, 1.2vw, 0.9375rem);
}

.form-group {
  margin-bottom: 0;
}

.age-selector {
  display: flex;
  align-items: center;
  background: var(--background);
  border: 2px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 4px;
  transition: opacity 0.3s var(--ease-smooth), transform 0.3s var(--ease-smooth);
}

.age-selector:focus-within {
  border-color: var(--lilac);
  box-shadow: 0 0 0 3px rgba(107, 79, 163, 0.12);
}

.age-btn {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  border: none;
  background: var(--surface);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.25s var(--ease-bounce), border-color 0.25s var(--ease-bounce), color 0.25s var(--ease-bounce), transform 0.25s var(--ease-bounce);
  -webkit-tap-highlight-color: transparent;
}

.age-btn:active:not(:disabled) {
  transform: scale(0.92);
}

.age-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.age-btn-minus {
  background: linear-gradient(145deg, var(--pink-light) 0%, var(--pink-soft) 100%);
  box-shadow: 0 2px 6px rgba(92, 159, 69, 0.25);
}

.age-btn-minus svg {
  color: var(--lilac-deep);
}

.age-btn-minus:hover:not(:disabled) {
  box-shadow: 0 4px 12px rgba(92, 159, 69, 0.4);
  transform: scale(1.05);
}

.age-btn-plus {
  background: linear-gradient(145deg, var(--lilac-soft) 0%, var(--lilac-light) 100%);
  box-shadow: 0 2px 6px rgba(107, 79, 163, 0.25);
}

.age-btn-plus svg {
  color: var(--lilac-deep);
}

.age-btn-plus:hover:not(:disabled) {
  background: linear-gradient(145deg, var(--lilac) 0%, var(--lilac-dark) 100%);
  box-shadow: 0 4px 12px rgba(107, 79, 163, 0.4);
  transform: scale(1.05);
}

.age-btn-plus:hover:not(:disabled) svg {
  color: white;
}

.age-display {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  min-width: 80px;
}

.age-value {
  font-size: 2.5rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  letter-spacing: -2px;
}

.autocomplete {
  position: relative;
}

.autocomplete-list {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  list-style: none;
  margin: 0;
  padding: 0.375rem;
  max-height: 220px;
  overflow-y: auto;
  z-index: 20;
}

.autocomplete-item {
  padding: 0.6rem 0.75rem;
  border-radius: var(--radius-md);
  font-size: 0.9375rem;
  color: var(--text);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.autocomplete-item.active,
.autocomplete-item:hover {
  background: var(--lilac-soft);
  color: var(--lilac-deep);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: background-color 0.2s var(--ease-out-expo), border-color 0.2s var(--ease-out-expo), color 0.2s var(--ease-out-expo), transform 0.2s var(--ease-out-expo);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.form-privacy {
  margin: 1.25rem 0;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
}

.checkbox-label input {
  width: 18px;
  height: 18px;
  accent-color: var(--primary);
  margin-top: 2px;
  flex-shrink: 0;
}

.checkbox-label a {
  color: var(--primary);
  text-decoration: underline;
}

.btn-submit {
  width: 100%;
}

.schedule-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-block {
  background: var(--surface);
  padding: clamp(1rem, 2.5vw, 1.5rem);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xs);
}

.block-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.block-icon {
  width: 36px;
  height: 36px;
  min-width: 36px;
  background: var(--lilac-soft);
  border-radius: var(--radius-md);
}

.block-icon.whatsapp {
  background: var(--blue-soft);
}

.block-icon.time {
  background: var(--yellow-soft);
}

.block-header h3 {
  font-size: 0.9375rem;
  margin: 0;
}

.steps-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.steps-list li {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.step-num {
  width: 22px;
  height: 22px;
  min-width: 22px;
  background: var(--lilac);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 700;
}

.contact-quick p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.hours-block {
  background: var(--blue-soft);
}

.days {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
}

.hours {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--text);
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

  .schedule-showcase {
    grid-template-columns: 1fr;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }

  .schedule-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
    gap: 0.75rem;
  }
}

@media (max-width: 640px) {
  .schedule-info {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding-top: 3.5rem;
    padding-bottom: 2rem;
  }

  .age-value {
    font-size: 2rem;
  }

  .age-unit {
    font-size: 0.6875rem;
  }

  .hours {
    font-size: 1.125rem;
  }

  .form-section h3 {
    font-size: 0.9375rem;
  }
}
</style>
