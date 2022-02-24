/**
 * https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
 * @param arr array of Integer values
 * @returns {number} the Maximum subarray sum
 */
const maxSequence = (arr) => {
  return arr.reduce(
    ({ current, record }, x) => {
      current = Math.max(current + x, 0)
      record = Math.max(current, record)

      return { current, record }
    },
    { current: 0, record: 0 })
    .record
}

module.exports = maxSequence
