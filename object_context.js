var fullname = 'John Doe';
var obj = {
  fullname: 'Colin Ihrig',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function() {
      return this.fullname;
    }
  }
};

console.log(obj.prop.getFullname());                                            //  Aurelio De Rosa

/*
  Контекст вызова: obj
*/

var test = obj.prop.getFullname;

console.log(test());                                                            //  John Doe

/*
  Контекст вызова: window
*/

console.log(test.call(obj.prop));                                               //  Aurelio De Rosa

/*
  Явное указали контекст obj
*/
