class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0,
          density: 1.2
      }
      this.image = loadImage("sprites/paper.png");
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(this.x,this.y,(this.radius-20)/2,options);
      World.add(world, this.body);
    }
    display(){
      var posX = this.body.position.x;
      var posY = this.body.position.y;
      push();
      translate(posX, posY);
      imageMode(CENTER);
      fill(255, 0, 255);
      image(this.image,0,0,this.radius,this.radius);
      pop();
    }
  }