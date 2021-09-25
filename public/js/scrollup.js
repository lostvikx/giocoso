"use strict";

const scrollBtn = document.getElementById("scroll-up-btn");
const rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToTop();
});

const heightPixels = 500;

function showScrollBtn() {
  // For debugging
  // console.log(rootElement.scrollTop);

  if (rootElement.scrollTop > heightPixels || document.body.scrollTop > heightPixels) {
    scrollBtn.style.visibility = "visible";
  } else {
    scrollBtn.style.visibility = "hidden";
  }
}

document.addEventListener("scroll", showScrollBtn);
