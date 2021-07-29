let minute = 0;
let second = 0;
let stopTime = true;

let minEl = document.getElementById("minutes");
let secEl = document.getElementById("seconds");


function start() {
  if (stopTime == true) {
    stopTime = false;
    timerCycle();
  }
}

function stop() {
  if (stopTime == false) {
    stopTime = true;
  }
}

function timerCycle() {
  if (stopTime == false) {
    second += 1;
    if (second == 60) {
      minute += 1;
      second = 0;
    }
    setTimeout("timerCycle()", 1000);
  }
  minEl.textContent = formatTime(minute);
  secEl.textContent = formatTime(second);

}


function reset() {
  minEl.textContent = '0' + 0;
  minute = 0;
  secEl.textContent = '0' + 0;
  second = 0;
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
} 