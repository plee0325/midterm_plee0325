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