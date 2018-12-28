(function ($) {
 "use strict";
/*----------------------------
 jQuery MeanMenu
------------------------------ */	
  $('nav#dropdown').meanmenu();	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init(); 
/*----------------------------
 owl active
------------------------------ */  
  $(".references-content-area").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
   
 /*--------------------------
 Sticky Menu Activation Code
---------------------------- */		   
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>700 ){
			$('#sticky').addClass('stick');
			} else {
			$('#sticky').removeClass('stick');
		}
	});
/*--------------------------
 One Page Navigatiopn Activation Code
---------------------------- */
$('#nav').onePageNav({
    scrollOffset:80
});
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	}); 

/*---------------------------------------
Circular Progress Bar   
---------------------------------------*/  
    if(typeof($.fn.knob) != 'undefined') {
    $('.knob').each(function () {
      var $this = $(this),
        knobVal = $this.attr('data-rel');
  
      $this.knob({
      'draw' : function () { 
        $(this.i).val(this.cv + '%')
      }
      });
      
      $this.appear(function() {
      $({
        value: 0
      }).animate({
        value: knobVal
      }, {
        duration : 2000,
        easing   : 'swing',
        step     : function () {
        $this.val(Math.ceil(this.value)).trigger('change');
        }
      });
      }, {accX: 0, accY: -150});
    });
    } 


})(jQuery); 