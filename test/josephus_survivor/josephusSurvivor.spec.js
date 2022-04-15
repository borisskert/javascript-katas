const chai = require('chai')
const expect = chai.expect

const josephusSurvivor = require('../../src/josephus_survivor/josephusSurvivor')

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(josephusSurvivor(7, 3), 4)
    Test.assertEquals(josephusSurvivor(11, 19), 10)
    Test.assertEquals(josephusSurvivor(1, 300), 1)
    Test.assertEquals(josephusSurvivor(14, 2), 13)
    Test.assertEquals(josephusSurvivor(100, 1), 100)
  })
})
