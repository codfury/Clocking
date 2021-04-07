var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hourcd");
var m = document.getElementById("minutecd");
var s = document.getElementById("seccd");


var startTimer = null;



function sttimer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}



start.addEventListener('click', function sttim(){
   
    function startInterval(){
        startTimer = setInterval(function() {
            sttimer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function resetim(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    //stop the timer after pressing "reset"
    stopInterval()
})




function stopInterval() {
    clearInterval(startTimer);
}
