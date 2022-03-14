const chai = require('chai')
const expect = chai.expect

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

const pigIt = require('../../src/simple_pig_latin/pigIt')

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
    Test.assertEquals(pigIt('This is my string'), 'hisTay siay ymay tringsay')
  })
})
