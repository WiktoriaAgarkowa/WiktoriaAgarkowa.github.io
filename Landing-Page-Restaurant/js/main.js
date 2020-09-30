//---Preloader---//

let body = document.body;

window.onload = function () {
    body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      body.classList.add('loaded');
      body.classList.remove('loaded_hiding');
    }, 500);
  }


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

 let btnScroll = document.getElementById('logo');

function scrollTop() {
    window.scrollTo(0,0)
}

btnScroll.addEventListener('click', scrollTop) 


//---Hide menu---//

 document.getElementById('hamburger').addEventListener('click', function(){
    document.getElementsByClassName('hide_menu')[0].classList.toggle('open')
});

document.getElementById('close').addEventListener('click', function(){
    document.getElementsByClassName('hide_menu')[0].classList.toggle('open')
})

//---Pop Up---//

let btnBook = document.querySelector('.book');
let popUp = document.getElementById('pop_up');
let btnClose = document.getElementById('close_pop_up');
const uwaga = document.getElementById('uwaga1');

console.log(btnClose)

const popUpActive = () => {
    popUp.classList.remove('hidden')
   
}

const popUpNoActive = () => {
    popUp.classList.add('hidden')
    uwaga.innerText = '';
}

btnBook.addEventListener('click', popUpActive);
btnClose.addEventListener('click', popUpNoActive);

//---Form validation---//

let formReserve = document.getElementById('form_reserve');

const createReservation = (reservation) => {
    const uwaga = document.getElementById('uwaga1');
    

    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
        
        headers: {
            'Content-Type': 'application/json'
        }, 
         mode: 'cors',
         method: 'POST',

         body: JSON.stringify(reservation)
    })
    .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);
            uwaga.classList.add('send');
            uwaga.style.color = "#000"
            uwaga.innerText = `Thanks ${resJSON.appointment.name}. 
            You have reserved a table on ${resJSON.appointment.date} at ${resJSON.appointment.time}`
            formReserve.reset();
        })

        console.log(reservation);
}


const reservationValidate = (event) => {
    event.preventDefault();

    const uwaga = document.getElementById('uwaga1');
    let formFields = document.getElementsByClassName('input_form');

    let emptyField = false;

    let nameClient = document.getElementById('reserve-name');
    let emailClient = document.getElementById('reserve-email');
    let typeOfService = document.getElementById('reserve-select');
    let phoneClient = document.getElementById('reserve-phone');
    let dateOfVisit = document.getElementById('reserve-date');
    let timeOfVisit = document.getElementById('reserve-time');
    let note = document.getElementById('reserve-note');
    
    let reservation = {

        name: nameClient.value, 
        email: emailClient.value,
        service: typeOfService.value,
        phone: phoneClient.value,
        date: dateOfVisit.value,
        time: timeOfVisit.value,
        message: note.value
    
    };
      

    for (let i=0; i<formFields.length; i++) {
        if(formFields[i].value === '') {
            emptyField = false;
            formFields[i].classList.add('error');
        } else {
            emptyField = true;
            formFields[i].classList.remove('error');
        }
    }


    if(emptyField) {
        createReservation(reservation);
    } else {
        uwaga.innerText = 'Please fill in the required fields'
    }
}

formReserve.addEventListener('submit', reservationValidate);

//---Scroll animation---//
 
let isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
 
document.addEventListener("DOMContentLoaded", scrolling, false);

let sushi = document.querySelector('.sushi_two');
let ramen = document.querySelector('.ramen');

function scrolling(e) {

    if (isPartiallyVisible(sushi)) {
        sushi.classList.add('slideLeft')
    } 

    if (isFullyVisible(ramen)) {
        ramen.classList.add('slideLeft')
        ramen.classList.remove('hide')
    }
    
}

function isPartiallyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
  }

