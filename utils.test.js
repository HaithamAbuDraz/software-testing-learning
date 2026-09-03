const { sum, greeting } = require('./utils');

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