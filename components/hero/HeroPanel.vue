<script setup lang="ts">
import { ref, computed } from 'vue'
import { gsap } from 'gsap'
import type { HeroPanelProps } from './types'

const props = withDefaults(defineProps<HeroPanelProps>(), {
  side: 'left',
  accent: false,
  compact: false,
  growing: false,
  targetWidth: undefined,
  disabled: false
})

const emit = defineEmits(['grow-start', 'grow-end', 'hover', 'leave'])

const panelRef = ref<HTMLElement | null>(null)
const hasInteracted = ref(false)

const panelStyles = computed(() => {
  const styles: Record<string, string> = {}
  if (props.growing && props.targetWidth) {
    styles.width = `${props.targetWidth}px`
  }
  return styles
})

const growPanel = () => {
  if (!panelRef.value || props.disabled) return

  gsap.killTweensOf(panelRef.value)

  emit('grow-start')

  gsap.to(panelRef.value, {
    width: props.targetWidth || 'fit-content',
    duration: 0.4,
    ease: 'power2.out',
    onComplete: () => emit('grow-end')
  })
}

const resetPanel = () => {
  if (!panelRef.value || props.disabled) return

  gsap.killTweensOf(panelRef.value)

  gsap.to(panelRef.value, {
    width: '0px',
    duration: 0.3,
    ease: 'power2.inOut',
    onComplete: () => {
      emit('grow-end')
      panelRef.value!.style.width = ''
    }
  })
}

const hover = () => {
  emit('hover')
}

const leave = () => {
  emit('leave')
}

const handleInteraction = () => {
  if (!hasInteracted.value) {
    hasInteracted.value = true
    growPanel()
  } else {
    resetPanel()
  }
}

const disableInteraction = computed(() => props.disabled || props.growing)

const showHoverEffect = computed(() => !props.disabled && !props.growing)

defineExpose({
  grow: growPanel,
  reset: resetPanel,
  growPanel,
  resetPanel,
  panelRef
})
</script>

<template>
  <div ref="panelRef" :class="['hero-panel', `hero-panel--${props.side}`, { 'hero-panel--accent': props.accent }, { 'hero-panel--compact': props.compact }, { 'hero-panel--growing': props.growing }]" :style="{ ...panelStyles }" @mouseenter="() => !disableInteraction && hover()" @mouseleave="() => !disableInteraction && leave()">
    <slot />
    <div v-if="showHoverEffect" class="hover-effect" />
  </div>
</template>

<style scoped>
.hero-panel {
  position: relative;
  overflow: hidden;
  container-type: inline-size;
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--hero-panel-radius);
  padding: var(--hero-panel-padding);
  box-shadow:
    var(--glass-shadow),
    inset 0 1px 0 color-mix(in srgb, var(--white) 50%, transparent);
  animation: panelFadeIn 0.8s var(--ease-out-expo) both;
  max-width: 100%;
}

.hero-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(135deg, color-mix(in srgb, var(--white) 35%, transparent), transparent 45%);
  opacity: 0.55;
}

.hero-panel > :not(.hover-effect) {
  position: relative;
  z-index: 1;
}

.hover-effect {
  position: absolute;
  inset: -40%;
  pointer-events: none;
  background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--lilac-light) 35%, transparent), transparent 42%);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.hero-panel:hover .hover-effect {
  opacity: 1;
}

.hero-panel--compact {
  padding: clamp(0.75rem, 1.5vw, 1rem) clamp(1rem, 2vw, 1.5rem);
  border-radius: var(--radius-xl);
}

.hero-panel--left {
  text-align: right;
  justify-self: end;
}

.hero-panel--right {
  text-align: left;
  justify-self: start;
}

.hero-panel--accent {
  border-color: color-mix(in srgb, var(--lilac-light) 50%, transparent);
  box-shadow:
    0 0 40px rgba(107, 79, 163, 0.08),
    var(--glass-shadow),
    inset 0 1px 0 color-mix(in srgb, var(--white) 50%, transparent);
}

@keyframes panelFadeIn {
  from { opacity: 0; transform: translateY(24px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@media (max-width: 900px) {
  .hero-panel {
    text-align: center;
    width: 100%;
    padding: clamp(1.25rem, 3vw, 1.75rem);
    justify-self: center;
  }

  .hero-panel--compact {
    padding: clamp(1rem, 2vw, 1.25rem) clamp(1rem, 2vw, 1.5rem);
  }
}

@media (max-width: 640px) {
  .hero-panel {
    border-radius: var(--radius-xl);
  }
}

/* Dark theme */
[data-theme="dark"] .hero-panel {
  background: color-mix(in srgb, var(--surface) 30%, transparent);
  border-color: var(--glass-border);
  box-shadow:
    var(--glass-shadow-elevated),
    inset 0 1px 0 color-mix(in srgb, var(--white) 10%, transparent);
}

[data-theme="dark"] .hero-panel--accent {
  border-color: color-mix(in srgb, var(--lilac-light) 30%, transparent);
  box-shadow:
    0 0 40px rgba(107, 79, 163, 0.12),
    var(--glass-shadow-elevated),
    inset 0 1px 0 color-mix(in srgb, var(--white) 10%, transparent);
}

/* Sepia theme */
[data-theme="sepia"] .hero-panel {
  background: color-mix(in srgb, var(--surface) 45%, transparent);
  border-color: color-mix(in srgb, var(--lilac-light) 35%, transparent);
}

[data-theme="sepia"] .hero-panel--accent {
  border-color: color-mix(in srgb, var(--lilac-light) 45%, transparent);
  box-shadow:
    0 0 40px rgba(107, 79, 163, 0.06),
    var(--glass-shadow),
    inset 0 1px 0 color-mix(in srgb, var(--white) 40%, transparent);
}

/* Accessibility: high contrast and dark contrast — solid backgrounds, no glass */
[data-a11y-contrast="high"] .hero-panel,
[data-a11y-contrast="dark"] .hero-panel {
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  background: var(--surface);
  border: 2px solid var(--text);
  box-shadow: none;
}

[data-a11y-contrast="high"] .hero-panel--accent,
[data-a11y-contrast="dark"] .hero-panel--accent {
  border-color: var(--primary);
}

/* System dark mode */
@media (prefers-color-scheme: dark) {
  .hero-panel {
    background: color-mix(in srgb, var(--surface) 30%, transparent);
    border-color: var(--glass-border);
  }
}
</style>
