let hourDeg = 0;
let minDeg = 0;
let secDeg = 0;

const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');



const setDate = () => {
    const date = new Date();

    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    secDeg = ((sec / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minDeg = min * 6;
    minHand.style.transform = `rotate(${minDeg+90}deg)`;
    hourDeg = hour * 30;
    hourHand.style.transform = `rotate(${hourDeg+90}deg)`;


}

setInterval(setDate, 1000);