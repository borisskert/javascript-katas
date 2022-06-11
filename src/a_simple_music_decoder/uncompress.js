/**
 * https://www.codewars.com/kata/58de42bab4b74c214d0000e2/train/javascript
 */
function uncompress (music) {
  return music.split(',')
    .flatMap(value => inflate(value))
}

function inflate (compressed) {
  return [
    sameInterval(compressed),
    identical(compressed),
    simple(compressed)
  ].find(v => v.accept())
    .inflate()
}

function sameInterval (compressed) {
  const regexp = /^(-?\d+)-(-?\d+)(\/(\d+))?$/
  const DEFAULT_STEP = 1

  const groups = regexp.exec(compressed)

  return {
    accept: () => groups !== null,
    inflate: () => {
      const [, first, second, , third] = groups
      const begin = Number.parseInt(first)
      const end = Number.parseInt(second)
      const sign = signum(end - begin)

      const step = (third ? Number.parseInt(third) : DEFAULT_STEP) * sign

      return range(
        begin,
        (a) => a !== end,
        (a) => a + step)
    }
  }
}

function identical (compressed) {
  const regexp = /^(-?\d+)\*(\d+)$/

  const groups = regexp.exec(compressed)

  return {
    accept: () => groups !== null,
    inflate: () => {
      const [, first, second] = groups
      const value = Number.parseInt(first)
      const count = Number.parseInt(second)

      return arrayOf(value, count)
    }
  }
}

function simple (compressed) {
  const regexp = /^(-?\d+)$/

  const groups = regexp.exec(compressed)

  return {
    accept: () => groups !== null,
    inflate: () => {
      const [, first] = groups
      const value = Number.parseInt(first)

      return [value]
    }
  }
}

/**
 * Creates a number array starting from specified `start` value. The `hasNext` predicate will terminate the array when applying to false
 * @param start the starting value
 * @param hasNext the predicate to check if the end of the array has been reached
 * @param next function to produce the next element
 * @returns a number array
 */
function range (start, hasNext, next) {
  if (!hasNext(start)) {
    return [start]
  }

  return [start, ...range(next(start), hasNext, next)]
}

/**
 * Creates a `n`-sized array containing `value`
 * @param value the only value
 * @param n the array size as number
 * @returns an array
 */
function arrayOf (value, n) {
  if (n <= 0) return []
  return [value, ...arrayOf(value, n - 1)]
}

/**
 * Determine the sign of a number as number value:
 * - `+1` for positive numbers
 * - `-1` for negative numbers
 * - `0` for zero
 * @param x the number to test
 * @returns `+1`, `-1` or `0`
 */
function signum (x) {
  if (x) {
    return x < 0 ? -1 : 1
  }

  return 0
}

module.exports = uncompress
