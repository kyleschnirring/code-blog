var Article = function(object) {
  this.title = object.title;
  this.category = object.category;
  this.author = object.author;
  this.authorUrl = object.aurthorUrl;
  this.publishedOn = object.publishedOn;
  this.body = object.body;
};

Article.prototype.toHTML = function () {
  $('#articleTitle').html(this.title);
  $('#auth').html(this.author);
  $('#date').html(this.publishedOn);
  $('#words').html(this.body);

}

var newPost = new Article(blog.rawData[0]);

newPost.toHTML();
