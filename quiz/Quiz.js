$(document).ready(function() {
    $( "#modalWindow" ).slideDown(1000);
  });

  $(document).ready(function(){

    $("#start").click(function() {  
      $( "#modalWindow" ).slideUp();      
    });   
  });

  

$(document).ready(function() {
    $("#start").click(function()  { setTimeout(function() {
    $(function() {
        var time = 3; 
        function redirect(){
          var id = setTimeout(redirect, 1000);
          $(".timer").html(time);
          if(time == 0){
            clearTimeout(id);
            $( ".timer" ).hide();
            $( "#firstQuestion" ).slideDown(500);
          }
          time --;
        }
        redirect();
     }); 
    }, 1000);
    });
});


    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    var f = 0;
    var g = 0;
    var h = 0;
    var i = 0;
    var j = 0;
    
    $(document).ready(function() {
    
    $(".answer-one-1").click(function() {
      $( this ).css("background-color", "gray");
      $(".answer-two-1, .answer-three-1").css("background-color", "white");
      a = 0;
    });
    
    $(".answer-two-1").click(function() {
      $( this ).css("background-color", "gray");
      $( ".answer-one-1, .answer-three-1" ).css("background-color", "white");
      a = 1;
    });
    
    $(".answer-three-1").click(function() {
      $( this ).css("background-color", "gray");
      $( ".answer-one-1, .answer-two-1" ).css("background-color", "white");
      a = 0;
    });
    });
    
    
    $(document).ready(function() {
    
      $(".answer-one-2").click(function() {
        $( this ).css("background-color", "lightblue");
        $(".answer-two-2, .answer-three-2").css("background-color", "white");
        b = 0;
      });
      
      $(".answer-two-2").click(function() {
        $( this ).css("background-color", "lightblue");
        $( ".answer-one-2, .answer-three-2" ).css("background-color", "white");
        b = 1;
      });
      
      $(".answer-three-2").click(function() {
        $( this ).css("background-color", "lightblue");
        $( ".answer-one-2, .answer-two-2" ).css("background-color", "white");
        b = 0;
      });
      });



      $(document).ready(function() {

        $(".answer-one-3").click(function() {
          $( this ).css("background-color", "lightblue");
          $(".answer-two-3, .answer-three-3").css("background-color", "white");
          c = 0;
        });
        
        $(".answer-two-3").click(function() {
          $( this ).css("background-color", "lightblue");
          $( ".answer-one-3, .answer-three-3" ).css("background-color", "white");
          c = 0;
        });
        
        $(".answer-three-3").click(function() {
          $( this ).css("background-color", "lightblue");
          $( ".answer-one-3, .answer-two-3" ).css("background-color", "white");
          c = 1;
        });
        });
    
    
        $(document).ready(function() {
    
          $(".answer-one-4").click(function() {
            $( this ).css("background-color", "lightblue");
            $(".answer-two-4, .answer-three-4").css("background-color", "white");
            d = 1;
          });
          
          $(".answer-two-4").click(function() {
            $( this ).css("background-color", "lightblue");
            $( ".answer-one-4, .answer-three-4" ).css("background-color", "white");
            d = 0;
          });
          
          $(".answer-three-4").click(function() {
            $( this ).css("background-color", "lightblue");
            $( ".answer-one-4, .answer-two-4" ).css("background-color", "white");
            d = 0;
          });
          });
    
    
    
          $(document).ready(function() {
    
            $(".answer-one-5").click(function() {
              $( this ).css("background-color", "lightblue");
              $(".answer-two-5, .answer-three-5").css("background-color", "white");
              e = 0;
            });
            
            $(".answer-two-5").click(function() {
              $( this ).css("background-color", "lightblue");
              $( ".answer-one-5, .answer-three-5" ).css("background-color", "white");
              e = 0;
            });
            
            $(".answer-three-5").click(function() {
              $( this ).css("background-color", "lightblue");
              $( ".answer-one-5, .answer-two-5" ).css("background-color", "white");
              e = 1;
            });
            });
    
    
    
            $(document).ready(function() {
    
              $(".answer-one-6").click(function() {
                $( this ).css("background-color", "lightblue");
                $(".answer-two-6, .answer-three-6").css("background-color", "white");
                f = 1;
              });
              
              $(".answer-two-6").click(function() {
                $( this ).css("background-color", "lightblue");
                $( ".answer-one-6, .answer-three-6" ).css("background-color", "white");
                f = 0;
              });
              
              $(".answer-three-6").click(function() {
                $( this ).css("background-color", "lightblue");
                $( ".answer-one-6, .answer-two-6" ).css("background-color", "white");
                f = 0;
              });
              });
    
    
    
              $(document).ready(function() {
    
                $(".answer-one-7").click(function() {
                  $( this ).css("background-color", "lightblue");
                  $(".answer-two-7, .answer-three-7").css("background-color", "white");
                  g = 0;
                });
                
                $(".answer-two-7").click(function() {
                  $( this ).css("background-color", "lightblue");
                  $( ".answer-one-7, .answer-three-7" ).css("background-color", "white");
                  g = 0;
                });
                
                $(".answer-three-7").click(function() {
                  $( this ).css("background-color", "lightblue");
                  $( ".answer-one-7, .answer-two-7" ).css("background-color", "white");
                  g = 1;
                });
                });
    
    
                $(document).ready(function() {
    
                  $(".answer-one-8").click(function() {
                    $( this ).css("background-color", "lightblue");
                    $(".answer-two-8, .answer-three-8").css("background-color", "white");
                    h = 0;
                  });
                  
                  $(".answer-two-8").click(function() {
                    $( this ).css("background-color", "lightblue");
                    $( ".answer-one-8, .answer-three-8" ).css("background-color", "white");
                    h = 1;
                  });
                  
                  $(".answer-three-8").click(function() {
                    $( this ).css("background-color", "lightblue");
                    $( ".answer-one-8, .answer-two-8" ).css("background-color", "white");
                    h = 0;
                  });
                  });
    
    
                  $(document).ready(function() {
    
                    $(".answer-one-9").click(function() {
                      $( this ).css("background-color", "lightblue");
                      $(".answer-two-9, .answer-three-9").css("background-color", "white");
                      i = 0;
                    });
                    
                    $(".answer-two-9").click(function() {
                      $( this ).css("background-color", "lightblue");
                      $( ".answer-one-9, .answer-three-9" ).css("background-color", "white");
                      i = 1;
                    });
                    
                    $(".answer-three-9").click(function() {
                      $( this ).css("background-color", "lightblue");
                      $( ".answer-one-9, .answer-two-9" ).css("background-color", "white");
                      i = 0;
                    });
                    });
    
    
    
                    $(document).ready(function() {  
                      $(".answer-one-10").click(function() {
                        $( this ).css("background-color", "lightblue");
                        $(".answer-two-10, .answer-three-10").css("background-color", "white");
                        j = 0;
                      });
                      
                      $(".answer-two-10").click(function() {
                        $( this ).css("background-color", "lightblue");
                        $( ".answer-one-10, .answer-three-10" ).css("background-color", "white");
                        j = 0;
                      });
                      
                      $(".answer-three-10").click(function() {
                        $( this ).css("background-color", "lightblue");
                        $( ".answer-one-10, .answer-two-10" ).css("background-color", "white");
                        j = 1;
                      });
                      });


    
    $(document).ready(function() {
      $(document).ready(function() {
        $("#start").click(function() { setTimeout(function() {
          setTimeout(function(){
            $(".countDown-timer-1").css("color", "red");
          }, 20100);
    
          setTimeout(function(){
            $("#firstQuestion h3, #firstQuestion h6, #firstQuestion button").css("display", "none");
            $("#firstQuestion h2, #firstQuestion h5, .refresh1").css("display", "block");
            $("#firstQuestion h2").html('თქვენ დააგროვეთ ' + a + ' ქულა')
          }, 31100);
    
            $(function() {
            var time = 30; 
            function redirect(){
              var id = setTimeout(redirect, 1000);
              $(".countDown-timer-1").html(time);
              if(time == 0){
                clearTimeout(id);               
              }
              time --; 
            }  
            redirect();
          });
        }, 4000);           
        });
        });


        $(".next1").click(function() {

          setTimeout(function(){
            $(".countDown-timer-2").css("color", "red");
          }, 20100);

          setTimeout(function(){
            $("#secondQuestion h3, #secondQuestion h6, #secondQuestion button").css("display", "none");
            $("#secondQuestion h2, #secondQuestion h5, .refresh2").css("display", "block");
            $("#secondQuestion h2").html('თქვენ დააგროვეთ ' +(a + b) + ' ქულა')
          }, 31500);
          
            $( "#firstQuestion" ).slideUp(1000);
            $( "#secondQuestion" ).slideDown(1000);
         
          

            $(function() {
                var time = 30; 
                function redirect(){
                  var id = setTimeout(redirect, 1000);
                  $(".countDown-timer-2").html(time);
                  if(time == 0){
                    clearTimeout(id); 
                  }
                  time --; 
                }
                redirect();
              });
        });
    });



    $(document).ready(function() {

      $(".next2").click (function() {
        setTimeout(function(){
          $(".countDown-timer-3").css("color", "red");
        }, 20100);

        setTimeout(function(){
          $("#thirdQuestion h3, #thirdQuestion h6, #thirdQuestion button").css("display", "none");
          $("#thirdQuestion h2, #thirdQuestion h5, .refresh3").css("display", "block");
          $("#thirdQuestion h2").html('თქვენ დააგროვეთ ' +(a + b + c) + ' ქულა')
        }, 31500);

          $( "#secondQuestion" ).slideUp(1000);
          $( "#thirdQuestion" ).slideDown(1000);

          $(function() {
              var time = 30; 
              function redirect(){
                var id = setTimeout(redirect, 1000);
                $(".countDown-timer-3").html(time);
                if(time == 0){
                  clearTimeout(id);
                }
                time --; 
              }           
              redirect();
            });
      });
  });  



  $(document).ready(function() {
    $(".next3").click(function() {
      setTimeout(function(){
        $(".countDown-timer-4").css("color", "red");
      }, 20100);

      setTimeout(function(){
        $("#Question4 h3, #Question4 h6, #Question4 button").css("display", "none");
        $("#Question4 h2, #Question4 h5, .refresh4").css("display", "block");
        $("#Question4 h2").html('თქვენ დააგროვეთ ' +(a + b + c + d) + ' ქულა')
      }, 31500);
        $( "#thirdQuestion" ).slideUp(1000);
        $( "#Question4" ).slideDown(1000);

        $(function() {
            var time = 30; 
            function redirect(){
              var id = setTimeout(redirect, 1000);
              $(".countDown-timer-4").html(time);
              if(time == 0){
                clearTimeout(id);               
              }
              time --; 
            }
            redirect();
          });
    });
});



$(document).ready(function() {
  $(".next4").click(function() {
    setTimeout(function(){
      $(".countDown-timer-5").css("color", "red");
    }, 20100);

    setTimeout(function(){
      $("#Question5 h3, #Question5 h6, #Question5 button").css("display", "none");
      $("#Question5 h2, #Question5 h5, .refresh5").css("display", "block");
      $("#Question5 h2").html('თქვენ დააგროვეთ ' +(a + b + c + d + e) + ' ქულა')
    }, 31500);
      $( "#Question4" ).slideUp(1000);
      $( "#Question5" ).slideDown(1000);

      $(function() {
          var time = 30; 
          function redirect(){
            var id = setTimeout(redirect, 1000);
            $(".countDown-timer-5").html(time);
            if(time == 0){
              clearTimeout(id);             
            }
            time --; 
          }
          redirect();
        });
  });
});




$(document).ready(function() {
  $(".next5").click(function() {
    setTimeout(function(){
      $(".countDown-timer-6").css("color", "red");
    }, 20100);

    setTimeout(function(){
      $("#Question6 h3, #Question6 h6, #Question6 button").css("display", "none");
      $("#Question6 h2, #Question6 h5, .refresh6").css("display", "block");
      $("#Question6 h2").html('თქვენ დააგროვეთ ' +(a + b + c + d + e + f) + ' ქულა')
    }, 31500);
      $( "#Question5" ).slideUp(1000);
      $( "#Question6" ).slideDown(1000);

      $(function() {
          var time = 30; 
          function redirect(){
            var id = setTimeout(redirect, 1000);
            $(".countDown-timer-6").html(time);
            if(time == 0){
              clearTimeout(id);             
            }
            time --; 
          }
          redirect();
        });
  });
});




$(document).ready(function() {
  $(".next6").click(function() {
    setTimeout(function(){
      $(".countDown-timer-7").css("color", "red");
    }, 20100);

    setTimeout(function(){
      $("#Question7 h3, #Question7 h6, #Question7 button").css("display", "none");
      $("#Question7 h2, #Question7 h5, .refresh7").css("display", "block");
      $("#Question7 h2").html('თქვენ დააგროვეთ ' +(a + b + c + d + e + f + g) + ' ქულა')
    }, 31500);
      $( "#Question6" ).slideUp(1000);
      $( "#Question7" ).slideDown(1000);

      $(function() {
          var time = 30; 
          function redirect(){
            var id = setTimeout(redirect, 1000);
            $(".countDown-timer-7").html(time);
            if(time == 0){
              clearTimeout(id);             
            }
            time --; 
          }
          redirect();
        });
  });
});




$(document).ready(function() {
  $(".next7").click(function() {
    setTimeout(function(){
      $(".countDown-timer-8").css("color", "red");
    }, 20100);

    setTimeout(function(){
      $("#Question8 h3, #Question8 h6, #Question8 button").css("display", "none");
      $("#Question8 h2, #Question8 h5, .refresh8").css("display", "block");
      $("#Question8 h2").html('თქვენ დააგროვეთ ' +(a + b + c + d + e + f + g + h) + ' ქულა')
    }, 31500);
      $( "#Question7" ).slideUp(1000);
      $( "#Question8" ).slideDown(1000);

      $(function() {
          var time = 30; 
          function redirect(){
            var id = setTimeout(redirect, 1000);
            $(".countDown-timer-8").html(time);
            if(time == 0){
              clearTimeout(id);             
            }
            time --;
          }
          redirect();
        });
  });
});



$(document).ready(function() {
  $(".next8").click(function() {
    setTimeout(function(){
      $(".countDown-timer-9").css("color", "red");
    }, 20100);

    setTimeout(function(){
      $("#Question9 h3, #Question9 h6, #Question9 button").css("display", "none");
      $("#Question9 h2, #Question9 h5, .refresh9").css("display", "block");
      $("#Question9 h2").html('თქვენ დააგროვეთ ' +(a + b + c + d + e + f + g + h + i) + ' ქულა')
    }, 31500);
      $( "#Question8" ).slideUp(1000);
      $( "#Question9" ).slideDown(1000);

      $(function() {
          var time = 30; 
          function redirect(){
            var id = setTimeout(redirect, 1000);
            $(".countDown-timer-9").html(time);
            if(time == 0){
              clearTimeout(id);             
            }
            time --;
          }
          redirect();
        });
  });
});



$(document).ready(function() {
  $(".next9").click(function() {
    setTimeout(function(){
      $(".countDown-timer-10").css("color", "red");
    }, 20100);

    setTimeout(function(){
      $("#Question10 h3, #Question10 h6, #Question10 button").css("display", "none");
      $("#Question10 h2, #Question10 h5, .refresh10").css("display", "block");
      $("#Question10 h2").html('თქვენ დააგროვეთ ' +(a + b + c + d + e + f + g + h + i + j) + ' ქულა')
    }, 31500);
      $( "#Question9" ).slideUp(1000);
      $( "#Question10" ).slideDown(1000);

      $(function() {
          var time = 30; 
          function redirect(){
            var id = setTimeout(redirect, 1000);
            $(".countDown-timer-10").html(time);
            if(time == 0){
              clearTimeout(id);             
            }
            time --; 
          }
          redirect();
        });
  });
});



$(document).ready(function() {
  $(".next10").click(function() {

    setTimeout(function(){
      $("#result #finished").html('ტ')}, 1500);
      setTimeout(function(){
        $("#result #finished").html('ტე')}, 1600);
        setTimeout(function(){
          $("#result #finished").html('ტეს')}, 1700);
          setTimeout(function(){
            $("#result #finished").html('ტესტ')}, 1800);
            setTimeout(function(){
              $("#result #finished").html('ტესტი')}, 1900);
              setTimeout(function(){
                $("#result #finished").html('ტესტი დ')}, 2000);
                setTimeout(function(){
                  $("#result #finished").html('ტესტი და')}, 2100);
                  setTimeout(function(){
                    $("#result #finished").html('ტესტი დას')}, 2200);
                    setTimeout(function(){
                      $("#result #finished").html('ტესტი დასრ')}, 2300);
                      setTimeout(function(){
                        $("#result #finished").html('ტესტი დასრუ')}, 2400);
                        setTimeout(function(){
                          $("#result #finished").html('ტესტი დასრულ')}, 2500);
                          setTimeout(function(){
                            $("#result #finished").html('ტესტი დასრულე')}, 2600);
                            setTimeout(function(){
                              $("#result #finished").html('ტესტი დასრულებ')}, 2700);
                              setTimeout(function(){
                                $("#result #finished").html('ტესტი დასრულებუ')}, 2800);
                                setTimeout(function(){
                                  $("#result #finished").html('ტესტი დასრულებულ')}, 2900);
                                  setTimeout(function(){
                                    $("#result #finished").html('ტესტი დასრულებული')}, 3000);
                                    setTimeout(function(){
                                      $("#result #finished").html('ტესტი დასრულებულია.')}, 3100);

                                      setTimeout(function(){
                                        $("#result #finishedOne").html('თ')}, 3800);  setTimeout(function(){
                                          $("#result #finishedOne").html('თქ')}, 3900);  
                                          setTimeout(function(){
                                            $("#result #finishedOne").html('თქვ')}, 4000); 
                                            setTimeout(function(){
                                              $("#result #finishedOne").html('თქვე')}, 4100); 
                                              setTimeout(function(){
                                                $("#result #finishedOne").html('თქვენ')}, 4200); 
                                                setTimeout(function(){
                                                  $("#result #finishedOne").html('თქვენი')}, 4300); 
                                                  setTimeout(function(){
                                                    $("#result #finishedOne").html('თქვენი შ')}, 4400);  
                                                    setTimeout(function(){
                                                      $("#result #finishedOne").html('თქვენი შედ')}, 4500);  
                                                      setTimeout(function(){
                                                        $("#result #finishedOne").html('თქვენი შედე')}, 4600);
                                                        setTimeout(function(){
                                                          $("#result #finishedOne").html('თქვენი შედეგ')}, 4700); 
                                                          setTimeout(function(){
                                                            $("#result #finishedOne").html('თქვენი შედეგი')}, 4800); 
                                                            setTimeout(function(){
                                                              $("#result #finishedOne").html('თქვენი შედეგია:')}, 4900);
                                                              
                                                              
                                                              setTimeout(function(){
                                                                $("#result h1").html(a + b + c + d + e + f + g + h + i + j)}, 5300);
                                                                setTimeout(function(){
                                                                  $("#result h1").html((a + b + c + d + e + f + g + h + i + j) + ' ქ')}, 5400);
                                                                  setTimeout(function(){
                                                                    $("#result h1").html((a + b + c + d + e + f + g + h + i + j) + ' ქუ')}, 5500);
                                                                    setTimeout(function(){
                                                                      $("#result h1").html((a + b + c + d + e + f + g + h + i + j) + ' ქულ')}, 5600);
                                                                      setTimeout(function(){
                                                                        $("#result h1").html((a + b + c + d + e + f + g + h + i + j) + ' ქულა!')}, 5700);

                                                                        setTimeout(function(){
                                                                          
                                                                          $(".refresh11").css("display", "block");
                                                                        }, 6200);
     
  

      $( "#Question10" ).slideUp(1000);
      $( "#result" ).slideDown(1000);

      $(".answer-one-10").click(function() {
        $( this ).css("background-color", "red");
      });

      $(function() {
          var time = 30; 
          function redirect(){
            var id = setTimeout(redirect, 1000);
            
            if(time == 0){
              clearTimeout(id);             
            }
            time --; 
          }
          redirect();
        });
  });
});


function refresh(){
  location.reload();
}

$(document).ready(function() {
  $('.refresh1, .refresh2, .refresh3, .refresh4, .refresh5, .refresh6, .refresh7, .refresh8, .refresh9, .refresh10, .refresh11').click(function(){
    history.go(0)
  })
});