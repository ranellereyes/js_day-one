// Callback is the JS-equiv to a Ruby proc

Array.prototype.myEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

Array.prototype.myMap = function (cb) {
  let result = [];
  this.myEach(function (el) {
    result.push(cb(el));
  });
  return result;
};

// let a = [1,2,3];
// let b = function(el) {  return el * 2 };
// console.log(a.myMap(b));

Array.prototype.myInject = function (cb) {
  let result = 0;
  this.myEach(function(el) {
    result = cb(result, el);
  });
  return result;
};

// let a = [1,2,3];
// let b = function(result, el) {
//   return result += el;
// };
//
// console.log(a.myInject(b));
