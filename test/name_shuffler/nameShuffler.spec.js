const chai = require('chai')
const expect = chai.expect

const nameShuffler = require('../../src/name_shuffler/nameShuffler')

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(nameShuffler('john McClane'), 'McClane john')
  })
})
