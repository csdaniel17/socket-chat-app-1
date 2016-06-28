var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket) {
  socket.on('send message', function(data) {
    io.sockets.emit('new message', data);
    console.log(data);
  });
});

server.listen(3000, function () {
  console.log('listening on 3000');
});
