$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      rtl:true,
      items: 4,
      loop: true,
      margin: 0,
      nav:true,
      dots:true,
      center: true,
      autoplay: true,
      slideBy:3,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass:true,
      responsive:{
          0:{
            items:2,
            nav:true
          },
          600:{
            items:2,
            nav:true,
          },
          1000:{
            items:3,
            center: true,
          },
          1200:{
            items:5,
            center: true,
        }
      }
    });
});

$(document).ready(function(){
  $(".sign-btn-active").click(function(){
    $(".overly-form").toggleClass("sign-active");
  });
  $(".log-btn-active").click(function(){
    $(".overly-form").toggleClass("log-active");
  });
});