export function menu() {
  const contentDiv = document.querySelector("#content");

  // Remove any existing DOM children, if present
  contentDiv.replaceChildren();
}

// DOM for Heading
const heading = document.createElement("h1");
heading.textContent = "Welcome to G's";
heading.classList.add("landing-title");
contentDiv.appendChild(heading);

// DOM for poutine
const poutine = document.createElement("img");
poutine.classList.add("image");
poutine.src = "../src/assets/";
poutine.alt = "Image of G's Poutine";
contentDiv.appendChild(poutine);

// DOM for p tag for poutine
const para1Poutine = document.createElement("p");
para1Poutine.classList.add("menu-copy");
para1Poutine.textContent =
  "Healthy portions of hot & gooey cheese curds and gravy topping a mountain of soft and crispy fries.";
contentDiv.appendChild(para1Poutine);

// DOM for loadedTots
const loadedTots = document.createElement("img");
loadedTots.classList.add("image");
loadedTots.src = "../src/assets/";
loadedTots.alt = "Image of G's Loaded Tots";
contentDiv.appendChild(loadedTots);

// DOM for p tag for loadedTots
const para1LoadedTots = document.createElement("p");
para1LoadedTots.classList.add("menu-copy");
para1LoadedTots.textContent =
  "Healthy portions of hot & gooey cheese curds and gravy topping a mountain of soft and crispy fries.";
contentDiv.appendChild(para1LoadedTots);

// DOM for loadedWaffles
const loadedWaffles = document.createElement("img");
loadedWaffles.classList.add("image");
loadedWaffles.src = "../src/assets/";
loadedWaffles.alt = "Image of G's Loaded Waffles";
contentDiv.appendChild(loadedWaffles);

// DOM for p tag for loadedWaffles
const para1LoadedWaffles = document.createElement("p");
para1LoadedWaffles.classList.add("menu-copy");
para1LoadedWaffles.textContent =
  "Healthy portions of hot & gooey cheese curds and gravy topping a mountain of soft and crispy fries.";
contentDiv.appendChild(para1LoadedWaffles);
