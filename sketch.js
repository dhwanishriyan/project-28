//Nmae spaces
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

//global variables
var engine, world;
var gameState = "SERVE";
var Bg, boy, tree, stone, ground, launcher;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;

//load the required images
function preload(){
	Bg = loadImage("BG.jpg");
	boy = loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 590);

	//create and add images to your world
	engine = Engine.create();
	world = engine.world; 

	//create mangoes
	mango1 = new Mango(1100, 60, 30);
	mango2 = new Mango(1000, 90, 30);
	mango3 = new Mango(1200, 150, 30);
	mango4 = new Mango(1125, 160, 30);
	mango5 = new Mango(1050, 125, 30);
	mango6 = new Mango(1050, 205, 30);
	mango7 = new Mango(970, 155, 30);
	mango8 = new Mango(1120, 240, 30);
	mango9 = new Mango(980, 250, 30);
	mango10 = new Mango(920, 199, 30);
	mango11 = new Mango(1200, 235, 30);


	//create other objects for the world
	tree = new Tree(1050, 600);
	ground = new Ground(width/2, 600, width, 20);

	stone = new Stone(235, 400, 30);
	launcher = new Sling(stone.body, {x : 239, y : 397});			
	Engine.run(engine);

}

function draw() {
	//clear the background
	background(Bg);
  
	//boy's image
	image(boy, 200, 360, 200, 300);
  
	//display all required objects one by one
	tree.display();
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
	mango11.display();
	ground.display();
  
	stone.display();
	launcher.display();
  
	//make the mangoes fall to the ground, when the stone's touchiing them
	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
	detectCollision(stone, mango9);
	detectCollision(stone, mango10);
	detectCollision(stone, mango11);
  
	if(mango1.body.position.y > 450 && mango2.body.position.y > 450 && mango3.body.position.y > 500 
	  && mango4.body.position.y > 450 && mango5.body.position.y > 450 && mango6.body.position.y > 500
	  && mango7.body.position.y > 500 && mango8.body.position.y > 500 && mango9.body.position.y > 500
	  && mango10.body.position.y > 500 && mango11.body.position.y > 500){
		  fill("lightgreen");
		  textSize(40);
		  textFont("Tahoma");
		  text("BRAVO!! YOU PLUCKED ALL THE MANGOES!!", 250, 200);
	}

	//Space key text
	stroke("#301607");
	fill("DARKGREEN");
	textSize(25);
	textFont("MS Gothic");
	text("Press SPACE for another chance!", 20, 50);  
}
  
function mouseDragged(){
	  if(gameState !== "LAUNCH"){
	  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}
function mouseReleased(){
	  launcher.fly();
}
  
function keyPressed(){
    if(keyCode === 32){
 	  Matter.Body.setPosition(stone.body,{x:235, y:400});
	  launcher.attach(stone.body);
    }
}  
  
function detectCollision(lstone, lmango){
   mangoBodyPosition = lmango.body.position;
   stoneBodyPosition = lstone.body.position;
 
   var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   if (distance <= lmango.r + lstone.r){
	  Matter.Body.setStatic(lmango.body, false);
    }
} 
  /*
  #DhRiTiD
  #DD
  */
