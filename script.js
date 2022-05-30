const minsEL = document.querySelector('.mins');
const secEl = document.querySelector('.sec');
const hoursEl = document.querySelector('.hours');

setInterval(() => {
    const date = new Date;
    const secDeg = date.getSeconds() / 60 * 360 - 90;
    const minsdeg = date.getMinutes() / 60 * 360 - 90;
    const hoursdeg = date.getHours() / 12 * 360 - 90;
    secEl.style.transform = `rotate(${secDeg}deg)`;
    minsEL.style.transform = `rotate(${minsdeg}deg)`;
    hoursEl.style.transform = `rotate(${hoursdeg}deg)`;
}, 1000)



