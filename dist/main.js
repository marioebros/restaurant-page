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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landing_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page-load.js */ \"./src/landing-page-load.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './menu.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './contact.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n(0,_landing_page_load_js__WEBPACK_IMPORTED_MODULE_0__.landingPageLoad)();\n\n// Tab Switching Module\nlet tabSwitchingModule = (function () {\n  const homeTab = document.querySelector(\".home\");\n  homeTab.addEventListener(\"click\", _landing_page_load_js__WEBPACK_IMPORTED_MODULE_0__.landingPageLoad);\n\n  const menuTab = document.querySelector(\".menu\");\n  menuTab.addEventListener(\"click\", Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './menu.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\n  const contactTab = document.querySelector(\".contact\");\n  contactTab.addEventListener(\"click\", Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './contact.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n})();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/landing-page-load.js":
/*!**********************************!*\
  !*** ./src/landing-page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"landingPageLoad\": () => (/* binding */ landingPageLoad)\n/* harmony export */ });\nfunction landingPageLoad() {\n  const contentDiv = document.querySelector(\"#content\");\n\n  // Remove any existing DOM children, if present\n  contentDiv.replaceChildren();\n\n  //DOM for Heading\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"Welcome to G's\";\n  heading.classList.add(\"landing-title\");\n  contentDiv.appendChild(heading);\n\n  const mainPic = document.createElement(\"img\");\n  mainPic.classList.add(\"image\");\n  mainPic.src = \"../src/assets/kayleigh-harrington-yhn4okt6ci0-unsplash.jpeg\";\n  mainPic.alt = \"Image of G's Restaurant\";\n  contentDiv.appendChild(mainPic);\n\n  const para1 = document.createElement(\"p\");\n  para1.classList.add(\"landing-page-copy\");\n  para1.textContent = \"Welcome to G's. We're glad you could make it.\";\n  contentDiv.appendChild(para1);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/landing-page-load.js?");

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