
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




setInterval(() => {
  let time = new Date();
  console.log(time);

  let hours = padNumber(time.getHours());
  let minutes = padNumber(time.getMinutes());
  let seconds = padNumber(time.getSeconds());



  let percentMinute = time.getSeconds() / 60;
  let totalWidth = 420;

  console.log(percentMinute);

  document.querySelector("#timerBar").style.width = (percentMinute * totalWidth) + "px";

  document.querySelector("#clock").innerHTML = `${hours} : ${minutes} : ${seconds}`;

}, 1000);

function padNumber(num) {
  if (num < 10) {
    return "0" + String(num);
  }
  else {
    return String(num);
  }
}



// document.querySelector("#line");
// let line = style.width + currentTime() / 60 * 100;
