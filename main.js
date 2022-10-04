/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_landing_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/landing-page-load.js */ \"./src/modules/landing-page-load.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n\n\n\n\nvar content = document.getElementById(\"content\");\n\nwindow.addEventListener(\"load\", () => {\n  (0,_modules_landing_page_load_js__WEBPACK_IMPORTED_MODULE_0__.homepage)();\n\n  var menuLink = document.getElementById(\"menu-link\");\n  var contactLink = document.getElementById(\"contact-link\");\n  var toggleLinks = 0;\n\n  menuLink.addEventListener(\"click\", () => {\n    if (toggleLinks != \"menupage\") {\n      (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)();\n      toggleLinks = \"menupage\";\n    }\n  });\n\n  contactLink.addEventListener(\"click\", () => {\n    if (toggleLinks != \"contactpage\") {\n      (0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)();\n      toggleLinks = \"contactpage\";\n    }\n  });\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = () => {\n  var contactDiv = document.createElement(\"div\");\n  var form = document.createElement(\"form\");\n  var formh1 = document.createElement(\"h1\");\n  var formDiv = document.createElement(\"div\");\n  var inputEmail = document.createElement(\"input\");\n  var inputSub = document.createElement(\"input\");\n\n  formh1.innerText = \"SIGN UP FOR FOOD UPDATES\";\n  inputEmail.setAttribute(\"type\", \"email\");\n  inputEmail.setAttribute(\"placeholder\", \"Enter your email\");\n  inputSub.setAttribute(\"type\", \"submit\");\n\n  formDiv.appendChild(inputEmail);\n  formDiv.appendChild(inputSub);\n\n  form.appendChild(formh1);\n  form.appendChild(formDiv);\n\n  var p1 = document.createElement(\"p\");\n  var p2 = document.createElement(\"p\");\n  p1.innerText = \"221B Baker Street\";\n  p2.innerText = \"344-5345-4554\";\n\n  contactDiv.appendChild(form);\n  contactDiv.appendChild(p1);\n  contactDiv.appendChild(p2);\n  contactDiv.id = \"contact-div\";\n\n  var nav = document.querySelector(\"nav\");\n  var foot = document.querySelector(\"footer\");\n  var homediv = document.getElementById(\"home\");\n  var menuDiv = document.getElementById(\"menu\");\n\n  if (content.contains(homediv)) {\n    content.removeChild(homediv);\n  }\n  if (content.contains(menuDiv)) {\n    content.removeChild(menuDiv);\n  }\n\n  content.appendChild(nav);\n  content.appendChild(contactDiv);\n  content.appendChild(foot);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/landing-page-load.js":
/*!******************************************!*\
  !*** ./src/modules/landing-page-load.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homepage\": () => (/* binding */ homepage)\n/* harmony export */ });\nconst homepage = () => {\n  //nav bar\n  var navBar = document.createElement(\"nav\");\n  var navSpan1 = document.createElement(\"span\");\n  var navSpan2 = document.createElement(\"span\");\n  var navlink1 = document.createElement(\"a\");\n  var navlink2 = document.createElement(\"a\");\n  var navlink3 = document.createElement(\"a\");\n\n  navlink1.innerText = \"Home\";\n  navlink1.setAttribute(\"href\", \"./index.html\");\n  navlink1.id = \"home-link\";\n\n  navlink2.innerText = \"Menu\";\n  navlink2.setAttribute(\"href\", \"#\");\n  navlink2.id = \"menu-link\";\n\n  navlink3.innerText = \"Contact Us\";\n  navlink3.setAttribute(\"href\", \"#\");\n  navlink3.id = \"contact-link\";\n\n  navSpan2.appendChild(navlink1);\n  navSpan2.appendChild(navlink2);\n  navSpan2.appendChild(navlink3);\n  navSpan2.classList.add(\"nav-links\");\n  navSpan1.classList.add(\"logo-con\");\n\n  navBar.appendChild(navSpan1);\n  navBar.appendChild(navSpan2);\n  navBar.id = \"nav-bar\";\n\n  //banner\n  var homediv = document.createElement(\"div\");\n  var h1 = document.createElement(\"h1\");\n\n  homediv.id = \"home\";\n  h1.innerHTML = `Welcome to G's. We've been expecting you. <i class=\"fas fa-fish\"></i>`;\n  homediv.appendChild(h1);\n\n  //footer\n  var foot = document.createElement(\"footer\");\n  var footP = document.createElement(\"p\");\n  var footSpan = document.createElement(\"span\");\n\n  footP.innerHTML = `&copy; Copyright . All rights reserved`;\n  footSpan.innerHTML = `<a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a>\n                        <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\n                        <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>`;\n\n  foot.appendChild(footP);\n  foot.appendChild(footSpan);\n\n  //complete webpage\n  content.appendChild(navBar);\n  content.appendChild(homediv);\n  content.appendChild(foot);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/landing-page-load.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nvar menuArray = [\n  {\n    src: \"../src/assets/poutine-fries-gravy-cheese.jpeg\",\n    heading: \"Poutine\",\n  },\n  {\n    src: \"../src/assets/49512933098_453b86d005_o.jpeg\",\n    heading: \"Loaded Tater Tots\",\n  },\n  {\n    src: \"../src/assets/brooke-lark-UU8sNutRppQ-unsplash.jpeg\",\n    heading: \"Loaded Waffles\",\n  },\n  {\n    src: \"../src/assets/klara-kulikova-QATxlTPJImo-unsplash.jpeg\",\n    heading: \"Pizza Autentica\",\n  },\n  {\n    src: \"../src/assets/antonio-mendes-i5hzQrNBbR0-unsplash.jpeg\",\n    heading: \"Fish & Chips\",\n  },\n  {\n    src: \"../src/assets/vera-davidova-XRcwELmjLgs-unsplash.jpeg\",\n    heading: \"Steak Frites\",\n  },\n  {\n    src: \"../src/assets/alexandra-mendivil-5sD2TgDZOxA-unsplash.jpeg\",\n    heading: \"Chilaquiles Rojos\",\n  },\n  {\n    src: \"../src/assets/shardar-tarikul-islam-X1Wun0nCHOc-unsplash.jpeg\",\n    heading: \"Milkshake\",\n  },\n];\n\nconst menu = () => {\n  var menuDiv = document.createElement(\"div\");\n  var menuh1 = document.createElement(\"h1\");\n  var gridmenu = document.createElement(\"div\");\n\n  menuh1.innerText = \"CHECK OUT OUR SPECIALS\";\n  menuDiv.appendChild(menuh1);\n\n  for (var i = 0; i < menuArray.length; i++) {\n    var menutile = document.createElement(\"div\");\n    var img = document.createElement(\"img\");\n    var imgh2 = document.createElement(\"h2\");\n\n    img.setAttribute(\"src\", menuArray[i].src);\n    imgh2.innerText = menuArray[i].heading.toUpperCase();\n\n    menutile.appendChild(img);\n    menutile.appendChild(imgh2);\n    menutile.classList.add(\"menu-tile\");\n    gridmenu.appendChild(menutile);\n  }\n  gridmenu.id = \"grid-menu\";\n  menuDiv.appendChild(gridmenu);\n  menuDiv.id = \"menu\";\n\n  var nav = document.querySelector(\"nav\");\n  var foot = document.querySelector(\"footer\");\n  var homediv = document.getElementById(\"home\");\n  var contactDiv = document.getElementById(\"contact-div\");\n\n  if (content.contains(homediv)) {\n    content.removeChild(homediv);\n  }\n  if (content.contains(contactDiv)) {\n    content.removeChild(contactDiv);\n  }\n\n  content.appendChild(nav);\n  content.appendChild(menuDiv);\n  content.appendChild(foot);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;