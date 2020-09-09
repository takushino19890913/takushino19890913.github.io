$(document).ready(function(){
  if(window.innerWidth<= 767.98){
     $('#topImage').attr('src', "./asset/index/phone_desk_long.png");
  }
  else if(window.innerWidth >= 992){
    $('#topImage').attr('src', "asset/index/desk_wide.png");
  }

$(window).on('resize', function(){
 if(window.innerWidth<= 767.98){
    $('#topImage').attr('src', "./asset/index/phone_desk_long.png");
 }
 else if(window.innerWidth >= 992){
   $('#topImage').attr('src', "asset/index/desk_wide.png");
 }
 else{
   $('#topImage').attr('src', "./asset/index/desk3.png");
 }
});

  //social media buttons hover
  $('#github').hover(
    function(){
      $(this).attr('src',"./asset/index/github_hover.png");
      $(this).css('opacity', '0.90')
    },
    function(){
      $(this).attr('src',"./asset/index/github.png");
      $(this).css('opacity', '1');
    }
  );
  $('#twitter').hover(
    function(){
      $(this).attr('src',"./asset/index/twitter_hover.png");
      $(this).css('opacity', '0.90')
    },
    function(){
      $(this).attr('src',"./asset/index/twitter.png");
      $(this).css('opacity', '1');
    }
  );
  $('#linkedin').hover(
    function(){
      $(this).attr('src',"./asset/index/linkedin_hover.png");
      $(this).css('opacity', '0.90')
    },
    function(){
      $(this).attr('src',"./asset/index/linkedin.png");
      $(this).css('opacity', '1');
    }
  );
  $('#instagram').hover(
    function(){
      $(this).attr('src',"./asset/index/instagram_hover.png");
      $(this).css('opacity', '0.90');
    },
    function(){
      $(this).attr('src',"./asset/index/instagram.png");
      $(this).css('opacity', '1');
    }
  );

  function addClass(){
    $('.effect-fade').each(function(){
      $(this).addClass('effect-scroll');
    })
  }

if(window.location.href.split('#').length === 1)
{
  $(function() {
    $('.typ').children().addBack().contents().each(function() {
      if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
      }
    });

    // ここから一文字ずつフェードインさせる記述
    $('.typ').css({'opacity':1});
    for (var i = 0; i <= $('.typ').children().length; i++) {
        $('.typ').children('span:eq('+i+')').delay(200 + 200*i).fadeIn(200);
    };
  	setTimeout(function(){
  		$('.start').fadeOut(1000);
  	},4000);

    setTimeout(function(){
      addClass();
    },5000);
  });

}
else{
  $('.start').hide();
  addClass();
}

  //
  // // Hide the Modal after the animation
  //   $("#btnclosemodel").click(function() {
  //     $('#menuModal.modal').animateCss('bounceOutLeft', function() {
  //       $("#menuModal").modal("hide");
  //     });
  //   });
  //
  //   //show the Modal and then animate
  //   $("#triggerModalButton").click(function() {
  //     $("#menuModal").modal("show");
  //     $('#menuModal.modal').animateCss('rubberBand');
  //   });

});
