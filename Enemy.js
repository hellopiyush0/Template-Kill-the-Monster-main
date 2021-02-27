class Monster {

  constructor(x, y){
  
    var options = {
  
      density: 1,
      friction: 1
  
    }
  
    this.image = loadImage("images/Monster-01.png");
  
    this.body = Bodies.circle(x, y, 61, options);
    World.add(world, this.body);
  
  }
  
  display(){
  
    var Pos = this.body.position;		
          
    push()
    translate(Pos.x, Pos.y);
    imageMode(CENTER)
          
    image(this.image, 0, 0, 180, 140);
    pop()
  
  }
  
}