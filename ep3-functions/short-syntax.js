/**
 * Convert this code into Arrow functions
 */

// Example 1
// ---------
// function expression version
const add = function(x, y) {
  return x + y;
};
// // arrow function version
// const add = (x, y) => x + y;
console.log(add(1, 2));


// Example 2
// ---------
// let people = [
//   { name: 'Ahmed', age: 27 },
//   { name: 'Abbas', age: 22 },
//   { name: 'Aly', age: 29 },
//   { name: 'Ahmed', age: 28 },
//   { name: 'Kareem', age: 35 }
// ];

// // Task: 
// // we need the sum of the ages of the people
// // between 25 and 30 and thier name is Ahmed

// // function expression version
// let ageSum = people
//   .filter(function(person) {
//     return person.age > 25 && person.age < 30;
//   })
//   .filter(function(person) {
//     return person.name === 'Ahmed';
//   })
//   .map(function(person) {
//     return person.age;
//   })
//   .reduce(function(prev, curr) {
//     return (prev || 0) + curr;
//   });

// // arrow function version
// let ageSum = people
//   .filter(person => person.age > 25 && person.age < 30)
//   .filter(person =>  person.name === 'Ahmed')
//   .map(person =>  person.age)
//   .reduce((prev, curr) =>  (prev || 0) + curr);

// console.log(ageSum);
