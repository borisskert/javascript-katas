/**
 * https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
 */
function rot13 (message) {
  return [...message].map(char => {
    if (isAlpha(char)) {
      return shift(char, rot13Shift)
    }

    return char
  }).join('')
}

function shift (char, count) {
  const offset = isUpperCased(char)
    ? offsetUpperCase
    : offsetLowerCase

  const code = codeOf(char) - offset
  return String.fromCharCode((code + count) % alphabetSize + offset)
}

function isUpperCased (char) {
  return upperCase.test(char)
}

function isAlpha (char) {
  return alpha.test(char)
}

function codeOf (char) {
  return char.charCodeAt(0)
}

const rot13Shift = 13
const alphabetSize = 26
const alpha = /[a-zA-Z]/
const upperCase = /[A-Z]/
const offsetUpperCase = codeOf('A')
const offsetLowerCase = codeOf('a')

module.exports = rot13
