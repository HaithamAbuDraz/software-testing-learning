const { sum, greeting, isEven, ANIMALS } = require('./utils');

test('sum - should return 2 + 3 = 5', () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
  expect(result).toBeGreaterThan(4);
  expect(result).toBeLessThan(6);
  expect(result).toBeLessThanOrEqual(5);
  expect(result).toBeGreaterThanOrEqual(5);

  expect(sum(0.102, 0.3)).toBeCloseTo(0.4);
});

test('greeting - should return Hello Haitham', () => {
  expect(greeting('Haitham')).toMatch(/hello haitham/i);
});

test('isEven - should return true for 4', () => {
  expect(isEven(4)).toBeTruthy();
});

test('isEven - should return false for 5', () => {
  expect(isEven(5)).toBeFalsy();
});

test('validate', () => {
  let x; // undefined
  let y = 10;
  let z = null;

  expect(x).toBeUndefined();
  expect(y).toBeDefined();
  expect(z).toBeNull();

  expect(x).not.toBeDefined();
  expect(y).not.toBeNull();
});

test('animals - should return true for cat', () => {
  expect(ANIMALS).toContain('cat');
});
