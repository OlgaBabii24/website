/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_loading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/loading.js */ \"./src/js/loading.js\");\n/* harmony import */ var _js_loading_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_loading_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_letter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/letter.js */ \"./src/js/letter.js\");\n/* harmony import */ var _js_letter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_letter_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/script.js */ \"./src/js/script.js\");\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_script_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\n\n//# sourceURL=webpack://portfolio/./src/app.js?");

/***/ }),

/***/ "./src/js/letter.js":
/*!**************************!*\
  !*** ./src/js/letter.js ***!
  \**************************/
/***/ (() => {

eval("ScrollReveal().reveal('.what-we-do',{ delay: 400 });\r\nScrollReveal().reveal('.what-we-do',{ duration: 2000 });\r\nScrollReveal().reveal('.portfolio',{ delay: 400 });\r\nScrollReveal().reveal('.portfolio',{ duration: 2000 });\r\nScrollReveal().reveal('.testimonials',{ delay: 400 });\r\nScrollReveal().reveal('.testimonials',{ duration: 2000 });\r\nScrollReveal().reveal('.more',{ delay: 400 });\r\nScrollReveal().reveal('.more',{ duration: 2000 });\r\n\r\n\r\n\r\n\r\nfunction animateWord(word){\r\n    let text = word.dataset.text;\r\n    text.split(' ').forEach((letter,ind) => {\r\n    let div = document.createElement('div');\r\n    div.innerText = letter;\r\n    setTimeout(()=> word.append(div),ind*600);\r\n  })\r\n}\r\n\r\nconst word = document.querySelector('.word');\r\nanimateWord(word);\r\n\r\nfunction animateWordTwo(wordsTwo){\r\n    let textTwo = wordsTwo.dataset.text;\r\n    textTwo.split(' ').forEach((letterTwo,ind) => {\r\n    let div = document.createElement('div');\r\n    div.innerText = letterTwo;\r\n    setTimeout(()=> wordsTwo.append(div), ind*600);\r\n  })\r\n}\r\n\r\nconst wordsTwo = document.querySelector('.wordsTwo');\r\n\r\nsetTimeout(() => {\r\n    animateWordTwo(wordsTwo);;\r\n}, \"150\");\r\n\r\n\r\nfunction animatephrase(phrase){\r\n    let phraseText = phrase.dataset.text;\r\n    phraseText.split('  ').forEach((letterPhrase,ind) => {\r\n        let p = document.createElement('p');\r\n        p.innerText = letterPhrase;\r\n        setTimeout(()=> phrase.append(p), ind*200);\r\n    })\r\n}\r\n\r\nconst phrase = document.querySelector('.phrase');\r\nsetTimeout(() => {\r\n    animatephrase(phrase);\r\n}, \"2000\");\r\n\r\n\r\nconst btnContact = document.getElementById('btnCont');\r\n\r\nsetTimeout(() => {\r\n    btnContact.style.opacity = 1;\r\n}, \"3000\");\r\n\r\nconst pictureLeft = document.querySelector('.picture-left');\r\nconst pictureRight = document.querySelector('.picture-right');\r\n\r\nsetTimeout(() => {\r\n    pictureLeft.style.opacity = 1;\r\n    pictureRight.style.opacity = 1;\r\n}, \"5000\");\r\n\r\n\r\n// Slider\r\n\r\nlet slides = document.querySelector('.slider');\r\nslides.style.display = 'flex';\r\nslides.style.flexDirection = 'row';\r\nslides.style.flexWrap = 'nowrap';\r\nslides.style.justifyContent = 'center';\r\n\r\nlet buttonRight = document.getElementById('buttonR');\r\nlet slidesAll = document.querySelectorAll('.slide');\r\nlet i = 0;\r\nlet y = 0;\r\nlet position = 0;\r\n\r\nbuttonRight.addEventListener('click', function() {\r\n    i = position + 1;\r\n    if (i >= slidesAll.length) {\r\n        slidesAll[i-1].classList.remove('block');\r\n        i = 0;\r\n        slidesAll[i].classList.add('block');\r\n        position = 0;\r\n    } else {\r\n        slidesAll[i-1].classList.remove('block');\r\n        slidesAll[i].classList.add('block');\r\n        position = i;\r\n    }\r\n    console.log(position);\r\n});\r\n\r\n\r\nlet buttonLeft = document.getElementById('buttonL');\r\n\r\nbuttonLeft.addEventListener('click', function() {\r\n    y = position - 1;\r\n    if (y < 0) {\r\n        slidesAll[y+1].classList.remove('block');\r\n        y = slidesAll.length - 1;\r\n        slidesAll[y].classList.add('block');\r\n        position = slidesAll.length - 1;\r\n    } else {\r\n        slidesAll[y+1].classList.remove('block');\r\n        slidesAll[y].classList.add('block');\r\n        position = y;\r\n    }\r\n    console.log(position);\r\n});\n\n//# sourceURL=webpack://portfolio/./src/js/letter.js?");

/***/ }),

/***/ "./src/js/loading.js":
/*!***************************!*\
  !*** ./src/js/loading.js ***!
  \***************************/
/***/ (() => {

eval("\r\ndocument.addEventListener('DOMContentLoaded', function(event) {\r\n\tconsole.log('DOM fully loaded');\r\n});\r\n\r\nwindow.addEventListener('load', function() {\r\n\tconst loader = document.querySelector('.wrapper');\r\n\tloader.classList.add('hidden');\r\n});\n\n//# sourceURL=webpack://portfolio/./src/js/loading.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("let header = document.getElementById('shopifySpan');\r\n\r\nheader.append(\"<div class='glitch-window'></div>\");\r\n//fill div with clone of real header\r\n$( \"h1.glitched\" ).clone().appendTo( \".glitch-window\" );\n\n//# sourceURL=webpack://portfolio/./src/js/script.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;