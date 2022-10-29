const assert = require('chai').assert

const stockList = require('../../src/help_the_bookseller/stockList')

describe('Tests', () => {
  it('test1', () => {
    const b = ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600']
    const c = ['A', 'B', 'C', 'D']
    const res = '(A : 0) - (B : 1290) - (C : 515) - (D : 600)'

    assert.strictEqual(stockList(b, c), res)
  })

  it('test2', () => {
    const b = ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600']
    const c = ['A', 'B']
    const res = '(A : 200) - (B : 1140)'

    assert.strictEqual(stockList(b, c), res)
  })

  it('testEmpty', () => {
    const b = []
    const c = ['A', 'B']
    const res = ''

    assert.strictEqual(stockList(b, c), res)
  })
})
