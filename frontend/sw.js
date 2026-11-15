const CACHE_NAME = 'ms-odyssey-netfirst-v3';
const ASSETS = ['./', './index.html', './css/styles.css', './js/app.js', './manifest.json'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)).catch(() => {})
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// NETWORK-FIRST Strategy: Always fetch latest version from GitHub when online; fallback to cache only when offline!
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' })
      .then((networkRes) => {
        if (networkRes && networkRes.status === 200) {
          const resClone = networkRes.clone();
          caches.open(CACHE_NAME).then((c) => c.put(e.request, resClone)).catch(() => {});
        }
        return networkRes;
      })
      .catch(() => caches.match(e.request))
  );
});
