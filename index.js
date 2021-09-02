//express
const express = require('express')
const app = express();

//sockets server
const server = require('http').createServer(app);

// socket server configuration
const io = require('socket.io')(server);

//public directory
app.use(express.static(__dirname + '/public'))

io.on('connection', () => { 
  console.log('Client connected');
 });

server.listen(4000, () => {
  console.log('Server running on port 4000');
});