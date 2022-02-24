
$(window).scroll(function(){
    if ($(this).scrollTop() > 86) {
       $('#clearHeader').addClass('sticky');
    } else {
       $('#clearHeader').removeClass('sticky');
    }
  });

  $('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   autoplay: 1000,
   dots: false,
   animateIn: 'fadeIn', 
  animateOut: 'fadeOut',
   responsive:{
       0:{
           items:1
       },
       600:{
           items:1
       },
       1000:{
           items:1
       }
   }
})
  
