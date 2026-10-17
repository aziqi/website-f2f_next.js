/* ============================================================
   Flood2Food — Service Worker (Cache-First / Offline Fallback)
   ============================================================ */

const CACHE_NAME = 'flood2food-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './assets/mascot/bimo-avatar.png',
  './assets/mascot/bimo-front.png',
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
  e.respondWith(
    caches.match(e.request).then((cached) => {
      return cached || fetch(e.request).then((res) => {
        return caches.open(CACHE_NAME).then((cache) => {
          if (e.request.url.startsWith('http')) {
            cache.put(e.request, res.clone());
          }
          return res;
        });
      });
    }).catch(() => {
      if (e.request.mode === 'navigate') {
        return caches.match('./index.html');
      }
    })
  );
});
