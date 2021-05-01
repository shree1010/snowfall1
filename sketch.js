const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var boy;
var engine, world,Matter;
var backgroundImg;
var snowfallImg;
var snowfall;
function preload(){
  backgroundImg=loadImage("snow1.jpg");
  snowfallImg=loadImage("snow4.webp");
  boy=loadImage("istockphoto-668116482-612x612.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  snowfall=new Snowfall(200,200,5);
  boy=new Boy(500,200);
}

function draw() {
  background(backgroundImg);  
 snowfall.display();
 boy.display();
  drawSprites();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(boy.position,{x:-50,y:-45})
  }
}
