const chai = require('chai')
const expect = chai.expect
const incrementString = require('../../src/string_incrementer/incrementString')

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(incrementString('foobar000'), 'foobar001')
    Test.assertEquals(incrementString('foo'), 'foo1')
    Test.assertEquals(incrementString('foobar001'), 'foobar002')
    Test.assertEquals(incrementString('foobar99'), 'foobar100')
    Test.assertEquals(incrementString('foobar099'), 'foobar100')
    Test.assertEquals(incrementString(''), '1')
    Test.assertEquals(incrementString('1'), '2')
  })
})
