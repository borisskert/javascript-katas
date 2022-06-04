/**
 * https://www.codewars.com/kata/61ce25e92ca4fb000f689fb0/train/javascript
 */
function isbnConverter (isbn) {
  const isbn10groups = isbn.split('-')
  const isbn13groups = ['978', ...isbn10groups.slice(0, isbn10groups.length - 1)]
  const checkdigit = check(isbn13groups)

  return [...isbn13groups, checkdigit].join('-')
}

function zip (arrays) {
  const others = arrays.slice(1)
  return arrays[0].map((x, index) => [x, ...others.map(array => array[index])])
}

function check (groups) {
  const digits = groups
    .flatMap(group => group.split(''))
    .map(char => Number.parseInt(char, 10))

  const checksum = zip(
    [
      digits,
      [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3]
    ])
    .map(x => x.reduce((a, b) => a * b))
    .reduce((a, b) => a + b) % 10

  if (checksum === 0) {
    return 0
  }

  return 10 - checksum
}

module.exports = isbnConverter
