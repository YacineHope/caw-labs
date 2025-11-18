const myColorTest = require('./myColor');

describe("myColor tests", () => {
 test('joining Strings of colors should return "Red,Green,White,Black"', () => {
   expect(myColorTest.join()).toBe("Red,Green,White,Black");
 });
})
 