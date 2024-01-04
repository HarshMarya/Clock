const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const days = ['sunday','monday','tuesday', 'wednesday', 'thursday', 'friday', 'satarday', ];
const months =["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"]

toggle.addEventListener('click', (e)=>{
    const html = document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = "Dark Mode"
    }else{
        html.classList.add('dark')
        e.target.innerHTML = "Light Mode"
    }
})

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const year = time.getFullYear();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const day = time.getDay()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`

    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes<10 ? `0${minutes}`: minutes} ${ampm}`

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
    // console.log(hoursForClock)
}

const scale = (number, inMin, inMax, outMin, outMax) =>{
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
setTime()

setInterval(setTime, 1000);

//  code for digital clock 

//     const digitClock = document.getElementById('digit-clock');

//     function digitalClock() {
//         const dTime = new Date();
//         const h = dTime.getHours()
//         const hourFor12 = h % 12;
//         const m = dTime.getMinutes()
//         const s = dTime.getSeconds()
//         if (h,m < 10) {
//             digitClock.innerHTML = '0' + hourFor12 + ':' + '0' + m + ':' + + s;
//         } else if(h,m,s<10){
//             digitClock.innerHTML = '0' + hourFor12 + ':' + '0' + m + ':' + '0' + s;
//         }
//         else {
//             digitClock.innerHTML = hourFor12 + ':' + m + ':' + s;
//         }

//     }
//     digitalClock()
//     setInterval(digitalClock, 1000)
