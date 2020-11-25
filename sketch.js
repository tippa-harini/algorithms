var fixedRect;
var movingRect;

function setup() {

  createCanvas(1200,800);

  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
}

function draw() {
  background("black");
 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;

 text("Fixed Rect X Position: "+fixedRect.x,600,100); 
 text("Fixed Rect Width: "+fixedRect.width,600,120);
  text("Moving Rect X Position: "+movingRect.x,600,140);
  text("Moving Rect Width: "+movingRect.width,600,160);

  if (movingRect.x - fixedRect.x < (fixedRect.width+movingRect.width)/2 && 
     fixedRect.x - movingRect.x < (fixedRect.width+movingRect.width)/2   &&
     movingRect.y - fixedRect.y < (fixedRect.height+movingRect.height)/2   && 
     fixedRect.y - movingRect.y < (fixedRect.height+movingRect.height)/2   
  ) {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  drawSprites();
}