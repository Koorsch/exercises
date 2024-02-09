"use strict";

const inputWindow = document.querySelector("input");
let inputValue = inputWindow.value;

let stringMethods = document.querySelector("#stringMethods");
let nameParts = document.querySelector("#nameParts");
let threeCap = document.querySelector("#threeCap");
let realCap = document.querySelector("#realCap");

const btn = document.querySelector(".randomBtn").addEventListener("click", () => {
  let firstName = inputValue.indexOf(" ");
  let lastName = inputValue.lastIndexOf(" ");
  let middleName = inputValue;
});
