
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
	Dustbin= new Ground(600,600,10,120);
	Dustbin2= new DustBin(645,647,200,80);
	Dustbin3= new Ground(710,600,10,120);
	ball= new Ball(200,100,40);
	ground= new Ground(400,660,800,20);
	
	
	//Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  fill("white");
  Dustbin.display();
  fill("white");
  Dustbin3.display();
  fill("white");
  Dustbin2.display();
  fill("yellow");
  ground.display();
  fill("magenta");
  ball.display();
  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:250, y:-250});
	}
}

