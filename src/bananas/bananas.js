/**
 * https://www.codewars.com/kata/5917fbed9f4056205a00001e/train/javascript
 */
const bananas = function (text) {
  return search([...'banana'], text)
    .flatMap((result) => result.join(''))
}

function search (banana, chars) {
  if (banana.length === 0) return [mask(chars)]
  if (chars.length === 0) return []

  const [bananaHead, ...bananaTail] = banana
  const [charsHead, ...charsTail] = chars

  const omitOne = () => search(banana, charsTail)
    .map((result) => ['-', ...result])

  const takeOne = () => search(bananaTail, charsTail)
    .map((result) => [charsHead, ...result])

  if (bananaHead === charsHead) {
    return [...takeOne(), ...omitOne()]
  }

  return omitOne()
}

function mask (chars) {
  return chars.map(() => '-')
}

module.exports = bananas
