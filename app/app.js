
console.log("in app!");

 function displayTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();


    let clockdiv = document.querySelector("#clock");
     clockdiv.innerHTML = hours + ":" + minutes + ":" + seconds; {
    }

   function checkTime(hours) {
     if (hours < 10) {
      hours = "0" + hours}
      return hours;
    }

    else if (minutes < 10)
      minutes = "0" + minutes; {
      return minutes;
    }

  }




  setInterval(displayTime, 1000);
