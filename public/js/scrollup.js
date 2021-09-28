"use strict";

const scrollBtn = document.getElementById("scroll-up-btn");
const rootElement = document.documentElement;
const scrollBar = document.querySelector(".scroll");

// The scroll funciton
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

scrollBtn.addEventListener("click", scrollToTop);

// This is subject to change
// const heightPixels = Math.floor(rootElement.scrollHeight / 3);
const heightPixels = 200

// console.log(heightPixels);

// Show btn on heightPixels (this needs to be modified accordingly)
function showScrollBtn() {
  // For debugging
  // console.log(rootElement.scrollTop);

  if (rootElement.scrollTop > heightPixels || document.body.scrollTop > heightPixels) {
    scrollBar.style.display = "flex";
    scrollBtn.style.visibility = "visible";
  } else {
    scrollBtn.style.visibility = "hidden";
    scrollBar.style.display = "none";
  }
}

document.addEventListener("scroll", showScrollBtn);
