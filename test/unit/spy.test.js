const { isEven } = require('../../spy');

const logSpy = jest.spyOn(console, 'log');

afterEach(() => {
  logSpy.mockClear();
});

describe('isEven', () => {
  it('should return even', () => {
    expect(isEven(10)).toMatch('even');
    expect(logSpy.mock.calls.length).toBe(1);
  });

  it('should return odd', () => {
    expect(isEven(9)).toMatch('odd');
    expect(logSpy.mock.calls.length).toBe(1);
  });
});
