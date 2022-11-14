class Balls {


  constructor(tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
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
  ellipse(this,x, this.y, 100 * 20/q, 100 * 20/q); //
  }

}