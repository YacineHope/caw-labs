const  mean  = require('./fileImport');

describe('fileImport module', () => {
  test('uses mean function correctly', () => {
    expect(mean([5, 15, 25])).toBe(15);
  });
});
