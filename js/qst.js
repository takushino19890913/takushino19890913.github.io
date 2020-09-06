$(document).ready(function(){
  if(window.innerWidth<= 575.98){
    $('#topImage').attr('src', "asset/qst/magnifier-glass/magnifier-glass-xs-qiita2.png");
  }
  else if(window.innerWidth<= 767.98){
     $('#topImage').attr('src', "asset/qst/magnifier-glass/magnifier-glass-small.png");
  }
  else if(window.innerWidth<= 991.98){
    $('#topImage').attr('src', "asset/qst/magnifier-glass/magnifier-glass-medium.png");
  }

$(window).on('resize', function(){
  if(window.innerWidth<= 575.98){
    $('#topImage').attr('src', "asset/qst/magnifier-glass/magnifier-glass-xs-qiita2.png");
  }
  else if(window.innerWidth<= 767.98){
    $('#topImage').attr('src', "asset/qst/magnifier-glass/magnifier-glass-small.png");
 }
 else if(window.innerWidth<= 991.98){
   $('#topImage').attr('src', "asset/qst/magnifier-glass/magnifier-glass-medium.png");
 }
 else{
   $('#topImage').attr('src', "asset/qst/magnifier-glass/magnifier-glass-large.png");
 }
});

});
