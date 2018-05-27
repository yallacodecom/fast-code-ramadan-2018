let str = "Medhat";

// let iterator = str[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());




// Emplementation Example
// var someString = new String('hi');

// someString[Symbol.iterator] = function() {
//   return { // this is the iterator object, returning a single element, the string "bye"
//     next: function() {
//       if (this._first) {
//         this._first = false;
//         return { value: 'bye', done: false };
//       } else {
//         return { done: true };
//       }
//     },
//     _first: true
//   };
// };

// let iterator = someString[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// spread operator
console.log(...str)