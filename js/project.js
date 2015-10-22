$( function() {
  var ytplayer = $(".player").YTPlayer();
});

$(".scroll").click(function(e){
  e.preventDefault();
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

var images = ["img/1.png","img/2.png","img/3.png","img/4.png","img/5.png"];
var rndImage = Math.floor(images.length*Math.random());

$('.yo').attr('src',images[rndImage]);

$('.clip').zclip({
    path:'js/ZeroClipboard.swf',
    copy:$('.shortUrl').text(),
    afterCopy:function(){
           $(".copied").fadeIn(500).fadeOut(500);
        }
});

$(".clip").hover(function() {
  $(this).css("background-color","white");
});

$(".visit, .clip").mouseover(function() {
  $(this).css("background-color","white").css("color","black");
}).mouseout(function() {
  $(this).css("background-color","transparent").css("color","white");
});