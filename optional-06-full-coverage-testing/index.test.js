import { describe, it } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('sum', () => {

    // normal case
  it('should sum correctly', () => {
    const a = 1
    const b = 2

    const actualValue = sum(a, b)

    const expectedValue = 3
    assert.strictEqual(actualValue, expectedValue);
  });

  // first input is not number case
  it('if the first input is not a number, the function returns 0', () => {
    const a = '4'
    const b = 7

    const actualValue = sum(a, b)

    const expectedValue = 0
    assert.strictEqual(actualValue, expectedValue);
  });

  // second input is not number case
  it('if the second input is not a number, the function returns 0', () => {
    const a = 10
    const b = '5'

    const actualValue = sum(a, b)

    const expectedValue = 0
    assert.strictEqual(actualValue, expectedValue);
  });

  // first input is negative number case
  it('if the first input is a negative number, the function returns 0', () => {
    const a = -3
    const b = 11

    const actualValue = sum(a, b)

    const expectedValue = 0
    assert.strictEqual(actualValue, expectedValue);
  });

  // second input is negative number case
  it('if the second input is a negative number, the function returns 0', () => {
    const a = 5
    const b = -2

    const actualValue = sum(a, b)

    const expectedValue = 0
    assert.strictEqual(actualValue, expectedValue);
  });
});