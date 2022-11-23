//global variable to activate socket on client side.
let clientSocket = io();
clientSocket.on("connect", newConnection);

function newConnection() {
  console.log(clientSocket.id);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   background(220);
}

function draw() {
  noStroke();
  fill("red");
  circle(mouseX, mouseY, 3);
}

//to use socket on client server i have to upload the library on the client side. Watch INDEX.HTML
