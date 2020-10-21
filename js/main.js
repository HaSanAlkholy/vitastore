$(window).on('load', function () {

  //preloader
  $('.pre-loader').fadeOut("500", function () {
    $('html').removeClass("overflow");
    $(this).remove();
  });

  if ($('.pre-loader').length == 0) {
    console.log($('.pre-loader'));
    $('html').removeClass("overflow");
  }

  // animate on scroll

  AOS.init({
    duration: 700,
    mirror: true,
    once: true,
    disable: function () {
      var maxWidth = 769;
      return window.innerWidth < maxWidth;
    },
    easing: 'ease-in-out'
  });


  //nava toggle
  $('#nava-icon').click(function (e) {
    $('#nava').toggleClass('nava-active');
    $('html').toggleClass('overflow');
  });

  $('#nava').click(function (e) {
    if (e.target.id == 'nava' || e.target.id == 'close-nava' || e.target.parentNode.id == "close-nava") {
      $(this).removeClass('nava-active');
      $('html').removeClass('overflow');
    }
  });

  //search toggle
  $('#search-btn').click(function (e) {
    $('#search-form').toggleClass('search-form-active');
    $('html').toggleClass('overflow');
  });

  $('#search-form').click(function (e) {
    if (e.target.id == 'search-form' || e.target.id == 'close-search' || e.target.parentNode.id == "close-search") {
      $(this).removeClass('search-form-active');
      $('html').removeClass('overflow');
    }
  });

  $(".slide").on("click", function (e) {
    if (e.target.classList.contains('drop') && e.target.parentNode.classList.contains('slide') || e.target.classList.contains('slide')) {
      $(this).toggleClass("slide-active");
      $(this).children("ul").slideToggle();
    }
  });

  function changeSlide() {
    if (window.innerWidth <= 1200) {
      $('.sm-slide').removeClass('top-setting');
      $('.sm-slide').addClass('slide');
      $('.sm-slide ul').css('display', 'none');

    } else {
      $('.sm-slide').addClass('top-setting');
      $('.sm-slide').removeClass('slide');
      $('.sm-slide ul').css('display', 'unset');
    }
  }

  changeSlide();

  window.addEventListener('resize', changeSlide);

  var mySwiper = new Swiper('header .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    autoplay: {
      delay: 5000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper2 = new Swiper('.s-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 4,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      // when window width is >= 480px
      1200: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      // when window width is >= 250px
      150: {
        slidesPerView: 1,
      }
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper4 = new Swiper('.notes-swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 3,
    autoplay: false,
    allowTouchMove: false,

    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
        allowTouchMove: true,
        autoplay: {
          delay: 4000,
        }
      },
      0: {
        slidesPerView: 1,
        allowTouchMove: true,
        autoplay: 4000,
      }
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

  if (window.innerWidth <= 992) {
    setInterval(() => {
      mySwiper4.slideNext();
    }, 4000);
  }

  window.addEventListener("scroll", scrolled);

  function scrolled() {
    let up = document.getElementById('up');
    if (this.scrollY > 200) {
      up.classList.add('active-up');
    } else {
      up.classList.remove('active-up');
    }
  }



});
