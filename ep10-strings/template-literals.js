// let longString =
//   'line1 in the string\n' + 
//   'line2 in the string\n' + 
//   'line3 in the string';
// let longString =
//   `line1 in the string 
// line2 in the string 
// line3 in the string`;
// console.log(longString);

// String interpolation
// function sum(x, y) {
//   // console.log(x + ' + ' + y + ' = ' + (x + y));
//   console.log(`${x} + ${y} = ${x + y}`);
// }
// sum(1, 2);

// Tagged template
function myInfo(string, ...data) {
  console.log(string, data);
}

let name = "Medhat";
let title = "Sr Frontend Engineer";
myInfo`My name is ${name}, my title is ${title}`;
