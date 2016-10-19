'use strict';

let arr = [ 3, 5, 7 ];
arr.foo = 'hello';

for (let i in arr) {
  console.log(i);                                                               //  '0', '1', '2', 'foo'
}

for (let i of arr) {
  console.log(i);                                                               //  '3', '5', '7'
}

let obj = {
  a: 1,
  b: 2,
  c: 3
}

obj.qwerty = 'xyz';

for (let i in obj) {
  console.log(i);                                                               //  'a', 'b', 'c', 'qwerty'
}

for (let i of obj) {
  console.log(i);                                                               //  Uncaught TypeError: obj[Symbol.iterator] is not a function
}

/*

  for...in проходит через перечисляемые свойства объекта, в произовольном порядке.
  for...of выполняет цикл обхода итерируемых объектов

*/
