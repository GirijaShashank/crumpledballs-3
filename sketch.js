var dustbin,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	dustbin = loadImage("sprites/dustbingreen.png");
}		

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	// var render = Render.create({
		
	// 	element: document.body,
	// 	engine: engine,
	// 	options: {
	// 		width: 800,
	// 		height: 700,
	// 		wireframe: false
	// 	}
	// });

	// Render.run(render);

	ground = new Ground(400,670,800,20);

	bin= createSprite(700,595,15,80);
	bin.addImage(dustbin);
	bin.scale = 0.4;

    bin1 = new Dustbin(700,653,100,15);
	bin2 = new Dustbin(660,605,15,110);
	bin3 = new Dustbin(740,605,15,110);
	
	paper1 = new Paper(50,650,50);

	slingshot = new Slingshot(paper1.body,{x:100, y:300});

}

function draw() {
  rectMode(CENTER);
  background(230);
  bin1.display();
  bin2.display();
  bin3.display();
  paper1.display();
  ground.display();
  slingshot.display();
 
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	slingshot.fly();
  }

  function keyPressed(){
	if(keyCode === 32){
	   slingshot.attach(paper1.body);
	   Matter.Body.setPosition(paper1.body,{x:100,y:300});
	}}

