/**
 * https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript
 */
function nameShuffler (str) {
  const [firstname, lastname] = str.split(' ')
  return [lastname, firstname].join(' ')
}

module.exports = nameShuffler
