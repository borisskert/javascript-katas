const { assert, config } = require('chai')
config.truncateThreshold = 0

const { start, end, push, add, sub, mul, div } = require('../../src/a_bubbly_programming_language/solution')

describe('Bubbly', () => {
  it('simple addition', () => {
    assert.strictEqual((start)(push)(5)(push)(3)(add)(end), 8)
  })

  it('simple division', () => {
    assert.strictEqual((start)(push)(4)(push)(9)(div)(end), 2)
  })

  it('simple division but with round ceiling', () => {
    assert.strictEqual((start)(push)(-4)(push)(9)(div)(end), -2)
  })

  it('simple multiplication', () => {
    assert.strictEqual((start)(push)(4)(push)(9)(mul)(end), 36)
  })

  it('simple substraction', () => {
    assert.strictEqual((start)(push)(4)(push)(9)(sub)(end), 5)
  })

  it('description examples', () => {
    assert.strictEqual((start)(push)(5)(push)(3)(add)(end), 8)
    assert.strictEqual((start)(push)(2)(push)(5)(div)(push)(3)(push)(8)(mul)(mul)(end), 48)
    assert.strictEqual((start)(push)(4)(push)(9)(div)(end), 2)
    assert.strictEqual((start)(push)(5)(push)(8)(push)(1)(add)(add)(end), 14)
  })

  it('more examples', () => {
    assert.strictEqual((start)(push)(3)(push)(5)(sub)(end), 2)
    assert.strictEqual((start)(push)(8)(push)(9)(push)(3)(mul)(mul)(end), 216)
    assert.strictEqual((start)(push)(1)(push)(1)(add)(push)(2)(add)(end), 4)
  })

  it('special examples', () => {
    assert.strictEqual((start)(push)(2)(push)(5)(div)(push)(3)(push)(8)(mul)(sub)(end), 22)
    assert.strictEqual((start)(push)(2)(push)(5)(div)(push)(3)(push)(8)(mul)(div)(end), 12)
    assert.strictEqual((start)(push)(2)(push)(5)(div)(push)(3)(push)(8)(mul)(add)(end), 26)
  })

  it('random failing test', () => {
    assert.strictEqual((start)(push)(97)(push)(60)(push)(6)(push)(43)(mul)(push)(96)(div)(div)(push)(31)(mul)(sub)(push)(72)(mul)(push)(16)(sub)(push)(47)(push)(7)(div)(sub)(push)(26)(push)(42)(push)(31)(push)(35)(sub)(div)(push)(54)(sub)(div)(push)(97)(push)(60)(push)(73)(push)(64)(div)(push)(57)(push)(99)(sub)(push)(45)(push)(85)(push)(33)(div)(push)(94)(push)(87)(add)(push)(7)(push)(49)(push)(41)(push)(96)(push)(72)(push)(48)(push)(83)(sub)(sub)(sub)(add)(add)(sub)(div)(sub)(mul)(sub)(sub)(sub)(mul)(add)(add)(end), -16892)
  })
  it('random failing test 2', () => {
    assert.strictEqual((start)(push)(70)(push)(71)(push)(91)(push)(92)(add)(push)(78)(push)(82)(push)(41)(mul)(sub)(mul)(push)(25)(push)(38)(push)(28)(mul)(mul)(push)(60)(push)(86)(add)(push)(54)(push)(53)(mul)(push)(8)(push)(20)(push)(32)(add)(push)(48)(push)(33)(push)(73)(mul)(mul)(push)(80)(add)(div)(add)(div)(sub)(push)(44)(mul)(push)(6)(push)(37)(push)(84)(mul)(push)(70)(sub)(sub)(add)(div)(push)(76)(push)(63)(sub)(sub)(div)(add)(add)(end), 141)
  })
})
