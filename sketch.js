const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pendulam1;
var pendulam2;
var pendulam3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	pendulam1=new Ball (400,350,4);
	pendulam2=new Ball (200,350,2);
	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(0);
  pendulam1.display();
  pendulam2.display();
  Engine.update(engine);
}



