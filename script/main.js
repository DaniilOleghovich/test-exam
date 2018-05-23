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

$('.works-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true
});

var menuIcon = $('.header-nav-toggle');
  menu = $('.menu--sub');

menuIcon.on('click', function(e){
  e.preventDefault();
  menu.toggleClass('menu--expanded');
});
