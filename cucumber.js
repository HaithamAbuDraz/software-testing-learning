module.exports = {
  default: {
    paths: ['test/cucumber/features/**/*.feature'],
    require: ['test/cucumber/features/**/*.js'],
  },
  isPositive: function (number) {
    return number > 0 ? 1 : 0;
  },
};
