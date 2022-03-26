const chai = require('chai')
const expect = chai.expect

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

const orderWeight = require('../../src/weight_for_weight/orderWeight')

describe('Order Weights', function () {
  it('Basic tests', function () {
    Test.assertEquals(orderWeight('103 123 4444 99 2000'), '2000 103 123 4444 99')
    Test.assertEquals(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'), '11 11 2000 10003 22 123 1234000 44444444 9999')
  })
})
