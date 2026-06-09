<script setup>
const { email } = useContact()
const siteBase = 'https://autitude.com.br'

useHead({
  title: 'Política de Privacidade — LGPD | Autitude - Desenvolvimento e Ação Humana',
  meta: [
    { name: 'description', content: 'Política de Privacidade da Autitude - Desenvolvimento e Ação Humana. Coleta, uso e proteção de dados pessoais conforme a LGPD (Lei Geral de Proteção de Dados).' },
    { name: 'keywords', content: 'política de privacidade, LGPD, proteção de dados, autitude, dados pessoais, consentimento' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Política de Privacidade — LGPD | Autitude' },
    { property: 'og:description', content: 'Política de Privacidade da Autitude. Coleta, uso e proteção de dados pessoais conforme a LGPD.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${siteBase}/privacidade` }
  ],
  link: [
    { rel: 'canonical', href: `${siteBase}/privacidade` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Política de Privacidade — Autitude',
        description: 'Política de Privacidade da Autitude. Coleta, uso e proteção de dados pessoais conforme a LGPD.',
        url: `${siteBase}/privacidade`,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Autitude - Desenvolvimento e Ação Humana',
          url: siteBase
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: siteBase },
          { '@type': 'ListItem', position: 2, name: 'Privacidade', item: `${siteBase}/privacidade` }
        ]
      })
    }
  ]
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="privacy">
    <section class="section hero-section">
      <div class="container">
        <div class="section-header">
          <h1>Política de Privacidade</h1>
          <p>Última atualização: {{ currentYear }}</p>
        </div>

        <div class="privacy-content">
          <article class="privacy-card">
            <h2>1. Coleta de Informações</h2>
            <p>
              A Autitude coleta informações pessoais fornecidas por você através dos formulários 
              de contato e agendamento, incluindo: nome, telefone, e-mail e informações sobre a criança ou adolescente.
            </p>
          </article>

          <article class="privacy-card">
            <h2>2. Uso das Informações</h2>
            <p>As informações coletadas são utilizadas exclusivamente para:</p>
            <ul>
              <li>Contato para agendamento de consultas</li>
              <li>Comunicação sobre serviços e horários</li>
              <li>Melhoria dos nossos serviços</li>
            </ul>
          </article>

          <article class="privacy-card">
            <h2>3. Proteção de Dados</h2>
            <p>
              Implementamos medidas de segurança adequadas para proteger suas informações pessoais 
              contra acesso não autorizado, alteração ou divulgação.
            </p>
          </article>

          <article class="privacy-card">
            <h2>4. Compartilhamento</h2>
            <p>
              Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário 
              para o cumprimento de obrigações legais ou prestação de serviços em nosso nome.
            </p>
          </article>

          <article class="privacy-card">
            <h2>5. Seus Direitos</h2>
            <p>
              Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. 
              Para exercer esses direitos, entre em contato conosco.
            </p>
          </article>

          <article class="privacy-card">
            <h2>6. Contato</h2>
            <p>
              Para questões sobre esta política de privacidade, entre em contato conosco 
              através do e-mail {{ email }} ou pelo WhatsApp.
            </p>
          </article>
        </div>

        <div class="text-center mt-8">
          <p style="color: var(--text-secondary); margin-bottom: 1rem;">💜 Cuidamos de pessoas. Potencializamos possibilidades.</p>
          <NuxtLink to="/agendar" class="btn btn-primary">
            Agendar Consulta
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  padding-top: var(--space-section-top);
}

.section-header {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 3rem;
}

.section-header h1 {
  margin-bottom: 0.5rem;
}

.section-header p {
  font-size: 0.9375rem;
  color: var(--text-light);
}

.privacy-content {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.privacy-card {
  background: var(--surface);
  padding: 1.5rem 2rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xs);
}

.privacy-card h2 {
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
  color: var(--lilac-deep);
}

.privacy-card p {
  color: var(--text-secondary);
  line-height: 1.7;
}

.privacy-card ul {
  margin-top: 0.75rem;
  padding-left: 1.25rem;
}

.privacy-card li {
  color: var(--text-secondary);
  margin-bottom: 0.375rem;
}

.mt-8 {
  margin-top: 2rem;
}

.text-center {
  text-align: center;
}
</style>