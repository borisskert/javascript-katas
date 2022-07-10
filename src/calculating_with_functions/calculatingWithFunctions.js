/*
 * https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
 */

const num = (x) => (fn) => fn ? fn(x) : x

const zero = num(0)
const one = num(1)
const two = num(2)
const three = num(3)
const four = num(4)
const five = num(5)
const six = num(6)
const seven = num(7)
const eight = num(8)
const nine = num(9)

const plus = (y) => (x) => x + y
const minus = (y) => (x) => x - y
const times = (y) => (x) => x * y
const dividedBy = (y) => (x) => Math.floor(x / y)

module.exports = {
  zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy
}
