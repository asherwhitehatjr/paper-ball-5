
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}	

	Matter.bodies.Circle(3,4,5,ball_options);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display();

  groundObj = new ground(width/2,670,width,20);
  leftSide = newground(1100,600,20,120);
  rightSide = newground(1200,700,20,120);
  
  drawSprites();
 
}

function keypressed(){
	if (keycode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
	}


}


