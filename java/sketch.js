var canvas;
var px;
var py;
var sx;
var sy;
var col;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  // put setup code here
  canvas = createCanvas(windowWidth, windowHeight*6);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  px = width/2;
  py = height/2;
  col = true;
  
}


function draw() {
  // put drawing code here

  var r = 3;
  
 
  px = px - (px-mouseX);
  py = py - (py-mouseY);
  fill(255, 0,0,30 );
  noStroke();
  ellipse(px,py,r,r);
  
 

  
  
}