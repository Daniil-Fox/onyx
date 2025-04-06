import { Swiper } from "swiper";
import { Navigation } from "swiper/modules";

Swiper.use([Navigation]);

new Swiper(".header__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    prevEl: ".control__btn--prev",
    nextEl: ".control__btn--next",
  },
});
