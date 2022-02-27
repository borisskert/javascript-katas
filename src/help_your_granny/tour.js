/**
 * https://www.codewars.com/kata/5536a85b6ed4ee5a78000035/train/javascript
 * @param friends as array of strings
 * @param fTowns list of associative pairs (friend, town) as two-dim array
 * @param distTable list of key-value pairs as one-dim array
 * @returns {number} our Granny's total distance
 */
function tour (friends, fTowns, distTable) {
  const townMap = List.of(fTowns)
    .toMap(fst, snd)
  const cities = friends.map(friend => townMap[friend])
    .filter(isDefined)
  const distanceMap = List.of(distTable)
    .divvy(2, 2)
    .toMap(fst, snd)
  const distances = List.of(cities)
    .map(city => distanceMap[city])
    .filter(isDefined)

  const totalDistance = distances.divvy(2, 1)
    .map(([a, c]) => oppositeLeg(a, c))
    .sum() + distances.head() + distances.last()

  return floor(totalDistance)
}

/**
 * Wrapper to provide some cool methods to arrays known from Haskell or other functional languages
 */
class List {
  constructor (elements) {
    this.elements = elements
  }

  head () {
    return this.elements[0]
  }

  last () {
    return this.elements[this.elements.length - 1]
  }

  map (mapperFunction) {
    const mapped = this.elements.map(mapperFunction)
    return List.of(mapped)
  }

  filter (filterFunction) {
    const filtered = this.elements.filter(filterFunction)
    return List.of(filtered)
  }

  sum () {
    return this.elements.reduce((sum, x) => sum + x, 0)
  }

  /**
   * Divides up an input list into a set of sublists, according to {@param n} and {@param m} input specifications
   * you provide. Each sublist will have {@param n} items, and the start of each sublist will be offset by {@param m}
   * items from the previous one.
   * @param n the sublist size
   * @param m the sublist offset
   */
  divvy (n, m) {
    const split = recursivelyDivvy(this.elements, [])
    return List.of(split)

    function recursivelyDivvy (array, split) {
      if (array.length < n) {
        return split
      }

      const taken = array.slice(0, n)
      const remaining = array.slice(m)

      return recursivelyDivvy(remaining, [...split, taken])
    }
  }

  toMap (toKey, toValue) {
    return this.elements.map(element => ({ [toKey(element)]: toValue(element) }))
      .reduce(
        (item, obj) => ({ ...obj, ...item }),
        {}
      )
  }

  static of (elements) {
    if (elements === undefined || elements === null) {
      throw new Error('\'elements\' must not be undefined or null')
    }

    return new List(elements)
  }
}

/**
 * Checks if an object is defined (not null or undefined)
 * @param {any} obj the object to check
 * @returns {boolean} `false` if the specified object is `null` or `undefined`
 */
const isDefined = obj => obj !== undefined && obj !== null

/**
 * Returns the first element of an array
 * @param array the array of elements
 */
const fst = array => array[0]

/**
 * Returns the second element of an array
 * @param array the array of elements
 */
const snd = array => array[1]

/**
 * Calculates opposite leg by Pythagorean theorem
 * @param a the adjacent leg [MATH.]
 * @param c the hypotenuse [MATH.]
 * @returns {number} the opposite leg [MATH.]
 */
const oppositeLeg = (a, c) => Math.sqrt(c * c - a * a)

/**
 * Rounds down a floating point number to integer value
 * @param num the floating point number
 * @returns {number} the resulting integer value
 */
const floor = (num) => {
  return parseInt(num, 10)
}

module.exports = tour
