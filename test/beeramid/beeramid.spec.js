const chai = require('chai')
const expect = chai.expect

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

const beeramid = require('../../src/beeramid/beeramid')

describe('fixed tests', () => {
  Test.assertEquals(beeramid(9, 2), 1)
  Test.assertEquals(beeramid(10, 2), 2)
  Test.assertEquals(beeramid(11, 2), 2)
  Test.assertEquals(beeramid(21, 1.5), 3)
  Test.assertEquals(beeramid(454, 5), 5)
  Test.assertEquals(beeramid(455, 5), 6)
  Test.assertEquals(beeramid(4, 4), 1)
  Test.assertEquals(beeramid(3, 4), 0)
  Test.assertEquals(beeramid(0, 4), 0)
  Test.assertEquals(beeramid(-1, 4), 0)
})
