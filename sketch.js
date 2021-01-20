var C1,P1
var C2,P2
var C3,P3
var gameState = "PLAY";
var C1Img,P1Img,C2Img,P2Img;
var C3Img,P3Img;

function preload(){
  C1Img = loadImage("c1.png");
  P1Img = loadImage("p1.png");
  C2Img = loadImage("c2.png");
  P2Img = loadImage("p2.png");
  C3Img = loadImage("c3.png");
  P3Img = loadImage("p3.png");
}                                                                        //  1 paper        2 sci         3 stone

function setup() {
  createCanvas(1200, 400);
  
  C1=createSprite(1000,200,100,100);
  C1.addImage("cp",C1Img);
  C1.visible=false;

  C3=createSprite(1000,200,100,100);
  C3.addImage("cs",C3Img);
  C3.visible=false;
  
  C2=createSprite(1000,200,100,100);
  C2.addImage("csi",C2Img);
  C2.visible=false;
  
  P1=createSprite(1000,200,100,100);
  P1.addImage("Pp",P1Img);
  P1.visible=false;
  
  P3=createSprite(1000,200,100,100);
  P3.addImage("Ps",P3Img);
  P3.visible=false;
  
  P2=createSprite(1000,200,100,100);
  P2.addImage("P2",P2Img);
  P2.visible=false;

  var rand =Math.round(random(1,3));
  
}

function draw() {
  background(220);


  if(keyDown("space")){
      
  }
// 1. rename the images as image1,2,3
// 2. image.visible= false;
//3. var rand =random(1,3)
//4. spawnrandom / visible = true / use switch case ;
//5. if condition / set score / set text
// 6. win /lose

  drawSprites();
}