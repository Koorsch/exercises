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

let person1 = {
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
