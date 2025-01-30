import {vecAdd, vecSubtract, vecMultiply, vecDivide, vecInverse, vecLength, vecNormalize} from '../lib/common/vector.ts'
import {describe, it} from 'node:test';
import assert from 'node:assert';

const vector1 = [1, 2, 3]
const vector2 = [4, 7, 8, 1]
const vector3 = [6, 2, 5]

// Vector Addition tests
describe('Vector addition', () => {
  it('Vector addition: None same sized vectors, larger first', () => {
    const result = [5, 9, 11, NaN]
    assert.deepEqual(vecAdd(vector1, vector2), result);
  });

  it('Vector addition: None same sized vectors, smaller first', () => {
    const result = [5, 9, 11, NaN]
    assert.deepEqual(vecAdd(vector1, vector2), result);
  });

  it('Vector addition: Same sized vectors', () => {
    const result = [7, 4, 8]
    assert.deepEqual(vecAdd(vector1, vector3), result);
  });
});

// Vector Subtraction tests
describe('Vector subtraction', () => {
  it('Vector subtraction: None same sized vectors, larger first', () => {
    const result = [-3, -5, -5, NaN]
    assert.deepEqual(vecSubtract(vector1, vector2), result);
  });

  it('Vector subtraction: None same sized vectors, smaller first', () => {
    const result = [3, 5, 5, NaN]
    assert.deepEqual(vecSubtract(vector2, vector1), result);
  });

  it('Vector subtraction: Same sized vectors', () => {
    const result = [-5, 0, -2]
    assert.deepEqual(vecSubtract(vector1, vector3), result);
  });
});

// Vector Multiplication tests
describe('Vector multiplicaiton', () => {
  it('Vector multiplicaiton: None same sized vectors, larger first', () => {
    const result = [4, 14, 24, NaN]
    assert.deepEqual(vecMultiply(vector1, vector2), result);
  });

  it('Vector multiplicaiton: None same sized vectors, smaller first', () => {
    const result = [4, 14, 24, NaN]
    assert.deepEqual(vecMultiply(vector2, vector1), result);
  });

  it('Vector multiplicaiton: Same sized vectors', () => {
    const result = [6, 4, 15]
    assert.deepEqual(vecMultiply(vector1, vector3), result);
  });
});

// Vector Division tests
describe('Vector division', () => {
  it('Vector division: None same sized vectors, larger first', () => {
    const result = [0.25, 2/7, 3/8, NaN]
    assert.deepEqual(vecDivide(vector1, vector2), result);
  });

  it('Vector division: None same sized vectors, smaller first', () => {
    const result = [4, 3.5, 8/3, NaN]
    assert.deepEqual(vecDivide(vector2, vector1), result);
  });

  it('Vector division: Same sized vectors', () => {
    const result = [1/6, 1, 3/5]
    assert.deepEqual(vecDivide(vector1, vector3), result);
  });
});

// Vector Inverse tests
describe('Vector inversion', () => {
  it('Vector inversion: three entries', () => {
    const result = [-1, -2, -3]
    assert.deepEqual(vecInverse(vector1), result);
  });

  it('Vector inversion: four entries', () => {
    const result = [-4, -7, -8, -1]
    assert.deepEqual(vecInverse(vector2), result);
  });
});

// Vector Length tests
describe('Vector length', () => {
  it('Vector length: three entries', () => {
    const result = Math.sqrt(14)
    assert.deepEqual(vecLength(vector1), result);
  });

  it('Vector length: four entries', () => {
    const result = Math.sqrt(130)
    assert.deepEqual(vecLength(vector2), result);
  });
});

// Vector Normalize tests
describe('Vector normalize', () => {
  it('Vector normalize: three entries', () => {
    const result = [1/Math.sqrt(14), 2/Math.sqrt(14), 3/Math.sqrt(14)]
    assert.deepEqual(vecNormalize(vector1), result);
  });

  it('Vector normalize: four entries', () => {
    const result = [4/Math.sqrt(130), 7/Math.sqrt(130), 8/Math.sqrt(130), 1/Math.sqrt(130)]
    assert.deepEqual(vecNormalize(vector2), result);
  });
});
