var gameState=1
var birdySprite=0,canvas;stageCleared=false;
function preload(){
  birdyImg=loadImage("birdy.png");
  birdy2Img=loadImage("birdy2.png");
  wall=loadImage("wall.jpeg")
}
function setup() {
  canvas=createCanvas(800,400);
  birdy=createSprite(730, 200, 50, 50);
   birdy.scale=0.5;
  //birdy.debug=true;
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
  //obstacle1.debug=true
  edges=createEdgeSprites();
  lvl1()
gameState=1;
}

function draw() {
  
  background(wall); 
  
drawSprites();
fill("white")
textSize(20);


text("x= "+birdy.x+"    y= "+birdy.y+"    Stage= "+lvl,20,20 );
if (birdySprite==3){
  gameState=3;
}
if (birdy.isTouching(obstacle1)||birdy.isTouching(obstacle2)||birdy.isTouching(obstacle3)||birdy.isTouching(obstacle4)){
  gameState=3;
  birdySprite=3;
  birdy.x=-100;
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
      birdySprite=0;
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
    stroke("white")
    textSize(30);   
    text("GAME ENDED ",300,200);
    gameState=3
    if (keyDown("r")){
      restart();
      gameState=1;
      birdySprite=0;
      birdy.setVelocity(0,0);
    }
  }
  if ((lvl==1||lvl==2||lvl==4) && (birdy.x>700 && birdy.x<770) && (birdy.y>300) && gameState!=3){
    stageCleared=true;
    birdySprite=4;
  }
  else if (lvl==1|| lvl==2|| lvl==4 && stageCleared==false){
    noStroke()
    textSize(25)
    text("Exit!!",720,350);
  }
  if (lvl==3 && (birdy.x>120 && birdy.x<170) && (birdy.y>300) && gameState!=3){
    stageCleared=true;
    birdySprite=4;
  }else if (lvl==3 && stageCleared==false){
    noStroke()
    textSize(25)
    text("Exit!!",130,350);
  }
  if (stageCleared==true){
   gameState=5;
  birdySprite=5;
   textSize(30);
   if (lvl==1){lvl2();birdy.y=80;lvl=2;stageCleared=false;}
   else if (lvl==2){lvl3();lvl=3;stageCleared=false; }
   else if(lvl==3){lvl2();lvl=4;birdy.x=100;birdy.y=70;lvl=4;stageCleared=false; }
  else if(lvl==4){won();lvl='Final';stageCleared=false}
  
}
if (birdySprite==4){
  gameState=5;}
  if (gameState==5){
   birdy.setVelocity(0,0);
   textSize(30)
   fill("white");
   text("Stage Cleared",300,200);

  }

}

function lvl1(){
  lvl=1
  birdy.x=70;birdy.y=250;
  obstacle1.x=225;obstacle1.y=230;obstacle1.width=80;obstacle1.height=95;
  obstacle2.x=325;obstacle2.y=35;obstacle2.width=250;obstacle2.height=20;
  obstacle3.x=600;obstacle3.y=300;obstacle3.width=150;obstacle3.height=200;
  obstacle4.x=225;obstacle4.y=420;obstacle4.width=185;obstacle4.height=300;
}
function lvl2(){
  obstacle1.x=400;obstacle1.y=400;obstacle1.width=800;obstacle1.height=50;
  obstacle2.x=330;obstacle2.y=20;obstacle2.width=185;obstacle2.height=190;
  obstacle3.x=600;obstacle3.y=300;obstacle3.width=150;obstacle3.height=200;
  obstacle4.x=275;obstacle4.y=20;obstacle4.width=185;obstacle4.height=306;
  stageCleared=false;
  
}
function lvl3(){
  lvl=3;    
  birdy.x=80;birdy.y=85
  obstacle1.x=364;obstacle1.y=40;obstacle1.width=330;obstacle1.height=100;
  obstacle2.x=65;obstacle2.y=270;obstacle2.width=35;obstacle2.height=250;
  obstacle3.x=590;obstacle3.y=243;obstacle3.width=55;obstacle3.height=65;
  obstacle4.x=330;obstacle4.y=240;obstacle4.width=495;obstacle4.height=35;
  stageCleared=false;

}
function won(){
  text("YOU WIN?",300,200)
}
function restart(){
  if (lvl==1){lvl1()}
  if (lvl==2){lvl1()}
  if (lvl==3){lvl3()}
  if (lvl=='final'){lvl2();birdy.x=100;birdy.y=70}
}
