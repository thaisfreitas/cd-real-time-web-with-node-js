//convert blocking
var fs = require('fs');

fs.readFile('index.html', function(error, contents){
  console.log(contents);
});

// read file in server
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  fs.readFile('index.html', function(error, contents){
    response.write(contents);
    response.end();
  });
}).listen(8080);

//writing response headers
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200,{ 'Content-Type': 'text/html' });

  fs.readFile('index.html', function(err, contents) {
    response.write(contents);
    response.end();
  });

}).listen(8080);
