//---Smooth scroll---//

let btns = document.getElementsByClassName('link');
let about = document.getElementById('about');
let menu = document.getElementById('menu');
let team = document.getElementById('team');

console.log(btns)


function aboutButtonClick() {
    about.scrollIntoView({block: "center", behavior: "smooth"});
 }

 btns[0].addEventListener('click', aboutButtonClick);


function menuButtonClick() {
    menu.scrollIntoView({behavior: "smooth"});
 }

 btns[1].addEventListener('click', menuButtonClick);

 function teamButtonClick() {
    team.scrollIntoView({behavior: "smooth"});
 }

 btns[2].addEventListener('click', teamButtonClick);