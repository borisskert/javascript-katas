const empty = 0
const draw = 0
const notFinished = -1

/**
 * https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript
 */
function isSolved ([
  [northwest, north, northeast],
  [west, center, east],
  [southwest, south, southeast]
]) {
  function rowWinner () {
    if (northwest === north && north === northeast && northwest !== empty) return northwest
    if (west === center && center === east && west !== empty) return west
    if (southwest === south && south === southeast && southwest !== empty) return southwest
  }

  function columnWinner () {
    if (northwest === west && west === southwest && northwest !== empty) return northwest
    if (north === center && center === south && north !== empty) return north
    if (northeast === east && east === southeast && northeast !== empty) return northeast
  }

  function diagonalWinner () {
    if (northwest === center && center === southeast && northwest !== empty) return northwest
    if (northeast === center && center === southwest && northeast !== empty) return northeast
  }

  function containsEmpty () {
    return [
      northwest, north, northeast,
      west, center, east,
      southwest, south, southeast
    ].filter(cell => cell === empty).length > 0
  }

  return rowWinner() || columnWinner() || diagonalWinner() ||
    (containsEmpty() ? notFinished : draw)
}

module.exports = isSolved
