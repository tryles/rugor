var options = {
    offset: '#foo',
    classes: {
        clone:   'banner--clone',
        stick:   'banner--stick',
        unstick: 'banner--unstick'
    }
};

var banner = new Headhesive('.banner', options);

// external js: isotope.pkgd.js

$( function() {
  var ytplayer = $(".player").YTPlayer();
  $('.isotope').isotope({
    itemSelector: '.item',
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });

  $("[rel='tooltip']").tooltip();
  $('.item').hover(
    function(){
      $(this).find('.caption').fadeIn(250);
    },
    function(){
      $(this).find('.caption').fadeOut(250);
    }
  );
});

$(".scroll").click(function(e){
  e.preventDefault();
  var full_url = this.href;
  var parts = full_url.split("#");
  var trgt = parts[1];
  var target_offset = $("#"+trgt).offset();
  var target_top = 0;

  if($(window).width() < 767){
     target_top = target_offset.top -50;
  } else {
     target_top = target_offset.top -100;
  }

  $('html, body').animate({scrollTop:target_top}, 500);
});

var images = ["img/1.png","img/2.png","img/3.png","img/4.png","img/5.png"];
var rndImage = Math.floor(images.length*Math.random());

$('.yo').attr('src',images[rndImage]);

var trylLogo = new SVGMorpheus('#logo');
var logos = ['Layer_1','Layer_2','Layer_3','Layer_4','Layer_5'];

setInterval(function() {
  var index = Math.floor(Math.random() * logos.length);
  trylLogo.to(logos[index], {
    duration: 1000,
    easing: 'quad-in-out',
    rotation: 'none'
  });
}, 13000);