//Create variables here
var dog,dogimg,happydog,foodS,foodStock,database;
function preload()
{
dogimg=loadImage("images/dog.png");
happydog=loadImage("images/dog1.png");
	//load images here
}

function setup() {
  database = firebase.database();
  console.log(database);
	createCanvas(2000, 2000);
  dog=createSprite(1500,1500,4,5)
  dog.addImage(dogimg);
  
     foodStock=database.ref("food");
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(happydog)
console.log("hi")
}

  drawSprites();
}
  function readStock(data){
    foodS=data.val();
     }
  //add styles here
  function readStock(data){
    foodS=data.val();
     }

 function writeStock(x){
   database.ref('/').update({
    food:x 
   })
 }





