var swiper = new Swiper(".product-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".product-swiper-next",
        prevEl: ".product-swiper-perv",
      },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: -20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: -55,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 100,
      },
      1100: {

        slidesPerView: 3,
        spaceBetween: 10,

      },
    },
  });


  var bannerSwiper = new Swiper(".banner-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".banner-swiper-next",
        prevEl: ".banner-swiper-perv",
      },
    breakpoints: {
      
      1100: {

        slidesPerView: 1,
        spaceBetween: 50,

      },
    },
  });


