const seconds = document.querySelector('#seconds');
const minutes = document.querySelector('#minutes');
const hours = document.querySelector('#hour');
const show_hour = document.querySelector('.show-hour');

function updateClock() {
    const now = new Date();
    const secondsDegrees = (now.getSeconds() * 6) + 90;
    const minutesDegrees = (now.getMinutes() * 6) + 270;
    const hoursDegrees = (now.getHours() * 15) + 270;
    seconds.style.transform = `rotate(${secondsDegrees}deg)`;
    minutes.style.transform = `rotate(${minutesDegrees}deg)`;
    hours.style.transform = `rotate(${hoursDegrees}deg)`;
    show_hour.innerHTML = `${formatTime(now.getHours())}:${formatTime(now.getMinutes())}:${formatTime(now.getSeconds())}`
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock(); 