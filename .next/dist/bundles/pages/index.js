module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(1);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(0);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// CONCATENATED MODULE: ./src/components/common.js
var _templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  background-image: radial-gradient(\n    1600px at 70% 120%,\n    rgba(33, 39, 80, 1) 10%,\n    #020409 100%\n  );\n"], ["\n  width: 100%;\n  height: 100%;\n  background-image: radial-gradient(\n    1600px at 70% 120%,\n    rgba(33, 39, 80, 1) 10%,\n    #020409 100%\n  );\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: inherit;\n  height: inherit;\n"], ["\n  width: inherit;\n  height: inherit;\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = external__styled_components__default.a.div(_templateObject);

var Content = external__styled_components__default.a.div(_templateObject2);
// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(2);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// CONCATENATED MODULE: ./src/utils.js
var getProbability = function getProbability(percents) {
  return Math.floor(Math.random() * 1000) + 1 < percents * 10;
};

var getRandInterval = function getRandInterval(min, max) {
  return Math.random() * (max - min) + min;
};
// CONCATENATED MODULE: ./src/Star.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Star_Star = function () {
  function Star(width, height, canvas, speedCoeff, color, giantColor, first) {
    _classCallCheck(this, Star);

    this.width = width;
    this.height = height;
    this.canvas = canvas;
    this.speedCoeff = speedCoeff;
    this.starColor = color;
    this.giantColor = giantColor;
    this.first = first;
  }

  _createClass(Star, [{
    key: "fadeIn",
    value: function fadeIn() {
      if (this.fadingIn) {
        this.fadingIn = this.opacity > this.opacityTresh ? false : true;
        this.opacity += this.do;
      }
    }
  }, {
    key: "fadeOut",
    value: function fadeOut() {
      if (this.fadingOut) {
        this.fadingOut = this.opacity < 0 ? false : true;
        this.opacity -= this.do / 2;
        if (this.x > this.width || this.y < 0) {
          this.fadingOut = false;
          this.reset();
        }
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      this.canvas.beginPath();

      if (this.giant) {
        this.canvas.fillStyle = "rgba(" + this.giantColor + "," + this.opacity + ")";
        this.canvas.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
      } else if (this.comet) {
        this.canvas.fillStyle = "rgba(" + cometColor + "," + this.opacity + ")";
        this.canvas.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);

        //comet tail
        for (var i = 0; i < 30; i++) {
          this.canvas.fillStyle = "rgba(" + cometColor + "," + (this.opacity - this.opacity / 20 * i) + ")";
          this.canvas.rect(this.x - this.dx / 4 * i, this.y - this.dy / 4 * i - 2, 2, 2);
          this.canvas.fill();
        }
      } else {
        this.canvas.fillStyle = "rgba(" + this.starColor + "," + this.opacity + ")";
        this.canvas.rect(this.x, this.y, this.r, this.r);
      }

      this.canvas.closePath();
      this.canvas.fill();
    }
  }, {
    key: "move",
    value: function move() {
      this.x += this.dx;
      this.y += this.dy;
      if (this.fadingOut === false) {
        this.reset();
      }
      if (this.x > this.width - this.width / 4 || this.y < 0) {
        this.fadingOut = true;
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.giant = getProbability(3);
      this.comet = this.giant || this.first ? false : getProbability(10);
      this.x = getRandInterval(0, this.width - 10);
      this.y = getRandInterval(0, this.height);
      this.r = getRandInterval(1.1, 2.6);
      this.dx = getRandInterval(this.speedCoeff, 6 * this.speedCoeff) + (this.comet + 1 - 1) * this.speedCoeff * getRandInterval(50, 120) + this.speedCoeff * 2;
      this.dy = -getRandInterval(this.speedCoeff, 6 * this.speedCoeff) - (this.comet + 1 - 1) * this.speedCoeff * getRandInterval(50, 120);
      this.fadingOut = null;
      this.fadingIn = true;
      this.opacity = 0;
      this.opacityTresh = getRandInterval(0.2, 1 - (this.comet + 1 - 1) * 0.4);
      this.do = getRandInterval(0.0005, 0.002) + (this.comet + 1 - 1) * 0.001;
    }
  }]);

  return Star;
}();

/* harmony default export */ var src_Star = (Star_Star);
// CONCATENATED MODULE: ./src/components/Sky.js
var Sky__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var Sky__templateObject = Sky__taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n"], ["\n  width: 100%;\n  height: 100%;\n"]);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Sky__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Sky__taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Sky = external__styled_components__default.a.canvas(Sky__templateObject);

var Sky_SkyWrapper = function (_React$PureComponent) {
  _inherits(SkyWrapper, _React$PureComponent);

  function SkyWrapper(props) {
    Sky__classCallCheck(this, SkyWrapper);

    var _this = _possibleConstructorReturn(this, (SkyWrapper.__proto__ || Object.getPrototypeOf(SkyWrapper)).call(this, props));

    _this.state = {
      starDensity: 0.216,
      speedCoeff: 0.05,
      width: 0,
      height: 0,
      starCount: 10,
      circleRadius: 0,
      circleCenter: 0,
      giantColor: "180,184,240",
      starColor: "226,225,142",
      cometColor: "226,225,224",
      first: true
    };

    _this._windowResizeHandler = function () {
      _this.setState(function () {
        var starDensity = _this.state.starDensity;

        var width = window.innerWidth;
        var height = window.innerHeight;
        var starCount = width * starDensity;
        var circleRadius = width > height ? height / 2 : width / 2;
        var circleCenter = {
          x: width / 2,
          y: height / 2
        };
        return _defineProperty({
          width: width,
          height: height,
          starCount: starCount,
          circleRadius: circleRadius
        }, "circleRadius", circleRadius);
      }, function () {
        var _this$state = _this.state,
            width = _this$state.width,
            height = _this$state.height;

        var starsLength = _this.stars.length;
        for (var i = 0; i < starsLength; i++) {
          var star = _this.stars[i];
          star.width = width;
          star.height = height;
        }
      });
    };

    _this._createUniverse = function () {
      var _this$state2 = _this.state,
          starCount = _this$state2.starCount,
          starColor = _this$state2.starColor,
          width = _this$state2.width,
          height = _this$state2.height,
          speedCoeff = _this$state2.speedCoeff,
          giantColor = _this$state2.giantColor,
          first = _this$state2.first;

      for (var i = 0; i < starCount; i++) {
        _this.stars[i] = new src_Star(width, height, _this.sky, speedCoeff, starColor, giantColor, first);
        _this.stars[i].reset();
      }
      _this._draw();
    };

    _this._draw = function () {
      var _this$state3 = _this.state,
          width = _this$state3.width,
          height = _this$state3.height;

      _this.sky.clearRect(0, 0, width, height);
      var starsLength = _this.stars.length;
      for (var i = 0; i < starsLength; i++) {
        var star = _this.stars[i];
        star.move();
        star.fadeIn();
        star.fadeOut();
        star.draw();
      }
      window.requestAnimationFrame(_this._draw);
    };

    _this.stars = [];
    return _this;
  }

  Sky__createClass(SkyWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.sky = Object(external__react_dom_["findDOMNode"])(this.canvas).getContext("2d");
      this._windowResizeHandler();
      window.addEventListener("resize", this._windowResizeHandler, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _state = this.state,
          starCount = _state.starCount,
          first = _state.first;

      if (starCount !== 0 && first) {
        this.setState({ first: false });
        this._createUniverse();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state2 = this.state,
          width = _state2.width,
          height = _state2.height;

      return external__react__default.a.createElement(Sky, {
        ref: function ref(r) {
          _this2.canvas = r;
        },
        width: width,
        height: height
      });
    }
  }]);

  return SkyWrapper;
}(external__react__default.a.PureComponent);

/* harmony default export */ var components_Sky = (Sky_SkyWrapper);
// CONCATENATED MODULE: ./src/Particle.js
function Particle__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Particle = function Particle(canvas) {
  var _this = this;

  Particle__classCallCheck(this, Particle);

  this.fadeIn = function () {
    // console.log("fadeIn");
    _this.fadingIn = _this.opacity > _this.opacityTresh ? false : true;
    if (_this.fadingIn) {
      _this.opacity += _this.do;
    } else {
      _this.opacity = 1;
    }
  };

  this.fadeOut = function () {
    _this.fadingOut = _this.opacity < 0 ? false : true;
    if (_this.fadingOut) {
      _this.opacity -= 0.06;
      if (_this.opacity < 0) {
        _this.opacity = 0;
      }
    } else {
      _this.opacity = 0;
    }
  };

  var range = Math.random() * 180 / Math.PI,
      spread = canvas.height / 4,
      size = Math.random() * 1.2;

  this.delta = 0.15;
  this.x = 0;
  this.y = 0;

  this.px = canvas.width / 2 + (Math.random() - 0.5) * canvas.width;
  this.py = canvas.height * 0.5 + (Math.random() - 0.5) * spread;

  this.mx = this.px;
  this.my = this.py;

  this.velocityX = Math.floor(Math.random() * 10) - 5;
  this.velocityY = Math.floor(Math.random() * 10) - 5;

  this.size = size;
  this.origSize = size;

  this.inText = false;

  this.opacity = 0;
  this.do = 0.02;

  this.opacityTresh = 0.98;
  this.fadingOut = true;
  this.fadingIn = true;
};

/* harmony default export */ var src_Particle = (Particle);
// CONCATENATED MODULE: ./src/content.js
/* harmony default export */ var content = (["BichPhuong"]);
// CONCATENATED MODULE: ./src/components/TextCanvas.js
var TextCanvas__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var TextCanvas__templateObject = TextCanvas__taggedTemplateLiteral(["\n  margin: 200px auto;\n"], ["\n  margin: 200px auto;\n"]);

function TextCanvas__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TextCanvas__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function TextCanvas__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function TextCanvas__taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Canvas = external__styled_components__default.a.canvas(TextCanvas__templateObject);

var TextCanvas_Clock = function (_React$PureComponent) {
  TextCanvas__inherits(Clock, _React$PureComponent);

  function Clock(props) {
    TextCanvas__classCallCheck(this, Clock);

    var _this = TextCanvas__possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.bgGrad = true;
    _this.height = 400;
    _this.key = {
      up: false,
      shift: false
    };
    _this.particles = [];
    _this.mouse = {
      x: 0,
      y: 0
    };
    _this.press = false;
    _this.quiver = true;
    _this.texts = content;
    _this.textNum = 0;
    _this.textSize = 50;
    _this.valentine = false;
    _this.msgTime = 100;
    _this.updateColor = true;
    _this.width = 800;
    _this.FRAME_RATE = 60;
    _this.MIN_WIDTH = 0;
    _this.MIN_HEIGHT = 0;
    _this.PARTICLE_NUM = 1200;
    _this.RADIUS = Math.PI * 2;

    _this._handleClick = function () {
      _this.textNum++;
      if (_this.textNum >= _this.texts.length) {
        _this.textNum--;
        end = true;
        return;
      }
      _this.text = _this.texts[_this.textNum];
    };

    _this._draw = function (p) {
      _this.ctx.fillStyle = "rgba(226,225,142, " + p.opacity + ")";
      _this.ctx.beginPath();
      _this.ctx.arc(p.x, p.y, p.size, 0, _this.RADIUS, true);
      _this.ctx.closePath();
      _this.ctx.fill();
    };

    _this._loop = function () {
      _this.ctx.clearRect(0, 0, _this.width, _this.height);
      _this.ctx.fillStyle = "rgb(255, 255, 255)";
      _this.ctx.textBaseline = "middle";
      _this.ctx.font = _this.textSize + "px 'Roboto Mono', 'monospace'";
      _this.ctx.fillText(_this.text, (_this.width - _this.ctx.measureText(_this.text).width) * 0.5, _this.height * 0.5);
      var imgData = _this.ctx.getImageData(0, 0, _this.width, _this.height);
      _this.ctx.clearRect(0, 0, _this.width, _this.height);
      for (var i = 0, l = _this.particles.length; i < l; i++) {
        var p = _this.particles[i];
      }
      _this._particleText(imgData);
    };

    _this._pad = function () {
      return ("0" + number).substr(-2);
    };

    _this._particleText = function (imgData) {
      var pxls = [];
      for (var w = _this.width; w > 0; w -= 3) {
        for (var h = 0; h < _this.width; h += 3) {
          var index = (w + h * _this.width) * 4;
          if (imgData.data[index] > 1) {
            pxls.push([w, h]);
          }
        }
      }

      var count = pxls.length;
      var j = parseInt((_this.particles.length - pxls.length) / 2, 10);
      if (j < 0) {
        j = 0;
      }

      for (var i = 0; i < pxls.length && j < _this.particles.length; i++, j++) {
        try {
          var p = _this.particles[j],
              X = void 0,
              Y = void 0;
          if (_this.quiver) {
            X = pxls[count - 1][0] - (p.px + Math.random() * 5);
            Y = pxls[count - 1][1] - (p.py + Math.random() * 5);
          } else {
            X = pxls[count - 1][0] - p.px;
            Y = pxls[count - 1][1] - p.py;
          }
          var T = Math.sqrt(X * X + Y * Y);
          var A = Math.atan2(Y, X);
          var C = Math.cos(A);
          var S = Math.sin(A);
          p.x = p.px + C * T * p.delta;
          p.y = p.py + S * T * p.delta;
          p.px = p.x;
          p.py = p.y;
          p.inText = true;
          p.fadeIn();
          // if (i < 10) {
          //   console.log(p);
          // }
          _this._draw(p);
          if (key.up === true) {
            p.size += 0.3;
          } else {
            var newSize = p.size - 0.5;
            if (newSize > p.origSize && newSize > 0) {
              p.size = newSize;
            } else {
              p.size = m.origSize;
            }
          }
        } catch (e) {}
        count--;
      }
      for (var _i = 0; _i < _this.particles.length; _i++) {
        var _p = _this.particles[_i];
        if (!_p.inText) {
          _p.fadeOut();
          var _X = _p.mx - _p.px;
          var _Y = _p.my - _p.py;
          var _T = Math.sqrt(_X * _X + _Y * _Y);
          var _A = Math.atan2(_Y, _X);
          var _C = Math.cos(_A);
          var _S = Math.sin(_A);
          _p.x = _p.px + _C * _T * _p.delta / 2;
          _p.y = _p.py + _S * _T * _p.delta / 2;
          _p.px = _p.x;
          _p.py = _p.y;
          _this._draw(_p);
        }
      }
    };

    _this._setDimensions = function () {
      _this.canvas.width = window.innerWidth >= 800 ? 800 : _this.width;
      _this.canvas.height = window.innerHeight >= 150 ? 150 : _this.height;

      _this.width = _this.canvas.width;
      _this.height = _this.canvas.height;

      _this.canvas.style.position = "absolute";
      _this.canvas.style.left = "0px";
      _this.canvas.style.top = "0px";
      _this.canvas.style.bottom = "0px";
      _this.canvas.style.right = "0px";
      _this.canvas.style.marginTop = window.innerHeight * 0.15 + "px";
    };

    _this._setGradient = function (gradientStops) {
      gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);

      for (var position in gradientStops) {
        var color = gradientStops[position];
        gradient.addColorStop(position, color);
      }
    };

    _this.text = _this.texts[0];
    return _this;
  }

  TextCanvas__createClass(Clock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.canvas = Object(external__react_dom_["findDOMNode"])(this.c);
      if (this.canvas === null || !this.canvas.getContext) {
        return;
      }
      this.ctx = this.canvas.getContext("2d");
      this._setDimensions();
      this._event();

      for (var i = 0; i < this.PARTICLE_NUM; i++) {
        this.particles[i] = new src_Particle(this.canvas);
      }

      setInterval(this._loop, this.FRAME_RATE);
    }
  }, {
    key: "_event",
    value: function _event() {
      var end = false;
      document.addEventListener("click", this._handleClick, false);
      document.addEventListener("touchend", this._handleClick, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement(Canvas, { ref: function ref(r) {
          return _this2.c = r;
        } });
    }
  }]);

  return Clock;
}(external__react__default.a.PureComponent);

/* harmony default export */ var TextCanvas = (TextCanvas_Clock);
// CONCATENATED MODULE: ./src/components/Footer.js
var Footer__templateObject = Footer__taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n"], ["\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n"]),
    Footer__templateObject2 = Footer__taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0px;\n  height: 300px;\n  width: 100%;\n  animation: ", " 3s 0.2s ease both;\n"], ["\n  position: absolute;\n  bottom: 0px;\n  height: 300px;\n  width: 100%;\n  animation: ", " 3s 0.2s ease both;\n"]),
    _templateObject3 = Footer__taggedTemplateLiteral(["\n  height: 100%;\n  position: absolute;\n  left: 50%;\n  margin-left: -800px;\n"], ["\n  height: 100%;\n  position: absolute;\n  left: 50%;\n  margin-left: -800px;\n"]);

function Footer__taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var fadeInUp = Object(external__styled_components_["keyframes"])(Footer__templateObject);

var Footer = external__styled_components__default.a.div(Footer__templateObject2, fadeInUp);

var Scene = external__styled_components__default.a.svg(_templateObject3);

/* harmony default export */ var components_Footer = (function () {
  return external__react__default.a.createElement(
    Footer,
    null,
    external__react__default.a.createElement(
      Scene,
      { x: "0px", y: "0px", width: "1600px", height: "315px" },
      external__react__default.a.createElement("path", {
        id: "ground",
        d: "M0,316.4209c0,0,157.7119-35.416,469-56c7.3833-0.4883,23.7876-3.5488,31.3335-4.0166 c3.7681-0.2334,19.4302,0.9424,28.3335,0.3506c17.1494-1.1396,30.9072-4.2734,38.333-4.6836 c7.5972-0.4189,18.4058,0.3799,27.6665-0.9834c5.7075-0.8408,10.1318-4.042,14.9248-4.2705 c7.8369-0.373,24.5693,3.6084,34.4087,4.2705c11.0586,0.7432,15.2656-1.8135,24.3335-2.1523c10.0576-0.376,20.4629,1.3867,28.6665,0 c3.5957-0.6074,4.4194,0.4209,7.7227-0.7715c1.4927-0.5391,5.8179-3.5693,6.9438-4.2432c3.8335,0.667,6.1426-1.0732,9.917-1.167 c2.2739-0.0566,3.9673-0.9072,6.249-0.9609c2.2725-0.0537,5.5547-1.2383,7.8345-1.2881c2.25-0.0498,3.498,1.0352,5.7554,0.9883 c2.9648-0.0615,7.9341,0.3164,10.9111,0.2607c2.2461-0.042,2.4976-0.5195,4.7505-0.5586c2.9663-0.0518,2.1045-0.5615,5.0825-0.6074 c1.5811-0.0244,6.9976,0.4131,8.582,0.3896c0.8887-0.0127,2.6113,0.373,3.5015,0.3604c1.5527-0.0215,2.2739-0.4404,3.8296-0.4609 c1.416-0.0186,2.0854-0.8555,3.5039-0.873c1.0835-0.0127,2.9155,0.7939,4.0005,0.7813c1.1104-0.0127,3.5542,0.4805,4.666,0.4688 c1.3047-0.0137,1.2773-0.5332,2.584-0.5459c1.415-0.0137,1.165-0.4414,2.5825-0.4541c0.916-0.0078,3.499,0.3984,4.416,0.3906 c1.499-0.0127,1.833,0.6221,3.3345,0.6104c1.3296-0.0098,3.8267-0.666,5.1587-0.6748c1.3335-0.0088,2.8389-0.6514,4.1743-0.6592 c1.3335-0.0078,2.4971,0.6191,3.8325,0.6123c2.5518-0.0127,7.3579,0.3965,9.9175,0.3877c5.3169-0.0176,5.5796-0.4063,10.9297-0.4063 c1.8379,0,6.7031,1.3184,8.3203,1.2402c2.1055-0.1016,3.7139-1.6572,5.5283-1.7969c3.9541-0.3037,7.3262-0.5732,10.5986-0.2598 c6.248,0.5977,12.1973-0.8125,21.207-0.7539c1.7266,0.0107,15.7813,3.085,17.5,3.0977c3.4014,0.0254,6.6191-1.3398,9.9971-1.3066 c4.1221,0.041,8.2275,1.2529,12.3369,1.3066c2.0752,0.0273,4.1543-1.1084,6.2314-1.0771c3.3662,0.0498,4.5547,1.0166,7.9346,1.0771 c2.1104,0.0381,6.4063-0.834,8.5264-0.792c2.7021,0.0537,4.4766-1.6729,7.2002-1.6113c2.9277,0.0654,7.6465,3.1641,10.6074,3.2393 c4.8359,0.123,8.8809-0.9854,13.832-0.8359c2.5029,0.0752,11.8818,2.0498,14.375,2.1289c1.8398,0.0586,2.499-1.2188,4.334-1.1582 c2.1689,0.0713,4.5049,1.209,6.666,1.2832c2.6699,0.0908,4.3398-0.916,6.998-0.8203c3.3379,0.1201,6.0566,1.3193,9.377,1.4453 c4.001,0.1514,4.7764-1.1602,8.75-1c3.1836,0.1289,16.834,1.9912,20,2.125c4.0059,0.1699,4.0029-0.9004,7.9814-0.7227 c6.8594,0.3076,7.9102,1.7656,14.6855,2.0977c8.916,0.4365,23.5254-0.2432,32.293,0.2344 c6.7168,0.3662,13.3896,0.7432,20.0186,1.1318C1458.8545,268.4941,1680,316.4209,1680,316.4209H0z"
      }),
      external__react__default.a.createElement("path", {
        id: "stone1",
        d: "M680.3335,250.7549c7.3335,0.333,13.6665-1.2549,6-6.4609s-14.333-7.1221-18.6665,0.8359 S680.3335,250.7549,680.3335,250.7549z"
      }),
      external__react__default.a.createElement("path", {
        id: "stone2",
        d: "M750.5,243.1709c3.25,0,2.5-3.707-1.75-4.2285s-5,3.7285-3,4.2285S750.5,243.1709,750.5,243.1709z"
      }),
      external__react__default.a.createElement("path", {
        id: "stone3",
        d: "M988.4893,243.8242c2.8857,0.3467,4.8438,1.2627,3.0107-2.0703s-7.3955,1.3555-5.2031,1.7129 S988.4893,243.8242,988.4893,243.8242z"
      }),
      external__react__default.a.createElement("path", {
        id: "stone4",
        d: "M697,248.9355c2.0142-0.2021,2.1665-2.0156,1-2.1816s-9.1543,1.8398-5.9937,2.6699S697,248.9355,697,248.9355z"
      }),
      external__react__default.a.createElement(
        "g",
        { id: "greens", transform: "translate(850, 180)" },
        external__react__default.a.createElement(
          "g",
          null,
          external__react__default.a.createElement("path", { d: "M36.3877,59.4268C33.0576,18.9482,6.4658,4.522,6.4658,4.522s22.4834,16.1426,24.4414,54.2251 C32.8657,96.8311,36.3877,59.4268,36.3877,59.4268z" }),
          external__react__default.a.createElement("path", { d: "M41.8496,83.1641C31.1572,43.98,2.3711,34.6738,2.3711,34.6738s25.063,11.7471,33.9668,48.8271 C45.2441,120.5791,41.8496,83.1641,41.8496,83.1641z" }),
          external__react__default.a.createElement("path", { d: "M31.3955,60.7207C23.7139,25.7979,2.5381,16.9541,2.5381,16.9541s18.4165,10.9277,24.7925,43.9502 C33.7061,93.9258,31.3955,60.7207,31.3955,60.7207z" }),
          external__react__default.a.createElement("path", { d: "M40.4517,62.0068C47.9473,21.6187,25.4009,0.1914,25.4009,0.1914s18.0098,21.9634,9.7896,59.6357 C26.9722,97.499,40.4517,62.0068,40.4517,62.0068z" }),
          external__react__default.a.createElement("path", { d: "M41.9414,69.4316c13.0313-38.9565-6.3218-63.3062-6.3218-63.3062s14.7856,24.251,1.4141,60.4185 C23.6621,102.709,41.9414,69.4316,41.9414,69.4316z" }),
          external__react__default.a.createElement("path", { d: "M29.4976,87.9092c27.4097-30.5938,19.2993-60.6226,19.2993-60.6226s3.958,28.1255-22.6606,56.0249 C-0.4775,111.2109,29.4976,87.9092,29.4976,87.9092z" }),
          external__react__default.a.createElement("animateTransform", {
            attributeName: "transform",
            type: "skewX",
            values: "0;10;0",
            begin: "0s",
            dur: "5.5s",
            fill: "freeze",
            repeatCount: "indefinite"
          }),
          external__react__default.a.createElement("animateMotion", {
            type: "translate",
            values: "0,0;-10,0;0,0",
            begin: "0s",
            dur: "5.5s",
            fill: "freeze",
            repeatCount: "indefinite"
          })
        ),
        external__react__default.a.createElement(
          "g",
          null,
          external__react__default.a.createElement("path", { d: "M34.9995,60.4189C56.0713,30.6665,46.1133,5.4014,46.1133,5.4014S52.2559,29.4746,31.6235,56.79 C10.9917,84.1035,34.9995,60.4189,34.9995,60.4189z" }),
          external__react__default.a.createElement("path", { d: "M36.3047,64.5391c28.4629-23.4443,25.3262-51.189,25.3262-51.189s-0.293,25.4971-27.6851,46.6538 C6.5552,81.1631,36.3047,64.5391,36.3047,64.5391z" }),
          external__react__default.a.createElement("path", { d: "M33.0449,70.502c31.4424-19.2637,32.1875-47.1748,32.1875-47.1748s-3.8291,25.208-33.897,42.3584 C1.271,82.833,33.0449,70.502,33.0449,70.502z" }),
          external__react__default.a.createElement("path", { d: "M13.8237,76.0244c36.5039-5.2158,48.2563-30.543,48.2563-30.543S48.5693,67.1045,14.168,70.9248 C-20.2324,74.749,13.8237,76.0244,13.8237,76.0244z" }),
          external__react__default.a.createElement("animateTransform", {
            attributeName: "transform",
            type: "skewX",
            values: "0;15;0",
            begin: "0s",
            dur: "5s",
            fill: "freeze",
            repeatCount: "indefinite"
          }),
          external__react__default.a.createElement("animateMotion", {
            type: "translate",
            values: "0,0;-15,0;0,0",
            begin: "0s",
            dur: "5s",
            fill: "freeze",
            repeatCount: "indefinite"
          })
        )
      ),
      external__react__default.a.createElement(
        "g",
        { id: "sign", transform: "translate(700, 180)" },
        external__react__default.a.createElement("polygon", { points: "21.2168,1.1143 20.6665,1.5459 19.7593,1.4473 19.229,1.4209 18.9707,1.6274 18.6665,1.9004 17.6865,1.9219 37.3516,87.8877 40.8828,87.0791   " }),
        external__react__default.a.createElement("polygon", { points: "45.4111,9.5537 2.4258,18.7158 1.563,18.498 1.4585,17.2114 0.8291,15.583 0.9165,14.3364 0.0908,12.6548 0.2085,12.0864 -0.1924,11.5308 -0.3296,9.271 43.3408,-0.0376 43.4766,0.5015 43.334,0.9629 43.6533,1.2046 43.8232,1.8784 43.8965,2.7754 44.2217,3.459 44.625,5.0576 45.041,7.5459 45.2637,7.5962 45.6191,9.0073  " }),
        external__react__default.a.createElement("polygon", { points: "47.0078,20.8545 4.2368,29.5503 3.5933,28.5903 3.3965,26.9746 2.4683,24.5137 2.8398,24.1372 2.2676,23.7847 1.9834,22.7563 2.2417,22.3394 1.7388,21.8706 1.2627,20.1426 44.8281,11.2852 45.082,12.4014 45.0723,12.9517 45.3281,13.481 45.752,15.3369 46.0273,17.7524 46.4219,18.2803  " }),
        external__react__default.a.createElement("polygon", { points: "47.666,31.168 4.7803,39.4023 4.251,37.4004 4.4429,36.1895 3.6465,35.1123 3.0142,32.7178 3.2754,32.1025 2.7461,31.7046 2.2676,29.8945 45.9268,21.5107 46.0762,22.2007 45.9512,22.8423 46.2783,23.1372 46.6777,24.9795 46.5234,25.4795 47.3027,27.8667 47.8086,30.2017   " })
      ),
      external__react__default.a.createElement(
        "g",
        { id: "boy_1_" },
        external__react__default.a.createElement(
          "g",
          { id: "boy" },
          external__react__default.a.createElement("path", { d: "M800.7324,167.6929c0,0-7.9688-6.5039-9.7197-8.041c-1.751-1.5366-7.9331-6.5039-8.7197-13.0435 c-0.7861-6.5396,6.0752-15.188,17.7969-16.1885c11.7207-1.0005,12.9727,1.0366,14.1514,2.7163 c1.1787,1.6792,5.7178,11.1494,5.0752,18.6538c-0.6445,7.5049-5.6826,10.1133-9.7559,13.3652 C805.4863,168.4072,800.7324,167.6929,800.7324,167.6929z" }),
          external__react__default.a.createElement("path", { d: "M810.7031,169.2109c-1.0723-1.3037-1.3574-2.9556-1.1426-4.0645c0.2139-1.1084-8.041,0.1128-8.8281,2.542 c1.6445,1.6787,0.751,3.146-0.5,4.1108c-1.25,0.9648-1.6797,1.502-1.9297,1.8237c0.0361,0.5361,0,0.9653,0,0.9653 s-1.4297,1.7153-2.2871,6.5396s-0.6787,6.79-0.9648,8.3267c-0.2852,1.5366-1.4648,5.9678-1.751,10.292s0,4.5742,0,4.5742 s1.251,1.7153,1.1436,4.0742s-1.2705,5.6099-1.2705,5.6099s0.2344,1.8945,1.8779,2.252c1.6445,0.3574,2.3594-0.6436,2.3594-0.6436 s1.0713,1.3223,1.75,4.0742c0.6797,2.752,0.6436,6.79,1.8945,7.9688c1.251,1.1797,1.6074,0.3223,1.6074,0.3223 s0.4648,3.3975-0.9277,6.6855c-1.3945,3.2881-4.1465,6.7568-4.1465,6.7568h11.0781c0,0,1.5723-3.5234-7.1113-2.2363 c3.252-4.0742,3.8955-6.1934,4.0391-11.125c1.8223,0.5,4.252,0.6738,4.9316-0.3271c0.5352,1.3223,2.4297,2.1787,3.3584,1.7139 c-0.2139,3.7168-1.0713,12.1846-1.0713,12.1846l9.0049,0.2852c0,0-0.751-3.2168-6.29-1.4307 c1.001-6.7891,1.3584-11.5068,1.3584-11.5068s1.3584,0.1074,1.8584-0.3926c0.5-0.501,0.6787-5.3252-0.4648-9.9346 c-1.1436-4.6104-0.5-4.4678-0.5-4.4678s1.75-0.8213,1.5-2.8584s-0.8574-3.6807-1.5352-5.5391 c0.4639-0.1074,1-0.7861-0.6797-2.7158c-0.2148-2.5015-0.9648-6.3242-0.6436-7.6465s0.2148-2.8232-0.1787-4.3599 c0-2.4302,0.7148-13.1509-1.25-17.0103c-1.9658-3.8594-2.5371-3.5737-2.5371-3.5737S812.5977,169.0142,810.7031,169.2109z" })
        ),
        external__react__default.a.createElement(
          "g",
          { transform: "translate(783, 122)" },
          external__react__default.a.createElement(
            "g",
            null,
            external__react__default.a.createElement("path", { d: "M35.3506,17.9644c2.9834-3.71,5.9824-15.2095-3.1846-18.3765c2.668,3.833,1.168,5.6665,1.168,5.6665 S32,1.2549,28.666-0.4121c1.5,3.1665,0,5,0,5S20.5,8.9209,24.5,13.2544S35.3506,17.9644,35.3506,17.9644z" }),
            external__react__default.a.createElement("animateTransform", {
              attributeName: "transform",
              type: "skewX",
              values: "0;30;0",
              begin: "0s",
              dur: "4s",
              fill: "freeze",
              repeatCount: "indefinite"
            }),
            external__react__default.a.createElement("animateMotion", {
              type: "translate",
              values: "0,0;-10,0;0,0",
              begin: "0s",
              dur: "4s",
              fill: "freeze",
              repeatCount: "indefinite"
            })
          ),
          external__react__default.a.createElement(
            "g",
            null,
            external__react__default.a.createElement("path", { d: "M27.125,6.2334c-1.8125-0.625-2.0625-1.9375-4.375-2.25c1,0.8125,1.125,1.6875,1.125,1.6875S21.5,4.3584,19.0625,3.9834 c1.3125,0.75,2,1.875,2,1.875s-3.25-0.75-5.875-0.75c1.125,0.3125,1.125,0.6875,1.125,0.6875S10.75,5.8584,8.6875,7.4834 c1,0.125,0.9375,0.6714,0.9375,0.6714s-4.25,1.5786-5.375,3.7661c0.875-0.4375-0.8125,1.8125-0.8125,1.8125s0.75,1.375-0.3125,1.125 S0.5,14.1084,0.5,12.5459c-0.5,2.1875,0.6924,2.5767,1.4375,3.3125c-0.0625,1-0.9375,2.6494-1.25,2.106s0.8594,0.4282,0.0547,2.4731 c-0.8047,2.0459-1.1533,3.7432-0.5103,6.5195s2.7056,4.5264,3.5181,6.2139s0.5-1.6875,0.5-1.6875L27.125,6.2334z" })
          )
        )
      )
    )
  );
});
// CONCATENATED MODULE: ./pages/index.js
var pages__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var pages_IndexPage = function (_React$PureComponent) {
  pages__inherits(IndexPage, _React$PureComponent);

  function IndexPage() {
    pages__classCallCheck(this, IndexPage);

    return pages__possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).apply(this, arguments));
  }

  pages__createClass(IndexPage, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(
        Container,
        null,
        external__react__default.a.createElement("iframe", {
          width: "0",
          height: "0",
          src: "https://www.youtube.com/embed/1P4DaXgzVnE?autoplay=1&rel=0&controls=0&showinfo=0",
          frameBorder: "0",
          allow: "",
          allowFullScreen: true
        }),
        external__react__default.a.createElement(
          Content,
          null,
          external__react__default.a.createElement(components_Sky, null),
          external__react__default.a.createElement(TextCanvas, null),
          external__react__default.a.createElement(components_Footer, null)
        )
      );
    }
  }]);

  return IndexPage;
}(external__react__default.a.PureComponent);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_IndexPage);

/***/ })
/******/ ]);