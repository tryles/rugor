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

$(".scroll").click(function(event){
  event.preventDefault();
  var full_url = this.href;
  var parts = full_url.split("#");
  var trgt = parts[1];
  var target_offset = $("#"+trgt).offset();

  if($(window).width() < 767){
     var target_top = target_offset.top -50;
  } else {
     var target_top = target_offset.top -100;
  }

  $('html, body').animate({scrollTop:target_top}, 500);
});

var image = new Array ();
image[0] = "img/1.png";
image[1] = "img/2.png";
image[2] = "img/3.png";
image[3] = "img/4.png";
image[4] = "img/5.png";
var size = image.length
var x = Math.floor(size*Math.random())

$('.yo').attr('src',image[x]);


      $('.clip').zclip({
          path:'js/ZeroClipboard.swf',
          copy:$('.shortUrl').text(),
          afterCopy:function(){
                 $(".copied").fadeIn(500).fadeOut(500);
              }
      });

      $(".clip").hover(function() {
        $(this).css("background-color","white")
      });

       $(".visit, .clip").mouseover(function() {
          $(this).css("background-color","white").css("color","black");
      }).mouseout(function() {
          $(this).css("background-color","transparent").css("color","white");
      });