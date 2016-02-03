var projectFilter = {};

projectFilter.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).attr('data-category');
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
}

projectFilter.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
  });
};

projectFilter.initNewArticlePage = function() {
  $('.tab-content').show();
  $('#export-field').hide();
  $('#article-json').on('focus', function(){
    this.select();
  });

  $('#new-form').on('change', 'input, textarea', articleView.create);
};

projectFilter.create = function() {
  var article;
  $('#articles').empty();

  article = new Project({
    title: $('#article-title').val(),
    author: $('#article-author').val(),
    authorUrl: $('#article-author-url').val(),
    category: $('#article-category').val(),
    body: $('#article-body').val(),
    publishedOn: $('#article-published:checked').length ? util.today() : null
  });

  $('#articles').append(article.toHtml());

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  $('#export-field').show();
  $('#article-json').val(JSON.stringify(article) + ',');
};
//send data
$('#addproject').on('click', function(){
  var article;

  article = new Project({
    title: $('#article-title').val(),
    author: $('#article-author').val(),
    projectUrl: $('#article-author-url').val(),
    category: $('#article-category').val(),
    image: $('#imagePath').val(),
    date: Date(),
    body: $('#article-body').val()
  });

  var newPost = JSON.stringify(article);

  $.post("/admin.html", newPost, function (response) {
    var gotIt = response;
    $('#export-field').html(gotIt);
  });
});

$('#newproject').on('click', function(){
  document.getElementById('new-form').reset();
  $('#export-field').html(" ");
});

projectFilter.initIndexPage = function() {
  Project.all.forEach(function(a){
    $('#articles').append(a.toHtml());
    $('.template').remove();
  });
  projectFilter.populateFilters();
  projectFilter.handleCategoryFilter();
};

projectFilter.populateFilters();
projectFilter.handleCategoryFilter();
