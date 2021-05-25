var bgImg, junglebg
var happyManImg, man, scaredManImg
var treasure, treasureImg
var edges;

function preload(){
bgImg= loadImage("bg9.jpg");
happyManImg = loadImage("happy_traveller.png");
scaredManImg = loadImage("scared_traveller.png");
treasureImg = loadImage("treasure_2.png");
}

function setup(){
  
  canvas = createCanvas(1000,900);

  junglebg= createSprite(500,500,10,10);
  junglebg.addImage(bgImg)
  junglebg.scale = 3.9
  
  man = createSprite(600,800,20,20);
  man.addImage(happyManImg);
  man.scale = 0.4

  treasure = createSprite(500,60,50,50);
  treasure.addImage(treasureImg);
  treasure.scale = 0.6
}




function draw(){
  background(bgImg);

  edges = createEdgeSprites();

man.bounceOff(edges);

  if(keyDown(UP_ARROW)){
    man.velocityY=-2;
    }
    
    if(keyDown(DOWN_ARROW)){
    man.velocityY=2;
    }
    
    if(keyDown(LEFT_ARROW)){
    man.velocityX=-2;
    }
    
    if(keyDown(RIGHT_ARROW)){
    man.velocityX=2;
    }
    
    if (man.isTouching(treasure))
    {
      //textColor("yellow")
      textSize(40);
      text("YAY! TREASURE TAKEN",100,180);
    }

    
  drawSprites();
}

 