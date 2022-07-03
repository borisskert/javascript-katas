/**
 * https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
 */
function incrementString (strng) {
  const { text, counter } = parse(strng)
  return `${text}${increment(counter)}`
}

function parse (strng) {
  const regex = /(?<text>.*[a-zA-Z])?(?<counter>\d+)?/
  const match = regex.exec(strng)

  if (match) {
    const text = match.groups.text || ''
    const counter = match.groups.counter || '0'

    return {
      text, counter
    }
  }

  return {
    text: '',
    counter: '0'
  }
}

function increment (counter) {
  const incremented = Number.parseInt(counter) + 1
  return String(incremented).padStart(counter.length, '0')
}

module.exports = incrementString
