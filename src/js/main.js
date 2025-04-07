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
    40 +
    "px";
}

header.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("contextmenu", (e) => e.preventDefault());
mainChat.addEventListener("contextmenu", (e) => e.stopPropagation());

document.addEventListener("copy", function (event) {
  event.preventDefault();
});
mainChat.addEventListener("copy", (e) => e.stopPropagation());
if (window.matchMedia("(max-width: 900px)").matches) {
  checkResize();

  window.addEventListener("resize", checkResize);
}
document.addEventListener("gesturestart", function (event) {
  event.preventDefault();
});
document.addEventListener("dragstart", function (event) {
  event.preventDefault();
});
