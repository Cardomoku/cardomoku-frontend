const CACHE_NAME = 'cardomoku-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/static/fonts/KOHIBaeumOTF.otf',
  '/static/images/kakao_login_button.png',
  '/static/icons/icon-192x192.png',
  '/static/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
}); 