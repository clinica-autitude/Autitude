<script setup lang="ts">
import { Stethoscope, Award, GraduationCap } from 'lucide-vue-next'
</script>

<template>
  <div class="juliana-hero">
    <div class="hero-visual">
      <div class="visual-shape"></div>
      <div class="visual-accent"></div>
      <div class="visual-ring"></div>
    </div>
    <div class="hero-content">
      <span class="hero-tag texture-hd">Fundadora & Terapeuta Ocupacional</span>
      <h2>Dra. Juliana Mariani</h2>
      <p class="hero-role">Terapeuta Ocupacional &middot; CREFITO 20083-TO</p>
      <p class="hero-tagline">Fundadora da Autitude Desenvolvimento e Ação Humana</p>
      <div class="hero-badges">
        <span class="badge">
          <Stethoscope :size="16" />
          25+ anos de experiência
        </span>
        <span class="badge">
          <Award :size="16" />
          Certificação USC
        </span>
        <span class="badge">
          <GraduationCap :size="16" />
          Pós-graduada em ABA
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.juliana-hero {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: start;
}

.hero-visual {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 0.5rem;
}

.visual-shape {
  width: clamp(120px, 16vw, 180px);
  height: clamp(120px, 16vw, 180px);
  background: linear-gradient(135deg, var(--lilac-soft) 0%, var(--lilac-light) 100%);
  border-radius: 50%;
}

.visual-accent {
  position: absolute;
  width: 90px;
  height: 90px;
  background: var(--gradient-primary);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  opacity: 0.3;
  animation: morphShape 8s ease-in-out infinite;
}

.visual-ring {
  position: absolute;
  width: clamp(140px, 18vw, 200px);
  height: clamp(140px, 18vw, 200px);
  border: 2px solid var(--lilac-light);
  border-radius: 50%;
  opacity: 0.4;
  animation: pulseRing 4s ease-in-out infinite;
}

@keyframes morphShape {
  0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
}

@keyframes pulseRing {
  0%, 100% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.05); opacity: 0.2; }
}

.hero-content h2 {
  font-size: clamp(1.4rem, 3vw, 1.75rem);
  margin-bottom: 0.5rem;
}

.hero-tag {
  display: inline-block;
  padding: 0.375rem 1rem;
  background: var(--lilac-soft);
  border: 1px solid var(--lilac-light);
  border-radius: var(--radius-full);
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  font-weight: 600;
  color: var(--lilac-deep);
  margin-bottom: 1rem;
}

.hero-role {
  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
  color: var(--lilac-deep);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.hero-tagline {
  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.badge {
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

.badge :deep(svg) {
  color: var(--lilac);
}

@media (max-width: 900px) {
  .juliana-hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-visual {
    order: -1;
    justify-content: center;
  }

  .hero-badges {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .visual-shape {
    width: 120px;
    height: 120px;
  }

  .visual-accent {
    width: 70px;
    height: 70px;
  }

  .visual-ring {
    width: 140px;
    height: 140px;
  }
}

@media (max-width: 480px) {
  .hero-content h2 {
    font-size: clamp(1.125rem, 5vw, 1.375rem);
  }

  .hero-role,
  .hero-tagline {
    font-size: 0.875rem;
  }

  .badge {
    font-size: 0.6875rem;
    padding: 0.25rem 0.625rem;
  }
}
</style>
