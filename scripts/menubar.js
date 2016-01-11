$('#button1').on('click', function(e) {
  $('main').fadeOut('slow', function() {});
});
//es6
$('#button2').on("click", (e) => {
  $('main').fadeIn('slow', () => {});
});
