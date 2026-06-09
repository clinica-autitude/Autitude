<template>
  <span class="hero-title-highlight">
    <slot />
  </span>
</template>

<style scoped>
.hero-title-highlight {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
