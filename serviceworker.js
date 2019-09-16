/* https://www.youtube.com/watch?v=ksXwaWHCW6k*/

const cacheName ='me';

const cacheAssets=[
  'index.html',
  'styles.css',
  'app.js'
];
self.addEventListener('install', (e) =>{
  console.log('Service Worker: Installed');
e.waitUntil(
  caches
    .open('cacheName')
    .then(cache => {
      console.log('Service Worker: Caching Files');
      cache.addAll(cacheAssets);
    })
    .then(() => self.skipWaiting())
  );
});
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
/*  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if(cache !== cacheName){
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
    })
  );
})
);*/
});
/*
//Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  
    Notification.requestPermission().then(function(result) {
    console.log(result);
  });
  
  
  const title = 'Simple Title';
  const options = {
  body: 'Simple piece of body text.\nSecond line of body text :)'
};
registration.showNotification(title, options);
  
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request)))
});
*/
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
          console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then((response) => {
                return caches.open(cacheName).then((cache) => {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});
