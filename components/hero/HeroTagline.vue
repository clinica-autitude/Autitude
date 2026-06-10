<template>
  <p class="hero-tagline">
    <slot />
  </p>
</template>

<style scoped>
.hero-tagline {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  font-weight: 600;
  color: var(--primary);
  margin: 0;
  letter-spacing: 0.02em;
}

@media (max-width: 640px) {
  .hero-tagline {
    font-size: 0.875rem;
  }
}
</style>
