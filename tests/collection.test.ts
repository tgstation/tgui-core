import { describe, it } from 'bun:test';
import assert from 'node:assert';
import { zip } from '../lib/common/collections.ts';

const array1 = [1, 2, 3];
const array2 = [4, 7, 8, 1];
const array3 = [6, 2, 5];

// Array Zip tests
describe('Array zip', () => {
  it('Array zip: None same sized arrays, smaller first', () => {
    const result = [
      [1, 4],
      [2, 7],
      [3, 8],
      [undefined, 1],
    ];
    assert.deepEqual(zip(array1, array2), result);
  });

  it('Array zip: None same sized arrays, larger first', () => {
    const result = [
      [4, 1],
      [7, 2],
      [8, 3],
      [1, undefined],
    ];
    assert.deepEqual(zip(array2, array1), result);
  });

  it('Array zip: Same sized arrays', () => {
    const result = [
      [1, 6],
      [2, 2],
      [3, 5],
    ];
    assert.deepEqual(zip(array1, array3), result);
  });
});
