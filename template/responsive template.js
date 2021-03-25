$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('#slideshow');
}, 6000);

$("#textSlideshow > h2:gt(0)").hide();

setInterval(function() {
    $('#textSlideshow > h2:first')
    .fadeOut(300)
    .next()
    .fadeIn(300)
    .end()
    .appendTo('#textSlideshow');
}, 1500);



$(function(){
    var box = $('#item2');

    $(window).scroll(function(){
		if($(window).scrollTop() <= 180){
            box.removeClass('item2');
            
		} else {
            box.addClass('item2');
		}
    });
});


$(function(){
    var item1 = $('#item1');
      
    $(window).scroll(function(){
		if($(window).scrollTop() <= 180){
            item1.removeClass('item1');
            
		} else {
            item1.addClass('item1');         
		}
    });
});


$(function(){
    var container3 = $('#container3');
      
    $(window).scroll(function(){
		if($(window).scrollTop() <= 1480 || $(window).scrollTop() >= 3800){
            container3.removeClass('container3');
            
		} else {
            container3.addClass('container3');              
		}
    });
});


$(function(){
    var container8 = $('#container8');
      
    $(window).scroll(function(){
		if($(window).scrollTop() <= 3800 ){
            container8.removeClass('container8');
            
		} else {
            container8.addClass('container8');              
		}
        });
     });



$(function(){
    var gallery = $('div.gallery');
    var gallery2 = $('div.gallery img');
      

    $(window).scroll(function(){
		if($(window).scrollTop() <= 700){
            gallery.removeClass('img-gallery');
            gallery2.removeClass('div.gallery2')
            
		} else {
            gallery.addClass('img-gallery');
            gallery2.addClass('img-gallery2')               
		}
         });
       });



$(function(){
    var moveText = $('.container4 p');
    var moveIcons = $('#icons');
      
    $(window).scroll(function(){
		if($(window).scrollTop() <= 1280 ){
            moveText.removeClass('P-afterScroll')
            moveIcons.removeClass('icons-afterScroll');
            
		} else {
            moveText.addClass('P-afterScroll')
            moveIcons.addClass('icons-afterScroll');              
		}
         });
      });



$(function(){
    var zoomButton = $('.container5 button');
    var zoomInput = $('.container5 input');
      
    $(window).scroll(function(){
		if($(window).scrollTop() <= 2020 ){
            zoomButton.removeClass('button-afterScroll')
            zoomInput.removeClass('input-afterScroll');
                      
		} else {
            zoomButton.addClass('button-afterScroll')
            zoomInput.addClass('input-afterScroll');              
		}
         });
       });


$(function(){
    var resizeContaier = $('.container6');
      
    $(window).scroll(function(){
		if($(window).scrollTop() <= 2420 ){
            resizeContaier.removeClass('container6-afterScroll') 
            
		} else {
            resizeContaier.addClass('container6-afterScroll')             
		}
          });
        });



$(function(){
    var pricingGallery = $('.advanced, .professional, .business');
      
    $(window).scroll(function(){
		if($(window).scrollTop() <= 3420 ){
            pricingGallery.removeClass('pricing-gallery-afterScroll') 
            
		} else {
            pricingGallery.addClass('pricing-gallery-afterScroll')              
		}
         });
      });



$(function(){
    var backgroundForIpad = $('#fixed');
      
    $(window).scroll(function(){
		if($(window).scrollTop() <= 660 ){
            backgroundForIpad.removeClass('show') 
            
		} else {
            backgroundForIpad.addClass('show')              
		}
         });
       });


$(document).ready(function(){
    $("#openMenu").click(function(){
      $("#ipadMenu").fadeToggle(); 
    });
  });


function scrollFunction() {
    var slideshowText = document.getElementById('scrollText');
    setTimeout(function(){ slideshowText.style.paddingTop = '240px'; }, 500);
  }


  $(window).scroll(function(){
      if($(window).scrollTop() > 70){
      $('h1').css("opacity", "0"); }
      
      else if ($(window).scrollTop() < 70){
            $('h1').css("opacity", "1");
            };   
});