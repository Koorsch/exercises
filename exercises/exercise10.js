// "use strict";

const inputWindow = document.querySelector("input");
let inputValue = inputWindow.value;
let firstName, lastName, middleName;
let stringMethods = document.querySelector("#stringMethods");
let results = document.querySelector("#results");
let nameParts = document.querySelector("#nameParts");
let threeCap = document.querySelector("#threeCap");
let realCap = document.querySelector("#realCap");

const btn = document.querySelector(".randomBtn").addEventListener("click", () => {
  results.classList.remove("hidden");
  //to find out all the parts -- nameParts
  firstName = inputValue.substring(0, inputValue.indexOf(" "));
  middleName = inputValue.substring(inputValue.indexOf(" ") + 1, inputValue.lastIndexOf(" "));
  lastName = inputValue.substring(inputValue.lastIndexOf(" "));
  nameParts.textContent = `[firstname: ${firstName}] -- [middlename: ${middleName}]  --  [LastName: ${lastName}]`;

  //Method2 to find out all the parts, splitting up all into array
  // let splittedName = inputValue.split(" ");
  // firstName = splittedName[0]
  // lastName = splittedName[splittedName.length-1]
  // splittedName.forEach((split) => {
  //   console.log(`Name: ${split}\n`);
  // });

  //Slicing for first3 letters of each word
  let sliceThree = inputValue.slice(0, 2) + inputValue[2].toUpperCase() + inputValue.slice(3).toLowerCase();
  threeCap.textContent = sliceThree;

  //Real capitalization of words
});
