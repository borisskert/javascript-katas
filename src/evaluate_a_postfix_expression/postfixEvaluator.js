/**
 * https://www.codewars.com/kata/577e9095d648a15b800000d4/train/javascript
 */
function postfixEvaluator (string) {
  const tokens = Stack.from(string.split(' '))
  return read(tokens).value()
}

function read (tokens) {
  const top = tokens.top()

  if (operations.isOperator(top)) {
    tokens = tokens.pop()
    const a = read(tokens)

    tokens = tokens.pop(a.length)
    const b = read(tokens)

    return {
      value: () => operations[top](b, a),
      length: a.length + b.length + 1
    }
  } else {
    return {
      value: () => Number.parseInt(top),
      length: 1
    }
  }
}

const operations = {
  '+': (a, b) => a.value() + b.value(),
  '-': (a, b) => a.value() - b.value(),
  '*': (a, b) => a.value() * b.value(),
  '/': (a, b) => Math.floor(a.value() / b.value()),
  isOperator: (token) => ['+', '-', '*', '/'].filter(key => key === token).length > 0
}

class Stack {
  constructor (items) {
    this.items = items
  }

  top () {
    return this.items[this.items.length - 1]
  }

  pop (n = 1) {
    return new Stack(this.items.slice(0, this.items.length - n))
  }

  push (item) {
    return new Stack([...this.items, item])
  }

  static empty () {
    return new Stack([])
  }

  static from (array) {
    return array.reduce(
      (stack, item) => stack.push(item),
      Stack.empty()
    )
  }
}

module.exports = { postfixEvaluator, Stack }
