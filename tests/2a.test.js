import assert from 'assert'
import { sumSelective } from '../exercises/2a.js'

describe('sumSelective', () => {
  it('should sum numbers that are either even or greater than 10, but not both', () => {
    assert.strictEqual(sumSelective([1, 4, 12, 15, 20, 5, 8, 10]), 37)
  })

  it('should return 0 for an empty array', () => {
    assert.strictEqual(sumSelective([]), 0)
  })

  it('should correctly handle arrays with only even numbers', () => {
    assert.strictEqual(sumSelective([2, 4, 6, 8, 10]), 30)
  })

  it('should correctly handle arrays with numbers only greater than 10', () => {
    assert.strictEqual(sumSelective([11, 13, 15]), 39)
  })

  it('should skip numbers that are both even and greater than 10', () => {
    assert.strictEqual(sumSelective([12, 14, 16, 3, 5]), 0)
  })

  it('should handle large arrays', () => {
    const largeArray = Array.from({ length: 50 }, (_, i) => i)
    assert.strictEqual(sumSelective(largeArray), 630)
  })
})
