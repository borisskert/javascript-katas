const chai = require('chai')
const assert = chai.assert

const tour = require('../../src/help_your_granny/tour')

describe('tour', function () {
  function testing (friends, fTowns, distTable, exp) {
    const actual = tour(friends, fTowns, distTable)
    assert.strictEqual(actual, exp)
  }

  it('Basic tests', function () {
    const friends1 = ['A1', 'A2', 'A3', 'A4', 'A5']
    const fTowns1 = [['A1', 'X1'], ['A2', 'X2'], ['A3', 'X3'], ['A4', 'X4']]
    const distTable1 = ['X1', 100.0, 'X2', 200.0, 'X3', 250.0, 'X4', 300.0]
    testing(friends1, fTowns1, distTable1, 889)
  })
})
