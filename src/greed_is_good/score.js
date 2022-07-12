/**
 * https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
 */
function score (dice) {
  if (dice.length < 1) {
    return 0
  }

  const { remaining, points } = rules
    .map(rule => rule(dice))
    .find(rule => rule.matches(dice.sort()))

  return points + score(remaining())
}

const rules = [
  threeOf(1, 1000),
  threeOf(6, 600),
  threeOf(5, 500),
  threeOf(4, 400),
  threeOf(3, 300),
  threeOf(2, 200),
  oneOf(1, 100),
  oneOf(5, 50),
  fallback()
]

function threeOf (value, points) {
  return (dice) => ({
    matches: () => dice.length >= 3 && dice.slice(0, 3).every(x => x === value),
    remaining: () => dice.slice(3),
    points
  })
}

function oneOf (value, points) {
  return (dice) => ({
    matches: () => dice.length >= 1 && dice[0] === value,
    remaining: () => dice.slice(1),
    points
  })
}

function fallback () {
  return (dice) => ({
    matches: () => true,
    remaining: () => dice.slice(1),
    points: 0
  })
}

module.exports = score
