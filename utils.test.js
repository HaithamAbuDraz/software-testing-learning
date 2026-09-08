const {
  sum,
  greeting,
  isEven,
  ANIMALS,
  getOrderByTd,
  getOrders,
  applyDiscount,
} = require('./utils');

const db = require('./db');

describe('sum', () => {
  it('should return 2 + 3 = 5', () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
    expect(result).toBeGreaterThan(4);
    expect(result).toBeLessThan(6);
    expect(result).toBeLessThanOrEqual(5);
    expect(result).toBeGreaterThanOrEqual(5);

    expect(sum(0.102, 0.3)).toBeCloseTo(0.4);
  });
});

describe('greeting', () => {
  it('should return Hello Haitham', () => {
    expect(greeting('Haitham')).toMatch(/hello haitham/i);
  });
});

describe('isEven', () => {
  it('should return true for 4', () => {
    expect(isEven(4)).toBeTruthy();
  });

  it('should return false for 5', () => {
    expect(isEven(5)).toBeFalsy();
  });
});

describe('validate', () => {
  it('should check defined, undefined, and null', () => {
    let x; // undefined
    let y = 10;
    let z = null;

    expect(x).toBeUndefined();
    expect(y).toBeDefined();
    expect(z).toBeNull();

    expect(x).not.toBeDefined();
    expect(y).not.toBeNull();
  });
});

describe('animals', () => {
  it('should contain cat', () => {
    expect(ANIMALS).toContain('cat');
  });
});

describe('getOrderByTd', () => {
  it('should return order of id = 1', () => {
    const result = getOrderByTd(1);
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty('id', 1);
  });

  it('should throw error if id is not defined', () => {
    expect(() => getOrderByTd()).toThrow('id is not defined');
  });
});

describe('getOrders', () => {
  it('should return some orders', async () => {
    // const orders = await getOrders();
    // expect((await getOrders()).length).toBe(2);
    await expect(getOrders()).resolves.toContainEqual({ id: 1, price: 10 });
  });
});

describe('applyDiscount', () => {

  it('should apply discount 10% for order price 10', () => {

    const myFun = jest.fn();
    myFun.mockReturnValueOnce(10).mockReturnValue(5);

    // db.getOrder = function (orderId) {
    //   return { id: orderId, price: 10 };
    // };

    // const order = applyDiscount(1);
    // expect(order).toEqual({ id: 1, price: 9 });

    console.log(myFun(), myFun());
  });
});

