<template>
  <p class="hero-subtitle">
    <slot />
  </p>
</template>

<style scoped>
.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  line-height: 1.6;
  max-width: min(48ch, 90%);
}

@media (max-width: 900px) {
  .hero-subtitle {
    max-width: min(54ch, 90%);
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 640px) {
  .hero-subtitle {
    font-size: 0.9375rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
}
</style>
