// Example 1
// ---------
// function logArguments() {
//   var args = Array.prototype.slice.call(arguments);
//   let type = args.shift();
//   let base = args.shift();
//   for (var i = 0; i < args.length; i++) {
//     console.log(args[i]);
//   }
// }

function logArguments(type, base, ...args) {
  console.log(args);
  for (let arg of args) {
    console.log(arg);
  }
}

logArguments('numbers', 'base 10', 1, 2, 3, 4, 5);
