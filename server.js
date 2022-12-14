console.log("Uomini Forti Destini Forti");


//how upload the module to the client
let express = require("express");
//activeting express
let app = express();

//Define the port number
let port = 3000;
//ask to express to wait to info from port 3000
let server = app.listen(port);

console.log("running server on http://localhost:" + port);

//use socketz
let serverSocket = require("socket.io");

let io = serverSocket(server);

//specifico l'evento e la funzione da richiamare
io.on("connection", newConnection);

function newConnection(newSocket){
    console.log(newSocket.id);
//when u get the message called mouse form the mouse do something
    newSocket.on("mouse", mouseReceived);

    function mouseReceived(dataReceived) {
        console.log(dataReceived);
        //take the variable contain the new connection
        newSocket.broadcast.emit("mousebroadcast", dataReceived);
    }
}

app.use(express.static("public"));
