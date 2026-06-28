<script setup lang="ts">
import { Handshake } from 'lucide-vue-next'
</script>

<template>
  <div class="commitment">
    <div class="commitment-icon-wrapper">
      <Handshake :size="24" class="commitment-icon" />
    </div>
    <p class="commitment-text">
      Mais do que tratar dificuldades, meu compromisso é
      <strong>desenvolver potencialidades</strong>,
      <strong>fortalecer a autonomia</strong> e
      <strong>caminhar ao lado das famílias</strong>,
      transformando desafios em conquistas.
    </p>
  </div>
</template>

<style scoped>
.commitment {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: var(--gradient-card);
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-xl);
  padding: 1.5rem;
}

.commitment-icon-wrapper {
  width: 48px;
  height: 48px;
  background: var(--lilac-soft);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.commitment-icon {
  color: var(--lilac);
}

.commitment-text {
  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
  line-height: 1.8;
  color: var(--text-secondary);
  margin: 0;
}

.commitment-text strong {
  color: var(--lilac-deep);
}

@media (max-width: 480px) {
  .commitment {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
}
</style>
