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

  document.querySelector("#timerBar").style.width = "";

  document.querySelector("#clock").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
}, 1000);

function padNumber(num) {
  if (num < 10) {
    return "0" + string(num);
  } else {
    return String(num);
  }
}

// document.querySelector("#line");
// let line = style.width + currentTime() / 60 * 100;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxRQUFRLEdBQVIsQ0FBWSxTQUFaOztBQUVDLFNBQVMsV0FBVCxHQUF1QjtBQUNwQixNQUFJLGNBQWMsSUFBSSxJQUFKLEVBQWQsQ0FEZ0I7QUFFcEIsTUFBSSxRQUFRLFlBQVksUUFBWixFQUFSLENBRmdCO0FBR3BCLE1BQUksVUFBVSxZQUFZLFVBQVosRUFBVixDQUhnQjtBQUlwQixNQUFJLFVBQVUsWUFBWSxVQUFaLEVBQVYsQ0FKZ0I7O0FBTXBCLE1BQUksUUFBUSxFQUFSLEVBQVk7QUFDZCxZQUFRLFFBQVEsRUFBUixDQURNO0dBQWhCOztBQUlBLE1BQUksVUFBVSxFQUFWLEVBQWM7QUFDaEIsY0FBVSxNQUFPLE9BQVAsQ0FETTtHQUFsQjs7QUFJQSxNQUFJLFVBQVUsRUFBVixFQUFjO0FBQ2pCLGNBQVUsTUFBTSxPQUFOLENBRE87R0FBbEI7O0FBSUEsTUFBSSxRQUFRLEVBQVIsRUFBWTtBQUNmLFlBQVEsTUFBTSxLQUFOLENBRE87R0FBaEI7O0FBSUEsTUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFYLENBdEJnQjtBQXVCcEIsV0FBUyxTQUFULEdBQXFCLFFBQVEsR0FBUixHQUFjLE9BQWQsR0FBd0IsR0FBeEIsR0FBOEIsT0FBOUIsQ0F2QkQ7Q0FBdkI7O0FBaUNELFlBQVksV0FBWixFQUF5QixJQUF6Qjs7QUFLQSxZQUFZLFlBQU07QUFDaEIsTUFBSSxPQUFPLElBQUksSUFBSixFQUFQLENBRFk7QUFFaEIsVUFBUSxHQUFSLENBQVksSUFBWixFQUZnQjs7QUFJaEIsTUFBSSxRQUFRLFVBQVUsS0FBSyxRQUFMLEVBQVYsQ0FBUixDQUpZO0FBS2hCLE1BQUksVUFBVSxVQUFVLEtBQUssVUFBTCxFQUFWLENBQVYsQ0FMWTtBQU1oQixNQUFJLFVBQVUsVUFBVSxLQUFLLFVBQUwsRUFBVixDQUFWLENBTlk7O0FBVWhCLE1BQUksZ0JBQWdCLEtBQUssVUFBTCxLQUFvQixFQUFwQixDQVZKO0FBV2hCLE1BQUksYUFBYSxHQUFiLENBWFk7O0FBYWhCLFVBQVEsR0FBUixDQUFZLGFBQVosRUFiZ0I7O0FBZWhCLFdBQVMsYUFBVCxDQUF1QixXQUF2QixFQUFvQyxLQUFwQyxDQUEwQyxLQUExQyxHQUFrRCxFQUFsRCxDQWZnQjs7QUFpQmhCLFdBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQyxTQUFqQyxHQUFnRCxnQkFBVyxrQkFBYSxPQUF4RSxDQWpCZ0I7Q0FBTixFQW1CVCxJQW5CSDs7QUFxQkEsU0FBUyxTQUFULENBQW1CLEdBQW5CLEVBQXdCO0FBQ3RCLE1BQUksTUFBTSxFQUFOLEVBQVU7QUFDWixXQUFPLE1BQU0sT0FBTyxHQUFQLENBQU4sQ0FESztHQUFkLE1BR0s7QUFDSCxXQUFPLE9BQU8sR0FBUCxDQUFQLENBREc7R0FITDtDQURGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuY29uc29sZS5sb2coXCJpbiBhcHAhXCIpO1xuXG4gZnVuY3Rpb24gZGlzcGxheVRpbWUoKSB7XG4gICAgbGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBsZXQgaG91cnMgPSBjdXJyZW50VGltZS5nZXRIb3VycygpO1xuICAgIGxldCBtaW51dGVzID0gY3VycmVudFRpbWUuZ2V0TWludXRlcygpO1xuICAgIGxldCBzZWNvbmRzID0gY3VycmVudFRpbWUuZ2V0U2Vjb25kcygpO1xuXG4gICAgaWYgKGhvdXJzID4gMTIpIHtcbiAgICAgIGhvdXJzID0gaG91cnMgLSAxMjtcbiAgICB9XG5cbiAgICBpZiAobWludXRlcyA8IDEwKSB7XG4gICAgICBtaW51dGVzID0gJzAnICsgIG1pbnV0ZXM7XG4gICAgfVxuXG4gICAgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICBzZWNvbmRzID0gJzAnICsgc2Vjb25kcztcbiAgICB9XG5cbiAgICBpZiAoaG91cnMgPCAxMCkge1xuICAgICBob3VycyA9ICcwJyArIGhvdXJzO1xuICAgIH1cblxuICAgIGxldCBjbG9ja2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvY2tcIik7XG4gICAgY2xvY2tkaXYuaW5uZXJIVE1MID0gaG91cnMgKyBcIjpcIiArIG1pbnV0ZXMgKyBcIjpcIiArIHNlY29uZHM7XG5cblxuXG5cblxuXG4gIH1cblxuXG5zZXRJbnRlcnZhbChkaXNwbGF5VGltZSwgMTAwMCk7XG5cblxuXG5cbnNldEludGVydmFsKCgpID0+IHtcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpO1xuICBjb25zb2xlLmxvZyh0aW1lKTtcblxuICBsZXQgaG91cnMgPSBwYWROdW1iZXIodGltZS5nZXRIb3VycygpKTtcbiAgbGV0IG1pbnV0ZXMgPSBwYWROdW1iZXIodGltZS5nZXRNaW51dGVzKCkpO1xuICBsZXQgc2Vjb25kcyA9IHBhZE51bWJlcih0aW1lLmdldFNlY29uZHMoKSk7XG5cblxuXG4gIGxldCBwZXJjZW50TWludXRlID0gdGltZS5nZXRTZWNvbmRzKCkgLyA2MDtcbiAgbGV0IHRvdGFsV2lkdGggPSA0MjA7XG5cbiAgY29uc29sZS5sb2cocGVyY2VudE1pbnV0ZSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lckJhclwiKS5zdHlsZS53aWR0aCA9IFwiXCJcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb2NrXCIpLmlubmVySFRNTCA9IGAke2hvdXJzfSA6ICR7bWludXRlc30gOiAke3NlY29uZHN9YDtcblxufSwgMTAwMCk7XG5cbmZ1bmN0aW9uIHBhZE51bWJlcihudW0pIHtcbiAgaWYgKG51bSA8IDEwKSB7XG4gICAgcmV0dXJuIFwiMFwiICsgc3RyaW5nKG51bSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIFN0cmluZyhudW0pO1xuICB9XG59XG5cblxuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmVcIik7XG4vLyBsZXQgbGluZSA9IHN0eWxlLndpZHRoICsgY3VycmVudFRpbWUoKSAvIDYwICogMTAwO1xuIl19
