




const menu = document.querySelector('.menu-icon');
const dropdownMenu = document.querySelector('.dropdown');
menu.addEventListener('click', function() {
    if(dropdownMenu.style.display == 'flex') {
        console.log('hello')
        dropdownMenu.style.display = 'none'
    } else {
        dropdownMenu.style.display = 'flex'
    }
});


onload  = start;

function start(){	
var i = 1;
function Move(){ 	
	i = (i%4)+1; // 4 is the Number of image in slider
	document.getElementById('i'+i).checked = true;
}
setInterval(Move,3000); //change img in 3 sec
};




























var multiItemSlider = (function () {
  return function (selector, config) {
    var
      _mainElement = document.querySelector(selector), 
      _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), 
      _sliderItems = _mainElement.querySelectorAll('.slider__item'), 
      _sliderControls = _mainElement.querySelectorAll('.slider__control'), 
      _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), 
      _sliderControlRight = _mainElement.querySelector('.slider__control_right'), 
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), 
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),    
      _positionLeftItem = 0, 
      _transform = 0,
      _step = _itemWidth / _wrapperWidth * 100,
      _items = [];

    
    _sliderItems.forEach(function (item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });

    var position = {
      getItemMin: function () {
        var indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position < _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax: function () {
        var indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position > _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin: function () {
        return _items[position.getItemMin()].position;
      },
      getMax: function () {
        return _items[position.getItemMax()].position;
      }
    }

    var _transformItem = function (direction) {
      var nextItem;
      if (direction === 'right') {
        _positionLeftItem++;
        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
          nextItem = position.getItemMin();
          _items[nextItem].position = position.getMax() + 1;
          _items[nextItem].transform += _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform -= _step;
      }
      if (direction === 'left') {
        _positionLeftItem--;
        if (_positionLeftItem < position.getMin()) {
          nextItem = position.getItemMax();
          _items[nextItem].position = position.getMin() - 1;
          _items[nextItem].transform -= _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform += _step;
      }
      _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
    }

   
    var _controlClick = function (e) {
      var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
      e.preventDefault();
      _transformItem(direction);
    };

    var _setUpListeners = function () {
      
      _sliderControls.forEach(function (item) {
        item.addEventListener('click', _controlClick);
      });
    }


    _setUpListeners();

    return {
      right: function () { 
        _transformItem('right');
      },
      left: function () {
        _transformItem('left');
      }
    }

  }
}());

var slider = multiItemSlider('.slider')

$( ".right" ).click(function() {
  $( ".slick-next" ).click();
});

$( ".left" ).click(function() {
  $( ".slick-prev" ).click();
});


$('.category').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },

    {
      breakpoint: 620,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});


$('.product-list').slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});



$('.vip-box__row').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
      }
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },

    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});


$('.shop-list').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 7
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});


$('.sales-list').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.service-list').slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        infinite: true
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


const scrollUp = document.querySelector('.scroll-up');
scrollUp.addEventListener('click', function() {
  window.scroll({top: 0, behavior: "smooth"})
});


const mainSlider = document.querySelector('.slider__wrapper');
const filter = document.querySelector('.filter');
const last = document.querySelector('.last');
filter.addEventListener('click', function() {
  mainSlider.style.display = 'none';
});

last.addEventListener('click', function() {
  mainSlider.style.display = 'flex';
})