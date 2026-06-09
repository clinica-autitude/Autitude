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
  padding: 0.45rem 1rem 0.45rem 0.6rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--lilac-deep);
  background: color-mix(in srgb, var(--lilac-soft) 85%, transparent);
  border: 1px solid color-mix(in srgb, var(--lilac-light) 50%, transparent);
  border-radius: var(--radius-full);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
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
    padding: 0.35rem 0.85rem 0.35rem 0.5rem;
    margin-bottom: 1rem;
  }

  .hero-pill-dot {
    width: 6px;
    height: 6px;
  }
}
</style>
