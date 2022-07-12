/**
 * https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
 */
function score (dice) {
  if (dice.length < 1) {
    return 0
  }

  console.log(dice)

  if (dice.length >= 3) {
    const [one, two, three, ...remaining] = dice.sort()

    if ([one, two, three].every(x => x === 1)) {
      return 1000 + score(remaining)
    }

    if ([one, two, three].every(x => x === 6)) {
      return 600 + score(remaining)
    }

    if ([one, two, three].every(x => x === 5)) {
      return 500 + score(remaining)
    }

    if ([one, two, three].every(x => x === 4)) {
      return 400 + score(remaining)
    }

    if ([one, two, three].every(x => x === 3)) {
      return 300 + score(remaining)
    }

    if ([one, two, three].every(x => x === 2)) {
      return 200 + score(remaining)
    }
  }

  const remaining = dice.slice(1)

  if (dice[0] === 1) {
    return 100 + score(remaining)
  }

  if (dice[0] === 5) {
    return 50 + score(remaining)
  }

  return score(remaining)
}

module.exports = score
