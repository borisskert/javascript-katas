/**
 * https://www.codewars.com/kata/573992c724fc289553000e95/train/javascript
 */
function smallest (n) {
  const { candidate, i, j } = potentialResults(n)
    .min(({ candidate }) => candidate)

  return [candidate, i, j]
}

function potentialResults (n) {
  const size = length(n)

  return cartesianProduct(size)
    .map(
      ({ i, j }) => {
        const candidate = moveDigit(n, i, j)
        return {
          candidate,
          i,
          j
        }
      }
    )
}

function length (number) {
  return number.toString().length
}

function cartesianProduct (a, b = a) {
  return intRange(0, a)
    .flatMap(
      i => intRange(0, b)
        .map(j => ({ i, j })
        )
    )
}

function toDigits (number) {
  return number.toString()
    .split('')
    .map(Number)
}

function toNumber (digits) {
  return Number(digits.join(''))
}

function moveDigit (number, from, to) {
  const digits = toDigits(number)
  const digit = digits.splice(from, 1)[0]

  digits.splice(to, 0, digit)

  return toNumber(digits)
}

function intRange (start, end) {
  return range(start, x => x < end, x => x + 1)
}

function range (start, hasNext, next) {
  if (!hasNext(start)) {
    return [start]
  }

  return [start, ...range(next(start), hasNext, next)]
}

/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */

Array.prototype.min = function (func = x => x) {
  return this.reduce(
    (prev, curr) =>
      func(curr) < func(prev) ? curr : prev
  )
}

/**
 * Polyfill for flatmap for node 8.x
 */
Array.prototype.flatMap = function (callbackfn) {
  return this
    .map(callbackfn)
    .reduce(
      (acc, curr) => acc.concat(curr), []
    )
}

module.exports = smallest
