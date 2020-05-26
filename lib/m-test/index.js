"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _mTest.default;
  },
});

var _interface = require("./interface");

Object.keys(_interface).forEach(function(key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interface[key];
    },
  });
});

var _mTest = _interopRequireDefault(require("./m-test"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
