const clockContainer = document.querySelector(".js-clock");
const clockTime = clockContainer.querySelector(".clock");

function getCurrentTime() {
    const date = new Date();
    const hr = date.getHours();
    const min = date.getMinutes();
    clockTime.innerText = `${hr < 10 ? `0${hr}` : hr
        }:${min < 10 ? `0${min}` : min
        }`;
    /*
    const sec = date.getSeconds();
    clockTime.innerText = `${hr < 10 ? `0${hr}` : hr
            }:${min < 10 ? `0${min}` : min
            }:${sec < 10 ? `0${sec}` : sec}`;
    */
}

function init(){
    getCurrentTime();
    setInterval(getCurrentTime,1000);
}

init();