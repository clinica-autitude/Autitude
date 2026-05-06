<template>
  <div id="accessibility-controls" class="accessibility-panel" role="region" aria-label="Controles de acessibilidade">
    <button id="a11y-toggle" class="a11y-btn-floating" aria-label="Abrir menu de acessibilidade" :aria-expanded="menuOpen" @click="toggleMenu">
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4M12 8h.01"/>
      </svg>
      <span class="a11y-label">Acessibilidade</span>
    </button>

    <div v-if="menuOpen" id="a11y-menu" class="a11y-menu">
      <div class="a11y-menu-header">
        <h3>Acessibilidade</h3>
        <button id="a11y-close" aria-label="Fechar menu" @click="closeMenu">×</button>
      </div>

      <div class="a11y-section">
        <h4>Leitor de Tela (TTS)</h4>
        <button id="a11y-tts-play" class="a11y-btn" aria-label="Reproduzir texto" @click="speakPage">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Ler Página
        </button>
        <button id="a11y-tts-stop" class="a11y-btn" aria-label="Parar leitura" @click="stopSpeaking">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          Parar
        </button>
      </div>

      <div class="a11y-section">
        <h4>Tamanho da Fonte</h4>
        <div class="a11y-font-controls">
          <button id="a11y-font-decrease" class="a11y-btn" aria-label="Diminuir fonte" @click="changeFontSize(-10)">A-</button>
          <span id="a11y-font-size" aria-live="polite">{{ fontSize }}%</span>
          <button id="a11y-font-increase" class="a11y-btn" aria-label="Aumentar fonte" @click="changeFontSize(10)">A+</button>
        </div>
      </div>

      <div class="a11y-section">
        <h4>Contraste</h4>
        <div class="a11y-contrast-controls">
          <button id="a11y-contrast-normal" class="a11y-btn" :class="{ 'a11y-active': contrastMode === 'normal' }" aria-pressed="true" @click="setContrast('normal')">Normal</button>
          <button id="a11y-contrast-high" class="a11y-btn" :class="{ 'a11y-active': contrastMode === 'high' }" aria-pressed="false" @click="setContrast('high')">Alto</button>
          <button id="a11y-contrast-dark" class="a11y-btn" :class="{ 'a11y-active': contrastMode === 'dark' }" aria-pressed="false" @click="setContrast('dark')">Escuro</button>
        </div>
      </div>

      <div class="a11y-section">
        <h4>Libras (VLibras)</h4>
        <p class="a11y-hint">Traduz o conteúdo para Língua Brasileira de Sinais</p>
        <a href="https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/sisp/guia-do-gestor/guia-orientativo-de-padroes-e-fluxos-das-tecnologias-de-transformacao-digital/vlibras-widget" 
           target="_blank" 
           class="a11y-btn a11y-btn-vlibras"
           rel="noopener noreferrer">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
          Ativar VLibras
        </a>
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
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AccessibilityWidget',
  setup() {
    const menuOpen = ref(false)
    const fontSize = ref(100)
    const contrastMode = ref('normal')
    const maxFontSize = 150
    const minFontSize = 75
    let ttsUtterance = null
    let speaking = false

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    const closeMenu = () => {
      menuOpen.value = false
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
      if (mode !== 'normal') {
        document.documentElement.setAttribute('data-a11y-contrast', mode)
      }
      localStorage.setItem('a11y-contrast', mode)
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
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeydown)
      stopSpeaking()
    })

    return {
      menuOpen,
      fontSize,
      contrastMode,
      toggleMenu,
      closeMenu,
      changeFontSize,
      setContrast,
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
  gap: 0.5rem;
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

.a11y-menu {
  position: absolute;
  bottom: 4rem;
  right: 0;
  width: 280px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.a11y-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: var(--primary, #7B5CBF);
  color: white;
}

.a11y-menu-header h3 {
  margin: 0;
  font-size: 1rem;
}

.a11y-menu-header button {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.a11y-section {
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.a11y-section h4 {
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  color: var(--text, #1a1a2e);
}

.a11y-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: var(--surface, #fff);
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.a11y-btn:hover {
  background: var(--primary-light, #CDBFF0);
}

.a11y-btn.a11y-active {
  background: var(--primary, #7B5CBF);
  color: white;
  border-color: var(--primary, #7B5CBF);
}

.a11y-btn-vlibras {
  width: 100%;
  background: var(--primary, #7B5CBF);
  color: white;
  text-decoration: none;
  margin-top: 0.5rem;
}

.a11y-font-controls,
.a11y-contrast-controls {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.a11y-font-controls span {
  min-width: 3rem;
  text-align: center;
  font-weight: 600;
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
  font-size: 0.75rem;
}

.a11y-shortcuts li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.a11y-shortcuts kbd {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: #f0f0f0;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.7rem;
}

@media (max-width: 480px) {
  .a11y-menu {
    width: calc(100vw - 2rem);
    right: -0.5rem;
  }
}
</style>