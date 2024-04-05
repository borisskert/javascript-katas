/**
 * https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
 */
function firstNonRepeatingLetter (text) {
  const isUniqueIgnoreCase = isUniqueIgnoreCaseWithin(text)

  return text.chars()
    .distinct()
    .first(isUniqueIgnoreCase) || ''
}

function isUniqueIgnoreCaseWithin (text) {
  const lowerCasedText = text.toLowerCase()
  return (char) => lowerCasedText.countOf(char.toLowerCase()) === 1
}

/* eslint no-extend-native: ["error", { "exceptions": ["Array", "String"] }] */

String.prototype.countOf = function (char) {
  return this.split(char).length - 1
}

String.prototype.chars = function () {
  return this.split('')
}

Array.prototype.distinct = function () {
  return this.filter((value, index, self) => self.indexOf(value) === index)
}

Array.prototype.first = function (callbackfn) {
  const filtered = this.filter(callbackfn)
  return filtered.length > 0 ? filtered[0] : null
}

module.exports = firstNonRepeatingLetter
