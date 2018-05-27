let arr = [1, 3, 5, 7, 9];

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }
// 
let obj = { 1: 'x', 5: 'y', 3: 'z' };

for(let x in obj) {
  console.log(x+' is '+obj[x]);
}


// let obj = { 1: 'x', 5: 'y', 3: 'z' };
// make the object iterable
// obj[Symbol.iterator] = () => {
//   let objArr = Object.values(obj);
//   return {
//     next: function() {
//       if (objArr.length > 0) {
//         let newVal = objArr[0];
//         objArr.shift();
//         return { value: newVal, done: false };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// }

// for(let x of obj) {
//   console.log(x);
// }