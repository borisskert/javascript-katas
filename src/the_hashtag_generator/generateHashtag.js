/**
 * https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
 */
function generateHashtag (str) {
  if (str === undefined || str.trim().length === 0) {
    return false
  }

  const capitalized = str.split(' ')
    .filter(s => s.length > 0)
    .map(capitalize)
    .join('')

  const hashtag = ['#', ...capitalized].join('')

  if (hashtag.length > 140) {
    return false
  }

  return hashtag
}

const capitalize = ([char, ...str]) => [char.toUpperCase(), ...str].join('')

module.exports = generateHashtag
