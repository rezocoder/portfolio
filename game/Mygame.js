window.onkeydown = f1;

    var tanki = document.getElementById('object');
    
   function f1() {

    var key = event.keyCode;
    if(key == '32') {
    $("#object").append('<div class="ball"></div>');
    $('.ball').animate({
        marginLeft: "600%"
      }, 130 ); 
       
   
      setTimeout(function() {
        $('.ball').css("display", "none");
}, 130);  
  
    };
       
        var speed = 23;
    
      if(key == '38') {
        tanki.style.top = tanki.offsetTop -100 - speed + 'px';
      }

      else if(key == '40') {
        tanki.style.top = tanki.offsetTop -100 + speed + 'px';
      }

      window.setInterval(function() {
        var z = tanki.offsetTop;
      if(key == '40' && z >= 520) {
        tanki.style.top = 420 +'px';
      }

      else if(key == '38' && z <= 100) {
        tanki.style.top = 0  +'px';
      }
      }, 5);
   };

   

   $('#start').click(function(){
setTimeout (function() {
      var random = (Math.random() * 400);
      $("<div class='zombi'></div>").appendTo("body");
      $("<div class='right-wall'></div>").appendTo("body");
      $("<div class='left-wall'></div>").appendTo("body");
      $('.zombi').css("marginTop", random + 100 + "px");
      $('.zombi').animate({
      marginLeft: "-120px",
    }, 12000 ); 
}, 500);

   });

   $('#start').click(function(){
   setTimeout (function() {
      var random = (Math.random() * 400);
      $("<div class='zombiEight'></div>").appendTo("body");
      $("<div class='right-wall'></div>").appendTo("body");
      $("<div class='left-wall'></div>").appendTo("body");
      $('.zombiEight').css("marginTop", random + 100 + "px");
      $('.zombiEight').animate({
      marginLeft: "-120px",
    }, 12000 ); 
}, 2500);
   });

   $('#start').click(function(){
   setTimeout (function() {
      var random = (Math.random() * 400);
      $("<div class='zombiOne'></div>").appendTo("body");
      $("<div class='right-wall'></div>").appendTo("body");
      $("<div class='left-wall'></div>").appendTo("body");
      $('.zombiOne').css("marginTop", random + 100 + "px");
      $('.zombiOne').animate({
      marginLeft: "-120px",
    }, 12000 ); 
},4500);
   });

   $('#start').click(function(){
   setTimeout (function() {
      var random = (Math.random() * 400);
      $("<div class='zombiTwo'></div>").appendTo("body");
      $("<div class='right-wall'></div>").appendTo("body");
      $("<div class='left-wall'></div>").appendTo("body");
      $('.zombiTwo').css("marginTop", random + 100 + "px");
      $('.zombiTwo').animate({
      marginLeft: "-120px",
    }, 12000 ); 
},6500);
   });


   $('#start').click(function(){
   setTimeout (function() {
      var random = (Math.random() * 400);
      $("<div class='zombiThree'></div>").appendTo("body");
      $("<div class='right-wall'></div>").appendTo("body");
      $("<div class='left-wall'></div>").appendTo("body");
      $('.zombiThree').css("marginTop", random + 100 + "px");
      $('.zombiThree').animate({
      marginLeft: "-120px",
    }, 12000 ); 
},8500);
   });


    
    
   $('#start').click(function(){
    setInterval (function() {
      var random = (Math.random() * 400);
      
        $("<div class='zombi'></div>").appendTo("body");
        $("<div class='right-wall'></div>").appendTo("body");
        $("<div class='left-wall'></div>").appendTo("body");
        $('.zombi').css("marginTop", random + 100 + "px");
       
        $('.zombi').animate({
        marginLeft: "-120px",
      }, 12000); 
}, 12700);
   });


   $('#start').click(function(){
   setInterval (function() {
  var random = (Math.random() * 400);
     

        $("<div class='zombiOne'></div>").appendTo("body");
        $("<div class='right-wall'></div>").appendTo("body");
        $("<div class='left-wall'></div>").appendTo("body");
        $('.zombiOne').css("marginTop", random + 100 + "px");
        
        $('.zombiOne').animate({
        //marginLeft: (Math.random() * 500) + 1 + 'px',
        marginLeft: "-120px",
      }, 12000 ); 
}, 13800);
   });

   $('#start').click(function(){
   setInterval (function() {
  var random = (Math.random() * 400);
        $("<div class='zombiTwo'></div>").appendTo("body");
        $("<div class='right-wall'></div>").appendTo("body");
        $("<div class='left-wall'></div>").appendTo("body");
        $('.zombiTwo').css("marginTop", random + 100 + "px");
        
        $('.zombiTwo').animate({
        //marginLeft: (Math.random() * 500) + 1 + 'px',
        marginLeft: "-120px",
      }, 12000 ); 
}, 14400);
   });

   $('#start').click(function(){
   setInterval (function() {

  var random = (Math.random() * 400);
     
        $("<div class='zombiThree'></div>").appendTo("body");
        $("<div class='right-wall'></div>").appendTo("body");
        $("<div class='left-wall'></div>").appendTo("body");
        $('.zombiThree').css("marginTop", random + 100 + "px");
         
        $('.zombiThree').animate({
        marginLeft: "-120px",
      }, 12000 ); 
}, 16500);
   });



   $('#start').click(function(){
setInterval (function() {

var random = (Math.random() * 400);
    
      $("<div class='zombiFour'></div>").appendTo("body");
      $("<div class='right-wall'></div>").appendTo("body");
        $("<div class='left-wall'></div>").appendTo("body");
      $('.zombiFour').css("marginTop", random + 100 + "px");
      
      $('.zombiFour').animate({
      marginLeft: "-120px",
    }, 11000 ); 
  }, 17700);
   });


   $('#start').click(function(){
setInterval (function() {

var random = (Math.random() * 400);
    
      $("<div class='zombiFive'></div>").appendTo("body");
      $("<div class='right-wall'></div>").appendTo("body");
        $("<div class='left-wall'></div>").appendTo("body");
      $('.zombiFive').css("marginTop", random + 100 + "px");
      
      $('.zombiFive').animate({
      marginLeft: "-120px",
    }, 10500 ); 
  }, 10400);
   });


   $('#start').click(function(){
setTimeout (function() {
setInterval (function(){

var random = (Math.random() * 400);
   

      $("<div class='zombiSix'></div>").appendTo("body");
      $("<div class='right-wall'></div>").appendTo("body");
        $("<div class='left-wall'></div>").appendTo("body");
      $('.zombiSix').css("marginTop", random + 100 + "px");
      $('.zombiSix').animate({
      marginLeft: "-120px",
    }, 12000 ); 
  }, 12300);
}, 64500);
   });

   $('#start').click(function(){
   setInterval (function() {

var random = (Math.random() * 400);
    
      $("<div class='zombiSeven'></div>").appendTo("body");

      $("<div class='right-wall'></div>").appendTo("body");
      $("<div class='left-wall'></div>").appendTo("body");
      $('.zombiSeven').css("marginTop", random + 100 + "px");
       
      $('.zombiSeven').animate({
      //marginLeft: (Math.random() * 500) + 1 + 'px',
      marginLeft: "-120px",
    }, 12000 ); 
}, 14500);
   });

   $('#start').click(function(){
   setTimeout (function() {
setInterval (function() {
var random = (Math.random() * 400);
   
      $("<div class='zombiEight'></div>").appendTo("body");
      $("<div class='right-wall'></div>").appendTo("body");
      $("<div class='left-wall'></div>").appendTo("body");
      $('.zombiEight').css("marginTop", random + 100 + "px");
       
      $('.zombiEight').animate({
      marginLeft: "-120px",
    }, 12000 ); 
}, 12010);
}, 47000);
   });


   $('#start').click(function(){
   setTimeout (function() {
setInterval (function() {
      var random = (Math.random() * 400);
      
        $("<div class='zombiNine'></div>").appendTo("body");
        $("<div class='right-wall'></div>").appendTo("body");
        $("<div class='left-wall'></div>").appendTo("body");
        $('.zombiNine').css("marginTop", random + 100 + "px");
       
        $('.zombiNine').animate({
        marginLeft: "0px",
      }, 10500); 
}, 10900);
}, 35000);
   });




        window.setInterval (function() {$('.zombi').toggleClass('bg2');
        }, 200);
        window.setInterval (function() {$('.zombiOne').toggleClass('bg2');
        }, 200);
        window.setInterval (function() {$('.zombiTwo').toggleClass('bg2');
        }, 200);

        window.setInterval (function() {$('.zombiThree').toggleClass('bg2');
        }, 200);
        
        window.setInterval (function() {$('.zombiFour').toggleClass('bg2');
        }, 200);

        window.setInterval (function() {$('.zombiFive').toggleClass('bg2');
        }, 200);

        window.setInterval (function() {$('.zombiSix').toggleClass('bg2');
        }, 200);

        window.setInterval (function() {$('.zombiSeven').toggleClass('bg2');
        }, 200);

        window.setInterval (function() {$('.zombiEight').toggleClass('bg2');
        }, 200);

        window.setInterval (function() {$('.zombiNine').toggleClass('bg2');
        }, 200);

    
          window.setInterval(function() {
         var zombi = document.getElementsByClassName('zombi');
         var ball = document.getElementsByClassName('ball');

         var i = ball.length - 1;
         var x = ball[i].offsetLeft;
         
         var j = zombi.length - 1;
         var g = zombi[j].offsetLeft;
         var Y = zombi[j].offsetTop;
         var z = tanki.offsetTop;

         //var score = document.getElementById('score').innerHTML;
         var score = 5;

        if (x >= g - 100 && x <= g + 100  && z >= Y - 20 &&  z <= Y + 90 && g > 170) {
            zombi[j].style.transition = '0.30s';
            zombi[j].style.transform = 'rotate(90deg)';
            
            $("<div class='score'></div>").appendTo("body");
          

             setTimeout(function() {
              zombi[j].style.display = 'none';
}, 300); 
      ball[i].style.display = 'none';
        }  
          }, 10);


          window.setInterval(function() {
            var ball = document.getElementsByClassName('ball');
            var zombiOne = document.getElementsByClassName('zombiOne');
var i = ball.length - 1;
var x = ball[i].offsetLeft;

var z = tanki.offsetTop;
var jOne = zombiOne.length - 1;
var gOne = zombiOne[jOne].offsetLeft;
var YOne = zombiOne[jOne].offsetTop;

if(x >= gOne - 100 && x <= gOne + 100  && z >= YOne - 20 && z <= YOne + 90 && gOne > 170)   {
            
  setTimeout(function(){
            $("<div class='score'></div>").appendTo("body");
          }, 200);
            zombiOne[jOne].style.transition = '0.3s';
            zombiOne[jOne].style.transform = 'rotate(90deg)';

            
            setTimeout(function() {
                zombiOne[jOne].style.display = 'none'; 
              }, 300); 
      ball[i].style.display = 'none';
           }
          }, 10);



          window.setInterval(function() {
            var ball = document.getElementsByClassName('ball');
            var zombiTwo = document.getElementsByClassName('zombiTwo');
var i = ball.length - 1;
var x = ball[i].offsetLeft;

var z = tanki.offsetTop;
var jTwo = zombiTwo.length - 1;
         var gTwo = zombiTwo[jTwo].offsetLeft;
         var YTwo = zombiTwo[jTwo].offsetTop;

         if(x >= gTwo - 100  && x <= gTwo + 100  && z >= YTwo - 20 && z <= YTwo + 90 && gTwo > 170)   {
            
          setTimeout(function(){
            $("<div class='score'></div>").appendTo("body");
          }, 200);
            zombiTwo[jTwo].style.transition = '0.3s';
            zombiTwo[jTwo].style.transform = 'rotate(90deg)';

            
            setTimeout(function() {
                zombiTwo[jTwo].style.display = 'none'; 
              }, 300);
      ball[i].style.display = 'none';
           }
          }, 10);


          window.setInterval(function() {
            var ball = document.getElementsByClassName('ball');
            var zombiThree = document.getElementsByClassName('zombiThree');
var i = ball.length - 1;
var x = ball[i].offsetLeft;

var z = tanki.offsetTop;
var jThree = zombiThree.length - 1;
var gThree = zombiThree[jThree].offsetLeft;
var YThree = zombiThree[jThree].offsetTop;

if(x >= gThree - 100 && x <= gThree + 100  && z >= YThree - 20 && z <= YThree + 90 && gThree > 170)   {
            
  setTimeout(function(){
            $("<div class='score'></div>").appendTo("body");
          }, 200);
            zombiThree[jThree].style.transition = '0.3s';
            zombiThree[jThree].style.transform = 'rotate(90deg)';

            
            setTimeout(function() {
                zombiThree[jThree].style.display = 'none'; 
              }, 300);
      ball[i].style.display = 'none';
           }
          }, 10);


          window.setInterval(function() {
            var ball = document.getElementsByClassName('ball');
            var zombiFour = document.getElementsByClassName('zombiFour');
var i = ball.length - 1;
var x = ball[i].offsetLeft;

var z = tanki.offsetTop;
var jFour = zombiFour.length - 1;
var gFour = zombiFour[jFour].offsetLeft;
var YFour = zombiFour[jFour].offsetTop;

if(x >= gFour - 100 && x <= gFour + 100  && z >= YFour - 20 && z <= YFour + 90 && gFour > 170)   {
            
  setTimeout(function(){
            $("<div class='score'></div>").appendTo("body");
          }, 200);
            zombiFour[jFour].style.transition = '0.3s';
            zombiFour[jFour].style.transform = 'rotate(90deg)';

            
            setTimeout(function() {
                zombiFour[jFour].style.display = 'none'; 
              }, 300);
      ball[i].style.display = 'none';
           }
          }, 10);


          window.setInterval(function() {
            var ball = document.getElementsByClassName('ball');
            var zombiFive = document.getElementsByClassName('zombiFive');
var i = ball.length - 1;
var x = ball[i].offsetLeft;

var z = tanki.offsetTop;
var jFive = zombiFive.length - 1;
         var gFive = zombiFive[jFive].offsetLeft;
         var YFive = zombiFive[jFive].offsetTop;

if(x >= gFive - 100 && x <= gFive + 100  && z >= YFive - 20 && z <= YFive + 90 && gFive > 170)   {
          
  setTimeout(function(){
            $("<div class='score'></div>").appendTo("body");
          }, 200);
            zombiFive[jFive].style.transition = '0.3s';
            zombiFive[jFive].style.transform = 'rotate(90deg)';
            
            setTimeout(function() {
                zombiFive[jFive].style.display = 'none'; 
              }, 300);
      ball[i].style.display = 'none';
           }
          }, 10);



          window.setInterval(function() {
            var ball = document.getElementsByClassName('ball');
            var zombiSix = document.getElementsByClassName('zombiSix');
var i = ball.length - 1;
var x = ball[i].offsetLeft;

var z = tanki.offsetTop;
var jSix = zombiSix.length - 1;
         var gSix = zombiSix[jSix].offsetLeft;
         var YSix = zombiSix[jSix].offsetTop;

         if(x >= gSix - 100 && x <= gSix + 100  && z >= YSix - 20 && z <= YSix + 90 && gSix > 170)   {
         
          setTimeout(function(){
            $("<div class='score'></div>").appendTo("body");
          }, 200);
            zombiSix[jSix].style.transition = '0.3s';
            zombiSix[jSix].style.transform = 'rotate(90deg)';
            
            setTimeout(function() {
                zombiSix[jSix].style.display = 'none'; 
              }, 300);
      ball[i].style.display = 'none';
           }
          }, 10);



          window.setInterval(function() {
            var ball = document.getElementsByClassName('ball');
            var zombiSeven = document.getElementsByClassName('zombiSeven');
var i = ball.length - 1;
var x = ball[i].offsetLeft;

var z = tanki.offsetTop;
var jSeven = zombiSeven.length - 1;
         var gSeven = zombiSeven[jSeven].offsetLeft;
         var YSeven = zombiSeven[jSeven].offsetTop;

         if(x >= gSeven - 100 && x <= gSeven + 100  && z >= YSeven - 20 && z <= YSeven + 90 && gSeven > 170)   {
           
          setTimeout(function(){
            $("<div class='score'></div>").appendTo("body");
          }, 200);
            zombiSeven[jSeven].style.transition = '0.3s';
            zombiSeven[jSeven].style.transform = 'rotate(90deg)';
            
            setTimeout(function() {
                zombiSeven[jSeven].style.display = 'none'; 
              }, 300);
      ball[i].style.display = 'none';
           }
          }, 10);


          window.setInterval(function() {
            var ball = document.getElementsByClassName('ball');
            var zombiEight = document.getElementsByClassName('zombiEight');
var i = ball.length - 1;
var x = ball[i].offsetLeft;

var z = tanki.offsetTop;
var jEight = zombiEight.length - 1;
         var gEight = zombiEight[jEight].offsetLeft;
         var YEight = zombiEight[jEight].offsetTop;

         if(x >= gEight - 100 && x <= gEight + 100  && z >= YEight - 20 && z <= YEight + 90 && gEight > 170)   {
          setTimeout(function(){
            $("<div class='score'></div>").appendTo("body");
          }, 200);
            zombiEight[jEight].style.transition = '0.3s';
            zombiEight[jEight].style.transform = 'rotate(90deg)';
            
            setTimeout(function() {
                zombiEight[jEight].style.display = 'none'; 
              }, 300);
      ball[i].style.display = 'none';
           }
          }, 10);




          window.setInterval(function() {
            var ball = document.getElementsByClassName('ball');
            var zombiNine = document.getElementsByClassName('zombiNine');
var i = ball.length - 1;
var x = ball[i].offsetLeft;

var z = tanki.offsetTop;
var jNine = zombiNine.length - 1;
         var gNine = zombiNine[jNine].offsetLeft;
         var YNine = zombiNine[jNine].offsetTop;

         if(x >= gNine - 100 && x <= gNine + 100  && z >= YNine - 20 && z <= YNine + 90 && gNine > 170)   {
          setTimeout(function(){
            $("<div class='score'></div>").appendTo("body");
          }, 600);
            zombiNine[jNine].style.transition = '0.3s';
            zombiNine[jNine].style.transform = 'rotate(90deg)';

            
            setTimeout(function() {
                zombiNine[jNine].style.display = 'none'; 
              }, 300);
      ball[i].style.display = 'none';
           }
          }, 10);







          window.setInterval(function() {
            var zombi = document.getElementsByClassName('zombi');
            var j = zombi.length - 1;
            var g = zombi[j].offsetLeft;
            
         if(g < 70 && g > 0)   {
          setInterval(function(){
          $('.game-over').slideDown();
          $('#score').hide();
          $(".zombi").hide();
          $(".zombiOne").hide();
          $(".zombiTwo").hide();
          $(".zombiThree").hide();
          $(".zombiFour").hide();
          $(".zombiFive").hide();
          $(".zombiSix").hide();
          $(".zombiSeven").hide();
          $(".zombiEight").hide();
          $(".zombiNine").hide();  
      }, 10);
    }
          }, 11);


          window.setInterval(function() {
            var zombiOne = document.getElementsByClassName('zombiOne');
            var jOne = zombiOne.length - 1;
            var gOne = zombiOne[jOne].offsetLeft;
            
         if(gOne < 70 && gOne > 0)   {
          setInterval(function(){
          $('.game-over').slideDown();
          $('#score').hide();
          $(".zombi").hide();
          $(".zombiOne").hide();
          $(".zombiTwo").hide();
          $(".zombiThree").hide();
          $(".zombiFour").hide();
          $(".zombiFive").hide();
          $(".zombiSix").hide();
          $(".zombiSeven").hide();
          $(".zombiEight").hide();
          $(".zombiNine").hide();  
      }, 10);
        }
          }, 10);

          window.setInterval(function() {
            var zombiTwo = document.getElementsByClassName('zombiTwo');
            var jTwo = zombiTwo.length - 1;
            var gTwo = zombiTwo[jTwo].offsetLeft;

         if(gTwo < 70 && gTwo > 0)   {
          setInterval(function(){
          $('.game-over').slideDown();
          $('#score').hide();
          $(".zombi").hide();
          $(".zombiOne").hide();
          $(".zombiTwo").hide();
          $(".zombiThree").hide();
          $(".zombiFour").hide();
          $(".zombiFive").hide();
          $(".zombiSix").hide();
          $(".zombiSeven").hide();
          $(".zombiEight").hide();
          $(".zombiNine").hide();  
      }, 10);
        }
          }, 10);


          window.setInterval(function() {
            var zombiThree = document.getElementsByClassName('zombiThree');
            var jThree = zombiThree.length - 1;
            var gThree = zombiThree[jThree].offsetLeft;

         if(gThree < 70 && gThree > 0)   {
          setInterval(function(){
          $('.game-over').slideDown();
          $('#score').hide();
          $(".zombi").hide();
          $(".zombiOne").hide();
          $(".zombiTwo").hide();
          $(".zombiThree").hide();
          $(".zombiFour").hide();
          $(".zombiFive").hide();
          $(".zombiSix").hide();
          $(".zombiSeven").hide();
          $(".zombiEight").hide();
          $(".zombiNine").hide();  
      }, 10);
        }
          }, 10);


          window.setInterval(function() {

            var zombiFour = document.getElementsByClassName('zombiFour');
            var jFour = zombiFour.length - 1;
            var gFour = zombiFour[jFour].offsetLeft;

         if(gFour < 70 && gFour > 0)   {
          setInterval(function(){
          $('.game-over').slideDown();
          $('#score').hide();
          $(".zombi").hide();
          $(".zombiOne").hide();
          $(".zombiTwo").hide();
          $(".zombiThree").hide();
          $(".zombiFour").hide();
          $(".zombiFive").hide();
          $(".zombiSix").hide();
          $(".zombiSeven").hide();
          $(".zombiEight").hide();
          $(".zombiNine").hide();  
      }, 10);
        }
          }, 10);

          window.setInterval(function() {

            var zombiFive = document.getElementsByClassName('zombiFive');
            var jFive = zombiFive.length - 1;
            var gFive = zombiFive[jFive].offsetLeft;

         if(gFive < 70 && gFive > 0){
          setInterval(function(){
          $('.game-over').slideDown();
          $('#score').hide();
          $(".zombi").hide();
          $(".zombiOne").hide();
          $(".zombiTwo").hide();
          $(".zombiThree").hide();
          $(".zombiFour").hide();
          $(".zombiFive").hide();
          $(".zombiSix").hide();
          $(".zombiSeven").hide();
          $(".zombiEight").hide();
          $(".zombiNine").hide();  
      }, 10);
        }
          }, 10);


          window.setInterval(function() {
            var zombiSix = document.getElementsByClassName('zombiSix');
            var jSix = zombiSix.length - 1;
            var gSix = zombiSix[jSix].offsetLeft;

         if(gSix < 70 && gSix > 0)   {
          setInterval(function(){
          $('.game-over').slideDown();
          $('#score').hide();
          $(".zombi").hide();
          $(".zombiOne").hide();
          $(".zombiTwo").hide();
          $(".zombiThree").hide();
          $(".zombiFour").hide();
          $(".zombiFive").hide();
          $(".zombiSix").hide();
          $(".zombiSeven").hide();
          $(".zombiEight").hide();
          $(".zombiNine").hide();  
      }, 10);
        }
          }, 10);


          window.setInterval(function() {
            var zombiSeven = document.getElementsByClassName('zombiSeven');
            var jSeven = zombiSeven.length - 1;
            var gSeven = zombiSeven[jSeven].offsetLeft;
         if(gSeven < 70 && gSeven > 0)   {
          setInterval(function(){
          $('.game-over').slideDown();
          $('#score').hide();
          $(".zombi").hide();
          $(".zombiOne").hide();
          $(".zombiTwo").hide();
          $(".zombiThree").hide();
          $(".zombiFour").hide();
          $(".zombiFive").hide();
          $(".zombiSix").hide();
          $(".zombiSeven").hide();
          $(".zombiEight").hide();
          $(".zombiNine").hide();  
      }, 10);
        }
          }, 10);


          window.setInterval(function() {
            var zombiEight = document.getElementsByClassName('zombiEight');
            var jEight = zombiEight.length - 1;
            var gEight = zombiEight[jEight].offsetLeft;
         if(gEight < 70 && gEight > 0)   {
          setInterval(function(){
          $('.game-over').slideDown();
          $('#score').hide();
          $(".zombi").hide();
          $(".zombiOne").hide();
          $(".zombiTwo").hide();
          $(".zombiThree").hide();
          $(".zombiFour").hide();
          $(".zombiFive").hide();
          $(".zombiSix").hide();
          $(".zombiSeven").hide();
          $(".zombiEight").hide();
          $(".zombiNine").hide();  
      }, 10);
        }
          }, 10);


          window.setInterval(function() {
            var zombiNine = document.getElementsByClassName('zombiNine');
            var jNine = zombiNine.length - 1;
            var gNine = zombiNine[jNine].offsetLeft;
         if(gNine < 70 && gNine > 0)   {
          setInterval(function(){
          $('.game-over').slideDown();
          $('#score').hide();
          $(".zombi").hide();
          $(".zombiOne").hide();
          $(".zombiTwo").hide();
          $(".zombiThree").hide();
          $(".zombiFour").hide();
          $(".zombiFive").hide();
          $(".zombiSix").hide();
          $(".zombiSeven").hide();
          $(".zombiEight").hide();
          $(".zombiNine").hide();  
      }, 10);
        }
          }, 10);




                  $('#startAgain').click(function(){
                    location.reload();
                  })
          

                  window.setInterval(function(){
                    var score = $('.score').length;
                    $('#score').html('score ' + '<br> &nbsp;&nbsp; ' + score);
                    $('.result').html('Your score: ' + score)
                  }, 10)

                  window.setTimeout(function(){
                    $('.start').slideDown()
                  }, 400);

                  $('#start').click(function(){
                    $('.start').slideUp();
                  });