"use strict";

const user = window.navigator.userAgent.toLowerCase();
const btn = document.querySelectorAll(".click");

if (user.includes("android") || user.includes("iphone")) {

  console.log("on mobile");

  btn.forEach(b => {

    b.addEventListener("click", (e) => {

      e.preventDefault();

      // window.location.href = "/contact-us";

      window.open("/contact-us", "_blank");
    });
  });
}