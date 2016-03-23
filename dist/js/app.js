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

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  if (minutes > 60) {
    minutes = minutes - 60;
  }
}

function lineLength() {
  var line = document.getComputedStyle("hr-width");

  if (minutes === 60) line;
}

setInterval(displayTime, 1000);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxRQUFRLEdBQVIsQ0FBWSxTQUFaOztBQUVDLFNBQVMsV0FBVCxHQUF1QjtBQUNwQixNQUFJLGNBQWMsSUFBSSxJQUFKLEVBQWQsQ0FEZ0I7QUFFcEIsTUFBSSxRQUFRLFlBQVksUUFBWixFQUFSLENBRmdCO0FBR3BCLE1BQUksVUFBVSxZQUFZLFVBQVosRUFBVixDQUhnQjtBQUlwQixNQUFJLFVBQVUsWUFBWSxVQUFaLEVBQVYsQ0FKZ0I7O0FBT3BCLE1BQUksV0FBVyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWCxDQVBnQjtBQVFuQixXQUFTLFNBQVQsR0FBcUIsUUFBUSxHQUFSLEdBQWMsT0FBZCxHQUF3QixHQUF4QixHQUE4QixPQUE5QixDQVJGOztBQVdwQixNQUFJLFVBQVUsRUFBVixFQUFjO0FBQ2pCLGNBQVUsTUFBTyxPQUFQLENBRE87R0FBbEI7QUFHRCxNQUFJLFVBQVUsRUFBVixFQUFjO0FBQ2hCLGNBQVUsTUFBTSxPQUFOLENBRE07R0FBbEI7O0FBT0EsTUFBSSxRQUFRLEVBQVIsRUFBWTtBQUNoQixZQUFRLFFBQVEsRUFBUixDQURRO0dBQWhCOztBQUlBLE1BQUksVUFBVSxFQUFWLEVBQWM7QUFDbEIsY0FBVSxVQUFVLEVBQVYsQ0FEUTtHQUFsQjtDQXpCRjs7QUFnQ0QsU0FBUyxVQUFULEdBQXNCO0FBQ3JCLE1BQUksT0FBTyxTQUFTLGdCQUFULENBQTBCLFVBQTFCLENBQVAsQ0FEaUI7O0FBSXJCLE1BQUksWUFBWSxFQUFaLEVBQ0osS0FEQTtDQUpEOztBQWlCQSxZQUFZLFdBQVosRUFBeUIsSUFBekIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5jb25zb2xlLmxvZyhcImluIGFwcCFcIik7XG5cbiBmdW5jdGlvbiBkaXNwbGF5VGltZSgpIHtcbiAgICBsZXQgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBob3VycyA9IGN1cnJlbnRUaW1lLmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbnV0ZXMgPSBjdXJyZW50VGltZS5nZXRNaW51dGVzKCk7XG4gICAgbGV0IHNlY29uZHMgPSBjdXJyZW50VGltZS5nZXRTZWNvbmRzKCk7XG5cblxuICAgIGxldCBjbG9ja2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvY2tcIik7XG4gICAgIGNsb2NrZGl2LmlubmVySFRNTCA9IGhvdXJzICsgXCI6XCIgKyBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzOyB7XG4gICAgfVxuXG4gICAgaWYgKG1pbnV0ZXMgPCAxMCkge1xuICAgICBtaW51dGVzID0gJzAnICsgIG1pbnV0ZXM7XG4gICB9XG4gICBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgIHNlY29uZHMgPSAnMCcgKyBzZWNvbmRzO1xuICAgfVxuXG5cblxuXG4gICBpZiAoaG91cnMgPiAxMikge1xuICAgaG91cnMgPSBob3VycyAtIDEyO1xuICAgfVxuXG4gICBpZiAobWludXRlcyA+IDYwKSB7XG4gICBtaW51dGVzID0gbWludXRlcyAtIDYwO1xuICAgfVxuXG4gIH1cblxuXG5mdW5jdGlvbiBsaW5lTGVuZ3RoKCkge1xuIGxldCBsaW5lID0gZG9jdW1lbnQuZ2V0Q29tcHV0ZWRTdHlsZShcImhyLXdpZHRoXCIpO1xuXG5cbiBpZiAobWludXRlcyA9PT0gNjApXG4gbGluZVxuXG5cbn1cblxuXG5cblxuXG5cblxuXG5zZXRJbnRlcnZhbChkaXNwbGF5VGltZSwgMTAwMCk7XG4iXX0=
