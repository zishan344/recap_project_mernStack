var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centerInsufficientSlides: true,
  rewind: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
  virtual: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
