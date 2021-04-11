var engine
var world
var ground
var ball

function setup() {
  createCanvas(400,400);
  engine=Matter.Engine.create();
  world=engine.world;
  ball=Matter.Bodies.circle(200,100,50)
  Matter.World.add(world,ball)
  var a ={
    isStatic:true,
  }
  
  ground = Matter.Bodies.rectangle(200,370,400,30,a)
Matter.World.add(world,ground)
console.log(ground)
}

function draw() {
  background("black");  
  Matter.Engine.update(engine)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,430,30)
circle(ball.position.x,ball.position.y,50)
}
