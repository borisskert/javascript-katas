const chai = require('chai')
const expect = chai.expect

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

const compress = require('../../src/a_simple_music_encoder/compress')

describe('Basic Tests', function () {
  it('2 identical numbers', function () {
    Test.assertEquals(compress([1, 2, 2, 3]), '1,2*2,3')
  })
  it('3 consecutive numbers, ascending', function () {
    Test.assertEquals(compress([1, 3, 4, 5, 7]), '1,3-5,7')
  })
  it('3 consecutive numbers, descending', function () {
    Test.assertEquals(compress([1, 5, 4, 3, 7]), '1,5-3,7')
  })
  it('3 numbers with same interval, descending', function () {
    Test.assertEquals(compress([1, 10, 8, 6, 7]), '1,10-6/2,7')
  })
  it('no compression', function () {
    Test.assertEquals(compress([5, 2, 3, 7, 8]), '5,2,3,7,8')
  })
})

describe('Advanced Tests', function () {
  it('identical + consecutive', function () {
    Test.assertEquals(compress([1, 1, 2, 3, 4, 5, 7, 9]), '1*2,2-5,7,9')
  })
  it('descending from positive to negative 2 by two', function () {
    Test.assertEquals(compress([1, -1, -3, -5]), '1--5/2')
  })
})
