$(function() {


$('.events__gal').owlCarousel({
  loop:true,
  nav:true,
	items: 4,
	dots:false,
  margin:20,
	navText: ['<div class="events__arrow events__arrow--prev"><img src="img/arrow-prev.svg" alt="Влево"></div>','<div class="events__arrow events__arrow--next"><img src="img/arrow-next.svg" alt="Вправо"></div>']
})



$('.scroll').click( function(){
  var scroll_el = $(this).attr('href');
  if ($(scroll_el).length != 0) {
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
   }
  return false;
})




});
