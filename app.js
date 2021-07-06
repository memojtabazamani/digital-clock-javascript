var nowDate = new Date();

var oldHour    = nowDate.getHours().toString();
var oldMinutes = nowDate.getMinutes().toString();
var oldSeconds = nowDate.getSeconds().toString();

const hours_1 = document.getElementById("hours_1");
const hours_2 = document.getElementById("hours_2");

const minutes_1 = document.getElementById("minutes_1");
const minutes_2 = document.getElementById("minutes_2");

const seconds_1 = document.getElementById("second_1");
const seconds_2 = document.getElementById("second_2");

var myTime =
    {
        "hours": [
            {"number1": oldHour[0]},
            {"number2": oldHour[1]}
        ],
        "minutes": [
            {"number1": oldMinutes[0]},
            {"number2": oldMinutes[1]}
        ],
        "seconds": [
            {
                "number1": oldSeconds[0]},
            {"number2": oldSeconds[1]}
        ]
    }

seconds_1.innerHTML = myTime.seconds[0].number1;
seconds_2.innerHTML = myTime.seconds[1].number2;

minutes_1.innerHTML = myTime.minutes[0].number1;
minutes_2.innerHTML = myTime.minutes[1].number2;

hours_1.innerHTML = myTime.hours[0].number1;
hours_2.innerHTML = myTime.hours[1].number2;

function setTime() {
    nowDate = new Date();

    // oldSeconds = nowDate.getSeconds().toString();
    //


    // Set Seconds
    if(nowDate.getSeconds().toString() != oldSeconds) {
        console.log("length : " + oldSeconds.length)
        if(oldSeconds.length == 1) {
            seconds_1.innerHTML = myTime.seconds[0].number1;
            seconds_2.innerHTML = myTime.seconds[1].number2;
        }
        else {
            console.log(oldSeconds);
            console.log(myTime.seconds[0].number1);
            if(myTime.seconds[0].number1 != oldSeconds[0]) {
                seconds_1.innerHTML = oldSeconds[0];
            }
            else {
                seconds_2.innerHTML = oldSeconds[1];
            }
        }


    }
    // // Set Minutes
    // if(nowDate.getMinutes().toString() != oldMinutes) {
    //     minutes_1.innerHTML = myTime.minutes[0].number1;
    //     minutes_2.innerHTML = myTime.minutes[1].number2;
    // }
    // // Set Hours
    // if(nowDate.getSeconds().toString() != oldHour) {
    //     hours_1.innerHTML = myTime.hours[0].number1;
    //     hours_2.innerHTML = myTime.hours[1].number2;
    // }

    oldHour    = nowDate.getHours().toString();
    oldMinutes = nowDate.getMinutes().toString();
    oldSeconds = nowDate.getSeconds().toString();
    oldHour = oldHour.length == 1 ?  "0" + oldHour[0] :  oldHour;
    oldMinutes = oldMinutes.length == 1 ?  "0" + oldMinutes[0] :  oldMinutes;
    console.log(oldSeconds);
    oldSeconds = oldSeconds.length == 1 ? "0" + oldSeconds[0] :  oldSeconds;

    myTime =
        {
            "hours": [
                {"number1": oldHour[0]},
                {"number2": oldHour[1]}
            ],
            "minutes": [
                {"number1": oldMinutes[0]},
                {"number2": oldMinutes[1]}
            ],
            "seconds": [
                {
                    "number1": oldSeconds[0]},
                {"number2": oldSeconds[1]}
            ]
        }
}

setInterval(setTime, 1000);
