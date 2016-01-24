'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app/'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/images", express.static(__dirname + '/images'));

app.get('/', function(request, response){
  response.sendFile(__dirname, 'index.html');
});

app.listen(3000);
