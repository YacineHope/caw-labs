const exf = require('./echo');

describe('echo function', () => {
  test('prints "echo" 5 times should return "echoechoechoechoecho"', () => {
    expect(exf("echo", 5)).toBe("echoechoechoechoecho");
  });

  test('prints "JS from server" 10 times', () => {
    expect(exf("JS from server", 10)).toBe("JS from server".repeat(10));
  });
});





