var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1500,200,60,height/2);
  car = createSprite(50,200,50,25);
  
  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;


}

function draw() {
  background(0);  
  drawSprites();


  if(isTouching(car,wall)){
    car.velocityX = 0;
    deformation = (0.5*weight*speed*speed)/22500;
    if(deformation <= 80){
      wall.shapeColor = "green";
    }
    else if(deformation > 80 && deformation <= 150){
      wall.shapeColor = "blue";
    }
    else if(deformation > 150){
      wall.shapeColor = "red";
    }
    }

}

function isTouching(object1,object2){
  if(object1.x - object2.x <= object1.width/2 + object2.width/2  &&
    object2.x - object1.x <= object1.width/2 + object2.width/2  &&
    object1.y - object2.y <= object1.height/2 + object2.height/2  &&
    object2.y - object1.y <= object1.height/2 + object2.height/2  ){
  return true
    }
    else{
      return false
    }
}