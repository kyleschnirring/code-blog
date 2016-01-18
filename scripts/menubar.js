//IIFE to set stuff up according to sceen size
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

//event to resize stuff as screen size changes
$( window ).on('resize', function() {
  var size = $( window ).width();
  if (size >= 610) {
    $('.menu-items').show();
    $('#ham').hide();
  } else {
    $('.menu-items').hide();
    $('#ham').show();
  }
});

//make floating menubar appear
$('#ham').on('click', function() {
  $( "main" ).fadeTo( "fast" , 0.2, function() {
    $('#secret').show().css('z-index', '289');
  });
});

//make floating menubar disappear
$('body').on('mouseup', function() {
  var size = $( window ).width();
  $('#secret').hide();
  $( "main" ).fadeTo( "fast" , 1, function() {});
});
