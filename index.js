//express
const app = require('express')();

//sockets server
const server = require('http').createServer(app);

// socket server configuration
const io = require('socket.io')(server);

io.on('connection', () => { /* … */ });

server.listen(4000, () => {
  console.log('Server running on port 4000');
});