function User(firstName, lastName) {
  var phrase = 'Hi';
  function getFullName() {
    return firstName + ' ' + lastName;
  }
  this.sayHi = function() {
    console.log(phrase + ', ' + getFullName());
  };
}

var ilya = new User('Ilya', 'Shulenin');

ilya.sayHi();
