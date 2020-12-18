class Pendulum{

    constructor(x,y){
     var options={ 
      isStatic: true,
      friction: 0.5,
      density:1.2
     }
     this.body = Bodies.circle(x,y,70,options);
     World.add(world,this.body);
    }

    display(){

     var pos = this.body.position;
     stroke("white");
     strokeWeight(3);
     fill("orange");
     ellipseMode(RADIUS);
     ellipse(pos.x,pos.y,70,70);
     
    }
}