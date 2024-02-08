"use strict";

const languages = {
  en: {
    texts: [
      { text: "This is not a boat", location: "#header" },
      { text: "Content goes here", location: "#content" },
      { text: "This could be a boat", location: "#footer" },
    ],
  },
  da: {
    texts: [
      { text: "Dette er ikke en båd", location: "#header" },
      { text: "Indhold smutter vi ind her", location: "#content" },
      { text: "Dette kunne ha været en båd", location: "#footer" },
    ],
  },
  se: {
    texts: [
      { text: "Det här är inte en båt", location: "#header" },
      { text: "Innehåll lägger vi här", location: "#content" },
      { text: "Det här kunde ha varit en båt", location: "#footer" },
    ],
  },
};

let lang = document.querySelector("html").lang;
console.log(lang);
const currentLang = document.querySelector("h2>strong");
const change = document.querySelector("h2");
const window = document.querySelector("#window");

const selectLang = document.querySelector(".langChange").addEventListener("change", (evt) => {
  change.classList.remove("hidden");
  window.classList.remove("hidden");

  currentLang.textContent = `${evt.target.value}`;
  lang = evt.target.value;
  //run function changeLang with value of chosen language found in the html
  changeLang(lang);
});

function changeLang(arr) {
  console.log("Current language: ", lang);

  languages[arr].texts.forEach((each) => {
    console.log("Text: " + each.text);
    console.log("Where? " + each.location);

    document.querySelector(each.location).textContent = each.text;
  });
}
