<script setup>
import { MapPin, MessageCircle, Mail, Clock } from 'lucide-vue-next'
import Grainient from '~/components/Grainient.vue'

const {
  whatsappUrl,
  phone,
  phoneDisplay,
  instagramUrl,
  address,
  neighborhood,
  city,
  state,
  postalCode,
  email,
  latitude,
  longitude
} = useContact()

const siteBase = 'https://autitude.com.br'

useHead({
  title: 'Contato — Telefone, WhatsApp e Localização | Autitude - Desenvolvimento e Ação Humana',
  meta: [
    { name: 'description', content: 'Entre em contato com a Autitude em Pindamonhangaba-SP. WhatsApp, telefone, e-mail e formulário. Rua Major José dos Santos Moreira, 328 — Vila Rica. Seg a Sex: 8h às 18h.' },
    { name: 'keywords', content: 'contato autitude, telefone autitude, WhatsApp autitude, localização autitude, Pindamonhangaba clínica, Rua Major José dos Santos Moreira, agendamento avaliação neurodivergência' },
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
    { property: 'og:title', content: 'Contato — Telefone, WhatsApp e Localização | Autitude' },
    { property: 'og:description', content: 'Entre em contato com a Autitude. WhatsApp, telefone, e-mail e formulário de agendamento.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${siteBase}/contato` }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}/contato` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contato — Autitude',
        description: 'Entre em contato com a Autitude. WhatsApp, e-mail ou formulário.',
        url: `${siteBase}/contato`,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.seo-paragraph', '.seo-faq-hidden']
        },
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          url: siteBase,
          telephone: `+${phone}`,
          email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: address,
            addressLocality: city,
            addressRegion: state,
            addressCountry: 'BR',
            postalCode
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude,
            longitude
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: `+${phone}`,
              contactType: 'customer service',
              availableLanguage: 'Portuguese',
              areaServed: 'BR'
            },
            {
              '@type': 'ContactPoint',
              email,
              contactType: 'customer service',
              availableLanguage: 'Portuguese'
            }
          ],
          sameAs: [
            instagramUrl
          ]
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
          { '@type': 'ListItem', position: 2, name: 'Contato', item: `${siteBase}/contato` }
        ]
      })
    }
  ]
})

const config = {
  address: {
    street: address,
    neighborhood: neighborhood,
    city: city,
    state: state
  }
}
</script>

<template>
  <div class="contact">
    <section class="hero-section">
      <div class="hero-bg-grid">
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
      </div>
      <div class="container">
        <div class="section-title">
          <span class="section-tag texture-hd">Contato</span>
          <h2>Como entrar em contato com a Autitude?</h2>
          <p>Estamos aqui para cuidar de você. Entre em contato pelo canal que preferir.</p>
        </div>

        <div class="seo-answer seo-text">
          <p class="seo-paragraph texture-hd" style="--texture-hd: var(--texture-hd-paper)">
            Para agendar uma avaliação na Autitude, entre em contato pelo
            <strong><a :href="whatsappUrl" target="_blank" rel="noopener">WhatsApp</a></strong>
            ou pelo formulário online. Nossa clínica fica na <strong>{{ address }} — {{ neighborhood }}, {{ city }}-{{ state }}</strong>.
            Atendemos de <strong>segunda a sexta, das 8h às 18h</strong>. Confira nossas
            <a href="/servicos">especialidades</a> ou acesse nosso <a href="/faq">FAQ</a> para mais informações.
          </p>
        </div>

        <div class="contact-grid">
          <a :href="whatsappUrl" class="contact-card whatsapp-card texture-hd-paper" target="_blank" rel="noopener">
            <div class="card-icon">
              <MessageCircle :size="28" />
            </div>
            <h3>WhatsApp</h3>
            <p class="contact-value">{{ phoneDisplay }}</p>
            <span class="contact-label">Resposta em até 24h</span>
          </a>

          <div class="contact-card texture-hd-paper">
            <div class="card-icon">
              <MapPin :size="28" />
            </div>
            <h3>Localização</h3>
            <p class="contact-value">{{ address }}</p>
            <span class="contact-label">{{ neighborhood }} — {{ city }}, {{ state }}</span>
          </div>

          <div class="contact-card texture-hd-paper">
            <div class="card-icon">
              <Mail :size="28" />
            </div>
            <h3>E-mail</h3>
            <p class="contact-value">{{ email }}</p>
            <span class="contact-label">Respondemos em até 48h</span>
          </div>

          <div class="contact-card texture-hd-paper">
            <div class="card-icon">
              <Clock :size="28" />
            </div>
            <h3>Horário</h3>
            <p class="contact-value">Seg a Sex: 8h às 18h</p>
            <span class="contact-label">Atendimento com agendamento</span>
          </div>
        </div>
      </div>
    </section>
  </div>
    <!-- Hidden SEO content for crawlers -->
    <section class="seo-faq-hidden" aria-label="Perguntas Frequentes"
      style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;">
      <h2>Como entrar em contato com a Autitude em Pindamonhangaba?</h2>
      <p>A <strong>Autitude</strong> está localizada na <strong>{{ address }} — {{ neighborhood }}, {{ city }}-{{ state }}</strong>. O horário de funcionamento é de <strong>segunda a sexta, das 8h às 18h</strong>. O contato pode ser feito pelo <strong>WhatsApp {{ phoneDisplay }}</strong>, e-mail {{ email }} ou pelo formulário de agendamento no site. Atendemos crianças, adolescentes, adultos e famílias com foco em neurodivergência.</p>
      <h2>O plano de saúde cobre as terapias da Autitude?</h2>
      <p>Atualmente atendemos de forma particular, mas fornecemos nota fiscal para reembolso junto ao plano de saúde. Por lei, planos são obrigados a cobrir ABA e fonoaudiologia para TEA. Saiba mais em <a href="/blog/cobertura-plano-saude-aba-fono">cobertura do plano de saúde para ABA e fonoaudiologia</a>.</p>
      <h2>Como conseguir liminar para tratamento de autismo?</h2>
      <p>A liminar é um recurso judicial que obriga o plano de saúde a custear terapias quando há recusa. O direito é garantido pelo Estatuto da Pessoa com Deficiência. Veja o passo a passo em <a href="/blog/liminar-tratamento-autismo">liminar para tratamento de autismo</a>.</p>
      <h2>O que avaliar no processo de avaliação neuropsicológica?</h2>
      <p>A avaliação neuropsicológica investiga funções cognitivas como memória, atenção e funções executivas, auxiliando no diagnóstico de TEA, TDAH e outras condições. Entenda cada etapa em <a href="/blog/avaliacao-neuropsicologica-processo">processo de avaliação neuropsicológica</a>.</p>
    </section>
</template>

<style scoped>
.contact {
  padding-top: 6rem;
}

.hero-section {
  position: relative;
  padding-top: var(--space-section-top);
  padding-bottom: clamp(2.5rem, 6vw, 4rem);
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
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

.section-title h2 {
  margin-bottom: 0.75rem;
}

.section-title p {
  font-size: clamp(0.9375rem, 1.5vw + 0.25rem, 1.125rem);
  color: var(--text-secondary);
}

.seo-answer {
  max-width: 800px;
  margin: 0 auto 3rem;
  position: relative;
  z-index: 1;
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

.seo-paragraph a {
  color: var(--primary);
  text-decoration: underline;
  text-decoration-color: var(--lilac-light);
  text-underline-offset: 2px;
  transition: color 0.2s, text-decoration-color 0.2s;
}

.seo-paragraph a:hover {
  color: var(--lilac-deep);
  text-decoration-color: var(--primary);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.contact-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  transition: transform 0.4s var(--ease-out-expo), box-shadow 0.4s var(--ease-out-expo), border-color 0.4s var(--ease-out-expo);
  opacity: 0;
  animation: fadeInUp 0.6s var(--ease-out-expo) forwards;
}

.contact-card:nth-child(2) { animation-delay: 0.1s; }
.contact-card:nth-child(3) { animation-delay: 0.2s; }
.contact-card:nth-child(4) { animation-delay: 0.3s; }

.contact-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.whatsapp-card {
  background: linear-gradient(135deg, color-mix(in srgb, var(--whatsapp) 8%, var(--surface)), var(--surface));
  border-color: color-mix(in srgb, var(--whatsapp) 20%, var(--border));
}

.whatsapp-card:hover {
  border-color: var(--whatsapp);
}

.card-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 1rem;
  border-radius: var(--radius-lg);
  background: var(--lilac-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
}

.whatsapp-card .card-icon {
  background: color-mix(in srgb, var(--whatsapp) 15%, transparent);
  color: var(--whatsapp);
}

.contact-card h3 {
  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
  margin-bottom: 0.5rem;
}

.contact-value {
  font-size: clamp(0.875rem, 1.3vw, 1rem);
  color: var(--text);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.contact-label {
  font-size: clamp(0.75rem, 1.3vw, 0.875rem);
  color: var(--text-light);
}

@media (max-width: 900px) {
  .hero-section {
    padding-top: clamp(4rem, 8vw, 5rem);
  }

  .seo-paragraph {
    padding: 1.25rem 1.25rem;
  }
}

@media (max-width: 640px) {
  .contact {
    padding-top: 5rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-card {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding-top: 3.5rem;
    padding-bottom: 2rem;
  }

  .section-tag {
    font-size: 0.6875rem;
    padding: 0.25rem 0.75rem;
    margin-bottom: 0.625rem;
  }

  .section-title h2 {
    font-size: clamp(1.125rem, 5vw, 1.375rem);
  }

  .section-title p {
    font-size: 0.875rem;
  }

  .seo-paragraph {
    padding: 1rem 1rem;
    font-size: 0.875rem;
  }

  .contact-card {
    padding: 1.25rem;
  }

  .contact-card h3 {
    font-size: 0.875rem;
  }

  .contact-value {
    font-size: 0.8125rem;
  }

  .contact-label {
    font-size: 0.75rem;
  }
}

.hero-bg-grid {
  position: fixed;
  inset: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
}

@media (max-width: 900px) {
  .hero-bg-grid {
    position: absolute;
    height: 100vh;
    height: 100dvh;
  }
}
</style>
