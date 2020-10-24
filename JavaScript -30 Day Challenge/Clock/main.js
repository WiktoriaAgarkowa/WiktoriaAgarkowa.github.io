let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hour = document.querySelector('.hour');
let audio = document.querySelector('.tik')


function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secHand = (seconds * 6) + 90;
    sec.style.transform = `rotate(${secHand}deg)`;

    const minHand = 6 * (minutes + (1/60)*seconds) + 90;
    min.style.transform = `rotate(${minHand}deg)`;

    const hourHand = 30 * (hours + (1/60)*minutes) + 90;
    hour.style.transform = `rotate(${hourHand}deg)`;

    audio.currentTime = 0;
    audio.play();

    if(seconds == 0) {
        let hands = document.getElementsByClassName('arr');

        for(i=0; i<hands.length; i++) {
            hands[i].style.transition = "none";
}
    }

}

setInterval(setDate, 1000);