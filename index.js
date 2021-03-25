AOS.init();

const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// მენიუს დაფიქსირება
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// სქროლი
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("დეველოპერი", { delay: 400 })
  .pause(500)
  .delete(12)
  .type("ფრონტ ენდ", { delay: 400 })
  .pause(500)
  .delete(12)
  .go();

new TypeIt("#type2", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("ვებ", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("დეველოპერი", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".banner", { opacity: 0, duration: 1, delay: 1.5, x: -300 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 30,
  stagger: 0.2,
});
gsap.from(".icons span", {
  opacity: 0,
  duration: 1,
  delay: 4,
  x: -30,
  stagger: 0.2,
});

const glide = document.querySelector(".glide");
if (glide)
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();




  function showOverlay1() {
    document.getElementById("overlay1").style.opacity = "1";
  }
  
  function hideOverlay1() {
    document.getElementById("overlay1").style.opacity = "0";
  }

  function showOverlay2() {
    document.getElementById("overlay2").style.opacity = "1";
  }
  
  function hideOverlay2() {
    document.getElementById("overlay2").style.opacity = "0";
  }


  function showOverlay3() {
    document.getElementById("overlay3").style.opacity = "1";
  }
  
  function hideOverlay3() {
    document.getElementById("overlay3").style.opacity = "0";
  }

  function showOverlay4() {
    document.getElementById("overlay4").style.opacity = "1";
  }
  
  function hideOverlay4() {
    document.getElementById("overlay4").style.opacity = "0";
  }

  function showOverlay5() {
    document.getElementById("overlay5").style.opacity = "1";
  }

  function hideOverlay5() {
    document.getElementById("overlay5").style.opacity = "0";
  }

  function showOverlay6() {
    document.getElementById("overlay6").style.opacity = "1";
  }

  function hideOverlay6() {
    document.getElementById("overlay6").style.opacity = "0";
  }

  function showOverlay7() {
    document.getElementById("overlay7").style.opacity = "1";
  }

  function hideOverlay7() {
    document.getElementById("overlay7").style.opacity = "0";
  }

  $('#goOnProject1').click(function(){
   window.location.href='Bakery%20website/index.html';
 })

 $('#goOnProject2').click(function(){
  window.location.href='responsive%20website/index.html';
})

$('#smallButton1').click(function(){
  window.location.href='Parallax%20Website/index.html';
})

$('#smallButton2').click(function(){
  window.location.href='mountains/index.html';
})

$('#smallButton3').click(function(){
  window.location.href='template/responsive%20template.html';
}) 

$('#goOnProject3').click(function(){
  window.location.href='quiz/Quiz.html';
})

$('#goOnProject4').click(function(){
  window.location.href='game/My%20Game.html';
})