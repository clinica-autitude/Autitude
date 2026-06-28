<script setup lang="ts">
import { Briefcase, Heart, Baby, Accessibility } from 'lucide-vue-next'

const milestones = [
  {
    icon: Heart,
    title: 'Início na Saúde',
    text: 'Atuou como auxiliar de enfermagem em pronto-socorro e unidades da rede pública de saúde, fortalecendo sua visão humanizada do cuidado.'
  },
  {
    icon: Briefcase,
    title: 'Graduação em Terapia Ocupacional',
    text: 'Graduada em Terapia Ocupacional desde 2001, com atuação em diferentes áreas da saúde ao longo de mais de 25 anos de carreira.'
  },
  {
    icon: Accessibility,
    title: 'Saúde Mental e Deficiência',
    text: 'Trabalhou na saúde mental com adolescentes, jovens e adultos; desenvolveu projetos de arteterapia em comunidades vulneráveis e atuou em instituições especializadas.'
  },
  {
    icon: Baby,
    title: 'Neurodesenvolvimento Infantil',
    text: 'Concentrou sua atuação na estimulação precoce de bebês, no acompanhamento de crianças e adolescentes neurodivergentes e na intervenção voltada à autonomia e qualidade de vida.'
  }
]
</script>

<template>
  <div class="journey">
    <h3 class="journey-title">Trajetória Profissional</h3>
    <div class="timeline">
      <div
        v-for="(item, index) in milestones"
        :key="index"
        class="timeline-item"
      >
        <div class="timeline-icon-wrapper">
          <component :is="item.icon" :size="20" class="timeline-icon" />
        </div>
        <div class="timeline-content">
          <h4>{{ item.title }}</h4>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.journey {
  padding-top: 0.5rem;
}

.journey-title {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--lilac-deep);
  margin-bottom: 1.5rem;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, var(--lilac-light) 0%, var(--lilac-soft) 100%);
  border-radius: 1px;
}

.timeline-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  position: relative;
}

.timeline-icon-wrapper {
  position: absolute;
  left: -2rem;
  top: 2px;
  width: 32px;
  height: 32px;
  background: var(--lilac-soft);
  border: 2px solid var(--lilac-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.timeline-icon {
  color: var(--lilac);
}

.timeline-content h4 {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: var(--text);
  margin-bottom: 0.25rem;
}

.timeline-content p {
  font-size: clamp(0.8125rem, 1.2vw, 0.9375rem);
  line-height: 1.7;
  color: var(--text-secondary);
}

@media (max-width: 480px) {
  .timeline {
    padding-left: 1.5rem;
  }

  .timeline-icon-wrapper {
    left: -1.5rem;
    width: 28px;
    height: 28px;
  }

  .timeline-icon {
    width: 16px;
    height: 16px;
  }
}
</style>
