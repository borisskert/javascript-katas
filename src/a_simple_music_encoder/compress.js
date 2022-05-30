/**
 * https://www.codewars.com/kata/58db9545facc51e3db00000a/train/javascript
 */
function compress (music) {
  return compressAll(music)
    .map(item => item.format())
    .join(',')
}

const compressAll = (music, items = []) => {
  if (music.length === 0) {
    return items
  }

  if (items.length === 0) {
    const compressed = compressToOne(music)
    return compressAll($(music).drop(compressed.length()), [...items, compressed])
  }

  const lastCompressed = $(items).last()
  const [value] = music

  if (lastCompressed.accept(value)) {
    return compressAll(
      $(music).tail(),
      [...$(items).init(), lastCompressed.append(value)]
    )
  }

  const compressed = compressToOne(music)
  return compressAll($(music).drop(compressed.length()), [...items, compressed])
}

const compressToOne = (music) => {
  return [
    Identical.tryCreateFrom3,
    Consecutive.tryCreateFrom,
    SameInterval.tryCreateFrom,
    Identical.tryCreateFrom2,
    Simple.createFrom
  ].map(tryCreateFrom => tryCreateFrom(music))
    .filter(x => x !== undefined)[0]
}

const $ = (items) => {
  return {
    last: () => {
      return items[items.length - 1]
    },
    init: () => {
      return items.slice(0, items.length - 1)
    },
    tail: () => {
      return items.slice(1)
    },
    drop: (n) => {
      return items.slice(n)
    },
    /**
     * Divides up an input list into a set of sublists, according to {@param n} and {@param m} input specifications
     * you provide. Each sublist will have {@param n} items, and the start of each sublist will be offset by {@param m}
     * items from the previous one.
     * @param n the sublist size
     * @param m the sublist offset
     */
    divvy: (n, m) => {
      return recursivelyDivvy(items, [])

      function recursivelyDivvy (items, split) {
        if (items.length < n) {
          return split
        }

        const taken = items.slice(0, n)
        const remaining = items.slice(m)

        return recursivelyDivvy(remaining, [...split, taken])
      }
    }
  }
}

class Identical {
  constructor (items) {
    this.items = items
  }

  append (item) {
    return new Identical([...this.items, item])
  }

  accept (another) {
    const [item] = this.items
    return item === another
  }

  format () {
    const [item] = this.items
    return `${item}*${this.items.length}`
  }

  length () {
    return this.items.length
  }

  static tryCreateFrom3 (music) {
    const start = music.slice(0, 3)

    if (Identical.allow(start)) {
      return new Identical(start)
    }
  }

  static tryCreateFrom2 (music) {
    const start = music.slice(0, 2)

    if (Identical.allow(start)) {
      return new Identical(start)
    }
  }

  static allow (items) {
    const sorted = [...items].sort()

    return (items.length === 2 || items.length === 3) &&
      sorted[0] === sorted[sorted.length - 1]
  }
}

class Consecutive {
  constructor (items) {
    this.items = items
  }

  append (item) {
    return new Consecutive([...this.items, item])
  }

  accept (another) {
    const last = this.items[this.items.length - 1]
    return Math.abs(another - last) === 1
  }

  format () {
    const head = this.items[0]
    const last = this.items[this.items.length - 1]

    return `${head}-${last}`
  }

  length () {
    return this.items.length
  }

  static tryCreateFrom (music) {
    const start = music.slice(0, 3)

    if (Consecutive.allow(start)) {
      return new Consecutive(start)
    }
  }

  static allow (items) {
    const diffs = $(items).divvy(2, 1)
      .map(([first, second]) => Math.abs(second - first))

    return items.length === 3 &&
      diffs.filter(diff => diff === 1).length === diffs.length
  }
}

class SameInterval {
  constructor (items, interval) {
    this.items = items
    this.interval = interval
  }

  append (another) {
    if (this.interval === undefined) {
      const [item] = this.items
      return new SameInterval([...this.items, another], another - item)
    }

    return new SameInterval([...this.items, another], this.interval)
  }

  accept (another) {
    if (this.interval === undefined) {
      const [item] = this.items
      return another - item > 1
    }

    const last = this.items[this.items.length - 1]
    return (last + this.interval) === another
  }

  format () {
    const head = this.items[0]
    const last = this.items[this.items.length - 1]

    return `${head}-${last}/${Math.abs(this.interval)}`
  }

  length () {
    return this.items.length
  }

  static tryCreateFrom (music) {
    const start = music.slice(0, 3)

    if (SameInterval.allow(start)) {
      return new SameInterval(start, start[1] - start[0])
    }
  }

  static allow (items) {
    const diffs = $(items).divvy(2, 1)
      .map(([first, second]) => second - first)
      .sort()

    return items.length === 3 &&
      diffs[0] === diffs[diffs.length - 1]
  }

  static of (item) {
    return new SameInterval([item], undefined)
  }
}

class Simple {
  constructor (item) {
    this.item = item
  }

  accept () {
    return false
  }

  format () {
    return `${this.item}`
  }

  length () {
    return 1
  }

  static createFrom (music) {
    return new Simple(music[0])
  }
}

module.exports = compress
