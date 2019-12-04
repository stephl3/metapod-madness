/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/berry.js":
/*!**********************!*\
  !*** ./src/berry.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _metapod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metapod */ \"./src/metapod.js\");\n\n\n\n\nclass Berry extends _moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(options) {\n    super(options);\n  }\n\n  draw(ctx) {\n    // this.drawShadow(ctx);\n    super.draw(ctx);\n  }\n\n  drawShadow(ctx) {\n    const shadowSX = this.game.dimensionX * (3 / 16);\n    const shadowSY = this.game.dimensionY * (2 / 5);\n    ctx.beginPath();\n    ctx.fillStyle = \"rgba(41, 41, 41, 0.7)\";\n    ctx.ellipse(\n      shadowSX, shadowSY,\n      this.width / 2, this.height / 5,\n      0, Math.PI * 2, false\n    );\n    ctx.fill();\n  }\n\n  move(timeDelta) {\n    if (this.pos[1] < -600) {\n      this.width *= 1.5;\n      this.height *= 1.5;\n      this.vel = [0, 16];\n      switch (this.idx) {\n        case 0:\n          this.pos[0] = this.game.dimensionX * (1 / 8) - 60\n          break;\n        case 1:\n          this.pos[0] = this.game.dimensionX * (3 / 8) - 60\n          break;\n        case 2:\n          this.pos[0] = this.game.dimensionX * (5 / 8) - 60\n          break;\n        case 3:\n          this.pos[0] = this.game.dimensionX * (7 / 8) - 60\n          break;\n        default:\n          break;\n      }\n    }\n    super.move(timeDelta);\n  }\n\n  collideWith(metapod) {\n    if (metapod.hardened) {\n      this.bounce();\n      return true;\n    } else if (!metapod.hardened) {\n      // metapod.absorb();\n      return true;\n    }\n    return false;\n  }\n\n  bounce() {\n\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Berry);\n\n//# sourceURL=webpack:///./src/berry.js?");

/***/ }),

/***/ "./src/boulder.js":
/*!************************!*\
  !*** ./src/boulder.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _metapod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metapod */ \"./src/metapod.js\");\n\n\n\n\nclass Boulder extends _moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(options) {\n    super(options);\n    // this.shadowPos = [\n    //   this.pos[0] + this.width / 2,\n    //   this.pos[1] + this.height * 1.2\n    // ];\n    // this.shadowSize = [this.width / 2, this.height / 5];\n  }\n\n  draw(ctx) {\n    super.draw(ctx);\n  }\n\n  drawShadow(ctx) {\n    const [shadowSX, shadowSY] = this.shadowPos;\n    const [shadowWidth, shadowHeight] = this.shadowSize;\n    ctx.beginPath();\n    ctx.fillStyle = \"rgba(41, 41, 41, 0.7)\";\n    ctx.ellipse(\n      shadowSX, shadowSY,\n      shadowWidth, shadowHeight,\n      0, Math.PI * 2, false\n    );\n    ctx.fill();\n  }\n\n  move(timeDelta) {\n    if (this.pos[1] < -600) {\n      this.width *= 1.5;\n      this.height *= 1.5;\n      this.vel = [0, 16];\n      switch (this.idx) {\n        case 0:\n          this.pos[0] = this.game.dimensionX * (1 / 8) - 60\n          break;\n        case 1:\n          this.pos[0] = this.game.dimensionX * (3 / 8) - 60\n          break;\n        case 2:\n          this.pos[0] = this.game.dimensionX * (5 / 8) - 60\n          break;\n        case 3:\n          this.pos[0] = this.game.dimensionX * (7 / 8) - 60\n          break;\n        default:\n          break;\n      }\n    }\n    super.move(timeDelta);\n  }\n\n  isCollidedWith(otherObject) {\n    super.isCollidedWith(otherObject);\n  }\n\n  collideWith(metapod) {\n    const hardened = this.game.metapodsHardened[metapod.idx];\n    if (hardened) {\n      this.break();\n      return true;\n    } else if (!hardened) {\n      metapod.smash();\n      this.bounce();\n      return true;\n    }\n    return false;\n  }\n\n  break() {\n    this.img = '../images/boulder2.png';\n    window.setTimeout(() => {\n      this.img = '../images/boulder3.png';\n    }, 100);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boulder);\n\n//# sourceURL=webpack:///./src/boulder.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _metapod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metapod */ \"./src/metapod.js\");\n/* harmony import */ var _boulder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boulder */ \"./src/boulder.js\");\n/* harmony import */ var _berry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./berry */ \"./src/berry.js\");\n/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shadow */ \"./src/shadow.js\");\n\n\n\n\n// import Util from './util';\n\n\nclass Game {\n  constructor() {\n    this.dimensionX = 800;\n    this.dimensionY = 600;\n    this.fps = 32;\n\n    this.metapods = [];\n    this.metapodsHardened = [false, false, false, false];\n    this.boulders = [];\n    this.berries = [];\n    this.shadows = [];\n\n\n    this.addShadows();\n    this.addBoulders();\n\n    this.addBoulders = this.addBoulders.bind(this);\n    this.addBerries = this.addBerries.bind(this);\n    this.addShadows = this.addShadows.bind(this);\n    this.draw = this.draw.bind(this);\n    this.step = this.step.bind(this);\n  }\n\n  add(object) {\n    if (object instanceof _metapod__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.metapods.push(object);\n    } else if (object instanceof _boulder__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.boulders.push(object);\n    } else if (object instanceof _berry__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.berries.push(object);\n    } else if (object instanceof _shadow__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n      this.shadows.push(object);\n    } else {\n      throw new Error(\"WOT DIS\");\n    }\n  }\n\n  _randomMetapodImg() {\n    const metapodImgs = ['./images/metapod.png', './images/shiny_metapod.png'];\n    const index = Math.round(Math.random());\n    return metapodImgs[index];\n  }\n\n  addMetapods() {\n    const metapodPositions = [\n      [this.dimensionX * (1 / 8) - 65, this.dimensionY * (3 / 5)],\n      [this.dimensionX * (3 / 8) - 65, this.dimensionY * (3 / 5)],\n      [this.dimensionX * (5 / 8) - 65, this.dimensionY * (3 / 5)],\n      [this.dimensionX * (7 / 8) - 65, this.dimensionY * (3 / 5)]\n    ];\n\n    for (let i = 0; i < 4; i++) {\n      this.add(new _metapod__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        idx: i,\n        img: this._randomMetapodImg(),\n        startPosX: (metapodPositions[i][0]),\n        pos: metapodPositions[i],\n        vel: [0.15, 0],\n        width: 130,\n        height: 130,\n        game: this\n      }));\n    };\n  }\n\n  addBoulders() {\n    const boulderPositions = [\n      [this.dimensionX * (15 / 100), this.dimensionY * (2 / 5)],\n      [this.dimensionX * (35 / 100), this.dimensionY * (2 / 5)],\n      [this.dimensionX * (55 / 100), this.dimensionY * (2 / 5)],\n      [this.dimensionX * (75 / 100), this.dimensionY * (2 / 5)],\n    ];\n\n    for (let i = 0; i < 4; i++) {\n      this.add(new _boulder__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        idx: i,\n        img: 'images/boulder1.png',\n        pos: boulderPositions[i],\n        vel: [0, -12],\n        width: 80,\n        height: 80,\n        game: this\n      }))\n    }\n\n    window.setTimeout(() => {\n      this.addShadows();\n      this.addBerries();\n    }, 1000);\n  }\n\n  addBerries() {\n    const berryPositions = [\n      [this.dimensionX * (15 / 100), this.dimensionY * (2 / 5)],\n      [this.dimensionX * (35 / 100), this.dimensionY * (2 / 5)],\n      [this.dimensionX * (55 / 100), this.dimensionY * (2 / 5)],\n      [this.dimensionX * (75 / 100), this.dimensionY * (2 / 5)],\n    ];\n\n    for (let i = 0; i < 4; i++) {\n      this.add(new _berry__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        idx: i,\n        img: 'images/gold_razz_berry.png',\n        pos: berryPositions[i],\n        vel: [0, -12],\n        width: 80,\n        height: 80,\n        game: this\n      }))\n    }\n\n    // window.setTimeout(() => this.addBoulders(), 1000);\n  }\n\n  addShadows() {\n    const shadowPositions = [\n      [this.dimensionX * (2 / 8) - 40, this.dimensionY * (.52)],\n      [this.dimensionX * (4 / 8) - 80, this.dimensionY * (.52)],\n      [this.dimensionX * (4 / 8) + 80, this.dimensionY * (.52)],\n      [this.dimensionX * (6 / 8) + 40, this.dimensionY * (.52)],\n    ];\n    const shadowVelocities = [\n      [-0.45, 1.4],\n      [-0.18, 1.43],\n      [0.18, 1.43],\n      [0.45, 1.4],\n    ]\n\n    for (let i = 0; i < 4; i++) {\n      this.add(new _shadow__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n        idx: i,\n        img: null,\n        pos: shadowPositions[i],\n        vel: shadowVelocities[i],\n        width: 50,\n        height: 10,\n        game: this\n      }))\n    }\n\n    // window.setTimeout(() => this.addBoulders(), 1000);\n  }\n\n  allObjects() {\n    return [].concat(this.metapods, this.boulders, this.berries, this.shadows);\n  }\n\n  movingObjects() {\n    return [].concat(this.boulders, this.berries);\n  }\n\n  checkCollisions() {\n    const metapods = this.metapods;\n    const movingObjects = this.movingObjects();\n\n    for (let i = 0; i < 4; i++) {\n      let metapod = metapods[i];\n      for (let j = 0; j < movingObjects.length; j++) {\n        let movingObj = movingObjects[j];\n\n        if (movingObj.isCollidedWith(metapod)) {\n          const collision = movingObj.collideWith(metapod);\n          if (collision) return;\n        }\n      }\n    }\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, this.dimensionX, this.dimensionY);\n\n\n    this.shadows.forEach((shadow) => {\n      shadow.draw(ctx);\n    })\n    for (let i = 0; i < 4; i++) {\n      this.metapods[i].harden();\n      this.metapods[i].draw(ctx);\n    }\n    this.movingObjects().forEach((obj) => {\n      obj.draw(ctx);\n    })\n  }\n\n  // MovingObject.prototype.draw = function draw(ctx) {\n  //   ctx.fillStyle = this.color;\n\n  //   ctx.beginPath();\n  //   ctx.arc(\n  //     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n  //   );\n  //   ctx.fill();\n  // };\n\n  moveObjects(delta) {\n    this.allObjects().forEach((obj) => {\n      obj.move(delta);\n    })\n  }\n\n  remove(object) {\n    if (object instanceof _metapod__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.metapods.splice(this.metapods.indexOf(object), 1);\n    } else if (object instanceof _boulder__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.boulders.splice(this.metapods.indexOf(object), 1);\n    } else if (object instanceof _berry__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.berries.splice(this.berries.indexOf(object), 1);\n    } else {\n      throw new Error(\"WOT DIS\");\n    }\n  }\n\n  step(delta) {\n    this.moveObjects(delta);\n    this.checkCollisions();\n  }\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n  constructor(game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n    this.keys = [192, 67, 77, 8];\n    this.metapods = this.game.addMetapods();\n\n    this.bindKeyHandlers = this.bindKeyHandlers.bind(this);\n    this.start = this.start.bind(this);\n    this.animate = this.animate.bind(this);\n  }\n\n  bindKeyHandlers () {\n    const keys = this.keys;\n    \n    const keyDownHandler = (e) => {\n      for (let i = 0; i < 4; i++) {\n        if (e.keyCode == keys[i]) {\n          this.game.metapodsHardened[i] = true;\n        };\n      };\n    };\n    \n    const keyUpHandler = (e) => {\n      for (let i = 0; i < 4; i++) {\n        if (e.keyCode == keys[i]) {\n          this.game.metapodsHardened[i] = false;\n        };\n      };\n    };\n\n    document.addEventListener(\"keydown\", keyDownHandler, false)\n    document.addEventListener(\"keyup\", keyUpHandler, false)\n  };\n\n  load() {\n    \n  }\n\n  start() {\n    this.bindKeyHandlers();\n    this.lastTime = 0;\n    // start animation\n    requestAnimationFrame(this.animate);\n  }\n\n  animate(time) {\n    const timeDelta = time - this.lastTime;\n\n    this.game.step(timeDelta);\n    this.game.draw(this.ctx);\n    this.lastTime = time;\n\n    // every call to animate requests causes another call to animate\n    requestAnimationFrame(this.animate);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n\n// import '../stylesheets/index.css';\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"viewport\");\n  canvas.width = 800;\n  canvas.height = 600;\n\n  const ctx = canvas.getContext(\"2d\");\n  const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n  new _game_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx).start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/metapod.js":
/*!************************!*\
  !*** ./src/metapod.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\n\nclass Metapod extends _moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(options) {\n    super(options);\n    this.startPosX = options.startPosX;\n    this.HP = 200;\n    this.initImg = options.img;\n  }\n\n  _randomMetapodImg() {\n    const metapodImgs = ['images/metapod.png', 'images/shiny_metapod.png'];\n    const index = Math.round(Math.random());\n    return metapodImgs[index];\n  }\n\n  harden() {\n    if (this.game.metapodsHardened[this.idx]) {\n      this.img = 'images/harden_metapod.png';\n    } else {\n      this.img = this.initImg;\n    }\n  }\n\n  smash() {\n    this.height /= 2;\n    window.setTimeout(() => {\n      this.height *= 2;\n    }, 500);\n  }\n\n  draw(ctx) {\n    this.drawShadow(ctx);\n    this.drawHPBar(ctx);\n    this.drawHP(ctx);\n    super.draw(ctx);\n    // what happens when boulder or berry collides with?\n  }\n\n  drawShadow(ctx) {\n    ctx.beginPath();\n    ctx.fillStyle = \"rgba(41, 41, 41, 0.7)\";\n    ctx.ellipse(\n      this.pos[0] + 65, this.pos[1] + this.height,\n      this.width / 2, this.height / 10,\n      0, Math.PI * 2, false\n    );\n    ctx.fill();\n  }\n\n  drawHPBar(ctx) {\n    ctx.beginPath();\n    ctx.lineWidth = \"2\";\n    ctx.strokeStyle = \"#000000\";\n    ctx.fillStyle = \"#00008b\";\n    ctx.rect(this.startPosX, this.pos[1] + this.height * 1.2, 130, 10);\n    ctx.stroke();\n    ctx.fill();\n  }\n\n  drawHP(ctx) {\n    ctx.beginPath();\n    ctx.fillStyle = \"#ffd700\";\n    ctx.fillRect(this.startPosX, this.pos[1] + this.height * 1.2, this.HP * (13 / 20), 10); \n  }\n\n  move(timeDelta) {\n    if (this.pos[0] > this.startPosX + 3 || this.pos[0] < this.startPosX - 3) {\n      this.vel[0] *= -1;\n    }\n    super.move(timeDelta);\n  }\n  \n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Metapod);\n\n//# sourceURL=webpack:///./src/metapod.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nclass MovingObject {\n  constructor(options) {\n    this.idx = options.idx;\n    this.img = options.img;\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.width = options.width;\n    this.height = options.height;\n    this.game = options.game;\n\n    this.isCollidedWith.bind(this);\n  }\n\n  draw(ctx) {\n    const objectImg = new Image();\n    objectImg.src = this.img;\n    ctx.drawImage(objectImg,\n      this.pos[0], this.pos[1],\n      this.width, this.height\n    );\n  }\n\n  isCollidedWith(otherObject) {\n    const pos1 = this.pos;\n    const pos2 = otherObject.pos;\n    const centerDist = Math.sqrt(\n      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n    );\n    return centerDist < (this.width / 2 + otherObject.width / 2);\n  }\n\n  move(timeDelta) {\n    // timeDelta is number of milliseconds since last move\n    // if the computer is busy the time delta will be larger\n    // in this case the MovingObject should move farther in this frame\n    // velocity of object is how far it should move in 1/60th of a second\n    const normalFrameTimeDelta = 1000 / 60;\n    const velocityScale = timeDelta / normalFrameTimeDelta;\n    const offsetX = this.vel[0] * velocityScale;\n    const offsetY = this.vel[1] * velocityScale;\n\n    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n\n    // if (this.collideWith(metapod)) {\n    //   this.remove();\n    // }\n  }\n\n  remove() {\n    this.game.remove(this);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/shadow.js":
/*!***********************!*\
  !*** ./src/shadow.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\n\nclass Shadow extends _moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(options) {\n    super(options);\n  }\n\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.fillStyle = \"rgba(41, 41, 41, 0.7)\";\n    ctx.ellipse(\n      this.pos[0], this.pos[1],\n      this.width, this.height,\n      0, Math.PI * 2, false\n    );\n    ctx.fill();\n  }\n\n  move(timeDelta) {\n    super.move(timeDelta);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shadow);\n\n//# sourceURL=webpack:///./src/shadow.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Util {\n  constructor() {\n    this.dist = this.dist.bind(this);\n  }\n\n  // Normalize the length of the vector to 1, maintaining direction.\n  dir(vec) {\n    const norm = Util.norm(vec);\n    return Util.scale(vec, 1 / norm);\n  }\n\n  // Find distance between two points.\n  dist(pos1, pos2) {\n    return Math.sqrt(\n      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n    );\n  }\n\n  // Find the length of the vector.\n  norm(vec) {\n    return Util.dist([0, 0], vec);\n  }\n\n  // Return a randomly oriented vector with the given length.\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  }\n\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n\n  wrap(coord, max) {\n    if (coord < 0) {\n      return max - (coord % max);\n    } else if (coord > max) {\n      return coord % max;\n    } else {\n      return coord;\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });