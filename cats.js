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

console.log(sam.cuteStatement());
