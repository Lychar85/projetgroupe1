$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() < $(".topnav").height()){
         $(".topnav").removeClass("navscroll");
      }
      else{
         $(".topnav").addClass("navscroll");
      }
    });
  });
