//chat-emitter
var events = require('events');
var EventEmitter = events.EventEmitter;
var chat = new EventEmitter();
chat.on('message', function(message){
  console.log(message);
});

//emiting events
var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

// Emit events here
chat.emit('join', 'message');
chat.emit('message', 'message');

//request event
var http = require('http');

var server = http.createServer();
server.on('request', function(request, response){
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
server.listen(8080);

//listen twice
var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
server.on('request', function(request, response){
  console.log("New request coming in..." );
});
server.listen(8080);

//listen for close
var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
});
server.on('close',function(){
  console.log("Closing down the server...");
});


server.listen(8080);
