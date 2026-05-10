<script setup>
const colorMode = useColorMode()

const themes = [
  { value: 'light', label: 'Claro', icon: '☀️' },
  { value: 'dark', label: 'Escuro', icon: '🌙' },
  { value: 'sepia', label: 'Sépia', icon: '📜' }
]

const currentTheme = computed(() => colorMode.value)

const toggleTheme = () => {
  const currentIndex = themes.findIndex(t => t.value === currentTheme.value)
  const nextIndex = (currentIndex + 1) % themes.length
  const newTheme = themes[nextIndex].value
  colorMode.preference = newTheme
  if (newTheme !== 'light') {
    document.documentElement.setAttribute('data-theme', newTheme)
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
}
</script>

<template>
  <button 
    class="theme-switcher" 
    @click="toggleTheme"
    :aria-label="`Tema atual: ${themes.find(t => t.value === currentTheme)?.label}. Clique para mudar.`"
    :title="`Mudar tema: ${themes.find(t => t.value === currentTheme)?.label}`"
  >
    <span class="theme-icon">{{ themes.find(t => t.value === currentTheme)?.icon }}</span>
    <span class="theme-label">{{ themes.find(t => t.value === currentTheme)?.label }}</span>
  </button>
</template>

<style scoped>
.theme-switcher {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text);
  transition: all var(--transition-base);
  box-shadow: var(--shadow-xs);
}

.theme-switcher:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--white);
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.theme-icon {
  font-size: 1.1rem;
  line-height: 1;
}

.theme-label {
  display: none;
}

@media (min-width: 500px) {
  .theme-label {
    display: inline;
  }
}
</style>