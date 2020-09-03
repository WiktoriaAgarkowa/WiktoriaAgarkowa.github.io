//---Form valiation---//

let contactForm = document.getElementById('contact_form');

const formValidate = (e) => {

  console.log('submit!')

  let formFields = document.getElementsByClassName('input_form');
  const error = document.getElementById('error_msg');

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