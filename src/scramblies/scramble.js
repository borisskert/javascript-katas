/**
 * https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
 * @param str1 the string to be rearranged
 * @param str2 the string to be matched
 * @returns {boolean} `true` if a portion of str1 characters can be rearranged to match str2, otherwise returns `false`
 */
function scramble (str1, str2) {
  return checkIf(str1).canBeRearrangedToMatch(str2)
}

const checkIf = (str1) => {
  const increasedCounters = Array.from(str1)
    .reduce(increase, new Map())

  return {
    canBeRearrangedToMatch: (str2) => {
      const decreasedCounters = Array.from(str2)
        .reduce(decrease, increasedCounters)

      return Array.from(decreasedCounters.values())
        .find((value) => value < 0) === undefined
    }
  }
}

const increase = (counters, c) => {
  const count = counters.get(c) || 0
  counters.set(c, count + 1)

  return counters
}

const decrease = (counters, c) => {
  const count = counters.get(c) || 0
  counters.set(c, count - 1)

  return counters
}

module.exports = scramble
