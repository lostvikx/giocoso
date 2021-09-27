"use strict";
// This is script is only applicable, when viewed the html on a mobile device. 
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-links");
const ctaBtn = document.querySelector(".cta-btn");

// The toggle method is really cool, if a class, by the provided name exists rm it, else add it.
function mobileMenu() {
  // To disable scroll on menu
  document.body.classList.toggle("stop-scroll");
  // To change the hamburger into a cross
  hamburger.classList.toggle("active");
  // To show to navList <ul>
  navList.classList.toggle("active");
  // To rm the cta-btn styling & give it a link style
  ctaBtn.classList.toggle("link");
  ctaBtn.classList.toggle("cta-btn");
}

hamburger.addEventListener("click", mobileMenu);

// This is for closing the menu, after clicking on a link/page
const navLink = document.querySelectorAll(".nav-link");

function closeMenu() {
  hamburger.classList.remove("active");
  navList.classList.remove("active");
}

navLink.forEach(link => link.addEventListener("click", closeMenu));
