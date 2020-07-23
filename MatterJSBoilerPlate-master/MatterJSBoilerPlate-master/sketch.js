
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  paper,ground;
var log1,log2,log3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
  
 

  ground = new Ground();
  paper = new Paper();    
  

log1 = new Log(600,555,10,80);
log2 = new Log(500,557,10,80);
log3 = new Log(550,590,100,10);
Engine.run(engine);
  
}

function draw() {
background(0);
  rectMode(CENTER);


  ground.display();
log1.display();
log2.display();
log3.display();


paper.display();
keypressed();

  drawSprites();

 
}
function keypressed(){
if(keyCode===UP_ARROW){
 
  Matter.Body.applyForce(paper.body, paper.body.position,{x:3,y:-3});


}

}


