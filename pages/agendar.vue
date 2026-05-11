<script setup>
import { ref, computed } from 'vue'
import DotGrid from '~/components/DotGrid.vue'

useHead({
  title: 'Agendar | Autitude - Agende sua Consulta',
  meta: [
    { name: 'description', content: 'Agende uma avaliação na Autitude. Preencha o formulário e retornaremos em até 24 horas.' }
  ]
})

const config = {
  whatsappUrl: 'https://wa.me/5512991968683'
}

const phoneNumber = '5512991968683'
const pediatricLimit = 18

const form = ref({
  parentName: '',
  phone: '',
  email: '',
  childName: '',
  childAge: 0,
  message: '',
  privacy: false
})
const isSubmitting = ref(false)

const whatsappLink = computed(() => {
  const text = encodeURIComponent('Olá! Gostaria de agendar uma avaliação.')
  return `${config.whatsappUrl}?text=${text}`
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
    `${form.value.childName ? `*Criança:* ${form.value.childName}\n` : ''}` +
    `${form.value.childAge ? `*Idade:* ${form.value.childAge}\n` : ''}` +
    `${form.value.message ? `\n*Observações:* ${form.value.message}` : ''}`

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')

  form.value = { parentName: '', phone: '', email: '', childName: '', childAge: 0, message: '', privacy: false }
}
</script>

<template>
  <div class="schedule">
    <section class="hero-section">
      <div class="hero-bg-grid">
        <DotGrid
          :dot-size="14"
          :gap="28"
          base-color="#CDBFF0"
          active-color="#7B5CBF"
          :proximity="120"
          :speed-trigger="80"
          :shock-radius="200"
          :shock-strength="4"
          :max-speed="5000"
          :resistance="750"
          :return-duration="1.5"
        />
      </div>
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Agendamento</span>
          <h1>Agende sua consulta</h1>
          <p>Preencha o formulário e retornaremos em até 24 horas.</p>
        </div>

        <div class="schedule-showcase">
          <form class="schedule-form" @submit.prevent="handleSubmit">
            <div class="form-section">
              <h3>Dados do Responsável</h3>
              <div class="form-grid">
                <div class="form-group">
                  <label class="form-label" for="parentName">Nome do Responsável *</label>
                  <input
                    type="text"
                    id="parentName"
                    class="form-input"
                    v-model="form.parentName"
                    required
                    placeholder="Seu nome completo"
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

                <div class="form-group">
                  <label class="form-label" for="childName">Nome da Criança</label>
                  <input
                    type="text"
                    id="childName"
                    class="form-input"
                    v-model="form.childName"
                    placeholder="Nome da criança"
                  >
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Idade da Criança</label>
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

            <div class="form-section">
              <h3>Informações Adicionais</h3>
              <div class="form-group">
                <label class="form-label" for="message">Observações</label>
                <textarea
                  id="message"
                  class="form-textarea"
                  v-model="form.message"
                  placeholder="Conte-nos mais sobre sua demanda..."
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

            <button type="submit" class="btn btn-primary btn-lg btn-submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Enviando...' : 'Enviar Solicitação' }}
            </button>
          </form>

          <div class="schedule-info">
            <div class="info-block how-it-works">
              <div class="block-header">
                <div class="block-icon"></div>
                <h3>Como funciona?</h3>
              </div>
              <ol class="steps-list">
                <li><span class="step-num">1</span> Preencha o formulário</li>
                <li><span class="step-num">2</span> Entraremos em contato em até 24h</li>
                <li><span class="step-num">3</span> Agendamos a avaliação</li>
                <li><span class="step-num">4</span> Iniciamos o tratamento</li>
              </ol>
            </div>

            <div class="info-block contact-quick">
              <div class="block-header">
                <div class="block-icon whatsapp"></div>
                <h3>Prefere WhatsApp?</h3>
              </div>
              <p>Fale conosco diretamente para dúvidas rápidas.</p>
              <a :href="whatsappLink" class="btn btn-whatsapp" target="_blank">
                Chamar no WhatsApp
              </a>
            </div>

            <div class="info-block hours-block">
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
</template>

<style scoped>
.hero-section {
  padding-top: var(--space-section-top);
  padding-bottom: 4rem;
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

.schedule-showcase {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 2rem;
  align-items: start;
}

.schedule-form {
  background: var(--surface);
  padding: 2rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.form-section {
  margin-bottom: 1.5rem;
}

.form-section h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--text);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
}

.form-group {
  margin-bottom: 0;
}

.age-selector {
  display: flex;
  align-items: center;
  background: var(--background);
  border: 2px solid var(--border);
  border-radius: 16px;
  padding: 4px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-xs);
}

.age-selector:focus-within {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(167, 139, 250, 0.2), var(--shadow-md);
}

.age-btn {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  border: none;
  background: var(--surface);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.age-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.8) 100%);
  opacity: 0;
  transition: opacity 0.2s;
}

.age-btn:hover:not(:disabled)::before {
  opacity: 1;
}

.age-btn:active:not(:disabled) {
  transform: scale(0.92);
}

.age-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  background: var(--background);
}

.age-btn-minus {
  background: linear-gradient(145deg, #fdf2f8 0%, #fce7f3 100%);
  box-shadow: 0 2px 6px rgba(244, 114, 182, 0.2);
}

.age-btn-minus svg {
  color: var(--primary);
}

.age-btn-minus:hover:not(:disabled) {
  box-shadow: 0 4px 12px rgba(244, 114, 182, 0.3);
  transform: scale(1.08);
}

.age-btn-plus {
  background: linear-gradient(145deg, #ede9fe 0%, #ddd6fe 100%);
  box-shadow: 0 2px 6px rgba(167, 139, 250, 0.25);
}

.age-btn-plus svg {
  color: var(--primary-dark);
}

.age-btn-plus:hover:not(:disabled) {
  background: linear-gradient(145deg, #c4b5fd 0%, #a78bfa 100%);
  box-shadow: 0 4px 12px rgba(167, 139, 250, 0.35);
  transform: scale(1.08);
}

.age-btn-plus:hover:not(:disabled) svg {
  color: white;
}

.age-display {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  min-width: 100px;
}

.age-value {
  font-size: 2.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  letter-spacing: -2px;
}

.form-privacy {
  margin: 1.5rem 0;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  font-size: 0.875rem;
  cursor: pointer;
}

.checkbox-label input {
  width: 18px;
  height: 18px;
  accent-color: var(--primary);
  margin-top: 2px;
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
  gap: 1rem;
}

.info-block {
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xs);
}

.block-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.block-icon {
  width: 40px;
  height: 40px;
  background: var(--pastel-lavender);
  border-radius: var(--radius-lg);
}

.block-icon.whatsapp {
  background: #E8F5E9;
}

.block-icon.time {
  background: var(--pastel-peach);
}

.block-header h3 {
  font-size: 1rem;
  margin: 0;
}

.steps-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.steps-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9375rem;
  color: var(--text-secondary);
}

.step-num {
  width: 24px;
  height: 24px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
}

.contact-quick p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.contact-quick .btn {
  width: 100%;
}

.hours-block {
  background: var(--pastel-mint);
}

.days {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
}

.hours {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
}

@media (max-width: 900px) {
  .schedule-showcase {
    grid-template-columns: 1fr;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 500px) {
  .schedule-form {
    padding: 1.5rem;
  }
}
</style>