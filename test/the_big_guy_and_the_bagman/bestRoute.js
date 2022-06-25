const chai = require('chai')
chai.config.truncateThreshold = 0
const bestRoute = require('../../src/the_big_guy_and_the_bagman/bestRoute')

describe('Fixed Tests', () => {
  it('Basic Test Cases', () => {
    chai.assert.deepEqual(bestRoute(['Notgnihsaw', 'Berlin', 'Helsinki'], [[0, 800, 1500], [900, 0, 350], [1200, 650, 0]]), ['Berlin', 'Helsinki', 'Notgnihsaw'])
    chai.assert.deepEqual(bestRoute(['Aleppo', 'Shenyang', 'Notgnihsaw', 'Vienna', 'Buenos Aires'], [[0, 1800, 1250, 1500, 2450], [1400, 0, 1900, 1150, 2000], [1300, 1200, 0, 900, 1450], [3000, 1950, 800, 0, 1700], [2800, 2400, 1650, 2250, 0]]), ['Shenyang', 'Aleppo', 'Vienna', 'Buenos Aires', 'Notgnihsaw'])
  })
})
