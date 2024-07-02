const Test = require('@codewars/test-compat')

const bananas = require('../../src/bananas/bananas')

describe('ExampleTests', function () {
  // common test code
  const doTest = function (input, expected, actual) {
    console.log(`INPUT: ${input}`)
    console.log(`EXPECTED: ${expected}`)
    console.log(`ACTUAL: ${actual}`)
    Test.assertEquals(actual.length, expected.length, 'wrong number of bananas!')
    for (const e of expected) {
      if (!actual.includes(e)) {
        console.log(`ACTUAL: ${actual}`)
        Test.fail('banana mismatch!')
      }
    } // for
  }

  it('ex0', function () {
    const input = 'banann'
    const expected = []
    const actual = bananas(input)
    doTest(input, expected, actual)
  })

  it('ex1', function () {
    const input = 'banana'
    const expected = ['banana']
    const actual = bananas(input)
    doTest(input, expected, actual)
  })

  it('ex1a', function () {
    const input = 'bananaa'
    const expected = ['banana-', 'banan-a']
    const actual = bananas(input)
    doTest(input, expected, actual)
  })

  it('ex1b', function () {
    const input = 'bananab'
    const expected = ['banana-']
    const actual = bananas(input)
    doTest(input, expected, actual)
  })

  it('ex1c', function () {
    const input = 'bananaaa'
    const expected = ['banana--', 'banan-a-', 'banan--a']
    const actual = bananas(input)
    doTest(input, expected, actual)
  })

  it('ex2', function () {
    const input = 'bbananana'
    const expected = [
      'b-an--ana', '-banana--', '-b--anana', 'b-a--nana', '-banan--a',
      'b-ana--na', 'b---anana', '-bana--na', '-ba--nana', 'b-anan--a',
      '-ban--ana', 'b-anana--']
    const actual = bananas(input)
    doTest(input, expected, actual)
  })

  it('ex3', function () {
    const input = 'bananaaa'
    const expected = ['banan-a-', 'banana--', 'banan--a']
    const actual = bananas(input)
    doTest(input, expected, actual)
  })

  it('ex4', function () {
    const input = 'bananana'
    const expected = [
      'ban--ana', 'ba--nana', 'bana--na', 'b--anana', 'banana--',
      'banan--a']
    const actual = bananas(input)
    doTest(input, expected, actual)
  })
})
