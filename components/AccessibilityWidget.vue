<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { Settings, X, Sun, Moon, Minus, Plus, Play, Pause, Square } from 'lucide-vue-next'

const colorMode = useColorMode()

const menuOpen = ref(false)
const fontSize = ref(100)
const contrastMode = ref('normal')
const speaking = ref(false)
const ttsPaused = ref(false)
const ttsStatus = ref('')
const maxFontSize = 150
const minFontSize = 75
let ttsUtterance = null

const isDarkMode = computed(() => colorMode.value === 'dark')

const ttsBtnLabel = computed(() => {
  if (!speaking.value) return 'Ler Página'
  return ttsPaused.value ? 'Retomar' : 'Pausar'
})

const ttsBtnIcon = computed(() => {
  if (!speaking.value || ttsPaused.value) return Play
  return Pause
})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

const toggleDarkMode = () => {
  const next = colorMode.value === 'dark' ? 'light' : 'dark'
  colorMode.preference = next
  localStorage.setItem('a11y-darkMode', String(next === 'dark'))
}

const changeFontSize = (delta) => {
  const newSize = fontSize.value + delta
  if (newSize >= minFontSize && newSize <= maxFontSize) {
    fontSize.value = newSize
    document.documentElement.style.fontSize = `${newSize}%`
    localStorage.setItem('a11y-fontSize', String(newSize))
  }
}

const setContrast = (mode) => {
  contrastMode.value = mode
  document.documentElement.removeAttribute('data-a11y-contrast')

  if (mode === 'high') {
    document.documentElement.setAttribute('data-a11y-contrast', 'high')
    colorMode.preference = 'light'
  } else if (mode === 'dark') {
    document.documentElement.setAttribute('data-a11y-contrast', 'dark')
    colorMode.preference = 'dark'
  }

  localStorage.setItem('a11y-contrast', mode)
}

const getReadableText = () => {
  const pageTitle = document.title || 'Página sem título'
  const h1 = document.querySelector('h1')?.textContent || ''
  const mainContent = Array.from(document.querySelectorAll('main p, main h2, main h3'))
    .filter(el => !el.closest('.accessibility-panel'))
    .slice(0, 15)
    .map(el => el.textContent?.trim())
    .filter(text => text && text.length > 15)
    .join('. ')

  const description = document.querySelector('meta[name="description"]')?.content || ''

  let fullText = `Página: ${pageTitle}. `
  if (h1) fullText += `Título: ${h1}. `
  if (description) fullText += `Descrição: ${description}. `
  fullText += `Conteúdo: ${mainContent}`

  return fullText
}

const speakPage = () => {
  if (speaking.value) {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume()
      ttsPaused.value = false
      ttsStatus.value = 'Continuando leitura...'
    } else {
      window.speechSynthesis.pause()
      ttsPaused.value = true
      ttsStatus.value = 'Leitura pausada'
    }
    return
  }

  const text = getReadableText()
  if (!text || !('speechSynthesis' in window)) {
    ttsStatus.value = 'Navegador não suporta leitura de texto'
    return
  }

  ttsStatus.value = 'Iniciando leitura da página...'
  ttsPaused.value = false

  ttsUtterance = new SpeechSynthesisUtterance(text)
  ttsUtterance.lang = 'pt-BR'
  ttsUtterance.rate = 0.85

  ttsUtterance.onstart = () => {
    speaking.value = true
    ttsStatus.value = 'Lendo conteúdo da página'
  }
  ttsUtterance.onend = () => {
    speaking.value = false
    ttsPaused.value = false
    ttsStatus.value = 'Leitura concluída'
    setTimeout(() => { ttsStatus.value = '' }, 3000)
  }
  ttsUtterance.onerror = () => {
    speaking.value = false
    ttsPaused.value = false
    ttsStatus.value = 'Erro na leitura'
    setTimeout(() => { ttsStatus.value = '' }, 3000)
  }

  window.speechSynthesis.speak(ttsUtterance)
}

const stopSpeaking = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
    speaking.value = false
    ttsPaused.value = false
    ttsStatus.value = 'Leitura interrompida'
    setTimeout(() => { ttsStatus.value = '' }, 2000)
  }
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && menuOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)

  const savedFontSize = localStorage.getItem('a11y-fontSize')
  if (savedFontSize) {
    fontSize.value = parseInt(savedFontSize, 10)
    document.documentElement.style.fontSize = `${fontSize.value}%`
  }

  const savedContrast = localStorage.getItem('a11y-contrast')
  if (savedContrast) {
    setContrast(savedContrast)
  }

  const savedDarkMode = localStorage.getItem('a11y-darkMode')
  if (savedDarkMode === 'true') {
    colorMode.preference = 'dark'
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  stopSpeaking()
})
</script>

<template>
  <div
    id="accessibility-controls"
    class="accessibility-panel"
    role="region"
    aria-label="Controles de acessibilidade"
  >
    <button
      id="a11y-toggle"
      class="a11y-btn-floating"
      aria-label="Abrir menu de acessibilidade"
      :aria-expanded="menuOpen"
      @click="toggleMenu"
    >
      <Settings :size="22" />
    </button>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="menuOpen" class="a11y-overlay" @click="closeMenu" />
      </Transition>

      <Transition name="modal">
        <div
          v-if="menuOpen"
          id="a11y-menu"
          class="a11y-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby="a11y-menu-title"
        >
          <div class="a11y-menu-header">
            <h3 id="a11y-menu-title">Acessibilidade</h3>
            <button
              id="a11y-close"
              class="a11y-close-btn"
              aria-label="Fechar menu"
              @click="closeMenu"
            >
              <X :size="20" />
            </button>
          </div>

          <div class="a11y-menu-content">
            <div class="a11y-section">
              <h4>Modo escuro</h4>
              <button
                id="a11y-dark-toggle"
                class="a11y-dark-toggle"
                :class="{ 'dark-active': isDarkMode }"
                @click="toggleDarkMode"
                :aria-pressed="isDarkMode"
              >
                <span class="toggle-track">
                  <span class="toggle-thumb">
                    <Sun v-if="isDarkMode" :size="12" />
                    <Moon v-else :size="12" />
                  </span>
                </span>
                <span class="toggle-label">{{ isDarkMode ? 'Escuro ativado' : 'Claro ativado' }}</span>
              </button>
            </div>

            <div class="a11y-section">
              <h4>Tamanho da fonte</h4>
              <div class="a11y-font-controls">
                <button
                  id="a11y-font-decrease"
                  class="a11y-btn a11y-btn-icon"
                  aria-label="Diminuir fonte"
                  @click="changeFontSize(-10)"
                  :disabled="fontSize <= minFontSize"
                >
                  <Minus :size="18" />
                </button>
                <span
                  id="a11y-font-size"
                  class="a11y-font-value"
                  aria-live="polite"
                >{{ fontSize }}%</span>
                <button
                  id="a11y-font-increase"
                  class="a11y-btn a11y-btn-icon"
                  aria-label="Aumentar fonte"
                  @click="changeFontSize(10)"
                  :disabled="fontSize >= maxFontSize"
                >
                  <Plus :size="18" />
                </button>
              </div>
            </div>

            <div class="a11y-section">
              <h4>Contraste</h4>
              <div class="a11y-contrast-controls">
                <button
                  id="a11y-contrast-normal"
                  class="a11y-btn"
                  :class="{ 'a11y-active': contrastMode === 'normal' }"
                  @click="setContrast('normal')"
                >Normal</button>
                <button
                  id="a11y-contrast-high"
                  class="a11y-btn"
                  :class="{ 'a11y-active': contrastMode === 'high' }"
                  @click="setContrast('high')"
                >Alto</button>
                <button
                  id="a11y-contrast-dark"
                  class="a11y-btn"
                  :class="{ 'a11y-active': contrastMode === 'dark' }"
                  @click="setContrast('dark')"
                >Escuro</button>
              </div>
            </div>

            <div class="a11y-section">
              <h4>Leitura em voz alta</h4>
              <p class="a11y-hint">Lê o conteúdo principal da página</p>
              <div
                class="a11y-tts-status"
                role="status"
                aria-live="polite"
              >{{ ttsStatus || '\u00A0' }}</div>
              <div class="a11y-btn-group">
                <button
                  id="a11y-tts-play"
                  class="a11y-btn"
                  :class="{ 'a11y-active': speaking && !ttsPaused }"
                  aria-label="Reproduzir texto da página"
                  @click="speakPage"
                >
                  <component :is="ttsBtnIcon" :size="16" />
                  {{ ttsBtnLabel }}
                </button>
                <button
                  id="a11y-tts-stop"
                  class="a11y-btn"
                  aria-label="Parar leitura"
                  @click="stopSpeaking"
                  :disabled="!speaking"
                >
                  <Square :size="16" />
                  Parar
                </button>
              </div>
            </div>

            <div class="a11y-section">
              <h4>Atalhos de teclado</h4>
              <ul class="a11y-shortcuts">
                <li><kbd>Tab</kbd> Próximo elemento</li>
                <li><kbd>Shift+Tab</kbd> Elemento anterior</li>
                <li><kbd>Enter</kbd> Ativar link ou botão</li>
                <li><kbd>Esc</kbd> Fechar este menu</li>
              </ul>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
#accessibility-controls {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: var(--z-accessibility, 9999);
  font-family: 'DM Sans', system-ui, sans-serif;
}

/* Floating trigger button */
.a11y-btn-floating {
  width: 3.25rem;
  height: 3.25rem;
  border-radius: var(--radius-full);
  background: var(--primary);
  color: var(--white);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  transition: transform 0.2s var(--ease-smooth), box-shadow 0.2s var(--ease-smooth);
}

.a11y-btn-floating:hover {
  transform: scale(1.08);
  box-shadow: var(--shadow-lg);
}

.a11y-btn-floating:active {
  transform: scale(0.95);
}

/* Overlay */
.a11y-overlay {
  position: fixed;
  inset: 0;
  background: var(--overlay-bg);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 10000;
}

/* Menu panel */
.a11y-menu {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  max-height: 85vh;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  z-index: 10001;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Header */
.a11y-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4) var(--space-5);
  background: var(--gradient-primary);
  color: var(--white);
  flex-shrink: 0;
}

.a11y-menu-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.a11y-close-btn {
  background: rgba(255, 255, 255, 0.18);
  border: none;
  color: var(--white);
  width: 2rem;
  height: 2rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s var(--ease-smooth);
}

.a11y-close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Scrollable content */
.a11y-menu-content {
  overflow-y: auto;
  flex: 1;
  padding: var(--space-1) 0;
}

.a11y-menu-content::-webkit-scrollbar {
  width: 4px;
}

.a11y-menu-content::-webkit-scrollbar-track {
  background: transparent;
}

.a11y-menu-content::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: var(--radius-full);
}

/* Sections */
.a11y-section {
  padding: var(--space-3-5) var(--space-5);
  border-bottom: 1px solid var(--border);
}

.a11y-section:last-child {
  border-bottom: none;
}

.a11y-section h4 {
  margin: 0 0 var(--space-2-5);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Buttons */
.a11y-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  padding: 0.625rem 0.875rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 0.8125rem;
  font-weight: 600;
  font-family: inherit;
  color: var(--text);
  cursor: pointer;
  transition: all 0.15s var(--ease-smooth);
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
}

.a11y-btn:hover {
  background: var(--lilac-soft);
  border-color: var(--primary);
}

.a11y-btn:active {
  transform: scale(0.97);
}

.a11y-btn.a11y-active {
  background: var(--gradient-primary);
  color: var(--white);
  border-color: transparent;
}

.a11y-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.a11y-btn-icon {
  flex: 0;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  font-weight: 700;
}

/* Font and contrast controls */
.a11y-font-controls,
.a11y-contrast-controls {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.a11y-contrast-controls {
  flex-wrap: wrap;
}

.a11y-contrast-controls .a11y-btn {
  flex: 1;
  min-width: 76px;
}

.a11y-font-value {
  min-width: 3rem;
  text-align: center;
  font-weight: 700;
  font-size: 0.9375rem;
  color: var(--primary);
  letter-spacing: -0.01em;
}

/* Hint text */
.a11y-hint {
  font-size: 0.75rem;
  color: var(--text-light);
  margin: 0 0 var(--space-2);
  line-height: 1.4;
}

/* Keyboard shortcuts */
.a11y-shortcuts {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.75rem;
}

.a11y-shortcuts li {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: 0.375rem;
  color: var(--text-secondary);
}

.a11y-shortcuts kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  padding: 0.1875rem 0.5rem;
  background: var(--surface-alt);
  border-radius: var(--radius-xs);
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--text);
  border: 1px solid var(--border);
  line-height: 1.4;
}

/* TTS status */
.a11y-tts-status {
  font-size: 0.75rem;
  color: var(--primary);
  padding: 0.375rem 0.75rem;
  background: var(--lilac-soft);
  border-radius: var(--radius-xs);
  margin-bottom: var(--space-2-5);
  min-height: 1.75rem;
  display: flex;
  align-items: center;
  line-height: 1.3;
}

.a11y-btn-group {
  display: flex;
  gap: 0.5rem;
}

/* Dark mode toggle */
.a11y-dark-toggle {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  padding: 0.625rem var(--space-3-5);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.15s var(--ease-smooth);
  font-family: inherit;
  -webkit-appearance: none;
  appearance: none;
}

.a11y-dark-toggle:hover {
  border-color: var(--primary);
  background: var(--lilac-soft);
}

.a11y-dark-toggle.dark-active {
  border-color: var(--primary);
  background: var(--gradient-primary);
}

.a11y-dark-toggle.dark-active .toggle-label {
  color: var(--white);
}

.a11y-dark-toggle.dark-active .toggle-thumb {
  background: var(--white);
}

.a11y-dark-toggle.dark-active .toggle-thumb svg {
  color: var(--primary);
}

.toggle-track {
  position: relative;
  width: 2.25rem;
  height: 1.25rem;
  background: var(--lilac-soft);
  border-radius: var(--radius-full);
  transition: background 0.2s var(--ease-smooth);
  flex-shrink: 0;
}

.a11y-dark-toggle.dark-active .toggle-track {
  background: rgba(255, 255, 255, 0.2);
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 1rem;
  height: 1rem;
  background: var(--primary);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.35s var(--ease-bounce);
}

.a11y-dark-toggle.dark-active .toggle-thumb {
  left: calc(100% - 1rem - 2px);
}

.toggle-thumb svg {
  color: var(--white);
  transition: transform 0.2s var(--ease-smooth);
}

.a11y-dark-toggle.dark-active .toggle-thumb svg {
  transform: rotate(360deg);
}

.toggle-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal-enter-active {
  transition: opacity 0.25s ease, transform 0.25s var(--ease-out-expo);
}

.modal-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.modal-enter-from {
  opacity: 0;
  transform: translate(-50%, -45%) scale(0.96);
}

.modal-leave-to {
  opacity: 0;
  transform: translate(-50%, -45%) scale(0.96);
}

/* Mobile */
@media (max-width: 480px) {
  #accessibility-controls {
    bottom: 1rem;
    right: 1rem;
  }

  .a11y-menu {
    width: 95%;
    max-height: 90vh;
    border-radius: var(--radius-lg);
  }

  .a11y-menu-header {
    padding: var(--space-3-5) var(--space-4);
  }

  .a11y-menu-header h3 {
    font-size: 0.9375rem;
  }

  .a11y-section {
    padding: var(--space-3) var(--space-4);
  }

  .a11y-btn {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
  }

  .a11y-btn-group {
    flex-direction: column;
  }

  .a11y-contrast-controls {
    flex-direction: column;
  }

  .a11y-contrast-controls .a11y-btn {
    width: 100%;
  }
}

/* Dark theme overrides */
[data-theme="dark"] .a11y-btn-floating {
  background: var(--primary);
}

[data-theme="dark"] .a11y-tts-status {
  background: var(--primary-light);
  color: var(--primary);
}

[data-theme="dark"] .a11y-shortcuts kbd {
  background: var(--surface);
  border-color: var(--border);
}

/* Sepia theme overrides */
[data-theme="sepia"] .a11y-tts-status {
  background: var(--lilac-light);
  color: var(--lilac-dark);
}

[data-theme="sepia"] .a11y-shortcuts kbd {
  background: #f5f0e6;
  border-color: #ddd;
}

/* High contrast overrides */
[data-a11y-contrast="high"] .a11y-btn-floating {
  background: #0000cc;
  color: #ffffff;
  border: 2px solid #000000;
}

[data-a11y-contrast="high"] .a11y-menu {
  background: #ffffff;
  border: 3px solid #000000;
}

[data-a11y-contrast="high"] .a11y-menu-header {
  background: #0000cc;
  color: #ffffff;
}

[data-a11y-contrast="high"] .a11y-section {
  border-color: #000000;
}

[data-a11y-contrast="high"] .a11y-section h4 {
  color: #000000;
}

[data-a11y-contrast="high"] .a11y-btn {
  background: #ffffff;
  border: 2px solid #000000;
  color: #000000;
}

[data-a11y-contrast="high"] .a11y-btn:hover {
  background: #000000;
  color: #ffffff;
}

[data-a11y-contrast="high"] .a11y-btn.a11y-active {
  background: #000000;
  color: #ffffff;
}

[data-a11y-contrast="high"] .a11y-font-value {
  color: #0000cc;
}

[data-a11y-contrast="high"] .a11y-hint {
  color: #000000;
}

[data-a11y-contrast="high"] .a11y-shortcuts li {
  color: #000000;
}

[data-a11y-contrast="high"] .a11y-shortcuts kbd {
  background: #ffffff;
  color: #000000;
  border: 2px solid #000000;
}

[data-a11y-contrast="high"] .a11y-tts-status {
  background: #ffff00;
  color: #000000;
  border: 2px solid #000000;
}

[data-a11y-contrast="high"] .a11y-dark-toggle {
  background: #ffffff;
  border: 2px solid #000000;
  color: #000000;
}

[data-a11y-contrast="high"] .a11y-dark-toggle:hover {
  background: #ffff00;
}

[data-a11y-contrast="high"] .a11y-dark-toggle.dark-active {
  background: #0000cc;
  color: #ffffff;
}

[data-a11y-contrast="high"] .toggle-label {
  color: #000000;
}

[data-a11y-contrast="high"] .a11y-dark-toggle.dark-active .toggle-label {
  color: #ffffff;
}

[data-a11y-contrast="high"] .toggle-track {
  background: #ffff00;
  border: 2px solid #000000;
}

[data-a11y-contrast="high"] .a11y-dark-toggle.dark-active .toggle-track {
  background: rgba(255, 255, 255, 0.2);
}

[data-a11y-contrast="high"] .toggle-thumb {
  background: #000000;
}

[data-a11y-contrast="high"] .a11y-dark-toggle.dark-active .toggle-thumb {
  background: #ffffff;
}

[data-a11y-contrast="high"] .toggle-thumb svg {
  color: #ffff00;
}

/* Dark contrast overrides */
[data-a11y-contrast="dark"] .a11y-btn-floating {
  background: #ffffff;
  color: #000000;
  border: 2px solid #ffffff;
}

[data-a11y-contrast="dark"] .a11y-overlay {
  background: rgba(0, 0, 0, 0.9);
}

[data-a11y-contrast="dark"] .a11y-menu {
  background: #111111;
  border: 3px solid #ffffff;
}

[data-a11y-contrast="dark"] .a11y-menu-header {
  background: #ffffff;
  color: #000000;
}

[data-a11y-contrast="dark"] .a11y-close-btn {
  background: rgba(0, 0, 0, 0.2);
  color: #000000;
}

[data-a11y-contrast="dark"] .a11y-section {
  border-color: #ffffff;
}

[data-a11y-contrast="dark"] .a11y-section h4 {
  color: #ffffff;
}

[data-a11y-contrast="dark"] .a11y-btn {
  background: #111111;
  border: 2px solid #ffffff;
  color: #ffffff;
}

[data-a11y-contrast="dark"] .a11y-btn:hover {
  background: #ffffff;
  color: #000000;
}

[data-a11y-contrast="dark"] .a11y-btn.a11y-active {
  background: #ffffff;
  color: #000000;
}

[data-a11y-contrast="dark"] .a11y-font-value {
  color: #ffffff;
}

[data-a11y-contrast="dark"] .a11y-hint {
  color: #cccccc;
}

[data-a11y-contrast="dark"] .a11y-shortcuts li {
  color: #ffffff;
}

[data-a11y-contrast="dark"] .a11y-shortcuts kbd {
  background: #222222;
  color: #ffffff;
  border: 2px solid #ffffff;
}

[data-a11y-contrast="dark"] .a11y-tts-status {
  background: #ffff00;
  color: #000000;
  border: 2px solid #ffffff;
}

[data-a11y-contrast="dark"] .a11y-dark-toggle {
  background: #111111;
  border: 2px solid #ffffff;
  color: #ffffff;
}

[data-a11y-contrast="dark"] .a11y-dark-toggle:hover {
  background: #333333;
}

[data-a11y-contrast="dark"] .a11y-dark-toggle.dark-active {
  background: #ffffff;
  color: #000000;
}

[data-a11y-contrast="dark"] .toggle-label {
  color: #ffffff;
}

[data-a11y-contrast="dark"] .a11y-dark-toggle.dark-active .toggle-label {
  color: #000000;
}

[data-a11y-contrast="dark"] .toggle-track {
  background: #333333;
  border: 2px solid #ffffff;
}

[data-a11y-contrast="dark"] .a11y-dark-toggle.dark-active .toggle-track {
  background: #cccccc;
}

[data-a11y-contrast="dark"] .toggle-thumb {
  background: #ffffff;
}

[data-a11y-contrast="dark"] .a11y-dark-toggle.dark-active .toggle-thumb {
  background: #000000;
}

[data-a11y-contrast="dark"] .toggle-thumb svg {
  color: #000000;
}

[data-a11y-contrast="dark"] .a11y-dark-toggle.dark-active .toggle-thumb svg {
  color: #ffffff;
}
</style>
