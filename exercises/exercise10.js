import { $ } from "../utils/dom.js";

const inputWindow = $("input");
const results = $("#results");
const nameParts = $("#nameParts");
const threeCap = $("#threeCap");
const realCap = $("#realCap");
const btn = $(".randomBtn");
const fullString = $("#fullString");

let firstName = "";
let middleName = "";
let lastName = "";

function stringIt(string) {
  console.log(string);

  //to find out all the parts -- nameParts
  firstName = string.substring(0, string.indexOf(" "));
  middleName = string.substring(string.indexOf(" ") + 1, string.lastIndexOf(" "));
  lastName = string.substring(string.lastIndexOf(" ")).trim();
  //do we get a middle name? If not, hide that field
  if (middleName === "" || middleName.length === 1) {
    middleName = "";
    $("#middleName").classList.add("hidden");
  } else $("#middleName").classList.remove("hidden");

  const nameSplit = string.split(" ");
  let splitFirst = nameSplit[0];
  let splitMiddle = nameSplit[1];
  let splitLast = nameSplit[nameSplit.length - 1];

  $("#nameParts").innerHTML = `<span>${splitFirst}</span><span>${splitMiddle}</span><span>${splitLast}</span>`;
  console.log(nameSplit);

  //Method2 of nameParts - to find out all the parts, splitting up all into array
  // let splittedName = string.split(" ");
  // firstName = splittedName[0]
  // lastName = splittedName[splittedName.length-1]
  // splittedName.forEach((split) => {
  //   console.log(`Name: ${split}\n`);
  // });

  fullString.textContent = `${firstName} ${middleName} ${lastName}`;
  $("#firstName span").textContent = `${firstName}`;
  $("#middleName span").textContent = `${middleName}`;
  $("#lastName span").textContent = `${lastName}`;

  //Capitalize first letter
  realCap.textContent = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${middleName[0].toUpperCase()}${middleName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`;

  //Capitalize 3rd letter of the first string
  threeCap.textContent = firstName.slice(0, 2).toLowerCase() + firstName[2].toUpperCase() + " " + middleName.slice(0, 2).toLowerCase() + middleName[2].toUpperCase() + " " + lastName.slice(0, 2).toLowerCase() + lastName[2].toUpperCase();
}

//Slicing for first3 letters of each word

//Real capitalization of words

btn.addEventListener("click", () => {
  results.style = "display: flex";
  let inputValue = inputWindow.value;
  stringIt(inputValue);
});
