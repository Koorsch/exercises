// "use strict";
window.addEventListener("DOMContentLoaded", start);



let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

//Set global variable as an object
let settings = {
  filterBy: "all",
  sortBy: "name",
  sortDirection: "asc"
}


function start() {
  console.log("readying!");
  makeButtons();
  prepJSON();
}

function makeButtons() {
  document.querySelectorAll("[data-action='filter']").forEach(buttonFilter => buttonFilter.addEventListener("click", selectFilter))
  document.querySelectorAll("[data-action='sort']").forEach(buttonSort => buttonSort.addEventListener("click", selectSort))
  console.log("Buttons created!")
}

//Buttonfunctions
  //Filterbutton
function selectFilter(evt) {
  const thisFilter = evt.target.dataset.filter;
  console.log("You chose filter by: ", thisFilter)
  setFilter(thisFilter)
}

function setFilter(filter) {
  settings.filterBy = filter;
  buildList(filter);
}
  //Sortbutton
function selectSort(evt) {
  const sortBy = evt.target.dataset.sort
  const sortDir = evt.target.dataset.sortDirection;
  if (sortDir === "asc") {
    evt.target.dataset.sortDirection = "desc";
  } else {
    evt.target.dataset.sortDirection = "asc";
  }
  console.log("You chose sorting by: ", sortBy, " and ", sortDir)
  setSort(sortBy, sortDir)
}
function setSort(sortBy, sortDir) {
  settings.sortBy = sortBy;
  settings.sortDirection = sortDir;
  buildList();
}
//Filter functions start
function filterList(filteredList) {
  if (settings.filterBy === "cat") {
    filteredList = allAnimals.filter(isCat)
  } else if (settings.filterBy === "dog") {
    filteredList = allAnimals.filter(isDog)
  } 
  return filteredList;
}
function isCat(animal) {
  return animal.type === "cat"
}
function isDog(animal) {
  return animal.type === "dog"
}
//Filter functions end

//Sort functions start
function sortList(sortedList) {
  // let sortedList = allAnimals;
  let direction =  1;
  if (settings.sortDirection === "desc") {
    direction = -1;
  } else {
    direction = 1;
  }
  sortedList = sortedList.sort(sortItBy)
  //Move function inside to make a generic helper function
    function sortItBy(animalA, animalB) {
      if (animalA[settings.sortBy] < animalB[settings.sortBy]) {
        return 1 * direction;
      } else {
        return -1 * direction;
      }
    }
  return sortedList;
}
//Sort functions end

function buildList() {
  const currentList = filterList(allAnimals);
  const sortedList = sortList(currentList)

  displayList(sortedList);
}


//Step1
  //Get the data from the JSON file
async function prepJSON() {
  const response = await fetch("assignment4.json");
  const jsonData = await response.json();
  // when loaded, prepare data objects
  console.log("The data! ", jsonData)
  prepData(jsonData);
}
//Step2
  //Clean data
function prepData(everyAnimal) {
  everyAnimal.forEach(thisAnimal => {
    // Create new object
    const animal = Object.create(Animal)
    // Get data from json Object
    const fullName = thisAnimal.fullname;

    //Clean up the data
    const firstSpace = fullName.indexOf(" ");
    const secondspace = fullName.indexOf(" ", firstSpace +1)
    const lastSpace = fullName.lastIndexOf(" ");

    const name = fullName.substring(0, firstSpace);
    const desc = fullName.substring(secondspace +1, lastSpace);
    const type = fullName.substring(lastSpace+1);

    // Put cleaned data in the created object
    animal.name = name;
    animal.desc = desc;
    animal.type = type;
    animal.age = thisAnimal.age;
    //Add animal to global array
    allAnimals.push(animal);
});

//Show the list
displayList(allAnimals);
}

function displayList(allAnimals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data by using data-field property
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

