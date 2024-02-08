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

const object = {
  firstName: "Klaus",
  age: 59,
  student: false,
};

const getName = "firstName";

console.log(`Name: ${object[getName]}, aged ${object.age}. Student: ${object.student}`);
