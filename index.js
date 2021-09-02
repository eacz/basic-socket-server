//express
const express = require('express')
const app = express();

//sockets server
const server = require('http').createServer(app);

// socket server configuration
const io = require('socket.io')(server);

//public directory
app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => { 
  socket.emit('welcome-msg', {
    msg: 'hello from the socket server',
    data: new Date().toISOString()
  })
});

server.listen(4000, () => {
  console.log('Server running on port 4000');
});