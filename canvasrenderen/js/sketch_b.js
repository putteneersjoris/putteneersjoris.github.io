
var element;
var h1X = 0;
var h1Y = 20;
var dx;
var period = 50.0;
var amp = 400;
var screenSize = (Math.random()*700)+600;


function draw() {
  sinGuy(); 
}


function sinGuy() {
  dx = (PI / period);

  if (h1X >= windowWidth / 1250) {} else {
    var element;

  
    element = createElement("h1",'<a href="https://google.com" target="_blank"><img style="width: 100%; "  src="pic.png"> <a/>');

    element.position(-cos(h1X*PI+h1X) * amp+amp, sin(h1X*PI) *amp+amp);

    h1X += dx;
    h1Y += dx;
  }
var elementa;

elementa = createElement("div",'<a style="color: green; font-size: 50px;">gegegegegege <a/>');
elementa.position(1500,500);
}
