import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/big-smile";

let svg = createAvatar(style, {
  seed: "custom-seed",
  
});

const myImgs = document.querySelectorAll("img");


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
