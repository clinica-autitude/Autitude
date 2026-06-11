<script setup>
import Grainient from '~/components/Grainient.vue'

const currentYear = new Date().getFullYear()
const config = useRuntimeConfig()
const { phone, whatsappUrl, instagramUrl, address, neighborhood, city, state } = useContact()
const { bgStyle } = useTexture({
  preset: 'velvet',
  opacity: 0.025,
  blendMode: 'multiply'
})
const menuOpen = ref(false)
const scrolled = ref(false)
const showBackToTop = ref(false)

const logoSrc = '/small-logo.png'

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
  showBackToTop.value = window.scrollY > 600
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

let keydownHandler = null
let scrollHandler = null

onMounted(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  }
  keydownHandler = (e) => {
    if (e.key === 'Escape' && menuOpen.value) closeMenu()
  }
  scrollHandler = () => handleScroll()
  document.addEventListener('keydown', keydownHandler)
  window.addEventListener('scroll', scrollHandler, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  if (keydownHandler) document.removeEventListener('keydown', keydownHandler)
  if (scrollHandler) window.removeEventListener('scroll', scrollHandler)
})
</script>

<template>
  <div class="app">
    <NuxtLoadingIndicator />
    <a href="#main" class="skip-link">Pular para o conteúdo principal</a>
    <AccessibilityWidget />
    <ClientOnly>
      <VLibras position="left" avatar="random" :opacity="1.0" />
    </ClientOnly>
    
    <div class="ambient-bg">
      <Grainient
        :timeSpeed="0.25"
        :colorBalance="0.0"
        :warpStrength="1.0"
        :warpFrequency="5.0"
        :warpSpeed="2.0"
        :warpAmplitude="50.0"
        :blendAngle="0.0"
        :blendSoftness="0.05"
        :rotationAmount="500.0"
        :noiseScale="2.0"
        :grainAmount="0.1"
        :grainScale="2.0"
        :grainAnimated="false"
        :contrast="1.5"
        :gamma="1.0"
        :saturation="1.0"
        :centerX="0.0"
        :centerY="0.0"
        :zoom="0.9"
        :color1="'#6B4FA3'"
        :color2="'#8FC176'"
        :color3="'#3D2D5E'"
        className="absolute inset-0 w-full h-full"
      />
    </div>

    <div class="menu-overlay" :class="{ active: menuOpen }" @click="closeMenu"></div>

    <div class="app-wrapper" :style="bgStyle">
      <nav class="navbar" :class="{ scrolled }">
        <div class="nav-container">
          <NuxtLink to="/" class="logo" @click="closeMenu">
            <img :src="logoSrc" alt="Autitude" class="logo-img">
            <span class="logo-text">Autitude</span>
          </NuxtLink>
          
          <div class="nav-links" :class="{ 'nav-active': menuOpen }">
            <div class="nav-links-inner">
              <NuxtLink to="/" class="nav-link" @click="closeMenu">Início</NuxtLink>
              <NuxtLink to="/sobre" class="nav-link" @click="closeMenu">Sobre</NuxtLink>
              <NuxtLink to="/servicos" class="nav-link" @click="closeMenu">Serviços</NuxtLink>
              <NuxtLink to="/equipe" class="nav-link" @click="closeMenu">Equipe</NuxtLink>
              <NuxtLink to="/contato" class="nav-link" @click="closeMenu">Contato</NuxtLink>
              <NuxtLink to="/agendar" class="btn btn-primary btn-sm nav-cta" @click="closeMenu">Agendar</NuxtLink>
            </div>
          </div>
          
          <button class="menu-toggle" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="Menu" :aria-expanded="menuOpen">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <main id="main">
        <NuxtPage />
      </main>

      <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <NuxtLink to="/" class="logo" @click="closeMenu">
              <img :src="logoSrc" alt="Autitude" class="logo-img">
              <span class="logo-text">Autitude</span>
            </NuxtLink>
            <p>Desenvolvimento com acolhimento, ciência e humanidade. Cuidamos de pessoas. Potencializamos possibilidades.</p>
          </div>
          
          <div class="footer-links">
            <h4>Navegação</h4>
            <NuxtLink to="/">Início</NuxtLink>
            <NuxtLink to="/sobre">Sobre Nós</NuxtLink>
            <NuxtLink to="/servicos">Serviços</NuxtLink>
            <NuxtLink to="/equipe">Equipe</NuxtLink>
          </div>
          
          <div class="footer-services">
            <h4>Atendimento</h4>
            <NuxtLink to="/agendar">Agendamento</NuxtLink>
            <NuxtLink to="/contato">Contato</NuxtLink>
            <a :href="whatsappUrl">WhatsApp</a>
            <a :href="instagramUrl" target="_blank" rel="noopener">Instagram</a>
          </div>
          
          <div class="footer-contact">
            <h4>Localização</h4>
            <p>{{ address }}</p>
            <p>{{ neighborhood }} — {{ city }}, {{ state }}</p>
            <p>Seg a Sex: 8h às 18h</p>
            <div class="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.523716039893!2d-45.46558491270433!3d-22.93093188518779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf1835a97b90d%3A0x8c2cb7aa78bd7f92!2sAutitude%20Desenvolvimento%20e%20A%C3%A7%C3%A3o%20Humana!5e0!3m2!1sen!2sbr!4v1780604277186!5m2!1sen!2sbr"
                width="100%"
                height="180"
                style="border:0;border-radius:8px;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Localização da Autitude"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Autitude. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
    </div>

    <Transition name="back-to-top">
      <button
        v-if="showBackToTop"
        class="back-to-top"
        @click="scrollToTop"
        aria-label="Voltar ao topo"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </Transition>

    <div class="theme-dock" aria-label="Configurações de tema">
      <ThemeSwitcher />
    </div>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  min-height: 100dvh;
}

.app-wrapper {
  position: relative;
  background: var(--background);
  min-height: 100vh;
  min-height: 100dvh;
}

.ambient-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: var(--background);
  opacity: 0.7;
}

.skip-link {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: 0 0 8px 8px;
  text-decoration: none;
  font-weight: 600;
  z-index: 10000;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 0;
  outline: 3px solid var(--accent);
  outline-offset: 2px;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-navbar);
  padding: 0.875rem 0;
  transition: all 0.35s var(--ease-smooth);
  background: transparent;
}

.navbar.scrolled {
  background: color-mix(in srgb, var(--background) 85%, transparent);
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  box-shadow: var(--shadow-xs);
  padding: 0.625rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 1.5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 0.625rem);
  text-decoration: none;
  font-weight: 700;
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  color: var(--text);
  flex-shrink: 0;
}

.logo-img {
  width: clamp(1.5rem, 3.5vw, 1.8rem);
  height: clamp(1.5rem, 3.5vw, 1.8rem);
  border-radius: 50%;
  object-fit: cover;
}

.logo-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-links-inner {
  display: flex;
  align-items: center;
  gap: clamp(0.75rem, 2vw, 1.5rem);
}

.nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
  padding: 0.25rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  border-radius: 1px;
  transition: width 0.3s var(--ease-out-expo);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.nav-cta {
  margin-left: 0.25rem;
}

.btn-sm {
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: calc(var(--z-navbar) + 2);
  -webkit-tap-highlight-color: transparent;
}

.menu-toggle span {
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.3s var(--ease-out-expo);
  transform-origin: center;
}

.menu-toggle.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.menu-toggle.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

main {
  min-height: 100vh;
  min-height: 100dvh;
}

.footer {
  background: var(--surface-alt);
  padding: clamp(2.5rem, 6vw, 4rem) 0 1.5rem;
  margin-top: clamp(3rem, 6vw, 4rem);
  border-top: 1px solid var(--border);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  margin-bottom: 2.5rem;
}

.footer-brand .logo {
  margin-bottom: 1rem;
  display: inline-flex;
}

.footer-brand .logo-img {
  width: 1.8rem;
  height: 1.8rem;
  object-fit: cover;
}

.footer-brand p {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
  line-height: 1.6;
  max-width: 32ch;
}

.footer-links h4,
.footer-services h4,
.footer-contact h4 {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.footer-links a,
.footer-services a,
.footer-contact p {
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9375rem;
  margin-bottom: 0.625rem;
  transition: color 0.2s;
}

.footer-links a:hover,
.footer-services a:hover {
  color: var(--primary);
}

.footer-map {
  margin-top: 0.75rem;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 1.25rem;
  text-align: center;
}

.footer-bottom p {
  font-size: 0.8125rem;
  color: var(--text-light);
}

.menu-overlay {
  display: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.menu-overlay.active {
  display: block;
  opacity: 1;
  visibility: visible;
}

.back-to-top {
  position: fixed;
  bottom: 5.75rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  background: var(--gradient-primary);
  color: var(--white);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  z-index: var(--z-sticky);
  transition: all 0.3s var(--ease-out-expo);
  -webkit-tap-highlight-color: transparent;
}

.theme-dock {
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: calc(var(--z-accessibility) - 1);
}

.back-to-top:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.back-to-top:active {
  transform: translateY(0);
}

.back-to-top-enter-active,
.back-to-top-leave-active {
  transition: all 0.3s var(--ease-out-expo);
}

.back-to-top-enter-from,
.back-to-top-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.9);
}

@media (max-width: 900px) {
  .menu-toggle {
    display: flex;
  }
  
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: min(85vw, 340px);
    height: 100vh;
    height: 100dvh;
    background: var(--surface);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 5rem 1.5rem 2rem;
    gap: 0;
    box-shadow: -8px 0 32px rgba(0, 0, 0, 0.12);
    transition: right 0.4s var(--ease-out-expo);
    z-index: calc(var(--z-navbar) + 1);
    overflow-y: auto;
    overscroll-behavior: contain;
  }

  .nav-links.nav-active {
    right: 0;
  }

  .nav-links-inner {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    width: 100%;
  }
  
  .nav-link {
    padding: 0.875rem 0;
    font-size: 1.0625rem;
    border-bottom: 1px solid var(--border);
  }

  .nav-link::after {
    display: none;
  }

  .nav-cta {
    margin-left: 0;
    margin-top: 0.75rem;
    text-align: center;
  }

  .menu-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    z-index: calc(var(--z-navbar) - 1);
    pointer-events: none;
  }

  .menu-overlay.active {
    pointer-events: auto;
  }
  
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  
  .footer-brand {
    grid-column: span 2;
    text-align: center;
  }

  .footer-brand p {
    max-width: none;
    margin-left: auto;
    margin-right: auto;
  }
  
  .footer-links,
  .footer-services,
  .footer-contact {
    text-align: center;
  }
}

@media (max-width: 500px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .footer-brand {
    grid-column: auto;
  }
  
  .footer-brand p {
    text-align: center;
  }

  .back-to-top {
    bottom: 5rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }

  .theme-dock {
    right: 1rem;
    bottom: 1rem;
  }
}

/* Accessibility widget global styles - using :global() for cross-component targeting */
:global([data-a11y-contrast="high"]) #accessibility-controls,
:global([data-a11y-contrast="dark"]) #accessibility-controls {
  z-index: var(--z-accessibility);
}

:global([data-a11y-contrast="high"]) .a11y-btn-floating,
:global([data-a11y-contrast="dark"]) .a11y-btn-floating {
  border-width: 2px;
}

:global([data-theme="light"]) #accessibility-controls,
:global([data-theme="sepia"]) #accessibility-controls {
  z-index: var(--z-accessibility);
}
</style>
