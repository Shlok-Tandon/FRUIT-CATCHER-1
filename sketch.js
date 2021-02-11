var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var basket1,basket2,baskets,b;

function preload() {

  bg = loadImage("jungle.jpg");
  b = loadImage("basket2.png");
}

function setup(){
  canvas = createCanvas(1200,500);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(bg);

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
