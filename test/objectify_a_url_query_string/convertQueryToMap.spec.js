const chai = require('chai')
const { deepEqual } = chai.assert

const { convertQueryToMap, merge } = require('../../src/objectify_a_url_query_string/convertQueryToMap')

const Test = {
  assertDeepEquals (actual, expected) {
    deepEqual(actual, expected, `expected
      ${JSON.stringify(actual)}
       to deeply equal
      ${JSON.stringify(expected)}`)
  }
}

describe('Tests', () => {
  it('test normal query', () => {
    const q = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'
    const out = {
      user: {
        name: {
          firstname: 'Bob',
          lastname: 'Smith'
        },
        favoritecolor: 'Light Blue'
      }
    }

    Test.assertDeepEquals(convertQueryToMap(q), out)
  })

  it('should handle repeated property names', () => {
    const q = 'user.1.name=Alice&user.2.name=Bob&user.3.name=Charles&user.4.name=Debbie'
    const out = {
      user:
        {
          1: { name: 'Alice' },
          2: { name: 'Bob' },
          3: { name: 'Charles' },
          4: { name: 'Debbie' }
        }
    }

    Test.assertDeepEquals(convertQueryToMap(q), out)
  })

  it('should handle simple parameters', () => {
    const q = 'a=1&b=2'
    const out = { a: '1', b: '2' }

    Test.assertDeepEquals(convertQueryToMap(q), out)
  })

  it('test empty query', () => {
    Test.assertDeepEquals(convertQueryToMap(''), {})
  })

  it('should merge objects', function () {
    Test.assertDeepEquals(merge({ a: 'a' }, { b: 'b' }), { a: 'a', b: 'b' })
    Test.assertDeepEquals(merge({ a: 'a', b: 'a' }, { b: 'b' }), { a: 'a', b: 'b' })
    Test.assertDeepEquals(merge({ b: 'b' }, { a: 'a', b: 'a' }), { a: 'a', b: 'a' })
    Test.assertDeepEquals(merge({ a: 'a', b: { b: 'b', c: 'c' } }, { b: 'b' }), { a: 'a', b: 'b' })
    Test.assertDeepEquals(merge({ b: 'b' }, { a: 'a', b: { b: 'b', c: 'c' } }), { a: 'a', b: { b: 'b', c: 'c' } })
    Test.assertDeepEquals(merge({ b: 'b', c: 'c' }, { a: 'a', b: { b: 'b', c: 'c' } }),
      { a: 'a', b: { b: 'b', c: 'c' }, c: 'c' })
  })
})
