/* service worker with cache-first strategy */
var CACHE_VERSION = 'v1';
var CACHE_NAME = 'mearn-' + CACHE_VERSION;

var PRECACHE_URLS = [
  'index.html',
  'page1.html',
  'page2.html',
  '404.html',
  'offline.html',
  'base.css',
  'home.css',
  'page1.css',
  'page2.css',
  'app.js',
  'page1.js',
  'page2.js',
  'manifest.json',
  'Mahmoud.png'
];

self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE_URLS);
    }).catch(function(err) { console.error('[SW] Pre-cache failed:', err); })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    }).then(function() { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;
  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(handleFetch(event.request));
});

function handleFetch(request) {
  return caches.match(request).then(function(cached) {
    if (cached) return cached;
    return fetch(request).then(function(response) {
      if (response.status === 404) return caches.match('404.html');
      if (response.ok) {
        caches.open(CACHE_NAME).then(function(cache) { cache.put(request, response.clone()); });
      }
      return response;
    }).catch(function() {
      if (request.mode === 'navigate') return caches.match('offline.html');
      return new Response('Offline', { status: 503 });
    });
  });
}
