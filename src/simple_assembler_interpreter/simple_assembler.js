/**
 * https://www.codewars.com/kata/58e24788e24ddee28e000053/train/javascript
 */
// eslint-disable-next-line camelcase
function simple_assembler (program) {
  const machine = createMachine()
  machine.execute(program)

  return machine.registers
}

function createMachine () {
  return {
    registers: {},
    instructionCounter: 0,
    execute (program) {
      const instructions = parse(program)

      while (this.instructionCounter >= 0 && this.instructionCounter < instructions.length) {
        const instruction = instructions[this.instructionCounter]
        const jump = instruction(this)

        if (jump) {
          this.instructionCounter += jump
        } else {
          this.instructionCounter++
        }
      }
    }
  }
}

function parse (program) {
  return program
    .map((instruction) => instruction.split(' '))
    .map(([operation, ...parameters]) => {
      if (operation === 'mov') {
        return (machine) => {
          const [x, y] = parameters
          machine.registers[x] = Number.parseInt(y, 10) || machine.registers[y] || 0
        }
      }

      if (operation === 'inc') {
        return (machine) => {
          const [x] = parameters
          machine.registers[x] = (machine.registers[x] || 0) + 1
        }
      }

      if (operation === 'dec') {
        return (machine) => {
          const [x] = parameters
          machine.registers[x] = (machine.registers[x] || 0) - 1
        }
      }

      if (operation === 'jnz') {
        return (machine) => {
          const [x, y] = parameters
          const valueX = Number.parseInt(x, 10) || machine.registers[x] || 0

          if (valueX !== 0) {
            return Number.parseInt(y, 10) || machine.registers[y] || 0
          }
        }
      }

      return () => {}
    })
}

// eslint-disable-next-line camelcase
module.exports = simple_assembler
