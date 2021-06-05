
//const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var player,player_img,cop,cop_img,box_img, coins , coins_ing;
var wall1 , HP=100;
var world,engine;
var gameState="level1",level2;
function preload (){
  player_img=loadImage("png/player.png");
  cop_img=loadImage("png/bot.png");
  box_img=loadImage("png/box.png");
  coins_ing=loadImage("png/coin.png")
}
function setup() {
  createCanvas(1200,1200);
    
    engine = Engine.create();
    world = engine.world;

 player=createSprite(150,900, 50, 50);
 player.addImage(player_img);
 player.scale=0.5;

 cop=createSprite(500,290,20,20);
 cop.addImage(cop_img);
 cop.scale=0.27;

 coins=createSprite(500,200,20,20);
 coins.addImage(coins_ing);
 coins.scale=0.23

 cop2=createSprite(900,250,20,20);
 cop2.addImage(cop_img);
 cop2.scale=0.27;

 cop3=createSprite(1100,600,20,20);
 cop3.addImage(cop_img);
 cop3.scale=0.27
 
 cop4=createSprite(200,290,20,20);
 cop4.addImage(cop_img);
 cop4.scale=0.27;

wall1=createSprite(100,600,40,800);
wall2=createSprite(600,1000,600,40);
wall3= createSprite(690,700,1200,40);
wall4 = createSprite (300,200,40,600);
wall5 = createSprite(600,1000,1000,40);
wall6 = createSprite(620,200,40,600);
wall7 =createSprite (980,480,700,40);
wall8 = createSprite (1000,140,40,380);


}

function draw() {
  background(255,255,255); 

 textSize(20);
 fill("red");
  text("Hp: "+HP,player.x,player.y-40);

  camera.x=player.x;
 camera.y=player.y;
if( keyDown (UP_ARROW) ){
 player.rotation=0;
  player.y=player.y-30;
 }
if(keyDown(DOWN_ARROW)){
player.rotation=180;
  player.y=player.y+30;
 }
if(keyDown(RIGHT_ARROW)){
  player.rotation=90;
player.x=player.x+30;
}
if(keyDown(LEFT_ARROW)){
player.rotation=-90;
  player.x=player.x-30;
}

if(gameState==="level1"){

player.bounceOff(wall1);
player.bounceOff(wall2);
player.bounceOff(wall3);
player.bounceOff(wall4);
player.bounceOff(wall5);
player.bounceOff(wall6);
player.bounceOff(wall7);
player.bounceOff(wall8);

if(player.isTouching(cop)){
cop.destroy();
HP=HP-20;
}
if(player.isTouching(cop4)){
  cop4.destroy();
  HP=HP-20;
  gameState="level2";
  }
  if(player.isTouching(cop3)){
    cop3.destroy();
    HP=HP-20;
    }
    if(player.isTouching(cop2)){
      cop2.destroy();
      HP=HP-20;
      }

      if(player.isTouching(coins)){
        HP=100;
        coins.destroy();
      }
   
 }
   if(gameState==="level2"){

    wall9 = createSprite(-50,500,800,40);
    wall10 = createSprite(-50,300,40,700);
    wall11 = createSprite(-200,700,40,800);
    wall12 = createSprite(-50,30,800,40);


   }

drawSprites();

}