const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
var option = {
  isStatic :  true
}
  Ground = Bodies.rectangle(400,390,30,800,option);

  World.add(world,Ground);
  var option = {
    restitution : 1
  }
  Ball =Bodies.circle(400,100,20,option);
  World.add(world,Ball);
}

function draw() {
  background("pink");  
  Engine.update(engine);
  rectMode(CENTER);
  rect (Ground.position.x,Ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(Ball.position.x,Ball.position.y,20,20);
}