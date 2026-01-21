const hello = require('./libHello.js')
console.log(hello);

hello.sayHello();
console.log(hello.person.name);
console.log(hello.cube(3));
console.log(hello.add(5,4));
console.log(hello.status);
/*OUTPUT : {
  person: { name: 'Anirach', weight: 85 },
  sayHello: [Function: sayHello],
  cube: [Function: cube],
  add: [Function: add],
  status: true
}
Hello World!
Anirach
27
9
true
*/