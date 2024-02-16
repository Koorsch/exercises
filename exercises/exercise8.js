"use strict";

const breadCrumbs = [
  { name: "Tools", link: "/tools" },
  { name: "Hammer", link: "/tools/hammers" },
  { name: "Black&Dekker", link: "/tools/hammers/blackNdekker/" },
];

const h2 = document.querySelector("h2");
const generator = document.querySelector(".randomBtn").addEventListener("click", makeBreadCrumbs);

function makeBreadCrumbs() {
  h2.classList.remove("hidden");
  h2.textContent = "";
  // for each item in breadCrumbs, as long as it's not at the end, make it a clickable link. if it's the end, just put in a text.
  breadCrumbs.forEach((crumb, i) => {
    if (i === breadCrumbs.length - 1) {
      h2.innerHTML += crumb.name;
    } else {
      h2.innerHTML += `<a href=${crumb.link}>${crumb.name}</a> / `;
    }
  });
}
