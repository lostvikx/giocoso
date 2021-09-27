"use strict";

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
  ctaBtn.classList.toggle("link");
  ctaBtn.classList.toggle("cta-btn");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(link => link.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navList.classList.remove("active");
}

const ctaBtn = document.querySelector(".cta-btn");
