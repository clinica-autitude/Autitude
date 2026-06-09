<template>
  <p class="hero-tagline">
    <slot />
  </p>
</template>

<style scoped>
.hero-tagline {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--primary);
  margin: 0.5rem 0 1.75rem;
  letter-spacing: 0.01em;
}

@media (max-width: 640px) {
  .hero-tagline {
    font-size: 0.875rem;
    margin: 0.25rem 0 1.25rem;
  }
}
</style>
