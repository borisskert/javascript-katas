/**
 * https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/javascript
 */
const beeramid = function (bonus, price) {
  if (bonus < 0) {
    return 0
  }

  const amount = Math.floor(bonus / price)

  function find (x = 0, sum = 0) {
    const nextSum = sum + x * x

    if (nextSum > amount) {
      return x - 1
    }

    return find(x + 1, nextSum)
  }

  return find()
}

module.exports = beeramid
