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

//---Project section animation---//

let projectNames = document.getElementsByClassName('project_name');
let header = document.querySelector('.header_projects');
let lines = document.getElementsByClassName('line');
let projectHeading = document.querySelector('.main_headnig');
let description = document.querySelector('.description');
let display = document.querySelector('.project_display');
let panel = document.querySelector('.panel');


let buttonClicked = false;

for (i=0; i<projectNames.length; i++) {
  projectNames[i].addEventListener('click', function() {
    
    panel.classList.remove('close');
    panel.classList.toggle('active');
    panel.classList.toggle('change_text');
    panel.classList.toggle('change_text_twice');
    
    buttonClicked = true;
    console.log(buttonClicked);
    
    if(buttonClicked=== true) {
      console.log('lalala')
    }
    return buttonClicked;
  });
  
}



function socialAppDescritpion() {

  for(i=0; i<lines.length; i++) {
    lines[i].removeAttribute('style');
  }
  header.style.border = '1px solid #7BDCFE';
  lines[0].style.border = '1px solid #7BDCFE';
  projectHeading.style.color = '#7BDCFE';


  display.classList.remove('landing_page_description','wether_app_description');
  display.classList.add('clicked');
  display.classList.add('social_app_description');
  projectHeading.innerText = 'Social-App'; 

  description.innerHTML = "I made the Social-App as part of the assignment during the course. The application has the ability to register (however, after registration, the data is not saved in the API), it is also possible to login and log out. If you are not logged in, 10 posts of random users are displayed on the main page. When authorizing, posts of users are added to which you are subscribed. <br> <span> Technologies: </ span> <br> HTML, CSS, ReactJS, Styled Components"
}

function landingPageDescritpion() {

  for(i=0; i<lines.length; i++) {
    lines[i].removeAttribute('style');
  }
  header.style.border = '1px solid #FFE799';
  lines[1].style.border = '1px solid #FFE799';
  projectHeading.style.color = '#FFE799';

  display.classList.remove('social_app_description','wether_app_description');

  display.classList.add('clicked');
  display.classList.add('landing_page_description');
  projectHeading.innerText = 'Landing-Page';
  description.innerHTML = "I made the Landing-Page as part of the assignment during the course. The application has the ability to register (after registration, the data is not saved in the API), it is also possible to login and log out. If you are not logged in, 10 posts of random users are displayed on the main page. When authorizing, posts of users are added to which you are subscribed. <br> <span> Technologies: </ span> <br> HTML, CSS, ReactJS, Styled Components" 
}

function wetherAppDescritpion() {

  for(i=0; i<lines.length; i++) {
    lines[i].removeAttribute('style');
  }
  header.style.border = '1px solid #FFB496';
  lines[2].style.border = '1px solid #FFB496';
  projectHeading.style.color = '#FFB496';

  display.classList.remove('social_app_description','landing_page_description');

  display.classList.add('clicked');
  display.classList.add('wether_app_description');
  projectHeading.innerText = 'Wether-App';
  description.innerHTML = "The Wether-App application has the ability to register (after registration, the data is not saved in the API), it is also possible to login and log out. If you are not logged in, 10 posts of random users are displayed on the main page. When authorizing, posts of users are added to which you are subscribed. <br> <span> Technologies: </ span> <br> HTML, CSS, ReactJS, Styled Components <br>" 
}

projectNames[0].addEventListener('click', socialAppDescritpion);
projectNames[1].addEventListener('click', landingPageDescritpion);
projectNames[2].addEventListener('click', wetherAppDescritpion);


// if(buttonClicked === false) {

//   for (let i=0; i<projectNames.length; i++){
//     projectNames[i].addEventListener('mouseleave', 
  
//       function removeColor() {
//         header.style.border = '1px solid #4A4A4A'
//         projectHeading.style.color = '#4A4A4A';
        
//         for (let i=0; i<lines.length; i++){
//           lines[i].style.border = '1px solid #4A4A4A'
//           console.log(buttonClicked)
//         }

//       });
//   }
// } 


console.log(buttonClicked)

