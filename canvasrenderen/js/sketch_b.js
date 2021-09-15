
var element;
var h1X = 0;
var h1Y = 20;
var dx;
var period = 50.0;
var amp = 400;
var screenSize = (Math.random()*700)+600;
var randValueA =Math.round((Math.random(amp)*3)-1);
var randValueB =Math.round((Math.random(amp)*10)-1);
var randValueC =Math.round((Math.random(amp)*2)-1);
var randValueD =Math.round((Math.random(amp)*2)-1);
var randValueE =Math.round((Math.random(amp)*2)-1);
var randValueF =Math.round((Math.random(amp)*2)-1);



function draw() {
  sinGuy(); 
  Text();
  
}


function sinGuy() {
  dx = (PI / period);

  if (h1X >= 1.55) {} else {
    var element;

  
    element = createElement("h1",'<a href="https://google.com" target="_blank"><img style="width: 100%; "  src="pic.png"> <a/>');
    element.position(-cos(h1X*PI+h1X) * amp+amp, sin(h1X*PI) *amp+amp);

    

    h1X += dx;
    h1Y += dx;
  }



}


function Text() {
  dx = (PI / period);

  if (h1X >= 6.6) {} else {
    var  element_a, element_b, element_c;

  
    

    element_a = createElement("h6",'<a href="#" style="color: blue; font-size: 2em; " >info</a>');
    element_a.position( 600, h1X  *-200+1300);

    element_b = createElement("h6",'<a href="#" style="color: blue; font-size: 2em; " > lab</a>');
    element_b.position( 500, h1X  *-300+1300);

    element_c = createElement("h6",'<a href="" style="color: blue; font-size: 2em; " >projects</a>');
    element_c.position( 20, h1X  *-250+1300);

    

    h1X += dx;
    h1Y += dx;
  }

  element_c = createElement("h6",'<a href="alien.html" style="color: blue; text-decoration: none; opacity: 0.1; font-size: 1em; " >&#128125</a>');
  element_c.position( sin(h1X*PI)*15+500, cos(h1Y*PI)*15+1000);

}

