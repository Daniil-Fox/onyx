import { Swiper } from "swiper";
import { Grid, Navigation } from "swiper/modules";

Swiper.use([Navigation, Grid]);

new Swiper(".header__slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    prevEl: ".control__btn--prev",
    nextEl: ".control__btn--next",
  },
  grid: {
    fill: "row",
    rows: 2,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1201: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
