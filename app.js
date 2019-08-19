if('serviceWorker' in navigator){
  console.log('Service Worker supported');
  window.addEventListener('load', () => {
  navigator.serviceWorker
  .register('/serviceworker.js')
  .then(reg => console.log('Service Worker registered'))
  .catch(err => console.log('Service Worker error'))
})
}
const result_p = document.querySelector(".result>p");
const good_div = document.getElementById("g");

function clickedon(smiley){
  if(smiley=="g")
    result_p.innerHTML="Hello World!";
  }
function main(){
good_div.addEventListener('click', function(){
  clickedon("g");
})
}
main();
//);}
