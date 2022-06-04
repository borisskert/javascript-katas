const chai = require('chai')
const assert = chai.assert

const isbnConverter = require('../../src/convert_isbn_10_to_isbn_13/isbnConverter')

describe('Fixed tests', function () {
  it('Basic Test Cases', function () {
    assert.strictEqual(isbnConverter('1-85326-158-0'), '978-1-85326-158-9')
    assert.strictEqual(isbnConverter('0-14-143951-3'), '978-0-14-143951-8')
    assert.strictEqual(isbnConverter('0-02-346450-X'), '978-0-02-346450-8')
    assert.strictEqual(isbnConverter('963-14-2164-3'), '978-963-14-2164-4')
    assert.strictEqual(isbnConverter('1-7982-0894-6'), '978-1-7982-0894-6')
  })
})
