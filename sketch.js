
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
 var tower;
var ground,cannon;
var backgroundImg;
var ball;

function preload(){
backgroundImg=loadImage("assets/background.gif")
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle=-PI/4;
  tower=new Tower(150,350,160,350);
  ground = new Ground(600,590,1200,20);
  cannon = new Cannon(180,110,110,50,angle)
  ball = new CannonBall(cannon.x,cannon.y)
}


function draw() {
background(0);
image(backgroundImg,0,0,width,height)
Engine.update(engine);
tower.display();
ground.display();
cannon.display();
ball.display();
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    ball.shoot();
  }
}
