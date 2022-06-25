/**
 * https://www.codewars.com/kata/544034f426bc6adda200000e/train/javascript
 */
function findBall (scales) {
  function findHeaviestOf (first, second, third = 0) {
    const oneCompareToTwo = scales.getWeight([first], [second])
    const isOneHeavierThenTwo = oneCompareToTwo === -1
    const isTwoHeavierThenOne = oneCompareToTwo === 1

    return isOneHeavierThenTwo ? first : isTwoHeavierThenOne ? second : third
  }

  const oneTwoThreeCompareToFourFiveSix = scales.getWeight([1, 2, 3], [4, 5, 6])

  if (oneTwoThreeCompareToFourFiveSix === 0) {
    return findHeaviestOf(0, 7)
  }

  if (oneTwoThreeCompareToFourFiveSix === -1) {
    return findHeaviestOf(1, 2, 3)
  }

  if (oneTwoThreeCompareToFourFiveSix === 1) {
    return findHeaviestOf(4, 5, 6)
  }
}

module.exports = findBall
