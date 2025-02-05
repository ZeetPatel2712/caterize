import "./ui/modal.js";
import "./ui/button.js";

document.addEventListener("DOMContentLoaded", function () {
     const sliderSettings = {
          autoHeight: false,
          centeredSlides: false,
          watchOverflow: false,
          preloadImages: true,
          allowTouchMove: false,
          lazy: true,
          mousewheel: {
               enabled: true,
               forceToAxis: true,
               sensitivity: 1,
          },
     };

     // Initialize catering swiper
     const cateringElement = document.querySelector(".catering .swiper");
     if (cateringElement) {
          new Swiper(cateringElement, {
               ...sliderSettings,
               loop: false,
               slidesPerView: "auto",
               spaceBetween: 16,
               navigation: {
                    nextEl: ".catering .theme-swiper-btn.btn-next",
                    prevEl: ".catering .theme-swiper-btn.btn-prev",
               },
          });
     }

     // Initialize review swiper
     const reviewElement = document.querySelector(".review .swiper");
     if (reviewElement) {
          new Swiper(reviewElement, {
               ...sliderSettings,
               loop: true,
               slidesPerView: 3,
               spaceBetween: 24,
               navigation: {
                    nextEl: ".review .theme-swiper-btn.btn-next",
                    prevEl: ".review .theme-swiper-btn.btn-prev",
               },
          });
     }
});
