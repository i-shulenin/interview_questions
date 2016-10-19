"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var t = { a: 1, b: 2, c: 3, d: [41, 42, 43]};
var tt = _extends({}, t);

t.d = [51, 52, 53];

console.log(t);
console.log(tt);
