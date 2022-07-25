const chai = require('chai')
const PaginationHelper = require('../../src/pagination_helper/paginationHelper')
const expect = chai.expect

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

describe('Solution', function () {
  it('should provide itemCount', function () {
    Test.assertEquals(new PaginationHelper([1, 2, 3, 4, 5], 1).itemCount(), 5)
    Test.assertEquals(new PaginationHelper(['Hello', 'World'], 1).itemCount(), 2)
  })

  it('should provide pageCount', function () {
    Test.assertEquals(new PaginationHelper([1, 2, 3, 4, 5], 5).pageCount(), 1)
    Test.assertEquals(new PaginationHelper([1, 2, 3, 4, 5], 3).pageCount(), 2)
    Test.assertEquals(new PaginationHelper([1, 2, 3, 4, 5], 2).pageCount(), 3)
    Test.assertEquals(new PaginationHelper([1, 2, 3, 4, 5], 1).pageCount(), 5)
  })

  it('should provide pageItemCount', function () {
    Test.assertEquals(new PaginationHelper([1, 2, 3, 4, 5], 5).pageItemCount(0), 5)
    Test.assertEquals(new PaginationHelper([1, 2, 3, 4, 5], 5).pageItemCount(1), -1)
    Test.assertEquals(new PaginationHelper([1, 2, 3, 4, 5], 3).pageItemCount(0), 3)
    Test.assertEquals(new PaginationHelper([1, 2, 3, 4, 5], 3).pageItemCount(1), 2)
    Test.assertEquals(new PaginationHelper([1, 2, 3, 4, 5], 3).pageItemCount(-1), -1)
    Test.assertEquals(new PaginationHelper([], 3).pageItemCount(0), -1)
  })

  it('should provide pageIndex', function () {
    Test.assertEquals(new PaginationHelper([1, 2, 3, 4, 5], 5).pageIndex(0), 0)
    Test.assertEquals(new PaginationHelper([1, 2, 3, 4, 5], 3).pageIndex(0), 0)
    Test.assertEquals(new PaginationHelper([1, 2, 3, 4, 5], 2).pageIndex(3), 1)
    Test.assertEquals(new PaginationHelper([1, 2, 3, 4, 5], 2).pageIndex(8), -1)
    Test.assertEquals(new PaginationHelper([], 5).pageIndex(0), -1)
    Test.assertEquals(new PaginationHelper(['a'], 1).pageIndex(1), -1)
  })

  it('should provide pageIndex for negative itemIndices', function () {
    Test.assertEquals(new PaginationHelper([0], 1).pageIndex(-1), -1)
    Test.assertEquals(new PaginationHelper([0], 1).pageIndex(-2), -1)
    Test.assertEquals(new PaginationHelper([0], 2).pageIndex(-1), -1)
    Test.assertEquals(new PaginationHelper([0, 1], 1).pageIndex(-1), -1)
    Test.assertEquals(new PaginationHelper([0, 1], 2).pageIndex(-1), -1)
    Test.assertEquals(new PaginationHelper([0, 1, 2, 3, 4], 2).pageIndex(-1), -1)
    Test.assertEquals(new PaginationHelper([], 1).pageIndex(-1), -1)
    Test.assertEquals(new PaginationHelper([], 2).pageIndex(-1), -1)
    Test.assertEquals(new PaginationHelper([], 3).pageIndex(-1), -1)
    Test.assertEquals(new PaginationHelper([], 4).pageIndex(-1), -1)
  })
})
