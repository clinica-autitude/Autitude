<script setup>
defineProps({
  actions: {
    type: Array,
    required: true,
    validator: (v) => v.every((a) => a.to && a.label)
  }
})
</script>

<template>
  <div class="hero-actions">
    <NuxtLink
      v-for="action in actions"
      :key="action.to"
      :to="action.to"
      :class="['btn', 'btn-lg', action.variant || '']"
    >
      {{ action.label }}
    </NuxtLink>
  </div>
</template>

<style scoped>
.hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .hero-actions {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
  }

  .hero-actions .btn {
    width: 100%;
    max-width: 280px;
  }
}
</style>
