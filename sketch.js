const Engine=Matter.Engine
const World=Matter.World
const bodies=Matter.bodies
var engine,world

var bg;
var snow=[]
function preload (){
bg=loadImage("snow3.jpg");

}


function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=Engine.world
  createSprite(400, 200, 50, 50);
  if(frameCount%50===0){
 for(var i=0;i<200;i++){
  snow.push(new createsnow(random(0,800),random(0,800)));


 }

  }
}

function draw() {
  background(bg);  
  Engine.update(engine);
  for(var i=0; i<200; i++){
snow[i].showdrop()
snow[i].updatey()

  }
  drawSprites();
}






