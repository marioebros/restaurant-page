var menuArray = [
  {
    src: "images/1lobster.jpg",
    heading: "Poutine",
  },
  {
    src: "images/2salmon.jpg",
    heading: "Loaded Tater Tots",
  },
  {
    src: "images/3shrimpsalad.jpg",
    heading: "Loaded Waffles",
  },
  {
    src: "images/4oyesters.jpg",
    heading: "Pizza Autentica",
  },
  {
    src: "images/5shushi.jpg",
    heading: "Fish & Chips",
  },
  {
    src: "images/6salad.jpg",
    heading: "Steak Frites",
  },
  {
    src: "images/7soup.jpg",
    heading: "Chilaquiles Rojos",
  },
  {
    src: "images/8thainoodles.jpg",
    heading: "Milkshake",
  },
];

const menu = () => {
  var menuDiv = document.createElement("div");
  var menuh1 = document.createElement("h1");
  var gridmenu = document.createElement("div");

  menuh1.innerText = "CHECK OUT OUR SPECIALS";
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
