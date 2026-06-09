<script setup>
import { ref } from 'vue'
import { MapPin, MessageCircle, Mail, Clock } from 'lucide-vue-next'
import DotGrid from '~/components/DotGrid.vue'

useHead({
  title: 'Contato | Autitude - Desenvolvimento e Ação Humana',
  meta: [
    { name: 'description', content: 'Entre em contato com a Autitude. Estamos na Vila Rica, em Pindamonhangaba-SP. WhatsApp, e-mail ou formulário de contato. Aqui uma atitude de cuidado muda o futuro.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contato - Autitude',
        description: 'Entre em contato com a Autitude. WhatsApp, e-mail ou formulário.',
        url: 'https://autitude.com.br/contato',
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+5512991968683',
            contactType: 'customer service',
            availableLanguage: 'Portuguese',
            areaServed: 'BR'
          }
        }
      })
    }
  ]
})

const { whatsappUrl, phoneDisplay, instagramHandle, address, neighborhood, city, state } = useContact()

const config = {
  address: {
    street: address,
    neighborhood,
    city,
    state
  },
  whatsappUrl,
  phoneDisplay,
  instagramHandle,
  hours: {
    weekdays: '8h às 18h'
  }
}

const contactInfo = [
  {
    title: 'Localização',
    content: config.address.street,
    detail: `${config.address.neighborhood} — ${config.address.city}, ${config.address.state}`,
    icon: MapPin,
    color: 'linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%)'
  },
  {
    title: 'WhatsApp',
    content: config.phoneDisplay,
    link: `${config.whatsappUrl}?text=${encodeURIComponent('Olá! Gostaria de mais informações.')}`,
    linkText: 'Chamar no WhatsApp',
    btnClass: 'btn-whatsapp',
    icon: MessageCircle,
    color: 'linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%)'
  },
  {
    title: 'E-mail',
    content: 'clinicaautitude@gmail.com',
    detail: 'Respondemos em breve',
    icon: Mail,
    color: 'linear-gradient(135deg, var(--pastel-pink) 0%, var(--secondary-light) 100%)'
  },
  {
    title: 'Horário',
    content: 'Segunda a Sexta',
    detail: config.hours.weekdays,
    icon: Clock,
    color: 'linear-gradient(135deg, var(--pastel-peach) 0%, var(--secondary-light) 100%)'
  }
]

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  const message = `*CONTATO - AUTITUDE*\n\n` +
    `*Nome:* ${form.value.name}\n` +
    `*E-mail:* ${form.value.email}\n` +
    `${form.value.phone ? `*Telefone:* ${form.value.phone}\n` : ''}` +
    `\n*Mensagem:*\n${form.value.message}`

  const whatsappUrl = `${config.whatsappUrl}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')

  form.value = { name: '', email: '', phone: '', message: '' }
}
</script>

<template>
  <div class="contact">
    <section class="hero-section">
      <div class="hero-bg-grid">
        <ClientOnly>
          <DotGrid
            :dot-size="14"
            :gap="28"
            base-color="#6B4FA3"
            active-color="#3D2D5E"
            :proximity="120"
            :speed-trigger="80"
            :shock-radius="200"
            :shock-strength="4"
            :max-speed="5000"
            :resistance="750"
            :return-duration="1.5"
          />
        </ClientOnly>
      </div>
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Contato</span>
          <h1>Fale com a Autitude</h1>
          <p>Aqui uma atitude de cuidado muda o futuro.</p>
        </div>

        <div class="contact-showcase">
          <div class="contact-info-cards">
            <div class="info-card" v-for="info in contactInfo" :key="info.title">
              <div class="card-icon-wrapper" :style="{ background: info.color }">
                <component :is="info.icon" :size="24" class="icon-primary card-icon-inner" />
              </div>
              <div class="card-text">
                <h3>{{ info.title }}</h3>
                <p class="primary-text">{{ info.content }}</p>
                <p v-if="info.detail" class="secondary-text">{{ info.detail }}</p>
                <a 
                  v-if="info.link" 
                  :href="info.link" 
                  class="btn btn-sm"
                  :class="info.btnClass"
                  target="_blank"
                >
                  {{ info.linkText }}
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <div class="form-header">
              <h3>Envie uma mensagem</h3>
              <p>Respondemos em breve.</p>
            </div>
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label class="form-label" for="name">Nome *</label>
                <input
                  type="text"
                  id="name"
                  class="form-input"
                  v-model="form.name"
                  required
                  placeholder="Seu nome completo"
                >
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="email">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    class="form-input"
                    v-model="form.email"
                    required
                    placeholder="seu@email.com"
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="tel">Telefone</label>
                  <input
                    type="tel"
                    id="tel"
                    class="form-input"
                    v-model="form.phone"
                    placeholder="(12) 99999-9999"
                  >
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="msg">Mensagem *</label>
                <textarea
                  id="msg"
                  class="form-textarea"
                  v-model="form.message"
                  required
                  placeholder="Como podemos ajudar?"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-submit">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="location-section section">
      <div class="container">
        <div class="location-card">
          <div class="location-content">
            <div class="location-icon">
              <MapPin :size="32" class="icon-primary" />
            </div>
            <div class="location-details">
              <h3>Nosso endereço</h3>
              <p class="address">Rua Major José dos Santos Moreira, 328</p>
              <p class="city">Vila Rica — Pindamonhangaba, SP</p>
              <div class="location-meta">
                <span>Seg a Sex: 8h às 18h</span>
              </div>
            </div>
          </div>
          <div class="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.523716039893!2d-45.46558491270433!3d-22.93093188518779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf1835a97b90d%3A0x8c2cb7aa78bd7f92!2sAutitude%20Desenvolvimento%20e%20A%C3%A7%C3%A3o%20Humana!5e0!3m2!1sen!2sbr!4v1780604277186!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Localização da Autitude — Rua Major José dos Santos Moreira, 328, Vila Rica, Pindamonhangaba-SP"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.icon-primary {
  color: var(--lilac-deep);
}

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
  background: var(--lilac-soft);
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--lilac-deep);
  margin-bottom: 1rem;
}

.contact-showcase {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2rem;
  align-items: start;
}

.contact-info-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-card {
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: 1.5rem;
  display: flex;
  gap: 1.25rem;
  box-shadow: var(--shadow-xs);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.card-icon-wrapper {
  width: 56px;
  height: 56px;
  min-width: 56px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon-inner {
  opacity: 1;
}

.card-text h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.primary-text {
  font-size: 0.9375rem;
  color: var(--text);
  margin-bottom: 0.25rem;
}

.secondary-text {
  font-size: 0.8125rem;
  color: var(--text-light);
  margin-bottom: 0.75rem;
}

.info-card .btn {
  margin-top: 0.5rem;
}

.contact-form-wrapper {
  background: var(--surface);
  padding: 2rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.form-header {
  margin-bottom: 1.5rem;
}

.form-header h3 {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.form-header p {
  font-size: 0.875rem;
  color: var(--text-light);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
}

.btn-submit {
  width: 100%;
  margin-top: 0.5rem;
}

.location-section {
  background: var(--surface-alt);
}

.location-card {
  background: var(--background);
  border-radius: var(--radius-2xl);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.location-content {
  display: flex;
  gap: 1.5rem;
}

.location-icon {
  width: 72px;
  height: 72px;
  min-width: 72px;
  background: var(--lilac-soft);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
}

.location-details h3 {
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
}

.address {
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 0.25rem;
}

.city {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.location-meta {
  font-size: 0.8125rem;
  color: var(--text-light);
}

.location-map {
  height: 300px;
  background: var(--surface);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.location-map iframe {
  border-radius: var(--radius-xl);
}

@media (max-width: 900px) {
  .contact-showcase {
    grid-template-columns: 1fr;
  }
  
  .contact-info-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .location-card {
    grid-template-columns: 1fr;
  }
  
  .location-map {
    order: -1;
  }
}

@media (max-width: 640px) {
  .contact-info-cards {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .location-content {
    flex-direction: column;
    text-align: center;
  }
  
  .location-icon {
    margin: 0 auto;
  }
}
</style>