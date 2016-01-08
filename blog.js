var projects = [];

function Project (object) {
  this.title = object.title;
  this.author = object.author;
  this.date = object.date;
  this.projectUrl = object.projectUrl;
  this.body = object.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.find('time[pubdate]').attr('title', this.date);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.date))/60/60/24/1000) + ' days ago');
  $newProject.append('<hr>');
  return $newProject;
}

myProject.rawData.sort(function(a,b) {
  return (new Date(b.date)) - (new Date(a.date));
});

myProject.rawData.forEach(function(ele) {
  projects.push(new Project(ele));
})

projects.forEach(function(a){
  $('#articles').append(a.toHtml())
});
