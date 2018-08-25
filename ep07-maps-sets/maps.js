// let hashObj = new Object();

// hashObj['key1'] = 'val1';

// console.log(hashObj.size);

let map = new Map();

// map.set('key1', 'val1');
// map.set('key2', 'val2');
// map.set('key3', 'val3');


// map.forEach(item => console.log(item));


let objKey = {};
let funcKey = () => {};


map.set(objKey, 'the value of object key');
map.set(funcKey, 'the value of function key');

map.forEach(item => {
  console.log(item);
});



// Example of Months Map

// let months = new Map();

// months.set(1, 'Jan');
// months.set(2, 'Feb');
// months.set(3, 'Mar');
// months.set(4, 'Apr');
// months.set(5, 'May');
// months.set(6, 'Jun');
// months.set(7, 'Jul');
// months.set(8, 'Aug');
// months.set(9, 'Sep');
// months.set(10, 'Oct');
// months.set(11, 'Nov');
// months.set(12, 'Dec');

// let whatIsTheCurrentMonth = (month = (new Date()).getMonth() + 1 ) => {
//   return months.get(month);
// };

// console.log(whatIsTheCurrentMonth(10));