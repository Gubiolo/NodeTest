//global variable to activate socket on client side.
let myColor;
let colors = ["red", "green", "blue", "yellow", "brown"];

let clientSocket = io();
clientSocket.on("connect", newConnection);

function newConnection() {
  console.log(clientSocket.id);
}

clientSocket.on("mousebroadcast", otherMouse)

function otherMouse(dataReceived) {
  noStroke();
  fill(dataReceived.color);
  circle(dataReceived.x, dataReceived.y, 20);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
    id: clientSocket.id,
    color: myColor,
  };
//first parameter is the kind of data sent
  clientSocket.emit ("mouse", message );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(220);
  myColor = random(colors);
}

function draw() {
  noStroke();
  fill(myColor);
  circle(mouseX, mouseY, 20);
}

//to use socket on client server i have to upload the library on the client side. Watch INDEX.HTML
