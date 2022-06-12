/**
 * https://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript
 */
const lastDigit = function (str1, str2) {
  if (str2 === '0') {
    return 1
  }

  const base = lastDigitOf(str1)
  const exponent = lastTwoDigitsOf(str2)

  return lastDigitPow(base, exponent) % 10
}

const lastDigitPow = (base, exponent) => {
  if (exponent === 0) {
    return 0
  }

  if (exponent === 1) {
    return base
  }

  const nextBase = (base * base) % 10

  if (exponent % 2 === 0) {
    return lastDigitPow(nextBase, exponent / 2)
  } else {
    return (lastDigitPow(nextBase, Math.floor(exponent / 2)) * base) % 10
  }
}

const lastDigitOf = (string) => {
  const digits = digitsOf(string)
  const digit = digits.slice(-1)

  return Number.parseInt(digit)
}

const lastTwoDigitsOf = (string) => {
  if (string.length <= 2) {
    return Number.parseInt(string)
  }

  const digits = digitsOf(string)
  const [ten, one] = digits.slice(-2)

  return Number.parseInt(ten) * 10 + Number.parseInt(one)
}

const digitsOf = (string) => {
  return string.split('')
    .map(d => Number.parseInt(d))
}

module.exports = { lastDigit, lastDigitPow }
