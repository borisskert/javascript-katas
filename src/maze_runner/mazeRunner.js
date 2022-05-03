/**
 * https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript
 * @param maze as two-dim array
 * @param directions as string array
 * @returns {string|string|*} 'Finish', 'Dead' or 'Lost'
 */
function mazeRunner (maze, directions) {
  const grid = Grid.from(maze)

  function run (position, directions) {
    if (directions.length < 1) {
      return 'Lost'
    }

    const [direction, ...further] = directions

    const nextPosition = move(position, direction)
    const field = grid.get(nextPosition)

    if (field === 1) {
      return 'Dead'
    }

    if (field === 3) {
      return 'Finish'
    }

    return run(nextPosition, further)
  }

  return run(grid.start(), directions)
}

class Grid {
  constructor (map) {
    this.map = map
  }

  get (position) {
    const field = this.map.get(toKey(position))

    if (field === undefined) {
      return 1
    }

    return field
  }

  start () {
    const iterator = this.map.entries()

    let next = iterator.next()
    while (next) {
      const [position, value] = next.value

      if (value === 2) {
        return toPosition(position)
      }

      next = iterator.next()
    }
  }

  static from (maze) {
    const map = maze.reduce((map, line, y) => {
      return line.reduce((map, field, x) => {
        map.set(toKey({ x, y }), field)
        return map
      }, map)
    }, new Map())

    return new Grid(map)
  }
}

const toKey = (position) => {
  return JSON.stringify(position)
}

const toPosition = (json) => {
  return JSON.parse(json)
}

const move = ({ x, y }, direction) => {
  if (direction === 'N') {
    return { x, y: y - 1 }
  }
  if (direction === 'S') {
    return { x, y: y + 1 }
  }
  if (direction === 'E') {
    return { x: x + 1, y }
  }
  if (direction === 'W') {
    return { x: x - 1, y }
  }
}

module.exports = mazeRunner
