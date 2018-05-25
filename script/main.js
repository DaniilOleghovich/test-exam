  $(document).ready(function(){
    var menuBtn = $('.top-nav__btn');
    var menu = $('.top-nav__menu');

    menuBtn.click(function(){
      menu.slideToggle(500);
      $(this).toggleClass('top-nav__btn--active');
    });
    $(window).on('resize', function(){
    if ($(document).width() > 480){
       menu.attr('style', '');
       menuBtn.removeClass('top-nav__btn--active');
    }
 });
  });


var menuIcon = $('.header-nav-toggle');
  menu = $('.menu--sub');

menuIcon.on('click', function(e){
  e.preventDefault();
  menu.toggleClass('menu--expanded');
});


$('.works-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000
});

$('.team-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1100,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               arrows: false
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               arrows: false
            }
         }
      ]
   });



$(function(){
  $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
    var target = $(this).attr('href'),
        top = $(target).offset().top;
    $('body,html').animate({scrollTop: top}, 700);
    return false;
  })
});


$(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            if ($('#upbutton').is(':hidden')) {
                $('#upbutton').css({opacity : 1}).fadeIn('slow');
            }
        } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
    });
    $('#upbutton').click(function() {
        $('html, body').stop().animate({scrollTop : 0}, 1000);
    });
