//---Smooth scroll---//

let btns = document.getElementsByClassName('link');
let about = document.getElementById('about');
let menu = document.getElementById('menu');
let team = document.getElementById('team');
let blog = document.getElementById('blog')

console.log(btns)


function aboutButtonClick() {
    about.scrollIntoView({block: "center", behavior: "smooth"});
 }

 btns[0].addEventListener('click', aboutButtonClick);


function ButtonClick(section) {
    section.scrollIntoView({behavior: "smooth"});
 }

 btns[2].addEventListener('click', function(){ButtonClick(menu)});
 btns[1].addEventListener('click', function(){ButtonClick(team)});
 btns[3].addEventListener('click', function(){ButtonClick(blog)});

 //---Scroll Top---//

//  let btnScroll = document.querySelector('.scroll');
//  console.log(btnScroll)

function scrollTop() {
    window.scrollTo(0,0)
}
//  btnScroll.addEventListener('click', scrollTop)

 
