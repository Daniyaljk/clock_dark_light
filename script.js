const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const btnEl = document.querySelector('.btn-toggle')

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "Jan","Feb","Mar",
    "Apr","May","Jun",
    "Jul","Aug","Sep",
    "Oct","Nov","Dec"
];

btnEl.addEventListener('click', (e) => {
    const htmlEl = document.querySelector('html')
    if(htmlEl.classList.contains('dark')){
        htmlEl.classList.remove('dark')
        e.target.innerHTML = "Dark Mode"
    } else {
        htmlEl.classList.add('dark')
        e.target.innerHTML = "Light Mode"
    }
})

function setTime(){
    const time = new Date()

    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hours_clock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%,-100%)
     rotate(${scale(hours_clock,0,11,0,360)}deg)`

    minuteEl.style.transform = `translate(-50%,-100%)
     rotate(${scale(minutes,0,59,0,360)}deg)`

    secondEl.style.transform = `translate(-50%,-100%)
     rotate(${scale(seconds,0,59,0,360)}deg)`

    timeEl.innerHTML = `${hours_clock}:${minutes} ${ampm}`

    dateEl.innerHTML = `${days[day]} , ${months[month]}
     <span class="circle-date">${date}</span>`
}

const scale = (num,in_min,in_max,out_min,out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime,1000)
