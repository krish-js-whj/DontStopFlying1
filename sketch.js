var gameState=1
var birdySprite=0,canvas;
function preload(){
  birdyImg=loadImage("birdy.png");
  birdy2Img=loadImage("birdy2.png");
  wall=loadImage("wall.jpeg")
}
function setup() {
  canvas=createCanvas(800,400);
  birdy=createSprite(250, 300, 50, 50);
  birdy.velocityY=0;
  birdy.scale=0.5;
  birdy.debug=true;
  birdy.setCollider("circle",0,0,90);
  birdy.addImage(birdy2Img);
  birdy.addImage(birdyImg);
  obstacle1=createSprite(400,400,800,50);
  fill("black");
  image(wall,0,0);
  //obstacle1.addImage(wall);
  obstacle2=createSprite(350,20,185,190);
  //obstacle2.addImage(wall);
  obstacle3=createSprite(600,300,150,200);
  //obstacle3.addImage(wall);
  obstacle4=createSprite(295,20,185,306);
  //obstacle4.addImage(wall);
  obstacle1.debug=true
  edges=createEdgeSprites();
}

function draw() {
  gameState=2
  background(wall); 
  
drawSprites();
if (birdySprite==3){
  gameState=3;
}
if (birdy.isTouching(obstacle1)||birdy.isTouching(obstacle2)||birdy.isTouching(obstacle3)||birdy.isTouching(obstacle4)){
  gameState=3;
  birdySprite=3;
 // birdy.destroy();
}
if (birdy.isTouching(edges)){
  gameState=3;
  birdySprite=3;
}
if (birdySprite==2){
  birdy.addImage(birdyImg);
}
if (birdySprite==1){
  birdy.addImage(birdy2Img);
}
//up movement
  if (gameState!=3){
    if (mouseDown("left")){
      birdy.y=birdy.y-20;
      gameState=2;
  } // if(mouseX<birdy.x)
   if (keyWentDown("left")){
    birdySprite=1;    
    birdy.x-=20;
    birdy.y=birdy.y-20;
    gameState=2}
   // else if (mouseX>birdy.x)
   if (keyWentDown("right")){
    birdySprite=2;
    birdy.x+=20
    birdy.y=birdy.y-20;
    gameState=2}
   // if (mousePressedOver(birdy))
   
  else if (gameState==2)
        birdy.velocityY=+2;}
  
if (gameState==3){
    strokeWeight(3);
    stroke("black")
    textSize(30);   
    text("GAME ENDED ",300,200);
    console.log("Game did end")
    gameState=3
  }
  if (keyDown("space")){
   lvl3();
   
  }
}
//lvl1
//birdy.x=200;birdy.y=200;
//obstacle1.x=225;obstacle1.y=230;obstacle1.width=80;obstacle1.height=95;
//obstacle2.x=325;obstacle2.y=35;obstacle2.width=250;obstacle2.height=20;
//obstacle3.x=600;obstacle3.y=300;obstacle3.width=150;obstacle3.height=200;
//obstacle4.x=225;obstacle4.y=420;obstacle4.width=185;obstacle4.height=300;

//lvl2
//birdy.x=250;birdy.y=350;
//obstacle1.x=400;obstacle1.y=400;obstacle1.width=800;obstacle1.height=50;
//obstacle2.x=350;obstacle2.y=20;obstacle2.width=185;obstacle2.height=190;
//obstacle3.x=600;obstacle3.y=300;obstacle3.width=150;obstacle3.height=200;
//obstacle4.x=295;obstacle4.y=20;obstacle4.width=185;obstacle4.height=306;
function lvl3(){
  birdy.x=80;birdy.y=60
  obstacle1.x=364;obstacle1.y=10;obstacle1.width=330;obstacle1.height=200;
  obstacle2.x=65;obstacle2.y=270;obstacle2.width=35;obstacle2.height=250;
  obstacle3.x=590;obstacle3.y=252;obstacle3.width=55;obstacle3.height=48;
  obstacle4.x=330;obstacle4.y=258.5;obstacle4.width=495;obstacle4.height=35;
  gameState=2;
  birdySprite=2;
}
//lvl3
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//