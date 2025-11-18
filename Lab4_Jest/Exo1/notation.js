
const mean = function(scores) {

  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum / scores.length;
}

console.log(mean([2, 4, 6, 10])); 
console.log(mean([5, 15, 25.6]));

module.exports = mean;
