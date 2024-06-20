const { assert, config } = require('chai')
config.truncateThreshold = 0

const listSquared = require('../../src/integers_recreation_one/listSquared')

describe('Testing...', function () {
  it('Basic tests', function () {
    assert.deepEqual(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]])
    assert.deepEqual(listSquared(42, 250), [[42, 2500], [246, 84100]])
    assert.deepEqual(listSquared(250, 500), [[287, 84100]])
  })
})
