"use strict";

const scrollBtn = document.getElementById("scroll-up-btn");
const rootElement = document.documentElement;

const scrollToTop = () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToTop();
});