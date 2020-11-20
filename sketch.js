
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone , mango1 , catapult , boy , tree , ground , treeImg , chance=5 , state="play";

function preload()
{
	treeImg = loadImage("tree.png");
	boyImg = loadImage("boy.png");
	
}

function setup() {
	createCanvas(1000, 800);
    background("lightgrey");

	tree=createSprite(750,500,10,10);
	tree.addImage(treeImg);
	tree.scale=0.5;

	boy=createSprite(200,700,10,10);
	boy.addImage(boyImg);
	boy.scale=0.1;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(500,775,1000,50);
	stone=new Stone(140,650,30);
	catapult=new SlingShot(stone.body,{x:140,y:650});

	mango1=new Mango(600,400,40);
	mango2=new Mango(760,320,40);
	mango3=new Mango(720,460,40);
	mango4=new Mango(920,360,40);
	mango5=new Mango(840,420,40);
	mango6=new Mango(620,300,40);
	mango7=new Mango(900,300,40);
	mango8=new Mango(700,400,40);
	mango9=new Mango(800,240,40);
	mango10=new Mango(700,300,40);

	Engine.run(engine);
  
}


function draw() {
  background("lightblue");

  drawSprites();

  textSize(20);
  if(state==="play"){
  text("Press  space  to  play  again . ",200,200);
  }
  text(chance+" lives left .",200,300);
  textSize(200);
  Engine.update(engine);

  ground.display();
  stone.display();
  catapult.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  detectCollision(mango5,stone);
  detectCollision(mango6,stone);
  detectCollision(mango7,stone);
  detectCollision(mango8,stone);
  detectCollision(mango9,stone);
  detectCollision(mango10,stone);

  if(chance===0){
    state="end";
  }
  if(state==="end"){
    text("gameOver",20,200);
  }
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    catapult.fly();
    chance=chance-1;
}
function detectCollision(mango,stone){
  mangoBodyPosition=mango.body.position;
  stoneBodyPosition=stone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=70)
    {
  	  Matter.Body.setStatic(mango.body,false);
    }

  } 
  function keyPressed() {
    if (keyCode === 32 && state==="play") {
      Matter.Body.setPosition(stone.body, {x:420, y:650}) 
      catapult.attach(stone.body);
    }
    }
     





