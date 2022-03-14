/**
 * https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
 * @param str the sentence input
 */
function pigIt (str) {
  return str.split(' ')
    .map(toPigLatin)
    .join(' ')
}

const toPigLatin = (word) => {
  if (isPunctuation(word)) {
    return word
  }

  const [head, ...tail] = Array.from(word)

  return `${tail.join('')}${head}ay`
}

const isPunctuation = (word) => {
  const pattern = /[!.,?]/
  return word.match(pattern)
}

module.exports = pigIt
