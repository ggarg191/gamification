var saveMore = {
  isLoggedIn: false
};

saveMore.init = function() {
  saveMore.openDropdown();
  saveMore.eventBindings();
  saveMore.setNoAuth();
}

saveMore.setNoAuth = function(){
  $(".auth").hide();
  $(".noauth").show();
}

saveMore.setAuth = function(){
  $(".auth").show();
  $(".noauth").hide();
}

saveMore.eventBindings = function(){
  $(".panel").on('click', saveMore.panelClick);
  $(".fb-login").on('click', saveMore.fbAuth);
}

saveMore.panelClick = function(){
  if(saveMore.checkAuth()){
      $("#couponModal").modal('show');
  }else{
      $("#loginModal").modal('show');
  }
}

saveMore.checkAuth = function(){
  return saveMore.isLoggedIn;
}

saveMore.fbAuth = function(){
  $("#loginModal").modal('hide');
  saveMore.isLoggedIn = true;
  $("#couponModal").modal('show');
  saveMore.setAuth();
}

saveMore.openDropdown = function(){
  $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(200);
  });
}


$(document).ready(function(){
  saveMore.init();
});
