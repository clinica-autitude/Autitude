const CACHE_NAME = 'autitude-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/sobre',
  '/servicos',
  '/equipe',
  '/contato',
  '/agendar',
  '/faq',
  '/privacidade',
  '/neuropsicologia',
  '/neuropsicopedagogia',
  '/fonoaudiologia',
  '/terapia-ocupacional',
  '/terapia-aba',
  '/blog',
  '/blog/terapia-ocupacional-infantil',
  '/blog/integracao-sensorial',
  '/blog/neuropsicologia-infantil',
  '/blog/neuropsicopedagogia',
  '/blog/fonoaudiologia-infantil',
  '/blog/autismo-terapia',
  '/blog/tdah-tratamento',
  '/blog/terapia-aba',
  '/blog/dificuldades-aprendizagem',
  '/blog/desenvolvimento-infantil',
  '/blog/neurodivergencia',
  '/blog/terapia-ocupacional-adulto',
  '/blog/laudo-neuropsicologico',
  '/blog/avaliacao-desenvolvimento',
  '/blog/escola-inclusiva',
  '/blog/autismo-adulto',
  '/blog/regulacao-emocional',
  '/blog/habilidades-sociais',
  '/blog/alimentacao-neurodivergencia',
  '/blog/exercicios-fisicos',
  '/blog/terapia-familiar',
  '/blog/acolhimento-familia',
  '/blog/inclusao-social',
  '/blog/comunicacao-alternativa',
  '/blog/deficiencia-aprendizagem',
  '/blog/ansiedade-infantil',
  '/blog/sono-neurodivergencia',
  '/blog/brincadeira-desenvolvimento',
  '/blog/diagnostico-autismo-idade-escolar',
  '/blog/diferenca-autismo-tdah-infancia',
  '/blog/avaliacao-neuropsicologica-processo',
  '/blog/birra-ou-crise-sensorial',
  '/blog/comportamento-opositor-tod-escola',
  '/blog/aba-humanizada-estereotipias',
  '/blog/marcos-fala-infantil',
  '/blog/seletividade-alimentar-autismo',
  '/blog/integracao-sensorial-comunicacao-criancas-nao-verbais',
  '/blog/cobertura-plano-saude-aba-fono',
  '/blog/liminar-tratamento-autismo',
  '/blog/vinculo-terapeutico-relatorios-evolucao',
  '/favicon-png.svg',
  '/small-logo.png',
  '/full-logo.png',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests
  if (!request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached version, fetch update in background
        event.waitUntil(
          fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, networkResponse);
              });
            }
          }).catch(() => {})
        );
        return cachedResponse;
      }

      return fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback for navigation requests
        if (request.mode === 'navigate') {
          return caches.match('/index.html');
        }
        return new Response('Offline', { status: 503 });
      });
    })
  );
});
