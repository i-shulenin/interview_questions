var data1 = {};
console.log(data1.toString);

var data2 = Object.create(null);
data2.text = 'Привет';

console.log(data2.text);                                                        //  Привет
console.log(data2.toString);                                                    //  undefined
