//express
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const path = require('path')
const Sockets = require('./sockets')

class Server {
  constructor(){
    this.app = express()
    this.port = 4000

    //http server
    this.server = http.createServer(this.app);

    //sockets configuration
    this.io = socketio(this.server, { /* config */ })
  }

  middlewares(){
    this.app.use(express.static(path.resolve(__dirname, '../public') ))
  }

  socketsConfiguration(){
    new Sockets(this.io)
  }

  execute(){
    //initialize middlewares
    this.middlewares()

    //initialize sockets
    this.socketsConfiguration()
    
    //initialize server
    this.server.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server