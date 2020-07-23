class Paper {
    constructor() {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':0.6,
          'density':2.6
      }
      this.body = Bodies.circle(100, 200, 20, options);
      this.x = 100;
      this.y = 200;
      this.radius = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("pink");

      
      ellipse(0,0,this.radius);
     
      pop();
    }
  };    