var plane , arrow,  background, meteoro, meteoro2, meteoro3 ,meteoro4 ,arrowGroup;
var planeImage, arrowImage, green_balloonImage, meteoroImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score =0;
function preload(){  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  planeImage = loadImage("plane.png");
  meteoroImage = loadImage("meteoro.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(400, 400);
  
  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // crear AVION para disparar balas
  plane = createSprite(320,220,20,50);
  plane.addImage(planeImage); 
  plane.scale = 0.3;
  
  score = 0  
  meteoro= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();  
}

function draw() {
 background(0);
  
  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
  //mover el avion
  plane.y = World.mouseY
  
  // soltar la flecha al presionar la barra espaciadora
  if (keyDown("space")) {
    createArrow();  
  }
  
  //crear enemigos continuamente
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      meteoro();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if (arrowGroup.isTouching(meteoro)) {
    
    meteoro.destroyEach();
    
    
    arrowGroup.destroyEach();
    score=score+1;
  }

  if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }

  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }

  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }

  drawSprites();
  text("Puntuación: "+ score, 300,50);
}

function meteoro() {
  var meteoro = createSprite(0,Math.round(random(20, 370)), 10, 10);
  meteoro.addImage(meteoroImage);
  meteoro.velocityX = 3;
  meteoro.lifetime = 150;
  meteoro.scale = 0.1;
  meteoro.add(meteoro);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
}


 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=plane.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  
  
  arrowGroup.add(arrow);
   
}
