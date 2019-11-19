
   //  Page Offline accessible 
   
    if('serviceWorker' in navigator){
	    window.addEventListener('load', () => {
                navigator.serviceWorker.register('../serviceworker.js')
                                       .then(reg => console.log('Service Worker registered'))
                                       .catch(err => console.log('Service Worker registration failed'))
	    });
    }
