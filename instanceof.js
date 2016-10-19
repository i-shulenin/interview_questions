function Animal() {}

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype);

var rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit );                                         //  true
console.log(rabbit instanceof Animal );                                         //  true
console.log(rabbit instanceof Object );                                         //  true

//  instanceof позволяет проверить, какому классу принадлежит объект, с учетом
//  прототипного наследования.
