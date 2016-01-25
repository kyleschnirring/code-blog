'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-Parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/app/'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/images", express.static(__dirname + '/images'));

app.get('/', function(request, response) {
  response.sendFile(__dirname, 'index.html');
  var head = request.headers;
  var ip = request.connection.remoteAddress;
  console.log(ip);
  console.log(head);
});

app.get('/admin.html', function(request, response) {
  response.sendFile(__dirname, 'admin.html');
});

app.post("/admin.html", function(request, response) {
  response.send('Post was recieved');
  var token = request.data;
  console.log(token);
});

app.listen(3000, function() {
  console.log('Server Up');
});
