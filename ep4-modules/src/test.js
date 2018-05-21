


class A {
  constructor() {
    this.car = 'Tesla';
  }
}

export default class B extends A {
  constructor() {}

  getCar() {
    console.log(this.car);
  }
}
