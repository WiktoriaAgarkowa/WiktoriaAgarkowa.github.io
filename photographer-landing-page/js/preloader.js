window.onload = function () {
    let body = document.body;

    body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      body.classList.add('loaded');
      body.classList.remove('loaded_hiding');
}, 500);
}
let video = document.querySelector('video')

function playVideo (e) {
    if(video.readyState >= 3) {
        console.log('wideo gra')
    }
}

video.addEventListener('loadeddata', playVideo)

