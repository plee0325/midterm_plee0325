lass Burger {
  
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