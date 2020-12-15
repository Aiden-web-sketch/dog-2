var database,foodStock;
var dog,dogImage,doghappy;

function preload(){

  dogHappy=loadImage("images/dogImg1.png")  
  dogImg=loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500, 500)
  database=firebase.database()
foodStockRef=database.ref('Food')
foodStockRef.on("value",readStock);
dog=createSprite(250,250,10,10);
dog.addImage(dogImg)
dog.scale=0.5
fedTime=database.ref('feedTime')
fedTime.on("value",function(data){
lastFed=data.val()
feed=createButton("feed the dog")
fedd.postion(700,95)
feed.mousePressed(feedDog)

addfood=createButton("Add Food")
addFood.postion(800,95)
add.mousePressed(addsFoods)

food1=new Food(720,220)
});
}







function draw() {  
background(46,139,87)
fill("red")
textSize(20)
text("Food: "+foodStock,250,50)


fill(255,255,254);
textSize(15)
if(lastFed>=12){
  text("lastFed:"+lastFed%12+"PM",350,30);
}else if(lastFed==0){
text("Last Feed: 12AM",350,30)
}else{
text("Last Feed:"+"AM",350,30)
}







  drawSprites();
}
function readStock(data){
  foodStock=data.val()
}
function writeStock(x){
if(x<=0){
  x=0
}else{
x=x-1;

}

  database.ref('/').update({
    Food:x
  })
}
function errorData(){
  console.error("error,readingData");
}
function feedDog(){
  dog.addImage(happyDog)
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}
function addFoods(){
 FoodS++;
 database.ref ('/').update({
   Food:foodS
 })
}




