const chai = require('chai')
const score = require('../../src/greed_is_good/score')
const expect = chai.expect

describe('Scorer Function', function () {
  it('should value this as worthless', function () {
    expect(score([2, 3, 4, 6, 2]) === 0, 'Should be 0 :-(')
  })

  it('should value this triplet correctly', function () {
    expect(score([4, 4, 4, 3, 3]) === 400, 'Should be 400')
  })

  it('should value this mixed set correctly', function () {
    expect(score([2, 4, 4, 5, 4]) === 450, 'Should be 450')
  })

  it('should value this as worthless', function () {
    expect(score([2, 3, 4, 6, 2])).to.equal(0)
  })

  it('should value this as worthless', function () {
    expect(score([1, 1, 1, 3, 3])).to.equal(1000)
  })

  it('should value this as worthless', function () {
    expect(score([4, 4, 4, 3, 3])).to.equal(400)
  })

  it('should value this as worthless', function () {
    expect(score([1, 1, 1, 1, 3])).to.equal(1100)
  })
})
