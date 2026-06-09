<template>
  <p class="hero-subtitle">
    <slot />
  </p>
</template>

<style scoped>
.hero-subtitle {
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  line-height: 1.65;
  max-width: 42ch;
}

@media (max-width: 900px) {
  .hero-subtitle {
    max-width: 54ch;
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
