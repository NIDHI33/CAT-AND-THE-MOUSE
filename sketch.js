var cat ,catimg;
var garden ,gardenimg;

function preload() {
    catimg =loadImage("cat1.png","cat2.png","cat3.png","cat4.png");
    gardenimg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(100,100,30,30);
    cat.addImage=("catimg",sitting);
    garden =createSprite(1000,800);
    garden.addImage=("gardenimg");
}

function draw() {

    //background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
