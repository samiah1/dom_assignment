/*
    Utilize the date class and also the css property rotate, float or flex
    
*/
var hourHand = document.getElementById('hourHand');
var minuteHand = document.getElementById('minuteHand');
var secondHand = document.getElementById('secondHand');

function aClock(){
    var date = new Date();
    var hour = date.getHours() % 12;
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var hourDag = (hour * 30) + (0.5 * minute);
    var minuteDeg = (minute * 6) + (0.1 * second);
    var secondDeg = second * 6;

    hourHand.style.transform = 'rotate(' + hourDag + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
    secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';

    setInterval(aClock, 1000);
};

aClock();

setInterval(digitalClock, 1000)

function digitalClock(){
var currentTime = new Date ( );
var ctime = currentTime.getHours() + " : " + currentMinutes + " : " + currentSeconds;

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  var ctime = currentTime.getHours() + " : " + currentMinutes + " : " + currentSeconds;
  
    document.getElementById("MyClockDisplay").innerText = currentTimeString;
    document.getElementById("MyClockDisplay").textContent = currentTimeString;

    document.getElementById("MyClockDisplay2").innerText = ctime;
    document.getElementById("MyClockDisplay2").textContent = ctime;
    
    setTimeout(digitalClock, 1000);

  // Update the time display
  $(document).ready(function(){
  $(".button").click(function(){
      $("#MyClockDisplay").hide();
      $("#MyClockDisplay2").show();
    
  });
});
 // $(".clock").html(currentTimeString)
  }