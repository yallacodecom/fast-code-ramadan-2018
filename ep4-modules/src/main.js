// named exports
// import {getUserName, address} from './modules';

// default exports
// import user, {address,getUserName} from './modules';

// all together
// import * as all from './modules';


// console.log(all.default);
// --------------------------------




import Person from './classes';

let p = new Person();

// console.log(p.languages)

// // ----------------------------------
p.setName = 'Medhat Dawoud';
console.log('Name     =>', p.getName);
console.log('Job      =>', p.getJob());
console.log('Age      =>', p.getAge());
console.log('Speaking =>', p.languages);

// static
console.log('weight   =>', Person.getWeight(), 'kg');
console.log('height   =>', Person.getHeight(), 'cm');
