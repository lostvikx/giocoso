"use strict";

// Selects
let service_description = [...document.querySelectorAll(".service-description")];

let text_content = service_description.map(t => {  

  let text = t.innerText;
  let text_len = text.length;
  // console.log(text_len);

  if (text_len > 150) {
    // Slice first 150 chars
    let new_txt = text.slice(0, 150);
    // The next 150 chars
    let rm_txt = text.slice(150);
    // Change the innerText
    t.innerText = new_txt + "...";

    // Add a span tag, the read more btn.
    let read_btn = document.createElement("span");
    // read_btn.href = "";
    read_btn.textContent = "read more";
    read_btn.className = "read-more";

    t.insertAdjacentElement("beforeend", read_btn);

    // Add an evt listener, click evts.
    read_btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (read_btn.textContent == "read more") {
        // Display the entire text, if read more clicked.
        t.innerText = new_txt + rm_txt + " ";
        // Change text for read more
        read_btn.textContent = "Read less"
        // Add the read_btn element
        t.insertAdjacentElement("beforeend", read_btn);
        // Change the height of the card element.
        // The current card element only, not all of them.
        t.parentElement.parentElement.style.height = "auto";
      } else {
        // Revert to the same
        t.innerText = new_txt + "...";
        // Change text for read less
        read_btn.textContent = "read more"
        // Add the read_btn element
        t.insertAdjacentElement("beforeend", read_btn);
        // Change the height of the card element to 400px.
        // The current card element only, not all of them.
        t.parentElement.parentElement.style.height = "400px";
      }
    });
  }

  return t;
});

// console.log(text_content);
