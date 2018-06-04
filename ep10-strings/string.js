let str = 'this is the example of strings, not about math.';

// includes: check if this sentence has the word strings
// console.log(str.includes('strings'));

// startsWith: find the words that start with 'th'
// let arr = str.split(' ');
// for(let word of arr) {
//   if(word.startsWith('th')) console.log(word);
// }

// endsWith: get the last words of each sentence
// let arr = str.split(' ');
// for(let word of arr) {
//   if(word.endsWith('.') || word.endsWith(',')) console.log(word);
// }

// [Symbol.iterator]
// let arr = str.split(' ');
// arr.forEach(w => console.log(w));
// console.log(...arr);


// repeat: print a triangle like this
//     *
//    **
//   ***
//  ****
function stars(n = 4) {
  for (let x = 1; x <= n; x++) {
    let line = '';
    line += ' '.repeat(n-x);
    line += '*'.repeat(x);
    console.log(line);
  }
}
stars(5);
