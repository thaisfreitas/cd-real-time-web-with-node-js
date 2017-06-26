//file piping
var fs = require('fs');

var file = fs.createReadStream('fruits.txt');

file.pipe(process.stdout);

//fixing pipe

var fs = require('fs');

var file = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile, { end: false });
file.on('end', function(){
  destFile.end('Finished!');
});

//dowloading server
var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');
  file.pipe(response);
}).listen(8080);
