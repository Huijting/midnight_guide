// sw.js — WoW Midnight Guide — Service Worker v5.0
const CACHE = 'midnight-guide-v6';
const ASSETS = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './data/dungeons/season1.js',
  './data/professions/skinning.js',
  './data/professions/leatherworking.js',
  './data/professions/mining.js',
  './data/professions/herbalism.js',
  './data/professions/alchemy.js',
  './data/professions/blacksmithing.js',
  './data/professions/enchanting.js',
  './data/professions/engineering.js',
  './data/professions/inscription.js',
  './data/professions/jewelcrafting.js',
  './data/professions/tailoring.js',
  './data/professions/cooking.js',
  './data/professions/fishing.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
