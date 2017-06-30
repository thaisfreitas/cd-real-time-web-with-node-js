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
  io.connect('http://localhost:8080');
</script>

//listening for question
<script src="/socket.io/socket.io.js"></script>
<script src="/insertQuestion.js"></script>

<script>
  var server = io.connect('http://localhost:8080');
  server.on('question', function (question) {
    insertQuestion(question);
  });

</script>
