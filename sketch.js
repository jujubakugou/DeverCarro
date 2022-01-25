var canvas

var gameState = 0
var playerCount
var allPlayers
var distance = 0

var database

var form, player, game

var cars, car1, car2, car3, car4
var car1img, car2img, car3img, car4img

var fundo, solo

function preload() {
  car1img = loadImage('../images/car1.png')
  car2img = loadImage('../images/car2.png')
  car3img = loadImage('../images/car3.png')
  car4img = loadImage('../images/car4.png')
  fundo = loadImage('../images/track.jpg')
  solo = loadImage('../images/ground.png')
}
function setup() {
  canvas = createCanvas(displayWidth - 50, displayHeight - 140)
  database = firebase.database()
  game = new Game()
  game.getState()
  game.start()
}

function draw() {
  if (playerCount === 4) {
    game.update(1)
  }
  if (gameState === 1) {
    clear()
    game.play()
  }
}
