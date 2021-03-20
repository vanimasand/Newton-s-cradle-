
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofSurface=new Roof(width/2,height/4,width/5,20);
	
	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	rope1=new Rope(bobObject1.body,roofSurface.body,-bobDiameter*2,0)
	rope2=new Rope(bobObject2.body,roofSurface.body,-bobDiameter*1,0)
	rope3=new Rope(bobObject3.body,roofSurface.body,0,0)
	rope4=new Rope(bobObject4.body,roofSurface.body,bobDiameter*1,0)
	rope5=new Rope(bobObject5.body,roofSurface.body,bobDiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  roofSurface.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	}
}

function DrawLine(constraint)
{
  bobBodyPosition=constraint.bodyA.position;
  roofBodyPosition=constraint.bodyB.position;

  roofBodyOffset=constraint.point;

  roofBodyX=roofBodyPosition.x+roofBodyOffset.x;
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y;
  line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);
}



