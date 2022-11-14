class Ball{
	
	constructor(){
		this.position = createVector(100, 100);
		this.velocity = createVector(2.5, .5);

	}

	update(){
		this.position.add(this.velocity);

		if((this.position.x > width) || this.position.x < 0){
	      this.velocity.x = this.velocity.x * -1;
	    }
	    if((this.position.y >height) || this.position.y < 0){
			this.velocity.y = this.velocity.y * -1;
		}
	}// update

	display(){
		stroke(0);
		fill(175);
		ellipse(this.position.x, this.position.y, 50, 50);

	} // display
}// end of class

