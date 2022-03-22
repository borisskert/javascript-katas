/**
 * https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
 * @param arr the directions to be reduced
 * @returns {*} the reduced directions
 */
function dirReduc (arr) {
  const reduced = reduceOnce(arr)

  if (arrayEquals(reduced, arr)) {
    return arr
  }

  return dirReduc(reduced)
}

const reduceOnce = (directions) => {
  if (directions.length < 2) {
    return directions
  }

  const [a, b, ...remaining] = directions

  if (isOpposite(a, b)) {
    return reduceOnce(remaining)
  }

  const reduced = reduceOnce([b, ...remaining])

  return [a, ...reduced]
}

const north = 'NORTH'
const south = 'SOUTH'
const east = 'EAST'
const west = 'WEST'

const isOpposite = (a, b) => {
  return a !== b && (
    (a === north && b === south) ||
    (a === south && b === north) ||
    (a === east && b === west) ||
    (a === west && b === east)
  )
}

const arrayEquals = (xs, ys) => {
  return Array.isArray(xs) &&
    Array.isArray(ys) &&
    xs.length === ys.length &&
    xs.every((x, index) => x === ys[index])
}

module.exports = dirReduc
