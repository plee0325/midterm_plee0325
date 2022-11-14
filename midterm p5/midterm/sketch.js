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


class Lightning {
constructor(tempX,tempY) {
this.x = tempX;
this.y = tempY;
}
  

show() {
   noStroke();
  fill(255)
  ellipse(this.x - 60,this.y,100,100);
  ellipse(this.x,this.y,100,100);
  ellipse(this.x + 40,this.y,100,100);
  ellipse(this.x + 80,this.y,100,100);
  ellipse(this.x - 30,this.y - 30,100,100);
  ellipse(this.x + 20,this.y - 50,100,100);
}

strike() {
  stroke(255,255,51);
  fill(255,255,51);
beginShape();
  vertex(this.x, this.y);
  vertex(this.x - 10, this.y + 100);
  vertex(this.x + 20, this.y + 100);
  vertex(this.x, this.y + 150);
  vertex(this.x + 10, this.y + 150);
  vertex(this.x, this.y + 200);
  vertex(this.x + 40, this.y + 140);
  vertex(this.x + 30, this.y + 140);
  vertex(this.x + 50, this.y + 90);
  vertex(this.x + 30, this.y + 90);
  vertex(this.x + 40, this.y);
  endShape();
  noStroke();
  fill(255);
  ellipse(this.x, this.y - 10, 70, 70);
  ellipse(this.x + 30, this.y - 10, 70, 70);
  }
  
  flash() {
     background(255,255,204);
     stroke(0);
  fill(255,255,51);
beginShape();
  vertex(this.x, this.y);
  vertex(this.x - 10, this.y + 100);
  vertex(this.x + 20, this.y + 100);
  vertex(this.x, this.y + 150);
  vertex(this.x + 10, this.y + 150);
  vertex(this.x, this.y + 200);
  vertex(this.x + 40, this.y + 140);
  vertex(this.x + 30, this.y + 140);
  vertex(this.x + 50, this.y + 90);
  vertex(this.x + 30, this.y + 90);
  vertex(this.x + 40, this.y);
  endShape();
  noStroke();
  fill(255);
  ellipse(this.x, this.y - 10, 70, 70);
  ellipse(this.x + 30, this.y - 10, 70, 70);
}
}



class Burger {
  
  constructor(tempX, tempY) {
    this.x = tempX; // 100
    this.y = tempY; // 390
  }
  
  show() {
  beginShape(); // bottom bun
  stroke(0);
  fill(233,198,127);
  vertex(this.x,this.y);
  bezierVertex(this.x + 10,this.y + 50,this.x + 190,this.y + 50,this.x + 200,this.y);
  endShape()
  
  
  fill(144,46,16); // burger
 // ellipse(200,380,210,40);
  rect(this.x - 10,this.y - 30,220,30,10);
  
 //cheese
  stroke(0);
  fill(255,227,89);
  triangle(this.x - 10,this.y - 30,this.x + 10,this.y - 10,this.x + 100,this.y - 30); 
  triangle(this.x + 210,this.y - 30,this.x + 190,this.y - 10,this.x + 100,this.y - 30);
  
  //tomato
  beginShape();
  fill(210,26,26)
  rect(this.x,this.y - 40,200,15,10);
  endShape();
  
  
  
  beginShape(); // top bun
  stroke(0);
  fill(233,198,127);
  vertex(this.x,this.y - 40);
  bezierVertex(this.x + 25,this.y - 130,this.x + 175,this.y - 130,this.x + 200,this.y - 40);
  endShape()
  

  beginShape(); // lettuce
  stroke(0);
  fill(162,233,115);
  vertex(this.x,350);     
  bezierVertex(this.x - 10,this.y - 20,this.x + 25,this.y - 60,this.x + 25,this.y - 40);
  bezierVertex(this.x + 50,this.y - 20,this.x + 75,this.y - 60,this.x + 75,this.y - 40);
  bezierVertex(this.x + 100,this.y - 2,this.x + 125,this.y - 60,this.x + 125,this.y - 40);
  bezierVertex(this.x + 150,this.y - 2,this.x + 175,this.y - 60,this.x + 175,this.y - 40);
  bezierVertex(this.x + 200,this.y - 2,this.x + 225,this.y - 60,this.x + 200,this.y - 40);
  endShape();
  }

}

class Balls {


  constructor() {
noStroke(0);
  strokeWeight(2);
  fill(255,255,51);
  ellipse(position.x, position.y, 100 * 20/q, 100 * 20/q);
  }




  
move(){
position.add(velocity);
  velocity.add(acceleration);


  if((position.x > w) || (position.x <= w0)){
   velocity.x = velocity.x * -1
   acceleration.x = acceleration.x * -1
 }
  if((position.y > h) || (position.y <= w0)){
   velocity.y = velocity.y * -1
   acceleration.y = acceleration.y * -1
 }

if(q <= windowWidth/4 && z <= windowHeight/4){
w = w - 1;
w0 = w0 + 1;
h = h - 1;
h0 = h0 + 1;
q = q + 1;
z = z + 1;
}
if(z > windowWidth/4 && z < windowHeight/2){
w = w + 1;
w0 = w0 - 1;
h = h + 1;
h0 = h0 - 1;
q = q - 1;
z = z + 1;
}
if(z == windowWidth/2){
z = 0;
}


  noStroke(0);
  strokeWeight(2);
  fill(255,255,51);
  ellipse(position.x, position.y, 100 * 20/q, 100 * 20/q); //
  }

}