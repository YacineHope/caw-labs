const mean = require('./notation');

describe('mean function', () => {
  test('calculates average of scores (10+20+30)/3 should return 20', () => {
    expect(mean([10, 20, 30])).toBe(20);
  });

  test('works with single element array', () => {
    expect(mean([50])).toBe(50);
  });

  test('returns NaN for empty array', () => {
    expect(mean([])).toBeNaN();
  });
});