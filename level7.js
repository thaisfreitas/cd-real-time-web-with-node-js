//simple redis commands
var redis = require('redis');
var client = redis.createClient();

client.set('name', "thais");

//get a key
var redis = require('redis');
var client = redis.createClient();

client.get('question', function(error, data){
  console.log(data);
});

//working with lists
var redis = require('redis');
var client = redis.createClient();

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

client.lpush("questions",question1 , function(error, value){
  console.log(value);
});

client.lpush("questions",question2 , function(error, value){
  console.log(value);
});

//working with lists 2
var redis = require('redis');
var client = redis.createClient();

client.lrange("questions", 0, -1, function(error, messagens){
   console.log(messagens);
});

//persist questions
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socket = require('socket.io');
var io = socket.listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
      // add the question to the list here
      redisClient.lpush('questions', question);
    }
  });
});

//emiting stored questions
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  redisClient.lrange('questions', 0, -1, function(error, questions){
    questions.forEach(function(question){
     client.emit('question', question);
    });
  });
  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
      redisClient.lpush("questions", question);
    }
  });
});
