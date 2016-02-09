'use strict'
var express = require('express');
var app = express();
var posts = require(__dirname + '/data/myprojects.json');
var bodyParser = require('body-Parser');
var Sequalize = require('sequelize');
var config = require('./config');
var models = require('./models');
var hn = require('hack-news');
var DB = config.DB;
var PORT = config.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/app/'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/data", express.static(__dirname + '/data'));

hn.numberOfTopStories(10, (numberOfStories)=> {
  console.log(numberOfStories);
});


//app routes
app.get('/', function(request, response) {
  response.sendFile(__dirname, 'index.html', function(error){
    if (error) {
      response.status(404).send('<h1>EPIC FAAAAAAAAAAAAAAAAAAAAIIIIIIIIIIIIIILLLLLLLLLL</h1>');
    } else {
      var head = request.headers;
      var ip = request.connection.remoteAddress;
      console.log(ip);
      console.log(head);
    }
  });
});

app.get('/admin.html', function(request, response) {
  response.sendFile(__dirname, 'admin.html');
});

app.get('/mykickassprojects', function(request, response) {
  models.Project.findAll().then(function(projects) {
    response.json(projects);
  });
  console.log('JSON SENT');
});

app.post("/admin.html", function(request, response, body) {
  response.send('<h2>Post was received</h2>');
  var incomingObject = request.body;
  //models.Project.create(request.body);
  console.log(incomingObject);
});

models.sequelize.sync({force: true}).then(function(x) {
  models.Project.create({
    title:"hack-news",
    author:"Kyle Schnirring",
    projectUrl: "https://www.npmjs.com/package/hack-news",
    body:"A library of methods that will help you interact with the Hacker News API.",
    image:"images/npm.png",
    category:"Node.js"
  });
  models.Project.create({
    title:"Fast Photo Copier",
    author:"Kyle Schnirring",
    projectUrl:"https://github.com/kyleschnirring/Fast-Photo-Copier",
    image: "images/fpc.png",
    date: "2016-12-04",
    category: "Node.js",
    body:   "Still working on this one"
  });
  models.Project.create({
    title:       "[TATTLE]",
    author:      "Kyle Schnirring",
    projectUrl:   "http:donttattleonme.com",
    image: "images/tattle.png",
    date: "2014-11-05",
    category: "Objective C",
    body:        "<p>I really dont know what I want to write yet.</p>"
  });
  models.Project.create({
    title:       "Professional Appliance Tech.",
    author:      "Kyle Schnirring",
    projectUrl:   "https://itunes.apple.com/us/app/profappltechinc/id713762905?mt=8",
    image: "images/pat.png",
    date: "2013-11-04",
    category: "Objective C",
    body:     "<p>What can I say this was the first app, I made this for my father-in-laws company. It's not much but hey everyone has to start somewhere.</p>"
  });
  app.listen(PORT, function() {
    console.log('Server Up');
    console.log(DB);
  });
});
