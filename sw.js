/* ============================================================
   Flood2Food — Service Worker (Cache-First / Offline Fallback)
   ============================================================ */

const CACHE_NAME = 'flood2food-v4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './assets/mascot/bimo-avatar.png',
  './assets/screens/02_dashboard_screen.png',
  './assets/screens/03_tasks_screen.png',
  './assets/screens/04_chat_screen.png',
  './assets/screens/06_sensor_log_screen.png',
  './assets/screens/10_spatial_calibration_screen.png',
  './assets/sensor-node.png',
  './assets/gateway.png',
  './assets/qr-download.png',
  './assets/team/dengan-nama.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  // Network-first for navigation requests (HTML)
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).then((res) => {
        var copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
        return res;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Stale-while-revalidate / cache-first for static assets
  e.respondWith(
    caches.match(e.request).then((cached) => {
      var fetchPromise = fetch(e.request).then((networkRes) => {
        if (networkRes && networkRes.status === 200) {
          var copy = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
        }
        return networkRes;
      }).catch(() => null);

      return cached || fetchPromise;
    })
  );
});
