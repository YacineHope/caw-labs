const mean = require('./notation');

const scores1 = [2, 4, 6, 10];
const scores2 = [5, 15, 25.6];

console.log("Average of scores1:", mean(scores1)); 
console.log("Average of scores2:", mean(scores2));

module.exports =  mean;