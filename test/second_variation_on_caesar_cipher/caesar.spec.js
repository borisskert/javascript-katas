const chai = require('chai')
const expect = chai.expect
const { decode, encodeStr } = require('../../src/second_variation_on_caesar_cipher/caesar')

const Test = {
  assertDeepEqual (actual, expected) {
    expect(actual).to.eql(expected)
  }
}

describe('Tests', () => {
  it('test1', () => {
    const u = 'I should have known that you would have a perfect answer for me!!!'
    const v = ['ijJ tipvme ibw', 'f lopxo uibu z', 'pv xpvme ibwf ', 'b qfsgfdu botx', 'fs gps nf!!!']
    Test.assertDeepEqual(decode(v), u)
  })

  it('test1', () => {
    const u = 'O CAPTAIN! my Captain! our fearful trip is done;'
    const v = ['opP DBQUBJ', 'O! nz Dbqu', 'bjo! pvs g', 'fbsgvm usj', 'q jt epof;']
    Test.assertDeepEqual(encodeStr(u, 1), v)
  })
})
