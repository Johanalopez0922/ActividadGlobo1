var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg; 
var obstTop1, obstTop2; 
var obsBottom1, obsBottom2, obsBottom3; 

function preload(){
bgImg = loadImage("assets/bg.png"); 
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png"); 

obstTop1 = loadImage("obstTop1.png"); 
obstTop2 = loadImage("obstTop2.png"); 

obsBottom1 = loadImage("")
obsBottom2 = loadImage("")
obsBottom3 = loadImage("")
}

function setup(){

//Imagen de fondo
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//Crear bases superiores e inferiores
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = true;

topGround = createSprite(200,10,800,20);
topGround.visible = true;
      
//Crear globo      
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          if(keyDown()) {
                       
          }

          //gravedad
           balloon.velocityY = balloon.velocityX+2;
   
        drawSprites();
        
}
