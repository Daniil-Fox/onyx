import { Swiper } from "swiper";
import { Grid, Navigation } from "swiper/modules";

Swiper.use([Navigation, Grid]);

const params = {
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
};

let headerSlider = new Swiper(".header__slider", params);

if (window.matchMedia("(max-width: 900px)").matches) {
  headerSlider.destroy();
} else {
  headerSlider = new Swiper(".header__slider", params);
}
