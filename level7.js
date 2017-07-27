//simple redis commands
var redis = require('redis');
var client = redis.createClient();

client.set('name', "thais");
