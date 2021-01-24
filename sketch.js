
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var rubber;  
var ground; 
var stone; 
var iron; 
var sand1, sand2, sand3, sand4, sand5, sand6, sand7; 

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
    

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	hammer= new Hammer(0, 0, 200, 50);

	ground= new Plane(450, 700, 1500, 100);

	rubber= new Rubber(430, 600);

	stone= new Stone(430, 380, 70, 70);

	sand1= new Sand(435, 600);
	sand2= new Sand(435, 600);
	sand3= new Sand(435, 600);
	sand4= new Sand(435, 600);
	sand5= new Sand(435, 600);
	sand6= new Sand(435, 600);
	sand7= new Sand(435, 600);

	iron= new Iron(400, 600, 70, 70);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


	hammer.display();
	ground.display();
	rubber.display();
	stone.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
    sand7.display();
    iron.display();
  drawSprites();
 
}



