function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-container");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block"; 
}




(function() {
  var carousels = document.querySelectorAll('.js-product-carousel');
  
  [].forEach.call(carousels, function(carousel) {
    carouselize(carousel);
  });
  
})();

function carouselize(carousel) {
  var productList = carousel.querySelector('.js-product-list');
  var productListWidth = 0;
  var productListSteps = 0;
  var products = carousel.querySelectorAll('.product');
  var productAmount = 0;
  var productAmountVisible = 4;
  var carouselPrev = carousel.querySelector('.js-carousel-prev');
  var carouselNext = carousel.querySelector('.js-carousel-next');

  //Count all the products
  [].forEach.call(products, function(product) {
    productAmount++;
    productListWidth += 280;
    productList.style.width = productListWidth+"px";
  });

  carouselNext.onclick = function() {
    if(productListSteps < productAmount-productAmountVisible) {
      productListSteps++;
      moveProductList();
    }
  }
  carouselPrev.onclick = function() {
    if(productListSteps > 0) {
      productListSteps--;
      moveProductList();
    }
  }
  
  // This is a bit hacky, let me know if you find a better way to do this!
  // Move the carousels product-list
  function moveProductList() {
    productList.style.transform = "translateX(-"+300*productListSteps+"px)";
  }
}