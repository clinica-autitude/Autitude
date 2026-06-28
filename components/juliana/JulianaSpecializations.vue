<script setup lang="ts">
import { Brain, Music, Palette, Flower2, Sparkles } from 'lucide-vue-next'

const specializations = [
  {
    icon: Brain,
    title: 'Análise do Comportamento Aplicada (ABA)',
    description: 'Pós-graduada em ABA para o Transtorno do Espectro Autista (TEA), com foco em intervenções baseadas em evidências científicas.'
  },
  {
    icon: Sparkles,
    title: 'Integração Sensorial de Ayres',
    description: 'Certificação Internacional pela University of Southern California (USC), uma das formações mais reconhecidas mundialmente na área.'
  }
]

const integrative = [
  { icon: Palette, name: 'Cromoterapia' },
  { icon: Music, name: 'Musicoterapia' },
  { icon: Flower2, name: 'Florais de Bach' }
]
</script>

<template>
  <div class="specializations">
    <h3 class="specs-title">Especializações & Formação</h3>

    <div class="specs-grid">
      <div
        v-for="(spec, index) in specializations"
        :key="index"
        class="spec-card texture-hd"
      >
        <div class="spec-icon-wrapper">
          <component :is="spec.icon" :size="22" class="spec-icon" />
        </div>
        <div class="spec-content">
          <h4>{{ spec.title }}</h4>
          <p>{{ spec.description }}</p>
        </div>
      </div>
    </div>

    <div class="integrative-section">
      <h4 class="integrative-title">Terapias Integrativas</h4>
      <p class="integrative-desc">
        Formação em abordagens complementares, utilizadas de forma ética,
        individualizada e integradas ao plano terapêutico quando indicadas:
      </p>
      <div class="integrative-tags">
        <span
          v-for="item in integrative"
          :key="item.name"
          class="integrative-tag"
        >
          <component :is="item.icon" :size="14" />
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.specializations {
  padding-top: 0.5rem;
}

.specs-title {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--lilac-deep);
  margin-bottom: 1.25rem;
}

.specs-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.spec-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: var(--surface);
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
  transition: transform 0.3s var(--ease-out-expo), box-shadow 0.3s var(--ease-out-expo);
}

.spec-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.spec-icon-wrapper {
  width: 44px;
  height: 44px;
  background: var(--lilac-soft);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.spec-icon {
  color: var(--lilac);
}

.spec-content h4 {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: var(--text);
  margin-bottom: 0.25rem;
}

.spec-content p {
  font-size: clamp(0.8125rem, 1.2vw, 0.9375rem);
  line-height: 1.7;
  color: var(--text-secondary);
}

.integrative-section {
  background: var(--lilac-soft);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
}

.integrative-title {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: var(--lilac-deep);
  margin-bottom: 0.5rem;
}

.integrative-desc {
  font-size: clamp(0.8125rem, 1.2vw, 0.9375rem);
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.integrative-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.integrative-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  background: var(--surface);
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-full);
  font-size: clamp(0.6875rem, 1.2vw, 0.8125rem);
  font-weight: 600;
  color: var(--lilac-deep);
}

.integrative-tag :deep(svg) {
  color: var(--lilac);
}

@media (max-width: 480px) {
  .spec-card {
    padding: 1rem;
  }

  .spec-icon-wrapper {
    width: 38px;
    height: 38px;
  }
}
</style>
