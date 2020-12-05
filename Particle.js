class Particle {
    constructor(x,y) {
      var options = {

         isStatic:false,
         'restitution': 0.8,
         'friction': 1.0,
         'density': 1.0

      }
      this.body = Bodies.circle(x,y,15,options);
      this.color = color(random(0,225),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
        push();
      var pos = this.body.position;
   //rectMode(CENTER);
      fill(this.color);
      circle(pos.x, pos.y, 30);
      pop();
    }
  }
