import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

describe('sum', () => {
  it('should sum correctly', () => {
    const a = 1
    const b = 2

    const actualValue = sum(a, b)

    const expectedValue = 3
    assert.strictEqual(actualValue, expectedValue);
  });
});