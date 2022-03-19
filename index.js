const timeElement = document.querySelector('.clock-main-container');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let seconds =  0;  //this will act as our counter
let interval = null;

//our eventlisteners
startButton.addEventListener('click',start);
resetButton.addEventListener('click',reset);
stopButton.addEventListener('click',stop);

//update timer
function timer(){  //everytime this function is called seconds is incremented by one and this function will be called every second
    seconds++;

    //formatting our time accordingly

    let hours = Math.floor(seconds/3600);
    let minutes = Math.floor((seconds - (hours * 3600 ))/60);
    let secs = seconds % 60;
    
    //to add a 0 in front if less than 10
    if(secs < 10) secs = '0' + secs;
    if(minutes < 10) minutes = '0' + minutes;
    if(hours < 10) hours = '0' + hours;

    timeElement.innerText = `${hours}:${minutes}:${secs}`;
}

function start(){
    if(interval){  //if interval exists it means timer is already running and we do not need to start again
        return;
    }

    interval = setInterval(timer, 1000); //calls the timer funtion every 1second
}

function stop(){
    clearInterval(interval);  //clearing the setInterval that is running
    interval=null; //setting the value to null, so the interval is null and can be set by setInterval when clicked on start
}

function reset(){
    seconds =0;  //reseting seconds to 0
    clearInterval(interval); //clearing the setInterval that is running
    interval=null; //setting the value to null, so the interval is null and can be set by setInterval when clicked on start
    timeElement.innerText = "00:00:00"; 
}
