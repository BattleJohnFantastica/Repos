$(document).ready(function() {
 $('.carousel.carousel-slider').carousel({full_width:true, indicators: true});
 alert("Document is ready");
});




window.setInterval(function(){
  $('.carousel').carousel('next');
}, 5000)
