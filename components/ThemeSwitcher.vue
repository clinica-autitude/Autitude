<script setup>
import { Moon, ScrollText, Sun } from 'lucide-vue-next'

const colorMode = useColorMode()

const themes = [
  { value: 'light', label: 'Claro', icon: Sun },
  { value: 'dark', label: 'Escuro', icon: Moon },
  { value: 'sepia', label: 'Sépia', icon: ScrollText }
]

const currentTheme = computed(() => colorMode.value)
const activeTheme = computed(() => themes.find(t => t.value === currentTheme.value) || themes[0])

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
    :aria-label="`Tema atual: ${activeTheme.label}. Clique para mudar.`"
    :title="`Mudar tema: ${activeTheme.label}`"
  >
    <component :is="activeTheme.icon" class="theme-icon" :size="20" aria-hidden="true" />
    <span class="theme-label">{{ activeTheme.label }}</span>
  </button>
</template>

<style scoped>
.theme-switcher {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 3rem;
  min-height: 3rem;
  padding: 0.65rem 0.85rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text);
  transition: all var(--transition-base);
  box-shadow: var(--shadow-md);
}

.theme-switcher:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--white);
  transform: translateY(-1px);
  box-shadow: var(--shadow-lg);
}

.theme-icon {
  flex-shrink: 0;
}

.theme-label {
  display: none;
}

@media (min-width: 500px) {
  .theme-label {
    display: inline;
  }
}

[data-theme="light"] .theme-switcher {
  background: #ffffff;
  border-color: var(--border);
  color: var(--text);
}

[data-theme="light"] .theme-switcher:hover {
  background: var(--lilac);
  border-color: var(--lilac);
  color: #ffffff;
}

[data-theme="sepia"] .theme-switcher {
  background: #FFFEF8;
  border-color: var(--border);
  color: var(--text);
}

[data-theme="sepia"] .theme-switcher:hover {
  background: var(--lilac);
  border-color: var(--lilac);
  color: #ffffff;
}

[data-theme="dark"] .theme-switcher {
  background: var(--surface);
  border-color: var(--border);
  color: var(--text);
}

[data-theme="dark"] .theme-switcher:hover {
  background: var(--lilac);
  border-color: var(--lilac);
  color: var(--text-dark);
}

[data-a11y-contrast="high"] .theme-switcher {
  background: #ffffff;
  border: 2px solid #000000;
  color: #000000;
}

[data-a11y-contrast="high"] .theme-switcher:hover {
  background: #000000;
  color: #ffffff;
}

[data-a11y-contrast="dark"] .theme-switcher {
  background: #111111;
  border: 2px solid #ffffff;
  color: #ffffff;
}

[data-a11y-contrast="dark"] .theme-switcher:hover {
  background: #ffffff;
  color: #000000;
}
</style>
