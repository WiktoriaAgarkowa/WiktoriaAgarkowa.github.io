let sections = document.querySelectorAll('section');
let body = document.getElementById('body');
let footer = document.querySelector('footer');
let header = document.querySelector('.header_full_screen');
let text = document.getElementsByClassName('text');


let projects = document.getElementById('projects');

//---Smooth scroll---//

const anchors = document.querySelectorAll('a[href*="#"]')


for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

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
  let arrowUp = document.querySelector('.arrow_up')

  
  if(isPartiallyVisible(text[0]) == false && isPartiallyVisible(header) == false) {
    arrowUp.style.display = 'block';
  } else {
    arrowUp.style.display = 'none';
  }


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













