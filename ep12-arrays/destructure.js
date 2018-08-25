// Array
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let [a,b,c] = arr;
// // let a = arr[0];
// // let b = arr[1];
// // let c = arr[2];
// console.log(a,b,c);

// Object
// let obj = { foo: 111, bar: 222, foobar: 333 };
// let {foo,bar} = obj;
// console.log(x,bar);

// swap values
// let x = 1;
// let y = 2;

// // let temp = x;
// // x = y;
// // y = temp;
// [x, y] = [y,x];
// console.log(x, y);

// skip values
// let [a, , , , , , , b] = arr;
// console.log(a, b);

// function params
function printMyInfo({name, age}) {
  return `My name is ${name} and my age is ${age}`;
}

let info = { name: 'Medhat', age: 28 };
console.log(printMyInfo(info));
