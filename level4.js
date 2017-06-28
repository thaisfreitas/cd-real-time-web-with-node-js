//missing exports
var highfive = function() {
  console.log("smack!!");
};
module.exports = highfive;

//export function
//app.js
var myRequest = require('my_request');
myRequest('Hello, this is dog.');

//my_request.js
var http = require('http');

var myRequest = function(message) {
  var request = http.request('http://codeschool.com', function(response) {
    response.pipe(process.stdout, {
      end: false
    });
  });

  request.write(message);
  request.end();
};

module.exports = myRequest;

//exporting an object
var warn = function(message) {
  console.log("Warning: " + message);
};

var info = function(message) {
  console.log("Info: " + message);
};

var error = function(message) {
  console.log("Error: " + message);
};
module.exports.warn = warn;
module.exports.info = info;
module.exports.error = error;
