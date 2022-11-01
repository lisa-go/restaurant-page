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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Pacifico&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n    scroll-behavior: smooth;\\n}\\n\\nbody {\\n    font-family: 'Ubuntu', sans-serif;\\n    background-color: #040d0c;\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center; \\n}\\n\\n#content {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: center;\\n    margin: 0;\\n    width: 100%;\\n    min-height: 100vh;\\n} \\n\\n.logo {\\n    font-family: 'Pacifico';\\n    font-size: 2.5rem;\\n    color: white;\\n    text-align: center;\\n    line-height: 2rem;\\n}\\n\\n.pHeader {\\n    font-family: 'Pacifico';\\n    font-size: 2rem;\\n    color: #754f4f;\\n}\\n\\n.header {\\n    display: flex;\\n    justify-content: space-around;\\n    width: 100%;\\n    height: fit-content;\\n    gap: 2.5rem;\\n    background-color: #000000da;\\n}\\n\\n.header a {\\n    cursor: pointer;\\n}\\n\\n.linkBar button {\\n    font-family: 'Ubuntu', sans-serif;\\n    font-weight: 500;\\n    font-size: 1.3rem;\\n    border: none;\\n    background: none;\\n    color: #d3d3d3;\\n    cursor: pointer;\\n    padding: 1rem;\\n}\\n\\n.linkBar button:hover {\\n    transition: 1s;\\n    color: white;\\n    background-color: #4141419c;\\n}\\n\\n.main {\\n    display: none;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 8rem;\\n    height: 100vh;\\n}\\n\\n.main .logo {\\n    margin-top: 15%;\\n    background-color: #000000da;\\n    border-radius: 4rem;\\n    padding: 0.7rem 2rem;\\n}\\n\\n.intro {\\n    font-family: 'Pacifico';\\n    font-size: 2rem;\\n    color: #e0e0e0;\\n    background-color: #000000ee;\\n    text-align: center;\\n    padding: 1rem 2rem;\\n    border-radius: 1rem;\\n}\\n\\n.mainBtn {\\n    width: fit-content;\\n    font-family: 'Ubuntu', sans-serif;\\n    font-size: 1.2rem;\\n    color: #dadada;\\n    background-color: rgba(0, 0, 0, 0.473);\\n    padding: 0.5rem 1rem;\\n    border: 1px solid white;\\n    cursor: pointer;\\n}\\n\\n.mainBtn:hover {\\n    transition: 1s;\\n    background-color: rgba(0, 0, 0, 0.918);\\n    color: white;\\n}\\n\\n.menu {\\n    display: none;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 1rem;\\n    background-color: rgba(216, 216, 216, 0.932);\\n    width: 80%;\\n    border-radius: 1rem;\\n    padding: 1rem 0 2rem;\\n    margin: 4rem 0;\\n}\\n\\n.menu .logo {\\n    color: black;\\n}\\n\\n.menu .pHeader {\\n    margin-top: -1.5rem;\\n}\\n\\n.menu .myMicon {\\n    object-fit: contain;\\n    margin-top: -2rem;\\n}\\n\\nmenuS {\\n    display: flex;\\n    flex-direction: column;\\n    width: 70%;\\n    justify-content: space-evenly;\\n    align-items: center;\\n    padding: 0.5rem 1rem 1.5rem;\\n    border: 4px dotted #4b3f3f;\\n    border-radius: 1rem;\\n    gap: 1rem;\\n}\\n\\nmHeader {\\n    font-family: 'Pacifico';\\n    font-size: 1.6rem;\\n    color: #4b3f3f;\\n}\\n\\nmenuItem {\\n    display: flex;\\n    width: 90%;\\n    justify-content: space-between;\\n}\\n\\nmenuText {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n}\\n\\nmenuDes {\\n    color: #4b3f3f;\\n    font-size: 0.8rem;\\n    padding-left: 1rem;\\n}\\n\\nchoice {\\n    font-size: 0.9rem;\\n    padding-left: 1.5rem;\\n    color: #b88d8d;\\n    font-weight: 500;\\n}\\n\\nmenuPrice {\\n    color: #4b4b4b;\\n    padding-left: 3rem;\\n    padding-top: 0.2rem;\\n}\\n\\n.menuPic {\\n    width: 6rem;\\n    height: 4.5rem;\\n    border-radius: 0.5rem;\\n}\\n\\n.menuPic:hover {\\n    transition: 1s;\\n    transform: scale(4);\\n}\\n\\n.reserve {\\n    display: none;\\n    justify-content: flex-start;\\n    align-items: flex-start;\\n    width: 100%;\\n    height: 100vh;\\n}\\n\\n.reserveContainer {\\n    margin: 5% 10%;\\n    width: clamp(400px, 60%, 500px);\\n    background-color: #000000be;\\n    border-radius: 1rem;\\n    padding: 1rem 2rem;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-start;\\n}\\n\\n.rTop {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100%;\\n}\\n\\n.reserve .pHeader {\\n    margin-top: -0.9rem;\\n}\\n\\n.myRicon {\\n    width: 48px;\\n    height: 48px;\\n    margin-top: -0.9rem;\\n}\\n\\nformCont {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    margin: 1rem;\\n}\\n\\nformfield {\\n    width: 100%;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    margin: 0.4rem;\\n}\\n\\nlabel {\\n    color: white;\\n}\\n\\ninput {\\n    font-size: 1rem;\\n    border: none;\\n    padding: 0.3rem 1rem;\\n    width: 200px;\\n    border-radius: 10px;\\n}\\n\\n.formBtn {\\n    width: fit-content;\\n    margin: 2rem 1rem 1rem;\\n    background: none;\\n    border: 2px solid white;\\n    padding: 0.5rem 1rem;\\n    color: #e6e6e6;\\n    font-family: 'Ubuntu', sans-serif;\\n    font-size: 1.1rem;\\n    cursor: pointer;\\n}\\n\\n.formBtn:hover {\\n    background: #000000e1;\\n    color: white;\\n    transition: 1s;\\n}\\n\\nloCont {\\n    height: 90vh;\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 4rem;\\n    background-color: #040d0cde;\\n}\\n\\nloText a {\\n    font-family: 'Pacifico';\\n    font-size: 2.3rem;\\n}\\n\\nloText {\\n    color: white;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 2rem;\\n    font-size: 1.3rem;\\n}\\n\\nloText .goTop{\\n    font-family: 'Ubuntu';\\n    font-size: 1.1rem;\\n    border-bottom: 1px solid #b88d8d;\\n    letter-spacing: 0.1rem;\\n}\\n\\nfooter {\\n    width: 100%;\\n    padding: 0.5rem 0;\\n    margin-top: 2rem;\\n    background-color: black;\\n    color: white;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 0.5rem;\\n}\\n\\n.filter-bw {\\n    filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(350deg) brightness(103%) contrast(101%);\\n}\\n\\na {\\n    color: inherit;\\n    text-decoration: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icon.svg */ \"./src/images/icon.svg\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _reserve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reserve */ \"./src/reserve.js\");\n/* harmony import */ var _images_restaurant_kristian_angelo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/restaurant-kristian-angelo-unsplash.jpg */ \"./src/images/restaurant-kristian-angelo-unsplash.jpg\");\n/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/github.svg */ \"./src/images/github.svg\");\n\n\n\n\n\n\n\nconst content = document.querySelector('#content');\n\n//* header creation *//\nconst header = document.createElement('div');\nheader.classList.add('header');\ncontent.appendChild(header);\n\n  //* icon *//\n  const myIcon = new Image();\n  myIcon.src = _images_icon_svg__WEBPACK_IMPORTED_MODULE_1__;\n  myIcon.classList.add('filter-bw');\n  myIcon.style.objectFit = 'contain';\n  myIcon.onclick = homePage;\n  const topLink = document.createElement('a');\n  topLink.id = 'top';\n  header.appendChild(topLink);\n  topLink.appendChild(myIcon);\n\n  //* button bar creation *//\n  const buttonBar = document.createElement('div');\n  buttonBar.classList.add('linkBar');\n  header.appendChild(buttonBar);\n\n    //* creating the buttons *//\n    const btn1 = document.createElement('button');\n    btn1.classList.add('link');\n    btn1.textContent = 'Home';\n    btn1.onclick = homePage;\n    buttonBar.appendChild(btn1);\n\n    const btn2 = document.createElement('button');\n    btn2.classList.add('link');\n    btn2.textContent = 'Menu';\n    btn2.onclick = _menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    buttonBar.appendChild(btn2);\n\n    const btn3 = document.createElement('button');\n    btn3.classList.add('link');\n    btn3.textContent = 'Reservations';\n    btn3.onclick = _reserve__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n    buttonBar.appendChild(btn3);\n\n    const btn4 = document.createElement('button');\n    btn4.classList.add('link');\n    buttonBar.appendChild(btn4);\n        const btn4link = document.createElement('a');\n        btn4link.href = '#location';\n        btn4link.textContent = 'Location';\n        btn4.appendChild(btn4link);\n\n\n//* main page* //\nfunction mainPage() {\n  document.body.style.background = 'url(' + _images_restaurant_kristian_angelo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ + ')';\n  document.body.style.backgroundSize = '1900px';\n  document.body.style.backgroundRepeat = 'no-repeat';\n  document.body.style.backgroundColor = '#040d0c';\n  document.body.style.backgroundAttachment = 'fixed';\n\nconst main = document.createElement('div');\nmain.classList.add('main');\ncontent.appendChild(main);\nmain.style.display = 'flex';\n\n  //* logo creation *//\n  const logo = document.createElement('div');\n  logo.classList.add('logo');\n  logo.textContent = 'Hometown Cravings';\n  main.appendChild(logo);\n\n  //* intro piece *//\n  const intro = document.createElement('div');\n  intro.classList.add('intro');\n  intro.innerHTML = \n  'Get a taste of authentic South East Asian cuisine,' + '<br>' +\n  ' a taste of home away from home.';\n  main.appendChild(intro);\n \n\n  //* reservation button *//\n  const mainBtn = document.createElement('button');\n  mainBtn.classList.add('mainBtn');\n  mainBtn.textContent = 'Make Your Reservation Now!';\n  mainBtn.onclick = _reserve__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  main.appendChild(mainBtn);\n}\n\n//* clicking on home page *//\nfunction homePage() {\n  document.body.style.background = 'url(' + _images_restaurant_kristian_angelo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ + ')';\n  document.body.style.backgroundSize = '1900px';\n  document.body.style.backgroundRepeat = 'no-repeat';\n  document.body.style.backgroundColor = '#040d0c';\n  document.body.style.backgroundAttachment = 'fixed';\n\n  content.removeChild(content.children[1]);\n  mainPage();\n}\n\n//* location creation *//\nconst loCont = document.createElement('loCont')\ndocument.body.appendChild(loCont);\nconst loText = document.createElement('loText');\nloCont.appendChild(loText);\nconst loHeader = document.createElement('a');\nloHeader.id = 'location';\nloHeader.textContent = 'Location Details';\nloText.appendChild(loHeader);\nconst loPh = document.createElement('div');\nloPh.textContent = 'Phone: 012 - 345 - 6789';\nloText.appendChild(loPh);\nconst loAdd = document.createElement('div');\nloAdd.textContent = 'Address: Houston, TX'\nloText.appendChild(loAdd);\nconst goTop = document.createElement('a');\ngoTop.classList.add('goTop');\ngoTop.href = '#top';\ngoTop.textContent = ' ^ Go to top';\nloText.appendChild(goTop);\n\nconst loMap = document.createElement('iframe');\nloMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d886188.2397363144!2d-95.96171784552766!3d29.815995521526638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1667270394329!5m2!1sen!2sus';\nloMap.width = '400px';\nloMap.height = '260px';\nloCont.appendChild(loMap);\n\n\n  //* footer creation *//\n  const footer = document.createElement('footer');\n  const giticon = new Image();\n  giticon.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_5__;\n  giticon.classList.add('filter-bw');\n  document.body.appendChild(footer);\n  footer.appendChild(giticon);\n  const footerText = document.createElement('a');\n  footerText.href = 'https://github.com/lisa-go';\n  footerText.textContent = 'Website by Lisa';\n  footer.appendChild(footerText);\n\n\nmainPage();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant_menu.svg */ \"./src/images/restaurant_menu.svg\");\n/* harmony import */ var _images_summer_roll_alexander_sinn_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/summer_roll-alexander-sinn-unsplash.jpg */ \"./src/images/summer_roll-alexander-sinn-unsplash.jpg\");\n/* harmony import */ var _images_dumpling_kimia_zarifi_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/dumpling-kimia-zarifi-unsplash.jpg */ \"./src/images/dumpling-kimia-zarifi-unsplash.jpg\");\n/* harmony import */ var _images_bbq_noodles_wonton_soup_luke_lung_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/bbq_noodles_wonton_soup-luke-lung-unsplash.jpg */ \"./src/images/bbq_noodles_wonton_soup-luke-lung-unsplash.jpg\");\n/* harmony import */ var _images_grilled_noodle_bowl_loes_klinker_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/grilled_noodle_bowl-loes-klinker-unsplash.jpg */ \"./src/images/grilled_noodle_bowl-loes-klinker-unsplash.jpg\");\n/* harmony import */ var _images_coffee_demi_deherrera_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/coffee-demi-deherrera-unsplash.jpg */ \"./src/images/coffee-demi-deherrera-unsplash.jpg\");\n/* harmony import */ var _images_milktea_rachel_mcdermott_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/milktea-rachel-mcdermott-unsplash.jpg */ \"./src/images/milktea-rachel-mcdermott-unsplash.jpg\");\n/* harmony import */ var _images_restaurant_kristian_angelo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/restaurant-kristian-angelo-unsplash.jpg */ \"./src/images/restaurant-kristian-angelo-unsplash.jpg\");\n\n\n\n\n\n\n\n\n\n\nconst menuPage = () => {\n  document.body.style.background = 'url(' + _images_restaurant_kristian_angelo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__ + ')';\n  document.body.style.backgroundSize = '1900px';\n  document.body.style.backgroundRepeat = 'no-repeat';\n  document.body.style.backgroundColor = '#040d0c';\n  document.body.style.backgroundAttachment = 'fixed';\n    content.removeChild(content.children[1]);\n    \n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n    content.appendChild(menu);\n    menu.style.display = 'flex';\n    \n      //* logo creation *//\n      const logo = document.createElement('div');\n      logo.classList.add('logo');\n      logo.textContent = 'Hometown Cravings';\n      menu.appendChild(logo);\n\n      //* header creation *//\n      const pHeaderM = document.createElement('pHeader');\n      pHeaderM.classList.add('pHeader');\n      pHeaderM.textContent = 'Menu';\n      menu.appendChild(pHeaderM);\n\n      //* icon creation *//\n      const myMicon = new Image();\n      myMicon.src = _images_restaurant_menu_svg__WEBPACK_IMPORTED_MODULE_0__;\n      myMicon.classList.add('myMicon');\n      menu.appendChild(myMicon);\n    \n      //* Menu Section 1 Appetizers *//\n      const menuS1 = document.createElement('menuS');\n      menu.appendChild(menuS1);\n\n        //* Appetizer header *//\n        const mHeader1 = document.createElement('mHeader');\n        mHeader1.textContent = 'Appetizers';\n        menuS1.appendChild(mHeader1);\n\n          //* Menu item container *//\n          const menuItema1 = document.createElement('menuItem');\n          menuS1.appendChild(menuItema1);\n\n            //* Appetizer 1 *//\n            const app1Text = document.createElement('menuText');\n            menuItema1.appendChild(app1Text);\n\n              //* Appetizer 1 Name *//\n              const app1Name = document.createElement('menuName');\n              app1Name.textContent = 'Vietnamese Summer Rolls';\n              app1Text.appendChild(app1Name);\n\n              //* Appetizer 1 Description *//\n              const app1Des = document.createElement('menuDes');\n              app1Des.textContent = \n              'Vietnamese Rice Paper Rolls wrapped with rice noodles, various herbs, dried onions and your choice of ';\n              app1Text.appendChild(app1Des);\n\n              //* Appetizer 1 Choices *//\n              const app1Choice = document.createElement('choice');\n              app1Choice.textContent = 'shrimp, chicken, or beef';\n              app1Text.appendChild(app1Choice)\n\n              //* Appetizer 1 Price *//\n              const app1Price = document.createElement('menuPrice');\n              app1Price.textContent = '$6.00';\n              app1Text.appendChild(app1Price);\n\n            //* Appetizer 1 Picture *//\n            const app1pic = new Image();\n            app1pic.src = _images_summer_roll_alexander_sinn_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__;\n            app1pic.classList.add('menuPic');\n            menuItema1.appendChild(app1pic);\n\n\n          //* Menu item container *//\n          const menuItema2 = document.createElement('menuItem');\n          menuS1.appendChild(menuItema2);\n\n            //* Appetizer 2 *//\n            const app2Text = document.createElement('menuText');\n            menuItema2.appendChild(app2Text);\n\n              //* Appetizer 2 Name *//\n              const app2Name = document.createElement('menuName');\n              app2Name.textContent = 'Dumplings';\n              app2Text.appendChild(app2Name);\n\n              //* Appetizer 2 Description *//\n              const app2Des = document.createElement('menuDes');\n              app2Des.textContent = \n              'Chinese dumplings wrapped with chives, cilantro and your choice of pork with ';\n              app2Text.appendChild(app2Des);\n\n              //* Appetizer 2 Choices *//\n              const app2Choice = document.createElement('choice');\n              app2Choice.textContent = 'shrimp, or beef';\n              app2Text.appendChild(app2Choice)\n\n              //* Appetizer 2 Price *//\n              const app2Price = document.createElement('menuPrice');\n              app2Price.textContent = '$6.00';\n              app2Text.appendChild(app2Price);\n\n            //* Appetizer 2 Picture *//\n            const app2pic = new Image();\n            app2pic.src = _images_dumpling_kimia_zarifi_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__;\n            app2pic.classList.add('menuPic');\n            menuItema2.appendChild(app2pic);\n\n\n      //* Menu Section 2 Entrée *//\n      const menuS2 = document.createElement('menuS');\n      menu.appendChild(menuS2);\n\n        //* Entrée header *//\n        const mHeader2 = document.createElement('mHeader');\n        mHeader2.textContent = 'Entrée';\n        menuS2.appendChild(mHeader2);\n\n          //* Menu item container *//\n          const menuIteme1 = document.createElement('menuItem');\n          menuS2.appendChild(menuIteme1);\n\n            //* Entrée 1 *//\n            const ent1Text = document.createElement('menuText');\n            menuIteme1.appendChild(ent1Text);\n\n              //* Entrée 1 Name *//\n              const ent1Name = document.createElement('menuName');\n              ent1Name.textContent = 'BBQ Noodles';\n              ent1Text.appendChild(ent1Name);\n\n              //* Entrée 1 Description *//\n              const ent1Des = document.createElement('menuDes');\n              ent1Des.textContent = \n              'Soy sauced noodles with Wonton Soup, additional rice and your choice of ';\n              ent1Text.appendChild(ent1Des);\n\n              //* Entrée 1 Choices *//\n              const ent1Choice = document.createElement('choice');\n              ent1Choice.textContent = 'crispy roast pork, roast duck, or bbq pork';\n              ent1Text.appendChild(ent1Choice)\n\n              //* Entrée 1 Price *//\n              const ent1Price = document.createElement('menuPrice');\n              ent1Price.textContent = '$12.00';\n              ent1Text.appendChild(ent1Price);\n\n            //* Entrée 1 Picture *//\n            const ent1pic = new Image();\n            ent1pic.src = _images_bbq_noodles_wonton_soup_luke_lung_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__;\n            ent1pic.classList.add('menuPic');\n            menuIteme1.appendChild(ent1pic);\n\n\n          //* Menu item container *//\n          const menuIteme2 = document.createElement('menuItem');\n          menuS2.appendChild(menuIteme2);\n\n            //* Entrée 2 *//\n            const ent2Text = document.createElement('menuText');\n            menuIteme2.appendChild(ent2Text);\n\n              //* Entrée 2 Name *//\n              const ent2Name = document.createElement('menuName');\n              ent2Name.textContent = 'Grilled Noodle Bowl';\n              ent2Text.appendChild(ent2Name);\n\n              //* Entrée 2 Description *//\n              const ent2Des = document.createElement('menuDes');\n              ent2Des.textContent = \n              'Vietnamese noodle bowl with cilantro, bean sprouts, carrots, thai basil, cucumbers topped with our house special fish sauce and your choice of lemongrass-grilled ';\n              ent2Text.appendChild(ent2Des);\n\n              //* Entrée 2 Choices *//\n              const ent2Choice = document.createElement('choice');\n              ent2Choice.textContent = 'chicken, pork, or beef';\n              ent2Text.appendChild(ent2Choice)\n\n              //* Entrée 2 Price *//\n              const ent2Price = document.createElement('menuPrice');\n              ent2Price.textContent = '$12.00';\n              ent2Text.appendChild(ent2Price);\n\n            //* Entrée 2 Picture *//\n            const ent2pic = new Image();\n            ent2pic.src = _images_grilled_noodle_bowl_loes_klinker_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__;\n            ent2pic.classList.add('menuPic');\n            menuIteme2.appendChild(ent2pic);\n\n\n\n      //* Menu Section 3 Drinks *//\n      const menuS3 = document.createElement('menuS');\n      menu.appendChild(menuS3);\n\n        //* Drinks header *//\n        const mHeader3 = document.createElement('mHeader');\n        mHeader3.textContent = 'Drinks';\n        menuS3.appendChild(mHeader3);\n\n          //* Menu item container *//\n          const menuItemd1 = document.createElement('menuItem');\n          menuS3.appendChild(menuItemd1);\n\n            //* Drink 1 *//\n            const dr1Text = document.createElement('menuText');\n            menuItemd1.appendChild(dr1Text);\n\n              //* Drink 1 Name *//\n              const dr1Name = document.createElement('menuName');\n              dr1Name.textContent = 'Vietnamese Coffee';\n              dr1Text.appendChild(dr1Name);\n\n              //* Drink 1 Description *//\n              const dr1Des = document.createElement('menuDes');\n              dr1Des.textContent = \n              'Dripped Vietnamese coffee, served with your choice of ';\n              dr1Text.appendChild(dr1Des);\n\n              //* Drink 1 Choices *//\n              const dr1Choice = document.createElement('choice');\n              dr1Choice.textContent = 'hot or iced';\n              dr1Text.appendChild(dr1Choice)\n\n              //* Drink 1 Price *//\n              const dr1Price = document.createElement('menuPrice');\n              dr1Price.textContent = '$5.00';\n              dr1Text.appendChild(dr1Price);\n\n            //* Drink 1 Picture *//\n            const dr1pic = new Image();\n            dr1pic.src = _images_coffee_demi_deherrera_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__;\n            dr1pic.classList.add('menuPic');\n            menuItemd1.appendChild(dr1pic);\n\n\n          //* Menu item container *//\n          const menuItemd2 = document.createElement('menuItem');\n          menuS3.appendChild(menuItemd2);\n\n            //* Drink 2 *//\n            const dr2Text = document.createElement('menuText');\n            menuItemd2.appendChild(dr2Text);\n\n              //* Drink 2 Name *//\n              const dr2Name = document.createElement('menuName');\n              dr2Name.textContent = 'Milk Tea';\n              dr2Text.appendChild(dr2Name);\n\n              //* Drink 2 Description *//\n              const dr2Des = document.createElement('menuDes');\n              dr2Des.textContent = \n              'Milk tea with your choice of toppings ';\n              dr2Text.appendChild(dr2Des);\n\n              //* Drink 2 Choices *//\n              const dr2Choice = document.createElement('choice');\n              dr2Choice.textContent = 'boba, jelly / warm or iced';\n              dr2Text.appendChild(dr2Choice)\n\n              //* Drink 2 Price *//\n              const dr2Price = document.createElement('menuPrice');\n              dr2Price.textContent = '$5.00';\n              dr2Text.appendChild(dr2Price);\n\n            //* Drink 2 Picture *//\n            const dr2pic = new Image();\n            dr2pic.src = _images_milktea_rachel_mcdermott_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__;\n            dr2pic.classList.add('menuPic');\n            menuItemd2.appendChild(dr2pic);\n    }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/reserve.js":
/*!************************!*\
  !*** ./src/reserve.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_reserved_alfred_quartey_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/reserved-alfred-quartey-unsplash.jpg */ \"./src/images/reserved-alfred-quartey-unsplash.jpg\");\n/* harmony import */ var _images_table_restaurant_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/table_restaurant.svg */ \"./src/images/table_restaurant.svg\");\n\n\n\nconst reservePage = () => {\n  document.body.style.background = 'url(' + _images_reserved_alfred_quartey_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ + ')';\n  document.body.style.backgroundSize = '1900px';\n  document.body.style.backgroundRepeat = 'no-repeat';\n  document.body.style.backgroundPosition = 'bottom';\n  document.body.style.backgroundAttachment = 'fixed';\n  document.body.style.backgroundColor = '#040d0c';\n    content.removeChild(content.children[1]);\n\n    const reserve = document.createElement('div');\n    reserve.classList.add('reserve');\n    content.appendChild(reserve);\n    reserve.style.display = 'flex';\n\n    const reCont = document.createElement('div')\n    reCont.classList.add('reserveContainer');\n    reserve.appendChild(reCont);\n\n    //* Top part of div *//\n    const rTop = document.createElement('div')\n    rTop.classList.add('rTop');\n    reCont.appendChild(rTop);\n\n      //* logo creation *//\n      const logo = document.createElement('div');\n      logo.classList.add('logo');\n      logo.textContent = 'Hometown Cravings';\n      rTop.appendChild(logo);\n\n      //* header creation *//\n      const pHeaderR = document.createElement('pHeader');\n      pHeaderR.classList.add('pHeader');\n      pHeaderR.textContent = 'Reservations';\n      rTop.appendChild(pHeaderR);\n\n      //* icon creation *//\n      const myRicon = new Image();\n      myRicon.src = _images_table_restaurant_svg__WEBPACK_IMPORTED_MODULE_1__;\n      myRicon.classList.add('filter-bw');\n      myRicon.classList.add('myRicon');\n      rTop.appendChild(myRicon);\n    \n  //* reservation form creation *//\n  const formCont = document.createElement('formCont');\n  reCont.appendChild(formCont);\n\n    //* field 1 - name *//\n    const field1 = document.createElement('formfield');\n    formCont.appendChild(field1);\n\n    const label1 = document.createElement('label');\n    label1.htmlFor = 'name';\n    label1.textContent = '*Name: ';\n    field1.appendChild(label1);\n\n    const input1 = document.createElement('input');\n    input1.type = 'text';\n    input1.id = 'name';\n    input1.required = 'true';\n    field1.appendChild(input1);\n\n\n    //* field 2 - date time *//\n    const field2 = document.createElement('formfield');\n    formCont.appendChild(field2);\n\n    const label2 = document.createElement('label');\n    label2.htmlFor = 'datetime';\n    label2.textContent = '*Date & Time: ';\n    field2.appendChild(label2);\n\n    const input2 = document.createElement('input');\n    input2.type = 'datetime-local';\n    input2.id = 'datetime';\n    input2.required = 'true';\n    field2.appendChild(input2);\n\n\n    //* field 3 - group size *//\n    const field3 = document.createElement('formfield');\n    formCont.appendChild(field3);\n\n    const label3 = document.createElement('label');\n    label3.htmlFor = 'groupsize';\n    label3.textContent = '*Group Size: ';\n    field3.appendChild(label3);\n\n    const input3 = document.createElement('input');\n    input3.type = 'number';\n    input3.id = 'groupsize';\n    input3.required = 'true';\n    field3.appendChild(input3);\n\n\n    //* field 4 - phone number *//\n    const field4 = document.createElement('formfield');\n    formCont.appendChild(field4);\n\n    const label4 = document.createElement('label');\n    label4.htmlFor = 'phone';\n    label4.textContent = '*Contact Number: ';\n    field4.appendChild(label4);\n\n    const input4 = document.createElement('input');\n    input4.type = 'tel';\n    input4.id = 'phone';\n    input4.required = 'true';\n    field4.appendChild(input4);\n\n    \n    //* submit button *//\n    const formBtn = document.createElement('button');\n    formBtn.classList.add('formBtn');\n    formBtn.type = 'submit';\n    formBtn.textContent = 'Reserve';\n    formCont.appendChild(formBtn);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservePage);\n\n//# sourceURL=webpack://restaurant-page/./src/reserve.js?");

/***/ }),

/***/ "./src/images/bbq_noodles_wonton_soup-luke-lung-unsplash.jpg":
/*!*******************************************************************!*\
  !*** ./src/images/bbq_noodles_wonton_soup-luke-lung-unsplash.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb6de326d3e1c4052b96.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/bbq_noodles_wonton_soup-luke-lung-unsplash.jpg?");

/***/ }),

/***/ "./src/images/coffee-demi-deherrera-unsplash.jpg":
/*!*******************************************************!*\
  !*** ./src/images/coffee-demi-deherrera-unsplash.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e806039a7f828455a455.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/coffee-demi-deherrera-unsplash.jpg?");

/***/ }),

/***/ "./src/images/dumpling-kimia-zarifi-unsplash.jpg":
/*!*******************************************************!*\
  !*** ./src/images/dumpling-kimia-zarifi-unsplash.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7320da3d51b5178c44bd.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/dumpling-kimia-zarifi-unsplash.jpg?");

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f6656510add442acaf6.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/github.svg?");

/***/ }),

/***/ "./src/images/grilled_noodle_bowl-loes-klinker-unsplash.jpg":
/*!******************************************************************!*\
  !*** ./src/images/grilled_noodle_bowl-loes-klinker-unsplash.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d8f55351479313f3c7ff.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/grilled_noodle_bowl-loes-klinker-unsplash.jpg?");

/***/ }),

/***/ "./src/images/icon.svg":
/*!*****************************!*\
  !*** ./src/images/icon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"68d4d84aaffa1487dab0.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icon.svg?");

/***/ }),

/***/ "./src/images/milktea-rachel-mcdermott-unsplash.jpg":
/*!**********************************************************!*\
  !*** ./src/images/milktea-rachel-mcdermott-unsplash.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"537e4fcb3fd7fbcedb08.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/milktea-rachel-mcdermott-unsplash.jpg?");

/***/ }),

/***/ "./src/images/reserved-alfred-quartey-unsplash.jpg":
/*!*********************************************************!*\
  !*** ./src/images/reserved-alfred-quartey-unsplash.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"89c7e31f5d267c13ddbb.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/reserved-alfred-quartey-unsplash.jpg?");

/***/ }),

/***/ "./src/images/restaurant-kristian-angelo-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/images/restaurant-kristian-angelo-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"497d1689005fcbab0710.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/restaurant-kristian-angelo-unsplash.jpg?");

/***/ }),

/***/ "./src/images/restaurant_menu.svg":
/*!****************************************!*\
  !*** ./src/images/restaurant_menu.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ab2d59278494a905cf50.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/restaurant_menu.svg?");

/***/ }),

/***/ "./src/images/summer_roll-alexander-sinn-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/images/summer_roll-alexander-sinn-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4047402c6a3b31a008d4.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/summer_roll-alexander-sinn-unsplash.jpg?");

/***/ }),

/***/ "./src/images/table_restaurant.svg":
/*!*****************************************!*\
  !*** ./src/images/table_restaurant.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e22cbb988cbe0436a80a.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/table_restaurant.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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