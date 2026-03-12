// ============================================================
// Service Worker — WoW Midnight Guide
// Cache versie verhogen = oude cache automatisch gewist
// ============================================================

const CACHE_NAME = 'midnight-guide-v7';

const PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.js',
  '/data/dungeons/season1.js',
  '/data/professions/alchemy.js',
  '/data/professions/blacksmithing.js',
  '/data/professions/cooking.js',
  '/data/professions/enchanting.js',
  '/data/professions/engineering.js',
  '/data/professions/fishing.js',
  '/data/professions/herbalism.js',
  '/data/professions/inscription.js',
  '/data/professions/jewelcrafting.js',
  '/data/professions/kp_data.js',
  '/data/professions/kp_sources.js',
  '/data/professions/leatherworking.js',
  '/data/professions/mining.js',
  '/data/professions/skinning.js',
  '/data/professions/tailoring.js',
  '/data/help.js',
  '/data/specs/bm_hunter.js',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

// Install: cache alle bestanden
self.addEventListener('install', event => {
  self.skipWaiting(); // activeer meteen, wacht niet op oude tab te sluiten
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
});

// Activate: verwijder ALLE oude caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Oude cache verwijderd:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim()) // neem direct controle over alle tabs
  );
});

// Fetch: cache-first, netwerk als fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        return response;
      });
    })
  );
});
