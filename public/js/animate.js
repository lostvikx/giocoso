"use strict";

const word = document.getElementById("adjective");

const adjectives = ["Managed", "Made", "Packaged", "Produced", "Created", "Leveled", "Hyped", "Manufactured", "Composed", "Built", "Assembled", "Fabricated", "Fashioned", "Forged", "Moulded", "Modeled", "Crafted"];

// Selects a random adjective from the array
function selectRand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Every 5000ms/5s add or rm a html class and add a new word
function changeAdj(newWord) {
  word.textContent = newWord;

  if (Array.from(word.classList).includes("bg-in")) {
    word.classList.replace("bg-in", "bg-out");
  } else {
    word.classList.replace("bg-out", "bg-in");
  }
  // For debug
  // console.log(word.className);
}

setInterval(() => changeAdj(selectRand(adjectives)), 5000);