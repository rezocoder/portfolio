const myTank = document.querySelector('.my-tank');
const gameSpace = document.querySelector('.game-space');
const gameOver = document.querySelector('.game-over');
const totalScore  = document.querySelector('.total-score');
const wonTotalScore  = document.querySelector('.won-total-score');
const playAgain = document.querySelector('.play-again');
const wonPlayAgain = document.querySelector('.won-play-again');
const loseReason = document.querySelector('.lose-reason');
const myTankExplosion = document.querySelector('.my-tank-explosion');
myTankPosition = 0;

const firstTank = document.getElementsByClassName('first-tank');
const secondTank = document.getElementsByClassName('second-tank tank');
const thirdTank = document.getElementsByClassName('third-tank tank');
const jet = document.getElementsByClassName('jet');

const secondJet = document.getElementsByClassName('secondJet');
const thirdJet = document.getElementsByClassName('thirdJet');
const leftJet = document.getElementsByClassName('leftJet');
const rightJet = document.getElementsByClassName('rightJet');
const putin = document.getElementsByClassName('putin');
const check = document.querySelector('.check');

const youWon = document.querySelector('.you-won');
const speed = 1;

const bullet = document.getElementsByClassName('bullet');
const bulletSpeed = 10;
const score = document.querySelector('.score');

function play() {
document.addEventListener('keydown', moveTank);
const bgMusic = document.getElementById("background-music");

//ჩემი ტანკის მართვა კლავიატურით
function moveTank(e) {
    if(`${e.code}` ==  'ArrowLeft') {
        if(myTank.style.left >  0 + 'px') {
            myTank.style.left = (myTankPosition -= 30) + 'px';
        }
    } 

    else if(`${e.code}` ==  'ArrowRight') {
        if(myTank.style.left != 660 + 'px') {
             myTank.style.left = (myTankPosition += 30) + 'px';
        }
    }
}

//რუსული ტანკის შექმნა
function createEnemyTank() {
  bgMusic.play();
    const firstTank = document.createElement('div');
    firstTank.innerHTML = "<div class='life no-life'></div> <div class='enemy-tank-bg'><img src='./images/russian flag.png' class='russian-flag'></div>";
    firstTank.classList.add('first-tank');
    firstTank.classList.add('tank');
    myNumber =  Math.random() * (684);
    firstTank.style.left = myNumber  + 'px';
    gameSpace.appendChild( firstTank );   
}

//ძლიერი  ტანკის შექმნა
function createStrongEnemyTank() {
  const secondTank = document.createElement('div');
  secondTank.innerHTML = "<div class='life'> <div class='life-bg'></div> </div> <div class='enemy-tank-bg'><img src='./images/russian flag.png' class='russian-flag'></div>";
  secondTank.classList.add('second-tank');
  secondTank.classList.add('tank');
  myNumber =  Math.random() * (684);
  secondTank.style.left = myNumber  + 'px';
  gameSpace.appendChild( secondTank ); 
}

//სწრაფი ძლიერი  ტანკის შექმნა
function createFastStrongEnemyTank() {
  const thirdTank = document.createElement('div');
  thirdTank.innerHTML = "<div class='life'> <div class='life-bg'></div> </div> <div class='enemy-tank-bg'><img src='./images/russian flag.png' class='russian-flag'></div>";
  thirdTank.classList.add('second-tank');
  thirdTank.classList.add('tank');
  myNumber =  Math.random() * (684);
  thirdTank.style.left = myNumber  + 'px';
  gameSpace.appendChild( thirdTank );
}

//ბალისტიკური რაკეტის შექმნა
function createEnemyJet() {
  const jet = document.createElement('div');
  jet .innerHTML = "<div class='life balistic'> <div class='life-bg'></div> <div class='hm'></div></div>";
  jet .classList.add('jet');
  jet .classList.add('tank');
  jet .classList.add('balistic');
  myNumber =  Math.random() * (684);
  jet.style.left = myNumber  + 'px';
  gameSpace.appendChild( jet  );
}

function createEnemySecondJet() {
  const secondJet = document.createElement('div');
  secondJet .innerHTML = "<div class='life balistic'> <div class='life-bg'></div> <div class='hm'></div></div>";
  secondJet .classList.add('secondJet');
  secondJet .classList.add('balistic');
  secondJet .classList.add('tank');
  myNumber =  Math.random() * (684);
  secondJet.style.left = myNumber  + 'px';
  gameSpace.appendChild( secondJet  );
}

function createEnemyThirdJet() {
  const thirdJet = document.createElement('div');
  thirdJet .innerHTML = "<div class='life balistic'> <div class='life-bg'></div><div class='hm'></div> </div>";
  thirdJet .classList.add('thirdJet');
  thirdJet.classList.add('balistic');
  thirdJet .classList.add('tank');
  myNumber =  Math.random() * (684);
  thirdJet.style.left = myNumber  + 'px';
  gameSpace.appendChild( thirdJet  );
}

function createEnemyleftJet() {
  const leftJet = document.createElement('div');
  leftJet .innerHTML = "<div class='life balistic'> <div class='life-bg'></div> <div class='hm'></div></div>";
  leftJet .classList.add('leftJet');
  leftJet.classList.add('balistic');
  leftJet .classList.add('tank');
  myNumber =  Math.random() * (684);
  leftJet.style.left = myNumber  + 'px';
  gameSpace.appendChild( leftJet  );
}


function createEnemyrightJet() {
  const rightJet = document.createElement('div');
  rightJet .innerHTML = "<div class='life balistic'> <div class='life-bg'></div> <div class='hm'></div></div>";
  rightJet .classList.add('rightJet');
  rightJet.classList.add('balistic');
  rightJet .classList.add('tank');
  myNumber =  Math.random() * (684);
  rightJet.style.left = myNumber  + 'px';
  gameSpace.appendChild( rightJet  );
}

//პუტინის შექმნა
function createEnemyPutin() {
  const putin = document.createElement('div');
  putin.innerHTML = "<div class='life putin-balistic'> <div class='life-bg putin-life'></div> <div class='putin-child-bg'> </div><div class='hm'></div></div>";
  putin.classList.add('putin');
  putin.classList.add('tank');
  putin.classList.add('putin-bg');
  myNumber =  Math.random() * (684);
  putin.style.left = myNumber  + 'px';
  gameSpace.appendChild(putin);
}

//რუსული ტანკის შექმნა ყოველ 1.5 წამში
const createEnemyTanks = setInterval(function() {
    createEnemyTank();  
}, 1500)


//რუსული ტანკების მოძრაობა
const moveEnemyTanks = setInterval(function() {
  for(var i = 0; i < firstTank.length; i++) {
      var firstTankLeftPos = firstTank[i].offsetTop;
      firstTank[i].style.top = (firstTankLeftPos + speed) + 'px';
  }
}, 20);

setTimeout(function() {
  clearInterval(createEnemyTanks);
}, 18000);


//ძლიერი ტანკის შექმნა ყოველ 2 წამში
setTimeout(function() {
  const createStrongEnemyTanks = setInterval(function() {
    createStrongEnemyTank();
    for(var i = 0; i < tank.length; i++) {
      if(tank[i].offsetTop >= document.body.clientHeight - 160) {
              clearInterval(createFastStrongEnemyTanks);
              clearInterval(createStrongEnemyTanks);
      }
    }
  }, 1400)

  setTimeout(function() {
    clearInterval(createStrongEnemyTanks);
  }, 12000);

  //ძლიერი ტანკების მოძრაობა
const moveStrongEnemyTanks = setInterval(function() {
  for(var i = 0; i < secondTank.length; i++) {
      var secondTankLeftPos = secondTank[i].offsetTop;
      secondTank[i].style.top = (secondTankLeftPos + speed) + 'px';
  }
}, 18);

function lose() {
  const tank = document.getElementsByClassName('tank');  
      setInterval(function() {
          for(var i = 0; i < tank.length; i++) {
          if(tank[i].offsetTop >= document.body.clientHeight - 160) {
                  clearInterval(moveStrongEnemyTanks);
          }
      }
  }, 100)
}

lose();  
}, 18000)


//სწრაფი ძლიერი ტანკის შექმნა ყოველ 2 წამში
setTimeout(function() {
  const createFastStrongEnemyTanks = setInterval(function() {
    createStrongEnemyTank();
    for(var i = 0; i < tank.length; i++) {
      if(tank[i].offsetTop >= document.body.clientHeight - 160) {
              clearInterval(moveFastStrongEnemyTanks);
              clearInterval(createFastStrongEnemyTanks);
      }
  }
}, 1400)

  setTimeout(function() {
    clearInterval(createFastStrongEnemyTanks);
  }, 20000);

  //სწრაფი ძლიერი ტანკების მოძრაობა
const moveFastStrongEnemyTanks = setInterval(function() {
  for(var i = 0; i < thirdTank.length; i++) {
      var thirdTankLeftPos = thirdTank[i].offsetTop;
      thirdTank[i].style.top = (thirdTankLeftPos + speed) + 'px';
  }
}, 18);

function lose() {
  const tank = document.getElementsByClassName('tank');  
      setInterval(function() {
          for(var i = 0; i < tank.length; i++) {
          if(tank[i].offsetTop >= document.body.clientHeight - 160) {
                  clearInterval(moveFastStrongEnemyTanks);
                  clearInterval(createFastStrongEnemyTanks);
          }
      }
  }, 100)
}
   lose();
}, 30000)


//ბალისტიკური რაკეტების გამოძახება
function callJets() {
  let jetsInterval = setInterval(function() {
  if(score.innerHTML == 'score 44') {
    function balisticComes() {
      var balisticSound = document.getElementById("balistic-sound");
      balisticSound.play();
  }
  
  balisticComes();
  setTimeout(function() {
    createEnemyJet();
    createEnemySecondJet();
    createEnemyThirdJet();
},10);

  clearInterval(jetsInterval);
}
    
  }, 10)
}
callJets();

//ბალისტიკური რაკეტების გამოძახება
function callleftJet() {
  let jetsInterval = setInterval(function() {
    if(score.innerHTML == 'score 8') {
    setTimeout(function() { 
      createEnemyleftJet();
      createEnemyrightJet();
      },10);
      clearInterval(jetsInterval);
    }   
  }, 10)
}
callleftJet();

//ბალისტიკური რაკეტების მოძრაობა
const moveJetToRight = setInterval(function() {
  var plusOrMinus = Math.random() * (300 - (-300)) - 300;
    for(var i = 0; i < jet.length; i++) {
      var jetLeftPos = jet[i].offsetLeft;
         setInterval(function() {
          for(var i = 0; i < jet.length; i++) {
            var jetLeftPos = jet[i].offsetLeft;
            if(jetLeftPos > 674) {
              jet[i].style.left = (jetLeftPos - 100 ) + 'px';
             }
             else if(jetLeftPos < 0) {
              jet[i].style.left = (jetLeftPos + 100 ) + 'px';
             }
          }
         }, 5)       
          jet[i].style.left = (jetLeftPos + plusOrMinus ) + 'px';   
    }
  }, 3000);


  const moveSecondJetToRight = setInterval(function() {
    var plusOrMinus = Math.random() * (400 - (-400)) - 400;
      for(var i = 0; i < secondJet.length; i++) {
        var  secondJetLeftPos =  secondJet[i].offsetLeft;       
           setInterval(function() {
            for(var i = 0; i <  secondJet.length; i++) {
              var  secondJetLeftPos =  secondJet[i].offsetLeft;
              if( secondJetLeftPos > 674) {
                secondJet[i].style.left = ( secondJetLeftPos - 150 ) + 'px';               
               } 
               else if(secondJetLeftPos < 0) {
                secondJet[i].style.left = ( secondJetLeftPos + 150 ) + 'px';               
               }
            }
           }, 5)
          secondJet[i].style.left = ( secondJetLeftPos + plusOrMinus ) + 'px';        
      }
    }, 3500);


    const moveThirdJetToRight = setInterval(function() {
      var plusOrMinus = Math.random() * (200 - (-200)) - 200;
        for(var i = 0; i < thirdJet.length; i++) {
          var  thirdJetLeftPos =  thirdJet[i].offsetLeft;
             setInterval(function() {
              for(var i = 0; i <  thirdJet.length; i++) {
                var  thirdJetLeftPos =  thirdJet[i].offsetLeft;
                if( thirdJetLeftPos > 674) {
                  thirdJet[i].style.left = ( thirdJetLeftPos - 100 ) + 'px';                 
                 }
    
                 else if(thirdJetLeftPos < 0) {
                  thirdJet[i].style.left = ( thirdJetLeftPos + 100 ) + 'px';                 
                 }
               }
             }, 5)
          thirdJet[i].style.left = ( thirdJetLeftPos + plusOrMinus ) + 'px';        
        }
      }, 2500);


      const moveleftJetToRight = setInterval(function() {
        var plusOrMinus = Math.random() * (500 - (-500)) - 500;
          for(var i = 0; i < leftJet.length; i++) {
            var  leftJetLeftPos =  leftJet[i].offsetLeft;
               setInterval(function() {
                for(var i = 0; i < leftJet.length; i++) {
                  var  leftJetLeftPos =  leftJet[i].offsetLeft;
                  if( leftJetLeftPos > 674) {
                    leftJet[i].style.left = ( leftJetLeftPos - 100 ) + 'px';                   
                   }
      
                   else if(leftJetLeftPos < 0) {
                    leftJet[i].style.left = ( leftJetLeftPos + 100 ) + 'px';                 
                   }
                }
              }, 5)
            leftJet[i].style.left = ( leftJetLeftPos + plusOrMinus ) + 'px';        
          }
        }, 1400);


        const moverightJetToRight = setInterval(function() {
          var plusOrMinus = Math.random() * (500 - (-500)) - 500;
            for(var i = 0; i < rightJet.length; i++) {
              var  rightJetLeftPos =  rightJet[i].offsetLeft;
                 setInterval(function() {
                  for(var i = 0; i < rightJet.length; i++) {
                    var  rightJetLeftPos =  rightJet[i].offsetLeft;
                    if( rightJetLeftPos > 674) {
                      rightJet[i].style.left = ( rightJetLeftPos - 100 ) + 'px';                     
                     }
        
                     else if(rightJetLeftPos < 0) {
                      rightJet[i].style.left = ( rightJetLeftPos + 100 ) + 'px';                     
                     }
                  }
                }, 5)
              rightJet[i].style.left = ( rightJetLeftPos + plusOrMinus ) + 'px';        
            }
          }, 2500);


      //პუტინის მოძრაობა
      const movePutinToRight = setInterval(function() {
        var plusOrMinus = Math.random() * (400 - (-400)) - 400;
          for(var i = 0; i < putin.length; i++) {
            var  putinLeftPos =  putin[i].offsetLeft;
               setInterval(function() {
                for(var i = 0; i <  putin.length; i++) {
                  var  putinLeftPos =  putin[i].offsetLeft;
                  if( putinLeftPos > 674) {
                    putin[i].style.left = ( putinLeftPos - 100 ) + 'px';                  
                   }
      
                   else if(putinLeftPos < 0) {
                    putin[i].style.left = ( putinLeftPos + 100 ) + 'px';                   
                   }
                }
              }, 5)
            putin[i].style.left = ( putinLeftPos + plusOrMinus ) + 'px';        
          }
        }, 1500);
 

//წაგება(ზემოთა ფუნქციების გაუქმება)
function lose() {
    const tank = document.getElementsByClassName('tank');  
        var check = setInterval(function() {
            for(var i = 0; i < tank.length; i++) {
            if(tank[i].offsetTop >= document.body.clientHeight - 160) {
               
                    loseReason.innerText = 'The Enemy Is On Your Territory!';
                    gameOver.classList.add('full-height');
                    clearInterval(check);
                    if(score.innerText.match(/\d+/) == null) {
                      totalScore.innerText = 0
                      } else {
                      totalScore.innerText = score.innerText.match(/\d+/);
                    }                   
                    clearInterval(moveEnemyTanks);
                    clearInterval(moveStrongEnemyTanks);
                    clearInterval(createEnemyTanks);
                    clearInterval(createStrongEnemyTanks);
            }
        }
    }, 100)
}
lose();

currentScore = 0;
window.addEventListener("keydown", (e) => {      
    if (e.key == "ArrowUp" || e.keyCode == 32) {
      var bullet = document.createElement("div");
      bullet.classList.add("bullet");
      myTank.appendChild(bullet);
  
      var movebullet = setInterval(() => {
      var rocks = document.getElementsByClassName("tank");
  
        for (var i = 0; i < rocks.length; i++) {
          var rock = rocks[i];
          if (rock != undefined) {
            var rockbound = rock.getBoundingClientRect();
            var bulletbound = bullet.getBoundingClientRect();
  
            if (
              bulletbound.left >= (rockbound.left -30) &&
              bulletbound.right <= (rockbound.right + 30) &&
              bulletbound.top <= rockbound.top &&
              bulletbound.bottom >= rockbound.bottom
            ) { function playSound() {
              var sound = document.getElementById("hunt");
              sound.play();
          }
          
          playSound();
              bullet.parentElement.removeChild(bullet);
              if(rock.firstChild.className == 'life no-life') {
                rock.parentElement.appendChild(rock);
                rock.classList.add('enemy-tank-die');
                function playSound() {
                  var sound = document.getElementById("hunt");
                  sound.play();
              }
              
              playSound();
                setTimeout(function() {
                  
                  rock.parentElement.removeChild(rock); 
                  ++currentScore;
                  score.innerText = 'score ' + currentScore;
                }, 150)                              
              }
              
              else if(rock.firstChild.className == 'life') {
                  var child = rock.firstChild;
                  let ht = getComputedStyle(child.firstElementChild).getPropertyValue("background-color");
                  console.log(ht)
                if(ht == 'rgb(255, 0, 0)') {
                  rock.parentElement.appendChild(rock);
                  rock.classList.add('enemy-tank-die');
                  function playSound() {
                  var sound = document.getElementById("hunt");
                  sound.play();
              }
              
              playSound();
                  setTimeout(function() {                 
                    rock.parentElement.removeChild(rock); 
                    ++currentScore;
                    score.innerText = 'score ' + currentScore;
                  }, 150)                  
                }
                  child.firstElementChild.style.backgroundColor = 'red';
                  child.firstElementChild.style.width = 50 + '%';
                }

                else if(rock.firstChild.className == 'life putin-balistic') {
                  var child = rock.firstChild;
                  let bLife = getComputedStyle(child.firstElementChild).getPropertyValue("background-color");
                  
                if(bLife == 'rgb(255,0,0)') {                 
                  rock.parentElement.removeChild(rock);
                  ++currentScore;
                  score.innerText = 'score ' + currentScore;
                }

                else if(bLife == 'rgb(25, 116, 6)') {
                  child.firstElementChild.style.width = 84 + '%';
                  child.firstElementChild.style.backgroundColor = 'rgb(145, 175, 10)';
                }

                else if(bLife == 'rgb(145, 175, 10)') {
                  child.firstElementChild.style.width = 68 + '%';
                  child.firstElementChild.style.backgroundColor = 'rgb(129, 39, 31)';
                }

                else if(bLife == 'rgb(129, 39, 31)') {
                  child.firstElementChild.style.width = 52 + '%';
                  child.firstElementChild.style.backgroundColor = 'rgb(189, 49, 31)';
                }

                else if(bLife == 'rgb(189, 49, 31)') {
                  child.firstElementChild.style.width = 36 + '%';
                  child.firstElementChild.style.backgroundColor = 'rgb(219, 18, 18)';
                }

                else if(bLife == 'rgb(219, 18, 18)') {
                  child.firstElementChild.style.width = 20 + '%';
                  child.firstElementChild.style.backgroundColor = 'rgb(255,0,0)';
                }

                //პუტინის მოკვლა
                else if(bLife == 'rgb(255, 0, 0)') {
                  const hm = document.querySelector('.hm');
                  hm.classList.add('putin-explossion');
                  wonTotalScore.innerText = score.innerText.match(/\d+/);
                  check.innerText = 1;
                  function playSound() {
                  var sound = document.getElementById("hunt");
                  sound.play();
                }
                
                playSound();
                rock.parentElement.appendChild(rock);
                  setTimeout(function() {
                    rock.parentElement.removeChild(rock);
                    child.firstElementChild.style.display = 'none';
                  }, 500)
                  
                  currentScore+=5;
                  score.innerText = 'score ' + currentScore;
                  function playSuka() {
                  var sukaBlyat = document.getElementById("suka-blyat");
                  sukaBlyat.play();
                }
                
                playSuka();
                setTimeout(function() {
                youWon.classList.add('full-height');
                  }, 1000)
                }
              }

              else if(rock.firstChild.className == 'life balistic') {
                var child = rock.firstChild;
                let bLife = getComputedStyle(child.firstElementChild).getPropertyValue("background-color");
                
              if(bLife == 'rgb(255,0,0)') {
               
              }

              else if(bLife == 'rgb(25, 116, 6)') {
                child.firstElementChild.style.width = 84 + '%';
                child.firstElementChild.style.backgroundColor = 'rgb(145, 175, 10)';
              }

              else if(bLife == 'rgb(145, 175, 10)') {
                child.firstElementChild.style.width = 68 + '%';
                child.firstElementChild.style.backgroundColor = 'rgb(129, 39, 31)';
              }

              else if(bLife == 'rgb(129, 39, 31)') {
                child.firstElementChild.style.width = 52 + '%';
                child.firstElementChild.style.backgroundColor = 'rgb(189, 49, 31)';
              }

              else if(bLife == 'rgb(189, 49, 31)') {
                child.firstElementChild.style.width = 36 + '%';
                child.firstElementChild.style.backgroundColor = 'rgb(219, 18, 18)';
              }

              else if(bLife == 'rgb(219, 18, 18)') {
                child.firstElementChild.style.width = 20 + '%';
                child.firstElementChild.style.backgroundColor = 'rgb(255,0,0)';
              }

              else if(bLife == 'rgb(255, 0, 0)') {
                
              const hm = document.querySelector('.hm');
                  hm.classList.add('balistic-explosion-effect');
                  function playDieSound() {
                    var dieb = document.getElementById("dieb");
                    dieb.play();
                }  
                    playDieSound();
                    currentScore+=5;
                    score.innerText = 'score ' + currentScore;
                    rock.parentElement.appendChild(rock);
                  setTimeout(function() {
                    rock.parentElement.removeChild(rock);
                  }, 150)  
               }
              }
            }         
          }
        }

        var bulletbottom = parseInt(
          window.getComputedStyle(bullet).getPropertyValue("bottom")
        );
  
        //აჩერებს და აქრობს ტყვიას, რომ არ გავიდეს სათამაშო სივრცის მიღმა
        if (bulletbottom >= 1200) {
          clearInterval(movebullet);
          bullet.style.display = 'none';
        }

        bullet.style.left = 25 + "px"; 
        bullet.style.bottom = bulletbottom + 23 + "px";
      });
    }
  });


  function callMovingJets() {
  let movingJetsInterval = setInterval(function() {
  if(score.innerHTML == 'score 44') {

setTimeout(function() {
  const alsoJet = document.querySelector('.jet');
  setInterval(function() {
    var jetBullet = document.createElement("div");
    jetBullet.classList.add("jetBullet");
    alsoJet.appendChild(jetBullet);

    var movejetBullet = setInterval(() => {     
          var myTankbound = myTank.getBoundingClientRect();
          var jetBulletbound = jetBullet.getBoundingClientRect();
          if (
            jetBulletbound.left <= (myTankbound.right) &&
            jetBulletbound.right >= (myTankbound.left) &&
            jetBulletbound.top >= (myTankbound.top - 50)
          ) { 
              jetBullet.style.display = 'none';
               var myLife = myTank.firstElementChild;
               let currentLife = getComputedStyle(myLife.firstElementChild).getPropertyValue("background-color");
               console.log(currentLife)

              if(currentLife == 'rgb(25, 116, 6)') {
                myLife.firstElementChild.style.backgroundColor = 'rgb(145, 175, 10)';
                myLife.firstElementChild.style.width = 80 + '%';
              }

              else if(currentLife == 'rgb(145, 175, 10)') {
                myLife.firstElementChild.style.backgroundColor = 'rgb(175, 74, 27)';
                myLife.firstElementChild.style.width = 60 + '%';
              }

              else if(currentLife == 'rgb(175, 74, 27)') {
                myLife.firstElementChild.style.backgroundColor = 'rgb(189, 49, 31)';
                myLife.firstElementChild.style.width = 40 + '%';
              }

              else if(currentLife == 'rgb(189, 49, 31)') {
                myLife.firstElementChild.style.backgroundColor = 'rgb(219, 18, 18)';
                myLife.firstElementChild.style.width = 20 + '%';
              } 

              else if(currentLife == 'rgb(219, 18, 18)') {
                myTankExplosion.classList.add('explosion-effect');
                function playDieSound() {
                var die = document.getElementById("die");
                die.play();
            }

            playDieSound();
              setTimeout(function() {
                myTank.style.display = 'none';
                putin[0].style.opacity = 0;
                  totalScore.innerText = score.innerText.match(/\d+/);
              }, 500)
              setTimeout(function() {
                loseReason.innerText = 'The Enemy Killed You!';
                gameOver.classList.add('full-height');
              }, 1500)
            } 
          }         
        
      
     
        var jetBulletbottom = parseInt(
        window.getComputedStyle(jetBullet).getPropertyValue("bottom")
      );

      //აჩერებს და აქრობს ტყვიას, რომ არ გავიდეს სათამაშო სივრცის მიღმა
      if (jetBulletbottom >=  document.body.clientHeight - 140) {
        clearInterval(movejetBullet);
        jetBullet.style.display = 'none';
      }

      jetBullet.style.left = 25 + "px"; 
      jetBullet.style.bottom = jetBulletbottom + 5 + "px";
    }); 
}, 1400)

const alsoSecondJet = document.querySelector('.secondJet');
  setInterval(function() {
    var secondJetBullet = document.createElement("div");
    secondJetBullet.classList.add("secondJetBullet");
    alsoSecondJet.appendChild(secondJetBullet);
    var moveSecondJetBullet = setInterval(() => {
      var myTankbound = myTank.getBoundingClientRect();
      var secondJetBulletbound = secondJetBullet.getBoundingClientRect();
      if (
        secondJetBulletbound.left <= (myTankbound.right) &&
        secondJetBulletbound.right >= (myTankbound.left) &&
        secondJetBulletbound.top >= (myTankbound.top - 50)
      ) { 
          secondJetBullet.style.display = 'none';
           var myLife = myTank.firstElementChild;
           let currentLife = getComputedStyle(myLife.firstElementChild).getPropertyValue("background-color");
           console.log(currentLife)

          if(currentLife == 'rgb(25, 116, 6)') {
            myLife.firstElementChild.style.backgroundColor = 'rgb(145, 175, 10)';
            myLife.firstElementChild.style.width = 80 + '%';
          }

          else if(currentLife == 'rgb(145, 175, 10)') {
            myLife.firstElementChild.style.backgroundColor = 'rgb(175, 74, 27)';
            myLife.firstElementChild.style.width = 60 + '%';
          }

          else if(currentLife == 'rgb(175, 74, 27)') {
            myLife.firstElementChild.style.backgroundColor = 'rgb(189, 49, 31)';
            myLife.firstElementChild.style.width = 40 + '%';
          }

          else if(currentLife == 'rgb(189, 49, 31)') {
            myLife.firstElementChild.style.backgroundColor = 'rgb(219, 18, 18)';
            myLife.firstElementChild.style.width = 20 + '%';
          } 

          else if(currentLife == 'rgb(219, 18, 18)') {
            myTankExplosion.classList.add('explosion-effect');
              function playDieSound() {
                var die = document.getElementById("die");
                die.play();
            }

            playDieSound();
              setTimeout(function() {
                myTank.style.display = 'none';
                putin[0].style.opacity = 0;
                  totalScore.innerText = score.innerText.match(/\d+/);
              }, 500)
              setTimeout(function() {
                loseReason.innerText = 'The Enemy Killed You!';
                gameOver.classList.add('full-height');
              }, 1500)
          } 
      }  
    
      var secondJetBulletbottom = parseInt(
        window.getComputedStyle(secondJetBullet).getPropertyValue("bottom")
      );

      //აჩერებს და აქრობს ტყვიას, რომ არ გავიდეს სათამაშო სივრცის მიღმა
      if (secondJetBulletbottom >= document.body.clientHeight - 140) {
        clearInterval(moveSecondJetBullet);
        secondJetBullet.style.display = 'none';
      }

      secondJetBullet.style.left = 25 + "px"; 
      secondJetBullet.style.bottom = secondJetBulletbottom + 5 + "px";
    });
  }, 2100)

  const alsoThirdJet = document.querySelector('.thirdJet');
    setInterval(function() {
      var thirdJetBullet = document.createElement("div");
      thirdJetBullet.classList.add("thirdJetBullet");
      alsoThirdJet.appendChild(thirdJetBullet);

      var movethirdJetBullet = setInterval(() => {
        var myTankbound = myTank.getBoundingClientRect();
        var thirdJetBulletbound = thirdJetBullet.getBoundingClientRect();
        if (
          thirdJetBulletbound.left <= (myTankbound.right) &&
          thirdJetBulletbound.right >= (myTankbound.left) &&
          thirdJetBulletbound.top >= (myTankbound.top - 50)
        ) { 
            thirdJetBullet.style.display = 'none';
             var myLife = myTank.firstElementChild;
             let currentLife = getComputedStyle(myLife.firstElementChild).getPropertyValue("background-color");
             console.log(currentLife)
  
            if(currentLife == 'rgb(25, 116, 6)') {
              myLife.firstElementChild.style.backgroundColor = 'rgb(145, 175, 10)';
              myLife.firstElementChild.style.width = 80 + '%';
            }
  
            else if(currentLife == 'rgb(145, 175, 10)') {
              myLife.firstElementChild.style.backgroundColor = 'rgb(175, 74, 27)';
              myLife.firstElementChild.style.width = 60 + '%';
            }
  
            else if(currentLife == 'rgb(175, 74, 27)') {
              myLife.firstElementChild.style.backgroundColor = 'rgb(189, 49, 31)';
              myLife.firstElementChild.style.width = 40 + '%';
            }
  
            else if(currentLife == 'rgb(189, 49, 31)') {
              myLife.firstElementChild.style.backgroundColor = 'rgb(219, 18, 18)';
              myLife.firstElementChild.style.width = 20 + '%';
            } 
  
            else if(currentLife == 'rgb(219, 18, 18)') {
              myTankExplosion.classList.add('explosion-effect');
              function playDieSound() {
                var die = document.getElementById("die");
                die.play();
            }

            playDieSound();
              setTimeout(function() {
                myTank.style.display = 'none';
                putin[0].style.opacity = 0;
                  totalScore.innerText = score.innerText.match(/\d+/);
              }, 500)
              setTimeout(function() {
                loseReason.innerText = 'The Enemy Killed You!';
                gameOver.classList.add('full-height');
              }, 1500)
            } 
        }      
      
        var thirdJetBulletbottom = parseInt(
          window.getComputedStyle(thirdJetBullet).getPropertyValue("bottom")
        );

        if (thirdJetBulletbottom >= document.body.clientHeight - 140) {
          clearInterval(movethirdJetBullet);
          thirdJetBullet.style.display = 'none';
        }

        thirdJetBullet.style.left = 25 + "px"; 
        thirdJetBullet.style.bottom = thirdJetBulletbottom + 5 + "px";
          });
        }, 2700)
      }, 1000);
        clearInterval(movingJetsInterval);
    }   
  }, 10)
}

callMovingJets();
function callMovingleftJet() {
  let movingJetsInterval = setInterval(function() {
  if(score.innerHTML == 'score 8') {
    function balisticComes() {
      var balisticSound = document.getElementById("balistic-sound");
      balisticSound.play();
  } 
  balisticComes();

setTimeout(function() {
  
  const alsoleftJet = document.querySelector('.leftJet'); 
  setInterval(function() {
    var leftJetBullet = document.createElement("div");
    leftJetBullet.classList.add("leftJetBullet");
    alsoleftJet.appendChild(leftJetBullet);
    var moveleftJetBullet = setInterval(() => {
      var myTankbound = myTank.getBoundingClientRect();
      var leftJetBulletbound = leftJetBullet.getBoundingClientRect();
      if (
        leftJetBulletbound.left <= (myTankbound.right) &&
        leftJetBulletbound.right >= (myTankbound.left) &&
        leftJetBulletbound.top >= (myTankbound.top - 50)
      ) { 
        leftJetBullet.style.display = 'none';
           var myLife = myTank.firstElementChild;
           let currentLife = getComputedStyle(myLife.firstElementChild).getPropertyValue("background-color");
           console.log(currentLife)

          if(currentLife == 'rgb(25, 116, 6)') {
            myLife.firstElementChild.style.backgroundColor = 'rgb(145, 175, 10)';
            myLife.firstElementChild.style.width = 80 + '%';
          }

          else if(currentLife == 'rgb(145, 175, 10)') {
            myLife.firstElementChild.style.backgroundColor = 'rgb(189, 49, 31)';
            myLife.firstElementChild.style.width = 50 + '%';
          }

          else if(currentLife == 'rgb(189, 49, 31)') {
            myLife.firstElementChild.style.backgroundColor = 'rgb(219, 18, 18)';
            myLife.firstElementChild.style.width = 20 + '%';
          } 

          else if(currentLife == 'rgb(219, 18, 18)') {
            myTankExplosion.classList.add('explosion-effect');
              function playDieSound() {
                var die = document.getElementById("die");
                die.play();
            }

            playDieSound();
              setTimeout(function() {
                myTank.style.display = 'none';
                putin[0].style.opacity = 0;
                  totalScore.innerText = score.innerText.match(/\d+/);
              }, 500)
              setTimeout(function() {
                loseReason.innerText = 'The Enemy Killed You!';
                gameOver.classList.add('full-height');
              }, 1500)
          } 
      }      
    
      var leftJetBulletbottom = parseInt(
        window.getComputedStyle(leftJetBullet).getPropertyValue("bottom")
      );

      //აჩერებს და აქრობს ტყვიას, რომ არ გავიდეს სათამაშო სივრცის მიღმა
      if (leftJetBulletbottom >= document.body.clientHeight - 140) {
        clearInterval(moveleftJetBullet);
        leftJetBullet.style.display = 'none';
      }

      leftJetBullet.style.left = 25 + "px"; 
      leftJetBullet.style.bottom = leftJetBulletbottom + 5 + "px";
    });
  }, 2200)


  const alsorightJet = document.querySelector('.rightJet');
  setTimeout(function() {
    setInterval(function() {
      rightJetBullet.style.bottom = rightJetBulletbottom + 5 + "px";
    })
  }, 800);

  setInterval(function() {
    var rightJetBullet = document.createElement("div");
    rightJetBullet.classList.add("rightJetBullet");
    alsorightJet.appendChild(rightJetBullet);
    var moverightJetBullet = setInterval(() => {
      var myTankbound = myTank.getBoundingClientRect();
      var rightJetBulletbound = rightJetBullet.getBoundingClientRect();
      if (
        rightJetBulletbound.left <= (myTankbound.right) &&
        rightJetBulletbound.right >= (myTankbound.left) &&
        rightJetBulletbound.top >= (myTankbound.top - 50)
      ) { 
        rightJetBullet.style.display = 'none';
           var myLife = myTank.firstElementChild;
           let currentLife = getComputedStyle(myLife.firstElementChild).getPropertyValue("background-color");
           console.log(currentLife)

           if(currentLife == 'rgb(25, 116, 6)') {
            myLife.firstElementChild.style.backgroundColor = 'rgb(145, 175, 10)';
            myLife.firstElementChild.style.width = 80 + '%';
          }

          else if(currentLife == 'rgb(145, 175, 10)') {
            myLife.firstElementChild.style.backgroundColor = 'rgb(189, 49, 31)';
            myLife.firstElementChild.style.width = 50 + '%';
          }

          else if(currentLife == 'rgb(189, 49, 31)') {
            myLife.firstElementChild.style.backgroundColor = 'rgb(219, 18, 18)';
            myLife.firstElementChild.style.width = 20 + '%';
          } 

          else if(currentLife == 'rgb(219, 18, 18)') {
            myTankExplosion.classList.add('explosion-effect');
              function playDieSound() {
                var die = document.getElementById("die");
                die.play();
            }

            playDieSound();
              setTimeout(function() {
                myTank.style.display = 'none';
                putin[0].style.opacity = 0;
                  totalScore.innerText = score.innerText.match(/\d+/);
              }, 500)
              setTimeout(function() {
                loseReason.innerText = 'The Enemy Killed You!';
                gameOver.classList.add('full-height');
              }, 1500)
          } 
      }     
    
      var rightJetBulletbottom = parseInt(
        window.getComputedStyle(rightJetBullet).getPropertyValue("bottom")
      );
      //აჩერებს და აქრობს ტყვიას, რომ არ გავიდეს სათამაშო სივრცის მიღმა
      if (rightJetBulletbottom >= document.body.clientHeight - 140) {
        clearInterval(moverightJetBullet);
        rightJetBullet.style.display = 'none';
      }

      rightJetBullet.style.left = 25 + "px"; 
      rightJetBullet.style.bottom = rightJetBulletbottom + 5 + "px";
          });
        }, 3500)
      }, 1000);
      clearInterval(movingJetsInterval);
    }   
  }, 10)
}
callMovingleftJet();

function callPutin() {
  var timer = setInterval(function() {
  if(score.innerHTML == 'score 59') {
    setTimeout(function() {
      createEnemyPutin();
      function putinIsHere() {
        var putinSound = document.getElementById("putin-sound");
        putinSound.play();
    }    
    putinIsHere();
     
      const createStrongEnemyTanks = setInterval(function() {
        if(score.innerText >= 'score 59' && check.innerText != 1) {
          createStrongEnemyTank();
        for(var i = 0; i < tank.length; i++) {
          if(tank[i].offsetTop >= document.body.clientHeight - 160) {   
                  clearInterval(createFastStrongEnemyTanks);
                  clearInterval(createStrongEnemyTanks);
          }
      }
    }
  }, 2500)

    const moveStrongEnemyTanks = setInterval(function() {
      for(var i = 0; i < secondTank.length; i++) {
          var secondTankLeftPos = secondTank[i].offsetTop;
          secondTank[i].style.top = (secondTankLeftPos + speed) + 'px';
      }
    }, 22);
      
  }, 2000)
  clearInterval(timer);
}
    
  }, 10)
}    
    callPutin();

    var secondTimer = setInterval(function() {
  if(document.querySelector('.putin')) {
    const putinHunts = document.querySelector('.putin');
    setInterval(function() {
      var putinBullet = document.createElement("div");
      putinBullet.classList.add("putinBullet");
      putinHunts.appendChild(putinBullet);
  
      var moveputinBullet = setInterval(() => {
        var myTankbound = myTank.getBoundingClientRect();
        var putinBulletbound = putinBullet.getBoundingClientRect();
        if (
          putinBulletbound.left <= (myTankbound.right) &&
          putinBulletbound.right >= (myTankbound.left) &&
          putinBulletbound.top >= (myTankbound.top - 50)
        ) { 
            putinBullet.style.display = 'none';
             var myLife = myTank.firstElementChild;
             let currentLife = getComputedStyle(myLife.firstElementChild).getPropertyValue("background-color");
             console.log(currentLife)
  
            if(currentLife == 'rgb(25, 116, 6)') {
              myLife.firstElementChild.style.backgroundColor = 'rgb(145, 175, 10)';
              myLife.firstElementChild.style.width = 80 + '%';
            }
  
            else if(currentLife == 'rgb(145, 175, 10)') {
              myLife.firstElementChild.style.backgroundColor = 'rgb(175, 74, 27)';
              myLife.firstElementChild.style.width = 60 + '%';
            }
  
            else if(currentLife == 'rgb(175, 74, 27)') {
              myLife.firstElementChild.style.backgroundColor = 'rgb(189, 49, 31)';
              myLife.firstElementChild.style.width = 40 + '%';
            }
  
            else if(currentLife == 'rgb(189, 49, 31)') {
              myLife.firstElementChild.style.backgroundColor = 'rgb(219, 18, 18)';
              myLife.firstElementChild.style.width = 20 + '%';
            } 
  
            else if(currentLife == 'rgb(219, 18, 18)') {
              myTankExplosion.classList.add('explosion-effect');
              function playDieSound() {
                var die = document.getElementById("die");
                die.play();
            }

            playDieSound();
              setTimeout(function() {
                myTank.style.display = 'none';
                putin[0].style.opacity = 0;
                  totalScore.innerText = score.innerText.match(/\d+/);
              }, 500)
              setTimeout(function() {
                loseReason.innerText = 'The Enemy Killed You!';
                gameOver.classList.add('full-height');
              }, 1500)              
            } 
        }      
      
        var putinBulletbottom = parseInt(
          window.getComputedStyle(putinBullet).getPropertyValue("bottom")
        );
  
        //აჩერებს და აქრობს ტყვიას, რომ არ გავიდეს სათამაშო სივრცის მიღმა
        if (putinBulletbottom >= document.body.clientHeight - 160) {
          clearInterval(moveputinBullet);
          putinBullet.style.display = 'none';
        } 
        putinBullet.style.left = 45 + "px"; 
        putinBullet.style.bottom = putinBulletbottom + 5 + "px";
      });

      var putinSecondBullet = document.createElement("div");
      putinSecondBullet.classList.add("putinSecondBullet");
      putinHunts.appendChild(putinSecondBullet);
  
      var moveputinSecondBullet = setInterval(() => {
        var myTankbound = myTank.getBoundingClientRect();
        var putinSecondBulletbound = putinSecondBullet.getBoundingClientRect();
        if (
          putinSecondBulletbound.left <= (myTankbound.right) &&
          putinSecondBulletbound.right >= (myTankbound.left) &&
          putinSecondBulletbound.top >= (myTankbound.top - 50)
        ) { 
            putinSecondBullet.style.display = 'none';
             var myLife = myTank.firstElementChild;
             let currentLife = getComputedStyle(myLife.firstElementChild).getPropertyValue("background-color");
             console.log(currentLife)
  
            if(currentLife == 'rgb(25, 116, 6)') {
              myLife.firstElementChild.style.backgroundColor = 'rgb(145, 175, 10)';
              myLife.firstElementChild.style.width = 80 + '%';
            }
  
            else if(currentLife == 'rgb(145, 175, 10)') {
              myLife.firstElementChild.style.backgroundColor = 'rgb(175, 74, 27)';
              myLife.firstElementChild.style.width = 60 + '%';
            }
  
            else if(currentLife == 'rgb(175, 74, 27)') {
              myLife.firstElementChild.style.backgroundColor = 'rgb(189, 49, 31)';
              myLife.firstElementChild.style.width = 40 + '%';
            }
  
            else if(currentLife == 'rgb(189, 49, 31)') {
              myLife.firstElementChild.style.backgroundColor = 'rgb(219, 18, 18)';
              myLife.firstElementChild.style.width = 20 + '%';
            } 
  
            else if(currentLife == 'rgb(219, 18, 18)') {
              myTankExplosion.classList.add('explosion-effect');
              function playDieSound() {
                var die = document.getElementById("die");
                die.play();
            }

            playDieSound();
              setTimeout(function() {
                myTank.style.display = 'none';
                putin[0].style.opacity = 0;
                  totalScore.innerText = score.innerText.match(/\d+/);
              }, 500)
              setTimeout(function() {
                
                loseReason.innerText = 'The Enemy Killed You!';
                gameOver.classList.add('full-height');
              }, 1500)
            } 
        }      
      
        var putinSecondBulletbottom = parseInt(
          window.getComputedStyle(putinSecondBullet).getPropertyValue("bottom")
        );
  
        //აჩერებს და აქრობს ტყვიას, რომ არ გავიდეს სათამაშო სივრცის მიღმა
        if (putinSecondBulletbottom >= document.body.clientHeight - 160) {
          clearInterval(moveputinSecondBullet);
          putinSecondBullet.style.display = 'none';
        } 
        putinSecondBullet.style.left = (-20 + "px"); 
        putinSecondBullet.style.bottom = putinSecondBulletbottom + 5 + "px";
      },);  
    }, 1400);    
    clearInterval(secondTimer);
  }
}, 100)

playAgain.addEventListener('click', function() {
  //window.onload();
  location.reload();
})

wonPlayAgain.addEventListener('click', function() {
  //window.onload();
  location.reload();
  })
}

play();
document.body.addEventListener('click', function() {  
})
