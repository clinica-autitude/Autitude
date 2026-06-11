<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Settings, X, Sun, Moon, Minus, Plus, Play, Square } from 'lucide-vue-next'

const colorMode = useColorMode()

const menuOpen = ref(false)
const fontSize = ref(100)
const contrastMode = ref('normal')
const speaking = ref(false)
const ttsStatus = ref('')
const maxFontSize = 150
const minFontSize = 75
let ttsUtterance = null

const isDarkMode = computed({
  get: () => colorMode.value === 'dark',
  set: (val) => { colorMode.preference = val ? 'dark' : 'light' }
})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('a11y-darkMode', colorMode.value === 'dark')
}

const changeFontSize = (delta) => {
  const newSize = fontSize.value + delta
  if (newSize >= minFontSize && newSize <= maxFontSize) {
    fontSize.value = newSize
    document.documentElement.style.fontSize = `${newSize}%`
    localStorage.setItem('a11y-fontSize', newSize)
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
  } else {
    colorMode.preference = 'light'
  }
  
  localStorage.setItem('a11y-contrast', mode)
}

const getReadableText = () => {
  const pageTitle = document.title || 'Página sem título'
  const h1 = document.querySelector('h1')?.textContent || ''
  const mainContent = Array.from(document.querySelectorAll('main p, main h2, main h3'))
    .filter(el => !el.closest('.a11y-menu') && !el.closest('script') && !el.closest('style'))
    .slice(0, 15)
    .map(el => el.textContent?.trim())
    .filter(text => text && text.length > 15 && !text.includes('Menu') && !text.includes('Navegação'))
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
      ttsStatus.value = 'Continuando leitura...'
    } else {
      window.speechSynthesis.pause()
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
  
  ttsUtterance = new SpeechSynthesisUtterance(text)
  ttsUtterance.lang = 'pt-BR'
  ttsUtterance.rate = 0.85

  ttsUtterance.onstart = () => { 
    speaking.value = true
    ttsStatus.value = 'Lendo conteúdo da página'
  }
  ttsUtterance.onend = () => { 
    speaking.value = false
    ttsStatus.value = 'Leitura concluída'
    setTimeout(() => { ttsStatus.value = '' }, 3000)
  }
  ttsUtterance.onerror = () => {
    speaking.value = false
    ttsStatus.value = 'Erro na leitura'
    setTimeout(() => { ttsStatus.value = '' }, 3000)
  }

  window.speechSynthesis.speak(ttsUtterance)
}

const stopSpeaking = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
    speaking.value = false
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
    fontSize.value = parseInt(savedFontSize)
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

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  stopSpeaking()
})
</script>

<template>
  <div id="accessibility-controls" class="accessibility-panel" role="region" aria-label="Controles de acessibilidade">
    <button id="a11y-toggle" class="a11y-btn-floating" aria-label="Abrir menu de acessibilidade" :aria-expanded="menuOpen" @click="toggleMenu">
      <Settings :size="24" />
      <span class="a11y-label">Acessibilidade</span>
    </button>

    <Teleport to="body">
      <div v-if="menuOpen" class="a11y-overlay" @click="closeMenu"></div>
      <div v-if="menuOpen" id="a11y-menu" class="a11y-menu" role="dialog" aria-modal="true" aria-labelledby="a11y-menu-title">
        <div class="a11y-menu-header">
          <h3 id="a11y-menu-title">Configurações</h3>
          <button id="a11y-close" class="a11y-close-btn" aria-label="Fechar menu" @click="closeMenu">
            <X :size="24" />
          </button>
        </div>

        <div class="a11y-menu-content">
          <div class="a11y-section">
            <h4>Modo Escuro</h4>
            <button 
              id="a11y-dark-toggle" 
              class="a11y-dark-toggle" 
              :class="{ 'dark-active': isDarkMode }"
              @click="toggleDarkMode"
              :aria-pressed="isDarkMode"
            >
              <span class="toggle-track">
                <span class="toggle-thumb">
                  <Sun v-if="isDarkMode" :size="14" />
                  <Moon v-else :size="14" />
                </span>
              </span>
              <span class="toggle-label">{{ isDarkMode ? 'Modo Escuro' : 'Modo Claro' }}</span>
            </button>
          </div>

          <div class="a11y-section">
            <h4>Tamanho da Fonte</h4>
            <div class="a11y-font-controls">
              <button id="a11y-font-decrease" class="a11y-btn a11y-btn-icon" aria-label="Diminuir fonte" @click="changeFontSize(-10)">
                <Minus :size="20" />
              </button>
              <span id="a11y-font-size" class="a11y-font-value" aria-live="polite">{{ fontSize }}%</span>
              <button id="a11y-font-increase" class="a11y-btn a11y-btn-icon" aria-label="Aumentar fonte" @click="changeFontSize(10)">
                <Plus :size="20" />
              </button>
            </div>
          </div>

          <div class="a11y-section">
            <h4>Contraste</h4>
            <div class="a11y-contrast-controls">
              <button id="a11y-contrast-normal" class="a11y-btn" :class="{ 'a11y-active': contrastMode === 'normal' }" @click="setContrast('normal')">Normal</button>
              <button id="a11y-contrast-high" class="a11y-btn" :class="{ 'a11y-active': contrastMode === 'high' }" @click="setContrast('high')">Alto</button>
              <button id="a11y-contrast-dark" class="a11y-btn" :class="{ 'a11y-active': contrastMode === 'dark' }" @click="setContrast('dark')">Escuro</button>
            </div>
          </div>

          <div class="a11y-section">
            <h4>Leitor de Tela (TTS)</h4>
            <p class="a11y-hint">Lê o conteúdo principal da página em voz alta</p>
            <div class="a11y-tts-status" role="status" aria-live="polite">
              {{ ttsStatus }}
            </div>
            <div class="a11y-btn-group">
              <button id="a11y-tts-play" class="a11y-btn" :class="{ 'a11y-active': speaking }" aria-label="Reproduzir texto da página" @click="speakPage">
                <Play :size="18" />
                {{ speaking ? 'Pausar' : 'Ler Página' }}
              </button>
              <button id="a11y-tts-stop" class="a11y-btn" aria-label="Parar leitura completamente" @click="stopSpeaking" :disabled="!speaking">
                <Square :size="18" />
                Parar
              </button>
            </div>
          </div>

          <div class="a11y-section">
            <h4>Navegação por Teclado</h4>
            <p class="a11y-hint">Use Tab para navegar, Enter para selecionar</p>
            <ul class="a11y-shortcuts">
              <li><kbd>Tab</kbd> Próximo elemento</li>
              <li><kbd>Shift+Tab</kbd> Elemento anterior</li>
              <li><kbd>Enter</kbd> Ativar link/botão</li>
              <li><kbd>Esc</kbd> Fechar menu</li>
            </ul>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
#accessibility-controls {
  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem;
  z-index: 9999;
  font-family: 'DM Sans', sans-serif;
}

.a11y-btn-floating {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: var(--primary);
  color: var(--white);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s, box-shadow 0.2s;
}

.a11y-btn-floating:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-md);
}

.a11y-label {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.a11y-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 10000;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.a11y-menu {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 420px;
  max-height: 85vh;
  background: var(--surface);
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  z-index: 10001;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translate(-50%, -48%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.a11y-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: var(--primary);
  color: var(--white);
  flex-shrink: 0;
}

.a11y-menu-header h3 {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
}

.a11y-close-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: var(--white);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.a11y-close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.a11y-menu-content {
  overflow-y: auto;
  flex: 1;
  padding: 0.5rem 0;
}

.a11y-section {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border);
}

.a11y-section:last-child {
  border-bottom: none;
}

.a11y-section h4 {
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text);
}

.a11y-btn-group {
  display: flex;
  gap: 0.75rem;
}

.a11y-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
}

.a11y-btn:hover {
  background: var(--primary-light);
  border-color: var(--primary);
}

.a11y-btn.a11y-active {
  background: var(--primary);
  color: var(--white);
  border-color: var(--primary);
}

.a11y-btn-icon {
  flex: 0;
  width: 44px;
  height: 44px;
  padding: 0;
  font-size: 1rem;
  font-weight: 700;
}

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
  min-width: 80px;
}

.a11y-font-value {
  min-width: 3.5rem;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  color: var(--primary);
}

.a11y-hint {
  font-size: 0.75rem;
  color: var(--text-light);
  margin: 0 0 0.75rem;
}

.a11y-shortcuts {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.8125rem;
}

.a11y-shortcuts li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

.a11y-shortcuts kbd {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: var(--surface-alt);
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--text);
  border: 1px solid var(--border);
}

.a11y-tts-status {
  font-size: 0.8125rem;
  color: var(--primary);
  padding: 0.5rem 0.75rem;
  background: var(--pastel-lavender);
  border-radius: 8px;
  margin-bottom: 0.75rem;
  min-height: 2rem;
  display: flex;
  align-items: center;
}

[data-theme="dark"] .a11y-tts-status {
  background: var(--primary-light);
  color: var(--primary);
}

[data-theme="dark"] .a11y-shortcuts kbd {
  background: var(--surface);
  border-color: var(--border);
}

.a11y-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.a11y-dark-toggle {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--surface);
  border: 2px solid var(--pastel-lavender);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all 0.3s ease;
}

.a11y-dark-toggle:hover {
  border-color: var(--primary);
  background: var(--pastel-lavender);
}

.a11y-dark-toggle.dark-active {
  border-color: var(--primary);
  background: var(--primary);
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
  width: 52px;
  height: 28px;
  background: var(--pastel-lavender);
  border-radius: 14px;
  transition: background 0.3s ease;
}

.a11y-dark-toggle.dark-active .toggle-track {
  background: var(--primary-dark);
}

.toggle-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.a11y-dark-toggle.dark-active .toggle-thumb {
  left: 27px;
}

.toggle-thumb svg {
  color: var(--white);
  transition: transform 0.3s ease;
}

.a11y-dark-toggle.dark-active .toggle-thumb svg {
  transform: rotate(360deg);
}

.toggle-label {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text);
  transition: color 0.3s ease;
}

@media (max-width: 480px) {
  #accessibility-controls {
    left: 1rem;
    bottom: 1rem;
  }

  .a11y-menu {
    width: 95%;
    max-height: 90vh;
    border-radius: 16px;
  }

  .a11y-menu-header {
    padding: 1rem 1.25rem;
  }

  .a11y-section {
    padding: 0.875rem 1.25rem;
  }

  .a11y-btn {
    padding: 0.625rem 0.875rem;
    font-size: 0.8125rem;
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

@media (min-width: 768px) {
  .a11y-menu {
    width: 440px;
  }
}

/* Light theme overrides */
[data-theme="light"] .a11y-btn-floating {
  background: var(--lilac);
  color: #ffffff;
}

[data-theme="light"] .a11y-menu {
  background: #ffffff;
  border: 1px solid rgba(216, 192, 236, 0.18);
}

[data-theme="light"] .a11y-menu-header {
  background: var(--lilac);
  color: #ffffff;
}

[data-theme="light"] .a11y-section {
  border-color: rgba(216, 192, 236, 0.18);
}

[data-theme="light"] .a11y-btn {
  background: #ffffff;
  border-color: rgba(216, 192, 236, 0.18);
  color: var(--text);
}

[data-theme="light"] .a11y-btn:hover {
  background: var(--lilac-soft);
  border-color: var(--lilac);
}

[data-theme="light"] .a11y-btn.a11y-active {
  background: var(--lilac);
  color: #ffffff;
}

[data-theme="light"] .a11y-font-value {
  color: var(--lilac-dark);
}

[data-theme="light"] .a11y-hint {
  color: var(--text-light);
}

[data-theme="light"] .a11y-shortcuts li {
  color: var(--text-secondary);
}

[data-theme="light"] .a11y-shortcuts kbd {
  background: #f0f0f0;
  color: var(--text);
  border-color: #ddd;
}

[data-theme="light"] .a11y-tts-status {
  background: var(--lilac-soft);
  color: var(--lilac-dark);
}

[data-theme="light"] .a11y-dark-toggle {
  background: #ffffff;
  border-color: var(--lilac-soft);
  color: var(--text);
}

[data-theme="light"] .a11y-dark-toggle:hover {
  border-color: var(--lilac);
  background: var(--lilac-soft);
}

[data-theme="light"] .toggle-label {
  color: var(--text);
}

[data-theme="light"] .toggle-track {
  background: var(--lilac-soft);
}

[data-theme="light"] .toggle-thumb {
  background: var(--lilac);
}

[data-theme="light"] .toggle-thumb svg {
  color: #ffffff;
}

/* Sepia theme overrides */
[data-theme="sepia"] .a11y-btn-floating {
  background: var(--lilac);
  color: #ffffff;
}

[data-theme="sepia"] .a11y-menu {
  background: #FFFEF8;
  border: 1px solid rgba(216, 192, 236, 0.25);
}

[data-theme="sepia"] .a11y-menu-header {
  background: var(--lilac);
  color: #ffffff;
}

[data-theme="sepia"] .a11y-section {
  border-color: rgba(216, 192, 236, 0.25);
}

[data-theme="sepia"] .a11y-btn {
  background: #FFFEF8;
  border-color: rgba(216, 192, 236, 0.25);
  color: #3d2e1f;
}

[data-theme="sepia"] .a11y-btn:hover {
  background: var(--lilac-light);
  border-color: var(--lilac);
}

[data-theme="sepia"] .a11y-btn.a11y-active {
  background: var(--lilac);
  color: #FFFEF8;
}

[data-theme="sepia"] .a11y-font-value {
  color: var(--lilac-dark);
}

[data-theme="sepia"] .a11y-hint {
  color: var(--text-light);
}

[data-theme="sepia"] .a11y-shortcuts li {
  color: var(--text-secondary);
}

[data-theme="sepia"] .a11y-shortcuts kbd {
  background: #f5f0e6;
  color: #3d2e1f;
  border-color: #ddd;
}

[data-theme="sepia"] .a11y-tts-status {
  background: var(--lilac-light);
  color: var(--lilac-dark);
}

[data-theme="sepia"] .a11y-dark-toggle {
  background: #FFFEF8;
  border-color: var(--lilac-light);
  color: #3d2e1f;
}

[data-theme="sepia"] .a11y-dark-toggle:hover {
  border-color: var(--lilac);
  background: var(--lilac-light);
}

[data-theme="sepia"] .toggle-label {
  color: #3d2e1f;
}

[data-theme="sepia"] .toggle-track {
  background: var(--lilac-light);
}

[data-theme="sepia"] .toggle-thumb {
  background: var(--lilac);
}

[data-theme="sepia"] .toggle-thumb svg {
  color: #ffffff;
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

[data-a11y-contrast="high"] .a11y-section h4 {
  color: #000000;
}

[data-a11y-contrast="high"] .a11y-section {
  border-color: #000000;
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
  border-color: #000000;
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
  border-color: #000000;
}

[data-a11y-contrast="high"] .a11y-dark-toggle.dark-active {
  background: #0000cc;
  color: #ffffff;
}

[data-a11y-contrast="high"] .toggle-label {
  color: #000000;
}

[data-a11y-contrast="high"] .toggle-track {
  background: #ffff00;
  border: 2px solid #000000;
}

[data-a11y-contrast="high"] .toggle-thumb {
  background: #000000;
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

[data-a11y-contrast="dark"] .a11y-section h4 {
  color: #ffffff;
}

[data-a11y-contrast="dark"] .a11y-section {
  border-color: #ffffff;
}

[data-a11y-contrast="dark"] .a11y-close-btn {
  background: rgba(0, 0, 0, 0.3);
  color: #000000;
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
  border-color: #ffffff;
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
  border-color: #ffffff;
}

[data-a11y-contrast="dark"] .a11y-dark-toggle.dark-active {
  background: #ffffff;
  color: #000000;
  border-color: #ffffff;
}

[data-a11y-contrast="dark"] .toggle-label {
  color: #ffffff;
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

[data-a11y-contrast="dark"] .toggle-thumb svg {
  color: #000000;
}
</style>
