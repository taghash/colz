(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["colz"] = factory();
	else
		root["colz"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Color": () => (/* binding */ Color),
  "ColorScheme": () => (/* binding */ ColorScheme),
  "Hsl": () => (/* binding */ Hsl),
  "Hsla": () => (/* binding */ Hsla),
  "Rgb": () => (/* binding */ Rgb),
  "Rgba": () => (/* binding */ Rgba),
  "componentToHex": () => (/* binding */ componentToHex),
  "hexToRgb": () => (/* binding */ hexToRgb),
  "hsbToHsl": () => (/* binding */ hsbToHsl),
  "hsbToRgb": () => (/* binding */ hsbToRgb),
  "hslToRgb": () => (/* binding */ hslToRgb),
  "hsvToHsl": () => (/* binding */ hsvToHsl),
  "hsvToRgb": () => (/* binding */ hsvToRgb),
  "hue2rgb": () => (/* binding */ hue2rgb),
  "randomColor": () => (/* binding */ randomColor),
  "rgbToHex": () => (/* binding */ rgbToHex),
  "rgbToHsb": () => (/* binding */ rgbToHsb),
  "rgbToHsl": () => (/* binding */ rgbToHsl)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
;// CONCATENATED MODULE: ./src/colz.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Colorz (or Colz) is a Javascript "library" to help
 * in color conversion between the usual color-spaces
 * Hex - Rgb - Hsl / Hsv - Hsb
 *
 * It provides some helpers to output Canvas / CSS
 * color strings.
 *
 * by Carlos Cabo 2013
 * http://carloscabo.com
 *
 * Some formulas borrowed from Wikipedia or other authors.
 */
var round = Math.round;
/*
 ==================================
 Color constructors
 ==================================
*/

var Rgb = /*#__PURE__*/function () {
  function Rgb(col) {
    _classCallCheck(this, Rgb);

    this.r = col[0];
    this.g = col[1];
    this.b = col[2];
  }

  _createClass(Rgb, [{
    key: "toString",
    value: function toString() {
      return "rgb(".concat(this.r, ",").concat(this.g, ",").concat(this.b, ")");
    }
  }]);

  return Rgb;
}();
var Rgba = /*#__PURE__*/function (_Rgb) {
  _inherits(Rgba, _Rgb);

  var _super = _createSuper(Rgba);

  function Rgba(col) {
    var _this;

    _classCallCheck(this, Rgba);

    _this = _super.call(this, col);
    _this.a = col[3];
    return _this;
  }

  _createClass(Rgba, [{
    key: "toString",
    value: function toString() {
      return "rgba(".concat(this.r, ",").concat(this.g, ",").concat(this.b, ",").concat(this.a, ")");
    }
  }]);

  return Rgba;
}(Rgb);
var Hsl = /*#__PURE__*/function () {
  function Hsl(col) {
    _classCallCheck(this, Hsl);

    this.h = col[0];
    this.s = col[1];
    this.l = col[2];
  }

  _createClass(Hsl, [{
    key: "toString",
    value: function toString() {
      return "hsl(".concat(this.h, ",").concat(this.s, "%,").concat(this.l, "%)");
    }
  }]);

  return Hsl;
}();
var Hsla = /*#__PURE__*/function (_Hsl) {
  _inherits(Hsla, _Hsl);

  var _super2 = _createSuper(Hsla);

  function Hsla(col) {
    var _this2;

    _classCallCheck(this, Hsla);

    _this2 = _super2.call(this, col);
    _this2.a = col[3];
    return _this2;
  }

  _createClass(Hsla, [{
    key: "toString",
    value: function toString() {
      return "hsla(".concat(this.h, ",").concat(this.s, "%,").concat(this.l, "%,").concat(this.a, ")");
    }
  }]);

  return Hsla;
}(Hsl);
/*
 ==================================
 Main Colz color object
 ==================================
*/

var Color = /*#__PURE__*/function () {
  function Color(r, g, b) {
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.0;

    _classCallCheck(this, Color);

    // If args are not given in (r, g, b, [a]) format, convert
    if (typeof r === 'string') {
      var str = r; // Add initial '#' if missing

      if (str.charAt(0) !== '#') {
        str = '#' + str;
      } // If Hex in #fff format convert to #ffffff


      if (str.length < 7) {
        str = '#' + str[1] + str[1] + str[2] + str[2] + str[3] + str[3];
      }

      var _hexToRgb = hexToRgb(str);

      var _hexToRgb2 = _slicedToArray(_hexToRgb, 3);

      r = _hexToRgb2[0];
      g = _hexToRgb2[1];
      b = _hexToRgb2[2];
    } else if (r instanceof Array) {
      a = r[3] || a;
      b = r[2];
      g = r[1];
      r = r[0];
    }

    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.rgb = new Rgb([this.r, this.g, this.b]);
    this.rgba = new Rgba([this.r, this.g, this.b, this.a]);
    this.hex = rgbToHex(this.r, this.g, this.b);
    this.hsl = new Hsl(rgbToHsl(this.r, this.g, this.b));
    this.h = this.hsl.h;
    this.s = this.hsl.s;
    this.l = this.hsl.l;
    this.hsla = new Hsla([this.h, this.s, this.l, this.a]);
  }

  _createClass(Color, [{
    key: "setHue",
    value: function setHue(newHue) {
      this.h = newHue;
      this.hsl.h = newHue;
      this.hsla.h = newHue;
      this.updateFromHsl();
    }
  }, {
    key: "setSat",
    value: function setSat(newSat) {
      this.s = newSat;
      this.hsl.s = newSat;
      this.hsla.s = newSat;
      this.updateFromHsl();
    }
  }, {
    key: "setLum",
    value: function setLum(newLum) {
      this.l = newLum;
      this.hsl.l = newLum;
      this.hsla.l = newLum;
      this.updateFromHsl();
    }
  }, {
    key: "setAlpha",
    value: function setAlpha(newAlpha) {
      this.a = newAlpha;
      this.hsla.a = newAlpha;
      this.rgba.a = newAlpha;
    }
  }, {
    key: "updateFromHsl",
    value: function updateFromHsl() {
      // Updates Rgb
      this.rgb = null;
      this.rgb = new Rgb(hslToRgb(this.h, this.s, this.l));
      this.r = this.rgb.r;
      this.g = this.rgb.g;
      this.b = this.rgb.b;
      this.rgba.r = this.rgb.r;
      this.rgba.g = this.rgb.g;
      this.rgba.b = this.rgb.b; // Updates Hex

      this.hex = null;
      this.hex = rgbToHex([this.r, this.g, this.b]);
    }
  }]);

  return Color;
}();
/*
 ==================================
 Public Methods
 ==================================
*/

var randomColor = function randomColor() {
  var r = '#' + Math.random().toString(16).slice(2, 8);
  return new Color(r);
};
var hexToRgb = function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
};
var componentToHex = function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}; // You can pass 3 numeric values or 1 Array

var rgbToHex = function rgbToHex(r, g, b) {
  if (r instanceof Array) {
    b = r[2];
    g = r[1];
    r = r[0];
  }

  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};
/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 *
 * @param {Number} r The red color value
 * @param {Number} g The green color value
 * @param {Number} b The blue color value
 * @return {Array} The HSL representation
 */

var rgbToHsl = function rgbToHsl(r, g, b) {
  if (r instanceof Array) {
    b = r[2];
    g = r[1];
    r = r[0];
  }

  var h, s, l, d, max, min;
  r /= 255;
  g /= 255;
  b /= 255;
  max = Math.max(r, g, b);
  min = Math.min(r, g, b);
  l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  } // CARLOS


  h = round(h * 360);
  s = round(s * 100);
  l = round(l * 100);
  return [h, s, l];
};
var hue2rgb = function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }

  if (t > 1) {
    t -= 1;
  }

  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }

  if (t < 1 / 2) {
    return q;
  }

  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }

  return p;
};
/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 *
 * @param {Number} h The hue
 * @param {Number} s The saturation
 * @param {Number} l The lightness
 * @return {Array} The RGB representation
 */

var hslToRgb = function hslToRgb(h, s, l) {
  if (h instanceof Array) {
    l = h[2];
    s = h[1];
    h = h[0];
  }

  h = h / 360;
  s = s / 100;
  l = l / 100;
  var r, g, b, q, p;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [round(r * 255), round(g * 255), round(b * 255)];
};
/**
 * Converts an RGB color value to HSB / HSV. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 *
 * @param {Number} r The red color value
 * @param {Number} g The green color value
 * @param {Number} b The blue color value
 * @return {Array} The HSB representation
 */

var rgbToHsb = function rgbToHsb(r, g, b) {
  var max, min, h, s, v, d;
  r = r / 255;
  g = g / 255;
  b = b / 255;
  max = Math.max(r, g, b);
  min = Math.min(r, g, b);
  v = max;
  d = max - min;
  s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  } // map top 360,100,100


  h = round(h * 360);
  s = round(s * 100);
  v = round(v * 100);
  return [h, s, v];
};
/**
 * Converts an HSB / HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 *
 * @param {Number} h The hue
 * @param {Number} s The saturation
 * @param {Number} v The value
 * @return {Array} The RGB representation
 */

var hsbToRgb = function hsbToRgb(h, s, v) {
  var r, g, b, i, f, p, q, t; // h = h / 360;

  if (v === 0) {
    return [0, 0, 0];
  }

  s = s / 100;
  v = v / 100;
  h = h / 60;
  i = Math.floor(h);
  f = h - i;
  p = v * (1 - s);
  q = v * (1 - s * f);
  t = v * (1 - s * (1 - f));

  if (i === 0) {
    r = v;
    g = t;
    b = p;
  } else if (i === 1) {
    r = q;
    g = v;
    b = p;
  } else if (i === 2) {
    r = p;
    g = v;
    b = t;
  } else if (i === 3) {
    r = p;
    g = q;
    b = v;
  } else if (i === 4) {
    r = t;
    g = p;
    b = v;
  } else if (i === 5) {
    r = v;
    g = p;
    b = q;
  }

  r = Math.floor(r * 255);
  g = Math.floor(g * 255);
  b = Math.floor(b * 255);
  return [r, g, b];
};
var hsvToRgb = hsbToRgb; // alias

/* Convert from Hsv */

var hsbToHsl = function hsbToHsl(h, s, b) {
  return rgbToHsl(hsbToRgb(h, s, b));
};
var hsvToHsl = hsbToHsl; // alias

/*
 ==================================
 Color Scheme Builder
 ==================================
*/

var ColorScheme = /*#__PURE__*/function () {
  function ColorScheme(colorVal, angleArray) {
    _classCallCheck(this, ColorScheme);

    this.palette = [];

    if (angleArray === undefined && colorVal instanceof Array) {
      // Asume you passing a color array ['#f00','#0f0'...]
      this.createFromColors(colorVal);
    } else {
      // Create scheme from color + hue angles
      this.createFromAngles(colorVal, angleArray);
    }
  }

  _createClass(ColorScheme, [{
    key: "createFromColors",
    value: function createFromColors(colorVal) {
      for (var i in colorVal) {
        if (colorVal.hasOwnProperty(i)) {
          // console.log(colorVal[i]);
          this.palette.push(new Color(colorVal[i]));
        }
      }

      return this.palette;
    }
  }, {
    key: "createFromAngles",
    value: function createFromAngles(colorVal, angleArray) {
      this.palette.push(new Color(colorVal));

      for (var i in angleArray) {
        if (angleArray.hasOwnProperty(i)) {
          var tempHue = (this.palette[0].h + angleArray[i]) % 360;
          this.palette.push(new Color(hslToRgb(tempHue, this.palette[0].s, this.palette[0].l)));
        }
      }

      return this.palette;
    }
    /* Complementary colors constructors */

  }], [{
    key: "Compl",
    value: function Compl(colorVal) {
      return new this(colorVal, [180]);
    }
    /* Triad */

  }, {
    key: "Triad",
    value: function Triad(colorVal) {
      return new this(colorVal, [120, 240]);
    }
    /* Tetrad */

  }, {
    key: "Tetrad",
    value: function Tetrad(colorVal) {
      return new this(colorVal, [60, 180, 240]);
    }
    /* Analogous */

  }, {
    key: "Analog",
    value: function Analog(colorVal) {
      return new this(colorVal, [-45, 45]);
    }
    /* Split complementary */

  }, {
    key: "Split",
    value: function Split(colorVal) {
      return new this(colorVal, [150, 210]);
    }
    /* Accented Analogous */

  }, {
    key: "Accent",
    value: function Accent(colorVal) {
      return new this(colorVal, [-45, 45, 180]);
    }
  }]);

  return ColorScheme;
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});