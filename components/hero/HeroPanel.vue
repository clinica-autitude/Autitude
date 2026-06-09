<script setup>
defineProps({
  side: {
    type: String,
    default: 'left',
    validator: (v) => ['left', 'right'].includes(v)
  },
  accent: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div :class="['hero-panel', `hero-panel--${side}`, { 'hero-panel--accent': accent }]">
    <slot />
  </div>
</template>

<style scoped>
.hero-panel {
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  background: color-mix(in srgb, var(--surface) 55%, transparent);
  border: 1px solid color-mix(in srgb, var(--border) 40%, transparent);
  border-radius: var(--radius-2xl);
  padding: 2rem 2.25rem;
  box-shadow:
    0 8px 32px rgba(42, 29, 69, 0.08),
    inset 0 1px 0 color-mix(in srgb, var(--white) 50%, transparent);
  animation: fadeInUp 0.7s var(--ease-smooth) both;
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
    0 8px 32px rgba(42, 29, 69, 0.08),
    inset 0 1px 0 color-mix(in srgb, var(--white) 50%, transparent);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 900px) {
  .hero-panel {
    text-align: center;
    width: 100%;
    padding: 1.5rem 1.75rem;
    justify-self: center;
  }
}

@media (max-width: 640px) {
  .hero-panel {
    padding: 1.25rem 1.25rem;
    border-radius: var(--radius-xl);
  }
}

@media (prefers-color-scheme: dark) {
  .hero-panel {
    background: color-mix(in srgb, var(--surface) 40%, transparent);
    border-color: color-mix(in srgb, var(--border) 25%, transparent);
  }
}

[data-theme="dark"] .hero-panel {
  background: color-mix(in srgb, var(--surface) 40%, transparent);
  border-color: color-mix(in srgb, var(--border) 25%, transparent);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 color-mix(in srgb, var(--white) 10%, transparent);
}

[data-theme="dark"] .hero-panel--accent {
  border-color: color-mix(in srgb, var(--lilac-light) 30%, transparent);
  box-shadow:
    0 0 40px rgba(107, 79, 163, 0.12),
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 color-mix(in srgb, var(--white) 10%, transparent);
}

[data-theme="sepia"] .hero-panel {
  background: color-mix(in srgb, var(--surface) 50%, transparent);
  border-color: color-mix(in srgb, var(--lilac-light) 35%, transparent);
}

[data-theme="sepia"] .hero-panel--accent {
  border-color: color-mix(in srgb, var(--lilac-light) 45%, transparent);
  box-shadow:
    0 0 40px rgba(107, 79, 163, 0.06),
    0 8px 32px rgba(42, 29, 69, 0.06),
    inset 0 1px 0 color-mix(in srgb, var(--white) 40%, transparent);
}

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
</style>
