const chai = require('chai')
const expect = chai.expect

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

const mazeRunner = require('../../src/maze_runner/mazeRunner')

describe('Tests', () => {
  it('test', () => {
    const maze = [[1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 3],
      [1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 2, 1, 0, 1, 0, 1]]

    Test.assertEquals(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E']), 'Finish', 'Expected Finish')
    Test.assertEquals(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'E', 'E', 'N', 'N', 'E']), 'Finish', 'Expected Finish')
    Test.assertEquals(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'W', 'W']), 'Finish', 'Expected Finish')

    Test.assertEquals(mazeRunner(maze, ['N', 'N', 'N', 'W', 'W']), 'Dead', 'Expected Dead')
    Test.assertEquals(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'S', 'S']), 'Dead', 'Expected Dead')

    Test.assertEquals(mazeRunner(maze, ['N', 'E', 'E', 'E', 'E']), 'Lost', 'Expected Lost')
    Test.assertEquals(mazeRunner([
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 2, 1]], ['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S']), 'Lost', 'Expected Lost')
    Test.assertEquals(mazeRunner([
      [0, 0, 1, 0, 2],
      [1, 1, 1, 0, 1],
      [0, 1, 0, 1, 1],
      [1, 1, 3, 0, 1],
      [1, 1, 1, 1, 1]], ['W',
      'E',
      'E',
      'N',
      'E',
      'W',
      'E',
      'S',
      'N',
      'E',
      'S',
      'S',
      'N',
      'N',
      'S',
      'S',
      'N',
      'E',
      'W',
      'N',
      'E',
      'W',
      'E',
      'N',
      'S',
      'S',
      'E',
      'N',
      'E',
      'E',
      'S',
      'W',
      'W',
      'W',
      'S',
      'W',
      'E',
      'E']), 'Dead', 'Expected Dead')
  })
})
