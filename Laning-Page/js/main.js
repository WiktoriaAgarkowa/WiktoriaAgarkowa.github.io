document.getElementById('hamburger').addEventListener('click', function(){
    document.getElementsByClassName('hide_menu')[0].classList.toggle('open')
});

document.getElementById('close').addEventListener('click', function(){
    document.getElementsByClassName('hide_menu')[0].classList.toggle('open')
})


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
            uwaga.innerText = `Dziękujemy ${resJSON.appointment.name}. Zostałeś zapisany!`
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
        uwaga.classList.add('error');
        uwaga.innerText = 'Wypełnij wymagane pola'
    }
}

formReserve.addEventListener('submit', reservationValidate);

