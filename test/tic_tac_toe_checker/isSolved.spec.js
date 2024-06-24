const isSolved = require('../../src/tic_tac_toe_checker/isSolved')
const chai = require('chai')
const expect = chai.expect

describe('Tests', () => {
  it('test', () => {
    expect(
      isSolved([[0, 0, 1],
        [0, 1, 2],
        [2, 1, 0]])
    ).to.equal(-1)
  })

  it('For the following board: [[1,1,1],[0,2,2],[0,0,0]] - Expected: 1', () => {
    expect(
      isSolved([[1, 1, 1],
        [0, 2, 2],
        [0, 0, 0]])
    ).to.equal(1)
  })

  it('For the following board: [[2,1,2],[2,1,1],[1,2,1]] - Expected: 0', () => {
    expect(
      isSolved([[2, 1, 2],
        [2, 1, 1],
        [1, 2, 1]])
    ).to.equal(0)
  })

  it('For the following board: [[1,2,0],[0,1,2],[0,0,1]] - Expected: 1', () => {
    expect(
      isSolved([[1, 2, 0],
        [0, 1, 2],
        [0, 0, 1]])
    ).to.equal(1)
  })

  it('For the following board: [[2,2,2],[0,1,1],[1,0,0]] - Expected: 2', () => {
    expect(
      isSolved([[2, 2, 2],
        [0, 1, 1],
        [1, 0, 0]])
    ).to.equal(2)
  })

  it('For the following board: [[2,1,1],[0,1,1],[2,2,2]] - Expected: 2', () => {
    expect(
      isSolved([[2, 1, 1],
        [0, 1, 1],
        [2, 2, 2]])
    ).to.equal(2)
  })

  it('For the following board: [[1,2,1],[1,1,2],[2,1,2]] - Expected: 0', () => {
    expect(
      isSolved([[1, 2, 1],
        [1, 1, 2],
        [2, 1, 2]])
    ).to.equal(0)
  })

  it('For the following board: [[1,2,1],[1,1,2],[2,2,0]] - Expected: -1', () => {
    expect(
      isSolved([[1, 2, 1],
        [1, 1, 2],
        [2, 2, 0]])
    ).to.equal(-1)
  })

  it('For the following board: [[2,0,2],[2,1,1],[1,2,1]] - Expected: -1', () => {
    expect(
      isSolved([[2, 0, 2],
        [2, 1, 1],
        [1, 2, 1]])
    ).to.equal(-1)
  })
})
