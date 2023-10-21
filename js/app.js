const swiper = new Swiper(".swiper-container", {
    speed:700,
    centeredSlides: true,
    loop: true,
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        0: {
            slidesPerView: 4,
            spaceBetween: 38
        },
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      });
      