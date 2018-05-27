// function delay(callback, duration) {
//   setTimeout(() => {
//     callback();
//   }, duration);
// }

// delay(()=> {
//   console.log('first done!');
//   delay(()=> {
//     console.log('second done!');
//     delay(()=> {
//       console.log('third done!');
//     }, 200);
//   }, 300);
// }, 500);

let delay = duration => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, duration);

  // setTimeout(()=> {
  //   reject('Error');
  // }, 200);
});

// delay(300)
//   .then((a)=> console.log(a))
//   .catch((error)=> console.log(error));

let first = delay(500)
  .then(()=> {
    console.log('first promise')
    return 'First';
  });

let second = delay(300)
  .then(()=> {
    console.log('second promise');
    return 'Second';
  });

let third = delay(200)
  .then(()=> {
    console.log('third promise')
    return 'Third';
  });

Promise.all(
  [
    first,
    second,
    third
  ]
).then((value)=>console.log(value));