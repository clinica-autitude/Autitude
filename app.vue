<script setup>
const currentYear = new Date().getFullYear()

const config = {
  phone: '5512991968683',
  whatsappUrl: 'https://wa.me/5512991968683',
  instagramUrl: 'https://www.instagram.com/clinicaautitude'
}
</script>

<template>
  <div class="app">
    <a href="#main" class="skip-link">Pular para o conteúdo principal</a>
    <AccessibilityWidget />
    <SplashCursor />
    
    <div class="ambient-bg"></div>

    <div class="menu-overlay"></div>

    <nav class="navbar">
      <div class="nav-container">
        <NuxtLink to="/" class="logo">
          <img src="/small-logo.png" alt="Autitude" class="logo-img">
          <span class="logo-text">Autitude</span>
        </NuxtLink>
        
        <div class="nav-links">
          <NuxtLink to="/" class="nav-link">Início</NuxtLink>
          <NuxtLink to="/sobre" class="nav-link">Sobre</NuxtLink>
          <NuxtLink to="/servicos" class="nav-link">Serviços</NuxtLink>
          <NuxtLink to="/equipe" class="nav-link">Equipe</NuxtLink>
          <NuxtLink to="/contato" class="nav-link">Contato</NuxtLink>
          <NuxtLink to="/agendar" class="btn btn-primary btn-sm">Agendar</NuxtLink>
          <ThemeSwitcher />
        </div>
        
        <button class="menu-toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <main id="main">
      <NuxtPage />
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <NuxtLink to="/" class="logo">
              <img src="/small-logo.png" alt="Autitude" class="logo-img">
              <span class="logo-text">Autitude</span>
            </NuxtLink>
            <p>Clínica especializada em Terapia Ocupacional e Integração Sensorial em Pindamonhangaba-SP.</p>
          </div>
          
          <div class="footer-links">
            <h4>Navegação</h4>
            <NuxtLink to="/">Início</NuxtLink>
            <NuxtLink to="/sobre">Sobre Nós</NuxtLink>
            <NuxtLink to="/servicos">Serviços</NuxtLink>
            <NuxtLink to="/equipe">Equipe</NuxtLink>
          </div>
          
          <div class="footer-services">
            <h4>Atendimento</h4>
            <NuxtLink to="/agendar">Agendamento</NuxtLink>
            <NuxtLink to="/contato">Contato</NuxtLink>
            <a :href="config.whatsappUrl">WhatsApp</a>
            <a :href="config.instagramUrl" target="_blank" rel="noopener">Instagram</a>
          </div>
          
          <div class="footer-contact">
            <h4>Localização</h4>
            <p>Rua Major José dos Santos Moreira, 328</p>
            <p>Pindamonhangaba, SP</p>
            <p>Seg a Sex: 8h às 18h</p>
            <div class="footer-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.52123456789!2d-45.45!3d-22.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUxJzAwLjAiUyA0NcKwMjcnMDAuMCJF!5e0!3m2!1spt-BR!2sbr!4v1600000000000"
                width="100%" 
                height="120" 
                style="border:0;border-radius:8px;" 
                allowfullscreen="" 
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Autitude. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
}

.ambient-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: var(--background);
  opacity: 0.7;
}

.skip-link {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: 0 0 8px 8px;
  text-decoration: none;
  font-weight: 600;
  z-index: 10000;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 0;
  outline: 3px solid var(--accent);
  outline-offset: 2px;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.25rem 0;
  transition: all 0.4s var(--ease-smooth);
  background: var(--surface);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: var(--shadow-xs);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 0.625rem);
  text-decoration: none;
  font-weight: 700;
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  color: var(--text-dark);
}

.logo-img {
  width: clamp(1.5rem, 4vw, 1.8rem);
  height: clamp(1.5rem, 4vw, 1.8rem);
  border-radius: 50%;
  object-fit: cover;
}

.logo-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s var(--ease-smooth);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.btn-sm {
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.3s var(--ease-smooth);
}

main {
  min-height: 100vh;
}

.footer {
  background: var(--surface);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
  border-top: 1px solid var(--border);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand .logo {
  margin-bottom: 1rem;
  display: inline-flex;
}

.footer-brand .logo-img {
  width: 1.8rem;
  height: 1.8rem;
  object-fit: cover;
}

.footer-brand p {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
  line-height: 1.6;
}

.footer-links h4,
.footer-services h4,
.footer-contact h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-links a,
.footer-services a,
.footer-contact p {
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9375rem;
  margin-bottom: 0.625rem;
  transition: color 0.2s;
}

.footer-map {
  margin-top: 0.75rem;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.footer-links a:hover,
.footer-services a:hover {
  color: var(--primary);
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
  text-align: center;
}

.footer-bottom p {
  font-size: 0.875rem;
  color: var(--text-light);
}

.menu-overlay {
  display: none;
}

@media (max-width: 900px) {
  .menu-toggle {
    display: flex;
    z-index: 1001;
  }
  
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 85vw;
    max-width: 320px;
    height: 100vh;
    background: var(--white);
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem;
    gap: 0.5rem;
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.15);
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .nav-links.nav-active {
    right: 0;
  }
  
  .nav-link {
    padding: 0.75rem 0;
    font-size: 1.1rem;
    width: 100%;
    border-bottom: 1px solid var(--border);
  }

  .menu-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    z-index: 999;
  }
  
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    text-align: left;
  }
  
  .footer-brand {
    grid-column: span 2;
    text-align: center;
  }
  
  .footer-links,
  .footer-services,
  .footer-contact {
    text-align: center;
  }
}

@media (max-width: 500px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .footer-brand {
    grid-column: auto;
  }
  
  .footer-brand p {
    text-align: center;
  }
}
</style>