$(document).ready(function () {
  $('#about-us-one').mouseenter(function () {
    $('#about_one_img').attr('src', 'assets/images/about_us_hovered.svg');
    $('#about_two_img').attr('src', 'assets/images/about_us.svg');
    // $('#about-two-text').css('display', 'none');
    // $('#about-one-text').css('display', 'block');
    $('#about-two-text').css('display', 'none');
    $('#about-one-text').show("slow");
  });

  $('#about-us-one').mouseleave(function () {
    $('#about_one_img').attr('src', 'assets/images/about_us.svg');
    $('#about_two_img').attr('src', 'assets/images/about_us_hovered.svg');

    $('#about-one-text').css('display', 'none');
    $('#about-two-text').show("slow");
  });
  //for three
  $('#about-us-three').mouseenter(function () {
    $('#about_three_img').attr('src', 'assets/images/about_us_hovered.svg');
    $('#about_two_img').attr('src', 'assets/images/about_us.svg');
    $('#about-two-text').css('display', 'none');
    $('#about-three-text').show("slow");
  });

  $('#about-us-three').mouseleave(function () {
    $('#about_three_img').attr('src', 'assets/images/about_us.svg');
    $('#about_two_img').attr('src', 'assets/images/about_us_hovered.svg');
    $('#about-three-text').css('display', 'none');
    $('#about-two-text').show("slow");
  });

  //   service section
  // first
  $('#ssm-service').mouseenter(function () {
    $('#ssm-service').addClass('hover-text');
    $('#default-des').css('display', 'none');
    $('#ssm-des').show("slow");
  });

  $('#ssm-service').mouseleave(function () {
    $('#ssm-service').removeClass('hover-text');
    $('#default-des').show("slow");
    $('#ssm-des').css('display', 'none');
  });

  //    second
  $('#cs-service').mouseenter(function () {
    $('#cs-service').addClass('hover-text');
    $('#default-des').css('display', 'none');
    $('#cs-des').show("slow");
  });

  $('#cs-service').mouseleave(function () {
    $('#cs-service').removeClass('hover-text');
    $('#default-des').show("slow");
    $('#cs-des').css('display', 'none');
  });
  //   third

  $('#pd-service').mouseenter(function () {
    $('#pd-service').addClass('hover-text');
    $('#default-des').css('display', 'none');
    $('#pd-des').show("slow");
  });

  $('#pd-service').mouseleave(function () {
    $('#pd-service').removeClass('hover-text');
    $('#default-des').show("slow");
    $('#pd-des').css('display', 'none');
  });

  // services

  $('#ship-img').mouseenter(function () {
    $('.hover-overlay').show("slow");
    $('.display-blur').css('display', 'block');
  });

  $('#ship-img').mouseleave(function () {
    $('.hover-overlay').css('display', 'none');
    $('.display-blur').css('display', 'none');
  });

  $('.hover-overlay').mouseenter(function () {
    $('.hover-overlay').css('display', 'block');
  });

  $('.hover-overlay').mouseleave(function () {
    $('.hover-overlay').css('display', 'none');
  });

  // play button
  $('.play-button').mouseenter(function () {
    $('.play-button').css('background-color', 'white');
    $('.play-btn-img').attr('src', 'assets/images/play_black.svg');
  });

  $('.play-button').mouseleave(function () {
    $('.play-button').css('background-color', 'transparent');
    $('.play-btn-img').attr('src', 'assets/images/play.svg');
    $('.display-blur').css('display', 'block');
  });

  // hover overlay
  $('.hover-overlay').mouseenter(function () {
    $('.display-blur').css('display', 'block');
  });

  $('.hover-overlay').mouseleave(function () {
    $('.display-blur').css('display', 'none');
  });
});
