//global variable to activate socket on client side.
let clientSocket = io();
clientSocket.on("connect", newConnection);

function newConnection() {
  console.log(clientSocket.id);
}

clientSocket.on("mousebroadcast", otherMouse)

function otherMouse(dataReceived) {
  noStroke();
  fill("blue");
  circle(dataReceived.x, dataReceived.y, 7);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
    id: clientSocket.id
  };
//first parameter is the kind of data sent
  clientSocket.emit ("mouse", message );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   background(220);
}

function draw() {
  noStroke();
  fill("red");
  circle(mouseX, mouseY, 7);
}

//to use socket on client server i have to upload the library on the client side. Watch INDEX.HTML
