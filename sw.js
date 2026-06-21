const CACHE_NAME = 'import-lm-sport-v4';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
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
  '/images/icon-512.png',
  '/images/jimbra-logo-sm.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
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
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});