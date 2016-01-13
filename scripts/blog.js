var projects = [];

function Project (object) {
  this.title = object.title;
  this.author = object.author;
  this.date = object.date;
  this.projectUrl = object.projectUrl;
  this.image = object.image;
  this.body = object.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.attr('data-language', this.language);

  $newProject.find('h1').text(this.title);
  $newProject.find('address').text(this.author);
  $newProject.find('a').attr('href', this.projectUrl).text(this.projectUrl);
  $newProject.find('time[pubdate]').attr('title', this.date);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.date))/60/60/24/1000) + ' days ago');
  $newProject.find('.projectImages').attr('src', this.image);
  $newProject.find('.article-body').html(this.body);
  $newProject.append('<hr>');
  return $newProject;
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
