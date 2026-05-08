<template>
  <div id="accessibility-controls" class="accessibility-panel" role="region" aria-label="Controles de acessibilidade">
    <button id="a11y-toggle" class="a11y-btn-floating" aria-label="Abrir menu de acessibilidade" :aria-expanded="menuOpen" @click="toggleMenu">
      <IconSettings :size="24" />
      <span class="a11y-label">Acessibilidade</span>
    </button>

    <Teleport to="body">
      <div v-if="menuOpen" class="a11y-overlay" @click="closeMenu"></div>
      <div v-if="menuOpen" id="a11y-menu" class="a11y-menu" role="dialog" aria-modal="true" aria-labelledby="a11y-menu-title">
        <div class="a11y-menu-header">
          <h3 id="a11y-menu-title">Configuracoes</h3>
          <button id="a11y-close" class="a11y-close-btn" aria-label="Fechar menu" @click="closeMenu">
            <IconX :size="24" />
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
                  <IconSun v-if="isDarkMode" :size="14" />
                  <IconMoon v-else :size="14" />
                </span>
              </span>
              <span class="toggle-label">{{ isDarkMode ? 'Modo Escuro' : 'Modo Claro' }}</span>
            </button>
          </div>

          <div class="a11y-section">
            <h4>Tamanho da Fonte</h4>
            <div class="a11y-font-controls">
              <button id="a11y-font-decrease" class="a11y-btn a11y-btn-icon" aria-label="Diminuir fonte" @click="changeFontSize(-10)">
                <IconMinus :size="20" />
              </button>
              <span id="a11y-font-size" class="a11y-font-value" aria-live="polite">{{ fontSize }}%</span>
              <button id="a11y-font-increase" class="a11y-btn a11y-btn-icon" aria-label="Aumentar fonte" @click="changeFontSize(10)">
                <IconPlus :size="20" />
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
            <div class="a11y-btn-group">
              <button id="a11y-tts-play" class="a11y-btn" aria-label="Reproduzir texto" @click="speakPage">
                <IconPlay :size="18" />
                Ler Pagina
              </button>
              <button id="a11y-tts-stop" class="a11y-btn" aria-label="Parar leitura" @click="stopSpeaking">
                <IconSquare :size="18" />
                Parar
              </button>
            </div>
          </div>

          <div class="a11y-section">
            <h4>Libras (VLibras)</h4>
            <p class="a11y-hint">Traduz o conteudo para Lingua Brasileira de Sinais</p>
            <button id="a11y-vlibras-toggle" class="a11y-btn a11y-btn-vlibras" :class="{ 'a11y-active': vlibrasEnabled }" @click="toggleVlibras">
              <IconGlobe :size="18" />
              {{ vlibrasEnabled ? 'Desativar VLibras' : 'Ativar VLibras' }}
            </button>
          </div>

          <div class="a11y-section">
            <h4>Navegacao por Teclado</h4>
            <p class="a11y-hint">Use Tab para navegar, Enter para selecionar</p>
            <ul class="a11y-shortcuts">
              <li><kbd>Tab</kbd> Proximo elemento</li>
              <li><kbd>Shift+Tab</kbd> Elemento anterior</li>
              <li><kbd>Enter</kbd> Ativar link/botao</li>
              <li><kbd>Esc</kbd> Fechar menu</li>
            </ul>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue'

export default {
  name: 'AccessibilityWidget',
  setup() {
    const menuOpen = ref(false)
    const fontSize = ref(100)
    const contrastMode = ref('normal')
    const isDarkMode = ref(false)
    const vlibrasEnabled = ref(false)
    const maxFontSize = 150
    const minFontSize = 75
    let ttsUtterance = null
    let speaking = false
    let vlibrasWidget = null

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    const closeMenu = () => {
      menuOpen.value = false
    }

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value
      if (isDarkMode.value) {
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        document.documentElement.removeAttribute('data-theme')
      }
      localStorage.setItem('a11y-darkMode', isDarkMode.value)
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
      document.documentElement.removeAttribute('data-theme')
      isDarkMode.value = false
      
      if (mode === 'auto') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        if (prefersDark) {
          document.documentElement.setAttribute('data-a11y-contrast', 'dark')
        }
      } else if (mode === 'high') {
        document.documentElement.setAttribute('data-a11y-contrast', 'high')
      } else if (mode === 'dark') {
        document.documentElement.setAttribute('data-a11y-contrast', 'dark')
        isDarkMode.value = true
      }
      
      localStorage.setItem('a11y-contrast', mode)
    }

    const initVlibras = () => {
      if (document.querySelector('div[vw-access-button]')) return true
      
      const vwDiv = document.createElement('div')
      vwDiv.className = 'vw-enabled'
      vwDiv.style.display = 'none'
      vwDiv.innerHTML = `
        <div vw-access-button class="vw-access-button"></div>
        <div vw-plugin-wrapper class="vw-plugin-wrapper">
          <div class="vw-plugin-top-wrapper"></div>
        </div>
      `
      document.body.appendChild(vwDiv)

      const script = document.createElement('script')
      script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
      script.onload = () => {
        if (window.VLibras) {
          vlibrasWidget = new window.VLibras.Widget('https://vlibras.gov.br/app')
          vlibrasEnabled.value = true
          vwDiv.style.display = 'block'
        }
      }
      document.body.appendChild(script)

      return true
    }

    const toggleVlibras = () => {
      if (!vlibrasEnabled.value) {
        initVlibras()
      } else {
        const vwDiv = document.querySelector('.vw-enabled')
        if (vwDiv) {
          vwDiv.style.display = vwDiv.style.display === 'none' ? 'block' : 'none'
        }
        vlibrasEnabled.value = vwDiv?.style.display !== 'none'
      }
    }

    const getReadableText = () => {
      const elements = [
        'h1', 'h2', 'h3', '.hero-title', '.hero-subtitle',
        '.section-tag', '.lead', 'article p'
      ].join(', ')

      return Array.from(document.querySelectorAll(elements))
        .map(el => el.textContent?.trim())
        .filter(text => text && text.length > 10)
        .join('. ')
    }

    const speakPage = () => {
      if (speaking) {
        stopSpeaking()
        return
      }

      const text = getReadableText()
      if (!text || !('speechSynthesis' in window)) return

      ttsUtterance = new SpeechSynthesisUtterance(text)
      ttsUtterance.lang = 'pt-BR'
      ttsUtterance.rate = 0.9

      ttsUtterance.onstart = () => { speaking = true }
      ttsUtterance.onend = () => { speaking = false }

      window.speechSynthesis.speak(ttsUtterance)
    }

    const stopSpeaking = () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel()
        speaking = false
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
        isDarkMode.value = true
        document.documentElement.setAttribute('data-theme', 'dark')
      }

      const savedVlibras = localStorage.getItem('a11y-vlibras')
      if (savedVlibras === 'true' && !vlibrasEnabled.value) {
        initVlibras()
      }
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeydown)
      stopSpeaking()
    })

    return {
      menuOpen,
      fontSize,
      contrastMode,
      isDarkMode,
      vlibrasEnabled,
      toggleMenu,
      closeMenu,
      toggleDarkMode,
      changeFontSize,
      setContrast,
      toggleVlibras,
      speakPage,
      stopSpeaking
    }
  }
}
</script>

<style scoped>
#accessibility-controls {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 9999;
  font-family: 'DM Sans', sans-serif;
}

.a11y-btn-floating {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: var(--primary, #7B5CBF);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(123, 92, 191, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}

.a11y-btn-floating:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 24px rgba(123, 92, 191, 0.4);
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
  background: var(--surface, #fff);
  border-radius: 20px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
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
  background: var(--primary, #7B5CBF);
  color: white;
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
  color: white;
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.a11y-section:last-child {
  border-bottom: none;
}

.a11y-section h4 {
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text, #1a1a2e);
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
  background: var(--surface, #fff);
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
}

.a11y-btn:hover {
  background: var(--primary-light, #CDBFF0);
  border-color: var(--primary, #7B5CBF);
}

.a11y-btn.a11y-active {
  background: var(--primary, #7B5CBF);
  color: white;
  border-color: var(--primary, #7B5CBF);
}

.a11y-btn-icon {
  flex: 0;
  width: 44px;
  height: 44px;
  padding: 0;
  font-size: 1rem;
  font-weight: 700;
}

.a11y-btn-vlibras {
  width: 100%;
  background: var(--primary, #7B5CBF);
  color: white;
  margin-top: 0.5rem;
}

.a11y-btn-vlibras:hover {
  background: var(--primary-dark, #5A3DA0);
  border-color: var(--primary-dark, #5A3DA0);
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
  color: var(--primary, #7B5CBF);
}

.a11y-hint {
  font-size: 0.75rem;
  color: var(--text-light, #6b6b8f);
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
  color: var(--text-secondary, #3d3d5c);
}

.a11y-shortcuts kbd {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: #f0f0f0;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--text, #1a1a2e);
  border: 1px solid #ddd;
}

/* Dark Mode Toggle */
.a11y-dark-toggle {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--surface, #fff);
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
  color: white;
}

.a11y-dark-toggle.dark-active .toggle-thumb {
  background: white;
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
  color: white;
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
</style>