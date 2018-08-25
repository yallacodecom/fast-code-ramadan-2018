let delay = duration =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('inside promise');
      resolve();
    }, duration);
  });

function* myGenerator() {
  let first = yield delay(400);
  let second = yield delay(4000);
}

let gen = myGenerator();

gen.next();
gen.next()
