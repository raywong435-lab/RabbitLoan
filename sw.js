const CACHE_NAME = 'loan-helper-v4-20240117';

const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
  // './images/icons/icon-192x192.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
