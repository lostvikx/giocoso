"use strict";

const btn = document.querySelectorAll(".click");

btn.forEach(b => {

  b.addEventListener("click", (e) => {
    
    e.preventDefault();

    // window.location.href = "/contact-us";

    window.open("/contact-us", "_blank");
  });
});