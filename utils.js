// Numbers
const sum = (num1, num2) => num1 + num2;

// Strings
const greeting = (name) => `Hello ${name}`;

// Boolean
const isEven = (num) => (num % 2 === 0 ? true : false);

// Arrays
const ANIMALS = ['cat', 'dog', 'monkey'];

// Objects
const getOrderByTd = (id) => {
  if (!id) {
    throw new Error('id is not defined');
  }
  return { id: 1, price: 10, data: '09/07/2026' };
};

module.exports = { sum, greeting, isEven, ANIMALS, getOrderByTd };
