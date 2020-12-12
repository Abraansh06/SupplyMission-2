
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var l1,l2,l3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color("cyan")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 
    l1=Bodies.rectangle(350,650,200,20, {restitution:0.5,isStatic:true});
	//l1.shapeColor=("red");
	World.add(world,l1);
    

	l2=Bodies.rectangle(250,610,20,100, {restitution:0.5,isStatic:true});
	//l2.shapeColor=("red");
	World.add(world,l2);


	l3=Bodies.rectangle(450,610,20,100, {restitution:0.5,isStatic:true});
	//l3.shapeColor=("red");
	World.add(world,l3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  fill("red")
  rect(l1.position.x,l1.position.y,200,20)
  rect(l2.position.x,l2.position.y,20,100)
  rect(l3.position.x,l3.position.y,20,100)


  fill("cyan")
  rect(ground.position.x,ground.position.y,width,20)

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:false});
//	World.add(world, packageBody);
	
  }
}



