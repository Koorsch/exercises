// "use strict";
window.addEventListener("DOMContentLoaded", start);

const Animal = {
    name: "-default name-",
    desc: "-no desc-",
    type: "-unknown-",
    age: 0,
};
const allAnimals = []


function start( ) {
    loadJSON();
}


function loadJSON() {
    fetch("exercise13.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        console.log("Inputdata: ", jsonData)
        prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
    jsonData.forEach(jsonObject => {
        // Create new object
        const animal = Object.create(Animal)
        // Get data from json Object
        const fullName = jsonObject.fullname;

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
        animal.age = jsonObject.age;
        //Add animal to global array
        allAnimals.push(animal);
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal(animal) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild(clone);
}


