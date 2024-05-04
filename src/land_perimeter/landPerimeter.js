/**
 * https://www.codewars.com/kata/5839c48f0cf94640a20001d3/train/javascript
 */
function landPerimeter (arr) {
  const land = Land.readFrom(arr)
  const perimeter = land.perimeter()

  return `Total land perimeter: ${perimeter}`
}

class Land {
  constructor (points) {
    this.points = points
  }

  perimeter () {
    const perimeterForPoint = ({ x, y }) => {
      return [
        this.points.isMissing({ x: x + 1, y }),
        this.points.isMissing({ x: x - 1, y }),
        this.points.isMissing({ x, y: y + 1 }),
        this.points.isMissing({ x, y: y - 1 })
      ].reduce((acc, curr) => acc + curr, 0)
    }

    return this.points.toArray()
      .map(perimeterForPoint)
      .sum()
  }

  static readFrom (array) {
    const isLand = cell => cell === 'X'

    const mapPoint = y => (cell, x) => isLand(cell)
      ? { x, y }
      : undefined

    const mapRow = (row, y) => row.split('')
      .map(mapPoint(y))
      .filter(point => point !== undefined)

    const points = array.flatMap(mapRow)

    return new Land(JSONSet.from(points))
  }
}

/*
  * JSONSet is a Set that uses JSON.stringify to compare objects
 */
class JSONSet extends Set {
  has (value) {
    return super.has(JSON.stringify(value))
  }

  isMissing (value) {
    return !this.has(value)
  }

  toArray () {
    return Array.from(this)
      .map(JSON.parse)
  }

  static from (array) {
    return new JSONSet(array.map(JSON.stringify))
  }
}

/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */

Array.prototype.sum = function () {
  return this.reduce((acc, curr) => acc + curr, 0)
}

/**
 * Polyfill for flatmap for node 8.x
 */
Array.prototype.flatMap = function (callbackfn) {
  return this.map(callbackfn).flatten()
}

Array.prototype.flatten = function () {
  return this.reduce((acc, curr) => acc.concat(curr), [])
}

module.exports = landPerimeter
