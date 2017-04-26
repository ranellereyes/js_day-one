Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (!sorted){
    sorted = true;

    for (let i = 0; i < this.length - 1; i++) {
      let j = i + 1;

      if (this[i] > this[j]) {
        sorted = false;
        [this[i], this[j]] = [this[j], this[i]];
      }
    }
  }

  return this;
};

// let a = [2, 4, 3, 9];
// console.log(a.bubbleSort());

String.prototype.substrings = function () {
  let substrings = [];
  let chars = this.split('');

  for (let i = 0; i <= chars.length; i++) {
    for (let j = i + 1; j <= chars.length; j++) {
      let substring = chars.slice(i, j);
      substrings.push(substring.join(''));
    }
  }
  return substrings;
};

// let a = "cat";
// console.log(a.substrings());
