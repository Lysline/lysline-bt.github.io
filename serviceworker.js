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

/*
self.oninstall = function(event){
  event.waitUntil(  caches.open('static')
    .then(function(cache) {
      cache.addAll([
      //  '/',
        'index.html',
        'app.js',
        'style.css',
        'https://fonts.googleapis.com/css?family=Tangerine',
        'images/My_icon_192x192'
      //  'https://console.cloud.google.com/apis/library?pli=1'
      ]);

    })

  );
};*/
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
self.onactivate = function(){
  console.log('activated!');
}
self.onfetch = function(event){
  event.respondWith(
    caches.match(event.request)
    .then(function(response){
      if(response){
        return response;
      }else{
        return fetch(event.request);
      }
    })
  );
};*/
//Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request)))
});
