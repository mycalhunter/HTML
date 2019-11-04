$(document).ready(function() {

  $(".icon").hover(function() {
    $(this).stop().animate({
      width: "100px"
    }, 'fast');
  }, function() {
    $(this).stop().animate({
      width: "34px"
    }, 'fast');
  });

});