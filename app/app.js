
console.log("in app!");

 function displayTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (hours > 12) {
      hours = hours - 12;
    }

    if (minutes < 10) {
      minutes = '0' +  minutes;
    }

    if (seconds < 10) {
     seconds = '0' + seconds;
    }

    if (hours < 10) {
     hours = '0' + hours;
    }

    let clockdiv = document.querySelector("#clock");
    clockdiv.innerHTML = hours + ":" + minutes + ":" + seconds;






  }


setInterval(displayTime, 1000);

// document.querySelector("#line");
// let line = style.width + currentTime() / 60 * 100;
