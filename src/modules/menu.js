var menuArray = [
  {
    src: "../src/assets/poutine-fries-gravy-cheese.jpeg",
    heading: "Poutine",
  },
  {
    src: "../src/assets/49512933098_453b86d005_o.jpeg",
    heading: "Loaded Tater Tots",
  },
  {
    src: "../src/assets/brooke-lark-UU8sNutRppQ-unsplash.jpeg",
    heading: "Loaded Waffles",
  },
  {
    src: "../src/assets/klara-kulikova-QATxlTPJImo-unsplash.jpeg",
    heading: "Pizza Autentica",
  },
  {
    src: "../src/assets/antonio-mendes-i5hzQrNBbR0-unsplash.jpeg",
    heading: "Fish & Chips",
  },
  {
    src: "../src/assets/vera-davidova-XRcwELmjLgs-unsplash.jpeg",
    heading: "Steak Frites",
  },
  {
    src: "../src/assets/alexandra-mendivil-5sD2TgDZOxA-unsplash.jpeg",
    heading: "Chilaquiles Rojos",
  },
  {
    src: "../src/assets/shardar-tarikul-islam-X1Wun0nCHOc-unsplash.jpeg",
    heading: "Milkshake",
  },
];

const menu = () => {
  var menuDiv = document.createElement("div");
  var menuh1 = document.createElement("h1");
  var gridmenu = document.createElement("div");

  menuh1.innerText = "CHECK OUT OUR MENU";
  menuDiv.appendChild(menuh1);

  for (var i = 0; i < menuArray.length; i++) {
    var menutile = document.createElement("div");
    var img = document.createElement("img");
    var imgh2 = document.createElement("h2");

    img.setAttribute("src", menuArray[i].src);
    imgh2.innerText = menuArray[i].heading.toUpperCase();

    menutile.appendChild(img);
    menutile.appendChild(imgh2);
    menutile.classList.add("menu-tile");
    gridmenu.appendChild(menutile);
  }
  gridmenu.id = "grid-menu";
  menuDiv.appendChild(gridmenu);
  menuDiv.id = "menu";

  var nav = document.querySelector("nav");
  var foot = document.querySelector("footer");
  var homediv = document.getElementById("home");
  var contactDiv = document.getElementById("contact-div");

  if (content.contains(homediv)) {
    content.removeChild(homediv);
  }
  if (content.contains(contactDiv)) {
    content.removeChild(contactDiv);
  }

  content.appendChild(nav);
  content.appendChild(menuDiv);
  content.appendChild(foot);
};

export { menu };
