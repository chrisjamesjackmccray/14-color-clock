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

// document.querySelector("#line");
// let line = style.width + currentTime() / 60 * 100;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxRQUFRLEdBQVIsQ0FBWSxTQUFaOztBQUVDLFNBQVMsV0FBVCxHQUF1QjtBQUNwQixNQUFJLGNBQWMsSUFBSSxJQUFKLEVBQWQsQ0FEZ0I7QUFFcEIsTUFBSSxRQUFRLFlBQVksUUFBWixFQUFSLENBRmdCO0FBR3BCLE1BQUksVUFBVSxZQUFZLFVBQVosRUFBVixDQUhnQjtBQUlwQixNQUFJLFVBQVUsWUFBWSxVQUFaLEVBQVYsQ0FKZ0I7O0FBTXBCLE1BQUksUUFBUSxFQUFSLEVBQVk7QUFDZCxZQUFRLFFBQVEsRUFBUixDQURNO0dBQWhCOztBQUlBLE1BQUksVUFBVSxFQUFWLEVBQWM7QUFDaEIsY0FBVSxNQUFPLE9BQVAsQ0FETTtHQUFsQjs7QUFJQSxNQUFJLFVBQVUsRUFBVixFQUFjO0FBQ2pCLGNBQVUsTUFBTSxPQUFOLENBRE87R0FBbEI7O0FBSUEsTUFBSSxRQUFRLEVBQVIsRUFBWTtBQUNmLFlBQVEsTUFBTSxLQUFOLENBRE87R0FBaEI7O0FBSUEsTUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFYLENBdEJnQjtBQXVCcEIsV0FBUyxTQUFULEdBQXFCLFFBQVEsR0FBUixHQUFjLE9BQWQsR0FBd0IsR0FBeEIsR0FBOEIsT0FBOUIsQ0F2QkQ7Q0FBdkI7O0FBaUNELFlBQVksV0FBWixFQUF5QixJQUF6QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmNvbnNvbGUubG9nKFwiaW4gYXBwIVwiKTtcblxuIGZ1bmN0aW9uIGRpc3BsYXlUaW1lKCkge1xuICAgIGxldCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGhvdXJzID0gY3VycmVudFRpbWUuZ2V0SG91cnMoKTtcbiAgICBsZXQgbWludXRlcyA9IGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKTtcbiAgICBsZXQgc2Vjb25kcyA9IGN1cnJlbnRUaW1lLmdldFNlY29uZHMoKTtcblxuICAgIGlmIChob3VycyA+IDEyKSB7XG4gICAgICBob3VycyA9IGhvdXJzIC0gMTI7XG4gICAgfVxuXG4gICAgaWYgKG1pbnV0ZXMgPCAxMCkge1xuICAgICAgbWludXRlcyA9ICcwJyArICBtaW51dGVzO1xuICAgIH1cblxuICAgIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgc2Vjb25kcyA9ICcwJyArIHNlY29uZHM7XG4gICAgfVxuXG4gICAgaWYgKGhvdXJzIDwgMTApIHtcbiAgICAgaG91cnMgPSAnMCcgKyBob3VycztcbiAgICB9XG5cbiAgICBsZXQgY2xvY2tkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb2NrXCIpO1xuICAgIGNsb2NrZGl2LmlubmVySFRNTCA9IGhvdXJzICsgXCI6XCIgKyBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzO1xuXG5cblxuXG5cblxuICB9XG5cblxuc2V0SW50ZXJ2YWwoZGlzcGxheVRpbWUsIDEwMDApO1xuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmVcIik7XG4vLyBsZXQgbGluZSA9IHN0eWxlLndpZHRoICsgY3VycmVudFRpbWUoKSAvIDYwICogMTAwO1xuIl19
