import { $, $$ } from "../utils/dom.js";

const text = $("p");
const btn = $("button");
const info = $("h2");
let word;

const profanity = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

function checkSFW() {
  if (text.textContent.includes(word)) {
    info.textContent = "Still NSFW!";
  } else info.textContent = "It's all SFW!";
}

function makeItSFW() {
  profanity.forEach((word) => {
    if (word.bad && word.good) {
      const replaced = text.textContent.replaceAll(word.bad, word.good);
      text.textContent = replaced;
    } else {
      word = word.bad.substring();
      word.style = "background-color: green";
    }
    checkSFW();
  });
}

btn.addEventListener("click", makeItSFW);
