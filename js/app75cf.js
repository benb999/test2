new WOW().init();

jQuery(document).ready(function($) {
    $('.na-counter').counterUp({
        delay: 10,
        time: 1000
    });
});

$(document).ready(function(){


    $("#sandbox-container3 input").datepicker();
     $("#sandbox-container4 input").datepicker();
   

  /*Menu*/
  var $menu = $("#menu").mmenu({
    "offCanvas": {
      "position": "right"
    }
  });


  var $icon = $("#nav-icon1");
  var API = $menu.data( "mmenu" );

  $icon.on( "click", function() {
    $('.top-nav').removeClass('sticky');
    API.open();
  });

  API.bind( "open:finish", function() {
     setTimeout(function() {
        $icon.addClass( "open" );
     }, 100);
  });
  API.bind( "close:finish", function() {
     setTimeout(function() {
        $icon.removeClass( "open" );
     }, 100);
  });

/*	$('#nav-icon1').click(function(){
 		$(this).toggleClass('open');
    	$(".m-menu-bg").toggleClass("open");
  	});*/

  	$("#gotop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $('#gotop').fadeIn();
        } else {
            $('#gotop').fadeOut();
        }
    });

    $('#gotop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    $(".header").css("height", $(window).height());

    function alignModal(){
      var modalDialog = $(this).find(".modal-dialog");
      modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    }
    $(".modal").on("shown.bs.modal", alignModal);
    $(window).on("resize", function(){
        $(".modal:visible").each(alignModal);
    }); 

    /*$('.top-news').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:false,
      margin:10,
      nav:false,
      items: 1

    });*/

});
      
          
var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
         //alert(stickyNavTop);
    if (scrollTop > 100) { 
        $('.top-nav').addClass('sticky');
        $('.top-news').addClass('sticky');
        //$('.sticky-nav').show();  
        $('.top-nav.sticky').css('top', $('.top-news').height());      
    } else {        
        $('.top-nav').removeClass('sticky');
        //$('.sticky-nav').hide(); 
        $('.top-news').removeClass('sticky');
        $('.top-nav').css('top', 0); 
    }
  };

  stickyNav();
  $(window).scroll(function() {
    stickyNav();
  });

$(window).resize(function(){
    $(".header").css("height", $(window).height());
    stickyNav();
});

$(window).on("load", function (e) {
	$(".spinner").delay(300).fadeOut();
	$(".loader").delay(600).fadeOut("slow");
});

