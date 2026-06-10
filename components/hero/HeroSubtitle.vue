<template>
  <p class="hero-subtitle">
    <slot />
  </p>
</template>

<style scoped>
.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .hero-subtitle {
    font-size: 0.9375rem;
  }
}
</style>
