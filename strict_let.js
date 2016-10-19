'use strict';

(function() {
  let a = window.b = 5;
})();

console.log(b)                                                                  //  5

/*
  В строгом режиме конструкция

  a = b = 5

  не работает: hh:4 Uncaught ReferenceError: b is not defined
*/
