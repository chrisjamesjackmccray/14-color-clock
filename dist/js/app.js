(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

console.log("in app!");

function displayTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  if (hours > 12) {
    hours = hours - 12;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  if (hours < 10) {
    hours = '0' + hours;
  }

  var clockdiv = document.querySelector("#clock");
  clockdiv.innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(displayTime, 1000);

setInterval(function () {
  var time = new Date();
  console.log(time);

  var hours = padNumber(time.getHours());
  var minutes = padNumber(time.getMinutes());
  var seconds = padNumber(time.getSeconds());

  var percentMinute = time.getSeconds() / 60;
  var totalWidth = 420;

  console.log(percentMinute);

  document.querySelector("#timerBar").style.width = percentMinute * totalWidth + "px";

  document.querySelector("#clock").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
}, 1000);

function padNumber(num) {
  if (num < 10) {
    return "0" + String(num);
  } else {
    return String(num);
  }
}

// document.querySelector("#line");
// let line = style.width + currentTime() / 60 * 100;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxRQUFRLEdBQVIsQ0FBWSxTQUFaOztBQUVDLFNBQVMsV0FBVCxHQUF1QjtBQUNwQixNQUFJLGNBQWMsSUFBSSxJQUFKLEVBQWQsQ0FEZ0I7QUFFcEIsTUFBSSxRQUFRLFlBQVksUUFBWixFQUFSLENBRmdCO0FBR3BCLE1BQUksVUFBVSxZQUFZLFVBQVosRUFBVixDQUhnQjtBQUlwQixNQUFJLFVBQVUsWUFBWSxVQUFaLEVBQVYsQ0FKZ0I7O0FBTXBCLE1BQUksUUFBUSxFQUFSLEVBQVk7QUFDZCxZQUFRLFFBQVEsRUFBUixDQURNO0dBQWhCOztBQUlBLE1BQUksVUFBVSxFQUFWLEVBQWM7QUFDaEIsY0FBVSxNQUFPLE9BQVAsQ0FETTtHQUFsQjs7QUFJQSxNQUFJLFVBQVUsRUFBVixFQUFjO0FBQ2pCLGNBQVUsTUFBTSxPQUFOLENBRE87R0FBbEI7O0FBSUEsTUFBSSxRQUFRLEVBQVIsRUFBWTtBQUNmLFlBQVEsTUFBTSxLQUFOLENBRE87R0FBaEI7O0FBSUEsTUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFYLENBdEJnQjtBQXVCcEIsV0FBUyxTQUFULEdBQXFCLFFBQVEsR0FBUixHQUFjLE9BQWQsR0FBd0IsR0FBeEIsR0FBOEIsT0FBOUIsQ0F2QkQ7Q0FBdkI7O0FBaUNELFlBQVksV0FBWixFQUF5QixJQUF6Qjs7QUFLQSxZQUFZLFlBQU07QUFDaEIsTUFBSSxPQUFPLElBQUksSUFBSixFQUFQLENBRFk7QUFFaEIsVUFBUSxHQUFSLENBQVksSUFBWixFQUZnQjs7QUFJaEIsTUFBSSxRQUFRLFVBQVUsS0FBSyxRQUFMLEVBQVYsQ0FBUixDQUpZO0FBS2hCLE1BQUksVUFBVSxVQUFVLEtBQUssVUFBTCxFQUFWLENBQVYsQ0FMWTtBQU1oQixNQUFJLFVBQVUsVUFBVSxLQUFLLFVBQUwsRUFBVixDQUFWLENBTlk7O0FBVWhCLE1BQUksZ0JBQWdCLEtBQUssVUFBTCxLQUFvQixFQUFwQixDQVZKO0FBV2hCLE1BQUksYUFBYSxHQUFiLENBWFk7O0FBYWhCLFVBQVEsR0FBUixDQUFZLGFBQVosRUFiZ0I7O0FBZWhCLFdBQVMsYUFBVCxDQUF1QixXQUF2QixFQUFvQyxLQUFwQyxDQUEwQyxLQUExQyxHQUFrRCxhQUFDLEdBQWdCLFVBQWhCLEdBQThCLElBQS9CLENBZmxDOztBQWlCaEIsV0FBUyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLFNBQWpDLEdBQWdELGdCQUFXLGtCQUFhLE9BQXhFLENBakJnQjtDQUFOLEVBbUJULElBbkJIOztBQXFCQSxTQUFTLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0I7QUFDdEIsTUFBSSxNQUFNLEVBQU4sRUFBVTtBQUNaLFdBQU8sTUFBTSxPQUFPLEdBQVAsQ0FBTixDQURLO0dBQWQsTUFHSztBQUNILFdBQU8sT0FBTyxHQUFQLENBQVAsQ0FERztHQUhMO0NBREYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5jb25zb2xlLmxvZyhcImluIGFwcCFcIik7XG5cbiBmdW5jdGlvbiBkaXNwbGF5VGltZSgpIHtcbiAgICBsZXQgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBob3VycyA9IGN1cnJlbnRUaW1lLmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbnV0ZXMgPSBjdXJyZW50VGltZS5nZXRNaW51dGVzKCk7XG4gICAgbGV0IHNlY29uZHMgPSBjdXJyZW50VGltZS5nZXRTZWNvbmRzKCk7XG5cbiAgICBpZiAoaG91cnMgPiAxMikge1xuICAgICAgaG91cnMgPSBob3VycyAtIDEyO1xuICAgIH1cblxuICAgIGlmIChtaW51dGVzIDwgMTApIHtcbiAgICAgIG1pbnV0ZXMgPSAnMCcgKyAgbWludXRlcztcbiAgICB9XG5cbiAgICBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgIHNlY29uZHMgPSAnMCcgKyBzZWNvbmRzO1xuICAgIH1cblxuICAgIGlmIChob3VycyA8IDEwKSB7XG4gICAgIGhvdXJzID0gJzAnICsgaG91cnM7XG4gICAgfVxuXG4gICAgbGV0IGNsb2NrZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9ja1wiKTtcbiAgICBjbG9ja2Rpdi5pbm5lckhUTUwgPSBob3VycyArIFwiOlwiICsgbWludXRlcyArIFwiOlwiICsgc2Vjb25kcztcblxuXG5cblxuXG5cbiAgfVxuXG5cbnNldEludGVydmFsKGRpc3BsYXlUaW1lLCAxMDAwKTtcblxuXG5cblxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICBsZXQgdGltZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnNvbGUubG9nKHRpbWUpO1xuXG4gIGxldCBob3VycyA9IHBhZE51bWJlcih0aW1lLmdldEhvdXJzKCkpO1xuICBsZXQgbWludXRlcyA9IHBhZE51bWJlcih0aW1lLmdldE1pbnV0ZXMoKSk7XG4gIGxldCBzZWNvbmRzID0gcGFkTnVtYmVyKHRpbWUuZ2V0U2Vjb25kcygpKTtcblxuXG5cbiAgbGV0IHBlcmNlbnRNaW51dGUgPSB0aW1lLmdldFNlY29uZHMoKSAvIDYwO1xuICBsZXQgdG90YWxXaWR0aCA9IDQyMDtcblxuICBjb25zb2xlLmxvZyhwZXJjZW50TWludXRlKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVyQmFyXCIpLnN0eWxlLndpZHRoID0gKHBlcmNlbnRNaW51dGUgKiB0b3RhbFdpZHRoKSArIFwicHhcIjtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb2NrXCIpLmlubmVySFRNTCA9IGAke2hvdXJzfSA6ICR7bWludXRlc30gOiAke3NlY29uZHN9YDtcblxufSwgMTAwMCk7XG5cbmZ1bmN0aW9uIHBhZE51bWJlcihudW0pIHtcbiAgaWYgKG51bSA8IDEwKSB7XG4gICAgcmV0dXJuIFwiMFwiICsgU3RyaW5nKG51bSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIFN0cmluZyhudW0pO1xuICB9XG59XG5cblxuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmVcIik7XG4vLyBsZXQgbGluZSA9IHN0eWxlLndpZHRoICsgY3VycmVudFRpbWUoKSAvIDYwICogMTAwO1xuIl19
