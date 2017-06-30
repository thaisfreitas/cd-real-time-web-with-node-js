//setting up socket.io
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log('Client connected...');
});

server.listen(8080);

//client socket setup
<script src= '/socket.io/socket.io.js'></script>
<script>
  // use the socket.io server to connect to localhost:8080 here
  io.connect('http://localhost:8080');
</script>
