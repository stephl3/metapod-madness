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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _metapod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metapod */ \"./src/metapod.js\");\n\n\n\n\nclass Berry extends _moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(options) {\n    super(options);\n  }\n\n  draw(ctx) {\n    // this.drawShadow(ctx);\n    super.draw(ctx);\n  }\n\n  drawShadow(ctx) {\n    const shadowSX = this.game.dimensionX * (3 / 16);\n    const shadowSY = this.game.dimensionY * (2 / 5);\n    ctx.beginPath();\n    ctx.fillStyle = \"rgba(41, 41, 41, 0.7)\";\n    ctx.ellipse(\n      shadowSX, shadowSY,\n      this.width / 2, this.height / 5,\n      0, Math.PI * 2, false\n    );\n    ctx.fill();\n  }\n\n  move(timeDelta) {\n    if (this.pos[1] < -600) {\n      this.width *= 1.5;\n      this.height *= 1.5;\n      this.vel = [0, 16];\n      switch (this.idx) {\n        case 0:\n          this.pos[0] = this.game.dimensionX * (1 / 8) - 60\n          break;\n        case 1:\n          this.pos[0] = this.game.dimensionX * (3 / 8) - 60\n          break;\n        case 2:\n          this.pos[0] = this.game.dimensionX * (5 / 8) - 60\n          break;\n        case 3:\n          this.pos[0] = this.game.dimensionX * (7 / 8) - 60\n          break;\n        default:\n          break;\n      }\n    } else if (this.pos[1] > 500) {\n      this.remove(this);\n    };\n    super.move(timeDelta);\n  }\n\n  collideWith(metapod) {\n    if (metapod.hardened) {\n      this.bounce();\n      return true;\n    } else if (!metapod.hardened) {\n      // metapod.absorb();\n      return true;\n    }\n    return false;\n  }\n\n  bounce() {\n\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Berry);\n\n//# sourceURL=webpack:///./src/berry.js?");

/***/ }),

/***/ "./src/boulder.js":
/*!************************!*\
  !*** ./src/boulder.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _metapod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metapod */ \"./src/metapod.js\");\n\n\n\n\nclass Boulder extends _moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(options) {\n    super(options);\n    this.launchFX = new Audio('assets/sounds/launch.wav');\n    this.breakFX = new Audio('assets/sounds/harden.wav');\n    this.smashFX = new Audio('assets/sounds/damage.wav');\n    this.launchFX.play();\n  }\n\n  draw(ctx) {\n    super.draw(ctx);\n  }\n\n  drawShadow(ctx) {\n    const [shadowSX, shadowSY] = this.shadowPos;\n    const [shadowWidth, shadowHeight] = this.shadowSize;\n    ctx.beginPath();\n    ctx.fillStyle = \"rgba(41, 41, 41, 0.7)\";\n    ctx.ellipse(\n      shadowSX, shadowSY,\n      shadowWidth, shadowHeight,\n      0, Math.PI * 2, false\n    );\n    ctx.fill();\n  }\n\n  move(timeDelta) {\n    if (this.pos[1] < -500) {\n      this.width *= 1.5;\n      this.height *= 1.5;\n      this.vel = [0, 16];\n      switch (this.idx) {\n        case 0:\n          this.pos[0] = this.game.dimensionX * (1 / 8) - 60\n          break;\n        case 1:\n          this.pos[0] = this.game.dimensionX * (3 / 8) - 60\n          break;\n        case 2:\n          this.pos[0] = this.game.dimensionX * (5 / 8) - 60\n          break;\n        case 3:\n          this.pos[0] = this.game.dimensionX * (7 / 8) - 60\n          break;\n        default:\n          break;\n      }\n    }\n    //  else if (this.pos[1] > 700) {\n    //   this.remove(this);\n    // };\n    super.move(timeDelta);\n  }\n\n  collideWith(metapod) {\n    if (metapod.hardened) {\n      this.break();\n      return true;\n    } else if (!(metapod.hardened)) {\n      this.bounce();\n      metapod.smash();\n      return true;\n    }\n    return false;\n  }\n\n  break() {\n    this.img.src = 'assets/images/boulder/boulder2.png';\n    setTimeout(() => {\n      this.vel[1] = 8;\n      this.breakFX.play();\n      setTimeout(() => {\n        this.remove(this);\n      }, 300);\n    }, 50);\n  }\n\n  bounce() {\n    this.smashFX.play();\n    setTimeout(() => {\n      this.width += 8;\n      this.height += 8;\n      this.pos[0] -= 4;\n      this.pos[1] += 2;\n      this.vel[1] = 4;\n      setTimeout(() => {\n        this.vel[1] = 8;\n        setTimeout(() => {\n          this.remove(this);\n        }, 300);\n      }, 100);\n    }, 50);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boulder);\n\n//# sourceURL=webpack:///./src/boulder.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _metapod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metapod */ \"./src/metapod.js\");\n/* harmony import */ var _boulder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boulder */ \"./src/boulder.js\");\n/* harmony import */ var _berry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./berry */ \"./src/berry.js\");\n/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shadow */ \"./src/shadow.js\");\n\n\n\n\n// import Util from './util';\n\n\nclass Game {\n  constructor() {\n    this.dimensionX = 800;\n    this.dimensionY = 600;\n    this.over = false;\n\n    this.metapods = [];\n    this.metapodsHardened = [false, false, false, false];\n    this.boulders = [];\n    this.berries = [];\n    this.shadows = [];\n\n    this.start = this.start.bind(this);\n    this.reset = this.reset.bind(this);\n    this.addMetapods = this.addMetapods.bind(this);\n    this.addBoulders = this.addBoulders.bind(this);\n    this.addBerries = this.addBerries.bind(this);\n    this.addShadows = this.addShadows.bind(this);\n    this.draw = this.draw.bind(this);\n    this.step = this.step.bind(this);\n  }\n\n  add(object) {\n    if (object instanceof _metapod__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.metapods.push(object);\n    } else if (object instanceof _boulder__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.boulders.push(object);\n    } else if (object instanceof _berry__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.berries.push(object);\n    } else if (object instanceof _shadow__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n      this.shadows.push(object);\n    } else {\n      throw new Error(\"WOT DIS\");\n    }\n  }\n\n  // _randomMetapodImg() {\n  //   const metapodImgs = ['./assets/images/metapod.png', './assets/images/shiny_metapod.png'];\n  //   const index = Math.round(Math.random());\n  //   return metapodImgs[index];\n  // }\n\n  start() {\n    setTimeout(() => {\n      this.addBoulders();\n    }, 3000);\n    this.loop = () => {\n      setInterval(() => {\n        this.addBoulders();\n        setTimeout(() => {\n          this.addBoulders();\n          setTimeout(() => {\n            this.addBoulders();\n          }, 2000);\n        }, 1000);\n      }, 5000);\n    };\n\n    this.loop();\n  }\n\n  reset() {\n    this.metapods = [];\n    this.metapodsHardened = [false, false, false, false];\n    this.boulders = [];\n    this.berries = [];\n    this.shadows = [];\n  }\n\n  addMetapods() {\n    const metapodPositions = [\n      [this.dimensionX * (1 / 8) - 65, this.dimensionY * (3 / 5)],\n      [this.dimensionX * (3 / 8) - 65, this.dimensionY * (3 / 5)],\n      [this.dimensionX * (5 / 8) - 65, this.dimensionY * (3 / 5)],\n      [this.dimensionX * (7 / 8) - 65, this.dimensionY * (3 / 5)]\n    ];\n\n    for (let i = 0; i < 4; i++) {\n      this.add(new _metapod__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        idx: i,\n        img: 'assets/images/metapod/metapod.png',\n        startPosX: (metapodPositions[i][0]),\n        pos: metapodPositions[i],\n        vel: [0.1, 0],\n        width: 130,\n        height: 130,\n        game: this\n      }));\n    };\n  }\n\n  addBoulders() {\n    const boulderPositions = [\n      [this.dimensionX * (15 / 100) + 20, this.dimensionY * (2 / 5)],\n      [this.dimensionX * (35 / 100) + 20, this.dimensionY * (2 / 5)],\n      [this.dimensionX * (55 / 100) + 20, this.dimensionY * (2 / 5)],\n      [this.dimensionX * (75 / 100) + 20, this.dimensionY * (2 / 5)],\n    ];\n\n    for (let i = 0; i < 4; i++) {\n      if (this.metapods[i].HP > 1 && !(this.over)) {\n        this.add(new _boulder__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          idx: i,\n          img: 'assets/images/boulder/boulder1.png',\n          pos: boulderPositions[i],\n          vel: [0, -12],\n          width: 80,\n          height: 80,\n          game: this\n        }));\n      };\n    };\n\n    this.addShadows();\n  }\n\n  addBerries() {\n    const berryPositions = [\n      [this.dimensionX * (15 / 100), this.dimensionY * (2 / 5)],\n      [this.dimensionX * (35 / 100), this.dimensionY * (2 / 5)],\n      [this.dimensionX * (55 / 100), this.dimensionY * (2 / 5)],\n      [this.dimensionX * (75 / 100), this.dimensionY * (2 / 5)],\n    ];\n\n    for (let i = 0; i < 4; i++) {\n      if (this.metapods[i].HP > 1 && !(this.over)) {\n        this.add(new _berry__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          idx: i,\n          img: 'assets/images/berry/gold_razz_berry.png',\n          pos: berryPositions[i],\n          vel: [0, -12],\n          width: 80,\n          height: 80,\n          game: this\n        }));\n      };\n    };\n\n    this.addShadows();\n  }\n\n  addShadows() {\n    const shadowPositions = [\n      [this.dimensionX * (15 / 100), this.dimensionY * (.52)],\n      [this.dimensionX * (35 / 100), this.dimensionY * (.52)],\n      [this.dimensionX * (55 / 100), this.dimensionY * (.52)],\n      [this.dimensionX * (75 / 100), this.dimensionY * (.52)],\n    ];\n    const shadowVelocities = [\n      [-0.62, 1.3],\n      [-0.28, 1.3],\n      [0.12, 1.3],\n      [0.48, 1.3],\n    ];\n\n    for (let i = 0; i < 4; i++) {\n      if (this.metapods[i].HP > 1 && !(this.over)) {\n        this.add(new _shadow__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n          idx: i,\n          img: 'assets/images/boulder/shadow.png',\n          pos: shadowPositions[i],\n          vel: shadowVelocities[i],\n          width: 100,\n          height: 50,\n          game: this\n        }));\n      };\n    };\n\n    // window.setTimeout(() => this.addBoulders(), 1000);\n  }\n\n  allObjects() {\n    return [].concat(this.metapods, this.boulders, this.berries, this.shadows);\n  }\n\n  movingObjects() {\n    return [].concat(this.boulders, this.berries);\n  }\n\n  checkCollisions() {\n    const metapods = this.metapods;\n    const movingObjects = this.movingObjects();\n\n    for (let i = 0; i < 4; i++) {\n      let metapod = metapods[i];\n      for (let j = 0; j < movingObjects.length; j++) {\n        \n        let movingObj = movingObjects[j];\n\n        if (movingObj.isCollidedWith(metapod)) {\n          const collision = movingObj.collideWith(metapod);\n          if (collision) break;\n        }\n      }\n    }\n  }\n\n  checkGameOver() {\n    const faintedMetapods = this.metapods.filter(metapod => metapod.fainted)\n  \n    if (faintedMetapods.length === 3) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, this.dimensionX, this.dimensionY);\n\n    this.shadows.forEach((shadow) => {\n      shadow.draw(ctx);\n    })\n    for (let i = 0; i < 4; i++) {\n      this.metapods[i].draw(ctx);\n    }\n    this.movingObjects().forEach((obj) => {\n      obj.draw(ctx);\n    })\n  }\n\n  // MovingObject.prototype.draw = function draw(ctx) {\n  //   ctx.fillStyle = this.color;\n\n  //   ctx.beginPath();\n  //   ctx.arc(\n  //     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n  //   );\n  //   ctx.fill();\n  // };\n\n  moveObjects(delta) {\n    this.allObjects().forEach((obj) => {\n      obj.move(delta);\n    })\n  }\n\n  remove(object) {\n    if (object instanceof _metapod__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.metapods.splice(this.metapods.indexOf(object), 1);\n    } else if (object instanceof _boulder__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.boulders.splice(this.boulders.indexOf(object), 1);\n    } else if (object instanceof _berry__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.berries.splice(this.berries.indexOf(object), 1);\n    } else if (object instanceof _shadow__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n      this.shadows.splice(this.shadows.indexOf(object), 1);\n    } else {\n      throw new Error(\"WOT DIS\");\n    }\n  }\n\n  step(delta) {\n    this.moveObjects(delta);\n    this.checkCollisions();\n    if (this.checkGameOver()) {\n      this.loop = () => null;\n      this.over = true;\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\nclass GameView {\n  constructor(game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n    this.menu = new _menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.paused = false;\n    this.state = \"menu\";\n    this.gameOver = true;\n    this.keys = [192, 52, 56, 8];\n    this.muteMusic = true;\n    this.setSounds();\n\n    this.bindKeyHandlers = this.bindKeyHandlers.bind(this);\n    this.toggleMute = this.toggleMute.bind(this);\n    this.start = this.start.bind(this);\n    this.pause = this.pause.bind(this);\n    this.end = this.end.bind(this);\n    this.restart = this.restart.bind(this);\n    this.quit = this.quit.bind(this);\n    this.animate = this.animate.bind(this);\n    \n    \n    this.menu.bindMenuButtons();\n    this.menu.openMenu();\n  }\n\n  bindKeyHandlers () {\n    const keys = this.keys;\n    \n    const keyDownHandler = (e) => {\n      for (let i = 0; i < 4; i++) {\n        if (e.keyCode == keys[i]) {\n          this.game.metapodsHardened[i] = true;\n        };\n      };\n    };\n    \n    const keyUpHandler = (e) => {\n      for (let i = 0; i < 4; i++) {\n        if (e.keyCode == keys[i]) {\n          this.game.metapodsHardened[i] = false;\n        };\n      };\n    };\n\n    document.addEventListener(\"keydown\", keyDownHandler, false)\n    document.addEventListener(\"keyup\", keyUpHandler, false)\n  };\n\n  setSounds() {\n    this.menuMusic = new Audio('assets/sounds/menu_music.mp3');\n    this.menuMusic.loop = true;\n    // this.menuMusic.muted = true;\n    this.gameMusic = new Audio('assets/sounds/game_music.mp3');\n    // this.gameMusic.muted = true;\n    this.victoryMusic = new Audio('assets/sounds/victory_music.mp3');\n    this.victoryMusic.loop = true;\n    // this.victoryMusic.muted = true;\n  }\n\n  toggleMute() {\n    if (this.muteMusic) {\n      this.muteMusic = false;\n      switch (this.state) {\n        case \"menu\":\n          this.menuMusic.play();\n          break;\n        case \"game\":\n          this.gameMusic.muted = false;\n          this.gameMusic.play();\n          break;\n        case \"victory\":\n          this.victoryMusic.play();\n          break;\n        default:\n          break;\n      };\n    } else {\n      this.muteMusic = true;\n      this.gameMusic.pause();\n      this.menuMusic.pause();\n      this.victoryMusic.pause();\n    };\n    return this.muteMusic;\n  }\n  \n  start() {\n    this.state = \"game\";\n    this.gameOver = false;\n    this.game.over = false;\n    if (!this.muteMusic) {\n      this.menuMusic.pause();\n    } else {\n      this.gameMusic.muted = true;\n    }\n    this.gameMusic.play();\n    this.bindKeyHandlers();\n    this.game.addMetapods();\n    this.game.start();\n    this.lastTime = 0;\n\n    // start animation\n    requestAnimationFrame(this.animate);\n  }\n\n  pause() {\n    this.paused = !this.paused;\n    if (!this.muteMusic) {\n      this.gameMusic.volume = 0.2;\n    } else {\n      this.gameMusic.volume = 1.0;\n    }\n  }\n\n  end() {\n    this.state = \"victory\";\n    this.gameOver = true;\n    this.game.over = true;\n    this.game.reset();\n\n    const victoryMenu = document.getElementById(\"victory\");\n    victoryMenu.classList.remove('close');\n    if (!this.muteMusic) {\n      this.gameMusic.pause();\n      this.victoryMusic.play();\n    }\n  }\n\n  restart() {\n    this.state = \"game\";\n    this.gameOver = false;\n    this.game.over = false;\n    this.game.reset();\n  }\n\n  quit() {\n    this.state = \"menu\";\n    this.gameOver = true;\n    this.game.over  = false;\n    this.game.reset();\n\n    if (!this.muteMusic) {\n      this.victoryMusic.pause();\n      this.menuMusic.play();\n    }\n  }\n\n  animate(time) {\n    const timeDelta = time - this.lastTime;\n\n    this.game.step(timeDelta);\n    this.game.draw(this.ctx);\n    this.lastTime = time;\n    this.gameOver = this.game.over;\n    // every call to animate requests causes another call to animate\n    if (!this.paused) {\n      requestAnimationFrame(this.animate);\n      if (this.gameOver) {\n        setTimeout(() => {\n          this.end();\n          this.animate = () => null;\n        }, 3000);\n      }\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n\n// import '../stylesheets/index.css';\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"game\");\n  canvas.width = 800;\n  canvas.height = 600;\n\n  const ctx = canvas.getContext(\"2d\");\n  const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const gameView = new _game_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx);\n\n  // gameView.playMusic();\n\n  document.body.onkeyup = function(e) {\n    e.preventDefault();\n    if (e.keyCode === 32) {\n      menu.style.display = \"none\";\n      gameView.start();\n      gameView.pause();\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Menu {\n  constructor(gameView) {\n    this.gameView = gameView;\n    this.selectFX = new Audio('assets/sounds/select.wav');\n    this.closeFX = new Audio('assets/sounds/close.wav');\n\n    this.soundButton = document.getElementById('sound');\n    this.pauseButton = document.getElementById('pause');\n    \n    this.menu = document.getElementById('menu');\n    this.startButton = document.getElementById('start');\n    this.howToButton = document.getElementById('how-to');\n    this.instructionsBg = document.getElementById('instructions-bg');\n    this.instructions = document.getElementById('instructions');\n    this.closeButton = document.getElementById('close-icon-container');\n    this.keyBindingsButton = document.getElementById('key-bindings');\n    \n    this.victoryMenu = document.getElementById(\"victory\");\n    this.restartButton = document.getElementById('restart');\n    this.quitButton = document.getElementById('quit');\n\n    this.toggleSound = this.toggleSound.bind(this);\n    this.pauseGame = this.pauseGame.bind(this);\n    this.startGame = this.startGame.bind(this);\n    this.openHowTo = this.openHowTo.bind(this);\n    this.closeHowTo = this.closeHowTo.bind(this);\n    this.restartGame = this.restartGame.bind(this);\n    this.quitGame = this.quitGame.bind(this);\n  }\n\n  bindMenuButtons() {\n    this.soundButton.addEventListener('click', this.toggleSound);\n    this.pauseButton.addEventListener('click', this.pauseGame);\n    this.startButton.addEventListener('click', this.startGame);\n    this.howToButton.addEventListener('click', this.openHowTo);\n    this.closeButton.addEventListener('click', this.closeHowTo);\n    this.restartButton.addEventListener('click', this.restartGame);\n    this.quitButton.addEventListener('click', this.quitGame);\n  }\n\n  toggleSound() {\n    this.selectFX.play();\n    if (this.gameView.toggleMute()) {\n      this.soundButton.innerHTML = \"<i class='fas fa-volume-mute' id='sound-icon'></i>\"\n    } else {\n      this.soundButton.innerHTML = \"<i class='fas fa-volume-up' id='sound-icon'></i>\"\n    }\n  }\n\n  pauseGame() {\n    this.gameView.pause();\n  }\n\n  openMenu() {\n    this.menu.classList.remove('close');\n    this.instructions.classList.add('close');\n    this.instructionsBg.classList.remove('modal-background');\n  }\n\n  closeMenu() {\n    this.menu.classList.add('close');\n  }\n\n  closeVictoryMenu() {\n    this.victoryMenu.classList.add('close');\n  }\n\n  startGame() {\n    this.selectFX.play();\n    this.closeMenu();\n    this.gameView.start();\n  }\n\n  openHowTo() {\n    this.selectFX.play();\n    this.instructionsBg.classList.add('modal-background');\n    this.instructionsBg.addEventListener('click', this.closeHowTo);\n    this.instructions.classList.remove('close')\n  }\n  \n  closeHowTo() {\n    this.closeFX.play();\n    this.instructionsBg.classList.remove('modal-background');\n    this.instructionsBg.removeEventListener('click', this.closeHowTo);\n    this.instructions.classList.add('close');\n  }\n\n  restartGame() {\n    this.selectFX.play();\n    this.closeVictoryMenu();\n\n    this.gameView.start();\n  }\n\n  quitGame() {\n    this.selectFX.play();\n    this.closeVictoryMenu();\n    this.openMenu();\n    this.gameView.quit();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nconst schmenu = {\n  setMenuButtons(game) {\n\n    const aboutButton = document.getElementById('how-to-play-button');\n    const closeAboutButton = document.getElementById('close-how-to-play');\n    const menuButton = document.getElementById('menu-button');\n    const submitHighScoreButton = document.getElementById('submit-highscore');\n    const muteButton = document.getElementById('mute-button');\n    const selectSound = new Audio('./assets/sounds/select.wav');\n\n    const openAbout = (e) => {\n      const aboutScreen = document.getElementsByClassName('how-to-play-container')[0];\n      if (aboutScreen.className.indexOf('how-to-play-open') !== -1) {\n        aboutScreen.className = 'how-to-play-container group';\n        playSelectSound();\n        game.unpause();\n      } else {\n        aboutScreen.className += ' how-to-play-open';\n        playSelectSound();\n        game.pause();\n      }\n    };\n\n    const playSelectSound = () => {\n      selectSound.pause();\n      selectSound.currentTime = 0;\n      selectSound.play();\n    };\n\n    const backToMenu = () => {\n      game.over = true;\n      // game.gamePlaying = false;\n      game.backgroundMusic.pause();\n      game.backgroundMusic.currentTime = 0;\n      playSelectSound();\n      game.openMenu();\n      document.getElementById('game-over-menu').className += ' close';\n      openMainMenu();\n      game.ctx.clearRect(0, 0, 800, 300);\n      document.getElementById('game-canvas').focus();\n    };\n\n\n    const muteToggle = (e) => {\n      if (game.toggleMute()) {\n        muteButton.className = 'toggled';\n      } else {\n        muteButton.className = '';\n      }\n      playSelectSound();\n      document.getElementById('game-canvas').focus();\n    };\n\n    game.gameCanvas.addEventListener('keydown', (e) => {\n      if (e.code === 'Escape' && game.gamePlaying) {\n        e.preventDefault();\n        backToMenu();\n      }\n    });\n    muteButton.addEventListener('click', muteToggle);\n    menuButton.addEventListener('click', backToMenu);\n    aboutButton.addEventListener('click', openAbout);\n    closeAboutButton.addEventListener('click', openAbout);\n    submitHighScoreButton.addEventListener('click', submitScore);\n    hardButton.addEventListener('click', (e) => {\n      closeMainMenu();\n      playSelectSound();\n      setTimeout(() => game.start('hard'), 200);\n    }\n    );\n    mediumButton.addEventListener('click', (e) => {\n      closeMainMenu();\n      playSelectSound();\n      setTimeout(() => game.start('medium'), 200);\n    }\n    );\n    easyButton.addEventListener('click', (e) => {\n      closeMainMenu();\n      playSelectSound();\n      setTimeout(() => game.start('easy'), 200);\n    }\n    );\n  }\n};\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/metapod.js":
/*!************************!*\
  !*** ./src/metapod.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\n\nclass Metapod extends _moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(options) {\n    super(options);\n    this.startPosX = options.startPosX;\n    this.HP = 200;\n    this.initImg = options.img;\n    this.initVel = options.vel;\n    this.faintFX = new Audio('assets/sounds/faint.wav');\n    this.hardened = false;\n    this.smashed = false;\n    this.fainted = false;\n  }\n\n  faint() {\n    if (this.HP < 1) {      \n      this.vel = [0, 0];\n      this.hardened = true;\n      this.harden = () => null;\n      this.fainted = true;\n      this.faintFX.play();\n      \n      setTimeout(() => {\n        this.img.src = 'assets/images/null.png';\n        setTimeout(() => {\n          this.img.src = 'assets/images/metapod/metapod.png';\n          setTimeout(() => {\n            this.img.src = 'assets/images/null.png';\n            setTimeout(() => {\n              this.img.src = 'assets/images/metapod/metapod.png';\n              setTimeout(() => {\n                this.img.src = 'assets/images/metapod/faint_metapod.png';\n                this.faint = () => null;\n              }, 500);\n            }, 400);\n          }, 250);\n        }, 150);\n      }, 0);\n    }\n  }\n\n  harden() {\n    if (this.game.metapodsHardened[this.idx]) {\n      this.img.src = 'assets/images/metapod/harden_metapod.png';\n      this.hardened = true;\n      // this.vel = [0, 0];\n      this.HP -= 0.2;\n      if (this.HP < 1) {\n        this.faint();\n      }\n    } else if (this.smashed) {\n      return;\n    } else {\n      this.img.src = this.initImg;\n      this.hardened = false;\n      // this.vel = this.initVel;\n    }\n  }\n\n  smash() {\n    // debugger;\n    this.smashed = true;\n    setTimeout(() => {\n      this.smashed = false;\n    }, 350);\n\n    if (this.HP > 30) {\n      this.HP -= 30;\n    } else {\n      this.HP = 0;\n    }\n\n    setTimeout(() => {\n      this.img.src = 'assets/images/metapod/hurt_metapod2.png';\n      setTimeout(() => {\n        this.img.src = 'assets/images/metapod/hurt_metapod4.png';\n        setTimeout(() => {\n          this.img.src = 'assets/images/metapod/hurt_metapod2.png';\n          setTimeout(() => {\n            this.img.src = 'assets/images/metapod/metapod.png'\n            setTimeout(() => {\n              this.img.src = 'assets/images/metapod/hurt_metapod2.png'\n              setTimeout(() => {\n                this.img.src = 'assets/images/metapod/hurt_metapod4.png'\n                setTimeout(() => {\n                  this.img.src = 'assets/images/metapod/hurt_metapod2.png'\n                  setTimeout(() => {\n                    this.img.src = 'assets/images/metapod/metapod.png'\n                  }, 330);\n                }, 300);\n              }, 240);\n            }, 210);\n          }, 150);\n        }, 120);\n      }, 60);\n    }, 30);\n  }\n\n  draw(ctx) {\n    this.harden();\n    this.faint();\n    this.drawShadow(ctx);\n    this.drawHPBar(ctx);\n    this.drawHP(ctx);\n    super.draw(ctx);\n  }\n\n  drawShadow(ctx) {\n    ctx.beginPath();\n    ctx.fillStyle = \"rgba(41, 41, 41, 0.7)\";\n    ctx.ellipse(\n      this.pos[0] + 65, this.pos[1] + this.height,\n      this.width / 2, this.height / 10,\n      0, Math.PI * 2, false\n    );\n    ctx.fill();\n  }\n\n  drawHPBar(ctx) {\n    ctx.beginPath();\n    ctx.lineWidth = \"2\";\n    ctx.strokeStyle = \"#000000\";\n    ctx.fillStyle = \"#00008b\";\n    ctx.rect(this.startPosX, this.pos[1] + this.height * 1.2, 130, 10);\n    ctx.stroke();\n    ctx.fill();\n  }\n\n  drawHP(ctx) {\n    ctx.beginPath();\n    if (this.HP < 30) {\n      ctx.fillStyle = \"#ff0000\";\n    } else if (this.HP < 100) {\n      ctx.fillStyle = \"#ffd700\";\n    } else {\n      ctx.fillStyle = \"#00ff00\";\n    }\n    ctx.fillRect(this.startPosX, this.pos[1] + this.height * 1.2, this.HP * (13 / 20), 10); \n  }\n\n  move(timeDelta) {\n    if (this.pos[0] > this.startPosX + 2) {\n      this.vel = [-0.1, 0];\n    } else if (this.pos[0] < this.startPosX - 2) {\n      this.vel = [0.1, 0];\n    };\n    super.move(timeDelta);\n  }\n  \n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Metapod);\n\n//# sourceURL=webpack:///./src/metapod.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nclass MovingObject {\n  constructor(options) {\n    this.idx = options.idx;\n    this.img = new Image();\n    this.img.src = options.img;\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.width = options.width;\n    this.height = options.height;\n    this.game = options.game;\n\n    this.isCollidedWith.bind(this);\n    this.remove = this.remove.bind(this);\n  }\n\n  draw(ctx) {\n    // this.drawHitBox(ctx);\n    ctx.drawImage(this.img,\n      this.pos[0], this.pos[1],\n      this.width, this.height\n    );\n  }\n\n  drawHitBox(ctx) {\n    ctx.beginPath();\n    ctx.strokeStyle = \"black\";\n    ctx.lineWidth = 4;\n    ctx.strokeRect(\n      this.pos[0], this.pos[1],\n      this.width, this.height\n    );\n  }\n\n  isCollidedWith(otherObject) {\n    const pos1 = this.pos;\n    const pos2 = otherObject.pos;\n    const centerDist = Math.sqrt(\n      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n    )\n    const distance = (this.width / 2 + otherObject.width / 2);\n    return (centerDist < distance + 5 && centerDist > distance - 5);\n  }\n\n  move(timeDelta) {\n    // timeDelta is number of milliseconds since last move\n    // if the computer is busy the time delta will be larger\n    // in this case the MovingObject should move farther in this frame\n    // velocity of object is how far it should move in 1/60th of a second\n    const normalFrameTimeDelta = 1000 / 60;\n    const velocityScale = timeDelta / normalFrameTimeDelta;\n    const offsetX = this.vel[0] * velocityScale;\n    const offsetY = this.vel[1] * velocityScale;\n\n    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n\n    // if (this.collideWith(metapod)) {\n    //   this.remove();\n    // }\n  }\n\n  remove() {\n    this.game.remove(this);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/shadow.js":
/*!***********************!*\
  !*** ./src/shadow.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\n\nclass Shadow extends _moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(options) {\n    super(options);\n  }\n\n  draw(ctx) {\n    // ctx.beginPath();\n    // ctx.fillStyle = \"rgba(41, 41, 41, 0.7)\";\n    // ctx.ellipse(\n    //   this.pos[0], this.pos[1],\n    //   this.width, this.height,\n    //   0, Math.PI * 2, false\n    // );\n    // ctx.fill();\n    super.draw(ctx);\n  }\n\n  move(timeDelta) {\n    if (this.pos[1] > 500) {\n      this.remove(this);\n    };\n    super.move(timeDelta);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shadow);\n\n//# sourceURL=webpack:///./src/shadow.js?");

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