$(function() {
  var size = $( window ).width();
    if (size > 960) {
      $('.menu-items').show();
      $('#ham').hide();
    } else {
      $('.menu-items').hide()
      $('#ham').show();
      //$('#picofme').css('height', '125px');
      //$('#picofme').css('width', '125px');
    }
});
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

$('#ham').on('click', function() {
  $( "main" ).fadeTo( "fast" , 0.2, function() {
    $('#secret').show().css('z-index', '289');
  });
});

$('body').on('mouseup', function() {
  var size = $( window ).width();
  $('#secret').hide();
  $( "main" ).fadeTo( "fast" , 1, function() {});

});
