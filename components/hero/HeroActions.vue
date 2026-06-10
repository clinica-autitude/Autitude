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
  flex-wrap: nowrap;
  align-items: center;
}

@media (max-width: 900px) {
  .hero-actions {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero-actions {
    gap: 0.5rem;
  }

  .hero-actions .btn {
    font-size: 0.875rem;
    padding: 0.65rem 1.25rem;
  }
}
</style>
