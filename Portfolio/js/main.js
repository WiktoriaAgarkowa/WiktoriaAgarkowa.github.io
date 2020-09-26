//---Form valiation---//

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


//---Project section animation---//

let projectNames = document.getElementsByClassName('project_name');
let header = document.querySelector('.header_projects');
let lines = document.getElementsByClassName('line');
let projectHeading = document.querySelector('.main_headnig');
let description = document.querySelector('.description');
let display = document.querySelector('.project_display');
let panel = document.querySelector('.panel');
let descriptionSmallScreen = document.getElementsByClassName('body_flex_item_small_screen');



let d = document.documentElement;

let clientWidth = d.clientWidth;

console.log(header);




//---Clicked names in full screen---//

let socAppTxt = "I made the Social-App as part of the assignment during the course. The application has the ability to register (however, after registration, the data is not saved in the API), it is also possible to login and log out. If you are not logged in, 10 posts of random users are displayed on the main page. When authorizing, posts of users are added to which you are subscribed. <br> <br> <span> Technologies: </ span> <br> HTML, CSS, ReactJS, Styled Components, AJAX";

let lanPageTxt = "Landing-Page project which is the hallmark of a sushi restaurant. On the page you can make a table reservation and contact using the form. Some elements are animated with CSS, and reservation information is sent using API. <br> <br> <span> Technologies: </ span> <br> HTML, CSS, SASS, AJAX";

let weathAppTxt = "The Wether-App application has the ability to register (after registration, the data is not saved in the API), it is also possible to login and log out. If you are not logged in, 10 posts of random users are displayed on the main page. When authorizing, posts of users are added to which you are subscribed. <br> <br> <span> Technologies: </ span> <br> HTML, CSS, ReactJS, Styled Components <br>";

const projectAnimation = (h, indxline, line, heading, classname, name, txt) => {
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
}

projectNames[0].addEventListener('click', function() {
  projectAnimation (
   'social_app', lines[0], '1px solid #7BDCFE', '#7BDCFE', 'social_app_description', 'Social-App', socAppTxt 
  )
});
projectNames[1].addEventListener('click', function() {
  projectAnimation (
    'landing_page', lines[1], '1px solid #FFE799', '#FFE799', 'landing_page_description', 'Landing-Page', lanPageTxt 
  )
});
 

let buttonClicked = false;

for (i=0; i<projectNames.length; i++) {
  projectNames[i].addEventListener('click', function() {
    
    panel.classList.remove('close');
    panel.classList.add('active');

    
    buttonClicked = true;
    console.log(buttonClicked);
    
  });

}


//---Small-screen settings---//

console.log(descriptionSmallScreen)

if(header.classList.contains('header_projects')) {
  console.log('klasa sprawdzona')
}

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





