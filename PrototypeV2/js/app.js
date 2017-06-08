$(document).ready(function(){
  $('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(500);
});
});
