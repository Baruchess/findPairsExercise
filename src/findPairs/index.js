/**
 * @description Finds pairs of integers from a list that sum to a given value.
 * @param {Array<number>} numbers - An array of integers.
 * @param {number} target - The target sum value.
 * @returns {Array<Array<number>>} An array of integer pairs that sum to the target value.
 */
const findPairs = (numbers, target) => {
  const pairsFound = [];

  // The set is the most efficient structure here for the hashing
  const numbersMapped =  new Set();
  for(let num of numbers){
    // Calculating the pair upfront enhances the algorithm's efficiency in time and space, O(n) in both.
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
