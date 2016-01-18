var projects = [];

function Project (object) {
  this.title = object.title;
  this.author = object.author;
  this.category = object.category;
  this.date = object.date;
  this.projectUrl = object.projectUrl;
  this.image = object.image;
  this.body = object.body;
}

Project.prototype.toHtml = function() {
  var source = $("#article-template").html();
  var template = Handlebars.compile(source);

  var context = {
    "title": this.title,
    "author": this.author,
    "projectUrl": this.projectUrl,
    "category": this.category,
    "publishedOn": this.date,
    "image": this.image,
    "body": this.body
  };

  $('.content-placeholder').html(template(context));
   return template(this);
}

myProjects.rawData.sort(function(a,b) {
  return (new Date(b.date)) - (new Date(a.date));
});

myProjects.rawData.forEach(function(ele) {
  projects.push(new Project(ele));
})

projects.forEach(function(a){
  $('#articles').append(a.toHtml())
});

$(function() {
  $('.template').remove();
});
