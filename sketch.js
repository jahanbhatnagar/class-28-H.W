
var dustbin,dustbin1,dustbin2,ground,ball,slingShot;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
//paper = loadImage("paper.png")	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
     ground = new Ground(400,490,800,20);
	 paper = new Ball(100,100);
	// paper.addImage(paper.png);
	 slingShot = new Slingshort(paper.body,{x:100,y:100});

	 dustbin = new Dustbin(550,420,10,100);
    dustbin1 = new Dustbin(600,470,100,10);
    dustbin2 = new Dustbin(650,420,10,100);
	Engine.run(engine);
  
}


function draw() {
 
  background("blue");
  paper.display();
  ground.display();
  slingShot.display();
  dustbin.display()
  dustbin1.display()
  dustbin2.display()
  
  drawSprites();
 
}
function mouseDragged(){

	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
	
	}
	function mouseReleased(){
	
		slingShot.fly();
	}



