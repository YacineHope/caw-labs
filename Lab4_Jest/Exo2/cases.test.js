const cases = require('./cases');


describe("Cases tests", () => {
 test('adding array[1,2] should return 1', () => {
   expect(cases.first([1, 2])).toBe(1);
 });
})

describe("Cases tests", () => {
 test('adding array[2,3,4] should return 4', () => {
   expect(cases.last([2, 3, 4])).toBe(4);
 });
})

describe("Cases tests", () => { 
  test('chunking array[1,2,3,4,5,6] with size 2 should return [[1,2],[3,4],[5,6]]', () => {
    expect(cases.chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
  });
})