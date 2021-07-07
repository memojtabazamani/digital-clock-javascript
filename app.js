var nowDate = new Date();

var oldHour    = nowDate.getHours();
var oldMinutes = nowDate.getMinutes();
var oldSeconds = nowDate.getSeconds();

if(oldSeconds <  10) {
    oldSeconds = "0" + oldSeconds;
}
if(oldMinutes < 10) {
    oldMinutes = "0" + oldMinutes;
}
if(oldHour < 10) {
    oldHour = "0" + oldHour;
}

const hours_1 = document.getElementById("hours_1");
const hours_2 = document.getElementById("hours_2");

const minutes_1 = document.getElementById("minutes_1");
const minutes_2 = document.getElementById("minutes_2");

const seconds_1 = document.getElementById("second_1");
const seconds_2 = document.getElementById("second_2");

oldSeconds = oldSeconds.toString();
oldMinutes = oldMinutes.toString();
oldHour    = oldHour.toString();

seconds_1.innerHTML = oldSeconds[0];
seconds_2.innerHTML = oldSeconds[1];

minutes_1.innerHTML = oldMinutes[0];
minutes_2.innerHTML = oldMinutes[1];

hours_1.innerHTML   = oldHour[0];
hours_2.innerHTML   = oldHour[1];

function setTime() {
    oldSeconds++;
    if(oldSeconds < 10) { // Check be a
        oldSeconds = "0" + oldSeconds;
    }
    if(oldSeconds == 60) {
        oldSeconds = "00";
        oldMinutes++;
        if(oldMinutes < 10) {
            oldMinutes = "0" + oldMinutes;
        }
    }
    if(oldMinutes == 60) {
        oldMinutes = "00";
        oldHour++;
        if(oldHour < 10) {
            oldHour = "0" + oldHour;
        }
    }
    if(oldHour == 24) {
        oldHour = "00";
    }
    oldSeconds = oldSeconds.toString();
    seconds_1.innerHTML = oldSeconds[0];
    seconds_2.innerHTML = oldSeconds[1];


    oldMinutes = oldMinutes.toString()
    minutes_1.innerHTML = oldMinutes[0];
    minutes_2.innerHTML = oldMinutes[1];


    oldHour    = oldHour.toString();
    hours_1.innerHTML   = oldHour[0];
    hours_2.innerHTML   = oldHour[1];
}


function setNewTime() {
    console.log("Seconds : "  + oldSeconds);
    console.log("Minutes : " + oldMinutes);
    console.log("Hour : " + oldHour);









}
setInterval(setTime, 1000);
