<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <span class="hero-pill">
    <span class="hero-pill-dot" aria-hidden="true"></span>
    {{ text }}
  </span>
</template>

<style scoped>
.hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: clamp(0.375rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1.125rem);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--lilac-deep);
  background: color-mix(in srgb, var(--lilac-soft) 40%, transparent);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-full);
  backdrop-filter: var(--glass-blur-light);
  -webkit-backdrop-filter: var(--glass-blur-light);
  box-shadow: var(--glass-shadow);
  margin-bottom: 1.5rem;
}

.hero-pill-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--lilac);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--lilac) 18%, transparent);
  animation: pillPulse 2.4s ease-in-out infinite;
}

@keyframes pillPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@media (max-width: 640px) {
  .hero-pill {
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }

  .hero-pill-dot {
    width: 6px;
    height: 6px;
  }
}
</style>
