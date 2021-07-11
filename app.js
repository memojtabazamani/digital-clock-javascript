var nowDate = new Date();

var oldHour    =  (nowDate.getHours() <10 ?'0':'') + nowDate.getHours();
var oldMinutes = (nowDate.getMinutes() <10 ?'0':'') + nowDate.getMinutes();
var oldSeconds = (nowDate.getSeconds() <10 ?'0':'') + nowDate.getSeconds() ;

const hours_1 = document.getElementById("hours_1");
const hours_2 = document.getElementById("hours_2");

const minutes_1 = document.getElementById("minutes_1");
const minutes_2 = document.getElementById("minutes_2");

const seconds_1 = document.getElementById("second_1");
const seconds_2 = document.getElementById("second_2");


seconds_1.innerHTML = oldSeconds[0];
seconds_2.innerHTML = oldSeconds[1];

minutes_1.innerHTML = oldMinutes[0];
minutes_2.innerHTML = oldMinutes[1];

hours_1.innerHTML   = oldHour[0];
hours_2.innerHTML   = oldHour[1];

function setTime() {
    oldSeconds++;
    oldSeconds = (oldSeconds < 10 ?'0':'') + oldSeconds;
    if(oldSeconds == 60) {
        oldSeconds = "00";
        oldMinutes++;
        oldMinutes = (oldMinutes < 10 ?'0':'') + oldMinutes;
    }
    if(oldMinutes == 60) {
        oldMinutes = "00";
        oldHour++;
        oldHour = (oldHour < 10 ? '0' : '') + oldHour;
    }
    if(oldHour == 24) {
        oldHour = "00";
    }
    seconds_1.innerHTML = oldSeconds[0];
    seconds_2.innerHTML = oldSeconds[1];

    minutes_1.innerHTML = oldMinutes[0];
    minutes_2.innerHTML = oldMinutes[1];

    hours_1.innerHTML   = oldHour[0];
    hours_2.innerHTML   = oldHour[1];

}

setInterval(setTime, 1000);
