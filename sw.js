const CACHE_NAME = 'import-lm-sport-v26';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.js',
  '/images/ecuador.png',
  '/images/argentina.png',
  '/images/brasil.png',
  '/images/colombia.png',
  '/images/mexico.png',
  '/images/espana.png',
  '/images/realmadrid.png',
  '/images/barcelona.png',
  '/images/psg.png',
  '/images/barcelonasc.png',
  '/images/hero-jerseys.png',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/apple-touch-icon.png',
  '/images/favicon.ico',
  '/images/favicon-32.png',
  '/images/favicon-16.png',
  '/images/logo-import-lm-sport.jpg',
  '/images/catalogo-completo.jpg',
  '/images/jimbra-logo-sm.png',
  '/images/jimbra-logo.png',
  '/images/jimbra-text-logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.warn('SW cache error:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request).catch(() => caches.match('/index.html')))
  );
});
