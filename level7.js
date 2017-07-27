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
