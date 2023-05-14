const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
let btn = document.getElementById('start');


let seconds = 0;
let minutes = 0;
let hours = 0;

//Variables for first number
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timeStatus = 'stopped';
let timeInterval;

function stopWatch() {
    seconds++;
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }
    if(leadingSeconds <= 9){
        leadingSeconds = '0' + seconds.toString();
    } else{leadingSeconds = seconds};

    if(leadingMinutes <= 9){
        leadingMinutes = '0' + minutes.toString();
    } else{leadingMinutes = minutes};

    if(leadingHours <= 9){
        leadingHours = '0' + hours.toString();
    } else{leadingHours = hours};

    let timer = document.getElementById('timer');
    timer.innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
}
//window.setInterval(stopWatch, 1000);

startBtn.addEventListener('click', moveTime);

function moveTime(){
    if(timeStatus === 'stopped') {
        btn.innerText = 'Pause';
        btn.setAttribute('id', 'pause');
        timeInterval = window.setInterval(stopWatch, 1000);
        timeStatus = 'started'
    } else {
        btn.innerText = 'Start';
        btn.setAttribute('id', 'start');
        window.clearInterval(timeInterval);
        timeStatus = 'stopped';
    }
}

restartBtn.addEventListener('click', resetTime);
 function resetTime(){
    window.clearInterval(timeInterval);
    timer.innerText = '00:00:00';
    seconds = 0;
    minutes = 0;
    hours = 0;
 }