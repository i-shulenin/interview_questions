'use strict';

var name = 'Ilya';
var user = {
  name,
  sayHi() {                                                                     // sayHi: function() {console.log(this.name)}
    console.log('Hi' + this.name);
  }
};

user.sayHi();
