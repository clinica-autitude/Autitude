<template>
  <h1 class="hero-title">
    <slot />
  </h1>
</template>

<style scoped>
.hero-title {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  line-height: 1.1;
  margin-bottom: 1.25rem;
  letter-spacing: -0.025em;
  font-weight: 800;
}

@media (max-width: 640px) {
  .hero-title {
    font-size: clamp(1.5rem, 6vw, 1.875rem);
    line-height: 1.15;
    margin-bottom: 1rem;
  }
}
</style>
