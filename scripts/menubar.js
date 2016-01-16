$(function() {
  var size = $( window ).width();
    if (size > 960) {
      $('.menu-items').show();
      $('#ham').hide();
    } else {
      $('.menu-items').hide()
      $('#ham').show();
    }
});

$( window ).on('resize', function() {
  var size = $( window ).width();
  if (size >= 960) {
    $('.menu-items').show();
    $('#ham').hide();
  } else {
    $('.menu-items').hide();
    $('#ham').show();
  }
});

$('#ham').on('click', function() {
  $('.menu-items').show().css('text-align', 'center');

});

$('#mainheader').on('mouseup', function() {
  var size = $( window ).width();
  if (size <= 960) {
    $('.menu-items').hide();
  }
});
