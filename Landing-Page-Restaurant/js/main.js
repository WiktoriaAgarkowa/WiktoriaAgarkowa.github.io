//---Smooth scroll---//

let btns = document.getElementsByClassName('link');
let about = document.getElementById('about');

console.log(btns)


function aboutButtonClick() {
    about.scrollIntoView({block: "center", behavior: "smooth"});
 }

 btns[0].addEventListener('click', aboutButtonClick);