function Cat(name, owner){
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`;
};

let sam = new Cat("Sam Faber-Manning", "Vu");
let brandon = new Cat("Brandon", "Ranelle");
let janice = new Cat("Yura-Nunaaaa", "Ranelle");
let sunny = new Cat("Sunny", "One-True-Tony-The-Senile-Cat");

// Cat.prototype.cuteStatement = function() {
//   return `Everyone loves ${this.name}!`;
// };

Cat.prototype.meow = function() {
  return `${this.name} says meow!`;
};

janice.meow = function(){
  return `${this.name} says 야옹!`;
};

console.log(sam.meow());
console.log(brandon.meow());
console.log(janice.meow());
console.log(sunny.meow());
