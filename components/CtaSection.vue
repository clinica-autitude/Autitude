<script setup lang="ts">
import ColorBends from '~/components/ColorBends.vue'

const { whatsappUrl, phoneDisplay, fullAddress, instagramUrl, telUrl } = useContact()

interface CtaSectionProps {
  title?: string
  tagline?: string
  showContact?: boolean
  primaryBtn?: string
  primaryBtnText?: string
  secondaryBtn?: string
  secondaryBtnText?: string
  whatsappBtn?: boolean
  address?: string
  colors?: string[]
  colorBendsProps?: Record<string, unknown>
}

const props = withDefaults(defineProps<CtaSectionProps>(), {
  title: 'Pronto para nos conhecer?',
  tagline: '💜 Cuidamos de pessoas. Potencializamos possibilidades.',
  showContact: false,
  primaryBtn: '/agendar',
  primaryBtnText: 'Agendar Avaliação',
  secondaryBtn: '',
  secondaryBtnText: '',
  whatsappBtn: true,
  colors: () => ['#6B4FA3', '#8FC176', '#8FB1F0', '#F0C850', '#3D2D5E'],
  colorBendsProps: () => ({})
})

const resolvedAddress = computed(() => props.address || fullAddress)

const defaultBendsProps = {
  rotation: 25,
  speed: 0.15,
  scale: 1.3,
  frequency: 1.2,
  warpStrength: 1.0,
  mouseInfluence: 0.4,
  parallax: 0.3,
  noise: 0.05
}

const bendsProps = computed(() => ({ ...defaultBendsProps, ...props.colorBendsProps }))
</script>

<template>
  <section class="cta-section section">
    <div class="container">
      <div class="cta-wrapper texture-hd">
        <ClientOnly>
          <ColorBends
            class="cta-bg-effect"
            :colors="colors"
            :rotation="bendsProps.rotation"
            :speed="bendsProps.speed"
            :scale="bendsProps.scale"
            :frequency="bendsProps.frequency"
            :warpStrength="bendsProps.warpStrength"
            :mouseInfluence="bendsProps.mouseInfluence"
            :parallax="bendsProps.parallax"
            :noise="bendsProps.noise"
            transparent
          />
        </ClientOnly>
        <div class="cta-content">
          <span class="cta-tag">Autitude — Desenvolvimento e Ação Humana</span>
          <h2>{{ title }}</h2>
          <p>{{ tagline }}</p>
          <div v-if="showContact" class="cta-contact">
            <a :href="telUrl" class="cta-contact-item">
              📱 {{ phoneDisplay }}
            </a>
            <a :href="instagramUrl" target="_blank" rel="noopener noreferrer" class="cta-contact-item">
              📷 @clinicaautitude
            </a>
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="cta-contact-item">
              💬 WhatsApp
            </a>
          </div>
          <div class="cta-actions">
            <NuxtLink :to="primaryBtn" class="btn btn-primary btn-lg">
              {{ primaryBtnText }}
            </NuxtLink>
            <NuxtLink v-if="secondaryBtn" :to="secondaryBtn" class="btn btn-secondary btn-lg">
              {{ secondaryBtnText }}
            </NuxtLink>
            <a v-if="whatsappBtn" :href="whatsappUrl" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </div>
          <p v-if="resolvedAddress" class="cta-address">
            📍 {{ resolvedAddress }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background: var(--background);
}

.cta-wrapper {
  position: relative;
  background: var(--surface);
  border: 1.5px solid var(--cta-card-border, var(--lilac-light));
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.cta-bg-effect {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.cta-content {
  position: relative;
  z-index: 1;
  padding: clamp(2rem, 5vw, 4rem);
  text-align: center;
  color: var(--cta-text, var(--lilac-deepest));
}

.cta-tag {
  display: inline-block;
  padding: clamp(0.25rem, 0.5vw, 0.375rem) clamp(0.75rem, 1.5vw, 1rem);
  background: var(--cta-tag-bg, var(--lilac-light));
  border: 1px solid var(--cta-card-border, var(--lilac-light));
  border-radius: var(--radius-full);
  font-size: clamp(0.75rem, 1vw, 0.8125rem);
  font-weight: 600;
  color: var(--cta-tag-text, var(--lilac-deepest));
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
}

.cta-content h2 {
  margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
  color: var(--cta-text, var(--lilac-deepest));
}

.cta-content p {
  font-size: clamp(0.9375rem, 1.3vw, 1.0625rem);
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  color: var(--cta-text-secondary, var(--lilac-dark));
}

.cta-contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(0.375rem, 0.8vw, 0.5rem) clamp(1rem, 2vw, 1.25rem);
  margin: clamp(0.75rem, 1.5vw, 1rem) 0 clamp(0.375rem, 0.8vw, 0.5rem);
  font-size: clamp(0.875rem, 1.2vw, 0.9375rem);
  color: var(--cta-text-secondary, var(--lilac-dark));
}

.cta-contact-item {
  color: var(--cta-text-secondary, var(--lilac-dark));
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.cta-contact-item:hover {
  color: var(--cta-text, var(--lilac-deepest));
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: clamp(0.5rem, 1vw, 0.75rem);
  flex-wrap: wrap;
}

.cta-address {
  margin-top: clamp(1rem, 2vw, 1.25rem);
  font-size: clamp(0.8125rem, 1.1vw, 0.875rem);
  color: var(--cta-text-secondary, var(--lilac-dark));
}

@media (max-width: 900px) {
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-actions .btn {
    width: 100%;
    max-width: 320px;
  }
}

@media (max-width: 640px) {
  .cta-content {
    padding: clamp(1.25rem, 4vw, 2rem);
  }

  .cta-actions .btn {
    max-width: 280px;
  }

  .cta-contact {
    flex-direction: column;
    gap: clamp(0.25rem, 0.5vw, 0.375rem);
    align-items: center;
  }
}
</style>
