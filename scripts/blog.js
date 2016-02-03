
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

Project.all = [];

Project.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
}

Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
  } else {
    var json = $.getJSON('mykickassprojects');
    json.done(function(response) {
      var tempData = [];
      $.each(response, function(key, value){
        tempData.push(value);
      });
      localStorage.setItem('rawData', JSON.stringify(tempData));
      Project.loadAll(JSON.parse(localStorage.rawData));

    });
  }
}
$('.template').remove();
