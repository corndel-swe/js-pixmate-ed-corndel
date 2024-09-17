import assert from 'assert'
import { gridLimit } from '../exercises/3.js'

describe('gridLimit', () => {
  it('should count the numbers larger than 10 in a grid', () => {
    const grid1 = [
      [3, 12, 1],
      [19, 10, 11],
      [9, 5, 105]
    ]
    assert.strictEqual(gridLimit(grid1), 4)

    const grid2 = [
      [15, 20, 25],
      [11, 12, 13],
      [16, 17, 18]
    ]
    assert.strictEqual(gridLimit(grid2), 9)
  })

  it('should return 0 for a grid with all numbers 10 or less', () => {
    const grid = [[1, 2], [3, 4, 5, 6], [7, 8], [9]]
    assert.strictEqual(gridLimit(grid), 0)
  })

  it('should handle an empty grid', () => {
    assert.strictEqual(gridLimit([]), 0)
  })

  it('should handle grids with empty sub-arrays', () => {
    const grid = [[], [11, 20, 30], []]
    assert.strictEqual(gridLimit(grid), 3)
  })

  it('should handle grids with mixed negative and positive numbers', () => {
    const grid = [
      [-1, -20, 30],
      [40, 50, -60],
      [-70, 80, 90]
    ]
    assert.strictEqual(gridLimit(grid), 5)
  })
})
