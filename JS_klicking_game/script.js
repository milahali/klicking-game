var clicks = 0;
var timeLeft = 120;
document.getElementById("clicks").innerHTML = "Započnite igricu!";

showButton = function (_element) {
  document.getElementById("dugme").innerHTML = "Klik!";

  document.onkeydown = function (e) {
    return false;
  }

  clicks += 1;
  if (timeLeft >= 5)
    timeLeft -= 5;
  else {
    timeLeft = 0;
  }

  document.getElementById("clicks").innerHTML = "Broj klikova: " + clicks;
  var _div = document.getElementById('dugme');

  var rect = _element.getBoundingClientRect();

  var windowInnerWidth = document.documentElement.clientWidth - 100;
  var windowInnerHeight = document.documentElement.clientHeight - 40;
  console.log("širina: " + windowInnerWidth + " visina: " + windowInnerHeight);

  var x = (Math.floor(Math.random() * windowInnerWidth) + 1);
  var y = (Math.floor(Math.random() * windowInnerHeight) + 1);
  console.log("random širina:" + x + " random visina: " + y);


  _div.style.left = x + 'px'
  _div.style.top = y + 'px';

  _div.style.visibility = 'visible';
}

var timerId = setInterval(function countdown() {
  if (timeLeft <= 0) {
    clearTimeout(timerId);
    document.getElementById("end").innerHTML = "Vrijeme je isteklo!";
    document.getElementById("dugme").disabled = true;
  } else {
    timeLeft--;
  }
  document.getElementById('secs').innerHTML = "Preostalo vrijeme: " + timeLeft + " s" ;
}, 1000);

