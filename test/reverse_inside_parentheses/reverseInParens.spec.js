const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold = 0

const { reverseInParens } = require('../../src/reverse_inside_parentheses/reverseInParens')

describe('Static tests', function () {
  it('Simple', function () {
    assert.strictEqual(reverseInParens('h(el)lo'), 'h(le)lo')
    assert.strictEqual(reverseInParens('a ((d e) c b)'), 'a (b c (d e))')
    assert.strictEqual(reverseInParens('one (two (three) four)'), 'one (ruof (three) owt)')
    assert.strictEqual(reverseInParens('one (ruof ((rht)ee) owt)'), 'one (two ((thr)ee) four)')
  })

  it('Odder', function () {
    assert.strictEqual(reverseInParens(''), '')
    assert.strictEqual(reverseInParens('()'), '()')
  })
})
