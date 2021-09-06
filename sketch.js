var database, playerCount, gameState;
var form, player, game;

function preload() {
  harryImg = loadImage("images/harry_img.png");
  dumbledoreImg = loadImage("images/dumbledore_img.png");
  voldemortImg = loadImage("images/voldemort_img.png");
  malfoy = loadImage("images/malfoy_img.png");
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  console.log(database);
  game = new Game();
  game.start();
}

function draw() {
  background("black");  

}
