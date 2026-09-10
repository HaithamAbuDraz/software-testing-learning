const db = require('./db');

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

// Async Code
const getOrders = async () => {
  return [
    { id: 1, price: 10 },
    { id: 2, price: 20 },
  ];
};

const applyDiscount = (orderId) => {
  const order = db.getOrder(orderId);

  if (order.price >= 10) {
    order.price -= order.price * 0.1;
    db.updateOrder(order);
  }

  return order;
};

module.exports = {
  sum,
  greeting,
  isEven,
  ANIMALS,
  getOrderByTd,
  getOrders,
  applyDiscount,
};
