var PLAY = 1;
var END = 0;
var ENDING = 2;
var HARD = 3;
var gameState = PLAY;

var npc1, npc2, npc3, npc4, bnpc, player;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11;
var button, lasers;
var laser1, laser2, laser3, button1, button2, button3;
var bullets, bullet1, bullet2, bullet3, bullet4, bbullet1, bbullet2, bbullet3, bbullet4;

var wallsGroup, npcGroup, bulletsGroup1, bulletsGroup2, bulletsGroup3, bulletsGroup4, bulletsGroupb, bulletsGroupbR, playerBGroup;
var pb1, pb2, pb3, pb4;

var middle1, middle2;

var invisWall;

var door;

var hardLb;

var hitbox1, hitbox2, hitbox3, hitbox4, hitbox5;

var buttonOnImg, buttonOffImg, npcImg1, npcImg2, playerImg, bnpcImg;

var pdeath, npcdeath, laserOff, laserdeath, yayyy;

var epicdab;

var bruh;

var warning;

var grass;

var wishlistkarlson;

function preload(){
  buttonOnImg = loadImage("sprite_3.png");
  buttonOffImg = loadImage("sprite_4.png");

  npcImg1 = loadImage("sprite_0.png");
  npcImg2 = loadImage("sprite_1.png");

  bnpcImg = loadImage("sprite_5.png")

  playerImg = loadImage("sprite_2.png")

  grass = loadImage("pngegg.png")

  pdeath = loadSound("roblox-death-sound_1.mp3");
  npcdeath = loadSound("sf_riffle.mp3");
  laserOff = loadSound("sf_laser_15.mp3");
  laserdeath = loadSound("laser7.mp3");

  epicdab = loadSound("Karlson-Vibe.mp3");

  wishlistkarlson = loadSound("WishlistKarlson.mp3")

  yayyy = loadSound("yayyy.mp3");
}

function setup() {
  createCanvas(800, 800);

  edges = createEdgeSprites();

  hardLb = createSprite(685, 750, 20, 20);
  hardLb.shapeColor = "red";

//warning
  warning = createSprite(750, 80, 20, 20);
  warning.visible = false;  

//to mark the center (not part of the game)
  //middle1 = createSprite(400, 400, 800, 1);
  //middle2 = createSprite(400, 400, 1, 800);

//the player
  player = createSprite(750, 80, 20, 20);
  player.addImage(playerImg);
  player.scale = 0.2
  player.setCollider("rectangle", 0, 0, 180, 130)
  //player.debug = true;
  player.shapeColor = "green";

//the walls  
  wall1 = createSprite(720, 80, 10, 800);
  wall1.shapeColor = "black";
  wall2 = createSprite(650, 480, 150, 10);
  wall2.shapeColor = "black";
  wall3 = createSprite(720, 700, 10, 200);
  wall3.shapeColor = "black";
  wall4 = createSprite(650, 730, 10, 160);
  wall4.shapeColor = "black";
  wall5 = createSprite(580, 650, 150, 10);
  wall5.shapeColor = "black";
  wall6 = createSprite(580, 580, 100, 10);
  wall6.shapeColor = "black";
  wall7 = createSprite(570, 235, 10, 500);
  wall7.shapeColor = "black";
  wall8 = createSprite(500, 600, 10, 400);
  wall8.shapeColor = "black";
  wall9 = createSprite(425, 200, 10, 500);
  wall9.shapeColor = "black";
  wall10 = createSprite(280, 650, 300, 10);
  wall10.shapeColor = "black";
  wall11 = createSprite(280, 325, 10, 650);
  wall11.shapeColor = "black";

//invisWall (for boss(bnpc) movement)
 invisWall = createSprite(125, 250, 300, 10)
 invisWall.visible = false;

//the npc (the bad guys)
 npc1 = createSprite(350, 80, 20, 20);
 npc1.addImage(npcImg1);
 npc1.scale = 0.2
 npc1.shapeColor = "brown";
 npc2 = createSprite(500, 150, 20, 20);
 npc2.addImage(npcImg1);
 npc2.scale = 0.2
 npc2.shapeColor = "brown";
 npc3 = createSprite(280, 720, 20, 20);
 npc3.addImage(npcImg1);
 npc3.scale = 0.2
 npc3.shapeColor = "brown";
 npc4 = createSprite(145, 350, 20, 20);
 npc4.addImage(npcImg2);
 npc4.scale = 0.2
 npc4.shapeColor = "brown";

//the boss npc
  bnpc = createSprite(100, 60, 50, 50);
  bnpc.addImage("boss", bnpcImg);
  bnpc.scale = 0.5
  bnpc.shapeColor = "purple";

//invisible hitboxes for boss
  hitbox1 = createSprite(100, 100, 155, 90);
  hitbox2 = createSprite(100, 100, 153, 93);
  hitbox3 = createSprite(100, 100, 156, 96);
  hitbox4 = createSprite(100, 100, 159, 99);
  hitbox5 = createSprite(100, 100, 162, 102);
  hitbox1.visible = false;
  hitbox2.visible = false;
  hitbox3.visible = false;
  hitbox4.visible = false;
  hitbox5.visible = false;
   
//door
  door = createSprite(65, 650, 130, 10)
  door.shapeColor = "red";

//laser and buttons (buttons are to disable the lasers)
  laser1 = createSprite(535, 480, 60, 10);
  laser1.shapeColor = "red";
  laser2 = createSprite(462, 445, 66, 10);
  laser2.shapeColor = "red";
  laser3 = createSprite(463, 650, 66, 10);
  laser3.shapeColor = "red";

  button1 = createSprite(760, 750, 15, 15)
  //button1.addImage(buttonOnImg);
  button1.shapeColor = "blue"
  button2 = createSprite(500, 60, 15, 15)
  //button2.addImage(buttonOnImg);
  button2.shapeColor = "blue"
  button3 = createSprite(350, 40, 15, 15)
  //button3.addImage(buttonOnImg);
  button3.shapeColor = "blue"
  button4 = createSprite(50, 780, 15, 15)
  //button4.addImage(buttonOnImg);
  button4.shapeColor = "yellow"

//Group
  wallsGroup = new Group();
  npcGroup = new Group();
  playerBGroup = new Group();
  bulletsGroup1 = new Group();  
  bulletsGroup2 = new Group();
  bulletsGroup3 = new Group();
  bulletsGroup4 = new Group();
  bulletsGroupb = new Group();
  bulletsGroupbR = new Group();

//velocity for the npcs
  npc1.velocityX = -2;
  npc2.velocityX = -2;
  npc3.velocityY = -2;
  npc4.velocityX = -3;

  bnpc.velocityX = +3;
  bnpc.velocityY = +2;

  epicdab.play(true);
  epicdab.setVolume(1);
}

function draw() {
  
  background("lightblue");

  fill("red");
  textSize(15);
  text("AND LOWER YOUR VOLUME!", 550, 550)

  hitbox1.x = bnpc.x;
  hitbox1.y = bnpc.y;

  wallsGroup.add(wall1);
  wallsGroup.add(wall2);
  wallsGroup.add(wall3);
  wallsGroup.add(wall4);
  wallsGroup.add(wall5);
  wallsGroup.add(wall6);
  wallsGroup.add(wall7);
  wallsGroup.add(wall8);
  wallsGroup.add(wall9);
  wallsGroup.add(wall10);
  wallsGroup.add(wall11);

  npcGroup.add(npc1);
  npcGroup.add(npc2);
  npcGroup.add(npc3);
  npcGroup.add(npc4);

  if(gameState === PLAY){
    if(player.isTouching(warning)){
      wishlistkarlson.play();
      warning.destroy();
    }

    if(keyDown("LEFT_ARROW")){
      player.x = player.x -5;
    }
    if(keyDown("RIGHT_ARROW")){
      player.x = player.x +5;
    }
    if(keyDown("UP_ARROW")){
       player.y = player.y -5;
    }
    if(keyDown("DOWN_ARROW")){
       player.y = player.y +5;
    }
    
    if(player.isTouching(button1)){
      laser1.velocityX = +1000;
      button1.shapeColor = "grey";
      laserOff.play();
      laserOff.setVolume(5);
      button1.lifetime = 10;
    }
    if(player.isTouching(button2)){
      laser2.velocityX = +1000;
      button2.shapeColor = "grey";
      laserOff.play();
      laserOff.setVolume(5);
      button2.lifetime = 10;
    }
    if(player.isTouching(button3)){
      laser3.velocityX = +1000;
      button3.shapeColor = "grey";
      laserOff.play();
      laserOff.setVolume(5);
      button3.lifetime = 10;
    }
    if(player.isTouching(button4)){
      door.velocityX = +1000;
      button4.shapeColor = "grey";
      laserOff.play();
      laserOff.setVolume(5);
      button4.lifetime = 10;
    } 
    
    //framecounts for bullets 
    if(frameCount % 20 === 0){
      bullet1 = createSprite(npc1.x, 90, 5, 5);
      bullet2 = createSprite(npc2.x, 160, 5, 5);
      bullet3 = createSprite(290, npc3.y, 5, 5);
      bullet1.shapeColor = "brown";
      bullet2.shapeColor = "brown";
      bullet3.shapeColor = "brown";
      bullet4.shapeColor = "brown";
      bullet1.velocityY = 6;
      bullet2.velocityY = 6;
      bullet3.velocityX = 8;
      
      bullet1.lifetime = 93;
      bullet2.lifetime = 40;
      bullet3.lifetime = 25;
  
      bulletsGroup1.add(bullet1)
      bulletsGroup2.add(bullet2)
      bulletsGroup3.add(bullet3)
    }
    if(frameCount % 12 === 0){
      bullet4 = createSprite(npc4.x, 360, 5, 5)
      bullet4.shapeColor = "brown";
      bullet4.velocityY = 8;
  
      bullet4.lifetime = 35
  
      bulletsGroup4.add(bullet4)
    }
    if(frameCount % 8 === 0){
      bbullet1 = createSprite(bnpc.x, bnpc.y, 5, 5);
      bbullet2 = createSprite(bnpc.x, bnpc.y, 5, 5);
      bbullet3 = createSprite(bnpc.x, bnpc.y, 5, 5);
      bbullet4 = createSprite(bnpc.x, bnpc.y, 5, 5);
      bbullet1.shapeColor = "brown";
      bbullet2.shapeColor = "brown";
      bbullet3.shapeColor = "brown";
      bbullet4.shapeColor = "brown";
      
  
      bbullet1.velocityY = 9;
      bbullet2.velocityY = -9;
      bbullet3.velocityX = -9;
      bbullet4.velocityX = 9;
      
  
      bbullet1.lifetime = 30;
      bbullet2.lifetime = 30;
      bbullet3.lifetime = 30;
      bbullet4.lifetime = 30;
      
  
      bulletsGroupb.add(bbullet1);
      bulletsGroupb.add(bbullet2);
      bulletsGroupb.add(bbullet3);
      bulletsGroupbR.add(bbullet4);
    }

    if(bulletsGroupbR.isTouching(wallsGroup)){
      bulletsGroupbR.destroyEach();
    }
  
  //if pb hits npc they ded
  if(playerBGroup.isTouching(npc1)){
    npc1.x = 1500;
    npc1.velocityX = 0;
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(20);
  }
  if(playerBGroup.isTouching(npc2)){
    npc2.x = 1500;
    npc2.velocityX = 0;
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(20);
  }
  if(playerBGroup.isTouching(npc3)){
    npc3.y = 1500;
    npc3.velocityY = 0;
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(20);
  }  
  if(playerBGroup.isTouching(npc4)){
    npc4.x = 1500;
    npc4.velocityX = 0;
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(20);
  }

  //boss is destroyed
  if(playerBGroup.isTouching(bnpc)){
    gameState = ENDING;
    npcdeath.play();
    npcdeath.setVolume(20);
    yayyy.play();
    yayyy.setVolume(20);
  }

  //how many times you have to hit to destroy the boss
  if(playerBGroup.isTouching(hitbox1)){
    hitbox1.destroy();
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(20);
  }
  if(playerBGroup.isTouching(hitbox2)){
    hitbox2.destroy();
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(20);
  }
  if(playerBGroup.isTouching(hitbox3)){
    hitbox3.destroy();
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(20);
  }
  if(playerBGroup.isTouching(hitbox4)){
    hitbox4.destroy();
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(20);
  }
  if(playerBGroup.isTouching(hitbox5)){
    hitbox5.destroy();
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(20);
  }
  
  //player gun
  if(keyDown("w")){
    pb1 = createSprite(player.x, player.y, 5, 5);
  
    pb1.velocityY = -6;
  
    pb1.lifetime = 40;
  
    playerBGroup.add(pb1);
  }
  if(keyDown("s")){
    pb2 = createSprite(player.x, player.y, 5, 5);
  
    pb2.velocityY = 6;
  
    pb2.lifetime = 40;
  
    playerBGroup.add(pb2);
  }
  if(keyDown("a")){
    pb3 = createSprite(player.x, player.y, 5, 5);
  
    pb3.velocityX = -6;
  
    pb3.lifetime = 40;
  
    playerBGroup.add(pb3);
  }
  if(keyDown("d")){
    pb4 = createSprite(player.x, player.y, 5, 5);
  
    pb4.velocityX = 6;
  
    pb4.lifetime = 40;
  
    playerBGroup.add(pb4);
  }
  if(playerBGroup.isTouching(wallsGroup)){
    playerBGroup.destroyEach();
  }

  fill("red")
  textSize(10)
  text("HARD MODE", hardLb.x- 30, 740)

  if(player.isTouching(bulletsGroup1) || player.isTouching(bulletsGroup2) || player.isTouching(bulletsGroup3) || player.isTouching(bulletsGroup4) || player.isTouching(bulletsGroupb) || player.isTouching(bulletsGroupbR) || player.isTouching(npc1) || player.isTouching(npc2) || player.isTouching(npc3) || player.isTouching(npc4) || player.isTouching(bnpc)){
     gameState = END;
     pdeath.play();
     pdeath.setVolume(20);
     
  }else if(player.isTouching(laser1) || player.isTouching(laser2) || player.isTouching(laser3)){
   gameState = END;
   pdeath.play();
   pdeath.setVolume(20);
  }
  if(player.isTouching(hardLb)){
    gameState = HARD;
  } 
  } else if(gameState === END){
    background("blue");

    epicdab.stop();

    wallsGroup.destroyEach();
    playerBGroup.destroyEach();
    bulletsGroup1.destroyEach();
    bulletsGroup2.destroyEach();
    bulletsGroup3.destroyEach();
    bulletsGroup4.destroyEach();
    bulletsGroupb.destroyEach();
    npcGroup.destroyEach();

    hardLb.destroy();

    laser1.destroy();
    laser2.destroy();
    laser3.destroy();
    button1.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    door.destroy();

    bnpc.destroy();

    player.destroy();
    
    fill("black");
    textSize(20)
    text("You failed your mission successfully! Press reload this page to restart!", 40, 400);
    
    fill("black");
    textSize(40);
    text("You Have Failed!", 400, 200);

  } else if(gameState === ENDING){
    background("gold");

    epicdab.stop();

    wallsGroup.destroyEach();
    playerBGroup.destroyEach();
    bulletsGroup1.destroyEach();
    bulletsGroup2.destroyEach();
    bulletsGroup3.destroyEach();
    bulletsGroup4.destroyEach();
    bulletsGroupb.destroyEach();
    bulletsGroupbR.destroyEach();
    npcGroup.destroyEach();

    hardLb.destroy();

    laser1.destroy();
    laser2.destroy();
    laser3.destroy();
    button1.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    door.destroy();

    bnpc.destroy();

    fill("black");
    textSize(20);
    text("Congrats! You have successfully beaten this game!", 40, 400);

    fill("yellow");
    textSize(15);
    text("Now all you have to do is (baldy basic) GET OUT OF HERE WHILE YOU STILL CAN!!!", 10, 200)
    fill("black");
    textSize(20);
    text("Also if you want you can go to hard mode by touching the red button at the start ", 3, 500)
    

    
  } else if(gameState === HARD){
    background("lightgreen");
    hardLb.destroy();

    if(keyDown("LEFT_ARROW")){
      player.x = player.x -5;
    }
    if(keyDown("RIGHT_ARROW")){
      player.x = player.x +5;
    }
    if(keyDown("UP_ARROW")){
       player.y = player.y -5;
    }
    if(keyDown("DOWN_ARROW")){
       player.y = player.y +5;
    }
    
    if(player.isTouching(button1)){
      laser1.velocityX = +1000;
      button1.shapeColor = "grey";
      laserOff.play();
      laserOff.setVolume(20);
      button1.lifetime = 10;
    }
    if(player.isTouching(button2)){
      laser2.velocityX = +1000;
      button2.shapeColor = "grey";
      laserOff.play();
      laserOff.setVolume(20);
      button2.lifetime = 10;
    }
    if(player.isTouching(button3)){
      laser3.velocityX = +1000;
      button3.shapeColor = "grey";
      laserOff.play();
      laserOff.setVolume(20);
      button3.lifetime = 10;
    }
    if(player.isTouching(button4)){
      door.velocityX = +1000;
      button4.shapeColor = "grey";
      laserOff.play();
      laserOff.setVolume(20);
      button4.lifetime = 10;
    } 
    
    //framecounts for bullets 
    if(frameCount % 12 === 0){
      bullet1 = createSprite(npc1.x, 90, 5, 5);
      bullet2 = createSprite(npc2.x, 160, 5, 5);
      bullet3 = createSprite(290, npc3.y, 5, 5);
      bullet1.velocityY = 10;
      bullet2.velocityY = 10;
      bullet3.velocityX = 10;
      
      bullet1.lifetime = 60;
      bullet2.lifetime = 25;
      bullet3.lifetime = 20;
  
      bulletsGroup1.add(bullet1)
      bulletsGroup2.add(bullet2)
      bulletsGroup3.add(bullet3)
    }
    if(frameCount % 8 === 0){
      bullet4 = createSprite(npc4.x, 360, 5, 5)
      bullet4.velocityY = 12;
  
      bullet4.lifetime = 23;
  
      bulletsGroup4.add(bullet4)
    }
    if(frameCount % 4 === 0){
      bbullet1 = createSprite(bnpc.x, bnpc.y, 5, 5);
      bbullet2 = createSprite(bnpc.x, bnpc.y, 5, 5);
      bbullet3 = createSprite(bnpc.x, bnpc.y, 5, 5);
      bbullet4 = createSprite(bnpc.x, bnpc.y, 5, 5);
      
  
      bbullet1.velocityY = 14;
      bbullet2.velocityY = -14;
      bbullet3.velocityX = -14;
      bbullet4.velocityX = 14;
      
  
      bbullet1.lifetime = 20;
      bbullet2.lifetime = 20;
      bbullet3.lifetime = 20;
      bbullet4.lifetime = 20;
      
  
      bulletsGroupb.add(bbullet1);
      bulletsGroupb.add(bbullet2);
      bulletsGroupb.add(bbullet3);
      bulletsGroupbR.add(bbullet4);
    }

    if(bulletsGroupbR.isTouching(wallsGroup)){
      bulletsGroupbR.destroyEach();
    }
  
  //if pb hits npc they ded
  if(playerBGroup.isTouching(npc1)){
    npc1.x = 1500;
    npc1.velocityX = 0;
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(40);
  }
  if(playerBGroup.isTouching(npc2)){
    npc2.x = 1500;
    npc2.velocityX = 0;
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(40);
  }
  if(playerBGroup.isTouching(npc3)){
    npc3.y = 1500;
    npc3.velocityY = 0;
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(40);
  }  
  if(playerBGroup.isTouching(npc4)){
    npc4.x = 1500;
    npc4.velocityX = 0;
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(40);
  }

  //boss is destroyed
  if(playerBGroup.isTouching(bnpc)){
    gameState = ENDING;
    npcdeath.play();
    npcdeath.setVolume(40);
    yayyy.play();
    yayyy.setVolume(10);
  }

  //how many times you have to hit to destroy the boss
  if(playerBGroup.isTouching(hitbox1)){
    hitbox1.destroy();
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(40);
  }
  if(playerBGroup.isTouching(hitbox2)){
    hitbox2.destroy();
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(40);
  }
  if(playerBGroup.isTouching(hitbox3)){
    hitbox3.destroy();
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(40);
  }
  if(playerBGroup.isTouching(hitbox4)){
    hitbox4.destroy();
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(40);
  }
  if(playerBGroup.isTouching(hitbox5)){
    hitbox5.destroy();
    playerBGroup.destroyEach();
    npcdeath.play();
    npcdeath.setVolume(40);
  }
  
  //player gun
  if(keyDown("w")){
    pb1 = createSprite(player.x, player.y, 5, 5);
  
    pb1.velocityY = -7;
  
    pb1.lifetime = 30;
  
    playerBGroup.add(pb1);
  }
  if(keyDown("s")){
    pb2 = createSprite(player.x, player.y, 5, 5);
  
    pb2.velocityY = 7;
  
    pb2.lifetime = 30;
  
    playerBGroup.add(pb2);
  }
  if(keyDown("a")){
    pb3 = createSprite(player.x, player.y, 5, 5);
  
    pb3.velocityX = -7;
  
    pb3.lifetime = 30;
  
    playerBGroup.add(pb3);
  }
  if(keyDown("d")){
    pb4 = createSprite(player.x, player.y, 5, 5);
  
    pb4.velocityX = 7;
  
    pb4.lifetime = 30;
  
    playerBGroup.add(pb4);
  }
  if(playerBGroup.isTouching(wallsGroup)){
    playerBGroup.destroyEach();
  }

  if(player.isTouching(bulletsGroup1) || player.isTouching(bulletsGroup2) || player.isTouching(bulletsGroup3) || player.isTouching(bulletsGroup4) || player.isTouching(bulletsGroupb) || player.isTouching(bulletsGroupbR) || player.isTouching(npc1) || player.isTouching(npc2) || player.isTouching(npc3) || player.isTouching(npc4) || player.isTouching(bnpc)){
     gameState = END;
     pdeath.play();
     pdeath.setVolume(20);
     
  }else if(player.isTouching(laser1) || player.isTouching(laser2) || player.isTouching(laser3)){
   gameState = END;
   pdeath.play();
   pdeath.setVolume(20);
  } 
  }
  
//bounceOff functions
   player.bounceOff(wallsGroup);
   player.bounceOff(edges);
   player.bounceOff(door);
   player.bounceOff(button1)
   player.bounceOff(button2)
   player.bounceOff(button3)
   player.bounceOff(button4)
   npcGroup.bounceOff(wallsGroup);
   npcGroup.bounceOff(edges);
   bnpc.bounceOff(edges);
   bnpc.bounceOff(wallsGroup);
   bnpc.bounceOff(invisWall);
  
  drawSprites();
}


  





