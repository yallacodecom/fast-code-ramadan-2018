class Human {
  constructor() {
    console.log('Human Constructor');

    this.name = 'Medhat Dawoud';
    this.job = 'Frontend Developer';
    this.languages = 'Arabic, English';
  }

  getAge() {
    return 28;
  }                      
}

export default class Person{
  constructor(){
    console.log('Person Constructor');

    this.name = 'John';
    this.job = 'Sofware Engineer';
  }

  getJob() {
    return this.job;
  }

  get getName() {
    return this.name;
  }

  set setName(personName) {
    this.name = personName;
  }

  static getHeight() {
    return 173;
  }

  static getWeight() {
    return 83;
  }
}