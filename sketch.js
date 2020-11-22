const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var pendulam1;
var pendulam2;
var pendulam3;
var pendulam4;
var pendulam5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=Bodies.rectangle(340,200,200,30,{isStatic:false});
	World.add(world,roof);
	var ops={
		isStatic:true,
		friction:0.5,
		restitution:0.3,
		density:0.2
	 }
	pendulam1=Bodies.circle (460,400,2,ops);
	World.add(world,pendulam1);
	pendulam2=Bodies.circle (400,400,2,ops);
	World.add(world,pendulam2);
	pendulam3=Bodies.circle (340,400,2,ops);
	World.add(world,pendulam3);
	pendulam4=Bodies.circle (280,400,2,ops);
	World.add(world,pendulam4);
	pendulam5=Bodies.circle (220,400,2,ops);
	World.add(world,pendulam5);
	rope1=new Sling(pendulam1.body,roof.body,-2*2,0);
	Engine.run(engine);
  
}


function draw() {
 rectMode(CENTER);
  background(0);
  Engine.update(engine);

  //pendulam1.display();
  //pendulam2.display();
  ellipseMode(RADIUS);
  ellipse(pendulam1.position.x,pendulam1.position.y,30,30);
  ellipseMode(RADIUS);
  ellipse(pendulam2.position.x,pendulam2.position.y,30,30);
  ellipseMode(RADIUS);
  ellipse(pendulam4.position.x,pendulam4.position.y,30,30);
  ellipseMode(RADIUS);
  ellipse(pendulam3.position.x,pendulam3.position.y,30,30);
  ellipseMode(RADIUS);
  ellipse(pendulam5.position.x,pendulam5.position.y,30,30);

  rectMode(CENTER);
  rect(340,200,300,30);
  rope1.display();
}



