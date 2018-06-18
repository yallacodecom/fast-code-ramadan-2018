function Person() {
  this.age = 20;

  setInterval(() => {
    this.age++;
  }, 500);
}

var p = new Person();
console.log(p.age);

setInterval(function() {
  console.log(p.age);
}, 500);

