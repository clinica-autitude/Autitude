<script setup>
defineProps({
  compact: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div :class="['hero-glass', { 'hero-glass--compact': compact }]">
    <div class="hero-glass-inner">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.hero-glass {
  position: relative;
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  padding: clamp(1.25rem, 3vw, 2rem);
  box-shadow:
    var(--glass-shadow),
    inset 0 1px 0 color-mix(in srgb, var(--white) 50%, transparent);
}

.hero-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--texture-hd-velvet);
  background-size: 256px 256px;
  opacity: 0.03;
  pointer-events: none;
  z-index: 0;
}

.hero-glass-inner {
  position: relative;
  z-index: 1;
}

.hero-glass--compact {
  padding: clamp(0.75rem, 1.5vw, 1rem) clamp(1rem, 2vw, 1.5rem);
  border-radius: var(--radius-xl);
}

[data-theme="dark"] .hero-glass {
  background: color-mix(in srgb, var(--surface) 30%, transparent);
  border-color: var(--glass-border);
  box-shadow:
    var(--glass-shadow-elevated),
    inset 0 1px 0 color-mix(in srgb, var(--white) 10%, transparent);
}

[data-theme="sepia"] .hero-glass {
  background: color-mix(in srgb, var(--surface) 45%, transparent);
  border-color: color-mix(in srgb, var(--lilac-light) 35%, transparent);
}

[data-a11y-contrast="high"] .hero-glass,
[data-a11y-contrast="dark"] .hero-glass {
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  background: var(--surface);
  border: 2px solid var(--text);
  box-shadow: none;
}

@media (prefers-color-scheme: dark) {
  .hero-glass {
    background: color-mix(in srgb, var(--surface) 30%, transparent);
    border-color: var(--glass-border);
  }
}

@media (max-width: 900px) {
  .hero-glass {
    width: 100%;
    padding: clamp(1.25rem, 3vw, 1.75rem);
  }

  .hero-glass--compact {
    padding: clamp(1rem, 2vw, 1.25rem) clamp(1rem, 2vw, 1.5rem);
  }
}

@media (max-width: 640px) {
  .hero-glass {
    border-radius: var(--radius-xl);
  }
}
</style>
