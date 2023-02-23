$(document).ready(function(){
  $('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  });

  $('.slick-carousel').on('swipe', function(event, slick, direction){
    console.log(direction);
    // left
  });
});