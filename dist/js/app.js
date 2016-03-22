(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

console.log("in app!");

function displayTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  var clockdiv = document.querySelector("#clock");
  clockdiv.innerHTML = hours + ":" + minutes + ":" + seconds;{}

  function checkTime(hours) {
    if (hours < 10) {
      hours = "0" + hours;
    }
    return hours;
  }

  elseif(minutes < 10);
  minutes = "0" + minutes;{
    return minutes;
  }
}

setInterval(displayTime, 1000);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxRQUFRLEdBQVIsQ0FBWSxTQUFaOztBQUVDLFNBQVMsV0FBVCxHQUF1QjtBQUNwQixNQUFJLGNBQWMsSUFBSSxJQUFKLEVBQWQsQ0FEZ0I7QUFFcEIsTUFBSSxRQUFRLFlBQVksUUFBWixFQUFSLENBRmdCO0FBR3BCLE1BQUksVUFBVSxZQUFZLFVBQVosRUFBVixDQUhnQjtBQUlwQixNQUFJLFVBQVUsWUFBWSxVQUFaLEVBQVYsQ0FKZ0I7O0FBT3BCLE1BQUksV0FBVyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWCxDQVBnQjtBQVFuQixXQUFTLFNBQVQsR0FBcUIsUUFBUSxHQUFSLEdBQWMsT0FBZCxHQUF3QixHQUF4QixHQUE4QixPQUE5QixDQVJGOztBQVdyQixXQUFTLFNBQVQsQ0FBbUIsS0FBbkIsRUFBMEI7QUFDeEIsUUFBSSxRQUFRLEVBQVIsRUFBWTtBQUNmLGNBQVEsTUFBTSxLQUFOLENBRE87S0FBaEI7QUFFQyxXQUFPLEtBQVAsQ0FIdUI7R0FBMUI7O0FBTUMsU0FBUSxVQUFVLEVBQVYsQ0FBUixDQWpCb0I7QUFrQmxCLFlBQVUsTUFBTSxPQUFOLENBbEJRO0FBbUJsQixXQUFPLE9BQVAsQ0FEeUI7R0FsQlA7Q0FBdkI7O0FBMkJDLFlBQVksV0FBWixFQUF5QixJQUF6QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmNvbnNvbGUubG9nKFwiaW4gYXBwIVwiKTtcblxuIGZ1bmN0aW9uIGRpc3BsYXlUaW1lKCkge1xuICAgIGxldCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGhvdXJzID0gY3VycmVudFRpbWUuZ2V0SG91cnMoKTtcbiAgICBsZXQgbWludXRlcyA9IGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKTtcbiAgICBsZXQgc2Vjb25kcyA9IGN1cnJlbnRUaW1lLmdldFNlY29uZHMoKTtcblxuXG4gICAgbGV0IGNsb2NrZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9ja1wiKTtcbiAgICAgY2xvY2tkaXYuaW5uZXJIVE1MID0gaG91cnMgKyBcIjpcIiArIG1pbnV0ZXMgKyBcIjpcIiArIHNlY29uZHM7IHtcbiAgICB9XG5cbiAgIGZ1bmN0aW9uIGNoZWNrVGltZShob3Vycykge1xuICAgICBpZiAoaG91cnMgPCAxMCkge1xuICAgICAgaG91cnMgPSBcIjBcIiArIGhvdXJzfVxuICAgICAgcmV0dXJuIGhvdXJzO1xuICAgIH1cblxuICAgIGVsc2VpZiAobWludXRlcyA8IDEwKVxuICAgICAgbWludXRlcyA9IFwiMFwiICsgbWludXRlczsge1xuICAgICAgcmV0dXJuIG1pbnV0ZXM7XG4gICAgfVxuXG4gIH1cblxuXG5cblxuICBzZXRJbnRlcnZhbChkaXNwbGF5VGltZSwgMTAwMCk7XG4iXX0=
