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
