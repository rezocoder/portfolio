var second = document.querySelector('.seconds-arrow');
var minute = document.querySelector('.minutes-arrow');
var hour = document.querySelector('.hour-arrow');

secondsDeg = -90;
setInterval(function() {
  second.style.transform = "rotate(" + secondsDeg + "deg)";
  secondsDeg = (secondsDeg + 6);
}, 1000);

deg = 180;
setInterval(function() {
  minute.style.transform = "rotate(" + deg + "deg)";
  deg = (deg + 0.1);
}, 1000);

hoursDeg = -30;
setInterval( function() {
    hour.style.transform = "rotate(" + hoursDeg + "deg)";
    hoursDeg = (hoursDeg + 0.00166666666);
}, 1000)



