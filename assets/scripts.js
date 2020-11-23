$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() < $(".navbar").height()){
         $(".navbar").removeClass("navscroll");
      }
      else{
         $(".navbar").addClass("navscroll");
      }
    });
  });
