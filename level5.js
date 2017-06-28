//express routes
var express = require('express');
var app = express();

app.get('/tweets', function(req, res) {
  res.sendFile(__dirname + "/tweets.html");
});

app.listen(8080);

//routes params
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(req, res){
  res.end(quotes[req.params.name]);
});

app.listen(8080);

//rendering
//app.js
var express = require('express');
var app = express();
var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(req, res) {
  var quote = quotes[req.params.name];
  res.render('quote.ejs', {
    name: req.params.name,
    quote: quote
  });

});

app.listen(8080);
//views/quote.ejs
<h2>Quote by <%= name %></h2>

<blockquote>
  <%= quote %>
</blockquote>
