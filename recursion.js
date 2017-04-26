function range(start, end) {
  if (end - 1 <= start) {
    return [];
  }

  let results = [start+1];

  return results.concat(range(start + 1, end));

};


// console.log(range(1,5));

function sum_iterative(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++)
    sum += array[i];
  return sum;
};

// console.log(sum_iterative([1,2,3]));

function sum_recursive(array) {
  if (array.length === 0)
    return 0;

  let res = array.shift();

  return res + sum_recursive(array);
};

// console.log(sum_recursive([1, 2, 3]));

function exponentiation(b, n) {
  if (n === 0) {
    return 1;
  }

  return b * exponentiation(b, n - 1);
};

// console.log(exponentiation(2,3));

function exponentiation2(b, n){
  if (n === 0) {
    return 1;
  }

  if (n % 2 === 0) {
    return Math.pow(exponentiation2(b, n / 2), 2);
  } else {
    return b * Math.pow(exponentiation2(b, (n - 1)/ 2), 2);
  }
}

// console.log(exponentiation2(2, 4));

function fibonacci(n) {
  switch (n) {
    case 2:
      return [1, 1];
    case 1:
      return [1];
    case n <= 0:
      return [];
  }

  let prev_fib = fibonacci(n - 1);
  let dup_fib = fibonacci(n - 1);

  return prev_fib.concat(dup_fib.pop() + dup_fib.pop());
};

// console.log(fibonacci(5));

function bsearch(array, target){
  if (array.length === 0) {
    return null;
  }

  let mid_idx = Math.floor(array.length / 2),
    right = array.slice(mid_idx, array.length),
    left = array.slice(0, mid_idx);

  if (array[mid_idx] === target) {
    return mid_idx;
  } else if (target > array[mid_idx]){
    return mid_idx + bsearch(right, target);
  } else {
    return bsearch(left, target);
  }
}

// console.log(bsearch([1,2,3,4,5,6,7], 5));

function mergeSort(array) {
  if (array.length <= 1)
    return array;

  let mid_idx = Math.ceil(array.length / 2),
    right = array.slice(mid_idx, array.length),
    left = array.slice(0, mid_idx);
    return merged(mergeSort(left), mergeSort(right));
};


function merged(left, right){
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
};

console.log(mergeSort([5,2,3,1,4]));
