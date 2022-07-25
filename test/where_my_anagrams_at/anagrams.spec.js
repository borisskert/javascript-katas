const assert = require('chai').assert
const anagrams = require('../../src/where_my_anagrams_at/anagrams')

describe('Anagrams', function () {
  it('should return a list of all anagrams', function () {
    assert.deepEqual(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa'])
    assert.deepEqual(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer'])
  })

  it('should return an empty array for no anagrams', function () {
    assert.deepEqual(anagrams('laser', ['lazing', 'lazy', 'lacer']), [])
  })
})
