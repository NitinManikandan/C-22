//nameSpacing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world,ground;


function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  var options_1 = {
    restitution : 2
  }

var options={

  isStatic: true

}

  ground=Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);

 console.log(ground);
 console.log(ground.position.x);
 console.log(ground.position.y);

 
 ball1 = Bodies.circle(200,200,30,options_1);
 World.add(world,ball1);
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  fill ("brown");
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
fill ("blue");
ellipse (ball1.position.x, ball1.position.y,30,30);
  drawSprites();
}