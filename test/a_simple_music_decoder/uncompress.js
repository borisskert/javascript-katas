const chai = require('chai')
chai.config.truncateThreshold = 0
const { deepEqual } = chai.assert

const uncompress = require('../../src/a_simple_music_decoder/uncompress')

function test (expected, input) {
  const actual = uncompress(input)
  deepEqual(actual, expected, `for "${input}"\n`)
}

describe('Basic Tests', function () {
  it('2 identical numbers', function () {
    test([1, 2, 2, 3], '1,2*2,3')
  })
  it('3 consecutive numbers, ascending', function () {
    test([1, 3, 4, 5, 7], '1,3-5,7')
  })
  it('3 consecutive numbers, descending', function () {
    test([1, 5, 4, 3, 7], '1,5-3,7')
  })
  it('3 numbers with same interval, descending', function () {
    test([1, 10, 8, 6, 7], '1,10-6/2,7')
  })
})
