$('#gallery').slick({
  dots: false,
  arrows: true,
  infinite: true,
  mobileFirst: true,
  fade: true,
  speed: 1200,
  slidesToShow: 1,
  adaptiveHeight: true
});

$(function() {
        $(".dial").knob();
    });

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});