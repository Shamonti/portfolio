(function($) {
  "use strict";

  var burgerMenu = function() {
    $('.burger').click(function(e) {
      $(window).scrollTop(0);
      if (!$('.burger').hasClass('active'))
        $('.burger').addClass('active');
      else
        $('.burger').removeClass('active');
    });
  }
  burgerMenu();

  var siteIstotope = function() {
    var $container = $('#portfolio-grid').isotope({
      itemSelector: '.item',
      isFitWidth: true
    });

    $(window).resize(function() {
      $container.isotope({
        columnWidth: '.col-sm-3'
      });
    });

    $container.isotope({
      filter: '*'
    });

    $('#filters').on('click', 'a', function(e) {
      e.preventDefault();
      var filterValue = $(this).attr('data-filter');
      $container.isotope({
        filter: filterValue
      });
      $('#filters a').removeClass('active');
      $(this).addClass('active');
    });
  }
  $(window).on('load', function() {
    siteIstotope();
  });

  var siteOwlCarousel = function() {
    $('.testimonial-carousel').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      smartSpeed: 1000,
    });
  };
  siteOwlCarousel();

  $(window).on('load', function() {
    AOS.init({
      easing: 'ease',
      duration: 1000,
      once: true
    });
  });

})(jQuery);

jQuery(document).ready(function($){
  var bsOverlay = $('.bs-canvas-overlay');
  $('[data-toggle="canvas"]').on('click', function(){
    var ctrl = $(this), 
      elm = ctrl.is('button') ? ctrl.data('target') : ctrl.attr('href');
    $(elm).addClass('mr-0');
    $(elm + ' .bs-canvas-close').attr('aria-expanded', "true");
    $('[data-target="' + elm + '"], a[href="' + elm + '"]').attr('aria-expanded', "true");
    if(bsOverlay.length)
      bsOverlay.addClass('show');
    return false;
  });
  
  $('.bs-canvas-close, .bs-canvas-overlay').on('click', function(){
    var elm;
    if($(this).hasClass('bs-canvas-close')) {
      elm = $(this).closest('.bs-canvas');
      $('[data-target="' + elm + '"], a[href="' + elm + '"]').attr('aria-expanded', "false");
    } else {
      elm = $('.bs-canvas')
      $('[data-toggle="canvas"]').attr('aria-expanded', "false"); 
    }
    elm.removeClass('mr-0');
    $('.bs-canvas-close', elm).attr('aria-expanded', "false");
    if(bsOverlay.length)
      bsOverlay.removeClass('show');
    return false;
  });
});