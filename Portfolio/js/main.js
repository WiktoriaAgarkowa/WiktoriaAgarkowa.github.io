
//---Start animation---//

let name = document.querySelector('.name_occupation');
let btnStart = document.getElementById('btn_start');
let bg = document.querySelector('.black_background');
let headerFullScreen = document.querySelector('.header_full_screen');
let btnNext = document.querySelector('.second_btn');
let sections = document.querySelectorAll('section');
let body = document.getElementById('body');
let footer = document.querySelector('footer');
console.log(sections)


btnStart.addEventListener('click', function() {
  name.style.left = '-50%';
  this.style.opacity = '0';
  bg.style.opacity = '0.4';

  setTimeout(function(){ 
    headerFullScreen.style.zIndex = '0';
    about.style.opacity = '1';
  }, 500);
})

let text = document.getElementsByClassName('text');
console.log(text);

let projects = document.getElementById('projects');


btnNext.addEventListener('click', function() {

  headerFullScreen.style.opacity = '0';
  this.style.opacity = '0';

  setTimeout(() => {
  for(i=0; i<text.length;i++){
    text[i].style.color = '#131212';
  }
  
  for(i=1; i<sections.length; i++) {
    sections[i].style.display = 'block';
  }
  
  for (const section of sections) {
    section.style.opacity = '1'
  }
  footer.style.display = "block"
  }, 300);
})

//---Project Animation---//

let html = document.querySelector('html');
let heading = document.getElementsByClassName('heading_progect');


let isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          headingShow(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
 
document.addEventListener("DOMContentLoaded", headingShow, false);


function headingShow() {

  let sources = document.getElementsByClassName('sources');


  if(isPartiallyVisible(sources[1])) {

    html.classList.add('black');

    for(i=0; i<heading.length; i++) {
      heading[i].classList.add('color_dark');
    }
    
    for(i=4; i<text.length;i++){
      text[i].style.color = '#f3f3f3'
    }

    for(i=0; i<sources.length; i++) {
      let link = sources[i].children;

      for (const l of link) {
        l.style.color = '#f3f3f3'
      }
    }
  } else {

      html.classList.remove('black');

      for(i=0; i<heading.length; i++) {
        heading[i].classList.remove('color_dark');
      }
      for(i=4; i<text.length;i++){
        text[i].style.color = '#131212'
      }

      for(i=0; i<sources.length; i++) {
        let link = sources[i].children;
    
        for (const l of link) {
          l.style.color = '#131212'
        }
      }
  }

  for(i=0; i<heading.length; i++) {

    if(isPartiallyVisible(heading[i])) {
      heading[i].classList.add('active');
    } else {
      heading[i].classList.remove('active');
    }

  }

}


function isPartiallyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;

  return ((top + height > 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;

  return ((top > 0) && (bottom <= window.innerHeight));

}












