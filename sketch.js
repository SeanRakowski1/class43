
var bg,bgImage;
function preload(){
  bgImage = loadImage("bg.jpg");

}
function setup(){
  createCanvas(displayWidth,displayHeight-111);
  bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  bg.addImage(bgImage);
  bg.scale = 3.1;
}

function draw(){
  background(0);
  console.log(bg.x);
  bg.velocityX = -3;
  if(bg.x<950){
    bg.x = displayWidth/2;
  }
    drawSprites();
  }