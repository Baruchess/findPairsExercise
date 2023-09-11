import { describe, it } from "node:test"
import assert from "node:assert"
import findPairs from './index.js';



describe('findPairs', () => {

  it('No need to handle that all numbers are integers acording to requirements', () => {
    assert(true);
  });

  it('No need to handle duplicates acording to requirements', () => {
    assert(true);
  });

  it('should return an empty list for an empty input list', () => {
    const numbers = [];
    const target = 10;
    const result = findPairs(numbers, target);
    assert.equal(result.length, 0);
  });

  it('should return pairs of the examples in README_entry_level', () => {
    const numbers = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    const target = 12;
    const expected = [[12, 0], [16, -4], [7, 5]];
    const result = findPairs(numbers, target);
    assert.deepStrictEqual(result, expected);
  });


  it('should return pairs that sum up to the target all positives', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const target = 7;
    const expected = [[4, 3], [5, 2], [6, 1]];
    const result = findPairs(numbers, target);
    assert.deepStrictEqual(result, expected);
  });

  it('should return pairs that sum up to the target with a lot of negatives', () => {
    const numbers = [-1,-2,-3,-4,-5,-6,7,9,11];
    const target = 6;
    const expected = [[7, -1], [9, -3], [11, -5]];
    const result = findPairs(numbers, target);
    assert.deepStrictEqual(result, expected);
  });

  it('should return an empty list if no pairs are found', () => {
    const numbers = [1, 2, 3];
    const target = 10;
    const expected = [];
    const result = findPairs(numbers, target);
    assert.deepStrictEqual(result, expected);
  });

});

