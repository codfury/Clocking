function theclock(){
    var rtc = new Date();
    var h = rtc.getHours();
    var min = rtc.getMinutes();
    var sec = rtc.getSeconds();
    var d = rtc.getDay();
    var mm  = rtc.getMonth();
    var yy = rtc.getFullYear();
    

    var ampm = (h<12) ? "AM" : "PM";
    h = (h>12)? h-12: h;
    h= ("0" + h).slice(-2); 
    min= ("0" + min).slice(-2); 
    sec = ("0" + sec).slice(-2);
    d= ("0" + d).slice(-2); 
    mm= ("0" + mm).slice(-2); 
    yy = ("0" + yy).slice(-4);
    
    document.getElementById('clock').innerHTML =
      h + "  :  " + min + "  :  " + sec + " " + ampm + "\n" +d + "/" + mm + "/" + yy;
      var t = setTimeout(theclock, 200);
    

}