// cannot return objects implicitly
// --------------------------------
const funcObj = () => ({name: 'Medhat'})
console.log(funcObj());

// cannot be used as constructor
// -----------------------------
// const Func = () => {};
// let f = new Func();

// Doesn't have prototype property
// -------------------------------
// const funcProperty = function() {};
// funcProperty.prototype.add = () => {};

// Cannot be affected by .call / .apply
// ------------------------------------
// let adder = {
//   base: 1,
//   add: function(a) {
//     var f = v => v + this.base;
//     var b = {
//       base: 2
//     };
//     return f.call(b, a);
//   }
// };
// console.log(adder.add(4));
