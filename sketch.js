var car,wall,speed,weight;
var D;

function setup() {
  createCanvas(1000,400);
car=createSprite(50,200,50,50);
speed=random(55,90);
weight=random(400,1500);
wall=createSprite(800,200,10,400);
wall.shapeColor="white";

D=(0.5*weight*speed*speed)/22500;

}

function draw() {
  background(0); 
  
  car.velocityX=speed;

 if(car.collide(wall)){
speed=0;
  if (D<100){
car.shapeColor="green";
}

if (D>100&&D<180){
  car.shapeColor="yellow";
  }

  if (D>180){
    car.shapeColor="red";
    }
  }
  drawSprites();
}