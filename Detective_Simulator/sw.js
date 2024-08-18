const cacheName = 'v1';
const staticAssets = [
  '/', 
  '/styles.css', 
  '/script.js', 
  '/game.js', 
  '/index.html', 
  '/favicons/favicon-32x32.png', 
  '/favicons/favicon-16x16.png', 
  '/favicons/favicon.ico', 
  '/src/addressbook.jpg', 
  '/src/addresscard.jpg', 
  '/src/backspace.png', 
  '/src/board.jpg', 
  '/src/button.png', 
  '/src/clipboard.jpg', 
  '/src/detective.mp3', 
  '/src/detective.png',
  '/src/dosje/jpg', 
  '/src/logo_movies.png', 
  '/src/logo_music.png', 
  '/src/logo_news.png',
  '/src/logo_show.png', 
  '/src/logo_sport.png', 
  '/src/movies.png', 
  '/src/music.png', 
  '/src/music_off.png', 
  '/src/music_on.png', 
  '/src/news.png', 
  '/src/newyorktimes.png',
  '/src/old-paper-texture.png', 
  '/src/paper-image.png', 
  '/src/show.jpg', 
  '/src/sport.jpg',
  '/src/TV-off-button.png',
  '/fonts/rosarium.ttf', 
  '/fonts/saNoRules.ttf'
];

self.addEventListener('install', async event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(staticAssets))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
