import "./_components.js";
import "simplebar";

const header = document.querySelector(".header");
const bottomForm = document.querySelector(".form");
const chatBottom = document.querySelector(".chat__bottom");
const mainChat = document.querySelector(".chat__body");

function checkResize() {
  mainChat.style.maxHeight =
    window.innerHeight -
    header.offsetHeight -
    bottomForm.offsetHeight -
    chatBottom.offsetHeight -
    90 +
    "px";
}

if (window.matchMedia("(max-width: 900px)").matches) {
  checkResize();
  window.addEventListener("resize", checkResize);
}
