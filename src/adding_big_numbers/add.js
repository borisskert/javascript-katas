/**
 * https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
 * @param a first number as `string`
 * @param b second number as `string`
 * @returns {string} sum of `a` and `b`
 */
function add (a, b) {
  const zero = { carry: 0, digits: [] }
  const { carry, digits } = zipDigits(a, b)
    .reduce(addDigits, zero)

  if (carry) {
    return format([carry, ...digits])
  }

  return format(digits)
}

function addDigits ({ carry, digits }, [a = 0, b = 0]) {
  const sum = a + b + carry

  if (sum >= 20) {
    return { carry: 2, digits: [sum % 20, ...digits] }
  }
  if (sum >= 10) {
    return { carry: 1, digits: [sum % 10, ...digits] }
  }

  return { carry: 0, digits: [sum, ...digits] }
}

function zipDigits (a, b) {
  const digitsA = toDigitsBigEndian(a)
  const digitsB = toDigitsBigEndian(b)

  if (digitsA.length >= digitsB.length) {
    return zip([digitsA, digitsB])
  } else {
    return zip([digitsB, digitsA])
  }
}

function toDigitsBigEndian (string) {
  return string.split('')
    .map(x => Number.parseInt(x, 10))
    .reverse()
}

const zip = (arrays) => {
  const others = arrays.slice(1)
  return arrays[0].map((x, index) => [x, ...others.map(array => array[index])])
}

function format (digits) {
  return digits
    .map(String)
    .join('')
}

module.exports = add
