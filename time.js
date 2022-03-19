var time = 3000;
var position = 0;
var velocity = 5;

function myFunc() {
  position = position + velocity;
  console.log(position);
}

setInterval(myFunc, time);
