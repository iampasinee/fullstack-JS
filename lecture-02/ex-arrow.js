const a = 5;
const b = 10;

// regular function
const add = function (a, b) {
  return (a + b);
};
console.log(`The sum of ${a} and ${b} is ${add(a, b)}`);

// arrow functions
const add_1 = (a, b) => (a + b);
console.log(`The sum of ${a} and ${b} is ${add_1(a, b)}`);

// multi arrow line
const subtract = (a, b) => {
  const result = a - b;
  return result;
};
console.log(`The difference of ${a} and ${b} is ${subtract(a, b)}`);
