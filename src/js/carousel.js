/* Carousel */

var vauxCarousel = {

  init: function(carouselObject){

    this.bindUIfunctions(carouselObject);

    $(carouselObject).slick({
      adaptiveHeight: true,
      dots: true,
      draggable: true,
      focusOnChange: true,
      mobileFirst: true,
      infinite: false,
      dotsClass: 'slick-dots vaux-carousel-dots',
      nextArrow: '<button class="vaux-carousel-next">Next</button>',
      prevArrow: '<button class="vaux-carousel-prev">Previous</button>'
    });
  },

  bindUIfunctions: function(carouselObject) {
     $(carouselObject).on('init', function(event, slick, direction){
      vauxCarousel.createLiveRegion(carouselObject);
      vauxCarousel.updateLiveRegion(carouselObject);
    });

    $(carouselObject).on('afterChange', function(event, slick, direction){
      vauxCarousel.updateLiveRegion(carouselObject);
    });
  },

  createLiveRegion: function(carouselObject) {
    var liveregion = '<div aria-live="polite" aria-atomic="true" class="liveregion usa-sr-only"></div>';
    $(carouselObject).append(liveregion);
  },

  updateLiveRegion: function(carouselObject) {
    var slides = $(carouselObject).find('.slick-track li'),
        currentSlide = slides.filter('.slick-current'),
        slideIndex = slides.index(currentSlide);

    $(carouselObject).children('.liveregion').text('Item ' + (slideIndex + 1) + ' of ' + slides.length);
  }
};


$("[data-carousel-trigger]").each(function(){
  vauxCarousel.init(this);
});
