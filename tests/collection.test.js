import assert from 'node:assert';
import { describe, it } from 'node:test';
import { zip } from '../lib/common/collections.ts';

const vector1 = [1, 2, 3];
const vector2 = [4, 7, 8, 1];
const vector3 = [6, 2, 5];

// Vector Addition tests
describe('Array zip', () => {
  it('Array zip: None same sized arrays, smaller first', () => {
    const result = [
      [1, 4],
      [2, 7],
      [3, 8],
      [undefined, 1],
    ];
    assert.deepEqual(zip(vector1, vector2), result);
  });

  it('Array zip: None same sized arrays, larger first', () => {
    const result = [
      [4, 1],
      [7, 2],
      [8, 3],
      [1, undefined],
    ];
    assert.deepEqual(zip(vector2, vector1), result);
  });

  it('Array zip: Same sized arrays', () => {
    const result = [
      [1, 6],
      [2, 2],
      [3, 5],
    ];
    assert.deepEqual(zip(vector1, vector3), result);
  });
});
