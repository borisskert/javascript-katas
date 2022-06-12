const chai = require('chai')
const expect = chai.expect

const { lastDigit, lastDigitPow } = require('../../src/last_digit_of_a_large_number/lastDigit')

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

describe('lastDigit', function () {
  it('should work for some examples', function () {
    Test.assertEquals(lastDigit('4', '1'), 4)
    Test.assertEquals(lastDigit('4', '2'), 6)
    Test.assertEquals(lastDigit('9', '7'), 9)
    Test.assertEquals(lastDigit('10', '10000000000'), 0)
    Test.assertEquals(lastDigit('1606938044258990275541962092341162602522202993782792835301376', '2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376'), 6)
    Test.assertEquals(lastDigit('3715290469715693021198967285016729344580685479654510946723', '68819615221552997273737174557165657483427362207517952651'), 7)
  })

  it('should work for x ^ 0', function () {
    const randomString = function () {
      let i = Math.floor(Math.random() * 100) + 1
      let str = ''
      while (i-- > 0) {
        str = str + '01234567890'.charAt(Math.floor(Math.random() * 10))
      }
      return str
    }
    let i, r
    for (i = 0; i < 100; ++i) {
      r = lastDigit(randomString(), '0')
      if (i < 1 || r !== 1) {
        Test.assertEquals(r, 1, 'x ^ 0 has 1 as last digit')
        if (r !== 1) {
          return
        }
      }
    }
  })

  it('should calculate fastPow', function () {
    Test.assertEquals(lastDigitPow(3, 251), 7)
    Test.assertEquals(lastDigitPow(7, 2167), 3)
    Test.assertEquals(lastDigitPow(2, 21672), 6)
  })
})
