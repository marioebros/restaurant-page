import { homepage } from "./modules/landing-page-load.js";
import { menu } from "./modules/menu.js";
import { contact } from "./modules/contact.js";

var content = document.getElementById("content");

window.addEventListener("load", () => {
  homepage();

  var menuLink = document.getElementById("menu-link");
  var contactLink = document.getElementById("contact-link");
  var toggleLinks = 0;

  menuLink.addEventListener("click", () => {
    if (toggleLinks != "menupage") {
      menu();
      toggleLinks = "menupage";
    }
  });

  contactLink.addEventListener("click", () => {
    if (toggleLinks != "contactpage") {
      contact();
      toggleLinks = "contactpage";
    }
  });
});
