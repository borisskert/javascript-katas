/**
 * https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
 * @param arr an array of items any type
 */
function moveZeros (arr) {
  if (arr.length < 1) {
    return []
  }

  const [head, ...tail] = arr

  if (head === 0) {
    return [...moveZeros(tail), head]
  }

  return [head, ...moveZeros(tail)]
}

module.exports = moveZeros
