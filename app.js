// http://www.jomendez.com/2018/06/05/add-home-screen-pwas/


let deferredPrompt;
 
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later on the button event.
  deferredPrompt = e;
// Update UI by showing a button to notify the user they can add to home screen
  // btn.style.display = 'block';
});
 
//button click event to show the promt
/*
btn.addEventListener('click', (e) => {
  // hide our user interface that shows our button
  btn.style.display = 'none';
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the prompt');
      } else {
        console.log('User dismissed the prompt');
      }
      deferredPrompt = null;
    });
});
*/
if('serviceWorker' in navigator){
  console.log('Service Worker supported');
  window.addEventListener('load', () => {
  navigator.serviceWorker
  .register('/serviceworker.js')
  .then(reg => console.log('Service Worker registered'))
  .catch(err => console.log('Service Worker error'))
})
}
