/**
 * https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript
 * The constructor takes in an array of items and a integer indicating how many
 * items fit within a single page
 *
 * This kata has to be solved in Node v8.1.3
 * @param collection the items to be split in pages
 * @param itemsPerPage the size of a page
 * @constructor
 */
function PaginationHelper (collection, itemsPerPage) {
  this.collection = collection
  this.itemsPerPage = itemsPerPage
}

/**
 * returns the number of items within the entire collection
 * @returns {number}
 */
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length
}

/**
 * returns the number of pages
 * @returns {number}
 */
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.itemCount() / this.itemsPerPage)
}

/**
 * returns the number of items on the current page. page_index is zero based.
 * this method should return -1 for pageIndex values that are out of range
 * @param pageIndex
 * @returns {number}
 */
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  const pageCount = this.pageCount()

  if (pageIndex < 0 || pageIndex >= pageCount) {
    return -1
  }

  if (pageIndex === pageCount - 1) {
    return this.itemCount() % this.itemsPerPage || this.itemCount()
  }

  return this.itemsPerPage
}

/**
 * determines what page an item is on. Zero based indexes
 * this method should return -1 for itemIndex values that are out of range
 * @param itemIndex
 * @returns {number}
 */
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex < 0 || itemIndex >= this.itemCount()) {
    return -1
  }

  return Math.floor(itemIndex / this.pageItemCount(0))
}

module.exports = PaginationHelper
