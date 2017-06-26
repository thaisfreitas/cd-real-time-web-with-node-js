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
