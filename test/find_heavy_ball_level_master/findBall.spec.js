const chai = require('chai')
const findBall = require('../../src/find_heavy_ball_level_master/findBall')
const expect = chai.expect

const Test = {
  assertEquals (actual, expected) {
    expect(actual).to.equal(expected)
  }
}

class Balls {
  constructor (balls) {
    this.balls = [...balls]
  }

  toScale () {
    let calls = 0

    return {
      getWeight: (left, right) => {
        if (calls > 2) {
          throw new Error('Scale is broken')
        }

        calls += 1

        const leftWeight = left.map(i => this.balls[i]).reduce((a, b) => a + b)
        const rightWeight = right.map(i => this.balls[i]).reduce((a, b) => a + b)

        if (leftWeight > rightWeight) {
          return -1
        }
        if (rightWeight > leftWeight) {
          return 1
        }

        return 0
      }
    }
  }
}

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(findBall(new Balls([2, 1, 1, 1, 1, 1, 1, 1]).toScale()), 0)
    Test.assertEquals(findBall(new Balls([1, 2, 1, 1, 1, 1, 1, 1]).toScale()), 1)
    Test.assertEquals(findBall(new Balls([1, 1, 1, 1, 1, 1, 1, 2]).toScale()), 7)
  })
})
