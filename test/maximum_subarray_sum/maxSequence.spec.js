const chai = require('chai')
const expect = chai.expect

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

const maxSequence = require('../../src/maximum_subarray_sum/maxSequence')

describe('maxSequence', function () {
  it('should work on an empty array', function () {
    Test.assertEquals(maxSequence([]), 0)
  })
  it('should work on the example', function () {
    Test.assertEquals(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)
  })
})
