/**
 * https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript
 */
function listSquared (m, n) {
  return intRange(m, n)
    .map(x => ({
      number: x,
      divisors: divisors(x)
    }))
    .map(
      ({ number, divisors }) => ({
        number,
        sum: squaredSum(divisors)
      })
    )
    .filter(
      ({ sum }) => isSquare(sum)
    )
    .map(
      ({ number, sum }) => [number, sum]
    )
}

function divisors (n) {
  return intRange(1, Math.sqrt(n))
    .filter(x => n % x === 0)
    .flatMap(x => {
      if (x === n || x * x === n) {
        return x
      } else {
        return [x, n / x]
      }
    })
}

function squaredSum (numbers) {
  return numbers
    .map(x => x * x)
    .reduce((a, b) => a + b, 0)
}

function isSquare (n) {
  return Math.sqrt(n) % 1 === 0
}

function intRange (start, end) {
  return range(start, x => x <= end, x => x + 1)
}

function range (
  start,
  hasNext,
  nextOf
) {
  function * generate () {
    let x = start

    while (hasNext(x)) {
      yield x
      x = nextOf(x)
    }
  }

  let items = []
  const iterator = generate()
  let element = iterator.next()

  while (element !== undefined && element.done === false) {
    items = [...items, element.value]
    element = iterator.next()
  }

  return items
}

module.exports = listSquared
