var animal = {
  eats: true
};

var rabbit = {
  jumps: true,
  __proto__: animal
};

//  for..in не делает различия между свойствами объекта и его прототипа

for (var key in rabbit) {
  console.log(key + ' = ' + rabbit[key] );                                      //  'eats', 'jumps'
}

//  obj.hasOwnProperty(prop) возвращает true, если свойство prop принадлежит
//  самому объекту obj

//  Используем метод hasOwnProperty нового объекта (hasOwnProperty может быть
//  переопределен у rabbit) и вызываем его с передачей rabbit в качестве this

for (var key in rabbit) {
  ({}).hasOwnProperty.call(rabbit, key) ? console.log(key + ' = ' + rabbit[key]) : null;
}
