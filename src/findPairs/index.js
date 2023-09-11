/**
 * Function that finds pairs of integers from a list that sum to a given value
 * @param {Array<number>} numbers
 * @param {number} target
 */
const findPairs = (numbers, target) => {
  const pairsFound = [];
  const numbersMapped =  new Set();
  for(let num of numbers){
    const pairCandidate = target - num;
    if(numbersMapped.has(pairCandidate)){
      pairsFound.push([num, pairCandidate]);
    } else {
      numbersMapped.add(num);
    }
  }
  return pairsFound;
}

export default findPairs;
