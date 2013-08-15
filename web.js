var express = require('express');
var fs = require('fs');
var app = express();
var buffer = new Buffer(256);
app.use(express.logger());

app.get('/', function(request, response) {

var file = fs.readFileSync('index.html');
var filetext = file.tostring();
response.send(filetext);
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
