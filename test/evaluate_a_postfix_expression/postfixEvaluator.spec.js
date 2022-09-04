const chai = require('chai')
const expect = chai.expect

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

const { postfixEvaluator, Stack } = require('../../src/evaluate_a_postfix_expression/postfixEvaluator')

describe('simple addition:', function () {
  it('should test', function () {
    // Test.assertEquals(postfixEvaluator('2 3 +'), 5)
    Test.assertEquals(postfixEvaluator('2 3 9 4 / + *'), 10)
    // Test.assertEquals(postfixEvaluator('4 8 + 6 5 - * 3 2 - 2 2 + * /'), 3)
  })
})

describe('Stack tests', () => {
  let stack

  beforeEach(() => {
    stack = Stack.from(['a', 'b', 'c', 'd'])
  })

  it('should top', function () {
    Test.assertEquals(stack.top(), 'd')
  })

  it('should pop', function () {
    Test.assertEquals(stack.pop().top(), 'c')
  })

  it('should pop 2', function () {
    Test.assertEquals(stack.pop().pop().top(), 'b')
  })

  it('should pop 3', function () {
    Test.assertEquals(stack.pop().pop().pop().top(), 'a')
  })
})
