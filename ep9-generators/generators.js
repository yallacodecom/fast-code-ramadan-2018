function* myGenerator() {
  let first = yield 1;
  let second = yield 2;
  let third = yield 3;

  console.log(first, second, third);
}

let gen = myGenerator();


for(let x of gen) {
  console.log(x);
}