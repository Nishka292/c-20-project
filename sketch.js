
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball2;
var ball3;
var ball4;
var ball5;
var ground;
var rotater1;
var rotater2;
var rotater3;
var angle1=60;
var angle2=60;
var angle3=60;
var poly;



function setup() {
  createCanvas(550,600);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  ball1 = Bodies.circle(220,10,10,ball_options);
  World.add(world,ball1);
  ball2 = Bodies.circle(220,10,10,ball_options);
  World.add(world,ball2);
  ball3 = Bodies.circle(225,10,10,ball_options);
  World.add(world,ball3);
  ball4 = Bodies.circle(230,10,10,ball_options);
  World.add(world,ball4);
  ball5 = Bodies.circle(230,10,10,ball_options);
  World.add(world,ball5);
  
   var ground_options ={
     isStatic: true
   };
  ground = Bodies.rectangle(600,height,1200,20,ground_options);
  World.add(world,ground);

  var block_options ={
    isStatic: true
  };
 block1 = Bodies.rectangle(100,400,150,20,block_options);
 World.add(world,block1);
 block2 = Bodies.rectangle(400,400,150,20,block_options);
 World.add(world,block2);

 

  var rotater_options = {
    isStatic: true
  }
  rotater1 = Bodies.rectangle(250,200,150,20,rotater_options);
  World.add(world,rotater1)
  rotater2 = Bodies.rectangle(250,200,150,20,rotater_options);
  World.add(world,rotater2)
  rotater3 = Bodies.rectangle(250,200,150,20,rotater_options);
  World.add(world,rotater3)
  
 fill("lightpink");
 rectMode(CENTER);
 ellipseMode(RADIUS);
}


function draw() 
{
  background("teal");
  
  Engine.update(engine);
  Matter.Body.rotate(rotater1,angle1)
  push ()
  translate(rotater1.position.x, rotater1.position.y)
  rotate (angle1)
  rect(0,0,150,20)
  pop ()
  angle1 += 0.03

  Matter.Body.rotate(rotater2,angle2)
  push ()
  translate(rotater2.position.x, rotater2.position.y)
  rotate (angle2)
  rect(0,0,150,20)
  pop ()
  angle2 += 0.05

  Matter.Body.rotate(rotater3,angle3)
  push ()
  translate(rotater3.position.x, rotater3.position.y)
  rotate (angle3)
  rect(0,0,150,20)
  pop ()
  angle3 += 0.07

  ellipse(ball1.position.x,ball1.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);
  ellipse(ball3.position.x,ball3.position.y,10);
  ellipse(ball4.position.x,ball4.position.y,10);
  ellipse(ball5.position.x,ball5.position.y,10);
  rect(ground.position.x,ground.position.y,1200,20);
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);

  
 


  
  
}

