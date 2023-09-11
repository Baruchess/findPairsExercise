import findPairs from './src/findPairs/index.js';

const numbersInput = process.argv[2].split(',').map(num => Number(num));
const targetInput = process.argv[3];


console.log('==========PAIRS FOUND:==============');
console.table(findPairs(numbersInput, targetInput));

