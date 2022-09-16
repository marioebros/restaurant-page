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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n  const contentDiv = document.querySelector(\"#content\");\n\n  // Remove any existing DOM children, if present\n  contentDiv.replaceChildren();\n\n  //DOM for Heading\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"Welcome to G's\";\n  heading.classList.add(\"landing-title\");\n  contentDiv.appendChild(heading);\n\n  // DOM for phoneImage\n  const phoneImage = document.createElement(\"img\");\n  phoneImage.classList.add(\"image\");\n  phoneImage.src = \"../src/assets/phone-classic.svg\";\n  phoneImage.alt = \"Phone Icon\";\n  contentDiv.appendChild(phoneImage);\n\n  // DOM for p tag for phoneImage\n  const para1PhoneImage = document.createElement(\"p\");\n  para1PhoneImage.classList.add(\"contact-copy\");\n  para1PhoneImage.textContent = \"Call us!\";\n  contentDiv.appendChild(para1PhoneImage);\n\n  // DOM for emailImage\n  const email = document.createElement(\"img\");\n  email.classList.add(\"image\");\n  email.src = \"../src/assets/email.svg\";\n  email.alt = \"Email Icon\";\n  contentDiv.appendChild(email);\n\n  // DOM for p tag for emailImage\n  const para2EmailImage = document.createElement(\"p\");\n  para2EmailImage.classList.add(\"contact-copy\");\n  para2EmailImage.textContent = \"Email us at reserve@gs.com\";\n  contentDiv.appendChild(para2EmailImage);\n\n  // DOM for addressImage\n  const topImage = document.createElement(\"img\");\n  topImage.classList.add(\"image\");\n  topImage.src = \"../src/assets/map-marker.svg\";\n  topImage.alt = \"Map Icon\";\n  contentDiv.appendChild(topImage);\n\n  // DOM for p tag for addressImage\n  const para3AddressImage = document.createElement(\"p\");\n  para3AddressImage.classList.add(\"contact-copy\");\n  para3AddressImage.textContent = \"Our address us: !\";\n  contentDiv.appendChild(para3AddressImage);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landing_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page-load.js */ \"./src/landing-page-load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n(0,_landing_page_load_js__WEBPACK_IMPORTED_MODULE_0__.landingPageLoad)();\n\n// Tab Switching Module\nlet tabSwitchingModule = (function () {\n  const homeTab = document.querySelector(\".home\");\n  homeTab.addEventListener(\"click\", _landing_page_load_js__WEBPACK_IMPORTED_MODULE_0__.landingPageLoad);\n\n  const menuTab = document.querySelector(\".menu\");\n  menuTab.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__.menu);\n\n  const contactTab = document.querySelector(\".contact\");\n  contactTab.addEventListener(\"click\", _contact_js__WEBPACK_IMPORTED_MODULE_2__.contact);\n})();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/landing-page-load.js":
/*!**********************************!*\
  !*** ./src/landing-page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"landingPageLoad\": () => (/* binding */ landingPageLoad)\n/* harmony export */ });\nfunction landingPageLoad() {\n  const contentDiv = document.querySelector(\"#content\");\n\n  // Remove any existing DOM children, if present\n  contentDiv.replaceChildren();\n\n  //DOM for Heading\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"Welcome to G's\";\n  heading.classList.add(\"landing-title\");\n  contentDiv.appendChild(heading);\n\n  const mainPic = document.createElement(\"img\");\n  mainPic.classList.add(\"image\");\n  mainPic.src = \"../src/assets/kayleigh-harrington-yhn4okt6ci0-unsplash.jpeg\";\n  mainPic.alt = \"Image of G's Restaurant\";\n  contentDiv.appendChild(mainPic);\n\n  const para1 = document.createElement(\"p\");\n  para1.classList.add(\"landing-page-copy\");\n  para1.textContent = \"Welcome to G's. We're glad you could make it.\";\n  contentDiv.appendChild(para1);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/landing-page-load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n  const contentDiv = document.querySelector(\"#content\");\n\n  // Remove any existing DOM children, if present\n  contentDiv.replaceChildren();\n}\n\n// DOM for Heading\nconst heading = document.createElement(\"h1\");\nheading.textContent = \"Welcome to G's\";\nheading.classList.add(\"landing-title\");\ncontentDiv.appendChild(heading);\n\n// DOM for poutine\nconst poutine = document.createElement(\"img\");\npoutine.classList.add(\"image\");\npoutine.src = \"../src/assets/\";\npoutine.alt = \"Image of G's Poutine\";\ncontentDiv.appendChild(poutine);\n\n// DOM for p tag for poutine\nconst para1Poutine = document.createElement(\"p\");\npara1Poutine.classList.add(\"menu-copy\");\npara1Poutine.textContent =\n  \"Healthy portions of hot & gooey cheese curds and gravy topping a mountain of soft and crispy fries.\";\ncontentDiv.appendChild(para1Poutine);\n\n// DOM for loadedTots\nconst loadedTots = document.createElement(\"img\");\nloadedTots.classList.add(\"image\");\nloadedTots.src = \"../src/assets/\";\nloadedTots.alt = \"Image of G's Loaded Tots\";\ncontentDiv.appendChild(loadedTots);\n\n// DOM for p tag for loadedTots\nconst para1LoadedTots = document.createElement(\"p\");\npara1LoadedTots.classList.add(\"menu-copy\");\npara1LoadedTots.textContent =\n  \"Healthy portions of hot & gooey cheese curds and gravy topping a mountain of soft and crispy fries.\";\ncontentDiv.appendChild(para1LoadedTots);\n\n// DOM for loadedWaffles\nconst loadedWaffles = document.createElement(\"img\");\nloadedWaffles.classList.add(\"image\");\nloadedWaffles.src = \"../src/assets/\";\nloadedWaffles.alt = \"Image of G's Loaded Waffles\";\ncontentDiv.appendChild(loadedWaffles);\n\n// DOM for p tag for loadedWaffles\nconst para1LoadedWaffles = document.createElement(\"p\");\npara1LoadedWaffles.classList.add(\"menu-copy\");\npara1LoadedWaffles.textContent =\n  \"Healthy portions of hot & gooey cheese curds and gravy topping a mountain of soft and crispy fries.\";\ncontentDiv.appendChild(para1LoadedWaffles);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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