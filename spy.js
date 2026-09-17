const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
    return 'even';
  } else {
    console.log(`${number} is odd`);
    return 'odd';
  }
};

module.exports = {
  isEven,
};
