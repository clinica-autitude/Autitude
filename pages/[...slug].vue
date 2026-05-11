<script setup>
useHead({
  title: '404 - Página Não Encontrada | Autitude',
  meta: [
    { name: 'description', content: 'Página não encontrada. Volte para a página inicial.' }
  ]
})
</script>

<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content">
        <div class="error-visual">
          <span class="error-code">404</span>
        </div>
        <h1>Página Não Encontrada</h1>
        <p>Desculpe, a página que você está procurando não existe ou foi movida.</p>
        <div class="error-actions">
          <NuxtLink to="/" class="btn btn-primary btn-lg">
            Voltar ao Início
          </NuxtLink>
          <NuxtLink to="/contato" class="btn btn-secondary btn-lg">
            Fale Conosco
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--space-section-top);
}

.error-content {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.error-visual {
  margin-bottom: 2rem;
}

.error-code {
  font-size: 8rem;
  font-weight: 800;
  line-height: 1;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h1 {
  margin-bottom: 1rem;
}

p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

.error-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .error-code {
    font-size: 5rem;
  }

  .error-actions {
    flex-direction: column;
  }

  .error-actions .btn {
    width: 100%;
  }
}
</style>
