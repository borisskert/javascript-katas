const Test = require('@codewars/test-compat')
const smallest = require('../../src/find_the_smallest/smallest')

function testing (n, res) {
  Test.assertSimilar(smallest(n), res)
}

describe('Basic tests', function () {
  it('smallest', function () {
    testing(261235, [126235, 2, 0])
    testing(209917, [29917, 0, 1])
    testing(285365, [238565, 3, 1])
    testing(269045, [26945, 3, 0])
    testing(296837, [239687, 4, 1])
    testing(199819884756, [119989884756, 4, 0])
  })
})
