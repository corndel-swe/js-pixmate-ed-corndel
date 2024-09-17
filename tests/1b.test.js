import assert from 'assert'
import { sumArray } from '../exercises/1b.js' // Update with the correct path

describe('sumArray', () => {
  it('should return the sum of all numbers in an array', () => {
    assert.strictEqual(sumArray([1, 2, 3, 4, 5]), 15)
    assert.strictEqual(sumArray([10, -2, 3]), 11)
  })

  it('should return 0 for an empty array', () => {
    assert.strictEqual(sumArray([]), 0)
  })

  it('should handle arrays with negative numbers', () => {
    assert.strictEqual(sumArray([-1, -2, -3, -4, -5]), -15)
  })

  it('should return the number itself for single-element arrays', () => {
    assert.strictEqual(sumArray([5]), 5)
    assert.strictEqual(sumArray([-10]), -10)
  })

  it('should handle large arrays', () => {
    const largeArray = Array.from({ length: 100 }, (_, i) => i + 1)
    const expectedSum = largeArray.reduce((a, b) => a + b, 0)
    assert.strictEqual(sumArray(largeArray), expectedSum)
  })

  // Add more test cases as needed
})
