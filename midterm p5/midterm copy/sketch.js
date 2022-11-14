let position;
let velocity;  
let lightning1;
let lightning2;
let burger1;
let balls1;
let w0 = 0;
let h0 = 0;
let w;
let h;
let z = 0;
let i = 0;
let q = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100,0,0);

  position = createVector(1, 1); 
  velocity = createVector(1, 1); 
  acceleration = createVector(.1,.05);
  balls1 = new Balls();
  lightning1 = new Lightning(windowWidth/4,windowHeight/4); //for the lightning scene
  lightning2 = new Lightning(windowWidth/1.5,windowHeight/4.2); //creating a second cloud
  burger1 = new Burger(100, 390);
  w = windowWidth; // TRY IT ====== if you move the canvas, the ball will bounce off the walls no matter what size the canvas is
  h = windowHeight;
}

function draw(){ //                                                                                                          The start of the drawing

if (frameCount <= 1000){
  stroke(0);
  background(100,0,0);
  line(0,0,windowWidth/4,windowHeight/4);
  line(windowWidth/4,windowHeight/4,windowWidth*(3/4),windowHeight/4);
  line(windowWidth,windowHeight/4,windowWidth,0);
  line(windowWidth/4,windowHeight/4,windowWidth/4,windowHeight * (3/4));
  line(windowWidth/4,windowHeight * (3/4),0,windowHeight);
  line(windowWidth/4,windowHeight * (3/4),windowWidth * (3/4),windowHeight * (3/4));
  line(windowWidth * (3/4),windowHeight * (3/4),windowWidth,windowHeight);
  line(windowWidth * (3/4),windowHeight * (3/4),windowWidth * (3/4),windowHeight/4);
  line(windowWidth * (3/4), windowHeight/4, windowWidth, 0);
balls1.move(); 
}

if (frameCount > 1000 && frameCount <= 1200){
  background(255,51,51);
burger1.show();
// for(let i = 1; i < 20; i = i + 1){
// push();
// translate(10 * ((-1)^(i)),0);
// burger();
// pop();
}

if (frameCount > 1200 && frameCount <= 1500 && (frameCount)%2 == 0){ //every even frame the burger will move slightly to the right
 background(255,51,51);
  push();
  translate(10,0);
burger1.show();
  pop();
}

if (frameCount > 1200 && frameCount <= 1500 && (frameCount)%2 == 1){ // every odd frame the burger will move slightly to the left
  background(255,51,51);
  push();
  translate(-10,0);
burger1.show();
  pop();
}
if (frameCount > 1400 && frameCount <= 1500 && (frameCount)%3 == 0){ // every multiple of 3 frame, the burger will move slightly down
background(255,51,51);
push();
translate(0,10);
burger1.show();
pop();
}
if (frameCount > 1400 && frameCount <= 1500 && (frameCount)%3 == 1){ // every frame that is returns a remainder of 1 after being divided by 3, the burger will move slightly up.
  background(255,51,51);
  push();
  translate(0,-10);
burger1.show();
  pop();
}
if (frameCount > 1500 && frameCount <= 1510){ //flashes before burger disappears
background(255);
}

if (frameCount > 1510 && frameCount <= 1560){ //burger is gone
background(255,51,51);

}

if(frameCount > 1560 && frameCount <= 1700 || frameCount > 1710){ //scene with two clouds
background(0);
lightning1.show();
lightning2.show();


}
  
  if(frameCount > 1700 && frameCount < 1710){ //first cloud strikes

    lightning1.show();
    lightning1.strike();
    lightning2.show();
     }

if(frameCount > 1705 && frameCount < 1710){ // the screen goes bright yellow shortly after the lightning strikes
lightning1.strike();
lightning2.show();
lightning1.flash();
}

}



