// === assign
// let obj1 = {
//   name: 'Adam'
// }

// let obj3 = {
//   title: 'developer'
// }

// let obj2 = Object.assign({},obj1, obj3);

// obj2.name = 'Medhat';

// console.log(obj1, obj2);

// === values / keys
// let tasks = {
//   0: 'clean home',
//   1: 'buy groceries',
//   2: 'go party'
// }
// console.log(Object.keys(tasks));

// === sealed / freeze
const myObj = {
  name: 'John',
  age: 30
}
// Object.seal(myObj);
// console.log(Object.isSealed(myObj));
Object.freeze(myObj);
console.log(Object.isFrozen(myObj));

// myObj = {
//   name: 'Mark',
//   age: 27
// }

myObj.name = 'Mark';
myObj.title = 'developer'

console.log(myObj);