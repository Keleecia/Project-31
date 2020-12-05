class Plinko {
    
    constructor(x,y) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.circle(x,y,10,options);
      
      World.add(world, this.body);
    }
    display(){
        push();
      var pos = this.body.position;
      rectMode(CENTER);
      fill("lightblue");
      circle(pos.x, pos.y, 20);
      pop();
    }
  }
