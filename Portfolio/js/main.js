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

console.log(formFields);

contactForm.addEventListener('submit', formValidate);

//---Project section animation---//

let projectNames = document.getElementsByClassName('project_name');
let header = document.querySelector('.header_projects');
let lines = document.getElementsByClassName('line');
let projectHeading = document.querySelector('.main_headnig');
let description = document.querySelector('.description');

function socialApp() {
  console.log('najechano')
  header.style.border = '1px solid #7BDCFE';
  lines[0].style.border = '1px solid #7BDCFE';
  projectHeading.style.color = '#7BDCFE';
}

function landingPage() {
  console.log('najechano')
  header.style.border = '1px solid #FFE799';
  lines[1].style.border = '1px solid #FFE799';
  projectHeading.style.color = '#FFE799';
}

function wetherApp() {
  console.log('najechano')
  header.style.border = '1px solid #FFB496';
  lines[2].style.border = '1px solid #FFB496';
  projectHeading.style.color = '#FFB496';
}

function removeColor() {
  console.log('zjechano')
  header.style.border = '1px solid #4A4A4A'
  projectHeading.style.color = '#4A4A4A';
  
  for (let i=0; i<lines.length; i++){
    lines[i].style.border = '1px solid #4A4A4A'
  }
}

for (let i=0; i<projectNames.length; i++){
  projectNames[i].addEventListener('mouseleave', removeColor )
}

projectNames[0].addEventListener('mouseenter', socialApp)
projectNames[1].addEventListener('mouseenter', landingPage)
projectNames[2].addEventListener('mouseenter', wetherApp)


console.log(projectNames)



