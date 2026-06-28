<script setup lang="ts">
import { FileText, Users, Target, HandHeart } from 'lucide-vue-next'

const activities = [
  'Atendimento clínico de crianças e adolescentes',
  'Aplicação de avaliações para o processo diagnóstico do TEA',
  'Supervisão da formação prática de graduandos em Terapia Ocupacional',
  'Fundação e direção da Autitude Desenvolvimento e Ação Humana'
]

const pillars = [
  { icon: Target, label: 'Ciência' },
  { icon: HandHeart, label: 'Escuta ativa' },
  { icon: Users, label: 'Acolhimento' },
  { icon: FileText, label: 'Parceria com famílias' }
]
</script>

<template>
  <div class="approach">
    <div class="approach-current">
      <h3 class="approach-title">Atuação Atual</h3>
      <ul class="activity-list">
        <li v-for="(activity, index) in activities" :key="index">
          {{ activity }}
        </li>
      </ul>
    </div>

    <div class="approach-philosophy">
      <h3 class="approach-title">Filosofia de Trabalho</h3>
      <p class="philosophy-text">
        Acredito que cada criança é única e possui um potencial imenso para aprender,
        desenvolver habilidades e conquistar autonomia quando recebe as oportunidades
        e os apoios adequados. Por isso, meu trabalho é pautado na ciência, na escuta
        ativa, no acolhimento e na construção de uma parceria sólida com as famílias.
      </p>
      <div class="philosophy-pillars">
        <span
          v-for="pillar in pillars"
          :key="pillar.label"
          class="pillar"
        >
          <component :is="pillar.icon" :size="16" />
          {{ pillar.label }}
        </span>
      </div>
    </div>

    <div class="approach-autitude">
      <h3 class="approach-title">Na Autitude</h3>
      <p>
        Unimos conhecimento científico, prática clínica e atendimento humanizado
        para promover um desenvolvimento significativo e funcional. Cada plano
        terapêutico é elaborado de forma individualizada, respeitando as necessidades,
        os interesses e os objetivos de cada criança, sempre com o propósito de
        favorecer sua participação plena em todos os contextos da vida.
      </p>
    </div>
  </div>
</template>

<style scoped>
.approach {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 0.5rem;
}

.approach-title {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--lilac-deep);
  margin-bottom: 0.75rem;
}

.activity-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.activity-list li {
  position: relative;
  padding-left: 1.5rem;
  font-size: clamp(0.8125rem, 1.2vw, 0.9375rem);
  line-height: 1.7;
  color: var(--text-secondary);
}

.activity-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 8px;
  height: 8px;
  background: var(--lilac);
  border-radius: 50%;
}

.philosophy-text {
  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-style: italic;
}

.philosophy-pillars {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.pillar {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.875rem;
  background: var(--lilac-soft);
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-full);
  font-size: clamp(0.6875rem, 1.2vw, 0.8125rem);
  font-weight: 600;
  color: var(--lilac-deep);
}

.pillar :deep(svg) {
  color: var(--lilac);
}

.approach-autitude {
  background: var(--lilac-soft);
  border-left: 4px solid var(--lilac);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 1.25rem 1.5rem;
}

.approach-autitude p {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  line-height: 1.8;
  color: var(--text-secondary);
  margin: 0;
}

@media (max-width: 480px) {
  .philosophy-pillars {
    justify-content: center;
  }
}
</style>
