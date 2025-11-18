function exf(s, n) {
  if (typeof s !== 'string' || typeof n !== 'number' || n <= 0) {
    return "";
  }
  return s.repeat(n); 
}

exf("echo", 5);
exf("JS from server", 10) ;

module.exports = exf;