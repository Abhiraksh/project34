const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const World = Matter.World;

var world,engine;

var bob1,bob2,bob3,bob4,bob5;
var bl1,bl2,bl3,bl4,bl5;

function setup(){
 createCanvas(windowWidth/2,windowHeight/1.5);

 engine = Engine.create();
 world = engine.world;

 bob1 = new Pendulum(300,650);
 bob2 = new Pendulum(440,650);
 bob3 = new Pendulum(580,650);
 bob4 = new Pendulum(720,650);
 bob5 = new Pendulum(860,650);

 bl1 = new Sling(bob1,{x: 300,y:250});
}
function draw(){
 background("orange");
 
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 
 bl1.display();
 
 drawSprites();
}
