let seconds;
let interval;
let storage;
let audio = document.getElementById('audio');
let input = document.getElementById('input');
let timer = document.getElementById('timer');

const changeDisplayHandler =() => {
  document.getElementById('timer').innerHTML = input.value;
}
const countDown = () => {
    let storage = input.value;
    let userInput = input.value;
    let checker = input.value; //used to determine if the display is 0. Currently working on a cleaner solution.
    seconds = Date.now();//using Date to set the timer so that it can be better trusted. setInterval alone seems to be laggy
    interval = setInterval(() => {  
        if(checker > 0){
            let delta = Math.floor((Date.now() - seconds) /1000); //checking the current time every second against the time when start was pressed
            let output = userInput - delta;
            timer.innerHTML = output;
            checker--;
            if(storage - output == 10){ //checks if 10 seconds has passed
                audio.play();
                storage = userInput-delta; //sets the storage to the new displayed time 
            }
        }
    }, 1000);
};
const isStopped = () =>{ //clears interval and resets all values
    clearInterval(interval);
    input.value = 0;
    timer.innerHTML = 0; 
}
