const getOrder = (orderId) => {
  return { id: orderId, price: 100 };
};

const updateOrder = (order) => {
  console.log('order is updated !');
};

module.exports = {
  getOrder,
  updateOrder,
};
