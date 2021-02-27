class Hero {

  constructor(x, y){

    var options = {

      density: 1,
      frictionAir: 1

    }

    this.image = loadImage("images/Superhero-01.png");

    this.body = Bodies.circle(x, y, 67, options);
    World.add(world, this.body);

  }

  display(){

		var Pos = this.body.position;		
		
		push()
		translate(Pos.x, Pos.y);
		imageMode(CENTER)
		
		image(this.image, 0, 0, 220, 120);
		pop()

  }

}