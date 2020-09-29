//---Form validation---//

let contactForm = document.getElementById('contact_form');
let formFields = document.getElementsByClassName('input_form');
const error = document.getElementById('error_msg');

const formValidate = (e) => {

  console.log('submit!')


  let emptyField = false;

  for (let i=0; i<formFields.length; i++) {
    if (formFields[i].value === '') {
      emptyField = false;
      formFields[i].classList.add('error');
    } else {
      emptyField = true;
      formFields[i].classList.remove('error');
    }
  }

  if(emptyField) {
    console.log('nie ma błęów')
  } else {
    e.preventDefault();
    error.innerText = 'Please fill in the required fields';
  }
}


contactForm.addEventListener('submit', formValidate);


//---Scroll---//

let about = document.getElementById('about');
let scrlBtn = document.getElementById('scroll_button');

scrlBtn.addEventListener('click', function() {
  about.scrollIntoView({blick: 'start', behavior: 'smooth'})
});

scrlBtn.addEventListener('touchend', function() {
  about.scrollIntoView({blick: 'start', behavior: 'smooth'})
});


//---Start animation---//

let name = document.querySelector('.name_occupation');
let btnStart = document.getElementById('btn_start');
let bg = document.querySelector('.black_background');
let headerFullScreen = document.querySelector('.header_full_screen');
let btnNext = document.querySelector('.second_btn');
let sections = document.querySelectorAll('section');
let body = document.getElementById('body');



btnStart.addEventListener('click', function() {
  name.style.left = '-50%';
  this.style.opacity = '0';
  bg.style.opacity = '0.4';

  setTimeout(function(){ 
    headerFullScreen.style.zIndex = '0';
    about.style.opacity = '1';
  }, 500);
})

btnNext.addEventListener('click', function() {

  headerFullScreen.style.opacity = '0';
  this.style.opacity = '0';
  body.style.display = 'block';
  setTimeout(() => {
    headerFullScreen.style.display = 'none';
    body.style.opacity = '1';
  }, 500);
})



//---Project section animation---//

let projectNames = document.getElementsByClassName('project_name');
let header = document.querySelector('.header_projects');
let lines = document.getElementsByClassName('line');
let projectHeading = document.querySelector('.main_headnig');
let description = document.querySelector('.description');
let display = document.querySelector('.project_display');
let panel = document.querySelector('.panel');
let descriptionSmallScreen = document.getElementsByClassName('body_flex_item_small_screen');
let live = document.querySelector('.live');
let gitHub = document.querySelector('.code');


//---full screen---//

let socAppTxt = "I made the Social-App as part of the assignment during the course. The application has the ability to register (however, after registration, the data is not saved in the API), it is also possible to login and log out. If you are not logged in, 10 posts of random users are displayed on the main page. When authorizing, posts of users are added to which you are subscribed. <br> <br> <span> Technologies: </ span> <br> HTML, CSS, ReactJS, Styled Components, AJAX";

let lanPageTxt = "Landing-Page project which is the hallmark of a sushi restaurant. On the page you can make a table reservation and contact using the form. Some elements are animated with CSS, and reservation information is sent using API. <br> <br> <span> Technologies: </ span> <br> HTML, CSS, SASS, AJAX";


const projectAnimation = (h, indxline, line, heading, classname, name, txt, link,code) => {

  for(i=0; i<lines.length; i++) {
    lines[i].removeAttribute('style');
  }
  header.classList.remove('social_app', 'landing_page');
  header.classList.add(h);
  indxline.style.border = line;
  projectHeading.style.color = heading;

  display.removeAttribute('class');
  display.classList.add ('project_display', 'clicked', classname);
  projectHeading.innerText = name;
  description.innerHTML = txt; 
  live.setAttribute('href', link);
  gitHub.setAttribute('href', code);
}

projectNames[0].addEventListener('click', function() {
  projectAnimation (
   'social_app', lines[0], '1px solid #7BDCFE', '#7BDCFE', 'social_app_description', 'Social-App', socAppTxt, ' ', 'https://github.com/WiktoriaAgarkowa/social-app' 
  )
});
projectNames[1].addEventListener('click', function() {
  projectAnimation (
    'landing_page', lines[1], '1px solid #FFE799', '#FFE799', 'landing_page_description', 'Landing-Page', lanPageTxt, 'https://wiktoriaagarkowa.github.io/Landing-Page-Restaurant/index.html', 'https://github.com/WiktoriaAgarkowa/WiktoriaAgarkowa.github.io/tree/master/Landing-Page-Restaurant' 
  )
});
 

for (i=0; i<projectNames.length; i++) {
  projectNames[i].addEventListener('click', function() {
    
    panel.classList.remove('close');
    panel.classList.add('active');
    
  });

}

//---small screen---//

let content = document.getElementsByClassName('body_flex_item_small_screen')

let names = document.getElementsByClassName('project_name_ss')

for (i = 0; i < projectNames.length; i++) {

  names[i].addEventListener("click", function() {

      for (i=0; i<content.length; i++) {
        content[i].style.maxHeight = null;
      }

      for (i=0; i<projectNames.length; i++) {
        names[i].style.backgroundColor = "transparent";
      }
      
      this.style.backgroundColor = " #7BDCFE"
      
      let panel = this.nextElementSibling;
      
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.scrollIntoView({block: 'center', behavior: 'smooth'});

  });
}





