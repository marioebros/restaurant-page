import { landingPageLoad } from "./landing-page-load.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

landingPageLoad();

// Tab Switching Module
let tabSwitchingModule = (function () {
  const homeTab = document.querySelector(".home");
  homeTab.addEventListener("click", landingPageLoad);

  const menuTab = document.querySelector(".menu");
  menuTab.addEventListener("click", menu);

  const contactTab = document.querySelector(".contact");
  contactTab.addEventListener("click", contact);
})();
