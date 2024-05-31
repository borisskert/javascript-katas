const chai = require('chai')
const assert = chai.assert

// eslint-disable-next-line camelcase
const simple_assembler = require('../../src/simple_assembler_interpreter/simple_assembler')

chai.config.truncateThreshold = 0

describe('Tests', () => {
  it('mov should move value', () => {
    assert.deepEqual(
      simple_assembler(['mov a 5']),
      { a: 5 }
    )
  })

  it('mov should copy value', () => {
    assert.deepEqual(
      simple_assembler(['mov a 5', 'mov b a']),
      { a: 5, b: 5 }
    )
  })

  it('mov should copy zero', () => {
    assert.deepEqual(
      simple_assembler(['mov b a']),
      { b: 0 }
    )
  })

  it('inc should increment value', () => {
    assert.deepEqual(
      simple_assembler(['mov a 5', 'inc a']),
      { a: 6 }
    )
  })

  it('inc should increment value two times', () => {
    assert.deepEqual(
      simple_assembler(['mov a 5', 'inc a', 'inc a']),
      { a: 7 }
    )
  })

  it('inc should increment zero', () => {
    assert.deepEqual(
      simple_assembler(['inc a']),
      { a: 1 }
    )
  })

  it('dec should decrement value', () => {
    assert.deepEqual(
      simple_assembler(['mov a 5', 'dec a']),
      { a: 4 }
    )
  })

  it('dec should decrement value two times', () => {
    assert.deepEqual(
      simple_assembler(['mov a 5', 'dec a', 'dec a']),
      { a: 3 }
    )
  })

  it('dec should decrement zero', () => {
    assert.deepEqual(
      simple_assembler(['dec a']),
      { a: -1 }
    )
  })

  it('jnz should jump', () => {
    assert.deepEqual(
      simple_assembler(['mov a 5', 'jnz a 2', 'inc a']),
      { a: 5 }
    )
  })

  it('jnz should not jump', () => {
    assert.deepEqual(
      simple_assembler(['mov a 0', 'jnz a 2', 'inc a']),
      { a: 1 }
    )
  })

  it('jnz should jump by constant', () => {
    assert.deepEqual(
      simple_assembler(['mov a 5', 'jnz 1 2', 'inc a']),
      { a: 5 }
    )
  })

  it('jnz should not jump by constant', () => {
    assert.deepEqual(
      simple_assembler(['mov a 5', 'jnz 0 2', 'inc a']),
      { a: 6 }
    )
  })

  it('jnz should jump by register value', () => {
    assert.deepEqual(
      simple_assembler(['mov a 5', 'mov b 2', 'jnz b 2', 'inc a']),
      { a: 5, b: 2 }
    )
  })

  it('jnz should not jump by register value', () => {
    assert.deepEqual(
      simple_assembler(['mov a 5', 'mov b 0', 'jnz b 2', 'inc a']),
      { a: 6, b: 0 }
    )
  })

  it('test', () => {
    assert.deepEqual(
      simple_assembler(['mov a 5', 'inc a', 'dec a', 'dec a', 'jnz a -1', 'inc a']),
      { a: 1 }
    )

    assert.deepEqual(
      simple_assembler(['mov a -10', 'mov b a', 'inc a', 'dec b', 'jnz a -2']),
      { a: 0, b: -20 }
    )
  })
})
