// Numbers
const sum = (num1, num2) => num1 + num2;

// Strings
const greeting = (name) => `Hello ${name}`;

// Boolean
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = { sum, greeting, isEven };
