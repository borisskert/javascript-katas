/**
 * https://www.codewars.com/kata/5e07b5c55654a900230f0229/train/javascript
 */
function reverseInParens (text) {
  return parseLiterals(text)
    .map(x => x.reverseInParens())
    .map(x => x.toString())
    .join('')
}

function parseLiterals (text) {
  if (text.length === 0) {
    return []
  }

  const parsedLiteral = parseParenthesesLiteral(text) || parseTextLiteral(text)

  if (parsedLiteral === undefined || parsedLiteral.length === 0) {
    return []
  }

  return [parsedLiteral, ...parseLiterals(text.slice(parsedLiteral.length))]
}

function parseParenthesesLiteral (text) {
  if (text.head() === '(') {
    const children = parseLiterals(text.tail())
    return makeParenthesesLiteral(children)
  }
}

function parseTextLiteral (textToParse) {
  const textHead = textToParse.head()

  if (textHead !== '(' && textHead !== ')') {
    const text = textToParse.matchGroup(/([^()]+)/g)
    return makeTextLiteral(text)
  }
}

function makeParenthesesLiteral (children) {
  function reverse () {
    const reversedChildren = children
      .map(child => child.reverse())

    return makeParenthesesLiteral(reversedChildren.reversed())
  }

  function reverseInParens () {
    const reversedChildren = children
      .map(child => child.reverseInParens())
      .map(child => child.reverse())

    return makeParenthesesLiteral(reversedChildren.reversed())
  }

  return {
    children,
    length: children.sum(child => child.length) + 2,
    toString: () => {
      return '(' + children.map(child => child.toString()).join('') + ')'
    },
    reverseInParens,
    reverse
  }
}

function makeTextLiteral (text) {
  function reverse () {
    return makeTextLiteral(text.reversed())
  }

  function reverseInParens () {
    return makeTextLiteral(text)
  }

  return {
    text,
    length: text.length,
    toString: () => {
      return text
    },
    reverseInParens,
    reverse
  }
}

/* eslint no-extend-native: ["error", { "exceptions": ["Array", "String"] }] */

Array.prototype.reversed = function () {
  // https://stackoverflow.com/a/30610528/13213024
  return this.slice().reverse()
}

const add = (a, b) => a + b

Array.prototype.sum = function (func = x => x) {
  if (this.length === 0) {
    return 0
  }

  return this.map(func).reduce(add)
}

String.prototype.head = function () {
  return this[0]
}

String.prototype.tail = function () {
  return this.slice(1)
}

String.prototype.matchGroup = function (regex) {
  const matches = this.matchAll(regex)
  const match = matches.next()

  if (match && match.value && match.value.length > 1) {
    return match.value[1]
  }

  return ''
}

String.prototype.reversed = function () {
  return this.split('').reverse().join('')
}

module.exports = { reverseInParens }
