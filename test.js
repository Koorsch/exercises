"use strict";
/* const people = ["Harry", "Ron", "Hermoine", "Neville"];

function testParams(a, b, c, d) {
  console.log(`a: ${typeof a}, b: ${typeof b}, c: ${typeof c}, d: ${typeof d}`);
}

people.forEach(testParams);
 */

/* const animal = [
  { name: "Pelle", type: "cat" },
  { name: "Gert", type: "dog" },
  { name: "Nilla", type: "crocodile" },
];
const onlyCats = animal.filter(isCat);

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

animal.forEach((pet) => {
  console.log(`This is ${isCat(pet)}, because it is a ${pet.type}. Its name is ${pet.name}`);
});
 */

/* const object = {
  firstName: "Klaus",
  age: 59,
  student: false,
};
const getName = "firstName";

console.log(`Name: ${object[getName]}, aged ${object.age}. Student: ${object.student}`);
 */

/* let person1 = {
  firstname: "Pelle",
  age: 29,
  student: true,
};

//No value
console.log(person1.lastName);
//add lastName as a value
person1.lastName = "Mandal";
console.log(person1.lastName);
//Check full object
console.log(person1);
person1.lastName = undefined;
console.log("Undefined lastName: ", person1);
console.log("person1.lastName: ", person1.lastName);
console.log("person1.middleName: ", person1.middleName);
console.log("delete person1.lastName <--");
delete person1.lastName;
console.log("person1.lastName: ", person1.lastName);
console.log("full object view: ", person1);
 */

// console.log(`My name is Andreas.\nI had a dog named Jackson.`);

// const nameIs = "Albus Percival Wulfric Brian Dumbledore";
/* const letterLen = nameIs.length;
console.log(`Total length: ${nameIs.length}.\nLetter at index[2]: ${nameIs[2]}\nLetter at index[6]: ${nameIs[6]}\nYou find the big D of Dumbledore at index[${nameIs.indexOf("D")}].\nThe last e in Dumbledore is at index[${nameIs.lastIndexOf("e")}]`);
const nameSpaced = "  There   is a bit of  whitespace here  \n";
const trimmedName = nameSpaced.trim();
console.log("Untrimmed: " + nameSpaced);
console.log("Trimmed:" + trimmedName); */

/* const firstName = nameIs.substring(nameIs.indexOf("A"), 5);
const dDore = nameIs.substring(nameIs.indexOf("D"));
const wulfric = nameIs.substring(nameIs.indexOf("W"));
console.log(`Start from A, stop at index[5]: ${firstName}`);
console.log(`Start from D, write rest of it: ${dDore}`);
console.log(`${wulfric}`); */

/* 
// #### Opgave3
const someName = "Albus Dumbledore";
const length = someName.length;
const firstname = someName.indexOf(" ");
console.log(`Length of name is: ${length}\nThe full string is: ${someName}`);
console.log(`First name ends at index[${firstname}]`);

// #### Opgave7
let paddedName = someName.padStart(30, " ");
console.log(`[Original is ${someName.length} chars long]\n-----\n${someName}\n\n[Padded to 30 chars]\n------\n${paddedName}\n\n`);

// #### Opgave14
const link = "http://www.kea.dk/";
console.log(`Does ${link} start with http://?\n${link.startsWith("http://")}`);

// #### Opgave19
const germanWord = "Goethestraße";
console.log(`German: ${germanWord}\nReplace: ${germanWord.replace("ß", "ss").toLocaleUpperCase()}`);

const csv = "cat,dog,bird";
console.log(csv.split(",").join(" ").toLocaleLowerCase()); 
*/

/* let theText = "Jeg er en tekst hvor nogle ord skal erstattes med nogle andre ord";
let splitText = theText.split("ord");
console.log(`Med Split: ${splitText.join("ting")}`);

let replaceText = theText.replaceAll("ord", "kød");
console.log(`Med Replace: ${replaceText}`);
 */

document.querySelector("button").addEventListener("click", btnClick);

function btnClick() {
  document.querySelector("#ball").addEventListener("animationend", animationEnd);
  document.querySelector("#ball").addEventListener("animationiteration", animationEnd);
  document.querySelector("#ball").classList.add("ani");
}

function animationEnd(evt) {
  //If event of the css object animation is not =< to the set animation iterations, run until true
  if (evt.type === "animationend") {
    document.querySelector("#ball").classList.remove("ani");
  }
  console.log("AnimationEnd", evt);
}
