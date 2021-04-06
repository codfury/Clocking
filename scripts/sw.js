var timer = document.getElementById('stopwatch');
var strt = document.getElementById('sws');
var stp = document.getElementById('swt');
var res = document.getElementById('swr');



var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimerr() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}

document.addEventListener('DOMContentLoaded',function(){
  strt.addEventListener('click',startTimerr());
  stp.addEventListener('click',stopTimer());
  res.addEventListener('click',resetTimer());
});
// document.getElementById('swt').addEventListener('DOMContentLoaded',function(){
//   stopTimer();
// });
// document.getElementById('swr').addEventListener('DOMContentLoaded',function(){
//   resetTimer();
// });
strt.addEventListener('click',startTimerr());
stp.addEventListener('click',stopTimer());
res.addEventListener('click',resetTimer());

  
