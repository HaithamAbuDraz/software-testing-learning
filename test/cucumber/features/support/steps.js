const { Given, When, Then } = require('@cucumber/cucumber');
const { isPositive } = require('../../../../cucumber');
const assert = require('assert');

Given('number {int}', function (number) {
  this.number = number;
});

When('i ask if number {int} is positive', function (number) {
  this.actualAnswer = isPositive(number);
});

Then('i should receive {int}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});
