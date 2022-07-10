const chai = require('chai')
const {
  seven,
  four,
  eight,
  six,
  dividedBy,
  two,
  three,
  minus,
  plus,
  nine,
  times,
  five, one, zero
} = require('../../src/calculating_with_functions/calculatingWithFunctions')
const expect = chai.expect

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(seven(times(five())), 35)
    Test.assertEquals(four(plus(nine())), 13)
    Test.assertEquals(eight(minus(three())), 5)
    Test.assertEquals(six(dividedBy(two())), 3)
    Test.assertEquals(one(plus(three())), 4)
    Test.assertEquals(five(plus(zero())), 5)
    Test.assertEquals(two(dividedBy(eight())), 0)
  })
})
