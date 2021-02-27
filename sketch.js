const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){

  img = loadImage("images/GamingBackground.png");

}

function setup(){

  createCanvas(1360, 620);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 390, 1200, 13);

  hero = new Hero(200, 140);

  rope = new Fly(hero.body,{x:200, y:100});

  a1 = new Box(420, 370, 40, 40);
  a2 = new Box(420, 320, 40, 40);
  a3 = new Box(420, 280, 40, 40);
  a4 = new Box(420, 240, 40, 40);
  a5 = new Box(420, 200, 40, 40);
  a6 = new Box(420, 160, 40, 40);

  b1 = new Box(490, 370, 40, 40);
  b2 = new Box(490, 320, 40, 40);
  b3 = new Box(490, 280, 40, 40);
  b4 = new Box(490, 240, 40, 40);
  b5 = new Box(490, 200, 40, 40);
  b6 = new Box(490, 160, 40, 40);
  b7 = new Box(490, 120, 40, 40);

  c1 = new Box(560, 370, 40, 40);
  c2 = new Box(560, 320, 40, 40);
  c3 = new Box(560, 280, 40, 40);
  c4 = new Box(560, 240, 40, 40);
  c5 = new Box(560, 200, 40, 40);
  c6 = new Box(560, 160, 40, 40);
  c7 = new Box(560, 120, 40, 40);
  c8 = new Box(560, 80, 40, 40);

  d1 = new Box(630, 370, 40, 40);
  d2 = new Box(630, 320, 40, 40);
  d3 = new Box(630, 280, 40, 40);
  d4 = new Box(630, 240, 40, 40);
  d5 = new Box(630, 200, 40, 40);
  d6 = new Box(630, 160, 40, 40);
  d7 = new Box(630, 120, 40, 40);
  d8 = new Box(630, 80, 40, 40);
  d9 = new Box(630, 40, 40, 40);

  monster = new Monster(790, 280);

}

function draw(){

  background(img);
  Engine.update(engine);

  ground.display();
  hero.display();
  rope.display();

  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();
  a6.display();
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();
  c7.display();
  c8.display();

  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  d8.display();
  d9.display();

  monster.display();

}

function mouseDragged(){

  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});

}