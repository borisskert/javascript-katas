/**
 * https://www.codewars.com/kata/5f7a715f6c1f810017c3eb07/train/javascript
 */
const start = (x) => {
  return process(x, [])
}

const end = (stack) => {
  return stack[0]
}

const push = (stack, operations) => {
  const [valueToPush, operation, ...nextOperations] = operations
  return operation([valueToPush, ...stack], nextOperations)
}

const add = (stack, operations) => {
  const [x, y, ...otherValues] = stack
  const [operation, ...nextOperations] = operations

  return operation([x + y, ...otherValues], nextOperations)
}

const sub = (stack, operations) => {
  const [x, y, ...otherValues] = stack
  const [operation, ...nextOperations] = operations

  return operation([x - y, ...otherValues], nextOperations)
}

const mul = (stack, operations) => {
  const [x, y, ...otherValues] = stack
  const [operation, ...nextOperations] = operations

  return operation([x * y, ...otherValues], nextOperations)
}

const div = (stack, operations) => {
  const [x, y, ...otherValues] = stack
  const [operation, ...nextOperations] = operations

  /* https://stackoverflow.com/a/4228528 */
  const quotient = ~~(x / y)

  return operation([quotient, ...otherValues], nextOperations)
}

function process (parameter, operations) {
  if (parameter === end) {
    const [operation, ...nextOperations] = [...operations, end]
    return operation([], nextOperations)
  }

  return (next) => {
    return process(next, [...operations, parameter])
  }
}

module.exports = {
  start, end, push, add, sub, mul, div
}
