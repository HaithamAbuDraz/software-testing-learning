const { default: axios } = require('axios');
const db = require('./db');
const email = require('./email');

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

const fetchData = async () => {
  const data = axios.get('https://url.com');
  // oprations
  return data;
};

const createOrder = async (userId, products) => {
  if (!userId) {
    throw new Error('userId not found');
  }

  let totalPrice = 0;
  products.forEach((product) => (totalPrice += product.price));

  await db.createOrder(userId, products);

  const user = await db.getUser(userId);
  email.sendEmail(user.email, totalPrice);

  return `order created successfully with totalPrice: ${totalPrice} and products: ${products}`;
};

module.exports = {
  sum,
  greeting,
  isEven,
  ANIMALS,
  getOrderByTd,
  getOrders,
  applyDiscount,
  fetchData,
  createOrder,
};
