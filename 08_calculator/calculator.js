const add = function(x,y) {
	let result = x + y;
  return result;
};

const subtract = function(x, y) {
	let result = x - y;
  return result;
};

const sum = function(arr) {
  let result = arr.reduce((sum, current) => sum + current, 0);
  return result;
};

const multiply = function(arr) {
  //  change intial value (sum) to 1 for multiplcation so not repeateadly multiplying by 0
  let result = arr.reduce((sum, current) => sum * current, 1);
  return result;
};

const power = function(x,y) {
  let result = x**y;
  return result;
	
};

const factorial = function(n) {
  if (n < 0) {
    return undefined;
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n-1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
