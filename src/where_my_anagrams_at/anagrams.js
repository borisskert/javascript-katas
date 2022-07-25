/**
 * https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
 * @param word the specified word
 * @param words the list of words searching for anagrams
 * @returns all the anagrams from the list to the specified word
 */
function anagrams (word, words) {
  const sortedWord = sortLetters(word)
  return words.filter(x => sortLetters(x) === sortedWord)
}

function sortLetters (word) {
  return word.split('')
    .sort()
    .join('')
}

module.exports = anagrams
