// const WebSocket = require("ws");
const io = require("socket.io-client");

// // Create a WebSocket server
// const wss = new WebSocket.Server({ port: 8080 });

// Connect to the Socket.IO server
// const socket = io("wss://escapp.es/");
const socket = io("wss://escapp.es/",{query: {
    "escapeRoom": '80',
    "email": 'eslamessam3013@gmail.com',
    "token": 'RHxqej6vYx2Q3zv4eD9NFm',
    // Optional (if you don't have the token)
    // "password": STUDENT_PASSWORD
 }});

socket.on("connect", (payload) => {
    console.log("socketIO also connected");
  });
  socket.on("connect_error", (payload) => {
    console.log("socketIO NOT connected");
    console.log(payload);
  }); 
socket.on("error", (payload) => {
    console.log("socketIO ERROR");
    console.log(payload);
  }); 
socket.emit("START_PLAYING");
socket.on("INITIAL_INFO", (payload) => {
    console.log("socketIO info");
    console.log(payload);
  }); 

socket.emit("REQUEST_HINT", {status: 'completed'});
socket.on("HINT_RESPONSE", (payload) => {
  console.log(payload);
});

socket.emit("SOLVE_PUZZLE", {puzzleOrder: 2, sol: 'omphalos'});
socket.on("PUZZLE_RESPONSE", (payload) => {
  console.log(payload);
});