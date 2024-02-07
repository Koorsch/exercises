"use strict";

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");

//themagicbutton
document.querySelectorAll(".randomBtn").forEach((btn) => {
  btn.addEventListener("click", btnFilter);
});

//define all buttons to use as filters
function btnFilter(evt) {
  let filter = evt.currentTarget.dataset.filter;
  if (filter === "*") {
    showTheseVehicles(vehicles);
  } else if (filter === "isElectric") {
    showTheseVehicles(vehicles.filter(electric));
  } else if (filter === "passengers") {
    showTheseVehicles(vehicles.filter(seats));
  } else if (filter === "fuel") {
    showTheseVehicles(vehicles.filter(rye));
  } else if (filter === "ownedBy") {
    showTheseVehicles(vehicles.filter(ownedBy));
  } else {
  }
}

//filterfunctions
function electric(vehicle) {
  if (vehicle.isElectric) {
    return vehicle;
  }
}
function seats(vehicle) {
  if (vehicle.passengers > 1) {
    return vehicle;
  }
}
function ownedBy(vehicle) {
  if (vehicle.ownedBy === "Jonas") {
    return vehicle;
  }
}
function rye(vehicle) {
  if (vehicle.fuel === "Rugbrød") {
    return vehicle;
  }
}

/* 
start with all the heading-text for the list items,
loop the vehicle array and add a list item for each post it finds
 */
function showTheseVehicles(arr) {
  ulPointer.innerHTML = "<li><strong>Type</strong></li><li><strong>Fuel</strong></li><li><strong>Passengers</strong></li><li><strong>Stops</strong></li><li><strong>Owned By</strong></li><li><strong>Is Electric</strong></li><li><strong>Is tandem</strong></li>";

  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel ?? ""}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.stops ?? ""}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy ?? ""}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric === undefined ? "" : "X"}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem === undefined ? "" : "X"}</li>`;
  });
}
/* 
using ternary operators (
  isTrue ? dothis : otherwiseDoThis
  something === somethingToCheck ? doThis : otherwiseDoThis
)
 */

showTheseVehicles(vehicles);
