/**
 * https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
 * @param strng the weights as one string (space-separated)
 * @returns {string} weights sorted by custom sorting method
 */
function orderWeight (strng) {
  return strng.split(' ')
    .sort(compareWeights)
    .join(' ')
}

const compareWeights = (a, b) => {
  const sumA = weightSum(a)
  const sumB = weightSum(b)

  if (sumA === sumB) {
    return a.localeCompare(b)
  }

  return sumA - sumB
}

const weightSum = weight => {
  return Array.from(weight)
    .map(c => parseInt(c, 10))
    .reduce((a, b) => a + b)
}

module.exports = orderWeight
