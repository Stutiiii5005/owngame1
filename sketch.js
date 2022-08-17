var score =0;
var gun,sweet1,sweet2, bullet, backBoard;

var gunImg, sweet1Img, sweet2Img, bulletImg, backBoardImg;

var sweet1Group, sweet2Group, bulletGroup;


var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  bulletImg = loadImage("bullet1.png")
  sweet1Img = loadImage("sweet1.png")
  sweet2Img = loadImage("sweet2.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  sweet1Group = createGroup();   
  sweet2Group = createGroup();   
    
  heading= createElement("h1");
  scoreboard= createElement("h1");
}

function draw() {
  background("#BDA297");
  
  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

  if(gameState===1){
    gun.y=mouseY  

    if (frameCount % 80 === 0) {
      sweet1();
    }

    if (frameCount % 100 === 0) {
      sweet2();
    }

    if(keyDown("space")){
      shootBullet();
    }

    if (sweet1Group.collide(backBoard)){
      handleGameover(sweet1Group);
    }
    if (sweet2Group.collide(backBoard)) {
      handleGameover(sweet2Group);
    }
    /*if(blueBubbleGroup.(bulletGroup)){
      handleBubbleCollision(blueBubbleGroup);
    }*/

    /*if(blueBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision();
    }*/
    
    /*if(blueBubbleGroup.collide()){
      handleBubbleCollision(blueBubbleGroup);
    }*/
    
    /*if(blueBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(blueBubbleGroup);
    }*/

    if(sweet2Group.collide(bulletGroup)){
      handleBubbleCollision(sweet2Group);
    }

    drawSprites();
  }
    
  
}

function sweet1(){
  sweet1Img = createSprite(800,random(20,780),40,40);
  sweet1Img.addImage(sweet1Img);
  sweet1Img.scale = 0.1;
  sweet1Img.velocityX = -8;
  sweet1Img.lifetime = 400;
  sweet1Img.add(sweet1);
}
function sweet2(){
  sweet2Img = createSprite(800,random(20,780),40,40);
  sweet2Img.addImage(sweet2Img);
  sweet2Img.scale = 0.1;
  sweet2Img.velocityX = -8;
  sweet2Img.lifetime = 400;
  sweet2Img.add(sweet2);
}

function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= gun.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.12
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}

function handleBubbleCollision(sweet1,sweet2){
    if (life > 0) {
       score=score+1;
    }

 
    sweet1Group.destroyEach()
    sweet2Group.destroyEach()
}

function handleGameover(sweet1,sweet2){
  
    /*life=life-1;
    bubbleGroup.destroyEach();*/

     /*life=life+1;
    bubbleGroup.destroyEach();*/

     /*life=life-1;
    bubbleGroup.destroy();*/

     /*life=life-1;
    bubble.destroyEach();*/
    

    if (life === 0) {
      gameState=2
      
     
    }
  
}